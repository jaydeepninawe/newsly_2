import React from "react";

export default function EntertainmentSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10">
      {/* Section Title */}
      <div className="mb-6">
        <span className="bg-pink-600 text-white text-xs font-bold uppercase px-4 py-1 rounded-t">
          Entertainment
        </span>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Left - Main Feature */}
        <div className="relative rounded overflow-hidden shadow-md group">
          <img
            src="https://source.unsplash.com/500x600/?woman,portrait"
            alt="Main"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute top-3 left-3 w-8 h-8 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">
            ▶
          </div>
          <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
            <p className="text-xs uppercase text-teal-400 font-semibold mb-1">
              Entertainment / 6 years ago
            </p>
            <h2 className="text-2xl font-extrabold leading-tight mb-2">
              Final 'Game of Thrones' Episodes
            </h2>
            <p className="text-sm text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Center - 2 Vertical Cards */}
        <div className="flex flex-col gap-6">
          {/* Top Card */}
          <div className="flex gap-4">
            <div className="w-1/3">
              <img
                src="https://source.unsplash.com/400x300/?party"
                className="w-full h-full object-cover rounded"
                alt=""
              />
            </div>
            <div className="w-2/3">
              <p className="text-[10px] uppercase text-gray-500 font-semibold">
                Entertainment / 6 years ago
              </p>
              <h3 className="text-base font-bold leading-tight">
                ‘Girls Trip’ already surpasses ‘Rough Night’ in opening weekend
              </h3>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="relative rounded overflow-hidden group">
            <img
              src="https://source.unsplash.com/600x400/?walking-dead"
              className="w-full h-40 object-cover rounded"
              alt="sub"
            />
            <div className="absolute top-2 left-2 w-7 h-7 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">
              ▶
            </div>
            <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 via-transparent text-white">
              <p className="text-xs uppercase font-semibold">
                Entertainment / 6 years ago
              </p>
              <h3 className="text-sm font-bold leading-tight">
                New Season 8 Walking Dead trailer flashes forward in time
              </h3>
            </div>
          </div>
        </div>

        {/* Right - Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Ad */}
          <div className="w-full">
            <img
              src="https://via.placeholder.com/300x250?text=Advertisement"
              alt="Ad"
              className="rounded"
            />
          </div>

          {/* 3 News Items */}
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex gap-3">
              <img
                src="https://source.unsplash.com/80x60/?counter-strike"
                className="w-16 h-12 object-cover rounded"
                alt=""
              />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-semibold">
                  Entertainment / 6 years ago
                </p>
                <p className="font-semibold">
                  Mod turns ‘Counter-Strike’ into a ‘Tekken’ clone with fighting chickens
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <img
                src="https://source.unsplash.com/80x60/?superman"
                className="w-16 h-12 object-cover rounded"
                alt=""
              />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-semibold">
                  Entertainment / 6 years ago
                </p>
                <p className="font-semibold">
                  Meet Superman’s grandfather in new trailer for Krypton
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <img
                src="https://source.unsplash.com/80x60/?aladdin"
                className="w-16 h-12 object-cover rounded"
                alt=""
              />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-semibold">
                  Entertainment / 6 years ago
                </p>
                <p className="font-semibold">
                  Disney’s live-action Aladdin finally finds its stars
                </p>
              </div>
            </div>
          </div>

          {/* More Link */}
          <div>
            <a
              href="#"
              className="text-pink-600 text-sm font-bold inline-flex items-center hover:underline"
            >
              MORE ENTERTAINMENT →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
