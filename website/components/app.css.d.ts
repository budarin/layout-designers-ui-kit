export interface IAppCss {
    readonly locals: {
        readonly root: string;
        readonly article: string;
        readonly h1: string;
        readonly h2: string;
        readonly h3: string;
        readonly h4: string;
        readonly h5: string;
        readonly hr: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IAppCss;

export default styles;
