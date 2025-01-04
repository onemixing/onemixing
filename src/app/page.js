/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SU9niJSqQRp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../components/ui/carousel";
import Flag from "react-world-flags";
import testimonials from "../api/testimonials.json";
import songsportfolio from "../api/songsportfolio.json";
import { Button } from "../components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Professional Audio Mixing & Mastering
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Elevate your music with our expert mixing and mastering
                    services. Unlock the full potential of your tracks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start now
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
                <img
                  src="https://www.bandlab.com/web-app/images/home/hero-charymore-b69b422ffc.png"
                  alt="Hero Image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="services">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Elevate Your Sound
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experienced audio engineers specializes in mixing
                  and mastering to bring out the best in your music. From
                  polishing your tracks to preparing them for distribution,
                  we've got you covered.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <MicIcon className="mx-auto h-8 w-8" />
                    <h3 className="mt-2 text-lg font-bold">Mixing</h3>
                    <p className="text-muted-foreground">
                      Bring your tracks to life with our expert mixing services.
                    </p>
                  </div>
                  <div className="rounded-lg bg-muted p-4 text-center">
                    <EqualIcon className="mx-auto h-8 w-8" />
                    <h3 className="mt-2 text-lg font-bold">Mastering</h3>
                    <p className="text-muted-foreground">
                      Polish your mixes to perfection with our mastering
                      expertise.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4 text-center">
                  <HeadphonesIcon className="mx-auto h-8 w-8" />
                  <h3 className="mt-2 text-lg font-bold">Production</h3>
                  <p className="text-muted-foreground">
                    Bring your ideas to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm">
                  Client Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied clients about their experience working
                  with our team.
                </p>
              </div>
            </div>
            <iframe src="https://trustugc.com/widget/92VFU3mzpXUjANBYx0Z5mTwNeG43?id=756a2783-0a8a-47d4-b468-20978e3329b3" className="w-full border-none"></iframe>
            <script async type="text/javascript" src="https://trustugc.com/scripts/widget-loader.js"></script>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="about">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Who We Are?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Onemixing
                </h2>
                <Avatar className="h-20 w-20 mx-auto">
                  <AvatarImage src="img/logos/logowave.png" alt="avataronemixing" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Onemixing is a platform dedicated to providing{" "}
                  <span className="font-bold">
                    high-quality mixing and mastering services
                  </span>{" "}
                  for musicians and audio engineers, We work closely with you to{" "}
                  <span className="font-bold">
                    understand your needs and artistic visions
                  </span>
                  , ensuring that every mix and master reflects your musical
                  style and vision.<br></br>
                  <span className="font-bold mt-4">Our vision</span><br></br>
                    Whether you’re an independent artist, band, or music
                    producer, our goal is to provide you with pristine,
                    <span className="font-bold">
                      professional sound that stands out on any platform
                    </span>
                    .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="portfolio">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check Out Our Portfolio
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore a selection of our past work and see how we've helped
                  our clients achieve their audio goals.
                </p>
              </div>
            </div>
            <iframe className="rounded w-full h-96 mt-4" src="https://open.spotify.com/embed/playlist/5RfTSbmtqf83FFo9VJPmR5?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div className="container mx-auto flex items-center justify-center w-full mt-4">
              <a href="https://open.spotify.com/playlist/5RfTSbmtqf83FFo9VJPmR5" target="_blank"><Button>See more</Button></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function EqualIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </svg>
  );
}

function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function WavesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </svg>
  );
}
function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
