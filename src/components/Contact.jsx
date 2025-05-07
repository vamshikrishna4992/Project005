import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        console.error(error.text);
        alert("Something went wrong. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
        <input type="text" name="user_name" placeholder="Your Name" required className="w-full px-4 py-2 border rounded" />
        <input type="email" name="user_email" placeholder="Your Email" required className="w-full px-4 py-2 border rounded" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="w-full px-4 py-2 border rounded"></textarea>
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-accent transition">Send</button>
      </form>
    </section>
  );
};

export default Contact;
