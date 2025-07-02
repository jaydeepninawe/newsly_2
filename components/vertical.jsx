import React from "react";

// Sample data
const news = [
  {
    id: 1,
    title: "Meet Superman's grandfather in new trailer for Krypton",
    category: "ENTERTAINMENT",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    isVideo: true,
  },
  {
    id: 2,
    title: "Poll: Virginia governor's race in dead heat",
    category: "POLITICS",
    time: "4 hours ago",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
    isVideo: false,
  },
  {
    id: 3,
    title: "Federer makes history with eighth Wimbledon, 19th major title",
    category: "SPORTS",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
    isVideo: true,
  },
  {
    id: 4,
    title: "Disney's live-action Aladdin finally finds its stars",
    category: "ENTERTAINMENT",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.",
    isVideo: true,
  },
  {
    id: 3,
    title: "Federer makes history with eighth Wimbledon, 19th major title",
    category: "SPORTS",
    time: "3 hours ago",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
    isVideo: true,
  },
  {
    id: 4,
    title: "Disney's live-action Aladdin finally finds its stars",
    category: "ENTERTAINMENT",
    time: "5 hours ago",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.",
    isVideo: true,
  },
];

// Play icon SVG
const PlayIcon = ({ color = "#10b981" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill={color} />
    <polygon points="13,10 24,16 13,22" fill="#fff" />
  </svg>
);

export default function VerticalNewsList() {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-4 mt-8">
      {news.map((item, idx) => (
        <div
          key={item.id}
          className={`flex items-start gap-4 pb-4 ${idx < news.length - 1 ? "border-b border-gray-200 mb-4" : ""}`}
        >
          <div className="relative min-w-[120px] w-[120px] h-[80px] rounded overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded"
            />
            {item.isVideo && (
              <span className="absolute top-2 left-2">
                <PlayIcon />
              </span>
            )}
          </div>
          <div className="flex-1">
            <div className="text-xs uppercase text-gray-500 font-semibold mb-1">
              {item.category} <span className="mx-1">/</span> {item.time}
            </div>
            <div className="font-bold text-lg leading-snug mb-1">
              {item.title}
            </div>
            <div className="text-gray-600 text-sm">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
