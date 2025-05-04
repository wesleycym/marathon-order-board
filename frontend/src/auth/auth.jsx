'use client';

import { useState, useEffect } from 'react';
import { signInWithGoogle, signInWithEmail, signUpWithEmail,signOut, onAuthStateChanged } from '../firebase/firebase';
import { auth } from '../firebase/firebase';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/auth.css';



export default function SignIn() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleEmailAuth = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                await signUpWithEmail(email, password);
                //clear form
                setEmail('');
                setPassword('');
                setError(null);
            } else {
                await signInWithEmail(email, password);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    if (loading) {
        return (
            <div className={`auth-container ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="auth-card">
                    <div>Loading...</div>
                </div>
            </div>
        );
    }

    return (
        <div className={`auth-container ${isDarkMode ? 'dark' : 'light'}`}>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            
            <div className={`auth-card ${isDarkMode ? 'dark' : ''}`}>
                {user ? (
                    // Show welcome message and sign out button when user is logged in
                    <div>
                        <h2 className="auth-title">Welcome!</h2>
                        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            You are signed in as {user.email}
                        </p>
                        <button className="auth-button" onClick={signOut}>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    // Show sign in/up form when user is not logged in
                    <>
                        <h2 className="auth-title">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                        {error && <div className="error-message">{error}</div>}
                        
                        <form className="auth-form" onSubmit={handleEmailAuth}>
                            <input
                                type="email"
                                className="auth-input"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                className="auth-input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" className="auth-button">
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                            </button>
                        </form>

                        <div className="auth-toggle">
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                            <button onClick={() => setIsSignUp(!isSignUp)}>
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </button>
                        </div>

                        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                            <button className="auth-button" onClick={signInWithGoogle}>
                                Sign in with Google
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}       