import axiosClient, {apiOCR} from '../lib/axios.lib';

export class InvoiceService {
  static async scanIvoice(data: FormData) {
    return await apiOCR.post(`analyseInvoice`, data);
  }

  static async addInvoiceStep1(data: any) {
    return await axiosClient.post(
      `invoice/addInvoiceStep1/user/$userId}`,
      data,
    );
  }

  static async addInvoiceStep2(userId: number, data: any) {
    return await axiosClient.post(`addInvoiceStep2/user/${userId}`, data);
  }

  static async getInvoices(userId: number) {
    return await axiosClient.get(`invoice/user/${userId}/invoices`);
  }
}
