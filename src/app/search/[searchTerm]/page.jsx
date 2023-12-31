import Result from "@/components/Result";
import React from "react";
const API_KEY = process.env.API_KEY;
export default async function SearchPage({ params }) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );

  if (!response.ok) {
    throw new Error("Error fetching data");
  }
  const data = await response.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Result results={results} />}
    </div>
  );
}
