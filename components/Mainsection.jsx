import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

export default function MainNewsSection() {
  const [activeTab, setActiveTab] = useState("Latest");
  const [leftStories, setLeftStories] = useState([]);
  const [latestTitles, setLatestTitles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]); // hold full articles
  const [mainStory, setMainStory] = useState(null);
  const [subStories, setSubStories] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const trendingRes = await axios.get(`${API_URL}/section/trending`);
        const latestRes = await axios.get(`${API_URL}/section/latest`);
        const featuredRes = await axios.get(`${API_URL}/section/articles`);

        setLeftStories(trendingRes.data || []);
        setLatestTitles(latestRes.data.map((item) => item.title));
        setLatestArticles(latestRes.data); // full objects for linking
        setMainStory(featuredRes.data[0] || null);
        setSubStories(featuredRes.data.slice(1, 3) || []);
      } catch (err) {
        console.error("Error loading sections", err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Column - Trending */}
      <div className="md:col-span-1 flex flex-col gap-5">
        <span className="bg-pink-600 text-white text-xs font-bold px-3 py-1 uppercase w-max rounded">
          Trending
        </span>

        {leftStories.length > 0 ? (
          leftStories.map((story, i) => (
            <Link to={`/articles/${story.slug}`} key={story._id || i}>
              <div className="flex gap-3 cursor-pointer hover:opacity-90 transition">
                <div className="relative w-24 h-16 flex-shrink-0">
                  <img
                    src={story.imageUrl || `https://source.unsplash.com/random/100x80?sig=${i}`}
                    alt="thumb"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-gray-500 font-semibold">
                    {story.excerpt || "Category"} /{" "}
                    {story.publishedAt ? new Date(story.publishedAt).toLocaleDateString() : "N/A"}
                  </p>
                  <p className="text-sm font-bold leading-tight">{story.title}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="italic text-gray-500">Coming soon...</p>
        )}
      </div>

      {/* Center Column - Main Stories */}
      <div className="md:col-span-2 flex flex-col gap-6">
        {/* Main Feature */}
        <div className="relative h-64 rounded overflow-hidden shadow-lg group">
          {mainStory ? (
            <Link to={`/articles/${mainStory.slug}`}>
              <img
                src={mainStory.imageUrl || "https://source.unsplash.com/random/800x500?news"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt="Main"
              />
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                <p className="text-xs uppercase font-bold mb-1">
                  {mainStory.excerpt || "Politics"} /{" "}
                  {mainStory.publishedAt ? new Date(mainStory.publishedAt).toLocaleDateString() : "Unknown"}
                </p>
                <h2 className="text-2xl font-extrabold leading-tight">{mainStory.title}</h2>
                <p className="text-sm mt-1">{mainStory.body?.slice(0, 100) || ""}...</p>
              </div>
            </Link>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-600 text-lg">
              Coming soon...
            </div>
          )}
        </div>

        {/* Sub Stories */}
        <div className="grid md:grid-cols-2 gap-6">
          {subStories.length > 0 ? (
            subStories.map((story, i) => (
              <Link to={`/articles/${story.slug}`} key={story._id || i}>
                <div className="relative h-52 rounded overflow-hidden shadow-md group">
                  <img
                    src={story.imageUrl || `https://source.unsplash.com/random/400x300?sig=${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt="sub-article"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-transparent text-white">
                    <p className="text-xs uppercase font-bold mb-1">
                      {story.excerpt || "Category"} /{" "}
                      {story.publishedAt ? new Date(story.publishedAt).toLocaleDateString() : "Unknown"}
                    </p>
                    <h3 className="text-lg font-bold leading-tight">{story.title}</h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="h-52 flex items-center justify-center bg-gray-200 text-gray-600 rounded col-span-2">
              Coming soon...
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - Latest Titles */}
      <div className="md:col-span-1">
        <div className="text-xs font-bold uppercase border-b border-gray-300 pb-2 mb-3">
          <button
            onClick={() => setActiveTab("Latest")}
            className={`${
              activeTab === "Latest"
                ? "text-pink-600 border-b-2 border-pink-600"
                : "text-gray-500"
            } pb-1`}
          >
            Latest
          </button>
        </div>

        <ul className="space-y-3 text-sm">
          {latestArticles.length > 0 ? (
            latestArticles.map((article, i) => (
              <li key={i}>
                <Link
                  to={`/articles/${article.slug}`}
                  className="hover:underline font-medium text-gray-800"
                >
                  {article.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="text-gray-500 italic">Coming soon...</li>
          )}
        </ul>
      </div>
    </section>
  );
}
