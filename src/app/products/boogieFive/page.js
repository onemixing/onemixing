import { Button } from "../../../components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/ui/tabs";
import Link from "next/link";

export const metadata = {
    title: "boogieFive by Onemixing",
    description: "Famous Mesa Boogie Five-Band Graphic EQ",
    openGraph: {
      title: "boogieFive by Onemixing",
      description: "Famous Mesa Boogie Five-Band Graphic EQ",
      images: [
        {
          url: '/img/boogieFive/bf.webp', // Must be an absolute URL
          width: 500,
          height: 475,
        }], // Replace with your image URL
      type: "website",
    },
  };
export default function Home() {
  const installerFile = "/download/boogieFive.zip";
  const manualPDF = "/download/boogieFive User manual.pdf";
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-16">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900/40 bg-center bg-no-repeat bg-cover"
          style={{
            background: "url('/img/boogieFive/background2.webp')",
          }}
        />
        <div className="relative w-full max-w-2xl ">
          <div className="aspect-video rounded-lg">
            <img
              src="/img/boogieFive/b4.webp"
              alt="boogieFive plugin interface"
              className="w-full h-auto object-fit"
            />
          </div>
        </div>
        <h2 className="relative text-6xl sm:text-7xl md:text-8xl text-white/90 font-light tracking-wide mb-8 dosis-font">
          <span className="font-semibold">boogie</span>
          Five
        </h2>
        <p className="relative text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl text-center mb-12">
          The famous Mesa Boogie Five-Band Graphic EQ now on a plug-in!
        </p>
        <div className="relative flex flex-col sm:flex-row gap-4 items-center">
          <Link href="https://drive.google.com/drive/folders/1vcAnw4MxegHQcZHWrFz9lOyS1dzqzYj6?usp=sharing" target="_blank">
            <Button size="lg" className="text-lg px-8 py-6">
              Download beta
            </Button>
          </Link>
          <Link href={manualPDF} target="_blank">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              View manual
            </Button>
          </Link>
        </div>
        {/*<div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />{*/}
      </section>
      <section className="relative bg-black py-24">
        {/*}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>{*/}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <img
                src="/img/boogieFive/b2.webp"
                alt="Professional audio engineer in studio"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Five-Band
                <br />
                Graphic EQ
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  The cutting-edge audio plugin designed to faithfully emulate
                  the legendary Mesa Boogie five-band graphic equalizer. Built
                  with meticulous attention to detail, BoogieFive captures the
                  distinctive tonal shaping and unparalleled versatility that
                  have made the Mesa Boogie EQ a favorite among professional
                  musicians and audio engineers.
                </p>
              </div>
              {/*}
              <blockquote className="text-2xl sm:text-3xl font-medium">
                "Orion gets me to a professional level so quickly I can just be
                creative from there on out."
              </blockquote>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                JAYCEN JOSHUA
              </p>{*/}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-muted py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
                Powerful Guitar Sound
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Unleash the full potential of your guitar with boogieFive. bold
                and commanding sound that cuts through any mix. <br></br>Elevate
                your music with the unmistakable energy and presence that only
                boogieFive can deliver.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg bg-black/50 backdrop-blur ">
                <img
                  src="/img/boogieFive/b1.webp"
                  alt="Orion plugin interface showing parallel processing controls"
                  className="w-full h-auto object-fit rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl mb-8 dosis-font">
                <span className="font-semibold">boogie</span>Five
              </h2>
              <div className="space-y-6">
                <p className="text-5xl font-bold">$0</p>
                <div className="space-y-4">
                  <Link href={installerFile} download>
                    <Button className="w-full h-12 text-lg">
                      download beta
                    </Button>
                  </Link>
                  <Link href={manualPDF} target="_blank">
                    <Button className="w-full h-12 text-lg mt-2" variant="secondary">
                      view manual
                    </Button>
                  </Link>
                </div>
                <div className="flex gap-2">
                  <img src="/img/logos/vst3logo.svg" className="h-20"></img>
                  {/*<img src="/img/logos/windowslogo.svg" className="h-20"></img>
                  <img src="/img/logos/macoslogo.svg" className="h-20"></img>{*/}
                  <img src="/img/logos/jucelogo.png" className="h-20"></img>
                </div>
                {/*}
                <Tabs defaultValue="macos" className="w-full">
                  <TabsList className="w-full justify-start border-b rounded-none bg-transparent mb-6">
                    <TabsTrigger
                      value="macos"
                      className="data-[state=active]:border-b-2 rounded-none"
                    >
                      macOS
                    </TabsTrigger>
                    <TabsTrigger
                      value="windows"
                      className="data-[state=active]:border-b-2 rounded-none"
                    >
                      Windows
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="macos" className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xs uppercase text-gray-500">
                          Operating System
                        </h3>
                        <p className="text-sm">macOS Mojave 10.14 and above</p>
                      </div>
                      <div>
                        <h3 className="text-xs uppercase text-gray-500">
                          Processor
                        </h3>
                        <p className="text-sm">Intel Core i5 or better</p>
                        <p className="text-sm">Apple Silicon M1 or better</p>
                      </div>
                      <div>
                        <h3 className="text-xs uppercase text-gray-500">
                          Memory
                        </h3>
                        <p className="text-sm">8GB RAM</p>
                      </div>
                      <div>
                        <h3 className="text-xs uppercase text-gray-500">
                          Plugin Formats
                        </h3>
                        <p className="text-sm">AU, VST3, AAX</p>
                      </div>
                      <div>
                        <h3 className="text-xs uppercase text-gray-500">
                          Tested Digital Audio Workstations
                        </h3>
                        <p className="text-sm">
                          Logic Pro 10, Cubase 11, Pro Tools 2021, FL Studio 20,
                          Ableton Live 11
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xs uppercase text-gray-500">
                          Authentication
                        </h3>
                        <p className="text-sm">
                          Internet connection & Cradle Hub
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="windows" className="space-y-6">
                    <div className="space-y-4">
                    </div>
                  </TabsContent>
                </Tabs>

                <p className="text-sm text-gray-400">
                  Available on{" "}
                  <a href="#" className="text-white hover:underline">
                    VST3
                  </a>
                </p>
{*/}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg">
                <img
                  src="/img/boogieFive/bf.webp"
                  alt="Plugin interface on laptop display"
                  className="w-full h-auto object-fit rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
