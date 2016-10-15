# last-release-git [![npm version](https://badge.fury.io/js/last-release-git.svg)](https://badge.fury.io/js/last-release-git) [![Build Status](https://travis-ci.org/finom/last-release-git.svg?branch=master)](https://travis-ci.org/finom/last-release-git)

This is [getLastRelease](https://github.com/semantic-release/semantic-release#getlastrelease) plugin for [semantic-release](https://github.com/semantic-release/semantic-release). It's made for projects which must not be published at NPM.

By default **semantic-release** extracts latest version from NPM registry but **last-release-git** extracts it from git tags.

## Getting started

Install the plugin:

```sh
npm install last-release-git --save-dev
```

Add **release** field to your **package.json** as described at [plugins documentation](https://github.com/semantic-release/semantic-release#plugins):

```json
"release": {
  "getLastRelease": "last-release-git"
}
```

Create the first git tag manually and push it:
```sh
git tag v0.0.0
git push --tags
```

That's it.

The last thing you may want to do is to set dummy ``NPM_TOKEN`` environment variable at CI (**semantic-release** throws an error if it doesn't exist) like this one: ``00000000-0000-0000-0000-000000000000``.
