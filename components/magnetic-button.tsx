"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  ariaLabel?: string;
}

/**
 * MagneticButton Component
 * Les boutons suivent légèrement la souris pour un effet magnétique
 * Crée un effet "wow" très moderne et attire l'attention
 */
export function MagneticButton({
  children,
  onClick,
  href,
  external = false,
  className = "",
  variant = "primary",
  ariaLabel,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calcul du décalage max (30px)
    const distance = 30;
    const offsetX = (e.clientX - centerX) / (width / 2) * distance;
    const offsetY = (e.clientY - centerY) / (height / 2) * distance;

    setPosition({
      x: Math.max(-distance, Math.min(distance, offsetX)),
      y: Math.max(-distance, Math.min(distance, offsetY)),
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/50",
    secondary:
      "border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-50 hover:bg-slate-50 dark:hover:bg-slate-900",
    tertiary:
      "text-slate-900 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800",
  };

  const baseClasses = `
    relative inline-flex items-center justify-center
    min-h-11 px-8 py-4 rounded-lg font-semibold
    transition-all duration-300
    ${variantStyles[variant]}
    ${className}
  `;

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <motion.div
        animate={position}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        {href ? (
          external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className={baseClasses}
            >
              <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12" />
              </div>
              <span className="relative block">{children}</span>
            </a>
          ) : (
            <Link href={href} aria-label={ariaLabel} className={baseClasses}>
              <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12" />
              </div>
              <span className="relative block">{children}</span>
            </Link>
          )
        ) : (
          <button
            type="button"
            onClick={onClick}
            aria-label={ariaLabel}
            className={baseClasses}
          >
            <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12" />
            </div>
            <span className="relative block">{children}</span>
          </button>
        )}
      </motion.div>
    </div>
  );
}
