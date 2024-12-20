import bcrypt from "bcrypt";
import envConfig from "../config/env.config";

export const validateUrl = (url: string): boolean => {
  const urlRegex = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}" + // domain name
      "|((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?" + // port
      "(\\/[-a-z\\d%_.~+]*)*" + // path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return urlRegex.test(url);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

export const validateDomain = (domain: string): boolean => {
  const domainRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return domainRegex.test(domain);
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  return phoneRegex.test(phoneNumber);
};

/**
 * Hash data using bcrypt
 * @param data The string to hash
 * @returns The hashed data
 */
export const hashData = async (data: string): Promise<string> => {
  const saltRounds = envConfig.SALT_ROUNDS;
  return await bcrypt.hash(data, saltRounds);
}

/**
 * Compare data with a hash using bcrypt
 * @param data The data to compare
 * @param hash The hash to compare against
 * @returns The comparison result
 */
export const compareDataWithHash = async (data: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(data, hash);
}

