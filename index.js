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

let dangKis=document.querySelectorAll(".noiDungBuocDKs")
let chons=document.querySelectorAll(".buocDangKis li")
// for(let c of chons)
//   c.onclick=function(){
//     for (let index = 0; index < chons.length; index++) {
//       if (this == chons[index]) {
//         // hinhNhan.style=this.style; 
//         // hinhNhan.style.display = `block`;
//         dangKis[index].style.display = 'block'
//       }
//     }
//   }

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