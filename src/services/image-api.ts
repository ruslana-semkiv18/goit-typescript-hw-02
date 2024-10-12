import axios from "axios";
import { FetchImagesResponse } from '../types';

const key = "slrzAGV9wGIcD6I5sMSvyhFPuDOOGrL4JnCVxhy0C_U";
const url = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query: string, page: number = 1): Promise<FetchImagesResponse>  => {
  const response = await axios.get(url, {
    params: {
      client_id: key,
      query,
      page,
      per_page: 12,
    },
  });

  return {
      images: response.data.results,
      totalPages: response.data.total_pages,
    };

};