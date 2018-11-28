"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseJson_1 = require("./parseJson");
function ssrRender(jsonConfig, body = ' ', initState) {
    const jsCss = parseJson_1.default(jsonConfig);
    const jsStr = jsCss.js.reduce((p, n) => {
        return p + `<script src=${n} type=text/javascript></script>`;
    }, ' ');
    const cssStr = jsCss.css.reduce((p, n) => {
        return p + `<link href=${n} rel=stylesheet>`;
    }, ' ');
    const html = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset=utf-8>
        </head>
        ${cssStr}
        <body>
            <div class='server-app'>
            <script>
                window.__initState__ = ${JSON.stringify(initState)};
            </script>
            ${body}
            </div>
        </body>
        ${jsStr}
    </html>
    `;
    return html;
}
exports.default = ssrRender;
