import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 ">
      <h1>Find events around you</h1>
      <p>Browse more than 10,000 events around you</p>

      <form>
        <input placeholder="Search events" spellCheck={false} />
      </form>

      <section>
        <p>Popular:</p>
        <div>
          <Link href="events/austin">Austin</Link>
          <Link href="events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
