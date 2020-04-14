const _ = require('lodash');

const AbstractApi = require('./abstract_api');

/**
 * API docs: None as of 2020-04-14.
 * Official link is a blank page: https://developer.atlassian.com/bitbucket/api/2/reference/resource/workspaces
 */
module.exports = function WorkspacesApi(api) {
  const result = AbstractApi(api);

  return _.assign(result, {
    /**
     * Get the workspaces for the authenticated user
     */
    get(callback) {
      api.get(
        'workspaces',
        null,
        null,
        result.$createListener(callback)
      );
    }
  });
};
