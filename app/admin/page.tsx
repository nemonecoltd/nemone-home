"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, Plus, Trash2, Loader2, Save, X, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nemoneai.com/api';
const SECRET = 'nemone1234!';

export default function AdminNewsPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [pw, setPw] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/news?limit=100`);
      if (res.ok) { const d = await res.json(); setNews(d.news); }
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => { if (auth) fetchNews(); }, [auth]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === SECRET) setAuth(true);
    else alert('비밀번호가 틀렸습니다.');
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    setSaving(true);
    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('content', content);
      const res = await fetch(`${API_URL}/news`, {
        method: 'POST',
        headers: { 'x-news-secret': pw },
        body: fd,
      });
      if (res.ok) { setTitle(''); setContent(''); setShowForm(false); fetchNews(); }
      else alert('등록 실패');
    } catch {} finally { setSaving(false); }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    try {
      const res = await fetch(`${API_URL}/news/${id}`, {
        method: 'DELETE',
        headers: { 'x-news-secret': pw },
      });
      if (res.ok) fetchNews();
      else alert('삭제 실패');
    } catch {}
  };

  if (!auth) {
    return (
      <div className="min-h-screen bg-jeju-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white/[.03] border border-white/[.07] p-10 rounded-2xl text-center">
          <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 border border-accent/20">
            <Lock className="text-accent w-7 h-7" />
          </div>
          <h2 className="text-white text-xl font-bold mb-8">NEMONE Admin News</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password" value={pw} onChange={e => setPw(e.target.value)}
              placeholder="Admin Password"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white text-center focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
            <button className="w-full bg-accent text-jeju-900 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
              로그인
            </button>
            <button type="button" onClick={() => router.push('/')}
              className="text-slate-600 text-sm hover:text-slate-400 transition-colors">
              돌아가기
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-jeju-900 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/')}
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
              <ChevronLeft className="text-white w-5 h-5" />
            </button>
            <h1 className="text-white text-2xl font-bold">News Management</h1>
          </div>
          <button onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-accent text-jeju-900 px-5 py-2.5 rounded-xl font-bold hover:opacity-90 transition-opacity">
            <Plus size={18} /><span>새 소식 추가</span>
          </button>
        </header>

        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
            <div className="max-w-2xl w-full bg-jeju-800 border border-white/[.1] p-8 rounded-2xl relative">
              <button onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
                <X size={22} />
              </button>
              <h2 className="text-white text-xl font-bold mb-6">새 소식 작성</h2>
              <form onSubmit={handleAdd} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-accent text-[10px] font-black uppercase tracking-widest">Title</label>
                  <input value={title} onChange={e => setTitle(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white focus:outline-none focus:ring-2 focus:ring-accent/40"
                    placeholder="제목을 입력하세요" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-accent text-[10px] font-black uppercase tracking-widest">Content</label>
                  <textarea value={content} onChange={e => setContent(e.target.value)}
                    rows={7}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-5 text-white focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                    placeholder="내용을 입력하세요" />
                </div>
                <button disabled={saving}
                  className="w-full bg-accent text-jeju-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 transition-opacity">
                  {saving ? <Loader2 className="animate-spin" size={18} /> : <><Save size={18} /><span>게시하기</span></>}
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="space-y-3">
          {loading ? (
            <div className="py-20 flex justify-center"><Loader2 className="text-accent animate-spin w-8 h-8" /></div>
          ) : news.length > 0 ? (
            news.map(item => (
              <div key={item.id}
                className="bg-white/[.025] border border-white/[.07] p-5 rounded-xl flex items-center justify-between gap-4 hover:border-white/[.12] transition-colors">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] font-mono text-accent/40 block mb-1">
                    {item.created_at?.substring(0, 10).replace(/-/g, '.') ?? ''}
                  </span>
                  <h3 className="text-white font-medium truncate">{item.title}</h3>
                </div>
                <button onClick={() => handleDelete(item.id)}
                  className="p-2 text-slate-600 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-all">
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-slate-700 italic border-2 border-dashed border-white/[.05] rounded-xl">
              등록된 소식이 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
