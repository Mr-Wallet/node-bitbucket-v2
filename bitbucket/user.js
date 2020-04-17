/**
 * API docs: https://confluence.atlassian.com/bitbucket/user-endpoint-2-0-744527199.html
 */
module.exports = function UserApi(api) {
  return {
    /**
     * Get the info for the authenticated user
     */
    get: () => api.get('user')
  };
};
