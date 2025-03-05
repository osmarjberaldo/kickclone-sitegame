
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturedStreamerProps {
  streamer: {
    id: string;
    username: string;
    displayName: string;
    avatar: string;
    title: string;
    category: string;
    thumbnailUrl: string;
    viewerCount: number;
    tags: string[];
  };
}

const FeaturedStreamer = ({ streamer }: FeaturedStreamerProps) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg group">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-streamBlack via-streamBlack/70 to-transparent z-10"></div>
      <div className="absolute inset-0">
        <img 
          src={streamer.thumbnailUrl} 
          alt={streamer.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
        <div className="max-w-3xl animate-slide-in">
          <div className="flex items-center space-x-3 mb-3">
            <span className="live-indicator">LIVE</span>
            <span className="text-white text-sm font-medium">
              <Users className="inline mr-1 h-4 w-4" /> {streamer.viewerCount.toLocaleString()} viewers
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">{streamer.title}</h2>
          
          <div className="flex items-center mb-4">
            <img 
              src={streamer.avatar} 
              alt={streamer.displayName} 
              className="w-10 h-10 rounded-full mr-3 border-2 border-streamPurple"
            />
            <div>
              <p className="text-white font-semibold">{streamer.displayName}</p>
              <p className="text-streamGray-dark text-sm">{streamer.category}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            {streamer.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2 py-1 rounded-full bg-streamBlack-lighter text-streamGray"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex space-x-3">
            <Button className="bg-streamPurple hover:bg-streamPurple-light text-white flex items-center gap-2">
              <Play className="h-4 w-4" />
              Watch Stream
            </Button>
            <Button variant="outline" className="border-streamGray-darker text-white hover:bg-white/10">
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStreamer;
