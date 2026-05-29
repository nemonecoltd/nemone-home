
import React, { useState } from 'react';
import { Settings, X, Save, Lock, Image as ImageIcon, Type, Layout, Sparkles, Database, Globe } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const AdminPanel: React.FC = () => {
  const { content, updateContent } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [tempContent, setTempContent] = useState(content);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'nemone123') {
      setIsAuthorized(true);
      setTempContent(content);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleSave = () => {
    updateContent(tempContent);
    alert('저장되었습니다!');
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[100] p-4 bg-[#0A1929] text-white rounded-full shadow-2xl hover:bg-[#00D9FF] hover:text-[#0A1929] transition-all transform hover:rotate-90"
      >
        <Settings className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[110] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl overflow-y-auto p-8 animate-slide-in-right">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Settings className="w-6 h-6 text-[#00D9FF]" />
            NEMONE Admin Console
          </h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        {!isAuthorized ? (
          <div className="h-full flex flex-col justify-center items-center py-20">
            <Lock className="w-12 h-12 text-gray-300 mb-6" />
            <form onSubmit={handleLogin} className="w-full space-y-4">
              <input 
                type="password" 
                placeholder="비밀번호 입력 (nemone123)"
                className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-[#00D9FF] outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="w-full bg-[#0A1929] text-white py-4 rounded-xl font-bold">인증하기</button>
            </form>
          </div>
        ) : (
          <div className="space-y-12 pb-20">
            {/* API Endpoint Configuration */}
            <div className="space-y-6">
              <h3 className="text-sm font-space tracking-widest uppercase text-blue-600 font-bold border-b pb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" /> Internal RAG Server (Webhook)
              </h3>
              <div className="space-y-4">
                <label className="block text-xs font-bold text-gray-400 uppercase">Custom API Endpoint URL</label>
                <input 
                  className="w-full border-b-2 p-2 outline-none focus:border-blue-500 font-mono text-sm text-blue-700"
                  value={tempContent.apiEndpoint}
                  onChange={(e) => setTempContent({...tempContent, apiEndpoint: e.target.value})}
                  placeholder="https://your-internal-rag.com/api/chat"
                />
                <p className="text-[10px] text-gray-400 italic">* 입력 시 Gemini SDK 대신 해당 서버로 POST 요청을 보냅니다. 비워두면 기존 Gemini를 사용합니다.</p>
              </div>
            </div>

            {/* AI Knowledge Base Edit */}
            <div className="space-y-6">
              <h3 className="text-sm font-space tracking-widest uppercase text-blue-600 font-bold border-b pb-2 flex items-center gap-2">
                <Database className="w-4 h-4" /> AI Knowledge Base
              </h3>
              <textarea 
                rows={8}
                className="w-full border-2 p-4 text-sm font-sans outline-none rounded-xl focus:border-blue-500 leading-relaxed"
                value={tempContent.aiKnowledge}
                onChange={(e) => setTempContent({...tempContent, aiKnowledge: e.target.value})}
              />
            </div>

            {/* Hero Section Edit */}
            <div className="space-y-6">
              <h3 className="text-sm font-space tracking-widest uppercase text-blue-600 font-bold border-b pb-2 flex items-center gap-2">
                <Layout className="w-4 h-4" /> Hero Section
              </h3>
              <div className="space-y-4">
                <label className="block text-xs font-bold text-gray-400">Title Top</label>
                <input 
                  className="w-full border-b-2 p-2 outline-none focus:border-blue-500"
                  value={tempContent.hero.titleTop}
                  onChange={(e) => setTempContent({...tempContent, hero: {...tempContent.hero, titleTop: e.target.value}})}
                />
                <label className="block text-xs font-bold text-gray-400">Title Bottom</label>
                <input 
                  className="w-full border-b-2 p-2 outline-none focus:border-blue-500"
                  value={tempContent.hero.titleBottom}
                  onChange={(e) => setTempContent({...tempContent, hero: {...tempContent.hero, titleBottom: e.target.value}})}
                />
              </div>
            </div>

            <button 
              onClick={handleSave}
              className="w-full flex items-center justify-center gap-2 bg-[#00D9FF] text-[#0A1929] font-bold py-5 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform sticky bottom-0 z-10"
            >
              <Save className="w-5 h-5" />
              변경사항 저장하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
