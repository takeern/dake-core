import ssrRender from './control/ssrRender';

const json = {
    'publicPath': '/dist',
    'filename': [
        'index.css',
        'index.js',
        'vendors~index.js'
    ]
};

export default ssrRender;