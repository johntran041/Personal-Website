import Image from "next/image";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const imageLeft = index % 2 === 0;

  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-10 ${
        imageLeft ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex-shrink-0 aspect-video relative rounded-card overflow-hidden bg-[var(--border)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-inter text-[10px] uppercase tracking-[0.06em] text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-manrope font-bold text-xl text-text-primary">
          {project.title}
        </h3>

        <p className="font-inter text-sm text-text-muted leading-relaxed">
          {project.description}
        </p>

        {project.link && project.linkLabel && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-inter text-sm text-accent-purple hover:underline w-fit"
          >
            {project.linkLabel}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
