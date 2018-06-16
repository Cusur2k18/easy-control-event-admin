/**
 * 
 * @description this function will parse the request and return an object
 *              that we can use across all the app.
 * @param {any} request 
 * @return { status: number; message: string; data: object; error: object; }
 */
export function parseRequest(request) {

  // Axios return this in case of connection issues.
  if (request.message && request.message.toLowerCase() === 'network error') {
    return {
      status: 500,
      message: 'Server down',
      data: {},
      error: {
        code: 'SERVER_DOWN',
        message: 'Problem connecting to the server'
      }
    }
  }

  // resquest.response is undefined when a success call, on error is an object.
  if (request.response) {
    return {
      status: request.response.status,
      message: request.response.statusText,
      data: {},
      error: {
        code: request.response.data.error.code,
        message: request.response.data.error.message
      }
    }
  }

  // If we get here, is a success call.
  return {
    status: request.status,
    message: request.statusText,
    data: request.data,
    error: null
  }
}