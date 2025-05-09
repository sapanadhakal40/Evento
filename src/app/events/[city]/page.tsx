import EventsList from "@/components/event-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};
type EventsPageProps = Props & {
  searchParams: { [key: string]: string[] | undefined };
};

export function generateMetadata({ params }: Props) {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberschema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const parsedPage = pageNumberschema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Inavlid page number");
  }
  // const page = searchParams.page || 1; // || undefined or 1 ,??- undefined or null then page 1

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      <Suspense key={city + parsedPage} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
