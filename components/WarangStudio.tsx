
import React from 'react';
import { MapPin, BookOpen, ChevronRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const WarangStudio: React.FC = () => {
  const { content } = useContent();
  const { warang } = content;

  return (
    <section id="warang" className="py-24 md:py-40 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-blue-600 font-space tracking-[0.3em] uppercase mb-4">Our Basecamp</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">{warang.title}</h3>
          <p className="text-gray-600">
            {warang.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-8 rounded-3xl overflow-hidden shadow-xl relative group min-h-[400px]">
            <img 
              src={warang.mainImage} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Warang Studio Main"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10 text-white">
              <p className="text-sm font-space uppercase tracking-widest mb-2">Workspace</p>
              <h4 className="text-2xl font-bold">집중과 회복의 공간</h4>
            </div>
          </div>
          
          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-lg relative group">
              <img 
                src={warang.subImage1} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Jeju Nature 1"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg relative group">
              <img 
                src={warang.subImage2} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Jeju Nature 2"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="text-center md:text-left md:mr-10 mb-8 md:mb-0">
            <p className="text-2xl text-[#0A1929] font-medium leading-relaxed">
              "{warang.quote.split(',')[0]},<br className="hidden md:block" />{warang.quote.split(',')[1] || ''}"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://naver.me/FDGH15XY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 bg-[#03C75A] text-white rounded-2xl font-bold shadow-lg hover:shadow-[#03C75A]/30 hover:-translate-y-1 transition-all group"
            >
              <MapPin className="w-5 h-5" />
              <span>방문 예약하기</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://blog.naver.com/warangstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#0A1929] border-2 border-gray-100 rounded-2xl font-bold shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all group"
            >
              <BookOpen className="w-5 h-5" />
              <span>와랑 이야기 (블로그)</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarangStudio;
