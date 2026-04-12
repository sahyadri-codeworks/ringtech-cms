import React, { useState } from 'react';
const BlogEditor = ({ post, onSave, onCancel }) => {
    const [title, setTitle] = useState(post?.title || '');
    const [labels, setLabels] = useState(post?.labels?.join(', ') || '');
    const [content, setContent] = useState(post?.content || '');
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
          e.preventDefault();
          setLoading(true);
          const blogData = { title, labels: labels.split(',').map(tag => tag.trim()).filter(t => t !== ''), content };
          setTimeout(() => { onSave(blogData); setLoading(false); }, 1000);
    };
    return (
          <div className="blog-editor animate-fade">
                <div className="editor-header"><button className="btn btn-secondary back-btn" onClick={onCancel}>B</button>button><h2>{post ? 'Edit Post' : 'Create Post'}</h2>h2></div>div>
                <form className="editor-form" onSubmit={handleSubmit}>
                        <div className="editor-layout">
                                  <div className="editor-main glass">
                                              <div className="input-group"><label className="input-label">Title</label>label><input type="text" className="input-field" value={title} onChange={(e) => setTitle(e.target.value)} required /></div>div>
                                              <div className="input-group"><label className="input-label">Content</label>label><textarea className="input-field" style={{minHeight:'300px'}} value={content} onChange={(e) => setContent(e.target.value)} required /></div>div>
                                  </div>div>
                                  <aside className="editor-sidebar glass">
                                              <div className="input-group"><label className="input-label">Labels</label>label><input type="text" className="input-field" value={labels} onChange={(e) => setLabels(e.target.value)} /></div>div>
                                              <div className="editor-actions">
                                                            <button type="submit" className="btn btn-primary" disabled={loading}>{loading ? 'Saving...' : 'Save Post'}</button>button>
                                                            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>button>
                                              </div>div>
                                  </aside>aside>
                        </div>div>
                </form>form>
                <style>{`
                        .editor-layout { display: grid; grid-template-columns: 1fr 300px; gap: 24px; }
                                .editor-main, .editor-sidebar { padding: 24px; }
                                        .editor-actions { display: flex; flex-direction: column; gap: 12px; margin-top: 24px; }
                                              `}</style>style>
          </div>div>
        );
};
export default BlogEditor;
</div>
