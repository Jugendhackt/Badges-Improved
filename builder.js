'use strict';

module.exports.handler = async event => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/html"
        },
        body: "<!DOCTYPE html><html><head><meta charset='utf-8'></head><body><h1>Builder - WIP</h1></body></html>"
    }
};
