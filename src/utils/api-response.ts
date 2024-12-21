import { Response } from 'express';
import { StatusCodes } from '../types/enum';

/**
 * Success response: Send a success response to the client after a successful operation
 * @param res The response object
 * @param statusCode The status code to send along with the response
 * @param message The message to send along with the response
 * @param data The data to send along with the response
 * @param meta The meta data to send along with the response
 * @returns The response object with the success state, message and data
 */
export const sendSuccessResponse = (
  res: Response,
  statusCode: StatusCodes = StatusCodes.OK,
  message: string,
  data?: any,
  meta?: any
): Response => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    ...meta,
  });
};

/**
 * Error response: Send an error response to the client after a failed operation
 * @param res The response object
 * @param statusCode The status code to send along with the response
 * @param message The message to send along with the response
 * @param error The error to send along with the response
 * @param meta The meta data to send along with the response
 * @returns The response object with the success state, message and error
 */
export const sendErrorResponse = (
  res: Response,
  statusCode: StatusCodes,
  message: string,
  error?: string | object,
  meta?: any
) : Response => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
    ...meta,
  });
};

/**
 * Throw error response: Throw an error response after a failed operation
 * @param statusCode The status code to send along with the response
 * @param message The message to send along with the response
 * @param error The error to send along with the response
 * @returns The error response object with the status code, message and error
 */
export const throwErrorResponse = (
  statusCode: StatusCodes,
  message: string,
  error?: string | object
): void => {
  throw {
    code: statusCode,
    message,
    error,
  };
}

/**
 * Throw success response: Throw a success response after a successful operation
 * @param statusCode The status code to send along with the response
 * @param message The message to send along with the response
 * @param data The data to send along with the response
 * @returns The success response object with the status code, message and data
 */
export const throwSuccessResponse = (
  statusCode: StatusCodes,
  message: string,
  data?: any
): void => {
  throw {
    code: statusCode,
    message,
    data,
  };
}