(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        '2OxA': function(e, n, i) {
            (n = e.exports = i('I1BE')(!1)).push([
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
        '3Bwb': function(e, n, i) {
            var o,
                t = 0,
                d = i('2OxA'),
                c = { hmr: !0 };
            (c.insertInto = void 0),
                'string' == typeof d && (d = [[e.i, d, '']]),
                d.locals && (n.locals = d.locals),
                (n.use = n.ref = function() {
                    return t++ || (o = i('aET+')(d, c)), n;
                }),
                (n.unuse = n.unref = function() {
                    t > 0 && !--t && (o(), (o = null));
                });
        },
        ANJM: function(e, n, i) {
            var o,
                t = 0,
                d = i('rgDy'),
                c = { hmr: !0 };
            (c.insertInto = void 0),
                'string' == typeof d && (d = [[e.i, d, '']]),
                d.locals && (n.locals = d.locals),
                (n.use = n.ref = function() {
                    return t++ || (o = i('aET+')(d, c)), n;
                }),
                (n.unuse = n.unref = function() {
                    t > 0 && !--t && (o(), (o = null));
                });
        },
        'EW+S': function(e, n, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('STvB')),
                c = i('KR5s'),
                r = i.n(c),
                a = i('cB8T'),
                s = i.n(a);
            const l = Object(d.a)('CSS');
            n.a = e => t()(l, {}, void 0, t()(r.a, { language: 'css', style: s.a }, void 0, e.children));
        },
        Ljcw: function(e, n, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('96yn')),
                c = i('3Bwb'),
                r = i.n(c),
                a = t()('h3', {}, void 0, 'Demo');
            n.a = e => {
                const n = Object(d.a)([r.a]);
                return t()(
                    'div',
                    { className: n.preview, tabIndex: 0 },
                    void 0,
                    t()('div', { className: n.title }, void 0, a),
                    t()('div', { className: n.content }, void 0, e.children),
                );
            };
        },
        On3V: function(e, n, i) {
            (n = e.exports = i('I1BE')(!1)).push([
                e.i,
                '.index-demoPageTitle_522f3c2 h2{display:inline-block;margin-bottom:0}.index-version_d078df1{color:#00f}',
                '',
            ]),
                (n.locals = { demoPageTitle: 'index-demoPageTitle_522f3c2', version: 'index-version_d078df1' });
        },
        PhBA: function(e, n, i) {
            var o,
                t = 0,
                d = i('On3V'),
                c = { hmr: !0 };
            (c.insertInto = void 0),
                'string' == typeof d && (d = [[e.i, d, '']]),
                d.locals && (n.locals = d.locals),
                (n.use = n.ref = function() {
                    return t++ || (o = i('aET+')(d, c)), n;
                }),
                (n.unuse = n.unref = function() {
                    t > 0 && !--t && (o(), (o = null));
                });
        },
        STvB: function(e, n, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('TSYQ')),
                c = i.n(d),
                r = i('96yn'),
                a = i('3Bwb'),
                s = i.n(a);
            n.a = e => n => {
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
                        t()('div', {}, void 0, t()('h3', {}, void 0, e)),
                        t()('div', { className: i.copy_btn }, void 0, 'Copy'),
                    ),
                    t()('div', {}, void 0, n.children),
                );
            };
        },
        WWQO: function(e, n, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('STvB')),
                c = i('KR5s'),
                r = i.n(c),
                a = i('cB8T'),
                s = i.n(a);
            const l = Object(d.a)('Code');
            n.a = e => t()(l, {}, void 0, t()(r.a, { language: 'javascript', style: s.a }, void 0, e.children));
        },
        oQjs: function(e, n, i) {
            'use strict';
            var o = i('gcR/'),
                t = i.n(o),
                d = (i('cDcd'), i('96yn')),
                c = i('PhBA'),
                r = i.n(c),
                a = t()('span', {}, void 0, 'ver: ');
            n.a = e => {
                const n = Object(d.a)([r.a]);
                return t()(
                    'div',
                    { className: n.demoPageTitle },
                    void 0,
                    t()('h2', {}, void 0, e.title),
                    '   ',
                    a,
                    t()('span', { className: n.version }, void 0, e.version),
                );
            };
        },
        r1vt: function(e) {
            e.exports = { name: 'button', version: '1.0.0' };
        },
        rgDy: function(e, n, i) {
            (n = e.exports = i('I1BE')(!1)).push([
                e.i,
                '.index-btn_1406392{padding:4px;border:1px solid grey;line-height:24px}',
                '',
            ]),
                (n.locals = { btn: 'index-btn_1406392' });
        },
        xdqe: function(e, n, i) {
            'use strict';
            i.r(n);
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
            var u = e => {
                    const n = Object(p.a)([v.a]);
                    return t()('button', { className: n.btn }, void 0, e.children);
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
            n.default = () =>
                c.a.createElement(c.a.Fragment, null, t()(f.a, { title: 'Button', version: b.version }), x, g, h, _);
        },
    },
]);
