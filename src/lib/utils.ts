import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//replace fetch api with prisma above
// const response = await fetch(
//   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
// );
// const events: EventoEvent[] = await response.json();
// return events;

// const response = await fetch(
//   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
// );
// const event: EventoEvent = await response.json();
