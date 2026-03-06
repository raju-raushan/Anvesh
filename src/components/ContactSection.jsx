import { useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus('Message sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (_error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-slate-900/40 py-16">
      <div className="section-wrap">
        <SectionHeading title="Ask Us" subtitle="Have a question? Reach organizers instantly." />
        <form onSubmit={handleSubmit} className="glass mx-auto max-w-2xl space-y-4 p-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full rounded-lg border border-white/20 bg-slate-950/60 p-3 outline-none focus:border-cyan-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full rounded-lg border border-white/20 bg-slate-950/60 p-3 outline-none focus:border-cyan-300"
          />
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className="w-full rounded-lg border border-white/20 bg-slate-950/60 p-3 outline-none focus:border-cyan-300"
          />
          <button type="submit" className="rounded-full bg-ieeeBlue px-6 py-3 font-semibold transition hover:bg-cyan-600">
            Send Message
          </button>
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
