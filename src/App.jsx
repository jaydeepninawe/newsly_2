import Navbar from "../components/Navbar";
import Home from "../pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "../components/Footer";
import ArticlePage from "../pages/Article";
import NotFound from "../pages/Not_Found";


export default function App() {

  return (
     <Router>

      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}/>
           <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
