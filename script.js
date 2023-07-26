// let btnEl=document.getElementById("search")
//  let inputEl=document.getElementById("input")
//  let Kural_num=inputEl.value
//  console.log(inputEl.value)
//   btnhEl.addEventListener("click",search,false)


// let arr=[];
// let itemsperpage=2;
// let currentPage=1;

// async function getKural(){
//     for(i=1;i<=4;i++){
        
//         let url=`https://api-thirukkural.vercel.app/api?num=${i}`
//         let res=await fetch(url)
//         let kural=await res.json()
//          arr.push(kural)
//         }
//        }


// async function shama(){
//     await getKural()
//   let lastIndex=itemsperpage*currentPage;
//    let firstIndex=lastIndex-itemsperpage;
//     let newArr=arr.slice(firstIndex,lastIndex)
//     newArr.map((kural)=>{
        
//                     let{chap_eng,chap_tam,chapgrp_eng,chapgrp_tam,eng,eng_exp,line1,line2,number,sect_eng,sect_tam,tam_exp}=kural
                    
//                      let divEl=document.createElement("div")
//                     divEl.classList.add("kural_tamil")
//                     divEl.innerHTML=`
//                     <h3>kural in tamil</h3>
//              <div>chap_tam:${chap_tam}</div>
//          <div>chapgrp_tam:${chapgrp_tam}</div>
//          <div>line1:${line1}</div>
//          <div>line2:${line2}</div>
//          <div>number:${number}</div>
//          <div>sect_tam:${sect_tam}</div>
//          <div>tam_exp:${tam_exp}</div>
//              `
//             main.append(divEl)
 
//     })

// }


// function pre(){
//     if(currentPage>1){
//         currentPage--;
//         shama()
//     }
// }
// // pre()


// let preEl=document.getElementById("pre")
//                      let nextEl=document.getElementById("next")
//                      preEl.addEventListener("click",()=>{
//                         document.getElementById("main").innerHTML=""
                     
//                         if(currentPage>1){
//                             currentPage--;
//                             shama()
//                         }
//                      })
//                      nextEl.addEventListener("click",()=>{
//                         document.getElementById("main").innerHTML="";
//                         let length=20
//                      console.log(length)
//                         if(currentPage<length/itemsperpage){
//                             currentPage++;
//                             shama()
//                         }
//                      })




// function showkural(arr){


//     lastIndex=itemsperpage*currentPage;
//     firstIndex=lastIndex-itemsperpage;
//     let newArr=arr.slice(firstIndex,lastIndex)
//     newArr.map((kural)=>{
//         console.log(newArr)
//                     let{chap_eng,chap_tam,chapgrp_eng,chapgrp_tam,eng,eng_exp,line1,line2,number,sect_eng,sect_tam,tam_exp}=kural
//                     let mainEl=document.getElementById("main")
//                      mainEl="";
//                      let preEl=document.getElementById("pre")
//                      let nextEl=document.getElementById("next")
//                      preEl.addEventListener("click",pre)
//                      nextEl.addEventListener("click",next)
//                     let divEl=document.createElement("div")
//                     divEl.classList.add("kural_tamil")
//                     divEl.innerHTML=`
//                     <h3>kural in tamil</h3>
//              <div>chap_tam:${chap_tam}</div>
//          <div>chapgrp_tam:${chapgrp_tam}</div>
//          <div>line1:${line1}</div>
//          <div>line2:${line2}</div>
//          <div>number:${number}</div>
//          <div>sect_tam:${sect_tam}</div>
//          <div>tam_exp:${tam_exp}</div>
//              `
//             main.append(divEl)
                    
//                 })
// }
// function pre(currentPage){
//     if(currentPage>1){
//         currentPage--;
//         showkural()
//     }
// }

// function next(currentPage){
//     let TotalPages=arr.length/itemsperpage
//     if(currentPage<TotalPages){
//         currentPage++;
//         showkural()
//     }
// }


let btnEl=document.getElementById("button")
 let inputEl=document.getElementById("input")
 
 
  btnEl.addEventListener("click",()=>{
    let Kural_num=inputEl.value;
    let url=`https://api-thirukkural.vercel.app/api?num=${Kural_num}`
    async function search(){
        let res=await fetch(url)
        let kural=await res.json()
        console.log(kural)

        let mainEl=document.getElementById("main")
        let{chap_eng,chap_tam,chapgrp_eng,chapgrp_tam,eng,eng_exp,line1,line2,number,sect_eng,sect_tam,tam_exp}=kural

        let divEl=document.createElement("div")
    divEl.classList.add("kural_tamil")
    divEl.innerHTML=`
    <h3>kural in tamil</h3>
    <div>chap_tam:${chap_tam}</div>
<div>chapgrp_tam:${chapgrp_tam}</div>
<div>line1:${line1}</div>
<div>line2:${line2}</div>
<div>number:${number}</div>
<div>sect_tam:${sect_tam}</div>
<div>tam_exp:${tam_exp}</div>
    `
    mainEl.append(divEl)

    let divElement=document.createElement("div")
    divElement.classList.add("kural_eng")
    divElement.innerHTML=`
    <h3>kural in english</h3>
    <div>chap_tam:${chap_eng}</div>
<div>chapgrp_tam:${chapgrp_eng}</div>
<div>eng:${eng}</div>
<div>eng_exp:${eng_exp}</div>
<div>number:${number}</div>
<div>sect_tam:${sect_eng}</div>

    `
    mainEl.append(divElement)

    }
    search()
  })


// let url=`https://api-thirukkural.vercel.app/api?num=${Kural_num}`
//  async function search(){
//  let res=await fetch(url)
//  let kural=await res.json()
//  console.log(kural)
//  showKural(kural)
 
//  search()

//  function showKural(kural){
// let mainEl=document.getElementById("main")
// //  main=""
//     let{chap_eng,chap_tam,chapgrp_eng,chapgrp_tam,eng,eng_exp,line1,line2,number,sect_eng,sect_tam,tam_exp}=kural
    
//     let divEl=document.createElement("div")
//     divEl.classList.add("kural_tamil")
//     divEl.innerHTML=`
//     <h3>kural in tamil</h3>
//     <div>chap_tam:${chap_tam}</div>
// <div>chapgrp_tam:${chapgrp_tam}</div>
// <div>line1:${line1}</div>
// <div>line2:${line2}</div>
// <div>number:${number}</div>
// <div>sect_tam:${sect_tam}</div>
// <div>tam_exp:${tam_exp}</div>
//     `
//     mainEl.append(divEl)

//     let divElement=document.createElement("div")
//     divElement.classList.add("kural_eng")
//     divElement.innerHTML=`
//     <h3>kural in english</h3>
//     <div>chap_tam:${chap_eng}</div>
// <div>chapgrp_tam:${chapgrp_eng}</div>
// <div>eng:${eng}</div>
// <div>eng_exp:${eng_exp}</div>
// <div>number:${number}</div>
// <div>sect_tam:${sect_eng}</div>

//     `
//     mainEl.append(divElement)
// }

