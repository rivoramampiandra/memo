import axiosClient, {axiosOCRClient} from '../lib/axios.lib';

export class CarService {
  static async ocrScanCard(data: {carteGrise: Blob}) {
    return await axiosOCRClient.post('analyseCarteGrise', data);
  }

  static async addTemporaryCar(userId: string, data: any) {
    return await axiosClient.post(`user/${userId}/addTemporaryCar`, data);
  }

  static async softDeleteCar() {}
}
