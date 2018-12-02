type ICSSModule = {
    readonly locals: {
        readonly [key: string]: string;
    };
    readonly use: Function;
    readonly unuse: Function;
};
