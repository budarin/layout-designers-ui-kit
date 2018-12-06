export interface IIndexCss {
    readonly locals: {
        readonly demoPageTitle: string;
        readonly version: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
