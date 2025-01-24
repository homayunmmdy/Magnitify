"use client"
import { useState, useCallback } from "react";

const useReadText = (text: string) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);

    // Split text into chunks of appropriate size
    const getTextChunks = (text: string): string[] => {
        const chunks: string[] = [];
        const words = text.split(' ');
        let currentChunk = '';

        for (const word of words) {
            if (currentChunk.length + word.length + 1 <= 200) {
                currentChunk += (currentChunk ? ' ' : '') + word;
            } else {
                chunks.push(currentChunk);
                currentChunk = word;
            }
        }
        if (currentChunk) {
            chunks.push(currentChunk);
        }
        return chunks;
    };

    const handleReadText = useCallback(() => {
        const chunks = getTextChunks(text);
        let currentIndex = 0;

        const speakNextChunk = () => {
            if (currentIndex < chunks.length) {
                const utterance = new SpeechSynthesisUtterance(chunks[currentIndex]);
                
                utterance.onend = () => {
                    currentIndex++;
                    if (currentIndex < chunks.length) {
                        speakNextChunk();
                    } else {
                        setIsSpeaking(false);
                        setCurrentUtterance(null);
                    }
                };

                utterance.onerror = (event) => {
                    console.error('Speech synthesis error:', event);
                    setIsSpeaking(false);
                    setCurrentUtterance(null);
                };

                setCurrentUtterance(utterance);
                window.speechSynthesis.speak(utterance);
            }
        };

        setIsSpeaking(true);
        speakNextChunk();
    }, [text]);

    const handleStopReading = useCallback(() => {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        setCurrentUtterance(null);
    }, []);

    // Cleanup on unmount
    const cleanup = useCallback(() => {
        if (isSpeaking) {
            handleStopReading();
        }
    }, [isSpeaking, handleStopReading]);

    return {
        isSpeaking,
        handleReadText,
        handleStopReading,
        cleanup
    };
};

export default useReadText;