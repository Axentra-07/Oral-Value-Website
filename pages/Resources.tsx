import React from 'react';
import { PlayCircle, ArrowRight, Calendar, Tag } from 'lucide-react';
import { Article, VideoResource } from '../types';

const articles: Article[] = [
  {
    id: '1',
    title: "Why Age 7 is the Magic Number for Orthodontics",
    excerpt: "The American Association of Orthodontists recommends a check-up by age 7. Learn why early detection can prevent serious issues later in life.",
    category: "Orthodontics",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: '2',
    title: "The Ultimate Brushing Guide for Toddlers",
    excerpt: "Struggling with brushing time? Discover our top tips and tricks to make oral hygiene fun and effective for your little ones.",
    category: "Pediatric Care",
    date: "Sep 28, 2023",
    image: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: '3',
    title: "Clear Aligners vs. Metal Braces: Which is Right for You?",
    excerpt: "A comprehensive comparison of cost, comfort, and aesthetics to help you choose the best treatment path for your smile.",
    category: "Treatment",
    date: "Sep 15, 2023",
    image: "/images/aligners_vs_braces.jpg"
  },
  {
    id: '4',
    title: "Healthy Snacks for Healthy Teeth",
    excerpt: "Not all snacks are created equal. Here is a list of tooth-friendly foods to pack in your child's lunchbox.",
    category: "Nutrition",
    date: "Aug 22, 2023",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600"
  }
];

const videos: VideoResource[] = [
  {
    id: '1',
    title: "How Clear Aligners Move Your Teeth",
    duration: "2:15",
    thumbnail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: '2',
    title: "Your Child's First Dental Visit: What to Expect",
    duration: "4:30",
    thumbnail: "components/Public/Images/kids.webp"
  },
  {
    id: '3',
    title: "Proper Flossing Techniques with Braces",
    duration: "3:45",
    thumbnail: "https://images.unsplash.com/photo-1559595500-e15296bdbb48?auto=format&fit=crop&q=80&w=800"
  }
];

const Resources: React.FC = () => {
  return (
    <div className="animate-fade-in font-sans pb-20">
      {/* Header */}
      <div className="bg-light py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent font-bold uppercase tracking-widest text-xs mb-3 block">Patient Education</span>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-6">News & Resources</h1>
          <p className="max-w-2xl mx-auto text-lg text-neutralLight">
            Stay informed with the latest updates, care guides, and tips for maintaining a healthy smile.
          </p>
        </div>
      </div>

      {/* Articles Section */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-neutral">Latest Articles</h2>
          <button className="text-primary font-bold text-sm hover:underline flex items-center gap-2 group">
            View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="group flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="md:w-2/5 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[200px]"
                />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3 text-xs font-bold text-neutralLight uppercase tracking-wider">
                    <span className="text-accent flex items-center gap-1"><Tag size={12} /> {article.category}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral mb-3 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-neutralLight text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
                <button className="text-primary text-sm font-bold uppercase tracking-wide self-start hover:text-accent transition-colors">
                  Read Article
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-neutral text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
             <span className="text-accent font-bold uppercase tracking-widest text-xs mb-3 block">Watch & Learn</span>
             <h2 className="text-3xl md:text-4xl font-bold">Educational Videos</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {videos.map((video) => (
               <div key={video.id} className="group cursor-pointer">
                 <div className="relative rounded-2xl overflow-hidden aspect-video mb-4 shadow-lg">
                   <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                   />
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                     <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/40">
                       <PlayCircle size={32} className="text-white fill-white/20" />
                     </div>
                   </div>
                   <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                     {video.duration}
                   </div>
                 </div>
                 <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{video.title}</h3>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Newsletter / Updates */}
      <section className="container mx-auto px-4 md:px-8 py-20">
         <div className="bg-primary/5 rounded-3xl p-10 md:p-16 text-center border border-primary/10">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral mb-4">Subscribe to our Newsletter</h2>
            <p className="text-neutralLight max-w-xl mx-auto mb-8">
              Get the latest dental health tips, clinic news, and exclusive offers delivered directly to your inbox.
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              />
              <button type="button" className="bg-primary hover:bg-primaryDark text-white px-6 py-4 rounded-xl font-bold shadow hover:shadow-lg transition-all">
                Subscribe
              </button>
            </form>
         </div>
      </section>
    </div>
  );
};

export default Resources;