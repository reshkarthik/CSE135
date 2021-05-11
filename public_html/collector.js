function checkCookies() {
    document.cookie = "cookietest=1";
    var ret = document.cookie.indexOf("cookietest=") != -1;
    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    return ret
}

function checkImage() {
    //credit https://www.tpgi.com/detecting-if-images-are-disabled-in-browsers/
    if ((document.getElementById('flag').offsetWidth == 1
        && document.getElementById('flag').readyState == 'complete')
        || (document.getElementById('flag').offsetWidth == 1
            && document.getElementById('flag').readyState == undefined)) {
        return true;
    }
    return false;
}

function checkCSS() {
    var getBody = document.getElementsByTagName("body")[0]
    var prop = window.getComputedStyle(getBody).getPropertyValue("background-color");

    if (prop === "rgba(0, 0, 0, 0)") {
        return false;
    }
    return true;
}

const startTime = window.performance.timing.navigationStart;
const endTime = new Date().getTime();
const loadTime = endTime - startTime;
const data = { "startTime": startTime, "endTime": endTime, "loadTime": loadTime };
window.addEventListener('load', (event) => {
    fetch('https://reshmakarthik.studio/api/static', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Accept-Cookies': checkCookies(),
            'X-Accept-Images': checkImage(),
            'X-Accept-CSS': checkCSS(),
            'X-Screen-Dim': JSON.stringify({ "width": screen.width, "height": screen.height }),
            'X-Window-Dim': JSON.stringify({ "width": window.outerWidth, "height": window.outerHeight }),
            'X-JS-Enabled': true
        }
    })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

    // fetch('https://reshmakarthik.studio/api/performance', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // })
    //     .then(response => response.json())
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
});