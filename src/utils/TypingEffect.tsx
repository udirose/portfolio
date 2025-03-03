import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

        // const playKeyPressSound = () => {
        //     const oscillator = audioContext.createOscillator();
        //     const gainNode = audioContext.createGain();

        //     oscillator.type = 'sawtooth';
        //     oscillator.frequency.setValueAtTime(400, audioContext.currentTime); // Frequency in Hz
        //     gainNode.gain.setValueAtTime(0.05, audioContext.currentTime); // Volume

        //     oscillator.connect(gainNode);
        //     gainNode.connect(audioContext.destination);

        //     oscillator.start();
        //     oscillator.stop(audioContext.currentTime + 0.05); // Duration of the sound
        // };

        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            // playKeyPressSound();
            index++;
            if (index === text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return <p>{displayedText}</p>;
};

export default TypingEffect;