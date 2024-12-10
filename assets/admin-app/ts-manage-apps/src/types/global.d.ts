// src/types/global.d.ts

import { TsfmData } from './index';

declare global {
    interface Window {
        tsfmData: TsfmData;
    }
}
