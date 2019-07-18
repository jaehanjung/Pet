var m = document.querySelector("main"),
    h = document.querySelector("header"),
    hHeight;

// h.offsetHeight 는 header 의 높이값을 가져옴.
function setTopPadding() {
    hHeight = h.offsetHeight;
    m.style.paddingTop = hHeight + "px";
}

function onScroll() {
    window.addEventListener("scroll", callbackFunc);

    function callbackFunc() {
        var y = window.pageYOffset;
        if (y > 150) {
            h.classList.add("scroll");
        } else {
            h.classList.remove("scroll");
        }
    }
}
window.onload = function () {
    setTopPadding();
    onScroll();
};

window.onresize = function () {
    setTopPadding();
};