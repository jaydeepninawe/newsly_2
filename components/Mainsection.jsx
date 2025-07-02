import React, { useState } from "react";

export default function MainNewsSection() {
  const [activeTab, setActiveTab] = useState("Latest");

  const leftStories = [
    {
      category: "Entertainment",
      time: "6 years ago",
      title: "The final 6 Game of Thrones’ episodes might feel like a full season",
    },
    {
      category: "Entertainment",
      time: "6 years ago",
      title: "‘Girls Trip’ already surpasses ‘Rough Night’ in opening weekend",
    },
    {
      category: "Entertainment",
      time: "6 years ago",
      title: "New Season 8 Walking Dead trailer dashes forward in time",
    },
    {
      category: "Entertainment",
      time: "6 years ago",
      title: "The final 6 Game of Thrones’ episodes might feel like a full season",
    },
    {
      category: "Entertainment",
      time: "6 years ago",
      title: "‘Girls Trip’ already surpasses ‘Rough Night’ in opening weekend",
    },
    
  ];

  const rightTabs = {
    Latest: [
      "Mobile Google CEO Promises 11 Daydream-compatible phones",
      "Hulu hires Google marketing veteran Kelly Campbell as CMO",
      "Ford’s 2018 Mustang GT can do 0-to-60 mph in under 4 seconds",
      "NASA seeks to build a quieter supersonic plane for passenger flight",
      "Microsoft Paint is finally dead, and the world is a better place",
      "Netflix was the top grossing app in Q2, with mobile revenue up 233%",
      "5 Mayors agree, Congress should invest in affordable housing",
      "Ford’s 2018 Mustang GT can do 0-to-60 mph in under 4 seconds",
      
     
    ],
    Videos: [
      "Watch NASA test their new space engine",
      "Top 10 fastest electric cars in 2024",
      "Inside the making of Dune's sound design",
    ],
    Galleries: [
      "30 breathtaking aerial photos of Earth",
      "The best red carpet looks of 2024",
      "Before & After: Renovated tiny homes",
    ],
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Column - Trending */}
      <div className="md:col-span-1 flex flex-col gap-5">
        <span className="bg-pink-600 text-white text-xs font-bold px-3 py-1 uppercase w-max rounded">
          Trending
        </span>

        {leftStories.map((story, i) => (
          <div key={i} className="flex gap-3">
            <div className="relative w-24 h-16 flex-shrink-0">
              <img
                src={`https://source.unsplash.com/random/100x80?sig=${i}`}
                alt="thumb"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute top-0 left-0 w-6 h-6 bg-green-500 text-white text-xs flex items-center justify-center rounded-full">
                ▶
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase text-gray-500 font-semibold">
                {story.category} / {story.time}
              </p>
              <p className="text-sm font-bold leading-tight">{story.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Center Column - Main Stories */}
      <div className="md:col-span-2 flex flex-col gap-6">
        {/* Main Feature */}
        <div className="relative h-64 rounded overflow-hidden shadow-lg group">
          <img
            src="https://source.unsplash.com/random/800x500?news"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            alt="Main"
          />
          <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
            <p className="text-xs uppercase font-bold mb-1">Politics / 6 years ago</p>
            <h2 className="text-2xl font-extrabold leading-tight">
              Illinois’ Financial Crisis Fallout
            </h2>
            <p className="text-sm mt-1">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti.
            </p>
          </div>
        </div>

        {/* Sub Stories */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((num) => (
            <div
              key={num}
              className="relative h-52 rounded overflow-hidden shadow-md group"
            >
              <img
                src={`https://source.unsplash.com/random/400x300?sig=${num}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="sub-article"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-transparent text-white">
                <p className="text-xs uppercase font-bold mb-1">
                  {num === 1 ? "Fashion" : "Entertainment"} / 6 years ago
                </p>
                <h3 className="text-lg font-bold leading-tight">
                  {num === 1
                    ? "These ’90s fashion trends are making a comeback"
                    : "‘Better Call Saul’ has been renewed for a fourth season"}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="md:col-span-1">
        {/* Tabs */}
        <div className="flex gap-3 text-xs font-bold uppercase border-b border-gray-300 pb-2 mb-3">
          {["Latest", "Videos", "Galleries"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-pink-600 border-b-2 border-pink-600"
                  : "text-gray-500"
              } pb-1`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <ul className="space-y-3 text-sm">
          {rightTabs[activeTab].map((title, i) => (
            <li key={i} className="hover:underline font-medium text-gray-800">
              {title}
            </li>
          ))}
        </ul>

        {/* Ad */}
        <div className="mt-8">
          <img
            src="https://via.placeholder.com/300x250?text=Advertisement"
            alt="ad"
            className="w-full rounded"
          />
        </div>
      </div>
    </section>
  );
}
