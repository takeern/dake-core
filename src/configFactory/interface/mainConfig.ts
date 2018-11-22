interface IConfig {
    dirname: string;
    entryScript?: string;
    entryHtml?: string;
    output?: string;
    port?: number;
    host?: string;
    isTs?: boolean;
}

export {
    IConfig
};
