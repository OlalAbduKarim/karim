import React, { useState } from 'react';
import { motion } from 'motion/react';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 bg-dark-blue text-white overflow-hidden" aria-labelledby="contact-heading">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-5/12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-accent-teal font-mono text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Direct Line</span>
                            <h2 id="contact-heading" className="text-4xl md:text-6xl font-bold mb-8 font-inter tracking-tighter leading-none">
                                Ready to scale your <span className="text-accent-teal italic">intelligence?</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                                I am currently open to strategic partnerships, full-time opportunities, and high-impact consultancy projects. Let's discuss how data precision can solve your business problems.
                            </p>
                            
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Electronic Mail</p>
                                        <a href="mailto:olalabdukarim@gmail.com" className="text-lg font-bold hover:text-accent-teal transition-colors">olalabdukarim@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">Direct Dial</p>
                                        <div className="flex flex-col">
                                            <span className="text-lg font-bold">+256 764 384 080</span>
                                            <span className="text-lg font-bold">+256 759 705 328</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-7/12">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/10 relative"
                        >
                            {isSubmitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-20"
                                >
                                    <div className="w-20 h-20 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-8">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4 font-inter">Transmission Received</h3>
                                    <p className="text-gray-400">Thank you for your message. I will respond to your inquiry within 24 business hours.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Identity</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                required
                                                placeholder="Your Full Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-accent-teal outline-none transition-colors placeholder:text-white/10"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-500">Coordinate</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                required
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-accent-teal outline-none transition-colors placeholder:text-white/10"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Directive</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            required
                                            placeholder="What problem can we solve together?"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-4 text-xl focus:border-accent-teal outline-none transition-all placeholder:text-white/10 resize-none"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="group relative inline-flex items-center justify-center py-5 px-12 font-bold text-white transition-all duration-300 bg-accent-teal rounded-2xl hover:bg-opacity-90 overflow-hidden"
                                    >
                                        <span className="relative z-10">Initialize Connection</span>
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
