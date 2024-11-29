import { get } from "../utils/request";

export const search = async (q, type = "less") => {
  try {
    const options = {
      params: {
        q,
        type,
      },
    };
    const res = await get("users/search", options);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
