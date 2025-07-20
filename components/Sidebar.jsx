import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

const Sidebar = ({ isOpen, onClose }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}`) // Replace with your actual endpoint
      .then((res) => {
        setArticles(res.data || []);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setArticles([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const SkeletonCard = () => (
    <div className="animate-pulse space-y-2 border-b border-gray-700 pb-4">
      <div className="w-full h-32 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
      <div className="h-4 bg-gray-600 rounded w-5/6"></div>
    </div>
  );

  return (
    <div
      className={`fixed top-0 left-0 w-80 h-full bg-black text-white z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
        <h2 className="text-2xl font-extrabold italic text-cyan-400">Newsly</h2>
        <FiX className="text-xl cursor-pointer" onClick={onClose} />
      </div>

      {/* Articles */}
      <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-130px)]">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : articles.length === 0 ? (
          <p className="text-gray-500 text-center">No articles found.</p>
        ) : (
          articles.map((item, index) => (
            <div
              key={index}
              className="space-y-1 border-b border-gray-700 pb-4 cursor-pointer hover:bg-gray-800 p-2 rounded transition"
              onClick={() => navigate(`/articles/${item.slug}`)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-32 object-cover rounded"
              />
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">{item.category}</span> {item.date}
              </p>
              <h3 className="text-white font-bold text-md leading-snug">{item.title}</h3>
            </div>
          ))
        )}
      </div>

      {/* Footer Socials */}
      <div className="flex justify-center gap-4 text-gray-400 p-4 border-t border-gray-700">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedinIn />
        <FaYoutube />
      </div>
    </div>
  );
};

export default Sidebar;
