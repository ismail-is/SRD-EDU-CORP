import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClass?: string;
}

export function Section({ id, className, children, containerClass }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-24", className)}>
      <div className={cn("container mx-auto px-4 md:px-6 lg:max-w-7xl", containerClass)}>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ title, subtitle, className }: { title: string, subtitle?: string, className?: string }) {
  return (
    <div className={cn("text-center mb-16", className)}>
      {subtitle && <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900">{title}</h2>
    </div>
  );
}
