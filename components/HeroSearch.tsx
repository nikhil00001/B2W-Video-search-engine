import React from 'react';

interface HeroSearchProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
}

const HeroSearch: React.FC<HeroSearchProps> = ({ query, setQuery, onSearch }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-orange-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-b2w-dark tracking-tight mb-6">
          Find the Perfect Video for <span className="text-b2w-orange">Your Story</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Searching for inspiration? Tell us what you need, and we'll recommend the best animated explainer examples from our portfolio.
        </p>

        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-b2w-orange to-orange-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center bg-white rounded-full shadow-xl">
            <div className="pl-6 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="w-full py-4 px-4 text-gray-700 bg-transparent rounded-full focus:outline-none text-lg placeholder-gray-400"
              placeholder="e.g., I need a SaaS explainer video..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button 
              onClick={onSearch}
              className="m-2 bg-b2w-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d94018] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-b2w-orange"
            >
              Search
            </button>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
           <span>Try searching:</span>
           <button onClick={() => {setQuery("SaaS case study"); onSearch()}} className="hover:text-b2w-orange underline cursor-pointer bg-transparent border-none p-0">SaaS Case Study</button>
           <span>•</span>
           <button onClick={() => {setQuery("Cybersecurity"); onSearch()}} className="hover:text-b2w-orange underline cursor-pointer bg-transparent border-none p-0">Cybersecurity</button>
           <span>•</span>
           <button onClick={() => {setQuery("Corporate Innovation"); onSearch()}} className="hover:text-b2w-orange underline cursor-pointer bg-transparent border-none p-0">Corporate Innovation</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
