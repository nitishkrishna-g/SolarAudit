import { Metadata } from "next";
import { Navbar } from "@/components/core/Navbar";
import { Footer } from "@/components/core/Footer";
import { Fireflies } from "@/components/ui/fireflies";
import { Mail, Clock, MessageSquare, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — SolarAudit",
  description:
    "Have questions about solar ROI, PM Surya Ghar subsidies, or our calculator? Get in touch with the SolarAudit team. We typically respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SolarAudit",
    description:
      "Questions about solar ROI or subsidies? Reach out to our team.",
    url: "https://solaraudit.vercel.app/contact",
    siteName: "SolarAudit",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-emerald-500/30">
      <Navbar />
      <Fireflies />

      <main className="flex-grow relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden pb-8 pt-0">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-500/20 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/15 blur-[100px]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                SolarAudit
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Questions about solar subsidies, our calculator, or partnership
              opportunities? We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pb-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 max-w-5xl py-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    How to Reach Us
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Whether you have a question about our solar ROI calculations,
                    need help understanding PM Surya Ghar subsidies, or want to
                    report an issue with our data, we&apos;re here to help.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <Mail
                        className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@solaraudit.in"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline text-sm"
                      >
                        contact@solaraudit.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <Clock
                        className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        Response Time
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We typically respond within 24 hours on business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <MapPin
                        className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        Location
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        India (Remote Team)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                      <MessageSquare
                        className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                        Common Topics
                      </h3>
                      <ul className="text-sm text-slate-600 dark:text-slate-400 mt-1 space-y-1">
                        <li>• Calculator data corrections</li>
                        <li>• Subsidy eligibility questions</li>
                        <li>• Partnership & installer enquiries</li>
                        <li>• Bug reports & feature requests</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-8">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                    Send Us a Message
                  </h2>
                  <form
                    action="mailto:contact@solaraudit.in"
                    method="POST"
                    encType="text/plain"
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm"
                          placeholder="Rajesh Kumar"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm"
                          placeholder="rajesh@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm"
                      >
                        <option value="">Select a topic…</option>
                        <option value="calculator">Calculator / Data Query</option>
                        <option value="subsidy">Subsidy Eligibility Question</option>
                        <option value="installer">Installer / Partnership</option>
                        <option value="bug">Bug Report</option>
                        <option value="feedback">General Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition text-sm resize-none"
                        placeholder="Tell us how we can help…"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
