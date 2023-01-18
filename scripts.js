
window.onload = function() {
const box= document.querySelector('#bigbox');
const byby=16;
let divs = [];
// for (let i = 0; i < byby*byby; i++) {
//   const div = document.createElement("div");
//   if(i%2==0){
//     div.classList.add("white");
//   }
//   else{
//     div.classList.add("black");
//   }
  
//   divs.push(div);
//   // do something with the div element
// }

function divmaker (a,b){
  var divList = [];
  for (let i = 0; i < a*b; i++) {
    const div = document.createElement("div");
     if(i%2==0){
     div.classList.add("white");
               }
   else{
    div.classList.add("black");
       }
  
   divList.push(div);
  // do something with the div element
  }
  return divList;
}
divs=divmaker(16,16);
box.append(...divs);
colorer(divs);
// divs.forEach(div=>{
//   div.addEventListener("mouseover",function(){
//     div.style.backgroundColor = "red";
//   })
  // div.addEventListener("mouseout",function(){
  //   div.style.backgroundColor = "";
  // })
// })
let coler= "red";
let rainbow=false;
const rainBowOn=document.querySelector("#rainbow");
rainBowOn.addEventListener("click",function(){
  rainbow=true;
})
const colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener('change', function(){
  coler= this.value;
  console.log(this.value);
  rainbow=false;
});
const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function colorer(divs){
  divs.forEach(div=>{
    div.addEventListener("mouseover",function(){
      if(rainbow){
        div.style.backgroundColor = randomColor();
      }
      else{
      div.style.backgroundColor = coler;
       }
    });
  });
}

const reset= document.querySelector(".reset");
reset.addEventListener("click",function(){
  divs.forEach(div=>{
    div.style.backgroundColor = "";
  })
})
const s32=document.querySelector("#s32");
s32.addEventListener("click",function(){
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  console.log("im here"),
  setGridSize(32, 32);
  divs=divmaker(32,32);
  box.append(...divs);
  colorer(divs);

})
const s64=document.querySelector("#s64");
s64.addEventListener("click",function(){
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  console.log("im here"),
  setGridSize(64, 64);
  divs=divmaker(64,64);
  box.append(...divs);
  colorer(divs);

})
const s16=document.querySelector("#s16");
s16.addEventListener("click",function(){
  while (box.firstChild) {
    box.removeChild(box.firstChild);
  }
  console.log("im here"),
  setGridSize(16, 16);
  divs=divmaker(16,16);
  box.append(...divs);
  colorer(divs);

})
function setGridSize(columns, rows) {
  box.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  box.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}

// function play(){
//  divs=divmaker(16,16);
//  box.append(...divs);
// console.log("ffd");
// }
// play()
}