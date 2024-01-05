
const mainImg=document.getElementById('main-img')
const sImgs=document.getElementsByClassName('small-img')

try{
    for(let i=0;1<sImgs.length;i++){
        sImgs[i].onclick=()=>{
            mainImg.src=sImgs[i].src
            sImgs[position].classList.remove('img-slider-active')
            sImgs[i].classList.add('img-slider-active')
            position=i
        }
    }
}catch(error){
    // 
}
const left =document.getElementById('left')
const right = document.getElementById('right')
let position=0
try{
    
    right.onclick=()=>{
        if (position +1 <sImgs.length){
            mainImg.src=sImgs[position+1].src
            sImgs[position+1].classList.add('img-slider-active')
            sImgs[position].classList.remove('img-slider-active')
            position++
          
        }else{
            mainImg.src=sImgs[0].src
            sImgs[0].classList.add('img-slider-active')
            sImgs[sImgs.length-1].classList.remove('img-slider-active')
            position=0
        }
    }
    left.onclick=()=>{
        if (position -1 >= 0){
            mainImg.src=sImgs[position-1].src
            sImgs[position-1].classList.add('img-slider-active')
            sImgs[position].classList.remove('img-slider-active')
            position--
        }else{
            mainImg.src=sImgs[sImgs.length -1].src
           
            sImgs[sImgs.length-1].classList.add('img-slider-active')
            sImgs[0].classList.remove('img-slider-active')
            position=sImgs.length -1
        }
    }
}catch{
    // 
}



const readMoreBtn=document.getElementById('read-more-btn')
function readMore(){
    const hiddenText=document.getElementById('hidden-text')
    const readMoreIcon=document.getElementById('read-more-icon')
    const readLessIcon=document.getElementById('read-less-icon')
    const readMoreText=document.getElementById('read-more-text')

    hiddenText.classList.toggle('hidden-text')
    
    if (readMoreText.textContent!="Read less"){
        readMoreText.textContent="Read less"
        readLessIcon.style.display="inline-block"
        readMoreIcon.style.display="none"
    }else{
        readMoreText.textContent="Read more"
        readLessIcon.style.display="none"
        readMoreIcon.style.display="inline-block"
    }
}
readMoreBtn.onclick=readMore

const notification1 = document.getElementsByClassName('notifications-div-1')[0]
const notification2 = document.getElementsByClassName('notifications-div-2')[0]

function notificationsSwitch(){
    notification1.classList.toggle('notifications-div-1-none')
    notification2.classList.toggle('notifications-div-2-flex')
}
const interval = setInterval(notificationsSwitch,10000)

const redHover=document.getElementsByClassName('red-hover')

try{
    for(let i=0;1<redHover.length;i++){
        redHover[i].onmouseover=()=>{
            redHover[i].classList.add("under-nav-section-item-red")
        }
        redHover[i].onmouseleave=()=>{
            redHover[i].classList.remove("under-nav-section-item-red")
        }
    }
}catch{
    // 
}

const allCategoriesDiv=document.getElementById('all-categories-div')
const allCategoriesDropdown=document.getElementById('all-categories-dropdown')
try{
    allCategoriesDiv.onclick=()=>{
        allCategoriesDropdown.classList.toggle('all-categories-visible')
        allCategoriesDiv.classList.toggle('rotate-on-focus')
    }
   
    document.querySelector('html').onclick = function(e) {
        if(e.target ==allCategoriesDropdown || e.target ==allCategoriesDiv) {
           
            // 

        } else {
            allCategoriesDiv.classList.remove('rotate-on-focus')
            allCategoriesDropdown.classList.remove('all-categories-visible')
            const allCategoriesDropdownItems = document.getElementsByClassName('all-categories-dropdown-item')
            
            for(let i = 0; i<allCategoriesDropdownItems.length;i++){
                allCategoriesDropdownItems[i].onclick=()=>{
                    allCategoriesDiv.firstChild.textContent=allCategoriesDropdownItems[i].textContent
                }
            }
         
        }
      }
}catch{
    // 
}
const searchBtn=document.getElementById('search-btn')
const search=document.getElementById('search')
const searchSpan=document.getElementById('search-span')

const leftNav=document.getElementById("left-nav")
const rightNav=document.getElementById('right-nav')
const nav=document.getElementById('nav')
const bgGray=document.getElementById('bg-gray')
const closeBtn=document.getElementById('close-btn')

const bgWhite=document.getElementById('bg-white')
try{
    searchBtn.onclick=()=>{
        search.style.display="inline-block"
        searchSpan.style.display="none"
        rightNav.style.display="none"
        nav.classList.add('hidden-nav')
   
        bgGray.style.display="block"
        leftNav.classList.add('left-nav-search')
        closeBtn.style.display="block"
        bgWhite.classList.add("bg-white")
    }
    closeBtn.onclick=()=>{
        search.style.display="none"
        searchSpan.style.display="inline-block"
        rightNav.style.display="flex"
        nav.classList.remove("hidden-nav")
  
        bgGray.style.display="none"
        leftNav.classList.remove("left-nav-search")
        closeBtn.style.display="none"
        bgWhite.classList.remove('bg-white')
    }
}catch{
    // 
}