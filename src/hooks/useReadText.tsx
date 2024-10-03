"use client"
import { useState } from "react";

const useReadText = (text: string) => {
    const [isSpeaking, setIsSpeaking] = useState(false);

    const handleReadText = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);

        utterance.onend = () => {
            setIsSpeaking(false);
        };
    };

    const handleStopReading = () => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
    };

    return { isSpeaking, handleReadText, handleStopReading };
};

export default useReadText;
