

const { handleConnection } = require('./dbControllers');
const { findProduct, saveProduct } = require('./queryControllers');

module.exports = {
    findProduct,
    saveProduct,
    handleConnection,
};
