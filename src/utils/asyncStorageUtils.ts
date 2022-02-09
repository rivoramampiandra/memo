import AsyncStorage from '@react-native-async-storage/async-storage';

type FirstConnection = 'false' | 'true';

export class AsyncStorageUtils {
  static create(options: any) {}
  static remove(options: any) {}

  static async checkFirstConnection(): Promise<FirstConnection> {
    const res = await AsyncStorage.getItem('@firsttime');
    console.log(
      '🚀 ~ file: asyncStorageUtils.ts ~ line 9 ~ AsyncStorageUtils ~ checkFirstConnection ~ res',
      res,
    );
    if (!res) return 'true';
    console.log('eto', res);
    await AsyncStorage.setItem('@firsttime', 'false');
    return 'false';
  }

  static async unsetFirstLogin() {
    AsyncStorage.setItem('@firstlogin', 'false');
  }

  static async createToken(token: string) {
    AsyncStorage.setItem('@token', token);
  }

  static async getToken() {
    return await AsyncStorage.getItem('@token');
  }

  static async isAuthenticate() {
    return !!this.getToken();
  }

  static async removeToken() {
    AsyncStorage.removeItem('@token');
  }
}
