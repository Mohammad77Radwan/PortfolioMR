import { Suspense } from "react";
import {
  HeroAdvanced,
  ProjectsBento,
  Skills,
  Experience,
  Testimonials,
  Contact,
  Stats,
  Newsletter,
  E5Documents,
  Articles,
} from "@/components";
import { GithubRepos } from "@/components/github-repos";
import { GithubReposSkeleton } from "@/components/github-repos-skeleton";
import { WithErrorBoundary } from "@/components/error-boundary";
import {
  CardSkeleton,
  SkillSkeleton,
  ExperienceSkeleton,
} from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero section - critical, no error boundary needed */}
      <HeroAdvanced />

      {/* Stats section */}
      <WithErrorBoundary sectionName="Statistiques">
        <Stats />
      </WithErrorBoundary>

      {/* Projects section with error boundary */}
      <WithErrorBoundary
        sectionName="Projets"
        fallback={
          <section className="px-4 py-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="mb-8 text-4xl font-bold text-slate-200">
                Projets Réalisés
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
            </div>
          </section>
        }
      >
        <ProjectsBento />
      </WithErrorBoundary>

      {/* Skills section with error boundary */}
      <WithErrorBoundary
        sectionName="Compétences"
        fallback={
          <section className="px-4 py-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="mb-8 text-4xl font-bold text-slate-200">
                Compétences Techniques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillSkeleton />
                <SkillSkeleton />
              </div>
            </div>
          </section>
        }
      >
        <Skills />
      </WithErrorBoundary>

      {/* Experience section with error boundary */}
      <WithErrorBoundary
        sectionName="Expérience"
        fallback={
          <section className="px-4 py-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="mb-8 text-4xl font-bold text-slate-200">
                Parcours Professionnel
              </h2>
              <div className="space-y-8">
                <ExperienceSkeleton />
                <ExperienceSkeleton />
              </div>
            </div>
          </section>
        }
      >
        <Experience />
      </WithErrorBoundary>

      {/* Testimonials section */}
      <WithErrorBoundary sectionName="Témoignages">
        <Testimonials />
      </WithErrorBoundary>

      {/* Articles / Blog section */}
      <WithErrorBoundary sectionName="Articles">
        <Articles />
      </WithErrorBoundary>

      {/* GitHub repos with Suspense and error boundary */}
      <WithErrorBoundary sectionName="GitHub">
        <Suspense fallback={<GithubReposSkeleton />}>
          <GithubRepos />
        </Suspense>
      </WithErrorBoundary>

      {/* E5 Documents section */}
      <WithErrorBoundary sectionName="Documents E5">
        <E5Documents />
      </WithErrorBoundary>

      {/* Newsletter section */}
      <WithErrorBoundary sectionName="Newsletter">
        <Newsletter />
      </WithErrorBoundary>

      {/* Contact section */}
      <WithErrorBoundary sectionName="Contact">
        <Contact />
      </WithErrorBoundary>
    </div>
  );
}
