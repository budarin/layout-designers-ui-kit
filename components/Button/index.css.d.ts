export interface IIndexCss {
    readonly locals: {
        readonly btn: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
