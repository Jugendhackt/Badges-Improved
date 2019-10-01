'use strict';

const fs = require("fs")

module.exports.redirect = async event => {
    return {
        statusCode: 301,
        headers: {
            "Location": "/builder",
        },
        body: "Redirecting to /builder..."
    }
}

module.exports.handler = async event => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: fs.readFileSync("builder.min.html", "utf8")
    }
};
