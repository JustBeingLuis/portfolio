import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Terminal } from 'lucide-react';

const StatusBar = ({ activeSection, onOpenCommandPalette }) => {
  const { t, i18n } = useTranslation();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  // Handle keyboard shortcut for command palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (onOpenCommandPalette) onOpenCommandPalette();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenCommandPalette]);

  return (
    <div className="terminal-statusbar">
      {/* Left side: Section info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-bold bg-[hsl(var(--primary)/0.15)] px-2 py-1 rounded">
          <Terminal size={14} />
          <span>[section: {activeSection || 'hero'}]</span>
        </div>
      </div>

      {/* Center: Identity / Copyright */}
      <div className="hidden sm:block text-[hsl(var(--muted-foreground))]">
        luis@portfolio ~ {new Date().getFullYear()}
      </div>

      {/* Right side: Hints & Info */}
      <div className="flex items-center gap-4 text-[hsl(var(--muted-foreground))]">
        <button 
          onClick={onOpenCommandPalette}
          className="flex items-center gap-1 hover:text-[hsl(var(--primary))] transition-colors group cursor-pointer"
          title="Open Command Palette"
        >
          <span className="hidden sm:inline">Cmd</span>
          <kbd className="font-sans px-1.5 py-0.5 rounded-md bg-[hsl(var(--muted)/0.3)] border border-[hsl(var(--border))] group-hover:border-[hsl(var(--primary)/0.5)]">
            Ctrl+K
          </kbd>
        </button>
        
        <div className="flex items-center gap-2 border-l border-[hsl(var(--border))] pl-4">
          <span className="uppercase text-xs font-bold text-[hsl(var(--foreground))]">{i18n.language || 'en'}</span>
          <span>{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
