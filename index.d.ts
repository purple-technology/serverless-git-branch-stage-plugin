export = ServerlessGitBranchStagePlugin;

declare class ServerlessGitBranchStagePlugin {
    constructor(serverless: unknown);
}

declare namespace ServerlessGitBranchStagePlugin {
    export { getBasePath, getStage };
}

declare function getBasePath(): string;
declare function getStage(): string;
