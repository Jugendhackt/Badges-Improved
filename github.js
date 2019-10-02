'use strict';

module.exports.handler = async event => {
    return {
        statusCode: 301,
        headers: {
            "Location": "https://github.com/Jugendhackt/Badges-Improved"
        },
        body: "Redirecting to https://github.com/Jugendhackt/Badges-Improved..."
    }
};
