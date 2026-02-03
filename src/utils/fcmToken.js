// src/utils/fcmToken.js
import messaging from '@react-native-firebase/messaging';
// Optional: local save
// npm i @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'FCM_TOKEN';

export async function requestNotificationPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    return enabled;
}

export async function getFcmToken({ forceRefresh = false } = {}) {
    try {
        // Permission
        const enabled = await requestNotificationPermission();
        if (!enabled) {
            console.log('[FCM] Permission not granted');
            return null;
        }

        // iOS only (safe to call)
        await messaging().registerDeviceForRemoteMessages();

        if (!forceRefresh) {
            const saved = await AsyncStorage.getItem(TOKEN_KEY);
            if (saved) {
                console.log('[FCM] Token (cached):', saved);
                return saved;
            }
        }

        const token = await messaging().getToken();
        if (token) {
            await AsyncStorage.setItem(TOKEN_KEY, token);
            console.log('[FCM] Token (new):', token);
            return token;
        }

        console.log('[FCM] Token not generated');
        return null;
    } catch (e) {
        console.log('[FCM] getFcmToken error:', e);
        return null;
    }
}

// Call once (App start) to keep token updated
export function listenFcmTokenRefresh() {
    return messaging().onTokenRefresh(async (newToken) => {
        console.log('[FCM] Token refreshed:', newToken);
        await AsyncStorage.setItem(TOKEN_KEY, newToken);
    });
}

// Optional helper
export async function clearCachedFcmToken() {
    await AsyncStorage.removeItem(TOKEN_KEY);
}
