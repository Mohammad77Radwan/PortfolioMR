import { z } from "zod";

// ============================================
// Enums and Base Schemas
// ============================================

export const btsBlockSchema = z.enum(["Bloc 1", "Bloc 2", "Bloc 3"]);

export const projectCategorySchema = z.enum([
  "fullstack",
  "frontend",
  "design",
  "ia",
  "edtech",
]);

// ============================================
// Project Schemas
// ============================================

export const projectStatSchema = z.object({
  label: z.string(),
  value: z.string(),
});

export const technologySchema = z.object({
  name: z.string(),
  icon: z.string().optional(),
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  longDescription: z.string(),
  context: z.string().optional(),
  problem: z.string().optional(),
  image: z.string(),
  tags: z.array(z.string()),
  category: projectCategorySchema,
  categories: z.array(z.string()).optional(),
  screenshots: z.array(z.string()).optional(),
  btsBlocks: z.array(btsBlockSchema).optional(),
  btsCompetences: z.array(z.string()).optional(),
  link: z.string().url().optional().or(z.literal("")),
  github: z.string().url().optional().or(z.literal("")),
  demoVideo: z.string().optional(),
  date: z.string(),
  featured: z.boolean(),
  stats: z.array(projectStatSchema).optional(),
  technologies: z.array(technologySchema),
});

// ============================================
// Skill Schemas
// ============================================

export const skillItemSchema = z.object({
  name: z.string(),
  level: z.number().min(0).max(100),
  icon: z.string().optional(),
});

export const skillSchema = z.object({
  category: z.string(),
  skills: z.array(skillItemSchema),
});

// ============================================
// Experience Schemas
// ============================================

export const experienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
  highlights: z.array(z.string()),
  technologies: z.array(z.string()),
});

// ============================================
// Blog Post Schemas
// ============================================

export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string().optional(),
  category: z.string(),
  date: z.string(),
  readTime: z.number().positive(),
  image: z.string().optional(),
  featured: z.boolean(),
  link: z.string().url().optional(),
});

// ============================================
// Testimonial Schemas
// ============================================

export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  company: z.string(),
  content: z.string(),
  image: z.string().optional(),
  rating: z.number().min(1).max(5),
});

// ============================================
// Form Schemas
// ============================================

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z
    .string()
    .email("Veuillez entrer une adresse email valide"),
  subject: z
    .string()
    .min(3, "Le sujet doit contenir au moins 3 caractères")
    .max(200, "Le sujet ne peut pas dépasser 200 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(5000, "Le message ne peut pas dépasser 5000 caractères"),
});

export const newsletterSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
});

// ============================================
// API Response Schemas
// ============================================

export const apiSuccessResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
});

export const apiErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string(),
  details: z.unknown().optional(),
});

export const apiResponseSchema = z.discriminatedUnion("success", [
  apiSuccessResponseSchema,
  apiErrorResponseSchema,
]);

// ============================================
// GitHub API Schemas
// ============================================

export const githubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  html_url: z.string().url(),
  description: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  language: z.string().nullable(),
  updated_at: z.string(),
  topics: z.array(z.string()).optional(),
});

export const githubReposResponseSchema = z.array(githubRepoSchema);

// ============================================
// Type Exports (inferred from Zod schemas)
// ============================================

export type BtsBlock = z.infer<typeof btsBlockSchema>;
export type ProjectCategory = z.infer<typeof projectCategorySchema>;
export type ProjectStat = z.infer<typeof projectStatSchema>;
export type Technology = z.infer<typeof technologySchema>;
export type Project = z.infer<typeof projectSchema>;
export type SkillItem = z.infer<typeof skillItemSchema>;
export type Skill = z.infer<typeof skillSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type BlogPost = z.infer<typeof blogPostSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type ApiSuccessResponse = z.infer<typeof apiSuccessResponseSchema>;
export type ApiErrorResponse = z.infer<typeof apiErrorResponseSchema>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;
export type GithubRepo = z.infer<typeof githubRepoSchema>;
