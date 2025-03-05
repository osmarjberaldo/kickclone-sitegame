
import React, { useEffect, useRef } from 'react';
import flvjs from 'flv.js';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer = ({ src, className }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const flvPlayerRef = useRef<flvjs.Player | null>(null);

  useEffect(() => {
    if (flvjs.isSupported() && videoRef.current) {
      const flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: src,
        isLive: true,
      });
      
      flvPlayer.attachMediaElement(videoRef.current);
      flvPlayer.load();
      flvPlayer.play();
      
      flvPlayerRef.current = flvPlayer;
    } else {
      console.error('FLV.js is not supported in this browser');
    }

    return () => {
      if (flvPlayerRef.current) {
        flvPlayerRef.current.unload();
        flvPlayerRef.current.detachMediaElement();
        flvPlayerRef.current.destroy();
        flvPlayerRef.current = null;
      }
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <video 
        ref={videoRef} 
        className="w-full h-full" 
        controls
        autoPlay
      />
    </div>
  );
};

export default VideoPlayer;
