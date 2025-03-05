
import React from 'react';
import Layout from '@/components/layout/Layout';
import FeaturedStreamer from '@/components/home/FeaturedStreamer';
import StreamerCard from '@/components/home/StreamerCard';
import CategoryCard from '@/components/home/CategoryCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

// Sample data
const featuredStreamer = {
  id: '1',
  username: 'resdx',
  displayName: 'RedsonX',
  avatar: 'https://i.pravatar.cc/150?img=1',
  title: 'Late Night Gaming Session! New Update Exploration',
  category: 'Call of Duty: Warzone',
  thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  viewerCount: 12540,
  tags: ['FPS', 'Shooter', 'Battle Royale', 'Competitive']
};

const liveStreamers = [
  {
    id: '1',
    username: 'resdx',
    displayName: 'RedsonX',
    avatar: 'https://i.pravatar.cc/150?img=1',
    title: 'Late Night Gaming Session! New Update Exploration',
    category: 'Call of Duty: Warzone',
    thumbnailUrl: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    viewerCount: 12540
  },
  {
    id: '2',
    username: 'gamergirl',
    displayName: 'GamerGirl',
    avatar: 'https://i.pravatar.cc/150?img=5',
    title: 'Ranked Matches with Viewers!',
    category: 'League of Legends',
    thumbnailUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    viewerCount: 8750
  },
  {
    id: '3',
    username: 'proplayer',
    displayName: 'ProPlayer',
    avatar: 'https://i.pravatar.cc/150?img=8',
    title: 'Professional Tournament Practice',
    category: 'Valorant',
    thumbnailUrl: 'https://images.unsplash.com/photo-1603481546238-487240415921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    viewerCount: 15320
  },
  {
    id: '4',
    username: 'craftking',
    displayName: 'CraftKing',
    avatar: 'https://i.pravatar.cc/150?img=12',
    title: 'Building a Mega Castle in Survival Mode',
    category: 'Minecraft',
    thumbnailUrl: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80',
    viewerCount: 6420
  }
];

const recommendedStreamers = [
  {
    id: '5',
    username: 'speedrunner',
    displayName: 'SpeedRunner',
    avatar: 'https://i.pravatar.cc/150?img=15',
    title: 'World Record Attempt! Sub 2 Hour Run',
    category: 'Elden Ring',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    viewerCount: 7890
  },
  {
    id: '6',
    username: 'funstreamer',
    displayName: 'FunStreamer',
    avatar: 'https://i.pravatar.cc/150?img=20',
    title: 'Funny Moments & Fails Compilation',
    category: 'Just Chatting',
    thumbnailUrl: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    viewerCount: 9540
  },
  {
    id: '7',
    username: 'artistpro',
    displayName: 'ArtistPro',
    avatar: 'https://i.pravatar.cc/150?img=23',
    title: 'Digital Art Commission - Creating Your Requests',
    category: 'Art',
    thumbnailUrl: 'https://images.unsplash.com/photo-1607457716431-3e7c91537525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80',
    viewerCount: 3250
  },
  {
    id: '8',
    username: 'musica',
    displayName: 'Musica',
    avatar: 'https://i.pravatar.cc/150?img=32',
    title: 'Live Music Session - Taking Requests!',
    category: 'Music',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    viewerCount: 5680
  }
];

const categories = [
  {
    id: 'gaming',
    name: 'Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1632823471362-1b6c79cbc98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1412&q=80',
    viewerCount: 450000
  },
  {
    id: 'irl',
    name: 'IRL',
    imageUrl: 'https://images.unsplash.com/photo-1601456713873-d4049fa677b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2137&q=80',
    viewerCount: 220000
  },
  {
    id: 'music',
    name: 'Music',
    imageUrl: 'https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    viewerCount: 120000
  },
  {
    id: 'creative',
    name: 'Creative',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    viewerCount: 80000
  },
  {
    id: 'esports',
    name: 'Esports',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    viewerCount: 320000
  },
  {
    id: 'talk-shows',
    name: 'Talk Shows',
    imageUrl: 'https://images.unsplash.com/photo-1488861859635-0ccd518aefd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    viewerCount: 110000
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="stream-container py-8">
        {/* Featured Streamer */}
        <section className="mb-12">
          <FeaturedStreamer streamer={featuredStreamer} />
        </section>

        {/* Live Now */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">Live Now</h2>
            <Button variant="link" className="text-streamPurple hover:text-streamPurple-light">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {liveStreamers.map((streamer) => (
              <StreamerCard key={streamer.id} streamer={streamer} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">Categories</h2>
            <Button variant="link" className="text-streamPurple hover:text-streamPurple-light">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">Recommended For You</h2>
            <Button variant="link" className="text-streamPurple hover:text-streamPurple-light">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recommendedStreamers.map((streamer) => (
              <StreamerCard key={streamer.id} streamer={streamer} />
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mb-6">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-streamPurple to-streamPurple-light p-8 md:p-12">
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Streaming?</h2>
              <p className="text-white/80 mb-6 max-w-2xl">Join thousands of creators and start your streaming journey today. Share your passion with the world.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-streamPurple hover:bg-streamGray">
                  Start Streaming
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white">
                <path d="M23 7l-7 5 7 5V7z"></path>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
