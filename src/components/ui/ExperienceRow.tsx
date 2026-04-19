import type { Experience } from "@/types";

interface ExperienceRowProps {
  experience: Experience;
}

export default function ExperienceRow({ experience }: ExperienceRowProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1.5 md:gap-12 py-5 border-t border-[var(--border)]">
      <div className="flex flex-col gap-0.5">
        <span className="font-inter text-sm font-medium text-text-primary">
          {experience.company}
        </span>
        <span className="font-inter text-xs text-text-muted">
          {experience.period}
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="font-inter text-sm font-medium text-text-primary">
          {experience.role}
        </span>
        <span className="font-inter text-sm text-text-muted leading-relaxed">
          {experience.summary}
        </span>
      </div>
    </div>
  );
}
