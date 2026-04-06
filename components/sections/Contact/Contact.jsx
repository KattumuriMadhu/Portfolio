"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";

export function Contact() {
    // Removed formState to prevent re-renders on every keystroke (Fixes typing lag)
    const [status, setStatus] = useState("idle"); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const form = e.currentTarget;
            const now = new Date();
            const timestamp = now.toLocaleString();

            ['timestamp', 'time', 'date'].forEach(name => {
                let input = form.querySelector(`input[name='${name}']`);
                if (!input) {
                    input = document.createElement("input");
                    input.type = "hidden";
                    input.name = name;
                    form.appendChild(input);
                }
                input.value = name === 'date' ? now.toLocaleDateString() :
                    name === 'time' ? now.toLocaleTimeString() :
                        timestamp;
            });

            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setStatus("success");
            e.target.reset(); // Native form reset
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    transition={{ duration: 0.8 }}
                >
                    Get in <span>Touch</span>
                </motion.h2>

                <motion.div
                    className={styles.contactCard}
                    transition={{ duration: 0.6 }}
                >
                    {/* Left Panel: Contact Info */}
                    <div className={styles.leftPanel}>
                        <div>
                            <h3>Let's Chat</h3>
                            <p className={styles.description}>
                                Whether you have a question, want to start a project, or simply want to connect.
                            </p>
                        </div>

                        <div className={styles.contactItems}>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <Mail size={20} />
                                </div>
                                <span>kattumurimadhu@gmail.com</span>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <Phone size={20} />
                                </div>
                                <span suppressHydrationWarning>{process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 XXXXX XXXXX"}</span>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconBox}>
                                    <MapPin size={20} />
                                </div>
                                <span>Visakhapatnam, Andhra Pradesh</span>
                            </div>
                        </div>

                        {/* Decorational Circle */}
                        <div className={styles.circle1}></div>
                        <div className={styles.circle2}></div>
                    </div>

                    {/* Right Panel: Form */}
                    <div className={styles.rightPanel}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder=" "
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                                <label htmlFor="name">Your Name</label>
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder=" "
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                                <label htmlFor="email">Your Email</label>
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder=" "
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                                <label htmlFor="subject">Subject</label>
                            </div>
                            <div className={styles.formGroup}>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder=" "
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                                <label htmlFor="phone">Phone Number (Optional)</label>
                            </div>
                            <div className={styles.formGroup}>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder=" "
                                    autoComplete="off"
                                    spellCheck="false"
                                ></textarea>
                                <label htmlFor="message">Your Message</label>
                            </div>

                            <button
                                type="submit"
                                className={styles.submitBtn}
                                disabled={status === "sending"}
                            >
                                {status === "sending" ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <p className={styles.successMessage}>
                                    Message sent successfully! I'll get back to you soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p className={styles.errorMessage}>
                                    Something went wrong. Please try again or email me directly.
                                </p>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
