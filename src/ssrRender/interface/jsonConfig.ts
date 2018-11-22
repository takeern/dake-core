interface IJsonConfig {
    publicPath?: string,
    filename?: string[],
    isAbsolutePath?: boolean
}

interface IParseJson {
    css: string[],
    js: string[],
}

export {
    IJsonConfig,
    IParseJson
}