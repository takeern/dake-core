const should = require('should');
const fn = require('../distTs/main.js');
const json = {
    'publicPath': '/dist',
    'filename': [
        'index.css',
        'index.js',
        'vendors~index.js'
    ]
    // 'isAbsolutePath': false,
};
console.log(fn.ssrRender(json));
describe('test ssr render', function() {
    it('should return string with html', function() {
        const json = {
            'publicPath': '/dist',
            'filename': [
                'index.css',
                'index.js',
                'vendors~index.js'
            ]
            // 'isAbsolutePath': false,
        };
        fn.ssrRender(json).should.be.html();
    })
})