import { useState } from "react";
import { useEffect } from "react";

function MotivationalQuote() {
  const [quote, setQuote] = useState("null");
  const [author, setAuthor] = useState("null");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Function to fetch quote from API
  const fetchQuote = () => {
    //when fetching starts, set loading to true and error to null
    setLoading(true);
    setError(null);

    fetch("https://zenquotes.io/api/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].q);
        setAuthor(data[0].a);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  // Conditional rendering based on state
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">
          Motivational Quote</h2>
        <p className="text-lg font-semibold mb-2">
          "{quote}"</p>
        <p className="text-md mb-4 italic">
          :{author}</p>
        <button onClick={fetchQuote} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        New Quote</button>
      </div>
    );
  }
}

export default MotivationalQuote;
