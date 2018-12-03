const demoPages = {
    Button: () => import(/* webpackChunkName: "Button" */ './Button/demo'),
    Shadows: () => import(/* webpackChunkName: "Shadows" */ './Shadows/demo'),
};

export default demoPages;
