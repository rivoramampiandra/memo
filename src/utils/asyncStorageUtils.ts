import AsyncStorage from '@react-native-async-storage/async-storage';

type FirstConnection = 'false' | 'true';

export class AsyncStorageUtils {
  static create(options: any) {}
  static remove(options: any) {}

  static async checkFirstConnection(): Promise<FirstConnection> {
    const res = await AsyncStorage.getItem('@firsttime');
    if (!res) {
      await AsyncStorage.setItem('@firsttime', 'false');
      return 'true';
    }
    return 'false';
  }

  static async unsetFirstLogin() {
    await AsyncStorage.setItem('@firstlogin', 'false');
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
