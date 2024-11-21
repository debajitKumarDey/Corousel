let slides = document.querySelectorAll('.slider');
let count = 0;
slides.forEach(
    (slider,index)=>{
        slider.style.left =`${index*100}%`
})
const slideImage =()=>{
    count = (count + 1) % slides.length; 
    slides.forEach((slider)=>{
        slider.style.transform = `translateX(-${count*100}%)` 
    })
};
setInterval(slideImage,1500)