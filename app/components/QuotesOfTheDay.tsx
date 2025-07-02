
const quotes = [
  {
    text: "The ocean stirs the heart, inspires the imagination and brings eternal joy to the soul.",
    author: "Wyland",
  },
  {
    text: "To me, the sea is a continual miracle.",
    author: "Walt Whitman",
  },
  {
    text: "Dance with the waves, move with the sea. Let the rhythm of the water set your soul free.",
    author: "Christy Ann Martine",
  },
];

const backgroundImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"; // Ocean/sea shore image

const QuotesOfTheDay: React.FC = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div
      className="relative rounded-2xl shadow-lg overflow-hidden min-h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-8 max-w-xl text-center text-white">
        <h2 className="italic text-2xl md:text-3xl mb-4 font-semibold">
          &quot;{quote.text}&quot;
        </h2>
        <p className="font-bold text-lg">- {quote.author}</p>
      </div>
    </div>
  );
};

export default QuotesOfTheDay;