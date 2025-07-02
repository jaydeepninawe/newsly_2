import React from "react";

const newsData = [
  {
    id: 1,
    title: "House panel to consider bill to revamp DHS cyber team",
    category: "Politics",
    date: "6 years ago",
    excerpt:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.",
    image: "https://source.unsplash.com/800x500/?politician,speech",
  },
  {
    id: 2,
    title: "Breakthrough AI model solves scientific problems",
    category: "Technology",
    date: "5 years ago",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptatem perspiciatis!",
    image: "https://source.unsplash.com/800x500/?technology,ai",
  },
  {
    id: 3,
    title: "Championship final ends in thrilling draw",
    category: "Sports",
    date: "3 years ago",
    excerpt:
      "Match highlights left fans on edge as both teams battled till the last minute in an unforgettable match.",
    image: "https://source.unsplash.com/800x500/?sports,stadium",
  },
  {
    id: 4,
    title: "New tax policy draws mixed reaction from public",
    category: "Business",
    date: "4 years ago",
    excerpt:
      "The policy changes introduced this quarter have led to significant debates in the finance world.",
    image: "https://source.unsplash.com/800x500/?business,meeting",
  },
  {
    id: 5,
    title: "Healthcare innovation improves patient care",
    category: "Health",
    date: "2 years ago",
    excerpt:
      "Medical professionals hail the new tech as a step toward more efficient patient recovery systems.",
    image: "https://source.unsplash.com/800x500/?healthcare,hospital",
  },
  {
    id: 6,
    title: "Artists unite for a global climate cause",
    category: "Environment",
    date: "1 year ago",
    excerpt:
      "A collective movement from musicians and painters to raise awareness about climate change.",
    image: "https://source.unsplash.com/800x500/?climate,art",
  },
];

export default function ThreeColumnNewsGrid() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-xs uppercase text-gray-500 font-semibold mb-1">
                {news.category} / {news.date}
              </p>
              <h3 className="text-lg font-bold mb-2">{news.title}</h3>
              <p className="text-sm text-gray-700">{news.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
