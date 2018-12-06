export interface IIndexCss {
    readonly locals: {
        readonly top_bar: string;
        readonly topBar: string;
        readonly menu_icon: string;
        readonly menuIcon: string;
        readonly title_component: string;
        readonly titleComponent: string;
        readonly content: string;
        readonly 'content-wrapper': string;
        readonly contentWrapper: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
