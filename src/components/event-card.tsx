import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <Link
      className="flex-1 basis-80 h-[400px] max-w-[500px]"
      href={`/event/${event.slug}`}
    >
      <section
        className="w-full h-full relative flex flex-col bg-white/[2%] rounded-xl overflow-hidden
               state-effects"
      >
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={300}
          className="h-[50%] object-cover rounded-lg overflow-hidden"
        />

        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold"> {event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="mt-4 text-sm text-white/50 ">{event.location}</p>
        </div>

        <section className="absolute flex flex-col justify-center items-center top-[12px] left-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {/* {new Date(event.date).getDate()} */}
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "2-digit",
            })}
          </p>
          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </Link>
  );
}
