export interface IAppCss {
    readonly locals: {};
    readonly use: Function;
    readonly unuse: Function;
    readonly source: string;
}

declare const styles: IAppCss;

export default styles;
