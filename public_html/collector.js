var sessID = "";
async function assignVal() {
    sessID = await postData();
}
assignVal();

function checkCookies() {
    document.cookie = "cookietest=1";
    var ret = document.cookie.indexOf("cookietest=") != -1;
    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    return ret
}

function checkImage() {
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

async function postData() {
    const response = await fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.text();
}


function Activity(firstTime = false, data = null) {
    if (firstTime) {
        fetch('https://reshmakarthik.studio/api/activity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json().then(data => {
                return data;
            }))
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    else {
        fetch('https://reshmakarthik.studio/api/activity/0', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}


const startTime = window.performance.timing.navigationStart;
var endTime; new Date().getTime();
var loadTime;
var data;
window.addEventListener('load', (event) => {
    // fetch('https://reshmakarthik.studio/api/static', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'X-Accept-Cookies': checkCookies(),
    //         'X-Accept-Images': checkImage(),
    //         'X-Accept-CSS': checkCSS(),
    //         'X-Screen-Dim': JSON.stringify({ "width": screen.width, "height": screen.height }),
    //         'X-Window-Dim': JSON.stringify({ "width": window.outerWidth, "height": window.outerHeight }),
    //         'X-JS-Enabled': true,
    //         'X-Session-ID': sessID
    //     }
    // })
    //     .then(response => response.json())
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    endTime = new Date().getTime();
    loadTime = endTime - startTime;
    data = { "startTime": startTime, "endTime": endTime, "loadTime": loadTime, 'sessID': sessID };
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
    Activity(true, { "sessID": sessID, "timeEntered": endTime, "page": window.location.pathname });
    // inactive();
});

function inactive() {
    var time = setInterval(timerIncrement, 1);
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function resetTimer() {
        if (time > 2000) {
            Activity(false, { 'inactive': time })
            console.log(time);
        }
        clearInterval(time);
        time = 0;
    }
    function timerIncrement() {
        time += 1;
    }
};

let scrollY = 0;
let scrollX = 0;

var timer = null;
window.addEventListener('scroll', function () {
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        scrollY = window.scrollY;
        scrollX = window.scrollX;
        Activity(false, { 'scrollVal': [scrollX, scrollY] });
    }, 150);
}, false);



window.addEventListener('mousemove', (event) => {
    const cursorX = event.pageX;
    const cursorY = event.pageY;

});

window.addEventListener('click', (event) => {
    const type = event.button;
    const cursorX = event.pageX;
    const cursorY = event.pageY;
    Activity(false, { 'click': [type, cursorX, cursorY] })
});

window.addEventListener('keydown', (event) => {
    const key = event.code;
    Activity(false, { 'keydown': key })
});