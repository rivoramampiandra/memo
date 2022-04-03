import {AxiosResponse} from 'axios';
import axiosClient from '../lib/axios.lib';

export class InterventionService {
  static async addIntervetion() {
    return await axiosClient.post(``);
  }

  static getIntervetions() {}

  static async getIntervetionsDonePrediction(
    userId: string,
    carEntityId: number,
  ) {
    return await axiosClient.get(
      `interventionDone/user/${userId}/carEntity/${carEntityId}/prediction`,
    );
  }

  static async getIntervetionsDone(userId: string, carEntityId: number) {
    return await axiosClient.get(
      `interventionDone/user/${userId}/carEntity/${carEntityId}`,
    );
  }

  static async getMaintenanceDonePrediction(
    userId: string,
    carEntityId: number,
  ): Promise<AxiosResponse> {
    return await axiosClient.get(
      `maintenanceDone/user/${userId}/carEntity/${carEntityId}/prediction`,
    );
  }

  static async getMaintenanceDone(
    userId: string,
    carEntityId: number,
  ): Promise<AxiosResponse> {
    return await axiosClient.get(
      `maintenanceDone/user/${userId}/carEntity/${carEntityId}/`,
    );
  }
}
