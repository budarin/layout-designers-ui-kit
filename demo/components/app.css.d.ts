export interface IAppCss {
    readonly locals: {
        readonly app: string;
    };
    readonly use: Function;
    readonly unuse: Function;
    readonly source: string;
    readonly app: string;
}

declare const styles: IAppCss;

export default styles;
