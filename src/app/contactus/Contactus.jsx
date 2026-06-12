"use client";

import { useState, useCallback, useRef } from "react";

import { CONTACT_INFO } from "../_constants/Constants";

const INITIAL_FORM = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

function ContactUsPage() {
  const formRef = useRef(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.default.sendForm(
        "service_brsepc8",
        "template_i04egtr",
        formRef.current,
        "sSSy9xAUC4NQoNAxd",
      );
      console.log("✅ Sent successfully!");
      setLoading(false);
      setSubmitted(true);
      formRef.current.reset();
      setForm(INITIAL_FORM);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Failed to send message ❌");
    }
  }, []);

  const handleReset = useCallback(() => {
    setForm(INITIAL_FORM);
    setSubmitted(false);
  }, []);

  return (
    <section
      className="flex flex-col justify-evenly gap-10 items-center px-[5vw] 2xl:px-[8vw] xl:px-[6vw] max-lg:py-20 w-full py-40 min-h-screen text-(--color-offWhite) bg-(--primary-dark)"
      id="contact"
    >
      <div className="space-y-6 text-center gap-6 flex flex-col">

        <div className="m-auto w-fit">
          <h1 className="inline-block font-bold text-3xl md:text-4xl lg:text-5xl">
            Contact Biafo
          </h1>
        </div>

        <div className="m-auto w-fit">
          <h1 className="text-(--color-cyan)  text-2xl md:text-3xl lg:text-4xl">
            Get in Touch
          </h1>
        </div>
        <div className="m-auto w-fit text-center px-10 text-(--color-gray) lg:text-xl max-md:text-center">
          <p>Whether you’re a healthcare provider, researcher, investor, or partner, we’d love to hear from you. Reach out to learn more about the platform, explore partnerships, or request early access. </p>
          <p className="mt-2 font-medium text-xl text-(--color-cyan)">For partnerships, data collaboration, and platform access inquiries</p>
        </div>
      </div>
      <div className="mx-auto w-full mt-10">
        {/* Main Grid */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-5">
          {/* LEFT — Contact Info */}
          <div className="flex flex-col gap-4 lg:col-span-2 justify-center">
            <h3 className="md:font-medium md:text-xl text-(--color-cyan) text-center">
              CONTACT DETAILS
            </h3>




            {CONTACT_INFO.map((info) => (
              <div
                key={info.id}
                className="flex items-start gap-4 bg-(--primary-dark)/50 px-6 py-5 border border-(--color-cyan)/50 hover:border-(--color-cyan) rounded-2xl transition-all duration-300"
              >
                <div className="flex justify-center items-center bg-(--primary-light) mt-0.5 p-2.5 rounded-xl text-(--color-cyan) shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="mb-0.5 font-semibold text-white/40 text-xs uppercase tracking-widest">
                    {info.label}
                  </p>

                  <p className="font-semibold text-white text-sm">
                    {info.value}
                  </p>

                  <p className="mt-0.5 text-white/40 text-xs">{info?.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3">
            <div className="bg-(--primary-dark)/50  p-8 border border-(--color-cyan)/50 hover:border-(--color-cyan) rounded-4xl h-full transition-all duration-300">
              {/* Success State */}
              {submitted ? (
                <div className="flex flex-col justify-center items-center gap-4 py-10 h-full text-center">
                  <div className="flex justify-center items-center bg-(--color-light) border border-(--color-highlight)/20 rounded-full w-16 h-16">
                    <svg
                      className="w-7 h-7 text-(--color-highlight)"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>

                  <h3 className="font-bold text-white text-xl">
                    Message Sent!
                  </h3>

                  <p className="max-w-xs text-white/50 text-sm">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>

                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 border border-white/15 hover:border-white/30 rounded-full font-medium text-white/60 hover:text-white text-sm transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  {/* Row 1: First Name + Last Name */}
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-xs uppercase tracking-widest">
                        First Name
                      </label>

                      <input
                        type="text"
                        name="from_name"
                        value={form.from_name}
                        onChange={handleChange}
                        placeholder="First name"
                        required
                        className="bg-(--color-secondary-btn) px-4 py-3 border-2 border-(--color-gray)/20 focus:border-(--color-cyan) rounded-xl outline-none  placeholder:text-(--color-gray)/80 text-sm transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-xs uppercase tracking-widest">
                        Last Name
                      </label>

                      <input
                        type="text"
                        name="last_name"
                        value={form.last_name}
                        onChange={handleChange}
                        placeholder="Last name"
                        required
                        className="bg-(--color-secondary-btn) px-4 py-3 border-2 border-(--color-gray)/20 focus:border-(--color-cyan) rounded-xl outline-none  placeholder:text-(--color-gray)/80 text-sm transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-xs uppercase tracking-widest">
                        Email
                      </label>

                      <input
                        type="email"
                        name="from_email"
                        value={form.from_email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="bg-(--color-secondary-btn) px-4 py-3 border-2 border-(--color-gray)/20 focus:border-(--color-cyan) rounded-xl outline-none  placeholder:text-(--color-gray)/80 text-sm transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-xs uppercase tracking-widest">
                        Phone
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="bg-(--color-secondary-btn) px-4 py-3 border-2 border-(--color-gray)/20 focus:border-(--color-cyan) rounded-xl outline-none  placeholder:text-(--color-gray)/80 text-sm transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Row 3: Preferred Contact Method (full width) */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-xs uppercase tracking-widest">
                      Preferred Contact Method
                    </label>

                    <select
                      name="contact_method"
                      value={form.contact_method}
                      onChange={handleChange}
                      className="bg-(--color-secondary-btn) px-4 py-3 border-2 border-(--color-gray)/20 focus:border-(--color-cyan) rounded-xl outline-none  text-sm transition-colors duration-200 appearance-none cursor-pointer"
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled className="bg-slate-900">
                        Select preference
                      </option>
                      <option value="Email" className="bg-slate-900">
                        Email
                      </option>
                      <option value="Phone" className="bg-slate-900">
                        Phone
                      </option>
                      <option value="Either" className="bg-slate-900">
                        Either
                      </option>
                    </select>
                  </div>

                  {/* Row 4: Message (full width) */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-xs uppercase tracking-widest">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your interest in Biafo..."
                      required
                      rows={5}
                      className="bg-(--color-secondary-btn) px-4 py-3 border-2 border-(--color-gray)/20 focus:border-(--color-cyan) rounded-xl outline-none text-white placeholder:text-(--color-gray)/80 text-sm transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Availability note */}

                  <p className="text-white/35 text-xs text-center">
                    Our team is available{" "}
                    <strong className="font-semibold text-white/60">
                      Monday – Friday, 9am – 6pm EST
                    </strong>
                    . We aim to respond to all inquiries within one business
                    day.
                  </p>

                  {/* Submit button */}
                  <div className="w-fit">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex justify-center items-center gap-2 bg-(--color-cyan)/50 rounded-full disabled:opacity-60 px-8 py-3 hover:bg-(--color-cyan)  font-bold  text-sm hover:scale-[1.02] disabled:scale-100 transition-all duration-300 disabled:cursor-not-allowed text-(--primary-dark) cursor-pointer"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w -fit m-auto text-center mb-10 mt-10">
        <p className="text-white/50 lg:text-xl px-10"> Delivering value across clinical care, research, and drug development. </p>
      </div>
    </section>
  );
}

export default ContactUsPage;
