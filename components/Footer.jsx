import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";

export default function Footer() {
  const footerLinks = {
    ABOUT: ["About US", "Contact Us", "Feedback", "Privacy Policy", "Cookies", "Advertise"],
    SECTIONS: ["Executive", "Senate", "House", "Judiciary", "Foreign Policy", "Polls", "Elections"],
    WORLD: ["U.N", "Conflicts", "Terrorism", "Disasters", "Global Economy", "Environment", "Religion"],
    POLITICS: ["Executive", "Senate", "House", "Judiciary", "Foreign Policy", "Polls", "Elections"],
    TV: ["Shows", "Personalities", "Watch Live", "Full Episodes", "Show Clips", "New Clips"],
    OTHERS: ["Vibe Weather", "Vibe Nation", "Vibe News Shop", "Vibe News Go", "Vibe Ration", "Podcasts", "Apps & Products"],
  };

  return (
    <footer className="bg-black text-white px-6 pt-10 pb-6 relative">
      {/* Top: Logo + Social */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-extrabold italic text-cyan-400">Newsly</h2>
          <div className="flex gap-4 mt-4 text-white text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-700 mb-6" />

      {/* Middle: Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
        {Object.entries(footerLinks).map(([title, items]) => (
          <div key={title}>
            <h3 className="font-bold text-white mb-2">{title}</h3>
            <ul className="space-y-1 text-gray-300">
              {items.map((item, index) => (
                <li key={index} className="cursor-pointer hover:text-white transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom: Copyright */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-gray-400 text-sm">
        <p className="mb-2 sm:mb-0">
          © Copyright <span className="font-semibold text-white">Newsly</span> 2023. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
           </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-cyan-400 hover:bg-cyan-300 text-black text-xl p-4 rounded-full shadow-lg transition"
        aria-label="Scroll to top"
      >
        <BsArrowUp />
      </button>
    </footer>
  );
}
