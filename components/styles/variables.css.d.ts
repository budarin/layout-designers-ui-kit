export interface IVariablesCss {
    readonly locals: {};
    readonly use: Function;
    readonly unuse: Function;
}

declare const styles: IVariablesCss;

export default styles;
