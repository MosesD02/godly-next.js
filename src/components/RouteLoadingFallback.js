import Image from "@/components/Image";

function Stars() {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((star) => (
        <span key={star} className="text-base leading-none text-[#FFAC33]">
          ★
        </span>
      ))}
    </div>
  );
}

function QuoteFormShell() {
  return (
    <div
      className="grid w-full gap-3 rounded-xl border border-white/10 bg-[#252323]/90 p-4 shadow-2xl sm:grid-cols-2 lg:grid-cols-4"
      aria-hidden="true"
    >
      {[0, 1, 2].map((field) => (
        <div
          key={field}
          className="h-13 rounded-md border border-[#FDE4C8]/20 bg-[#1f1d1d]"
        />
      ))}
      <div className="h-13 rounded-md border-4 border-[#61503e] bg-[#312e2c]" />
    </div>
  );
}

function HomeShell({ landing = false }) {
  return (
    <>
      <section className="relative overflow-x-clip bg-[#1F1D1D]">
        <div
          className={
            landing
              ? "absolute top-0 left-0 h-112.5 w-full md:h-175"
              : "absolute top-17.5 left-0 h-112.5 w-full md:top-11 md:h-175"
          }
        >
          <Image
            src="/assets/new-hero.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center md:object-[center_60%]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#1F1D1D]/0 to-[#1F1D1D]" />
        </div>

        <div className="relative z-10 mx-auto max-w-360 px-5 md:px-14 md:pb-32">
          <div className="flex min-h-150 flex-col justify-end gap-3 pb-10 xl:min-h-203.75">
            <div className="flex items-center gap-3" aria-hidden="true">
              <div className="h-3 w-22 bg-[#FDE4C8]/75" />
              <Stars />
            </div>
            <div className="flex max-w-6xl flex-col gap-3" aria-hidden="true">
              <div className="h-9 w-full max-w-4xl bg-white/88 md:h-14 xl:h-19" />
              <div className="h-9 w-4/5 max-w-3xl bg-white/88 md:h-14 xl:h-19" />
              <div className="mt-1 h-4 w-full max-w-xl bg-white/45 md:h-5" />
            </div>
          </div>
          <QuoteFormShell />
        </div>
      </section>

      <section className="paper-bg-16 bg-[#ebded1] px-6 py-16 md:px-14 md:py-24">
        <div
          className="mx-auto flex max-w-327.75 flex-col gap-10"
          aria-hidden="true"
        >
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-3">
            <div className="h-9 w-3/4 bg-[#312E2C]/85 md:h-13" />
            <div className="h-4 w-full max-w-lg bg-[#312E2C]/25" />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((step) => (
              <div
                key={step}
                className="flex min-h-52 flex-col justify-between border border-[#312E2C]/20 bg-[#fdf6ed]/65 p-6"
              >
                <div className="h-12 w-12 rounded-full border border-[#312E2C]/25" />
                <div className="space-y-3">
                  <div className="h-5 w-3/4 bg-[#312E2C]/65" />
                  <div className="h-3 w-full bg-[#312E2C]/20" />
                  <div className="h-3 w-4/5 bg-[#312E2C]/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BlogIndexShell() {
  return (
    <>
      <section className="mt-14 flex flex-col bg-[#262424] px-8.75 py-25 md:mt-17 md:p-16 md:py-17.5">
        <div
          className="mx-auto flex w-full max-w-327.75 flex-col items-center gap-3"
          aria-hidden="true"
        >
          <div className="h-13 w-full max-w-2xl bg-[#FDE4C8]/85 md:h-24" />
          <div className="flex w-85 flex-col gap-0.5 md:w-165.5">
            <div className="h-px w-full bg-white" />
            <div className="h-0.75 w-full bg-white" />
          </div>
          <div className="h-4 w-full max-w-md bg-white/25 md:h-6" />
        </div>
      </section>

      <section className="bg-[#fdf6ed] px-7.5 py-13 md:px-12 md:py-10">
        <div
          className="mx-auto flex max-w-327.75 flex-col gap-8 border-b-4 border-double border-black pb-10 md:flex-row"
          aria-hidden="true"
        >
          <div className="aspect-4/3 w-full border-8 border-[#6A64641F] bg-[#6A6464]/14 md:w-1/2" />
          <div className="flex w-full flex-col gap-4 md:w-1/2">
            <div className="h-4 w-32 bg-[#6A6464]/25" />
            <div className="h-9 w-full bg-[#312E2C]/75 md:h-11" />
            <div className="h-9 w-4/5 bg-[#312E2C]/75 md:h-11" />
            <div className="mt-2 h-4 w-full bg-[#6A6464]/20" />
            <div className="h-4 w-full bg-[#6A6464]/20" />
            <div className="h-4 w-3/4 bg-[#6A6464]/20" />
          </div>
        </div>
      </section>
    </>
  );
}

function BlogPostShell() {
  return (
    <article className="mt-17 flex w-full flex-col bg-[#fef7ea] px-7.5 py-11.25 text-[#312E2C] md:mt-14 md:p-16">
      <div
        className="mx-auto flex w-full max-w-200 flex-col"
        aria-hidden="true"
      >
        <div className="mb-6 h-4 w-28 bg-[#AF8F6E]/45" />
        <div className="mb-8 border-b-4 border-double border-black pb-8">
          <div className="mb-4 h-3 w-44 bg-[#373A44]/25" />
          <div className="h-9 w-full bg-[#312E2C]/80 md:h-12" />
          <div className="mt-3 h-9 w-4/5 bg-[#312E2C]/80 md:h-12" />
        </div>
        <div className="mb-8 aspect-4/3 w-full overflow-hidden rounded-lg bg-[#6A6464]/15" />
        <div className="space-y-4">
          {[100, 96, 92, 100, 82, 95, 72].map((width, line) => (
            <div
              key={`${width}-${line}`}
              className="h-4 bg-[#312E2C]/18"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function ServiceShell() {
  return (
    <>
      <section className="paper-bg-16 mt-17 flex flex-col items-center justify-center gap-12 bg-[#252525] px-7.5 py-12 md:mt-14 md:gap-16 md:py-24">
        <div className="flex items-center gap-3" aria-hidden="true">
          <div className="h-3 w-24 bg-[#FDE4C8]/75" />
          <Stars />
        </div>
        <div
          className="flex w-full max-w-4xl flex-col items-center gap-4"
          aria-hidden="true"
        >
          <div className="h-14 w-4/5 bg-[#FDE4C8]/88 md:h-22" />
          <div className="h-10 w-1/2 -rotate-3 bg-[#FDE4C8]/65 md:h-16" />
        </div>
        <div className="relative aspect-4/3 w-full max-w-xl border-8 border-[#e7e3df]">
          <Image
            src="/assets/new-hero.jpeg"
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 576px"
            className="object-cover object-center"
          />
        </div>
        <div className="h-4 w-full max-w-2xl bg-white/25" aria-hidden="true" />
        <div
          className="h-14 w-56 rounded-lg border-4 border-[#61503e] bg-[#312e2c]"
          aria-hidden="true"
        />
      </section>

      <section className="paper-bg-16 bg-[#ebded1] px-6 py-16 md:px-14 md:py-24">
        <div
          className="mx-auto grid max-w-327.75 gap-10 md:grid-cols-2"
          aria-hidden="true"
        >
          <div className="aspect-4/3 bg-[#6A6464]/15" />
          <div className="flex flex-col justify-center gap-5">
            <div className="h-10 w-4/5 bg-[#312E2C]/75 md:h-14" />
            <div className="h-4 w-full bg-[#312E2C]/20" />
            <div className="h-4 w-full bg-[#312E2C]/20" />
            <div className="h-4 w-3/4 bg-[#312E2C]/20" />
          </div>
        </div>
      </section>
    </>
  );
}

function ShellContent({ variant }) {
  if (variant === "blog-index") return <BlogIndexShell />;
  if (variant === "blog-post") return <BlogPostShell />;
  if (variant === "service") return <ServiceShell />;
  if (variant === "landing") return <HomeShell landing />;
  return <HomeShell />;
}

export default function RouteLoadingFallback({ variant = "home" }) {
  return (
    <>
      <ShellContent variant={variant} />
      <span className="sr-only">Loading page…</span>
    </>
  );
}
