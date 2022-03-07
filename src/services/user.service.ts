import axiosClient from '../lib/axios.lib';
import {AsyncStorageUtils} from '../utils/asyncStorageUtils';

export class UserService {
  static async updateEmail(userId: number, email: string) {
    return await axiosClient.post(`user/${userId}/email/${email}`);
  }
  static async updatePassword(password: string) {
    const id = await UserService.Me();
    const res = await axiosClient.post(`user/password/${id}/${password}`);
    return res;
  }

  static async Me() {
    try {
      const userId = await AsyncStorageUtils.getUserID();
      if (!userId) throw new Error('Utilisateur inconnu');
      return userId;
    } catch (error) {
      throw error;
    }
  }
}
