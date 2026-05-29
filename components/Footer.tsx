
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 border-2 border-[#0A1929] flex items-center justify-center transform rotate-45">
                 <div className="w-3 h-3 bg-blue-500 transform rotate-45"></div>
              </div>
              <span className="font-space font-bold text-xl tracking-tighter">NEMONE Inc.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI로 창조한 시간,<br />인간 본연의 가치를 탐구하는<br />AI 혁신 파트너, 네모네 주식회사
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Connect</h5>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="https://nemoneai.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">네모네AIM</a></li>
              <li><a href="https://now.nemoneai.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">지금여기</a></li>
              <li><a href="https://smartstore.naver.com/nemone24" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">네모네스토어</a></li>
              <li><a href="https://naver.me/FDGH15XY" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">와랑스튜디오</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Legal</h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="https://now.nemoneai.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Privacy Policy</a></li>
              <li>Terms of Service</li>
              <li>Investor Relations</li>
              <li>Career</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest">Contact</h5>
            <address className="not-italic text-gray-500 text-sm space-y-4 font-medium">
              <p>제주시 한경면 낙천리 1235번지</p>
              <p>contact@nemoneai.com</p>
              <p>대표이사 정환석</p>
            </address>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 text-[10px] text-gray-400 font-space tracking-widest uppercase">
          <p>© 2024 NEMONE INC. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-[#0A1929]">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
