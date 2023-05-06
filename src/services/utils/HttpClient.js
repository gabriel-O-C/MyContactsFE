import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);
    const contentType = response.headers.get('Content-Type');

    let body = null;

    if (contentType.includes('application/json')) {
      body = response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }

  async post(path, body) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    const contentType = response.headers.get('Content-Type');

    let responseBody = null;

    if (contentType.includes('application/json')) {
      responseBody = response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}

export default HttpClient;
