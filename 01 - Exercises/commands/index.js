const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print, args) {
    print(process.cwd())
}

function date(print, args) {
    print(Date())
}

function echo(print, args) {
    print(args);
}

function ls(print, args) {
    fs.readdir(".", (error, files) => {
        if (files) print(files.join(" "))
        else throw error
    })
}

function cat(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw new Error(error);
        print(data);
    })
}

function head(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw new Error(error);
        const firstLine = data.split("\n")[0]
        print(firstLine);
    })
}

function tail(print, args) {
    fs.readFile(args, "utf-8", (error, data) => {
        if (error) throw new Error(error);
        const lasLine = data.split("\n").pop().trim();
        print(lastLine);
    })
}


function curl(print, args) {
    utils.request(args, (error, respone) => {
        if (error) throw new Error(error);
        print(response)
    })
}

module.exports = {};
