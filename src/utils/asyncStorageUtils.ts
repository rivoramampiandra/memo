import AsyncStorage from '@react-native-async-storage/async-storage';

type FirstConnection = 'false' | 'true';

export class AsyncStorageUtils {
  static create(options: any) {}
  static remove(options: any) {}

  static async setUserID(val: any) {
    return await AsyncStorage.setItem('@userId', String(val));
  }

  static async getUserID() {
    return await AsyncStorage.getItem('@userId');
  }

  static async checkFirstConnection(): Promise<boolean> {
    const res = await AsyncStorage.getItem('@firstlogin');
    return !!res;
  }

  static async setFirstLogin() {
    return await AsyncStorage.setItem('@firstlogin', 'false');
  }

  static async createToken(token: string) {
    await AsyncStorage.setItem('@token', token);
  }

  static async getToken() {
    return await AsyncStorage.getItem('@token');
  }

  static async isLoggedIn() {
    const res = await this.getToken();
    return !!res;
  }

  static async removeToken() {
    return await AsyncStorage.removeItem('@token');
  }

  static async currentCar(id: number) {
    return await AsyncStorage.setItem('carId', String(id));
  }

  static async getCurrentCarId() {
    return await AsyncStorage.getItem('carId');
  }
}
