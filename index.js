'use strict';

const body = document.querySelector("body");
const colorCode = document.querySelector(".color-code");
const clickMe = document.querySelector(".click-me");
const simple = document.getElementById("simple");
const hex = document.getElementById("hex");
const rgb = document.getElementById("rgb");
let flipType = "simple";

simple.addEventListener("click", () => flipType = "simple");
hex.addEventListener("click", () => flipType = "hex");
rgb.addEventListener("click", () => flipType = "rgb");

function simpleCodeGenerator() {
    const colorPalate = ["red", "blue", "green", "orange", "violet", "indigo", "yellow"];
    let simpleC = colorPalate[Math.floor(Math.random() * colorPalate.length)]
    return simpleC;
}

function hexCodeGenerator() {
    const hexDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f"];
    const hexDigitLen = hexDigits.length;
    let finalHex = "";
    for (let i = 0; i < 6; i++){
        finalHex += hexDigits[Math.floor(Math.random() * hexDigitLen)];
    }
    return finalHex;
}

function rgbCodeGenerator() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let finalRGB = r + "," + g + "," + b;
    
    return finalRGB;
}

clickMe.addEventListener("click", function () {
    let hexCode = hexCodeGenerator();
    let simpleCode = simpleCodeGenerator();
    let rgbCode = rgbCodeGenerator();

    if (flipType === "simple") {
        body.style.backgroundColor = simpleCode;
        colorCode.textContent = simpleCode;
    } else if (flipType === "hex") {
        body.style.backgroundColor = "#" + hexCode;
        colorCode.textContent = "#" + hexCode;
    } else {
        body.style.backgroundColor = `rgb(${rgbCode})`;
        colorCode.textContent = `RGB(${rgbCode})`;
    }
})

