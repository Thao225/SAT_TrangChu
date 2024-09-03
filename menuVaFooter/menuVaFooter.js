window.onscroll = function() {
    //---------- HIỆU ỨNG CHO THANH MENU KHI TRƯỢT TRANG -----------------------------------------------------------//
    const menu = document.querySelector("#menu");
    const scrollY = window.scrollY; //số pixel đã được cuộn dọc theo trục Y
    console.log(scrollY);
    if (scrollY > 0) {
            menu.style.opacity = 0.85
        } 
        else {
            menu.style.opacity = 1
        }
    // Menu with 768
        let btn=document.querySelector("#menuRutGon>i")
        let thanhMenu = document.querySelector("nav.mucLucs")
        btn.onclick = function () {
            thanhMenu.style.display="block"
        }
        let closemenu = document.getElementById("closeMenu")
        closemenu.onclick = function () {
            thanhMenu.style.display="none"
        }

}


