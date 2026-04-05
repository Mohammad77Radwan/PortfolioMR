// Re-export all types from Zod schemas for type consistency
// These types are inferred from Zod schemas to ensure runtime validation
// matches compile-time types

export type {
  BtsBlock,
  ProjectCategory,
  ProjectStat,
  Technology,
  Project,
  SkillItem,
  Skill,
  Experience,
  BlogPost,
  Testimonial,
  ContactFormData,
  NewsletterFormData,
  ApiSuccessResponse,
  ApiErrorResponse,
  ApiResponse,
  GithubRepo,
} from "@/lib/schemas";

// Re-export schemas for use in validation
export {
  btsBlockSchema,
  projectCategorySchema,
  projectStatSchema,
  technologySchema,
  projectSchema,
  skillItemSchema,
  skillSchema,
  experienceSchema,
  blogPostSchema,
  testimonialSchema,
  contactFormSchema,
  newsletterSchema,
  apiSuccessResponseSchema,
  apiErrorResponseSchema,
  apiResponseSchema,
  githubRepoSchema,
  githubReposResponseSchema,
} from "@/lib/schemas";
