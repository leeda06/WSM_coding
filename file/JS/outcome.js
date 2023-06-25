const like_divs = ['one', 'two', 'three'];
let likeIndex = 0
const bad_divs = ['perfume_bad', 'explanation']
let badIndex = 0


const mobile_divs = ['like-part', 'bad-part']
let mobileIndex = 0


$(document).ready(function () {
    $("#like>.triangle-button>.tab").click(function () {
        const activeDiv = document.getElementById(like_divs[likeIndex]);
        activeDiv.style.display = 'none';

        likeIndex = (likeIndex + 1) % like_divs.length;

        const nextDiv = document.getElementById(like_divs[likeIndex]);
        nextDiv.style.display = 'flex';
    });


    $("#bad>.triangle-button>.tab").click(function () {
        const activeDiv = document.getElementById(bad_divs[badIndex]);
        activeDiv.style.display = 'none';

        badIndex = (badIndex + 1) % bad_divs.length;

        const nextDiv = document.getElementById(bad_divs[badIndex]);
        nextDiv.style.display = 'flex';
    });



    $(".triangle-button>.mobile").click(function () {
        const activeDiv = document.getElementById(mobile_divs[mobileIndex]);
        activeDiv.style.display = 'none';

        mobileIndex = (mobileIndex + 1) % mobile_divs.length;

        const nextDiv = document.getElementById(mobile_divs[mobileIndex]);
        nextDiv.style.display = 'flex';

        if (nextDiv.id === 'like-part') {
            one.style.display = 'flex';
            bad.style.display = 'none';
        } else if (nextDiv.id === 'bad-part') {
            bad.style.display = 'flex';
            one.style.display = 'none';
        }
    });
});
let hasRefreshed = false;
window.addEventListener('resize', function () {
    if (!hasRefreshed && window.innerWidth > 720) {
        location.reload();
        hasRefreshed = true;
    } else if (window.innerWidth === 720) {
        location.reload();
        hasRefreshed = false;
    } else if (window.innerWidth === 540) {
        location.reload();
        hasRefreshed = false;
    }
});