import axiosClient, {axiosOCRClient} from '../lib/axios.lib';

export class InvoiceService {
  static async scanIvoice(data: FormData) {
    return await axiosOCRClient.post(`analyseInvoice`, data);
  }

  static async addInvoiceStep1(data: any) {
    return await axiosOCRClient.post(
      `invoice/addInvoiceStep1/user/$userId}`,
      data,
    );
  }

  static async addInvoiceStep2(userId: number, data: any) {
    return await axiosOCRClient.post(`addInvoiceStep2/user/${userId}`, data);
  }

  static async manualProcessInfo(userId: string) {
    return await axiosOCRClient.post(`manualProcessInfo/user/${userId}`);
  }
}
