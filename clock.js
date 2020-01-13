// window.onload = function() {

//   const hourHand = document.querySelector('.hourHand');
//       const minuteHand = document.querySelector('.minuteHand');
//       const secondHand = document.querySelector('.secondHand');
//       const time = document.querySelector('.time');
//       const clock = document.querySelector('.clock');
//       const audio = document.querySelector('.audio');
  
//       function setDate(){
//           const today = new Date();
          
//           const second = today.getSeconds();
//           const secondDeg = ((second / 60) * 360) + 360; 
//           secondHand.style.transform = `rotate(${secondDeg}deg)`;
        
//         //   audio.play();
          
//           const minute = today.getMinutes();
//           const minuteDeg = ((minute / 60) * 360); 
//           minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  
//           const hour = today.getHours();
//           const hourDeg = ((hour / 12 ) * 360 ); 
//           hourHand.style.transform = `rotate(${hourDeg}deg)`;
          
//           time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>';
  
//           }
    
//       setInterval(setDate, 1000);
   
//   }

function updateTime() {
  const date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (h < 10){
    h = "0" + h;
  }
  document.getElementById("banner-clock").innerHTML = h + ":" + m + ":" + s;
}
updateTime();
setInterval(function () {
  updateTime();
}, 1000)