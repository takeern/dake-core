const { expect } = require('chai');
const parseJson = require('../src/ssrRender/control/parseJson.ts').default;

describe('test ssr parseJson', function() {

    it('should return Object with css,js releative path', function() {
        const json = {
            'publicPath': '/dist',
            'isAbsolutePath': true,
            'filename': [
                'index.css',
                'vendors~index.css',
                'index.js',
                'vendors~index.js'
            ],
        };
        const result = parseJson(json);
        expect(result).to.deep.equal({
            css: [
                'vendors~index.css',
                'index.css',
            ],
            js: [
                'vendors~index.js',
                'index.js',
            ],
        });
    });

    it('should return Object with css,js absolute path', function() {
        const json = {
            'publicPath': '/dist',
            'isAbsolutePath': false,
            'filename': [
                'index.css',
                'index.js',
                'vendors~index.js'
            ],
        };

        const result = parseJson(json);

        expect(result).to.deep.equal({
            css: [
                '/dist/index.css',
            ],
            js: [
                '/dist/vendors~index.js',
                '/dist/index.js',
            ],
        });
    });

})