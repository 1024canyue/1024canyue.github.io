document.getElementById("QR").setAttribute("src", "../404/QR.png");
let percent = document.getElementById("percent");
let percentList = [0, 10, 14, 17, 23, 28, 31, 37, 46, 51, 57, 63, 68, 74, 80, 86, 92, 93, 94, 95, 96, 97, 98, 99];
percentList.forEach(function (item, index) {
    setTimeout(function () {
        percent.innerText = item + "% 完成"
    }, index * 1000)
})