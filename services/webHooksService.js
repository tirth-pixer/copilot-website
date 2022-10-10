import axios from "axios";
import {
  WEB_HOOK_API_URL,
  WEB_HOOK_API_URL_REQUEST_DEMO,
} from "../constants/constant";

/**
 * @desc Web Hooks - Add New Contact
 * @param {*} payload
 */
export const addNewContact = async (payload) => {
  try {
    const response = await axios.post(`${WEB_HOOK_API_URL}`, payload);
    return true;
  } catch (e) {
    console.log("addNewContact", e);
    return false;
  }
};

export const addRequestDemo = async (payload) => {
  try {
    const response = await axios.post(
      `${WEB_HOOK_API_URL_REQUEST_DEMO}`,
      payload
    );
    return true;
  } catch (e) {
    console.log("addRequestDemo", e);
    return false;
  }
};
