(window.webpackJsonp = window.webpackJsonp || []).push([
    [5],
    {
        '/h9k': function(o, e, r) {
            o.exports = r.p + 'open-sans-700.816adecd71db3dcf7b13558f87bbedb0.woff2';
        },
        0: function(o, e, r) {
            o.exports = r('12de');
        },
        '1+SF': function(o, e, r) {
            var l,
                a = 0,
                c = r('q/oh'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof c && (c = [[o.i, c, '']]),
                c.locals && (e.locals = c.locals),
                (e.use = e.ref = function() {
                    return a++ || (l = r('aET+')(c, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (l(), (l = null));
                });
        },
        '12de': function(o, e, r) {
            'use strict';
            r.r(e);
            var l = r('gcR/'),
                a = r.n(l),
                c = r('cDcd'),
                t = r.n(c),
                s = r('faye'),
                n = r.n(s),
                i = r('96yn'),
                b = (r('rGqo'), r('TSYQ')),
                d = r.n(b),
                _ = r('ewmN'),
                g = r.n(_),
                p = a()('b', {}, void 0, 'Components');
            var u = ({ pages: o, selectedPage: e, setSelectedPage: r }) => {
                    const l = Object(i.a)([g.a]),
                        t = Object(c.useCallback)(o => {
                            const e = o.currentTarget.dataset.name;
                            e && r(e);
                        }, []);
                    return a()(
                        'nav',
                        { className: l.componentList },
                        void 0,
                        a()('div', { className: l.title }, void 0, p),
                        a()(
                            'ul',
                            {},
                            void 0,
                            o.map(o =>
                                a()(
                                    'li',
                                    {},
                                    o,
                                    a()(
                                        'a',
                                        {
                                            href: '#',
                                            'data-name': o,
                                            onClick: t,
                                            title: o,
                                            className: e === o ? l.active : '',
                                        },
                                        void 0,
                                        o,
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                x = r('1+SF'),
                y = r.n(x),
                f = a()('h1', {}, void 0, 'Something went wrong.');
            var v = class extends t.a.Component {
                static getDerivedStateFromError(o) {
                    return console.log('getDerivedStateFromError', o), { hasError: !0 };
                }
                constructor(o) {
                    super(o), (this.state = { hasError: !1 });
                }
                componentDidCatch(o, e) {
                    console.log('componentDidCatch', o, e);
                }
                render() {
                    return this.state.hasError ? f : this.props.children;
                }
            };
            const m = a()('div', {}, void 0, 'Loading...');
            var h = a()('path', { d: 'M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z' }),
                w = a()('h3', {}, void 0, 'Layout UI-Kit');
            var k = o => {
                    const e = Object(i.a)([y.a]),
                        r = Object(c.lazy)(async () => o.getPage());
                    return t.a.createElement(
                        t.a.Fragment,
                        null,
                        a()(
                            'div',
                            { className: e.top_bar },
                            void 0,
                            a()(
                                'svg',
                                { className: e.menu_icon, onClick: o.menuBtnClickHandler, viewBox: '0 0 459 459' },
                                void 0,
                                h,
                            ),
                            w,
                        ),
                        a()(
                            'div',
                            { className: e['content-wrapper'] },
                            void 0,
                            a()(
                                'div',
                                { className: e.content },
                                void 0,
                                a()(v, {}, void 0, a()(c.Suspense, { fallback: m }, void 0, a()(r, {}))),
                            ),
                        ),
                    );
                },
                z = r('Ofak'),
                C = r.n(z);
            var S = {
                Button: () => Promise.all([r.e(1), r.e(0), r.e(2)]).then(r.bind(null, 'xdqe')),
                Shadows: () => Promise.all([r.e(1), r.e(0), r.e(4)]).then(r.bind(null, '5Spt')),
            };
            function E() {
                return r.e(3).then(r.bind(null, 'aApt'));
            }
            var O = () => {
                    const o = Object(i.a)([C.a]),
                        [e, r] = Object(c.useState)(!0),
                        [l, t] = Object(c.useState)(''),
                        s = Object.keys(S).sort(),
                        n = S[l] || E,
                        b = d()({ [o.container]: !0, [o.no_margin_left]: !e });
                    return a()(
                        'div',
                        { className: b },
                        void 0,
                        a()('aside', {}, void 0, a()(u, { pages: s, selectedPage: l, setSelectedPage: t })),
                        a()(
                            'main',
                            { className: o.pageContent },
                            void 0,
                            a()(k, { getPage: n, menuBtnClickHandler: () => r(!e) }),
                        ),
                    );
                },
                B = r('2SVl'),
                P = r.n(B),
                I = r('jjbv'),
                G = r.n(I),
                j = r('pgDk'),
                N = r.n(j),
                D = a()(t.a.StrictMode, {}, void 0, a()(O, {}));
            var F = () => (Object(i.a)([P.a, G.a, N.a]), D);
            const H = 'root';
            var R = a()(F, {});
            function U() {
                const o = document.querySelector('body');
                o && o.classList.add('interactive');
            }
            function M() {
                let o = document.getElementById(H);
                return (
                    o || ((o = document.body.appendChild(document.createElement('main'))).id = H),
                    n.a.render(R, o, U),
                    !0
                );
            }
            M();
        },
        '2SVl': function(o, e, r) {
            var l,
                a = 0,
                c = r('Rgo2'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof c && (c = [[o.i, c, '']]),
                c.locals && (e.locals = c.locals),
                (e.use = e.ref = function() {
                    return a++ || (l = r('aET+')(c, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (l(), (l = null));
                });
        },
        '4uOH': function(o, e, r) {
            var l = r('sEG9');
            (e = o.exports = r('I1BE')(!1)).push([
                o.i,
                'body,html{height:100%}*,:after,:before,body,html{line-height:1.5}@font-face{font-family:open_sans;src:local("open_sans"),url(' +
                    l(r('P9pF')) +
                    ') format("woff2");font-style:normal;font-weight:400;font-display:swap}@font-face{font-family:open_sans;src:local("open_sans"),url(' +
                    l(r('/h9k')) +
                    ') format("woff2");font-style:normal;font-weight:700;font-display:swap}svg{position:relative;display:inline-block;fill:"currentcolor";max-width:100%;width:100%;height:1.25em;-webkit-user-select:none;user-select:none;vertical-align:text-bottom}.styles-x1_80425f3{--x:var(--x1)}.styles-x2_bc7f879{--x:var(--x2)}.styles-x3_0b6a08c{--x:var(--x3)}.styles-x4_266f2be{--x:var(--x4)}.styles-x5_79cb716{--x:var(--x5)}.styles-x6_13f6974{--x:var(--x6)}.styles-x7_7c71d87{--x:var(--x7)}.styles-x8_0644ad0{--x:var(--x8)}.styles-x9_dd12004{--x:var(--x9)}.styles-x10_0a5498c{--x:var(--x10)}.styles-x11_55a9e58{--x:var(--x11)}.styles-x12_f5d3d86{--x:var(--x12)}.styles-x13_3c83897{--x:var(--x13)}.styles-x14_70fb27b{--x:var(--x14)}.styles-x15_c10b20a{--x:var(--x15)}.styles-x16_5d0e93a{--x:var(--x16)}.styles-x17_d2fad66{--x:var(--x17)}.styles-x18_e1ba3f7{--x:var(--x18)}.styles-color-orange_305d5b1{--color:var(--color_orange)}.styles-bg-color-orange_fcff687{--bg-color:var(--color_orange)}.styles-color-orange-75_3a6efd4{--color:var(--color_orange_75)}.styles-bg-color-orange-75_b3a7744{--bg-color:var(--color_orange_75)}.styles-color-white_ee2b4cf{--color:var(--color_white)}.styles-bg-color-white_266a2d8{--bg-color:var(--color_white)}.styles-color-white-25_ad246ef{--color:var(--color_white_25)}.styles-bg-color-white-25_8d268a9{--bg-color:var(--color_white_25)}.styles-color-white-50_418d5bb{--color:var(--color_white_50)}.styles-bg-color-white-50_cac67f1{--bg-color:var(--color_white_50)}.styles-color-purple_7751541{--color:var(--color_purple)}.styles-bg-color-purple_3155902{--bg-color:var(--color_purple)}.styles-color-purple-25_4203025{--color:var(--color_purple_25)}.styles-bg-color-purple-25_7f12c15{--bg-color:var(--color_purple_25)}.styles-color-purple-50_1b45414{--color:var(--color_purple_50)}.styles-bg-color-purple-50_7d7f4b0{--bg-color:var(--color_purple_50)}.styles-color-purple-75_ea07d43{--color:var(--color_purple_75)}.styles-bg-color-purple-75_e54fb9d{--bg-color:var(--color_purple_75)}.styles-color-green_c35bbed{--color:var(--color_green)}.styles-bg-color-green_1763ce4{--bg-color:var(--color_green)}.styles-color-green-75_f7b03bd{--color:var(--color_green_75)}.styles-bg-color-green-75_544d98a{--bg-color:var(--color_green_75)}.styles-color-black_685f3f1{--color:var(--color_black)}.styles-bg-color-black_a9f6b99{--bg-color:var(--color_black)}.styles-color-black-50_abae999{--color:var(--color_black_50)}.styles-bg-color-black-50_73bddd6{--bg-color:var(--color_black_50)}.styles-color-gray_690c469{--color:var(--color_gray)}.styles-bg-color-gray_33c7f95{--bg-color:var(--color_gray)}.styles-color-gray-75_514f9d3{--color:var(--color_gray_75)}.styles-bg-color-gray-75_647ef0c{--bg-color:var(--color_gray_75)}.styles-color-gray-50_40864f3{--color:var(--color_gray_50)}.styles-bg-color-gray-50_7a70574{--bg-color:var(--color_gray_50)}.styles-color-gray-25_56ba8ed{--color:var(--color_gray_25)}.styles-bg-color-gray-25_1108585{--bg-color:var(--color_gray_25)}.styles-border-radius-x1_9bdaf87{--radius:var(--border-radius-x1)}.styles-border-radius-50_78fd29f{--radius:var(--border-radius-50)}::-webkit-scrollbar{width:4px;height:3px}::-webkit-scrollbar-button{display:none;background-color:#666}::-webkit-scrollbar-track{background-color:#999}::-webkit-scrollbar-track-piece{background-color:var(--color_gray_50)}::-webkit-scrollbar-thumb{border-radius:3px;background-color:var(--color_gray)}::-webkit-scrollbar-corner{background-color:#999}::-webkit-resizer{background-color:#666}',
                '',
            ]),
                (e.locals = {
                    x1: 'styles-x1_80425f3',
                    x2: 'styles-x2_bc7f879',
                    x3: 'styles-x3_0b6a08c',
                    x4: 'styles-x4_266f2be',
                    x5: 'styles-x5_79cb716',
                    x6: 'styles-x6_13f6974',
                    x7: 'styles-x7_7c71d87',
                    x8: 'styles-x8_0644ad0',
                    x9: 'styles-x9_dd12004',
                    x10: 'styles-x10_0a5498c',
                    x11: 'styles-x11_55a9e58',
                    x12: 'styles-x12_f5d3d86',
                    x13: 'styles-x13_3c83897',
                    x14: 'styles-x14_70fb27b',
                    x15: 'styles-x15_c10b20a',
                    x16: 'styles-x16_5d0e93a',
                    x17: 'styles-x17_d2fad66',
                    x18: 'styles-x18_e1ba3f7',
                    'color-orange': 'styles-color-orange_305d5b1',
                    colorOrange: 'styles-color-orange_305d5b1',
                    'bg-color-orange': 'styles-bg-color-orange_fcff687',
                    bgColorOrange: 'styles-bg-color-orange_fcff687',
                    'color-orange-75': 'styles-color-orange-75_3a6efd4',
                    colorOrange75: 'styles-color-orange-75_3a6efd4',
                    'bg-color-orange-75': 'styles-bg-color-orange-75_b3a7744',
                    bgColorOrange75: 'styles-bg-color-orange-75_b3a7744',
                    'color-white': 'styles-color-white_ee2b4cf',
                    colorWhite: 'styles-color-white_ee2b4cf',
                    'bg-color-white': 'styles-bg-color-white_266a2d8',
                    bgColorWhite: 'styles-bg-color-white_266a2d8',
                    'color-white-25': 'styles-color-white-25_ad246ef',
                    colorWhite25: 'styles-color-white-25_ad246ef',
                    'bg-color-white-25': 'styles-bg-color-white-25_8d268a9',
                    bgColorWhite25: 'styles-bg-color-white-25_8d268a9',
                    'color-white-50': 'styles-color-white-50_418d5bb',
                    colorWhite50: 'styles-color-white-50_418d5bb',
                    'bg-color-white-50': 'styles-bg-color-white-50_cac67f1',
                    bgColorWhite50: 'styles-bg-color-white-50_cac67f1',
                    'color-purple': 'styles-color-purple_7751541',
                    colorPurple: 'styles-color-purple_7751541',
                    'bg-color-purple': 'styles-bg-color-purple_3155902',
                    bgColorPurple: 'styles-bg-color-purple_3155902',
                    'color-purple-25': 'styles-color-purple-25_4203025',
                    colorPurple25: 'styles-color-purple-25_4203025',
                    'bg-color-purple-25': 'styles-bg-color-purple-25_7f12c15',
                    bgColorPurple25: 'styles-bg-color-purple-25_7f12c15',
                    'color-purple-50': 'styles-color-purple-50_1b45414',
                    colorPurple50: 'styles-color-purple-50_1b45414',
                    'bg-color-purple-50': 'styles-bg-color-purple-50_7d7f4b0',
                    bgColorPurple50: 'styles-bg-color-purple-50_7d7f4b0',
                    'color-purple-75': 'styles-color-purple-75_ea07d43',
                    colorPurple75: 'styles-color-purple-75_ea07d43',
                    'bg-color-purple-75': 'styles-bg-color-purple-75_e54fb9d',
                    bgColorPurple75: 'styles-bg-color-purple-75_e54fb9d',
                    'color-green': 'styles-color-green_c35bbed',
                    colorGreen: 'styles-color-green_c35bbed',
                    'bg-color-green': 'styles-bg-color-green_1763ce4',
                    bgColorGreen: 'styles-bg-color-green_1763ce4',
                    'color-green-75': 'styles-color-green-75_f7b03bd',
                    colorGreen75: 'styles-color-green-75_f7b03bd',
                    'bg-color-green-75': 'styles-bg-color-green-75_544d98a',
                    bgColorGreen75: 'styles-bg-color-green-75_544d98a',
                    'color-black': 'styles-color-black_685f3f1',
                    colorBlack: 'styles-color-black_685f3f1',
                    'bg-color-black': 'styles-bg-color-black_a9f6b99',
                    bgColorBlack: 'styles-bg-color-black_a9f6b99',
                    'color-black-50': 'styles-color-black-50_abae999',
                    colorBlack50: 'styles-color-black-50_abae999',
                    'bg-color-black-50': 'styles-bg-color-black-50_73bddd6',
                    bgColorBlack50: 'styles-bg-color-black-50_73bddd6',
                    'color-gray': 'styles-color-gray_690c469',
                    colorGray: 'styles-color-gray_690c469',
                    'bg-color-gray': 'styles-bg-color-gray_33c7f95',
                    bgColorGray: 'styles-bg-color-gray_33c7f95',
                    'color-gray-75': 'styles-color-gray-75_514f9d3',
                    colorGray75: 'styles-color-gray-75_514f9d3',
                    'bg-color-gray-75': 'styles-bg-color-gray-75_647ef0c',
                    bgColorGray75: 'styles-bg-color-gray-75_647ef0c',
                    'color-gray-50': 'styles-color-gray-50_40864f3',
                    colorGray50: 'styles-color-gray-50_40864f3',
                    'bg-color-gray-50': 'styles-bg-color-gray-50_7a70574',
                    bgColorGray50: 'styles-bg-color-gray-50_7a70574',
                    'color-gray-25': 'styles-color-gray-25_56ba8ed',
                    colorGray25: 'styles-color-gray-25_56ba8ed',
                    'bg-color-gray-25': 'styles-bg-color-gray-25_1108585',
                    bgColorGray25: 'styles-bg-color-gray-25_1108585',
                    'border-radius-x1': 'styles-border-radius-x1_9bdaf87',
                    borderRadiusX1: 'styles-border-radius-x1_9bdaf87',
                    'border-radius-50': 'styles-border-radius-50_78fd29f',
                    borderRadius50: 'styles-border-radius-50_78fd29f',
                });
        },
        '96yn': function(o, e, r) {
            'use strict';
            r('rGqo');
            var l = r('cDcd');
            function a(o) {
                o.use();
            }
            function c(o) {
                return o.unuse();
            }
            function t(o, e) {
                return { ...o, ...e.locals };
            }
            e.a = o => {
                function e() {
                    return o.forEach(c);
                }
                return Object(l.useLayoutEffect)(() => (o.forEach(a), e), []), o.reduce(t, {});
            };
        },
        Ofak: function(o, e, r) {
            var l,
                a = 0,
                c = r('kUhO'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof c && (c = [[o.i, c, '']]),
                c.locals && (e.locals = c.locals),
                (e.use = e.ref = function() {
                    return a++ || (l = r('aET+')(c, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (l(), (l = null));
                });
        },
        P9pF: function(o, e, r) {
            o.exports = r.p + 'open-sans-400.8a445b21d76f362afebf945d89501b0e.woff2';
        },
        Rgo2: function(o, e, r) {
            (o.exports = r('I1BE')(!1)).push([
                o.i,
                ':root{--color_orange:var(--custom-color_01,#f90);--color_orange_75:var(--custom-color_02,#fc0);--color_white_25:var(--custom-color_03,#fff6d1);--color_white_50:var(--custom-color_04,#ffc);--color_purple_25:var(--custom-color_05,#90f);--color_purple_50:var(--custom-color_06,#609);--color_purple_75:var(--custom-color_07,#4f196d);--color_purple:var(--custom-color_08,#306);--color_green:var(--custom-color_09,#6c0);--color_green_75:var(--custom-color_10,#0c0);--color_white:var(--custom-color_11,#fff);--color_black:var(--custom-color_12,#000);--color_gray:var(--custom-color_13,#666);--color_gray_75:var(--custom-color_14,#999);--color_gray_50:var(--custom-color_15,#ccc);--color_gray_25:var(--custom-color_16,#e3e3e3);--color_gray_20:var(--custom-color_17,#f4f4f4);--color_black_50:var(--custom-color_18,rgba(0,0,0,0.5));--color_black_0:var(--custom-color_19,rgba(0,0,0,0.1));--base-size:4;--x0_25:calc(0.25*var(--base-size)*1px);--x0_5:calc(0.5*var(--base-size)*1px);--x1:calc(var(--base-size)*1px);--x1_5:calc(1.5*var(--base-size)*1px);--x2:calc(2*var(--base-size)*1px);--x2_5:calc(2.5*var(--base-size)*1px);--x3:calc(3*var(--base-size)*1px);--x3_5:calc(3.5*var(--base-size)*1px);--x4:calc(4*var(--base-size)*1px);--x4_5:calc(4.5*var(--base-size)*1px);--x5:calc(5*var(--base-size)*1px);--x6:calc(6*var(--base-size)*1px);--x7:calc(7*var(--base-size)*1px);--x8:calc(8*var(--base-size)*1px);--x9:calc(9*var(--base-size)*1px);--x10:calc(10*var(--base-size)*1px);--x11:calc(11*var(--base-size)*1px);--x12:calc(12*var(--base-size)*1px);--x13:calc(13*var(--base-size)*1px);--x14:calc(14*var(--base-size)*1px);--x15:calc(15*var(--base-size)*1px);--x16:calc(16*var(--base-size)*1px);--x17:calc(17*var(--base-size)*1px);--x18:calc(18*var(--base-size)*1px);--x:var(--line-height);--border-width:var(--x0_25);--shadow-color:var(--color_black_50);--shadow-small:0 var(--x0_25) var(--x1) 0;--shadow-medium:0 var(--x0_5) var(--x2) 0;--shadow-big:0 var(--x1) var(--x4) 0;--desktop:1280px;--desktop-small:960px;--tablet:800px;--tablet-small:640px;--mobile:480px;--mobile-small:375px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;--line-height:calc(var(--x4)*1.5);--font-weight-regular:400;--font-weight-bold:700;--border-radius-x1:var(--x1);--border-radius-50:50%;--radius:var(--x1);--padding-x8:0 var(--x8);--padding-x6:0 var(--x6);--padding-x5:0 var(--x5);--padding-x4:0 var(--x4);--padding-x2_5:0 var(--x2_5);--padding-x2:0 var(--x2)}',
                '',
            ]);
        },
        cDcd: function(o, e) {
            o.exports = React;
        },
        'eV6+': function(o, e, r) {
            (e = o.exports = r('I1BE')(!1)).push([
                o.i,
                '*,:after,:before,html{box-sizing:initial}html{min-width:0;overflow:hidden;color:#42526e;font-family:open_sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:var(--x4)}body,html,main{height:100%}p{margin:0 0 var(--x4) 0}ul{margin-left:var(--x4)}section{padding-top:32px}.app-root_2baa8ea,html{font-size:16px;line-height:24px}.article,body{margin:auto;font-size:1rem;line-height:1.5rem}.h1,h1{margin-bottom:3rem;font-size:2.375rem}.h1,.h2,h1,h2{margin-top:1.5rem;line-height:3rem}.h2,h2{margin-bottom:1.5rem;font-size:1.75rem}.h3,h3{margin-top:1.5rem;margin-bottom:0;font-size:1.3125rem;line-height:1.5rem}.h4,.h5,h4,h5{margin-top:1.5rem;margin-bottom:0;font-size:1rem;line-height:1.5rem}blockquote,ol,ol ol,ol ul,p,pre,table,ul,ul ol,ul ul{margin-top:0}.hr,hr{margin:-1px 0;border:1px solid}a,b,code,em,i,small,strong,sub,sup{line-height:0}sub,sup{position:relative;vertical-align:initial}sup{top:-.5em}sub{bottom:-.25em}',
                '',
            ]),
                (e.locals = { root: 'app-root_2baa8ea' });
        },
        ewmN: function(o, e, r) {
            var l,
                a = 0,
                c = r('p20U'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof c && (c = [[o.i, c, '']]),
                c.locals && (e.locals = c.locals),
                (e.use = e.ref = function() {
                    return a++ || (l = r('aET+')(c, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (l(), (l = null));
                });
        },
        faye: function(o, e) {
            o.exports = ReactDOM;
        },
        jjbv: function(o, e, r) {
            var l,
                a = 0,
                c = r('4uOH'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof c && (c = [[o.i, c, '']]),
                c.locals && (e.locals = c.locals),
                (e.use = e.ref = function() {
                    return a++ || (l = r('aET+')(c, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (l(), (l = null));
                });
        },
        kUhO: function(o, e, r) {
            (e = o.exports = r('I1BE')(!1)).push([
                o.i,
                '.index-container_8dc0997{display:grid;margin-left:0;height:100%;grid-template-columns:240px 1fr;grid-template-rows:100%;overflow:hidden;transition:all .2s ease-out}.index-container_8dc0997.index-no_margin_left_03cbd5e{margin-left:-240px}aside{width:100%;background:#f4f5f7;color:#333;grid-column:1/2;grid-row:1/2;transition:all .3s ease-out}.index-page_content_a6d795c{height:100%;background:#fff;color:#000;grid-column:2/3;grid-row:1/2;overflow-y:hidden}',
                '',
            ]),
                (e.locals = {
                    container: 'index-container_8dc0997',
                    no_margin_left: 'index-no_margin_left_03cbd5e',
                    noMarginLeft: 'index-no_margin_left_03cbd5e',
                    page_content: 'index-page_content_a6d795c',
                    pageContent: 'index-page_content_a6d795c',
                });
        },
        p20U: function(o, e, r) {
            (e = o.exports = r('I1BE')(!1)).push([
                o.i,
                '.index-component-list_ec7375c{display:grid;height:100%;grid-template-columns:1fr;grid-template-rows:48px 1fr}.index-component-list_ec7375c ul{overflow-y:auto;grid-row:2/3}.index-component-list_ec7375c a{display:block;padding:9px 30px;color:#333;text-decoration:none;opacity:.6;transition:.1s}.index-component-list_ec7375c a:hover{background:rgba(51,51,51,.1)}.index-component-list_ec7375c a.index-active_5161255{opacity:1}.index-component-list_ec7375c a.index-active_5161255,.index-component-list_ec7375c a.index-active_5161255:hover{background:rgba(51,51,51,.1)}.index-title_746a1fa{padding:0 0 0 16px;color:#70727b;font-size:1.3125rem;line-height:48px;grid-row:1/2}',
                '',
            ]),
                (e.locals = {
                    'component-list': 'index-component-list_ec7375c',
                    componentList: 'index-component-list_ec7375c',
                    active: 'index-active_5161255',
                    title: 'index-title_746a1fa',
                });
        },
        pgDk: function(o, e, r) {
            var l,
                a = 0,
                c = r('eV6+'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof c && (c = [[o.i, c, '']]),
                c.locals && (e.locals = c.locals),
                (e.use = e.ref = function() {
                    return a++ || (l = r('aET+')(c, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (l(), (l = null));
                });
        },
        'q/oh': function(o, e, r) {
            (e = o.exports = r('I1BE')(!1)).push([
                o.i,
                '.index-top_bar_45043cd{display:flex;align-items:center;height:48px;background:#f4f5f7}.index-top_bar_45043cd h3{margin-top:0;color:#70727b}.index-menu_icon_bc437cd{fill:#70727b;padding:var(--x2_5);width:20px;height:20px;cursor:pointer}.index-title_component_de63d23{padding:0 20px}.index-content_d99c2e0{margin:0 auto;padding:0 var(--x8);max-width:1300px;height:calc(100% - 48px)}.index-content-wrapper_b32f298{overflow-y:auto;height:calc(100% - 48px)}',
                '',
            ]),
                (e.locals = {
                    top_bar: 'index-top_bar_45043cd',
                    topBar: 'index-top_bar_45043cd',
                    menu_icon: 'index-menu_icon_bc437cd',
                    menuIcon: 'index-menu_icon_bc437cd',
                    title_component: 'index-title_component_de63d23',
                    titleComponent: 'index-title_component_de63d23',
                    content: 'index-content_d99c2e0',
                    'content-wrapper': 'index-content-wrapper_b32f298',
                    contentWrapper: 'index-content-wrapper_b32f298',
                });
        },
    },
    [[0, 6, 0]],
]);
