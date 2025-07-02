import React from "react";

const sampleNews = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `News Headline ${i + 1}: Something Interesting Happened`,
  category: "World",
  date: "July 3, 2025",
  image: `https://res.cloudinary.com/dpwhphwix/image/upload/v1751485041/ngo-news/dybaltgmo25oyqxyb5ii.jpg`
}));

export default function ScrollingNewsStrip() {
  return (
    <section className="bg-black py-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-white text-2xl font-extrabold mb-6 tracking-tight">Trending Now</h2>
        <div
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {sampleNews.map((item) => (
            <div
              key={item.id}
              className="
                flex-shrink-0 w-auto
                bg-transparent border border-white/60
                rounded-2xl overflow-hidden shadow-xl snap-start
                hover:scale-105 transition-transform duration-300
                flex flex-col text-white
              "
              style={{ minHeight: "420px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover rounded-t-2xl "
              />
              <div className="flex flex-col flex-1 justify-between p-5 w-[320px]">
                <div>
                  <p className="text-xs uppercase font-semibold mb-2 tracking-wide text-[#06bd77]">
                    {item.category} / {item.date}
                  </p>
                  <h3 className="text-lg font-bold leading-tight mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae.
                  </p>
                </div>
                <div>
                  <button
                    className="w-full py-2 mt-2 bg-[#06bd77] hover:bg-[#059a60] text-white font-semibold rounded-lg shadow transition duration-200"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
