export interface IIndexCss {
    readonly locals: {
        readonly preview: string;
        readonly code: string;
        readonly collapsible: string;
        readonly title: string;
        readonly description: string;
        readonly copy_btn: string;
        readonly copyBtn: string;
        readonly content: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
