'use strict';

const fs = require("fs")

module.exports.handler = async event => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: fs.readFileSync("builder.html", "utf8")
    }
};
