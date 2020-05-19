module.exports = {
  extractResponseBody: (response) => {
    if (!response || !response.body || !response.statusCode) {
      return response;
    }

    return response.body;
  }
};
