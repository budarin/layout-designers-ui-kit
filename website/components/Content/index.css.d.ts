export interface IIndexCss {
    readonly locals: {
        readonly top_bar: string;
        readonly topBar: string;
        readonly menu_icon: string;
        readonly menuIcon: string;
        readonly title_component: string;
        readonly titleComponent: string;
        readonly version_component: string;
        readonly versionComponent: string;
        readonly content: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
