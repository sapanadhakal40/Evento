import { EventoEvent } from "@/lib/types";
import Image from "next/image";

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  return (
    <section className="flex flex-col flex-1 basis-80 h-[400px] max-w-[500px] bg-white/[2%] rounded-xl overflow-hidden">
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={500}
        height={300}
        className="h-[50%] object-fit rounded-lg overflow-hidden"
      />

      <div className="flex flex-col flex-1 justify-center items-center">
        <h2 className="text-2xl font-semibold"> {event.name}</h2>
        <p className="italic text-white/75">By {event.organizerName}</p>
        <p className="mt-4 text-sm text-white/50 ">{event.location}</p>
      </div>
    </section>
  );
}
