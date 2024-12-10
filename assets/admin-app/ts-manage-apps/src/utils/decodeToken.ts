// src/utils/decodeToken.ts

export interface DecodedToken {
    isValid: boolean;
    expired: boolean;
    payload: any | null;
    error: string | null;
}

/**
 * Decodes a JWT token and checks if it has expired.
 *
 * @param {string} token - The JWT token to decode and check.
 * @returns {DecodedToken} An object containing the decoded payload and expiration status.
 */
export function decodeAndCheckToken(token: string): DecodedToken {
    if (!token) {
        return { isValid: false, expired: true, payload: null, error: 'No token provided' };
    }

    try {
        const parts = token.split('.');
        if (parts.length !== 3) {
            return { isValid: false, expired: true, payload: null, error: 'Invalid token format' };
        }

        const payloadBase64 = parts[1];
        // Replace URL-safe characters and pad with '=' if necessary
        const base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
        const payloadJson = atob(base64);
        const payload = JSON.parse(payloadJson);

        const currentTime = Math.floor(Date.now() / 1000);
        const expired = payload.exp ? currentTime >= payload.exp : false;

        return {
            isValid: true,
            expired: expired,
            payload: payload,
            error: null,
        };
    } catch (error) {
        console.error('Error decoding token:', error);
        return { isValid: false, expired: true, payload: null, error: 'Error decoding token' };
    }
}
