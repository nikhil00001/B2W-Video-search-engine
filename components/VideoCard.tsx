import React from 'react';
import { VideoObject } from '../types';

interface VideoCardProps {
  video: VideoObject;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="group bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(239,81,37,0.15)] transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="relative w-full aspect-video bg-gray-200">
        <iframe 
          className="w-full h-full absolute top-0 left-0"
          src={video.embedUrl} 
          title={video.name}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-b2w-dark mb-2 leading-tight group-hover:text-b2w-orange transition-colors">
          {video.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {video.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
           <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded">
             {video.keywords.split(',')[0]}
           </span>
           <button className="text-b2w-orange text-sm font-semibold hover:underline flex items-center gap-1 group/btn">
             Book Consultation
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/btn:translate-x-1 transition-transform">
               <path d="M5 12h14"></path>
               <path d="m12 5 7 7-7 7"></path>
             </svg>
           </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
