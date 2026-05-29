
import React, { useState, useEffect } from 'react';
import { ChevronLeft, Plus, Trash2, Loader2, Save, X, Lock } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const AdminNews: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const SECRET_PASSWORD = "nemone1234!"; // 백엔드와 맞춘 비밀번호

  const API_URL = import.meta.env.DEV ? 'http://localhost:8080' : 'https://nemoneai.com/api';

  const fetchAllNews = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/news?limit=100`);
      if (res.ok) {
        const data = await res.json();
        setNews(data.news);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllNews();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    setIsSaving(true);
    try {
      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("content", newContent);

      const res = await fetch(`${API_URL}/news`, {
        method: "POST",
        headers: {
          "x-news-secret": password
        },
        body: formData
      });

      if (res.ok) {
        alert("등록되었습니다.");
        setNewTitle("");
        setNewContent("");
        setShowAddForm(false);
        fetchAllNews();
      } else {
        alert("등록 실패");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      const res = await fetch(`${API_URL}/news/${id}`, {
        method: "DELETE",
        headers: {
          "x-news-secret": password
        }
      });

      if (res.ok) {
        alert("삭제되었습니다.");
        fetchAllNews();
      } else {
        alert("삭제 실패");
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0A1929] flex items-center justify-center p-6">
        <div className="max-w-md w-full glass p-10 rounded-3xl border border-white/10 text-center">
          <div className="w-16 h-16 bg-[#00D9FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="text-[#00D9FF] w-8 h-8" />
          </div>
          <h2 className="text-white text-2xl font-bold mb-8">NEMONE Admin News</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white text-center focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/50"
            />
            <button className="w-full bg-[#00D9FF] text-[#0A1929] py-4 rounded-xl font-bold hover:scale-105 transition-all">
              로그인
            </button>
            <button type="button" onClick={onBack} className="text-white/40 text-sm hover:text-white transition-colors">
              돌아가기
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1929] p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <button onClick={onBack} className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <h1 className="text-white text-3xl font-bold">News Management</h1>
          </div>
          <button 
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 bg-[#00D9FF] text-[#0A1929] px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,217,255,0.3)]"
          >
            <Plus size={20} />
            <span>새 소식 추가</span>
          </button>
        </header>

        {showAddForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
            <div className="max-w-2xl w-full glass p-10 rounded-[2.5rem] border border-white/10 relative">
              <button onClick={() => setShowAddForm(false)} className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors">
                <X size={24} />
              </button>
              <h2 className="text-white text-2xl font-bold mb-8">새 소식 작성</h2>
              <form onSubmit={handleAddNews} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[#00D9FF] text-xs font-bold uppercase tracking-widest ml-1">Title</label>
                  <input 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/50"
                    placeholder="제목을 입력하세요"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[#00D9FF] text-xs font-bold uppercase tracking-widest ml-1">Content</label>
                  <textarea 
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    rows={8}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:ring-2 focus:ring-[#00D9FF]/50 resize-none"
                    placeholder="내용을 입력하세요"
                  />
                </div>
                <button 
                  disabled={isSaving}
                  className="w-full bg-[#00D9FF] text-[#0A1929] py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {isSaving ? <Loader2 className="animate-spin" /> : <><Save size={20} /> <span>게시하기</span></>}
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {isLoading ? (
            <div className="py-20 flex justify-center"><Loader2 className="text-[#00D9FF] animate-spin w-10 h-10" /></div>
          ) : news.length > 0 ? (
            news.map(item => (
              <div key={item.id} className="glass p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:border-white/10 transition-all">
                <div className="min-w-0 flex-1 mr-6">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="text-[#00D9FF]/40 text-[10px] font-mono">{item.created_at ? item.created_at.substring(0, 10).replace(/-/g, '.') : ''}</span>
                  </div>
                  <h3 className="text-white font-medium text-lg truncate">{item.title}</h3>
                </div>
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="p-3 text-white/20 hover:text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-white/20 italic border-2 border-dashed border-white/5 rounded-[2rem]">
              등록된 소식이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminNews;
