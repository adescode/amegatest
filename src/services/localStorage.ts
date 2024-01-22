import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadState = async (itemKey: string = '@amega:') => {
  try {
    const serializedState = await AsyncStorage.getItem(itemKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = async (state: any, itemKey: string = '@amega:') => {
  const serializedState = JSON.stringify(state);
  await AsyncStorage.setItem(itemKey, serializedState);
};

export const removeState = async (itemKey: string = '@amega:') => {
  await AsyncStorage.removeItem(itemKey);
};

export const clearState = async () => {
  await AsyncStorage.clear();
};
