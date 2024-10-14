/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iv7ZAEhSdqO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import songsportfolio from "../../api/songsportfolio.json";

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-8 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Check Out Our Portfolio
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore a selection of our past work and see how we've helped our
            clients achieve their audio goals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from(songsportfolio).map((item, index) => (
            <div
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              key={index}
            >
              <Link href={item.playlink} className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">Listen to "Another Song"</span>
              </Link>
              <img
                src={item.img}
                alt={item.title}
                width={256}
                height={256}
                className="h-auto w-full object-cover"
                style={{ aspectRatio: "256/256", objectFit: "cover" }}
              />
              <div className="bg-background p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.artist}</p>
                <a href={item.playlink} target="_blank">
                  <Button size="sm" className="mt-4 w-full">
                    Listen on Spotify <IconSpotify className="ml-2"/>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function IconSpotify(props) {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.669 11.538a.498.498 0 01-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 01-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 01.166.686zm.979-2.178a.624.624 0 01-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 01-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 01.206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 11-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 11-.764 1.288z" />
      </svg>
    );
  }