import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const form = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iecx7bs",
        "template_gxowv54",
        form.current,
        "_zI2TlKJKHsa2PVyC"
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Oops! Something went wrong. Check Console.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-gray-900 text-white"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="reply_to"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information Section */}
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <a
                  href="mailto:roknujjamanrony1234@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  roknujjamanrony1234@gmail.com
                </a>
              </p>

              <p className="flex items-center justify-center gap-2">
                <FaPhone className="text-green-400" />
                <a
                  href="tel:+8801314267382"
                  className="hover:text-green-400 transition"
                >
                  +8801314267382
                </a>
              </p>

              <p className="flex items-center justify-center gap-2">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/+8801314267382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition"
                >
                  WhatsApp: +8801314267382
                </a>
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
