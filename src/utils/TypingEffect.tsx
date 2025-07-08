import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        // Reset displayed text when text prop changes
        setDisplayedText('');

        let index = 0;
        const cleanText = text.trim();

        const interval = setInterval(() => {
            if (index < cleanText.length) {
                const char = cleanText[index];
                setDisplayedText((prev) => prev + char);
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <p>{displayedText}</p>;
};

export default TypingEffect;