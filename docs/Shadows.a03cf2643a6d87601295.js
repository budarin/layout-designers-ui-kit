(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    {
        '2OxA': function(e, n, o) {
            (n = e.exports = o('I1BE')(!1)).push([
                e.i,
                '.index-preview_b620986.index-code_7f08e74{background:#fff}.index-preview_b620986{display:grid;margin-top:var(--x8);height:auto;overflow:hidden;border:1px solid rgba(11,31,53,.1);border-radius:4px;grid-template-columns:1fr;grid-template-rows:40px 1fr}.index-collapsible_5cf5b3b{max-height:200px}.index-collapsible_5cf5b3b:focus{max-height:100%;outline:0;box-shadow:var(--shadow-small) var(--color_white_25)}.index-title_09d75d4 div{flex-grow:1;flex-shrink:1}.index-title_09d75d4{display:flex;align-items:center;justify-content:space-between;padding:var(--x2) var(--x2);background:#f4f5f7;grid-row:1/2}.index-title_09d75d4 h3{margin-top:0}.index-description_bc1622c{grid-row:2/3;padding:8px 16px}.index-copy_btn_f12ef9b{flex-grow:0;flex-shrink:0;padding:4px;width:60px;visibility:hidden;border:1px solid #aaa;border-radius:var(--x1);background:#fff;color:#000;cursor:pointer}.index-preview_b620986:hover .index-copy_btn_f12ef9b{visibility:visible}.index-content_2cc395f{padding:var(--x2)}.index-preview_b620986 pre{margin:0!important}',
                '',
            ]),
                (n.locals = {
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
        '3Bwb': function(e, n, o) {
            var i,
                a = 0,
                s = o('2OxA'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof s && (s = [[e.i, s, '']]),
                s.locals && (n.locals = s.locals),
                (n.use = n.ref = function() {
                    return a++ || (i = o('aET+')(s, t)), n;
                }),
                (n.unuse = n.unref = function() {
                    a > 0 && !--a && (i(), (i = null));
                });
        },
        '5Spt': function(e, n, o) {
            'use strict';
            o.r(n);
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
                f = o('96yn');
            var h = () => {
                    const e = Object(f.a)([v.a]);
                    return (
                        Object(f.a)([u.a]),
                        t.a.createElement(
                            t.a.Fragment,
                            null,
                            a()(
                                'div',
                                { style: { boxShadow: 'var(--shadow-small)' }, className: e.demoBox },
                                'samll',
                                'SMALL SHADOW',
                            ),
                            a()(
                                'div',
                                { style: { boxShadow: 'var(--shadow-medium)' }, className: e.demoBox },
                                'medium',
                                'MEDIUM SHADOW',
                            ),
                            a()(
                                'div',
                                { style: { boxShadow: 'var(--shadow-big)' }, className: e.demoBox },
                                'large',
                                'BIG SHADOW',
                            ),
                        )
                    );
                },
                p = o('tR12'),
                b = o('oQjs');
            var m = a()(d.a, {}, void 0, a()(h, {})),
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
            n.default = () =>
                t.a.createElement(t.a.Fragment, null, a()(b.a, { title: 'Shadows', version: p.version }), m, w, g, _);
        },
        '70cF': function(e, n, o) {
            var i,
                a = 0,
                s = o('zJ6q'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof s && (s = [[e.i, s, '']]),
                s.locals && (n.locals = s.locals),
                (n.use = n.ref = function() {
                    return a++ || (i = o('aET+')(s, t)), n;
                }),
                (n.unuse = n.unref = function() {
                    a > 0 && !--a && (i(), (i = null));
                });
        },
        'E2/T': function(e, n, o) {
            (e.exports = o('I1BE')(!1)).push([
                e.i,
                ':root{--shadow-color:var(--color_black_50);--shadow-small:0 var(--x0_25) var(--x1) 0;--shadow-medium:0 var(--x0_5) var(--x2) 0;--shadow-big:0 var(--x1) var(--x4) 0}',
                '',
            ]);
        },
        'EW+S': function(e, n, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('STvB')),
                t = o('KR5s'),
                d = o.n(t),
                r = o('cB8T'),
                c = o.n(r);
            const l = Object(s.a)('CSS');
            n.a = e => a()(l, {}, void 0, a()(d.a, { language: 'css', style: c.a }, void 0, e.children));
        },
        GsvW: function(e, n, o) {
            var i,
                a = 0,
                s = o('E2/T'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof s && (s = [[e.i, s, '']]),
                s.locals && (n.locals = s.locals),
                (n.use = n.ref = function() {
                    return a++ || (i = o('aET+')(s, t)), n;
                }),
                (n.unuse = n.unref = function() {
                    a > 0 && !--a && (i(), (i = null));
                });
        },
        Ljcw: function(e, n, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('96yn')),
                t = o('3Bwb'),
                d = o.n(t),
                r = a()('h3', {}, void 0, 'Demo');
            n.a = e => {
                const n = Object(s.a)([d.a]);
                return a()(
                    'div',
                    { className: n.preview, tabIndex: 0 },
                    void 0,
                    a()('div', { className: n.title }, void 0, r),
                    a()('div', { className: n.content }, void 0, e.children),
                );
            };
        },
        On3V: function(e, n, o) {
            (n = e.exports = o('I1BE')(!1)).push([
                e.i,
                '.index-demoPageTitle_522f3c2 h2{display:inline-block;margin-bottom:0}.index-version_d078df1{color:#00f}',
                '',
            ]),
                (n.locals = { demoPageTitle: 'index-demoPageTitle_522f3c2', version: 'index-version_d078df1' });
        },
        PhBA: function(e, n, o) {
            var i,
                a = 0,
                s = o('On3V'),
                t = { hmr: !0 };
            (t.insertInto = void 0),
                'string' == typeof s && (s = [[e.i, s, '']]),
                s.locals && (n.locals = s.locals),
                (n.use = n.ref = function() {
                    return a++ || (i = o('aET+')(s, t)), n;
                }),
                (n.unuse = n.unref = function() {
                    a > 0 && !--a && (i(), (i = null));
                });
        },
        STvB: function(e, n, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('TSYQ')),
                t = o.n(s),
                d = o('96yn'),
                r = o('3Bwb'),
                c = o.n(r);
            n.a = e => n => {
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
                        a()('div', {}, void 0, a()('h3', {}, void 0, e)),
                        a()('div', { className: o.copy_btn }, void 0, 'Copy'),
                    ),
                    a()('div', {}, void 0, n.children),
                );
            };
        },
        WWQO: function(e, n, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('STvB')),
                t = o('KR5s'),
                d = o.n(t),
                r = o('cB8T'),
                c = o.n(r);
            const l = Object(s.a)('Code');
            n.a = e => a()(l, {}, void 0, a()(d.a, { language: 'javascript', style: c.a }, void 0, e.children));
        },
        oQjs: function(e, n, o) {
            'use strict';
            var i = o('gcR/'),
                a = o.n(i),
                s = (o('cDcd'), o('96yn')),
                t = o('PhBA'),
                d = o.n(t),
                r = a()('span', {}, void 0, 'ver: ');
            n.a = e => {
                const n = Object(s.a)([d.a]);
                return a()(
                    'div',
                    { className: n.demoPageTitle },
                    void 0,
                    a()('h2', {}, void 0, e.title),
                    '   ',
                    r,
                    a()('span', { className: n.version }, void 0, e.version),
                );
            };
        },
        tR12: function(e) {
            e.exports = { name: 'shadows', version: '1.0.0' };
        },
        zJ6q: function(e, n, o) {
            (n = e.exports = o('I1BE')(!1)).push([e.i, '.demo-demoBox_1898259{margin:var(--x4);padding:20px}', '']),
                (n.locals = { demoBox: 'demo-demoBox_1898259' });
        },
    },
]);
