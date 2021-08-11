# Contributing

## Release

### Bumping and changelog

We use <https://github.com/conventional-changelog/standard-version> to automatize release workflow.

You can use predefined npm script ```npm run release:changelog```

```shell
npm run release:changelog // update patch version number 1.2.X (v1.2.3 to v1.2.4)
npm run release:changelog -- --release-as minor // update minor version number  1.X.3 (v1.2.3 to v 1.3.0)
npm run release:changelog -- --release-as major // update major version number  X.2.3 (v1.2.3 to v 2.0.0)
```

You can also use ```npm run release:changelog -- --dry-run``` to see what changes will be made.

### Publishing

For publishing tags and NPM package just use predefined npm script ```npm run release:publish```.

## Commits

We use <https://www.conventionalcommits.org/en/v1.0.0/> for more readable commit messages and automated changelog generation.
