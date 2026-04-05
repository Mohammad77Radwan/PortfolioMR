import { clsx, type ClassValue } from "clsx";

/**
 * Combines class names using clsx
 * Utility for conditionally joining classNames together
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Logs events for production monitoring
 * In production, this could be extended to send to an analytics service
 */
export function logEvent(
  event: string,
  data?: Record<string, unknown>
): void {
  const timestamp = new Date().toISOString();
  const logData = {
    event,
    timestamp,
    ...data,
  };

  if (process.env.NODE_ENV === "production") {
    // In production, log with structured format
    console.log(`[Portfolio] ${event}`, JSON.stringify(logData));
    // Integration point for analytics services (e.g., Vercel Analytics, Plausible)
  } else {
    // In development, use more readable format
    console.log(`[Portfolio:${event}]`, data ?? "");
  }
}

/**
 * Logs errors for production monitoring
 */
export function logError(
  context: string,
  error: unknown,
  additionalData?: Record<string, unknown>
): void {
  const errorMessage =
    error instanceof Error ? error.message : String(error);
  const errorStack = error instanceof Error ? error.stack : undefined;

  const logData = {
    context,
    error: errorMessage,
    stack: errorStack,
    ...additionalData,
    timestamp: new Date().toISOString(),
  };

  console.error(`[Portfolio:Error:${context}]`, logData);

  // Integration point for error tracking services (e.g., Sentry)
}

/**
 * Formats a date string for display
 */
export function formatDate(dateString: string, locale = "fr-FR"): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

/**
 * Truncates text to a specified length with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
 * Generates a unique ID
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Validates that a URL is safe (not javascript: or data:)
 */
export function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url, window.location.origin);
    return ["http:", "https:", "mailto:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Sleep utility for async operations
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
