import { Mail, Github, Linkedin, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { delay, duration: 0.5, ease: "easeOut" },
});

const ContactSection = () => {
  const email = "amalvj2701@gmail.com";

  return (
    <section id="contact" className="pt-16 lg:pt-24 pb-24 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FAFAF8] to-white" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-50/60 blur-3xl" />

      <div className="relative container mx-auto px-6 max-w-3xl">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-500 uppercase mb-3">Get in touch</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <div className="mx-auto w-12 h-0.5 bg-indigo-400 rounded mb-5" />
          <p className="text-gray-500 leading-relaxed max-w-lg mx-auto">
            I'm actively looking for <span className="font-semibold text-gray-700">AI · ML · GenAI · Data Science</span> roles.
            If you're hiring or want to collaborate, I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main CTA card */}
        <motion.div {...fadeUp(0.1)}
          className="rounded-2xl border border-gray-200 bg-white shadow-[0_8px_40px_-8px_rgba(99,102,241,0.12)] overflow-hidden mb-6"
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400" />

          <div className="p-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="shrink-0 relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-3xl font-serif font-bold shadow-md">
                A
              </div>
              <span className="absolute -bottom-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow">
                <span className="relative flex h-2.5 w-2.5 rounded-full">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">Amal Nath VJ</h3>
              <p className="text-indigo-600 font-medium text-sm mb-2">AI / ML Engineer · Open to opportunities</p>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-400 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                Trivandrum, Kerala, India
              </div>
            </div>

            <a
              href={`mailto:${email}`}
              className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl
                         bg-indigo-600 text-white font-semibold text-sm
                         hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Say Hello
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
          <a
            href="https://github.com/amalvj7"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 bg-white
                       hover:border-gray-900 hover:shadow-md transition-all duration-200 group"
          >
            <Github className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
            <div>
              <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">GitHub</p>
              <p className="text-xs text-gray-400">github.com/amalvj7</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-700 ml-auto transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/amal-nath-vj-656213287/"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 bg-white
                       hover:border-blue-600 hover:shadow-md transition-all duration-200 group"
          >
            <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
            <div>
              <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700">LinkedIn</p>
              <p className="text-xs text-gray-400">in/amal-nath-vj-656213287</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 ml-auto transition-colors" />
          </a>
        </motion.div>

        <motion.p {...fadeUp(0.3)} className="text-center text-sm text-gray-400 mt-6">
          Or reach me directly at{" "}
          <a href={`mailto:${email}`} className="text-indigo-600 hover:underline font-medium">
            {email}
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
