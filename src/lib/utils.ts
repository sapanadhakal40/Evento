import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";
import NotFound from "@/app/not-found";

const prisma = new PrismaClient();

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

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
  });
  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return NotFound();
  }
  return event;
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
