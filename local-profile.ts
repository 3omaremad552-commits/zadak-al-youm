import AsyncStorage from "@react-native-async-storage/async-storage";

export const PROFILE_KEYS = { name: "@zadak/displayName", avatar: "@zadak/avatar", points: "@zadak/points" } as const;
export async function getProfile() { const [name, avatar, points] = await Promise.all([AsyncStorage.getItem(PROFILE_KEYS.name), AsyncStorage.getItem(PROFILE_KEYS.avatar), AsyncStorage.getItem(PROFILE_KEYS.points)]); return { name: name || "ضيف", avatar, points: Number(points || "0") }; }
export async function addPoints(value: number) { const profile = await getProfile(); const points = profile.points + value; await AsyncStorage.setItem(PROFILE_KEYS.points, String(points)); return points; }
