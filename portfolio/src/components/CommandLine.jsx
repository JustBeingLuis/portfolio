import React, { useState, useEffect } from 'react';

const CommandLine = ({ command, onTypingComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    if (!command) {
      setDisplayedText('');
      if (onTypingComplete) onTypingComplete();
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayedText(command);
      if (onTypingComplete) onTypingComplete();
      return;
    }

    setIsTyping(true);
    setDisplayedText('');
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayedText(command.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex >= command.length) {
        clearInterval(intervalId);
        setIsTyping(false);
        if (onTypingComplete) onTypingComplete();
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [command, onTypingComplete]);

  if (!command && !displayedText) return null;

  return (
    <div className="flex items-center font-mono text-sm sm:text-base mb-4 md:mb-6 text-[hsl(var(--foreground))]">
      <span className="text-[hsl(var(--primary))] mr-2 font-bold">luism@portfolio:~$</span>
      <span>{displayedText}</span>
      {isTyping && (
        <span className="inline-block w-2 h-5 bg-[hsl(var(--primary))] ml-1 animate-blink align-middle"></span>
      )}
    </div>
  );
};

export default CommandLine;
