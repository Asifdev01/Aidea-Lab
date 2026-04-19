import { Platform } from 'react-native';

/**
 * 💡 NETWORK CONFIGURATION
 * 
 * - If using Android Emulator: Use '10.0.2.2'
 * - If using Physical Device (Expo Go): Use your machine's local IP (e.g., '10.122.101.21')
 * - Ensure your computer and phone are on the same Wi-Fi.
 */
const DEV_IP = '10.122.101.21'; // <--- CHANGE THIS IF NEEDED

export const BACKEND_URL = `http://${Platform.OS === 'android' ? DEV_IP : DEV_IP}:5000`;
export const API_BASE_URL = `${BACKEND_URL}/api/ideas`;

