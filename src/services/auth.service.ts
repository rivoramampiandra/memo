import axiosClient from '../lib/axios.lib';
import {ILoginInfo, PersonnalInfo} from '../types/info';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';

export class AuthService {
  static async login(data: ILoginInfo) {
    return await axiosClient.post('user/authenticate', data);
  }

  static async signup(data: PersonnalInfo) {
    return await axiosClient.post('user/user', data);
  }

  static async signupAddCarInfo(data: any) {
    return await axiosClient.post('user/inscription2', data);
  }

  static getAccessToken() {
    return AsyncStorageUtils.getToken();
  }

  static logout() {
    return AsyncStorageUtils.removeToken();
  }

  static async authHeader() {
    const token = await AsyncStorageUtils.getToken();
    if (!token) return {};
    return {Authorization: 'Bearer ' + token};
  }
}
