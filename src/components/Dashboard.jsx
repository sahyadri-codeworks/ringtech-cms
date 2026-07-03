import React, { useState } from 'react';
import BlogEditor from './BlogEditor';
const Dashboard = ({ onLogout }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [posts, setPosts] = useState([
      { id: 1, title: 'Welcome to RingTech', labels: ['News', 'Announcements'], content: 'This is our first post.', date: '2026-04-12' },
      { id: 2, title: 'The Future of Networking', labels: ['Tech', 'Cisco'], content: 'Exploring the future...', date: '2026-04-10' },
        ]);
    const [editingPost, setEditingPost] = useState(null);
    const stats = [
      { label: 'Total Posts', value: posts.length, icon: 'P' },
      { label: 'Total Views', value: '1.2k', icon: 'V' },
      { label: 'Active Drafts', value: '3', icon: 'D' },
        ];
    const handleSavePost = (blogData) => {
          if (editingPost) { setPosts(posts.map(p => p.id === editingPost.id ? { ...p, ...blogData } : p)); }
          else { setPosts([{ id: Date.now(), ...blogData, date: new Date().toISOString().split('T')[0] }, ...posts]); }
          setEditingPost(null); setActiveTab('posts');
    };
    const handleEdit = (post) => { setEditingPost(post); setActiveTab('edit-post'); };
    const handleDelete = (id) => { if(window.confirm('Are you sure?')) { setPosts(posts.filter(p => p.id !== id)); } };
    return (
          <div className="dashboard-container">
                <aside className="sidebar glass">
                        <div className="sidebar-header"><div className="logo-sm">RT</div>div><h2>Admin</h2>h2></div>div>
                        <nav className="sidebar-nav">
                                  <button className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => {setActiveTab('overview'); setEditingPost(null);}}><span className="icon">H</span>span> Overview</button>button>
                                  <button className={`nav-item ${activeTab === 'posts' ? 'active' : ''}`} onClick={() => {setActiveTab('posts'); setEditingPost(null);}}><span className="icon">P</span>span> My Posts</button>button>
                                  <button className={`nav-item ${activeTab === 'new-post' || activeTab === 'edit-post' ? 'active' : ''}`} onClick={() => {setEditingPost(null); setActiveTab('new-post');}}><span className="icon">+</span>span> Create Post</button>button>
                        </nav>nav>
                        <div className="sidebar-footer"><button className="btn btn-secondary logout-btn" onClick={() => onLogout()}>Logout</button>button></div>div>
                </aside>aside>
                <main className="main-content animate-fade">
                        <header className="content-header"><h1>{activeTab === 'edit-post' ? 'Edit Post' : activeTab === 'new-post' ? 'Create Post' : activeTab}</h1>h1><div className="user-profile"><span className="user-name">Admin User</span>span><div className="avatar">A</div>div></div>div></header>header>
                  {activeTab === 'overview' && (
                      <div className="overview-grid">{stats.map((stat, i) => (
                                    <div key={i} className="stat-card glass animate-fade" style={{ animationDelay: `${i * 0.1}s` }}><span className="stat-icon">{stat.icon}</span>span><div className="stat-info"><span className="stat-label">{stat.label}</span>span><span className="stat-value">{stat.value}</span>span></div>div></div>div>
                                  ))}</div>div>
                        )}
                  {activeTab === 'posts' && (
                      <div className="posts-list glass animate-fade">
                                  <div className="list-header"><span>Title</span>span><span>Labels</span>span><span>Date</span>span><span>Actions</span>span></div>div>
                        {posts.map(post => (
                                      <div key={post.id} className="post-row"><span className="post-title">{post.title}</span>span><span className="post-labels">{post.labels.map(l => <span key={l} className="label-badge">{l}</span>span>)}</span>span><span className="post-date">{post.date}</span>span><div className="post-actions"><button className="action-btn edit" onClick={() => handleEdit(post)}>E</button>button><button className="action-btn delete" onClick={() => handleDelete(post.id)}>D</button>button></div>div></div>div>
                                    ))}
                      </div>div>
                        )}
                  {(activeTab === 'new-post' || activeTab === 'edit-post') && <BlogEditor post={editingPost} onSave={handleSavePost} onCancel={() => setActiveTab('posts')} />}
                </main>main>
                <style>{`
                        .dashboard-container { display: flex; min-height: 100vh; background: var(--bg-dark); }
                                .sidebar { width: 260px; height: 100vh; display: flex; flex-direction: column; border-radius: 0; border-right: 1px solid var(--glass-border); position: sticky; top: 0; z-index: 10; }
                                        .sidebar-header { padding: 32px 24px; display: flex; align-items: center; gap: 12px; }
                                                .logo-sm { width: 32px; height: 32px; background: var(--primary); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.9rem; }
                                                        .sidebar-nav { flex: 1; padding: 0 16px; }
                                                                .nav-item { width: 100%; display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 10px; border: none; background: transparent; color: var(--text-muted); font-family: inherit; font-size: 0.95rem; font-weight: 500; cursor: pointer; transition: var(--transition); margin-bottom: 4px; text-align: left; }
                                                                        .nav-item.active { background: var(--primary); color: white; }
                                                                                .main-content { flex: 1; padding: 40px; max-width: 1200px; margin: 0 auto; width: 100%; }
                                                                                        .content-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
                                                                                                .overview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
                                                                                                        .stat-card { padding: 24px; display: fle</div>
