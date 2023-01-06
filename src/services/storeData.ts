import AsyncStorage from "@react-native-async-storage/async-storage";

export const asyncStorage = {
  storeData: async (token: string) => {
    try {
      await AsyncStorage.setItem("token", token);
      return true;
    } catch (e: any) {
      console.log(e.response.message);
      return false;
    }
  },

  getData: async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        return value;
      } else {
        return false;
      }
    } catch (e) {
      console.log("Erro ao buscar token");
      return false;
    }
  },
  removeData: async () => {
    try {
      await AsyncStorage.removeItem("token");
    } catch (e) {
      console.log("Erro ao remover token");
    }
  },
};
