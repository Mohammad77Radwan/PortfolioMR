"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, GitBranch, MapPin, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  error?: string;
  children: React.ReactNode;
}

function FormField({ error, children }: FormFieldProps) {
  return (
    <div className="space-y-1">
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1 text-sm text-red-500 dark:text-red-400"
          role="alert"
        >
          <AlertCircle className="w-3 h-3" aria-hidden="true" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? "Envoi en cours..." : "Envoyer le message"}
      {!pending && <Send className="w-4 h-4" aria-hidden="true" />}
    </button>
  );
}

export function Contact() {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitMessage(null);
    setSubmitSuccess(false);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("subject", data.subject);
      formData.append("message", data.message);

      const res = await fetch("https://formspree.io/f/xqegyree", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setSubmitMessage("Merci ! Votre message a été envoyé.");
        reset();
      } else {
        setSubmitSuccess(false);
        setSubmitMessage("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch {
      setSubmitSuccess(false);
      setSubmitMessage("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const inputClasses = (hasError: boolean) =>
    cn(
      "px-4 py-3 rounded-lg border bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors",
      hasError
        ? "border-red-500 dark:border-red-400 focus:ring-red-500"
        : "border-slate-300 dark:border-slate-700 focus:ring-blue-500"
    );

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Parlons ensemble</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Intéressé par une collaboration ? N&apos;hésitez pas à me contacter pour
            discuter de vos projets ou opportunités.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info Cards */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <a
              href="mailto:mohammadradwn804@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
            >
              mohammadradwn804@gmail.com
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold mb-2">Localisation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Saint-Étienne, France
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-pink-600 dark:text-pink-400" aria-hidden="true" />
            </div>
            <h3 className="font-bold mb-2">GitHub</h3>
            <a
              href="https://github.com/Mohammad77Radwan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors text-sm"
            >
              @Mohammad77Radwan
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-xl p-px"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(14,165,233,0.95),rgba(168,85,247,0.9),rgba(236,72,153,0.9),rgba(14,165,233,0.95))]"
          />

          <div className="relative rounded-[11px] bg-white dark:bg-slate-800 p-8">
            <h3 className="text-2xl font-bold mb-6">Envoyez-moi un message</h3>

            {submitMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                aria-live="polite"
                className={cn(
                  "mb-6 p-4 rounded-lg border",
                  submitSuccess
                    ? "bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700"
                    : "bg-red-100 text-red-700 border-red-300 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700"
                )}
              >
                {submitSuccess ? "✓ " : "⚠ "}
                {submitMessage}
              </motion.div>
            )}

            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField error={errors.name?.message}>
                  <label htmlFor="name" className="sr-only">
                    Votre nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClasses(!!errors.name)}
                    {...register("name")}
                  />
                </FormField>

                <FormField error={errors.email?.message}>
                  <label htmlFor="email" className="sr-only">
                    Votre email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Votre email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClasses(!!errors.email)}
                    {...register("email")}
                  />
                </FormField>
              </div>

              <FormField error={errors.subject?.message}>
                <label htmlFor="subject" className="sr-only">
                  Sujet
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Sujet"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={cn(inputClasses(!!errors.subject), "w-full")}
                  {...register("subject")}
                />
              </FormField>

              <FormField error={errors.message?.message}>
                <label htmlFor="message" className="sr-only">
                  Votre message
                </label>
                <textarea
                  id="message"
                  placeholder="Votre message"
                  rows={6}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(inputClasses(!!errors.message), "w-full resize-none")}
                  {...register("message")}
                />
              </FormField>

              <SubmitButton pending={isSubmitting} />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
