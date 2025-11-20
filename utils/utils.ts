import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Fecha inválida";
    }

    const formatted = new Intl.DateTimeFormat("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);

    return formatted;
  }

export function createSlug(title: string, id: string): string {
  return `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}--nid-${id}`;
}