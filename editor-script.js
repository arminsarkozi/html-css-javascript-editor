/* Copyright (c) 2022 arminsarkozi (MIT License): https://raw.githubusercontent.com/arminsarkozi/html-css-javascript-editor/main/LICENSE */

$(document).ready(function() {
    $("#editor-A001Beta-html").text('<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta http-equiv="X-UA-Compatible" content="IE=edge">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Document</title>\n</head>\n<body>\n    \n</body>\n</html>');
    $("#editor-A001Beta-css").text('* {\n    box-sizing: border-box;\n}');

    const params = new URLSearchParams(window.location.search);
    if (params.has("code")) {
        $("#editor-A001Beta-html").text(params.get("html"));
        $("#editor-A001Beta-css").text(params.get("css"));
        $("#editor-A001Beta-javascript").text(params.get("javascript"));
        letcode();
    }

    $("#copyProjectLink-A001").click(function() {
        $("#copyProjectLink-A001").text("Copied!");
        setTimeout(originalCopyText, 1600);
    });

    $("#editor-A001Beta-html").keyup(function() {
        letcode();
    });
    $("#editor-A001Beta-css").keyup(function() {
        letcode();
    });
    $("#editor-A001Beta-javascript").keyup(function() {
        letcode();
    });
});

function letcode() {
    let html = document.getElementById("editor-A001Beta-html").value;
    let css = document.getElementById("editor-A001Beta-css").value;
    let javascript = document.getElementById("editor-A001Beta-javascript").value;
    let code = '<style>' + css + '</style>' + html + '<script>' + javascript + '</script>';
    $("#editor-result-embed-A001Beta").attr('srcdoc', code);
    
    $("#path-label-project-link").text("https://" + window.location.hostname + "?code&html=" + encodeURI(html) + "&css=" + encodeURI(css) + "&javascript=" + encodeURI(javascript));
}

function originalCopyText() {
    $("#copyProjectLink-A001").text("Copy project link");
}

function copyPath() {
    let url = document.getElementById("path-label-project-link");
    navigator.clipboard.writeText(url.innerText);
}