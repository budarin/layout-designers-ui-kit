export interface IIndexCss {
    readonly locals: {
        readonly sidbar_nav: string;
        readonly sidbarNav: string;
        readonly title: string;
        readonly active: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
