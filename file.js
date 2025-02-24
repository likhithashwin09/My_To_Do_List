// console.log("hello")

// let btn =document.querySelector("#primary-btn");
// let labeel=document.querySelector("#val");
// console.log(btn);
// let count=0;
// btn.addEventListener("click",(event)=>{
//     count++;
//     // console.log(count);
//     labeel.innerHTML=count;
//     console.log(event)
// }
// )


// let objj={}

// let l="zxcvbnm"
// l=l.split("");
// l=l.reverse().join("");
// console.log(l)


// let getobj=(name ,city)=>{
// return{
//     name,
//     city
// }
// }

// console.log(getobj("likhith","Bangalore"))


let btn=document.querySelector(".btnn");
console.log(btn);

btn.addEventListener("click",(event)=>{
    console.log(event.target.value)
})


let btn1=document.createElement("button");
btn1.innerText="F";
btn1.value="F"
btn.append(btn1)

































