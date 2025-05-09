import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
// import { sleep } from "@/lib/utils";

type EventsListProps = {
  city: string;
};

export default async function EventsList({ city }: EventsListProps) {
  // await sleep(2000);
  const events = await getEvents(city);
  // console.log(events);
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px] relative">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
