import axiosInstance from "./axiosInstance";

class QuranApi {
  static async getData(id) {
    try {
      const randomizer = Math.floor(Math.random() * 114 + 1);
      const response = await axiosInstance.get(`/${id ? id : randomizer}`);
      return response.data;
    } catch (error) {
      throw new Error(`Can't Access Data: ${error.message}`);
    }
  }
}

export default QuranApi;
