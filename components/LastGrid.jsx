import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function ThreeColumnNewsGrid() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchGridNews = async () => {
    try {
      const res = await fetch(`${API_URL}/section/grid`);
      const data = await res.json();
      setNewsData(data);
    } catch (err) {
      console.error("Error fetching grid section data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGridNews();
  }, []);

  const skeletonCard = (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 animate-pulse">
      <div className="w-full h-48 bg-gray-300" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-300 rounded w-1/2" />
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-300 rounded w-full" />
      </div>
    </div>
  );

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {loading || newsData.length === 0
          ? Array.from({ length: 6 }).map((_, i) => <div key={i}>{skeletonCard}</div>)
          : newsData.map((news) => (
              <div
                key={news._id}
                className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                onClick={() => navigate(`/articles/${news.slug}`)}
              >
                <img
                  src={news.imageUrl}
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
