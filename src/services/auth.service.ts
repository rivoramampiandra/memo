import axiosClient from '../lib/axios.lib';
import {ILoginInfo, PersonnalInfo} from '../types/info';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';

export class AuthService {
  static async login(data: ILoginInfo) {
    try {
      const res = await axiosClient.post('user/authenticate', data);
      if (!res.data) return null;
      await AsyncStorageUtils.createToken(res.data.token);
      await AsyncStorageUtils.setUserID(res.data.id);
      return res.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async signup(data: PersonnalInfo) {
    return await axiosClient.post('user', data);
  }

  static async signupAddCarInfo(data: any) {
    return await axiosClient.post('user/inscription2', data);
  }

  static getAccessToken() {
    return AsyncStorageUtils.getToken();
  }

  static async logout() {
    return await AsyncStorageUtils.removeToken();
  }
}
