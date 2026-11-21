export interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  live: string;
  code?: string;
  color: string;
}

export const projects: Project[] = [
  { slug: "sidbites", title: "SidBites", type: "Full-stack product", description: "A full-stack food ordering platform built with a modern Next.js stack.", image: "/SidBites.png", alt: "SidBites full-stack Next.js food ordering project by Ankit Mall", tags: ["Next.js","Better Auth","PostgreSQL","Prisma"], live: "https://sid-bites.vercel.app", color: "bg-[#d47c60]" },
  { slug: "taskhub", title: "TaskHub", type: "Task management app", description: "A task management app built to help organize work and stay on top of priorities.", image: "/TaskHub.png", alt: "TaskHub Next.js productivity and task management project by Ankit Mall", tags: ["Next.js","Task management","Productivity"], live: "https://task-hub-lyart-psi.vercel.app", color: "bg-[#a3b47a]" },
  { slug: "acyuta-digital-studio", title: "Acyuta Digital Studio", type: "TypeScript frontend product", description: "A polished TypeScript digital studio website focused on clear visual storytelling, responsive layouts, and a refined frontend experience.", image: "/acyuta-digital-studio.png", alt: "Acyuta Digital Studio Next.js web design project by Ankit Mall", tags: ["TypeScript","React","Tailwind CSS"], live: "https://acyutadigitalstudio.website", color: "bg-[#a49bbd]" },
  { slug: "siddhi-hotels", title: "Siddhi Hotels", type: "Full-stack product", description: "A complete hotel booking experience with authentication, search, payments, and role-based dashboards.", image: "/landing-page.png", alt: "Siddhi Hotels MERN Stack hotel booking project by Ankit Mall", tags: ["React","Node.js","MongoDB"], live: "https://hotel-booking-site-nine.vercel.app/", code: "https://github.com/ankitmall932/Hotel-Booking-Site", color: "bg-[#ffb93d]" },
  { slug: "sid-notes", title: "Sid Notes", type: "Full-stack product", description: "A full-stack notes application built as my first TypeScript project, with a focused interface for creating and managing notes.", image: "/SidNotes.png", alt: "Sid Notes full-stack TypeScript React application by Ankit Mall", tags: ["TypeScript","React","Full-stack"], live: "https://sid-notes-zeta.vercel.app/", color: "bg-[#78c8ee]" }
];
