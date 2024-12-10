import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {RecoilRoot} from "recoil";

document.addEventListener('DOMContentLoaded', async function () {
    createRoot(document.getElementById('tsfm-manage-apps')!).render(
        <StrictMode>
            <RecoilRoot>
                <App/>
            </RecoilRoot>
        </StrictMode>,
    )
});
