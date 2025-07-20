import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import DOMPurify from "dompurify";

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/${slug}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!article) return <p className="text-center mt-10">Article not found</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl font-serif font-bold text-center text-gray-900 leading-snug mb-4">
        {article.title}
      </h1>

      {/* Metadata */}
      <p className="text-center text-sm text-gray-500 mb-6">
        {article.category} | {new Date(article.createdAt).toLocaleDateString()}
      </p>

      {/* Article Image */}
      <div className="w-full flex justify-center mb-6">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="max-h-[400px] w-full object-cover rounded-xl shadow"
        />
      </div>
      {console.log(article.body)}

      {/* Article Body */}
      <article
        className="prose prose-lg prose-slate dark:prose-invert max-w-none animate-fadeIn"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.body) }}
      />
    </div>
  );
}
