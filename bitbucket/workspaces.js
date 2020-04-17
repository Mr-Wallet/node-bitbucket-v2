/**
 * API docs: None as of 2020-04-14.
 * Official link is a blank page: https://developer.atlassian.com/bitbucket/api/2/reference/resource/workspaces
 */
module.exports = function WorkspacesApi(api) {
  return {
    /**
     * Get the workspaces for the authenticated user
     */
    get: () => api.get('workspaces')
  };
};
