export default function MainNewsSection() {
  const leftNews = [
    {
      category: "Lifestyle",
      date: "June 7, 2022",
      title: "Worrying Sign In Covid Numbers",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
    {
      category: "Fashion",
      date: "June 7, 2022",
      title: "Seven Star’s Gravity-Defying Dress Stuns",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
    {
      category: "Finance",
      date: "June 7, 2022",
      title: "‘Not OK’: Cotton On Called Out Over Product",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
  ];

  const rightNews = [
    {
      category: "Fashion",
      date: "June 7, 2022",
      title: "Confusing $16 dental floss swimsuit roasted",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
    {
      category: "Lifestyle",
      date: "June 7, 2022",
      title: "Five Signs of a Highly Intelligent Person",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
    {
      category: "Technology",
      date: "June 7, 2022",
      title: "Latin America’s Moonshot",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
    {
      category: "Business",
      date: "June 7, 2022",
      title: "Your Empty Office Turn Into Apartments?",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
    {
      category: "Media",
      date: "June 7, 2022",
      title: "The New Mortal Kombat Movie Rules",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
    {
      category: "Politics",
      date: "June 7, 2022",
      title: "Corporations Are People, Too",
      img: "https://images.unsplash.com/photo-1610088441520-4352457e7095",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Column */}
      <div className="md:col-span-1 space-y-4">
        <h2 className="font-extrabold uppercase border-b pb-2 border-black text-lg">
          What's Happening
        </h2>
        {leftNews.map((news, index) => (
          <div key={index}>
            <img
              src={news.img}
              alt={news.title}
              className="w-full aspect-square object-cover rounded mb-2"
            />
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-black">{news.category}</span> {news.date}
            </p>
            <h3 className="font-bold">{news.title}</h3>
          </div>
        ))}
      </div>

      {/* Center Main Article */}
      <div className="md:col-span-2">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-black">Politics</span> June 7, 2022
        </p>
        <h1 className="text-3xl font-extrabold mb-2 leading-snug">
          5 Takeaways From The First Round Of France’s Election
        </h1>
        <p className="text-gray-600 mb-4">
          The first-round results are trickier than they look for Macron.
        </p>
        <img
          src="https://images.unsplash.com/photo-1610088441520-4352457e7095"
          alt="Main article"
          className="w-full h-auto object-cover rounded"
        />
      </div>

      {/* Right Column */}
      <div className="md:col-span-1 space-y-4">
        <h2 className="font-extrabold uppercase border-b pb-2 border-black text-lg">Just In</h2>

        {/* First highlighted item */}
        <div>
          <img
            src={rightNews[0].img}
            alt={rightNews[0].title}
            className="w-full h-auto mb-2 rounded"
          />
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-pink-600">{rightNews[0].category}</span> {rightNews[0].date}
          </p>
          <h3 className="font-bold">{rightNews[0].title}</h3>
        </div>

        {/* Remaining items */}
        {rightNews.slice(1).map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-cover flex-shrink-0 rounded"
            />
            <div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-black">{item.category}</span> {item.date}
              </p>
              <h4 className="font-semibold text-sm">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
