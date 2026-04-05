"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/schemas";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitError(null);

    try {
      // Integration point for newsletter service (e.g., Mailchimp, ConvertKit, Buttondown)
      // For now, we simulate a successful subscription
      // In production, replace this with actual API call:
      // const res = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // Simulate API latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubscribed(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubscribed(false), 5000);
    } catch {
      setSubmitError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  const inputHasError = !!errors.email || !!submitError;

  return (
    <section className="relative py-16 px-4" aria-labelledby="newsletter-heading">
      <div className="max-w-3xl mx-auto rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-700/80 dark:to-purple-700/80 p-8 md:p-10 text-center shadow-[0_18px_60px_rgba(2,6,23,0.35)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="newsletter-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Restez à jour avec mes articles
          </h2>
          <p className="text-blue-100 mb-8 max-w-md mx-auto">
            Recevez les derniers articles sur le développement web et l&apos;IA
            directement dans votre boîte mail.
          </p>

          <div className="relative mx-auto max-w-lg overflow-hidden rounded-xl p-px">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,rgba(255,255,255,0.95),rgba(147,197,253,0.95),rgba(216,180,254,0.95),rgba(255,255,255,0.95))]"
            />

            <div className="relative rounded-[11px] bg-white/12 backdrop-blur-md border border-white/25 p-3 md:p-4">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 rounded-lg p-4"
                  role="alert"
                  aria-live="polite"
                >
                  <CheckCircle className="w-5 h-5 text-green-300" aria-hidden="true" />
                  <span className="text-white font-semibold">
                    Merci pour votre abonnement!
                  </span>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-3"
                  noValidate
                >
                  <div className="flex gap-2 max-w-md mx-auto">
                    <div className="flex-1 relative">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Votre adresse email
                      </label>
                      <Mail
                        className="absolute left-4 top-3.5 w-5 h-5 text-slate-400 pointer-events-none"
                        aria-hidden="true"
                      />
                      <input
                        id="newsletter-email"
                        type="email"
                        placeholder="Votre email"
                        aria-invalid={inputHasError}
                        aria-describedby={
                          inputHasError ? "newsletter-error" : undefined
                        }
                        className={cn(
                          "w-full pl-12 pr-4 py-3 rounded-lg bg-white/20 border text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-colors",
                          inputHasError
                            ? "border-red-400 focus:ring-red-400"
                            : "border-white/30 focus:ring-white/50"
                        )}
                        {...register("email")}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "..." : "S'abonner"}
                    </button>
                  </div>

                  {(errors.email || submitError) && (
                    <motion.p
                      id="newsletter-error"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-1 text-sm text-red-300"
                      role="alert"
                    >
                      <AlertCircle className="w-3 h-3" aria-hidden="true" />
                      {errors.email?.message || submitError}
                    </motion.p>
                  )}
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
