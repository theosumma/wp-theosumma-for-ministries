// src/recoil/atoms.ts

import { atom } from 'recoil';

export type MessageType = 'success' | 'error' | 'info';

export interface InfoMessageState {
    message: string;
    type: MessageType;
}

export const infoMessageState = atom<InfoMessageState>({
    key: 'infoMessageState', // unique ID (with respect to other atoms/selectors)
    default: {
        message: '',
        type: 'info',
    },
});
