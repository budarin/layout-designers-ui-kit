export interface IIndexCss {
    readonly locals: {
        readonly btn: string;
    };
    readonly use: Function;
    readonly unuse: Function;
    readonly source: string;
    readonly btn: string;
}

declare const styles: IIndexCss;

export default styles;
