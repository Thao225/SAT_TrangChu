window.onload=function(){

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate_animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

let mouse=document.querySelectorAll("a")
mouse.onmouseenter=function () {
    this.style.cursor="pointer"
}

let dangKis=document.querySelectorAll(".noiDungBuocDKs")
let chons=document.querySelectorAll(".buocDangKis li")

function lapLai(){
  chons.forEach(li => {
    li.style.color = 'black';
  })
  dangKis[0].innerHTML=dangKis[count+1].innerHTML
  chons[count].style.color='#Da18DD'
  count++
  if (count === chons.length) {
        count=0
  }
}

let count = 0;
let timerId = setInterval(lapLai, 3000);

for (let i = 0; i < chons.length; i++){
  chons[i].onclick=function() {
    chons.forEach(li => {
      li.style.color = 'black';
    })
    dangKis[0].innerHTML=dangKis[i+1].innerHTML
    chons[i].style.color='#Da18DD'
    count = i
  }
}

let shortNames=document.querySelectorAll(".shortName")
let longNames=document.querySelectorAll(".longName")
let tenKhoas=document.querySelectorAll(".tenKhoa")
let Khoas=document.querySelectorAll(".khoas")
for (let i = 0; i < Khoas.length; i++){
  tenKhoas[i].innerHTML=shortNames[i].innerHTML
  Khoas[i].onmouseenter=function() {
    tenKhoas[i].innerHTML=longNames[i].innerHTML
  }
  Khoas[i].onmouseleave=function() {
    tenKhoas[i].innerHTML=shortNames[i].innerHTML
  }
}

let coSos=document.querySelectorAll(".gioiThieuKhoas")
let nutChuyens=document.querySelectorAll(".nutChuyen")
const gtKhoa=document.getElementById("gioiThieuKhoa")
// const nutTrai=document.getElementById("muiTenTrai")
// let nutPhai=document.getElementById("muiTenPhai")
for (let i = 0; i < nutChuyens.length; i++){
  nutChuyens[i].onclick=function() {
    if (i===0) {
      gtKhoa.style.marginLeft="0"
    }
    else if (i===1) {
      gtKhoa.style.marginLeft="-100.2%"
    }
    else {
      gtKhoa.style.marginLeft="-200.4%"
    }
  }
}


// Quy che
const phai=document.getElementById("muiChuyenPhai")
const trai=document.getElementById("muiChuyenTrai")
let chieuDaiQuyChes=document.getElementById("quyChes")
let chieuDaiQuyChe=document.getElementById("quyChe")
const cardQuyChe=document.querySelector(".cardQuyChe").offsetWidth
let cardQuyChes=document.querySelectorAll(".cardQuyChe")

trai.onmouseenter=function(){
  this.style.cursor="pointer"
}
phai.onmouseenter=function(){
  this.style.cursor="pointer"
}

function lapLaiQuyChe(){
  chieuDaiQuyChes.scrollLeft+=cardQuyChe
  // chieuDaiQuyChe.innerHTML=chieuDaiQuyChe.innerHTML+cardQuyChes[countQuyChe].outerHTML
  // let cardQuyChes=document.querySelectorAll("#quyChe>div")
  // cardQuyChes[cardQuyChes.length-1].style.display="none"
  // chieuDaiQuyChe.style.width+=cardQuyChe
  countQuyChe++
  if (countQuyChe>=6) {
    countQuyChe=0
    chieuDaiQuyChes.scrollLeft=0
  }
}
let countQuyChe = 0;
let timerIdQuyChe = setInterval(lapLaiQuyChe, 7000);
phai.onclick=function(){
    chieuDaiQuyChes.scrollLeft+=cardQuyChe
}
trai.onclick=function(){
    chieuDaiQuyChes.scrollLeft-=cardQuyChe
}


//Khám phá Trường
const phaiKP=document.querySelector(".chuyenKPTPhai>button")
const traiKP=document.querySelector(".chuyenKPTTrai>button")
let chieuDaiKPs=document.getElementById("khamPhas")
let chieuDaiKP=document.getElementById("khamPha")
const cardKhamPha=document.querySelector(".cardKhampha").offsetWidth
let cardKhamPhas=document.querySelectorAll(".cardKhampha")

traiKP.onmouseenter=function(){
  this.style.cursor="pointer"
}
phaiKP.onmouseenter=function(){
  this.style.cursor="pointer"
}

function lapLaiKhamPha(){
  chieuDaiKPs.scrollLeft+=cardKhamPha
  countKhamPha++
  if (countKhamPha>=9) {
    countKhamPha=0
    chieuDaiKPs.scrollLeft=0
  }
}
let countKhamPha = 0;
let timerIdKhamPha = setInterval(lapLaiKhamPha, 5000);
phaiKP.onclick=function(){
    chieuDaiKPs.scrollLeft+=cardKhamPha
}
traiKP.onclick=function(){
    chieuDaiKPs.scrollLeft-=cardKhamPha
}


// Xem thêm Khám phá Trường
let xemThems=document.querySelectorAll(".xemThemkhamPhas")
let ghiChuKPs=document.querySelectorAll(".ghiChuKP i")
for (let i = 0; i < ghiChuKPs.length; i++) {
  ghiChuKPs[i].onmouseenter=function(){
    this.style.cursor="pointer"
  }
  ghiChuKPs[i].onclick=function(){
    xemThems[i].style.display="flex"
    const tinhTrangXT=xemThems[i].querySelector(".tinhTrangXemThem")
    let hinhChinhs=xemThems[i].querySelector(".anhChinh>img")
    let hinhPhus =xemThems[i].querySelectorAll(".anhNhoKhamPhas img")
    tinhTrangXT.onclick=function(){
      xemThems[i].style.display="none"
    }
    for (let j = 0; j < hinhPhus.length; j++) {
      hinhPhus[j].onclick=function(){
        hinhChinhs.src=this.src
      }
    }
  }
}


}



  


// sau 5 giây thì dừng lại
// setTimeout(() => {
//   clearInterval(timerId);
// }, 5000);

// video
// var video = document.querySelector("video"),
// container = document.querySelector("#container");

// var setVideoDimensions = function() {
// var w = video.videoWidth;
// var videoRatio = (w / h).toFixed(2);

// var containerStyles = window.getComputedStyle(container),
//   minW = parseInt(containerStyles.getPropertyValue("width")),
//   minH = parseInt(containerStyles.getPropertyValue("height"));
// var widthRatio = minW / w,
//   heightRatio = minH / h;
// let newWidth = 0;
// let newHeight = 0;
// if (widthRatio > heightRatio) {
//   newWidth = minW;
//   newHeight = Math.ceil(newWidth / videoRatio);
// } else {
//   newHeight = minH;
//   newWidth = Math.ceil(newHeight * videoRatio);
// }

// video.style.width = newWidth + "px";
// video.style.height = newHeight + "px";
// };
// video.addEventListener("loadedmetadata", setVideoDimensions, false);
// window.addEventListener("resize", setVideoDimensions, false);