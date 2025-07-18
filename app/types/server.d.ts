declare module '../build/server/index.js' {
    interface ServerBuildRequest {
        request: Request;
    }

    const build: (args: ServerBuildRequest) => Promise<Response>;
    export default build;
}
