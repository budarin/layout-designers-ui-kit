export interface IIndexCss {
    readonly locals: {
        readonly sidbar_nav: string;
        readonly sidbarNav: string;
        readonly title: string;
        readonly active: string;
    };
    readonly use: Function;
    readonly unuse: Function;
    readonly source: string;
    readonly sidbar_nav: string;
    readonly sidbarNav: string;
    readonly title: string;
    readonly active: string;
}

declare const styles: IIndexCss;

export default styles;
