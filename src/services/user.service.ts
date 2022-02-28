import axiosClient from '../lib/axios.lib';

export class UserService {
  static async updateEmail(email: string) {
    return await axiosClient.put(``);
  }
  static async updatePassword(password: string) {
    return await axiosClient.put(``);
  }
}
