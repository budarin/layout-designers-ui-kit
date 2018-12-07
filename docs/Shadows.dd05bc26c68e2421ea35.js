(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        '3Bwb': function(n, e, o) {
            var i,
                a = 0,
                s = o('T4gj'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof s && (s = [[n.i, s, '']]),
                s.locals && (e.locals = s.locals),
                (e.use = e.ref = function() {
                    return a++ || (i = o('aET+')(s, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (i(), (i = null));
                });
        },
        '5Spt': function(n, e, o) {
            'use strict';
            o.r(e);
            var i = o('gcR/'),
                a = o.n(i),
                s = o('cDcd'),
                t = o.n(s),
                d = o('Ljcw'),
                r = o('WWQO'),
                c = o('EW+S'),
                l = o('70cF'),
                v = o.n(l),
                x = o('GsvW'),
                u = o.n(x),
                b = o('96yn');
            var h = () => {
                    const n = Object(b.a)([v.a]);
                    return (
                        Object(b.a)([u.a]),
                        t.a.createElement(
                            t.a.Fragment,
                            null,
                            a()(
                                'div',
                                { style: { boxShadow: 'var(--shadow-small)' }, className: n.demoBox },
                                'samll',
                                'SMALL SHADOW',
                            ),
                            a()(
                                'div',
                                { style: { boxShadow: 'var(--shadow-medium)' }, className: n.demoBox },
                                'medium',
                                'MEDIUM SHADOW',
                            ),
                            a()(
                                'div',
                                { style: { boxShadow: 'var(--shadow-big)' }, className: n.demoBox },
                                'large',
                                'BIG SHADOW',
                            ),
                        )
                    );
                },
                p = o('tR12'),
                m = o('oQjs');
            var f = a()(d.a, {}, void 0, a()(h, {})),
                w = a()(
                    r.a,
                    {},
                    void 0,
                    '<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n        <title>Shadows</title>\n        <link rel="stylesheet" href="../styles/styles.css" />\n        <link rel="stylesheet" href="../styles/variables.css" />\n        <link rel="stylesheet" href="./demo.css" />\n        <link rel="stylesheet" href="./index.css" />\n    </head>\n    <body>\n        <div style="box-shadow:var(--shadow-small) var(--shadow-color)" class="demo-box">SMALL SHADOW EXAMPLE</div>\n        <div style="box-shadow: var(--shadow-medium)  var(--shadow-color)" class="demo-box">MEDIUM SHADOW EXAMPLE</div>\n        <div style="box-shadow: var(--shadow-big)  var(--shadow-color)" class="demo-box">BIG SHADOW EXAMPLE</div>\n    </body>\n</html>\n',
                ),
                g = a()(
                    c.a,
                    {},
                    void 0,
                    ':root {\n    --shadow-color: var(--color_black_50);\n    --shadow-small: 0 var(--x0_25) var(--x1) 0;\n    --shadow-medium: 0 var(--x0_5) var(--x2) 0;\n    --shadow-big: 0 var(--x1) var(--x4) 0;\n}\n',
                ),
                _ = a()('section', {}, void 0, a()('p', {}, void 0, 'Descriptions:'), a()('p', {}, void 0, 'Params:'));
            e.default = () =>
                t.a.createElement(t.a.Fragment, null, a()(m.a, { title: 'Shadows', version: p.version }), f, w, g, _);
        },
        '70cF': function(n, e, o) {
            var i,
                a = 0,
                s = o('xI4J'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof s && (s = [[n.i, s, '']]),
                s.locals && (e.locals = s.locals),
                (e.use = e.ref = function() {
                    return a++ || (i = o('aET+')(s, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (i(), (i = null));
                });
        },
        'EW+S': function(n, e, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('STvB')),
                t = o('KR5s'),
                d = o.n(t),
                r = o('cB8T'),
                c = o.n(r);
            const l = Object(s.a)('CSS');
            e.a = n => a()(l, {}, void 0, a()(d.a, { language: 'css', style: c.a }, void 0, n.children));
        },
        F0FH: function(n, e, o) {
            (e = n.exports = o('I1BE')(!1)).push([
                n.i,
                '.index-demoPageTitle_522f3c2 h2 {\n    display: inline-block;\n    margin-bottom: 0;\n}\n\n.index-version_d078df1 {\n    color: blue;\n}\n',
                '',
            ]),
                (e.locals = { demoPageTitle: 'index-demoPageTitle_522f3c2', version: 'index-version_d078df1' });
        },
        GsvW: function(n, e, o) {
            var i,
                a = 0,
                s = o('XmLO'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof s && (s = [[n.i, s, '']]),
                s.locals && (e.locals = s.locals),
                (e.use = e.ref = function() {
                    return a++ || (i = o('aET+')(s, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (i(), (i = null));
                });
        },
        Ljcw: function(n, e, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('96yn')),
                t = o('3Bwb'),
                d = o.n(t),
                r = a()('h3', {}, void 0, 'Demo');
            e.a = n => {
                const e = Object(s.a)([d.a]);
                return a()(
                    'div',
                    { className: e.preview, tabIndex: 0 },
                    void 0,
                    a()('div', { className: e.title }, void 0, r),
                    a()('div', { className: e.content }, void 0, n.children),
                );
            };
        },
        PhBA: function(n, e, o) {
            var i,
                a = 0,
                s = o('F0FH'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof s && (s = [[n.i, s, '']]),
                s.locals && (e.locals = s.locals),
                (e.use = e.ref = function() {
                    return a++ || (i = o('aET+')(s, t)), e;
                }),
                (e.unuse = e.unref = function() {
                    a > 0 && !--a && (i(), (i = null));
                });
        },
        STvB: function(n, e, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('TSYQ')),
                t = o.n(s),
                d = o('96yn'),
                r = o('3Bwb'),
                c = o.n(r);
            e.a = n => e => {
                const o = Object(d.a)([c.a]),
                    i = t()(o.preview, o.code, o.collapsible);
                return a()(
                    'div',
                    { className: i, tabIndex: 0 },
                    void 0,
                    a()(
                        'div',
                        { className: o.title },
                        void 0,
                        a()('div', {}, void 0, a()('h3', {}, void 0, n)),
                        a()('div', { className: o.copy_btn }, void 0, 'Copy'),
                    ),
                    a()('div', {}, void 0, e.children),
                );
            };
        },
        T4gj: function(n, e, o) {
            (e = n.exports = o('I1BE')(!1)).push([
                n.i,
                '.index-preview_b620986.index-code_7f08e74 {\n    background: #fff;\n}\n\n.index-preview_b620986 {\n    display: grid;\n    margin-top: var(--x8);\n    height: auto;\n    overflow: hidden;\n    border: 1px solid rgba(11, 31, 53, 0.1);\n    border-radius: 4px;\n    grid-template-columns: 1fr;\n    grid-template-rows: 40px 1fr;\n}\n\n.index-collapsible_5cf5b3b {\n    max-height: 200px;\n}\n\n.index-collapsible_5cf5b3b:focus {\n    max-height: 100%;\n    outline: 0;\n    box-shadow: var(--shadow-small) var(--color_white_25);\n}\n\n.index-title_09d75d4 div {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.index-title_09d75d4 {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--x2) var(--x2);\n    background: rgb(244, 245, 247);\n    grid-row: 1 / 2;\n}\n.index-title_09d75d4 h3 {\n    margin-top: 0;\n}\n.index-description_bc1622c {\n    grid-row: 2 / 3;\n    padding: 8px 16px;\n}\n\n.index-copy_btn_f12ef9b {\n    flex-grow: 0;\n    flex-shrink: 0;\n    padding: 4px;\n    width: 60px;\n    visibility: hidden;\n    border: 1px solid #aaa;\n    border-radius: var(--x1);\n    background: #fff;\n    color: #000;\n    cursor: pointer;\n}\n.index-preview_b620986:hover .index-copy_btn_f12ef9b {\n    visibility: visible;\n}\n.index-content_2cc395f {\n    padding: var(--x2);\n}\n\n.index-preview_b620986 pre {\n    margin: 0 !important;\n}\n',
                '',
            ]),
                (e.locals = {
                    preview: 'index-preview_b620986',
                    code: 'index-code_7f08e74',
                    collapsible: 'index-collapsible_5cf5b3b',
                    title: 'index-title_09d75d4',
                    description: 'index-description_bc1622c',
                    copy_btn: 'index-copy_btn_f12ef9b',
                    copyBtn: 'index-copy_btn_f12ef9b',
                    content: 'index-content_2cc395f',
                });
        },
        WWQO: function(n, e, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('STvB')),
                t = o('KR5s'),
                d = o.n(t),
                r = o('cB8T'),
                c = o.n(r);
            const l = Object(s.a)('Code');
            e.a = n => a()(l, {}, void 0, a()(d.a, { language: 'javascript', style: c.a }, void 0, n.children));
        },
        XmLO: function(n, e, o) {
            (n.exports = o('I1BE')(!1)).push([
                n.i,
                ':root {\n    --shadow-color: var(--color_black_50);\n    --shadow-small: 0 var(--x0_25) var(--x1) 0;\n    --shadow-medium: 0 var(--x0_5) var(--x2) 0;\n    --shadow-big: 0 var(--x1) var(--x4) 0;\n}\n',
                '',
            ]);
        },
        oQjs: function(n, e, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('96yn')),
                t = o('PhBA'),
                d = o.n(t),
                r = a()('span', {}, void 0, 'ver: ');
            e.a = n => {
                const e = Object(s.a)([d.a]);
                return a()(
                    'div',
                    { className: e.demoPageTitle },
                    void 0,
                    a()('h2', {}, void 0, n.title),
                    '   ',
                    r,
                    a()('span', { className: e.version }, void 0, n.version),
                );
            };
        },
        tR12: function(n) {
            n.exports = { name: 'shadows', version: '1.0.0' };
        },
        xI4J: function(n, e, o) {
            (e = n.exports = o('I1BE')(!1)).push([
                n.i,
                '.demo-demoBox_1898259 {\n    margin: var(--x4);\n    padding: 20px;\n}\n',
                '',
            ]),
                (e.locals = { demoBox: 'demo-demoBox_1898259' });
        },
    },
]);
