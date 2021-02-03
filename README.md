# node-bitbucket-v2
node.js library to access the Bitbucket API v2

## usage
Not supported for Node < 7.6

```
const Bitbucket = require('node-bitbucket-v2');
const bitbucketApi = new Bitbucket(options);
bitbucketApi.authenticateOAuth2(accessTokenString);

bitbucketApi.user.get().then(({ body }) => {
  console.log(body.uuid);
});
```

### `options`
It is not necessary to provide any options at all (`Bitbucket` can be constructed with no argument).
 - `requesterFn` (`(options) => Promise<any>`): If provided, requests will be made using the function you provide. This is allows you to use your preferred http client. The `options` provided are `{ headers, hostname, method, path, url, body? }`. `body` is only provided on `POST` methods. Example:
 ```
  const axios = require('axios');
  const Bitbucket = require('node-bitbucket-v2');

  const requesterFn = (options) => {
    const { url, method, body } = options;

    if (method === 'POST') {
      return axios.post(url, body);
    }

    return axios.get(url);
  };

  const bitbucketApi = new Bitbucket({ requesterFn });
 ```
 - `proxy` (`String`): Defines a proxy to make requests against, instead of `api.bitbucket.org:443`. This option is _ignored_ when `requesterFn` is provided.

For implemented methods, check `bitbucket/repositories.js` and `bitbucket/user.js`.
