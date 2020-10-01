## Bumping and publishing new version

To publish new version there is possible (instead npm publish) use fully-automated command (npm version) to bump version, bump git tag and publish new npm package version in one command:
```
$ npm version patch // update patch version number 1.2.X (v1.2.3 to v1.2.4)
$ npm version minor // update minor version number  1.X.3 (v1.2.3 to v 1.3.0)
$ npm version major // update major version number  X.2.3 (v1.2.3 to v 2.0.0)
```
**You can use --m "Commit message here" to customize auto-bump commit message.**

More command options here: https://docs.npmjs.com/cli/version (i.e. --force)

Old manual way with npm publish works too.
