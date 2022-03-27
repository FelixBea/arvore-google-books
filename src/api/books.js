import queryString from 'query-string';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const baseUrl = 'https://www.googleapis.com/books/v1/';

const createRequest = (resource, parameters) => {
  const headers = new Headers();
  return new Request(`${baseUrl}${resource}?${parameters}`, { headers });
};

const buildQueryString = (search) => queryString.stringify(search);

export default {
  volumes: {
    get: async (search) => {
      const parameters = buildQueryString({ ...search, key: apiKey });
      const request = createRequest('volumes', parameters);
      const response = await fetch(request);
      return response.json();
    }
  }
};
