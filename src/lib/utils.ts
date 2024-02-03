import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateName(name: string, maxLength: number) {
  if (name.length <= maxLength) {
    return name;
  } else {
    return name.slice(0, maxLength) + "...";
  }
}
