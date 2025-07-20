import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate for programmatic navigation
const API_URL = import.meta.env.VITE_API_URL;

// Play icon component
const PlayIcon = ({ color = "#10b981" }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill={color} />
    <polygon points="13,10 24,16 13,22" fill="#fff" />
  </svg>
);

export default function VerticalNewsList() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchVerticalArticles = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/section/vertical`
        );
        setArticles(res.data);
      } catch (error) {
        console.error("Error fetching vertical articles:", error);
      }
    };

    fetchVerticalArticles();
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <div
        key={idx}
        className={`flex items-start gap-4 pb-4 ${
          idx < 3 ? "border-b border-gray-200 mb-4" : ""
        } animate-pulse`}
      >
        <div className="relative min-w-[120px] w-[120px] h-[80px] bg-gray-300 rounded"></div>
        <div className="flex-1 space-y-2">
          <div className="h-3 w-1/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-400 rounded"></div>
          <div className="h-3 w-full bg-gray-300 rounded"></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-4 mt-8">
      {articles.length > 0
        ? articles.map((item, idx) => (
            <div
              key={item._id}
              onClick={() => navigate(`/articles/${item.slug}`)}
              className={`flex items-start gap-4 pb-4 cursor-pointer hover:bg-gray-50 transition rounded px-2 ${
                idx < articles.length - 1 ? "border-b border-gray-200 mb-4" : ""
              }`}
            >
              <div className="relative min-w-[120px] w-[120px] h-[80px] rounded overflow-hidden">
                <img
                  src={item.imageUrl}
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
                  {item.category || "News"} <span className="mx-1">/</span>{" "}
                  {new Date(item.publishedAt).toDateString()}
                </div>
                <div className="font-bold text-lg leading-snug mb-1">
                  {item.title}
                </div>
                <div className="text-gray-600 text-sm">
                  {item.excerpt || "No description available."}
                </div>
              </div>
            </div>
          ))
        : renderSkeletons()}
    </div>
  );
}
