
"use client";

import { useState } from "react";
import { Section } from "@/components";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:farellreyhanpradana@example.com?subject=Contact from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message)}%0D%0AFrom: ${encodeURIComponent(
      form.email
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact" className="max-w-sm md:max-w-xl lg:max-w-3xl mx-auto flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold mb-6 text-dark-0 dark:text-light-0 pb-2 text-center">
        Contact
      </h2>
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full px-4 py-3 border border-dark-1/40 dark:border-light-1/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-light-1 dark:bg-dark-1 shadow-sm"
          />
          <label
            htmlFor="name"
            className="absolute left-4 -top-3 px-1 text-dark-1/40 dark:text-light-1/40 text-sm bg-light-1 dark:bg-dark-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-1/40 dark:peer-placeholder-shown:text-light-1/40 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary dark:peer-focus:text-primary"
          >
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder=" "
            className="peer w-full px-4 py-3 border border-dark-1/40 dark:border-light-1/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-light-1 dark:bg-dark-1 shadow-sm"
          />
          <label
            htmlFor="email"
            className="absolute left-4 -top-3 px-1 text-dark-1/40 dark:text-light-1/40 text-sm bg-light-1 dark:bg-dark-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-1/40 dark:peer-placeholder-shown:text-light-1/40 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary dark:peer-focus:text-primary"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="6"
            placeholder=" "
            className="peer w-full px-4 py-3 border border-dark-1/40 dark:border-light-1/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-light-1 dark:bg-dark-1 shadow-sm resize-none"
          />
          <label
            htmlFor="message"
            className="absolute left-4 -top-3 px-1 text-dark-1/40 dark:text-light-1/40 text-sm bg-light-1 dark:bg-dark-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark-1/40 dark:peer-placeholder-shown:text-light-1/40 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary dark:peer-focus:text-primary"
          >
            Message
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 hover:-translate-y-2 text-primary hover:text-light-0 font-semibold hover:bg-primary border-2 border-primary rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Send
        </button>
      </form>
    </Section>
  );
};

export { Contact };
