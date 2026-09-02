import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col justify-center px-5 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Signal not found</p>
        <h1 className="mt-6 max-w-2xl text-5xl font-semibold uppercase leading-none md:text-8xl">This page does not exist.</h1>
        <Link className="mt-10 inline-flex min-h-12 items-center border border-line px-5 font-semibold text-foreground transition hover:border-accent hover:text-accent" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
