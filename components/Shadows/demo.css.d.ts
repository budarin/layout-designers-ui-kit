export interface IDemoCss {
    readonly locals: {
        readonly demoBox: string;
    };
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IDemoCss;

export default styles;
