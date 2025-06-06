import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: event.name,
  };
}
// export async function generateStaticParams() {
//   return [
//     {
//       slug: "comedy-extravaganza",
//     },
//     {
//       slug: "dj-practice-session",
//     },
//   ];
// }

export default async function Eventpage({ params }: Props) {
  const slug = params.slug;
  const event = await getEvent(slug);
  // console.log(event);
  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          src={event.imageUrl}
          className="object-cover z-0 blur-3xl"
          alt="Event background image"
          fill
          quality={50}
          priority
          sizes="(max-width:1280px) 100vw ,1280px"
        />

        <div className="z-1 relative flex flex-col lg:flex-row gap-6 lg:gap-16 mx-4 md:mx-8">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover mx-auto lg:mx-0"
          />

          <div className="flex flex-col mx-4 md:mx-8 lg:mx-0 space-y-4">
            <p className=" text-white/75">
              {/* display date : day ,month name and day num*/}
              {new Date(event.date).toLocaleDateString("en-us", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="whitespace-nowrap lg:text-5xl">{event.name}</H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize bg-blur mt-4 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="text-center min-h-[75vh] px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>

          <SectionContent> {event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}
function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 tracking">{children}</p>
  );
}
