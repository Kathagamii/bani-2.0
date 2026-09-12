"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    // Прототип: форма не подключена к бэкенду. При интеграции — заменить на реальный обработчик заявок.
    setSent(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="border border-copper-light/30 bg-copper-light/5 px-6 py-8"
          >
            <p className="font-serif text-xl text-milk">Заявка принята.</p>
            <p className="mt-2 text-[14px] leading-relaxed text-linen/65">
              Мы свяжемся с вами в ближайшее время, чтобы обсудить проект.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="text-[13px] tracking-[0.08em] uppercase text-linen/60">
                Имя
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-2 w-full rounded-sm border border-linen/20 bg-ink/40 px-4 py-3 text-milk outline-none transition-colors focus:border-copper-light"
                placeholder="Как к вам обращаться"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-[13px] tracking-[0.08em] uppercase text-linen/60">
                Телефон
              </label>
              <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                type="tel"
                className="mt-2 w-full rounded-sm border border-linen/20 bg-ink/40 px-4 py-3 text-milk outline-none transition-colors focus:border-copper-light"
                placeholder="+7"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-[13px] tracking-[0.08em] uppercase text-linen/60">
                О проекте
              </label>
              <textarea
                id="message"
                rows={2}
                className="mt-2 w-full resize-none rounded-sm border border-linen/20 bg-ink/40 px-4 py-3 text-milk outline-none transition-colors focus:border-copper-light"
                placeholder="Участок, коттедж, коммерческий объект — если уже знаете"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-3 border border-copper-light/60 bg-copper-light px-7 py-3.5 text-[13px] tracking-[0.1em] uppercase text-ink transition-colors duration-300 hover:bg-transparent hover:text-milk sm:w-auto"
            >
              Отправить заявку
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
