"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col justify-center px-5 py-16 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">System interruption</p>
        <h1 className="mt-6 max-w-2xl text-5xl font-semibold uppercase leading-none md:text-8xl">The page needs another signal.</h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <button className="inline-flex min-h-12 items-center bg-accent px-5 font-semibold text-[#05111f] transition hover:bg-accent-strong" onClick={() => reset()} type="button">
            Try again
          </button>
          <Link className="inline-flex min-h-12 items-center border border-line px-5 font-semibold text-foreground transition hover:border-accent hover:text-accent" href="/">
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
