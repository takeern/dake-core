const parseConfig = require('./configFactory/index').default;
const ssrRender = require('./ssrRender/index').default;
module.exports = {
    parseConfig,
    ssrRender,
};
