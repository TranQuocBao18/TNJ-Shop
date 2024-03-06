// -------------------- Thanh tìm kiếm --------------------

const search_text = document.getElementById('search-bar');
const search_icon = document.getElementById('search-icon');

search_text.addEventListener('keypress', function (e) {
    if(e.charCode == 13) {
        send();
    }
});

search_icon.onclick = function () {
    send();      
}

function send() {
    if(search_text.value.length == 0) {
        return false;
    }
    return true;
}
