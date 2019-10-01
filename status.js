'use strict';

module.exports.handler = async event => {
    return {
        statusCode: 301,
        headers: {
            "Location": "https://status.marvinschopf.com"
        },
        body: "Redirecting..."
    }
};
