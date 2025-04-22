const config = require('../config/index.js');

const verifyApiKey = (req, res, next) => {

    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
        return res.status(401).json({ message: 'API key is missing' });
    }

    if (apiKey !== config.apiKey) {
        return res.status(403).json({ message: 'Invalid API key' });
    }

    next();
};

module.exports = {
    verifyApiKey
};