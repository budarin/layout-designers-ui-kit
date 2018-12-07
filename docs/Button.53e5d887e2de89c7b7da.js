(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        '3Bwb': function(n, e, i) {
            var o,
                t = 0,
                d = i('T4gj'),
                c = { hmr: !0 };
            (c.insertInto = void 0),
                'string' == typeof d && (d = [[n.i, d, '']]),
                d.locals && (e.locals = d.locals),
                (e.use = e.ref = function() {
                    return t++ || (o = i('aET+')(d, c)), e;
                }),
                (e.unuse = e.unref = function() {
                    t > 0 && !--t && (o(), (o = null));
                });
        },
        ANJM: function(n, e, i) {
            var o,
                t = 0,
                d = i('t8us'),
                c = { hmr: !0 };
            (c.insertInto = void 0),
                'string' == typeof d && (d = [[n.i, d, '']]),
                d.locals && (e.locals = d.locals),
                (e.use = e.ref = function() {
                    return t++ || (o = i('aET+')(d, c)), e;
                }),
                (e.unuse = e.unref = function() {
                    t > 0 && !--t && (o(), (o = null));
                });
        },
        'EW+S': function(n, e, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('STvB')),
                c = i('KR5s'),
                r = i.n(c),
                a = i('cB8T'),
                s = i.n(a);
            const l = Object(d.a)('CSS');
            e.a = n => t()(l, {}, void 0, t()(r.a, { language: 'css', style: s.a }, void 0, n.children));
        },
        F0FH: function(n, e, i) {
            (e = n.exports = i('I1BE')(!1)).push([
                n.i,
                '.index-demoPageTitle_522f3c2 h2 {\n    display: inline-block;\n    margin-bottom: 0;\n}\n\n.index-version_d078df1 {\n    color: blue;\n}\n',
                '',
            ]),
                (e.locals = { demoPageTitle: 'index-demoPageTitle_522f3c2', version: 'index-version_d078df1' });
        },
        Ljcw: function(n, e, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('96yn')),
                c = i('3Bwb'),
                r = i.n(c),
                a = t()('h3', {}, void 0, 'Demo');
            e.a = n => {
                const e = Object(d.a)([r.a]);
                return t()(
                    'div',
                    { className: e.preview, tabIndex: 0 },
                    void 0,
                    t()('div', { className: e.title }, void 0, a),
                    t()('div', { className: e.content }, void 0, n.children),
                );
            };
        },
        PhBA: function(n, e, i) {
            var o,
                t = 0,
                d = i('F0FH'),
                c = { hmr: !0 };
            (c.insertInto = void 0),
                'string' == typeof d && (d = [[n.i, d, '']]),
                d.locals && (e.locals = d.locals),
                (e.use = e.ref = function() {
                    return t++ || (o = i('aET+')(d, c)), e;
                }),
                (e.unuse = e.unref = function() {
                    t > 0 && !--t && (o(), (o = null));
                });
        },
        STvB: function(n, e, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('TSYQ')),
                c = i.n(d),
                r = i('96yn'),
                a = i('3Bwb'),
                s = i.n(a);
            e.a = n => e => {
                const i = Object(r.a)([s.a]),
                    o = c()(i.preview, i.code, i.collapsible);
                return t()(
                    'div',
                    { className: o, tabIndex: 0 },
                    void 0,
                    t()(
                        'div',
                        { className: i.title },
                        void 0,
                        t()('div', {}, void 0, t()('h3', {}, void 0, n)),
                        t()('div', { className: i.copy_btn }, void 0, 'Copy'),
                    ),
                    t()('div', {}, void 0, e.children),
                );
            };
        },
        T4gj: function(n, e, i) {
            (e = n.exports = i('I1BE')(!1)).push([
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
        WWQO: function(n, e, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('STvB')),
                c = i('KR5s'),
                r = i.n(c),
                a = i('cB8T'),
                s = i.n(a);
            const l = Object(d.a)('Code');
            e.a = n => t()(l, {}, void 0, t()(r.a, { language: 'javascript', style: s.a }, void 0, n.children));
        },
        oQjs: function(n, e, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('96yn')),
                c = i('PhBA'),
                r = i.n(c),
                a = t()('span', {}, void 0, 'ver: ');
            e.a = n => {
                const e = Object(d.a)([r.a]);
                return t()(
                    'div',
                    { className: e.demoPageTitle },
                    void 0,
                    t()('h2', {}, void 0, n.title),
                    '   ',
                    a,
                    t()('span', { className: e.version }, void 0, n.version),
                );
            };
        },
        r1vt: function(n) {
            n.exports = { name: 'button', version: '1.0.0' };
        },
        t8us: function(n, e, i) {
            (e = n.exports = i('I1BE')(!1)).push([
                n.i,
                '.index-btn_1406392 {\n    padding: 4px;\n    border: 1px solid gray;\n    line-height: 24px;\n}\n',
                '',
            ]),
                (e.locals = { btn: 'index-btn_1406392' });
        },
        xdqe: function(n, e, i) {
            'use strict';
            i.r(e);
            var o = i('gcR/'),
                t = i.n(o),
                d = i('cDcd'),
                c = i.n(d),
                r = i('Ljcw'),
                a = i('WWQO'),
                s = i('EW+S'),
                l = i('ANJM'),
                v = i.n(l),
                p = i('96yn');
            var u = n => {
                    const e = Object(p.a)([v.a]);
                    return t()('button', { className: e.btn }, void 0, n.children);
                },
                b = i('r1vt'),
                f = i('oQjs');
            var x = t()(r.a, {}, void 0, t()(u, {}, void 0, 'Hello!')),
                g = t()(a.a, {}, void 0, '<button class="btn">Hello!</button>\n'),
                h = t()(
                    s.a,
                    {},
                    void 0,
                    '.btn {\n    padding: 4px;\n    border: 1px solid gray;\n    line-height: 24px;\n}\n',
                ),
                _ = t()('section', {}, void 0, t()('p', {}, void 0, 'Descriptions:'), t()('p', {}, void 0, 'Params:'));
            e.default = () =>
                c.a.createElement(c.a.Fragment, null, t()(f.a, { title: 'Button', version: b.version }), x, g, h, _);
        },
    },
]);
