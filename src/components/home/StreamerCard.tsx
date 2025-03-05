
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Play } from 'lucide-react';
import VideoPlayer from '@/components/ui/video-player';

interface StreamerCardProps {
  streamer: {
    id: string;
    username: string;
    displayName: string;
    avatar: string;
    title: string;
    category: string;
    thumbnailUrl: string;
    viewerCount: number;
  };
}

const StreamerCard = ({ streamer }: StreamerCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const streamUrl = "https://stream-cdn-iad3.vaughnsoft.net/play/live_sintonia.flv";

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="block card-hover bg-streamBlack-lighter rounded-lg overflow-hidden">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        {isPlaying ? (
          <VideoPlayer src={streamUrl} className="w-full h-full" />
        ) : (
          <img 
            src={streamer.thumbnailUrl} 
            alt={streamer.title} 
            className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
          />
        )}
        <div className="absolute top-2 left-2">
          <span className="live-indicator">LIVE</span>
        </div>
        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center">
          <Users className="h-3 w-3 mr-1" /> {streamer.viewerCount.toLocaleString()}
        </div>
        <button 
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
          onClick={handlePlayClick}
        >
          <div className="bg-streamPurple text-white p-3 rounded-full">
            <Play className="h-6 w-6" />
          </div>
        </button>
      </div>

      {/* Content */}
      <Link to={`/${streamer.username}`} className="block p-3">
        <div className="flex">
          <img 
            src={streamer.avatar} 
            alt={streamer.displayName} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="overflow-hidden">
            <h3 className="text-white font-semibold truncate">{streamer.title}</h3>
            <p className="text-streamGray-dark text-sm">{streamer.displayName}</p>
            <p className="text-streamGray-darker text-xs">{streamer.category}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StreamerCard;
