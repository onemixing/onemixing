import { Button } from "../../../components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Previous sections remain unchanged - including them for completeness }
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-xl">F4KTOR, available now</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-xl font-medium">$119</span>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                add to cart
              </Button>
              <span className="text-sm text-gray-400">
                or{" "}
                <a href="#" className="text-white hover:underline">
                  try it free for 14 days
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {*/}
      <div className="relative h-[calc(100vh-4rem)] bg-gradient-to-br from-purple-900 via-orange-800 to-purple-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay"
          style={{ backgroundImage: "url('https://www.wavesfactory.com/img/audio-plugins/equalizer/equalizer_beauty_02.png')" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl sm:text-8xl md:text-[120px] font-thin tracking-[0.2em] text-white/90">
            F 4 K T O R
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>
      
      <section className="relative bg-black py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <img
                src="https://www.wavesfactory.com/img/audio-plugins/equalizer/equalizer_beauty_03.png"
                alt="Professional audio engineer in studio"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Welcome
                <br />
                back
              </h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Sixteen-time Grammy® winner, Jaycen Joshua is one of the most
                  sought-after mix engineers in the industry.
                </p>
                <p>
                  With recent credits including SZA, Kehlani and Usher,
                  Jaycen's masterful mixes are always touching the top of the
                  Billboard charts and setting a new standard in modern
                  production.
                </p>
              </div>
              <blockquote className="text-2xl sm:text-3xl font-medium">
                "Orion gets me to a professional level so quickly I can just be
                creative from there on out."
              </blockquote>
              <p className="text-sm text-gray-400 uppercase tracking-wider">
                JAYCEN JOSHUA
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,#000033,#000000)]"
            style={{
              backgroundImage: "url('/img/f4ktor/background.png')",
              backgroundBlendMode: "overlay",
              opacity: 0.7
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            The only plug-in on{" "}
            <br className="hidden sm:block" />
            Jaycen's{" "}
            <span className="text-gray-500">drum bus</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg sm:text-xl text-gray-300">
            <p>
              Regardless of genre, drums form the heartbeat of virtually every
              modern production. Ensuring that these foundational elements sound
              their best is a key component in achieving a dynamic and exciting
              modern mix.
            </p>
            <p>
              Orion is filled with an abundance of tools to shape your drum mix,
              ensuring every kick and snare stands out, whether it's played on a
              phone speaker or a stadium PA. Through a combination of harmonic
              excitement, compression and parallel processing your drums will cut
              through even the most dense of arrangements.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                A universe
                <br />
                of parallels
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">
                Whether your drums need a further push in the lows, power in the subs or
                attack in the transients, the parallels module of Orion offers a wide
                range of tools to add those finishing touches to your drum mix.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/50 backdrop-blur">
                <img
                  src="https://www.wavesfactory.com/img/audio-plugins/equalizer/equalizer_beauty_01.png"
                  alt="Orion plugin interface showing parallel processing controls"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

