export interface IIndexCss {
    readonly locals: {
        readonly preview: string;
        readonly code: string;
        readonly title: string;
        readonly copy_btn: string;
        readonly copyBtn: string;
        readonly description: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
