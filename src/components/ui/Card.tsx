import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "./Section";

interface CardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  imageUrl?: string;
  className?: string;
}

export function Card({ title, description, icon, imageUrl, className }: CardProps) {
  return (
    <div className={cn("group rounded-srd border border-gray-100 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {imageUrl && (
        <div className="mb-6 -mx-8 -mt-8 h-48 overflow-hidden relative">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        </div>
      )}
      
      {icon && (
        <div className="w-14 h-14 rounded-srd bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-accent transition-all duration-300">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 relative z-10">{title}</h3>
      {description && <p className="text-gray-600 leading-relaxed relative z-10">{description}</p>}
    </div>
  );
}
