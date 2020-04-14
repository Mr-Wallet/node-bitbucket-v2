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
 - `useXhr` (`Boolean`): If `true`, requests will be made using XMLHttpRequest. This is only available in a web browser, and will fail otherwise. This can be very useful in Electron for automatically resolving proxies and custom SSL certificates.
 - `proxy` (`String`): Defines a proxy to make requests against, instead of `api.bitbucket.org:443`. This option is _ignored_ when `useXhr` is active.

For implemented methods, check `bitbucket/repositories.js` and `bitbucket/user.js`.
