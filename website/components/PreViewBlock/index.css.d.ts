export interface IIndexCss {
    readonly locals: {
        readonly preview: string;
        readonly code: string;
        readonly title: string;
        readonly copy_btn: string;
        readonly copyBtn: string;
    };
    readonly use: Function;
    readonly unuse: Function;
    readonly source: string;
    readonly preview: string;
    readonly code: string;
    readonly title: string;
    readonly copy_btn: string;
    readonly copyBtn: string;
}

declare const styles: IIndexCss;

export default styles;
