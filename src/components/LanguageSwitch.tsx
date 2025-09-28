import { Switch } from "@progress/kendo-react-inputs";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

interface LanguageSwitchProps {
    className?: string;
    style?: React.CSSProperties;
}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ className, style }) => {
    const { i18n } = useTranslation();
    const [isJapanese, setIsJapanese] = useState(i18n.language === 'jp');

    // Update switch state when language changes from elsewhere
    useEffect(() => {
        setIsJapanese(i18n.language === 'jp');
    }, [i18n.language]);

    const handleLanguageToggle = (e: any) => {
        const newLanguage = e.target.value ? 'jp' : 'en';

        i18n.changeLanguage(newLanguage)
            .then(() => {
                localStorage.setItem('language', newLanguage);
                setIsJapanese(newLanguage === 'jp');
            })
            .catch(err => console.error("Language change error:", err));
    };

    return (
        <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '8px', ...style }}>
            <span style={{ fontSize: '14px', fontWeight: '500' }}>🇺🇸 EN</span>
            <Switch
                value={isJapanese}
                onChange={handleLanguageToggle}
                size="medium"
            />
            <span style={{ fontSize: '14px', fontWeight: '500' }}>🇯🇵 JP</span>
        </div>
    );
};