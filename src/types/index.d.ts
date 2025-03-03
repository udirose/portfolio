declare module "*.jpg";
declare module '*.png' {
    const value: string;
    export default value;
}
declare module "*.svg";