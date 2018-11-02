export interface IAppCss {
    readonly locals: {
        readonly app: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IAppCss;

export default styles;
