// Minimal stub to fix Netlify build. Replace with real logic if needed.

export type ContactFieldErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export const initialContactState = {
  ok: false,
  fieldErrors: {} as ContactFieldErrors,
  message: "",
};

export async function submitContactAction(
  prevState: typeof initialContactState,
  formData: FormData
): Promise<typeof initialContactState> {
  // No-op: always return initial state
  return initialContactState;
}
