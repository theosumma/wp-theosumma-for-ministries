// src/components/InfoMessage.tsx

import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { infoMessageState, MessageType } from '../recoil/atoms';

const InfoMessage: React.FC = () => {
    const { message, type } = useRecoilValue(infoMessageState);
    const [displayedMessage, setDisplayedMessage] = useState<string>('');
    const [abortController, setAbortController] = useState<AbortController | null>(null);

    useEffect(() => {
        // Abort any ongoing typing
        if (abortController) {
            abortController.abort();
        }

        const newAbortController = new AbortController();
        setAbortController(newAbortController);

        const typeText = async (text: string, abortSignal: AbortSignal) => {
            setDisplayedMessage(''); // Clear previous message
            for (let i = 0; i < text.length; i++) {
                if (abortSignal.aborted) {
                    return; // Exit if typing is aborted
                }
                setDisplayedMessage((prev) => prev + text[i]);
                await new Promise((resolve) => setTimeout(resolve, 20)); // Delay for typing effect
            }
        };

        if (message) {
            typeText(message, newAbortController.signal);
        } else {
            setDisplayedMessage('');
        }

        return () => {
            newAbortController.abort(); // Cleanup on component unmount or message change
        };
    }, [message]);

    const getMessageClass = (type: MessageType) => {
        if (type === 'success') {
            return 'text-green-800 bg-green-100 border border-green-200 p-2 rounded';
        } else if (type === 'error') {
            return 'text-red-800 bg-red-100 border border-red-200 p-2 rounded';
        } else {
            return 'text-blue-800 bg-blue-100 border border-blue-200 p-2 rounded';
        }
    };

    return (
        displayedMessage && <div className={`${getMessageClass(type)} min-h-[1.5em] mt-2`}>
            {displayedMessage}
        </div>
    );
};

export default InfoMessage;
