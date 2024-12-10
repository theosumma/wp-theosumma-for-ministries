// src/components/NewAppForm.tsx

import React, { useState } from 'react';
import {useSetRecoilState} from "recoil";
import {infoMessageState} from "../recoil/atoms.ts";

interface NewAppFormProps {
    onCreateApp: (appId: string) => void;
    onCancel: () => void;
}

const NewAppForm: React.FC<NewAppFormProps> = ({ onCreateApp, onCancel }) => {
    const [appId, setAppId] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const setInfoMessage = useSetRecoilState(infoMessageState);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        if (!appId.trim()) {
            setInfoMessage({ message: 'App ID cannot be empty.', type: 'error' });
            return;
        }

        if (!uuidRegex.test(appId)) {
            setInfoMessage({ message: 'Invalid App ID. Please enter a valid UUID.', type: 'error' });
            return;
        }

        setIsSubmitting(true);

        await onCreateApp(appId.trim());

        setIsSubmitting(false);
    };

    return (
        <form className="w-full h-full flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="tsfm-ma-app-id" className="block text-sm font-medium text-gray-700">
                    App ID:
                </label>
                <input
                    type="text"
                    name="app-id"
                    className="form-control w-3/4 mt-1 block border border-gray-300 rounded-md shadow-sm"
                    id="tsfm-ma-app-id"
                    placeholder="e8a9dbea-cb43-4641-b8e0-e2a1c0cf991f"
                    required
                    value={appId}
                    onChange={(e) => setAppId(e.target.value)}
                />
            </div>
            <div className="flex-grow"></div>
            <div className="self-end flex justify-between items-center">
                <div className="flex gap-3">
                    <button
                        type="button"
                        className="rounded-md p-2 bg-danger hover:bg-primary-dark text-white"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md p-2 bg-success hover:bg-primary-dark text-white"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Creating...' : 'Create'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default NewAppForm;
