import React from 'react';
import { Heart, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <div className="footer-left">
                    <span>© 2024 SentimentAI</span>
                    <span className="footer-divider">•</span>
                    <span>Built with</span>
                    <Heart size={14} fill="var(--danger-500)" color="var(--danger-500)" />
                    <span>using React & FastAPI</span>
                </div>
                <div className="footer-right">
                    <a href="/docs" className="footer-link">
                        API Docs
                        <ExternalLink size={12} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                        GitHub
                        <Github size={12} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
