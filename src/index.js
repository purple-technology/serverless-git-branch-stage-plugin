'use strict'

const childProcess = require('child_process')
const camelcase = require('camelcase')

const getBranch = () =>
	process.env.SLS_MOCK_BRANCH
		? process.env.SLS_MOCK_BRANCH
		: childProcess
				.execSync('git rev-parse --abbrev-ref HEAD')
				.toString('utf8')
				.trim()

const toBasePath = branch => branch.replace(/[^a-zA-Z0-9_]/g, '-')

module.exports = class ServerlessGitBranchStagePlugin {
	constructor(serverless) {
		const delegate = serverless.variables.getValueFromSource.bind(
			serverless.variables
		)
		serverless.variables.getValueFromSource = variable => {
			const matches = variable.match(/^git:(stage|basePath)$/)
			if (matches === null) {
				return delegate(variable)
			}
			const key = matches[1]
			const branch = getBranch()
			const basePath = toBasePath(branch)
			const camelCase = camelcase(basePath)
			switch (key) {
				case 'stage':
					return camelCase
				case 'basePath':
					return basePath
				default:
					return delegate(variable)
			}
		}
	}
}

module.exports.getBranch = getBranch
