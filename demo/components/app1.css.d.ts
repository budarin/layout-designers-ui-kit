export interface IApp1Css {
    readonly locals: {
        readonly app1: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IApp1Css;

export default styles;