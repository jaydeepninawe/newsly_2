import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function EntertainmentSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const res = await axios.get(`${API_URL}/section/second_section`);
        setArticles(res.data || []);
      } catch (err) {
        console.error("Error fetching entertainment section", err);
      }
    };
    fetchSectionData();
  }, []);

  const mainFeature = articles[0];
  const sideVertical = articles[1];
  const bottomCard = articles[2];
  const sideList = articles.slice(3, 6);

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
          {mainFeature ? (
            <Link to={`/articles/${mainFeature.slug}`}>
              <img
                src={mainFeature.imageUrl}
                alt="Main"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                <p className="text-xs uppercase text-teal-400 font-semibold mb-1">
                  Entertainment /{" "}
                  {new Date(mainFeature.publishedAt).toLocaleDateString()}
                </p>
                <h2 className="text-2xl font-extrabold leading-tight mb-2">
                  {mainFeature.title}
                </h2>
                <p className="text-sm text-gray-200">
                  {mainFeature.excerpt || mainFeature.body?.slice(0, 100)}...
                </p>
              </div>
            </Link>
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
              Coming soon...
            </div>
          )}
        </div>

        {/* Center - 2 Vertical Cards */}
        <div className="flex flex-col gap-6">
          {/* Top Card */}
          {sideVertical && (
            <Link to={`/articles/${sideVertical.slug}`} className="flex gap-4">
              <div className="w-1/3">
                <img
                  src={sideVertical.imageUrl}
                  className="w-full h-full object-cover rounded"
                  alt=""
                />
              </div>
              <div className="w-2/3">
                <p className="text-[10px] uppercase text-gray-500 font-semibold">
                  Entertainment /{" "}
                  {new Date(sideVertical.publishedAt).toLocaleDateString()}
                </p>
                <h3 className="text-base font-bold leading-tight">
                  {sideVertical.title}
                </h3>
              </div>
            </Link>
          )}

          {/* Bottom Card */}
          {bottomCard && (
            <Link
              to={`/articles/${bottomCard.slug}`}
              className="relative rounded overflow-hidden group"
            >
              <img
                src={bottomCard.imageUrl}
                className="w-full h-40 object-cover rounded"
                alt="sub"
              />
              <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/80 via-transparent text-white">
                <p className="text-xs uppercase font-semibold">
                  Entertainment /{" "}
                  {new Date(bottomCard.publishedAt).toLocaleDateString()}
                </p>
                <h3 className="text-sm font-bold leading-tight">
                  {bottomCard.title}
                </h3>
              </div>
            </Link>
          )}
        </div>

        {/* Right - Sidebar */}
        <div className="flex flex-col gap-6">
          {/* 3 News Items */}
          <div className="flex flex-col gap-4 text-sm">
            {sideList.length > 0 ? (
              sideList.map((item, idx) => (
                <Link
                  to={`/article/${item.slug}`}
                  className="flex gap-3"
                  key={item._id || idx}
                >
                  <img
                    src={item.imageUrl}
                    className="w-16 h-12 object-cover rounded"
                    alt=""
                  />
                  <div>
                    <p className="text-[10px] uppercase text-gray-500 font-semibold">
                      Entertainment /{" "}
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </p>
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-gray-500 italic">Coming soon...</div>
            )}
          </div>

          {/* More Link */}
          <div>
            <Link
              to="/category/entertainment"
              className="text-pink-600 text-sm font-bold inline-flex items-center hover:underline"
            >
              MORE ENTERTAINMENT →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
