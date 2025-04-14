import axios from 'axios';

/**
 * @description Fetch Insurance List
 */

export const fetchInsuranceList = async () => {
  try {
    const apiEndpoint = `${import.meta.env.VITE_API_ENDPOINT}/api/v1/insurance/list/policies`;

    const data = await axios.get(apiEndpoint);

    return data.data;
  } catch (error) {
    console.log('Failed to Fetch API Call :>> ', error);
    return error;
  }
};
