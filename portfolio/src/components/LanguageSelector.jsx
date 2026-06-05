import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

const languages = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
];

export const LanguageSelector = ({ className }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // i18n.language might be 'en-US', so we get the first two letters
  const currentLangCode = i18n.language?.substring(0, 2) || 'en';
  const currentLang = languages.find(l => l.code === currentLangCode) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 focus:outline-none hover:bg-primary/10 text-xl"
        aria-label="Select language"
      >
        {currentLang.flag}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl bg-background/95 backdrop-blur-md border border-border shadow-lg ring-1 ring-black/5 focus:outline-none z-[100] overflow-hidden">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={cn(
                  "flex items-center w-full px-4 py-2.5 text-sm text-left transition-colors",
                  currentLangCode === lang.code 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-foreground/80 hover:bg-primary/5 hover:text-foreground"
                )}
              >
                <span className="mr-3 text-lg">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
