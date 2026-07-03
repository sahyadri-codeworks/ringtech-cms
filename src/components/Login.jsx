import React, { useState } from 'react';
const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
          e.preventDefault();
          setLoading(true);
          setError(null);
          setTimeout(() => {
                  if (email === 'admin@ringtech.com' && password === 'admin123') {
                            onLogin(true);
                  } else {
                            setError('Invalid email or password. (Try admin@ringtech.com / admin123)');
                  }
                  setLoading(false);
          }, 1000);
    };
    return (
          <div className="login-container">
                <div className="login-card glass animate-fade">
                        <div className="login-header">
                                  <div className="logo-placeholder">RT</div>div>
                                  <h1>RingTech Admin</h1>h1>
                                  <p>Sign in to manage your blog</p>p>
                        </div>div>
                        <form onSubmit={handleSubmit}>
                                  <div className="input-group">
                                              <label className="input-label">Email Address</label>label>
                                              <input type="email" className="input-field" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                  </div>div>
                                  <div className="input-group">
                                              <label className="input-label">Password</label>label>
                                              <input type="password" className="input-field" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                  </div>div>
                          {error && <div className="error-message animate-fade">{error}</div>div>}
                                  <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
                                    {loading ? 'Authenticating...' : 'Sign In'}
                                  </button>button>
                        </form>form>
                        <div className="login-footer"><p>&copy; 2026 RingTech Global. All rights reserved.</p>p></div>div>
                </div>div>
                <style>{`
                        .login-container { display: flex; align-items: center; justify-content: center; min-height: 100vh; padding: 20px; background: radial-gradient(circle at top right, rgba(0, 122, 255, 0.1), transparent), radial-gradient(circle at bottom left, rgba(0, 122, 255, 0.05), transparent); }
                                .login-card { width: 100%; max-width: 400px; padding: 40px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4); }
                                        .login-header { text-align: center; margin-bottom: 32px; }
                                                .logo-placeholder { width: 64px; height: 64px; background: var(--primary); color: white; font-weight: 800; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; border-radius: 16px; margin: 0 auto 16px; box-shadow: 0 8px 16px rgba(0, 122, 255, 0.4); }
                                                        .login-header h1 { font-size: 1.75rem; margin-bottom: 8px; }
                                                                .login-header p { color: var(--text-muted); font-size: 0.95rem; }
                                                                        .login-btn { width: 100%; margin-top: 8px; }
                                                                                .error-message { color: var(--error); background: rgba(255, 69, 58, 0.1); padding: 10px; border-radius: 8px; font-size: 0.85rem; margin-bottom: 16px; border: 1px solid rgba(255, 69, 58, 0.2); }
                                                                                        .login-footer { margin-top: 32px; text-align: center; color: var(--text-muted); font-size: 0.8rem; }
                                                                                              `}</style>style>
          </div>div>
        );
};
export default Login;
</div>
