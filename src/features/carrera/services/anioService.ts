import axios from "axios";
import { AnioModel } from "../interfaces/anioModel";

const API_URL_BFF = import.meta.env.VITE_API_URL_BFF;

export const AnioService = {
  getAnios: async (): Promise<AnioModel[]> => {
    // return await axios.get(`${API_URL_BFF}/endpoint/anio`);
    // const aniosResponse = await axios.get(`${API_URL_BFF}/endpoint/anio`);
    const simulatedResponse: AnioModel[] = [
      { value: 1, label: "2021" },
      { value: 2, label: "2022" },
      { value: 3, label: "2023" },
    ];

    await new Promise((resolve) => setTimeout(resolve, 1000));
    // if (aniosResponse.status !== 200) {
    //   console.log("error");
    //   throw new Error("Network response was not ok");
    // }

    // if (aniosResponse.status !== 200) {
    //   throw new Error("Network response was not ok");
    // }
    // return aniosResponse.data;

    return simulatedResponse;
  },
};
