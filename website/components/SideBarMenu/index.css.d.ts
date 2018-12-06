export interface IIndexCss {
    readonly locals: {
        readonly 'component-list': string;
        readonly componentList: string;
        readonly active: string;
        readonly title: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IIndexCss;

export default styles;
