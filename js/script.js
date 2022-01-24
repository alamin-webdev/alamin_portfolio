// aos Animation --------->
  


// nav box shadow 
$(window).scroll(function(){
   //  console.log($(this).scrollTop())
    if ($(this).scrollTop() > 100) {
       $('header nav').addClass('nav_box_shadow');
    } else {
       $('header nav').removeClass('nav_box_shadow');
    }
});

// progress bar 
$(document).ready(function(){
   $('#bar1').barfiller();
   $('#bar2').barfiller();
   $('#bar3').barfiller();
   $('#bar4').barfiller();
   $('#bar5').barfiller();
   $('#bar6').barfiller();
   $('#bar7').barfiller();
   $('#bar8').barfiller();
   $('#bar9').barfiller();
   $('#bar10').barfiller();
});



// tab script 
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
console.log(tabs);
console.log(tabContents);
tabs.forEach(tab=>{
   tab.addEventListener('click', ()=>{
      const target  = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent =>{
         tabContent.classList.remove("show")
         
      })
      target.classList.add("show")
      tabs.forEach(tab =>{
         tab.classList.remove("active")
         
      })
      tab.classList.add("active")
})
})


 

// responsive menu bar 
$('.bar_icon').on('click', function(){
   $('.navbar').toggleClass('nav_show')

})
$('.navbar .nav_item').on("click", function(){
   $('.navbar').removeClass('nav_show')

 });



// carousel
// $(document).ready(function(){
//    $(".owl-carousel").owlCarousel();
//  });
//  $('.nonloop').owlCarousel({
//    center: true,
//    items:2,
//    loop:false,
//    margin:10,
//    responsive:{
//        600:{
//            items:4
//        }
//    }
// });


$('.slider').slick({
   dots: true,
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         // infinite: true,
         // dots: true
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
     },
     {
       breakpoint: 480,
       settings: {

         slidesToShow: 1,
         slidesToScroll: 1
       }
     }
     // You can unslick at a given breakpoint now by adding:
     // settings: "unslick"
     // instead of a settings object
   ]
 });
             
				