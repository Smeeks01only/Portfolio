import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// ─── EmailJS Configuration ──────────────────────────────────
// Replace these with your real IDs from https://www.emailjs.com
const EMAILJS_SERVICE_ID = "service_e9cqcuq";
const EMAILJS_TEMPLATE_ID = "template_g2bmrjy";
const EMAILJS_PUBLIC_KEY = "y0We9rPcWmbi9LYC6";
// ─────────────────────────────────────────────────────────────

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.from_name.trim()) newErrors.from_name = "Name is required";
    if (!formData.from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");
    setErrors({});

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ from_name: "", from_email: "", message: "" });

      // Reset success state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");

      // Reset error state after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-[120px] bg-bg-light font-sans max-[768px]:py-[80px] max-[768px]:px-5">
      <div className="w-full max-w-[700px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-primary-color font-mono text-base mb-5 block">
            04. What's Next?
          </p>
          <h2 className="text-[3rem] text-text-light font-extrabold mb-4 max-[768px]:text-[2.2rem]">
            Get In Touch
          </h2>
          <p className="text-text-dim text-[1.1rem] leading-[1.6] max-w-[500px] mx-auto">
            I am currently looking for remote opportunities in software
            engineering. Whether you have a question or just want to say hi, my
            inbox is always open!
          </p>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100"
          noValidate
        >
          {/* Hidden field for EmailJS Reply-To header */}
          <input type="hidden" name="reply_to" value={formData.from_email} />

          {/* Name Field */}
          <div className="mb-5">
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-text-light mb-2"
            >
              Name
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <PersonOutlineOutlinedIcon fontSize="small" />
              </div>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Your name"
                className={`w-full pl-11 pr-4 py-3 rounded-lg border bg-bg-light text-text-light text-[0.95rem] font-sans placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-primary-color focus:ring-2 focus:ring-primary-color/20 ${
                  errors.from_name ? "border-red-400" : "border-gray-200"
                }`}
              />
            </div>
            {errors.from_name && (
              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                <ErrorOutlineIcon style={{ fontSize: 14 }} />
                {errors.from_name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label
              htmlFor="from_email"
              className="block text-sm font-medium text-text-light mb-2"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
                <EmailOutlinedIcon fontSize="small" />
              </div>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full pl-11 pr-4 py-3 rounded-lg border bg-bg-light text-text-light text-[0.95rem] font-sans placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-primary-color focus:ring-2 focus:ring-primary-color/20 ${
                  errors.from_email ? "border-red-400" : "border-gray-200"
                }`}
              />
            </div>
            {errors.from_email && (
              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                <ErrorOutlineIcon style={{ fontSize: 14 }} />
                {errors.from_email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-light mb-2"
            >
              Message
            </label>
            <div className="relative">
              <div className="absolute left-3.5 top-3.5 text-gray-400">
                <ChatBubbleOutlineOutlinedIcon fontSize="small" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Tinashe, I'd like to talk about..."
                rows={5}
                className={`w-full pl-11 pr-4 py-3 rounded-lg border bg-bg-light text-text-light text-[0.95rem] font-sans placeholder:text-gray-400 outline-none transition-all duration-200 resize-none focus:border-primary-color focus:ring-2 focus:ring-primary-color/20 ${
                  errors.message ? "border-red-400" : "border-gray-200"
                }`}
              />
            </div>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                <ErrorOutlineIcon style={{ fontSize: 14 }} />
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full py-3.5 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 no-underline ${
              status === "sending"
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primary-color text-white hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
            }`}
          >
            {status === "sending" ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <SendOutlinedIcon fontSize="small" />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm flex items-center gap-2 animate-fadeIn">
              <CheckCircleOutlineIcon fontSize="small" />
              Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2 animate-fadeIn">
              <ErrorOutlineIcon fontSize="small" />
              Something went wrong. Please try again or email me directly at{" "}
              <a
                href="mailto:sirbasil.1000@gmail.com"
                className="underline text-red-700 font-medium"
              >
                sirbasil.1000@gmail.com
              </a>
            </div>
          )}
        </form>

        {/* Availability Indicator */}
        <div className="flex items-center justify-center gap-2.5 text-text-dim text-[0.9rem] mt-8">
          <span className="w-2.5 h-2.5 bg-primary-color rounded-full shadow-[0_0_10px_theme('colors.primary-color')]"></span>
          <span>Available for freelance & full-time roles</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
