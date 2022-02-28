import {AsyncStorageUtils} from './../utils/asyncStorageUtils';
import axiosClient, {axiosOCRClient} from '../lib/axios.lib';
import {AuthService} from './auth.service';

export class CarService {
  static async ocrScanCard(data: any) {
    return await axiosOCRClient.post('analyseCarteGrise', data);
  }

  static async getCar(carId: number) {
    const userId = await AsyncStorageUtils.getUserID();
    if (!userId) throw new Error('Utilisateur inconnu');
    return await axiosClient.get(`user/${userId}/carEntity/${carId}`);
  }

  static async getCars() {
    const userId = await AsyncStorageUtils.getUserID();
    if (!userId) throw new Error('Utilisateur inconnu');
    const {data} = await axiosClient.get(`user/${userId}/carEntitys`);
    return data;
  }

  static async addTemporaryCar(userId: number, data: any) {
    return await axiosClient.post(`user/${userId}/addTemporaryCar`, data);
  }

  static async softDeleteCar(userId: number, carId: number) {
    return await axiosClient.delete(
      `user/carEntity/${userId}/${carId}/softDelete`,
    );
  }

  static async updateMilleage(userId: number, carId: number, milleage: number) {
    return await axiosClient.put(
      `user/${userId}/carEntity/${carId}/mileage/${milleage}`,
    );
  }
}
