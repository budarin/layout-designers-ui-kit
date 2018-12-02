export interface IIndexCss {
    readonly locals: {
        readonly container: string;
        readonly no_margin_left: string;
        readonly noMarginLeft: string;
        readonly page_content: string;
        readonly pageContent: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
