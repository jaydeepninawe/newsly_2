import { FiX } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const articles = [
  {
    category: "Lifestyle",
    date: "June 7, 2022",
    title: "In France, its Macron vs Le Pen again for presidency",
    img: "https://via.placeholder.com/100x70?text=1",
  },
  {
    category: "Business",
    date: "June 7, 2022",
    title: "Your Empty Office Turn Into Apartments?",
    img: "https://via.placeholder.com/100x70?text=2",
  },
  {
    category: "Recipe",
    date: "June 7, 2022",
    title: "Sweet and festive lemon desserts for Easter",
    img: "https://via.placeholder.com/100x70?text=3",
  },
  {
    category: "Politics",
    date: "June 7, 2022",
    title: "What Michelle Obama told Viola Davis ahead of ‘The First Lady’",
    img: "https://via.placeholder.com/100x70?text=4",
  },
  {
    category: "Finance",
    date: "June 7, 2022",
    title: "PAWS Chicago’s Adopt-a-Thon is underway",
    img: "https://via.placeholder.com/100x70?text=5",
  },
];

export default function Sidebar({ isOpen, onClose }) {
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
        {articles.map((item, index) => (
          <div key={index} className="space-y-1 border-b border-gray-700 pb-4">
            <img src={item.img} alt={item.title} className="w-full h-32 object-cover" />
            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white">{item.category}</span> {item.date}
            </p>
            <h3 className="text-white font-bold text-md leading-snug">{item.title}</h3>
          </div>
        ))}
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
}
