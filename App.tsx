import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import VideoCard from './components/VideoCard';
import { VIDEO_DATA } from './data';
import { VideoObject } from './types';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [displayedVideos, setDisplayedVideos] = useState<VideoObject[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Initialize with 3 random featured videos
  useEffect(() => {
    const shuffled = [...VIDEO_DATA].sort(() => 0.5 - Math.random());
    setDisplayedVideos(shuffled.slice(0, 3));
  }, []);

  const handleSearch = () => {
    if (!query.trim()) {
      // If query is empty, reset to featured (random) logic or keep current
      setHasSearched(false);
      return;
    }

    setIsSearching(true);
    setHasSearched(true);

    // Simulate a brief search delay for better UX
    setTimeout(() => {
      const lowerQuery = query.toLowerCase().trim();
      const terms = lowerQuery.split(/\s+/);

      // Scoring system
      const scoredVideos = VIDEO_DATA.map(video => {
        let score = 0;
        const nameLower = video.name.toLowerCase();
        const descLower = video.description.toLowerCase();
        const keywordsLower = video.keywords.toLowerCase();

        terms.forEach(term => {
          if (nameLower.includes(term)) score += 10;
          if (keywordsLower.includes(term)) score += 5;
          if (descLower.includes(term)) score += 2;
        });

        return { video, score };
      });

      // Filter out zero scores and sort by score descending
      const results = scoredVideos
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.video);

      // Take top 3-6 matches
      setDisplayedVideos(results.slice(0, 6));
      setIsSearching(false);
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-b2w-dark">
      <Header />
      
      <main className="flex-grow">
        <HeroSearch 
          query={query} 
          setQuery={setQuery} 
          onSearch={handleSearch} 
        />

        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-b2w-dark">
                  {hasSearched ? `Results for "${query}"` : 'Featured Videos'}
                </h2>
                <p className="text-gray-500 mt-2">
                  {hasSearched 
                    ? `We found ${displayedVideos.length} videos matching your needs.` 
                    : 'Hand-picked examples of our best work.'}
                </p>
              </div>
              
              {!hasSearched && (
                <button 
                  onClick={() => {
                    const shuffled = [...VIDEO_DATA].sort(() => 0.5 - Math.random());
                    setDisplayedVideos(shuffled.slice(0, 3));
                  }}
                  className="hidden md:block text-b2w-orange font-medium hover:text-[#d94018] text-sm"
                >
                  Refresh suggestions
                </button>
              )}
            </div>

            {isSearching ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-80 bg-gray-200 rounded-xl"></div>
                ))}
              </div>
            ) : (
              <>
                {displayedVideos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedVideos.map((video, index) => (
                      <div key={video.embedUrl + index} className="h-full">
                        <VideoCard video={video} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="inline-block p-4 rounded-full bg-orange-50 text-b2w-orange mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No videos found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      We couldn't find exact matches for "{query}". Try using broader terms like "SaaS", "Animation", or "Corporate".
                    </p>
                    <button 
                      onClick={() => {
                        setQuery('');
                        setHasSearched(false);
                        const shuffled = [...VIDEO_DATA].sort(() => 0.5 - Math.random());
                        setDisplayedVideos(shuffled.slice(0, 3));
                      }}
                      className="mt-6 text-b2w-orange font-semibold hover:underline"
                    >
                      Clear search and view featured
                    </button>
                  </div>
                )}
              </>
            )}

          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-b2w-dark text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to tell your story?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Broadcast2World helps brands simplify complex ideas through premium motion graphics. Let's create something amazing together.
            </p>
            <button className="bg-b2w-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#d94018] transition-colors shadow-lg shadow-orange-500/30">
              Book Your Free Consultation
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Broadcast2World. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
