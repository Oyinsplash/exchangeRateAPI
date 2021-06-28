import constants from "../configs/constants";
import axios from "axios";


export const getLatestRate = async (params: Record<string, unknown>) => {
  const { base, currency } = params;
  try {
     const key = process.env.API_KEY as string;
    const exchange = await axios.get(
      `http://api.exchangeratesapi.io/v1/latest?access_key=${key}&base=${base}&symbols=${currency}`
    );
      const data = {
        results: {
          base: exchange.data.base,
          date: exchange.data.date,
          rates: exchange.data.rates,
        },
      };
    return data;
  } catch (error) {
    return {
      status: false,
      message: "An error occurred trying to get exchange rate",
    };
  }
};

const convertCurrency = async () => {
  
}
