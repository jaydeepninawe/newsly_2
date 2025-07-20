import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function InfiniteCardSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchInfiniteCardArticles = async () => {
      try {
        const res = await axios.get(`${API_URL}/section/infinite_card`);
        setArticles(res.data);
      } catch (error) {
        console.error("Error fetching infinite card articles:", error);
      }
    };

    fetchInfiniteCardArticles();
  }, []);

  const renderSkeletonCards = () => {
    return Array(4).fill(0).map((_, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-auto bg-gray-800/30 border border-white/20 rounded-2xl overflow-hidden shadow-xl snap-start animate-pulse"
        style={{ minHeight: "420px" }}
      >
        <div className="h-48 w-full bg-gray-700 rounded-t-2xl"></div>
        <div className="p-5 w-[320px] space-y-3">
          <div className="h-3 w-24 bg-gray-600 rounded"></div>
          <div className="h-4 w-full bg-gray-600 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-600 rounded"></div>
          <div className="h-3 w-3/4 bg-gray-700 rounded mt-2"></div>
          <div className="h-10 w-full bg-gray-700 rounded-lg mt-4"></div>
        </div>
      </div>
    ));
  };

  return (
    <section className="bg-black py-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-white text-2xl font-extrabold mb-6 tracking-tight">Infinite Cards</h2>
        <div
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {articles.length > 0
            ? articles.map((item) => (
                <Link
                  to={`/articles/${item.slug}`}
                  key={item._id}
                  className="flex-shrink-0 w-auto bg-transparent border border-white/60 rounded-2xl overflow-hidden shadow-xl snap-start hover:scale-105 transition-transform duration-300 flex flex-col text-white"
                  style={{ minHeight: "420px", textDecoration: "none" }}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-48 w-full object-cover rounded-t-2xl"
                  />
                  <div className="flex flex-col flex-1 justify-between p-5 w-[320px]">
                    <div>
                      <p className="text-xs uppercase font-semibold mb-2 tracking-wide text-[#06bd77]">
                        {item.category || "News"} /{" "}
                        {new Date(item.publishedAt).toDateString()}
                      </p>
                      <h3 className="text-lg font-bold leading-tight mb-3 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                        {item.excerpt || "No summary available."}
                      </p>
                    </div>
                    <div>
                      <div className="w-full py-2 mt-2 bg-[#06bd77] hover:bg-[#059a60] text-center text-white font-semibold rounded-lg shadow transition duration-200">
                        Read More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : renderSkeletonCards()}
        </div>
      </div>
    </section>
  );
}
