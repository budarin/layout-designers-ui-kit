export interface IBaseCss {
    readonly locals: {};
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IBaseCss;

export default styles;
