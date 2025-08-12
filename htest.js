document.addEventListener('DOMContentLoaded',()=>{
    // Parallax effect for hero
$(document).on('mousemove', function(e) {
  let moveX = (e.pageX / $(window).width() - 0.5) * 20;
  let moveY = (e.pageY / $(window).height() - 0.5) * 20;
  $('.hero').css('background-position', `${50 + moveX}% ${50 + moveY}%`);
});

/* Menu button styling*/

let isMenuVisible = false;
 $("main, footer").on("click",()=>{
     
     if(isMenuVisible){
  $("nav").slideUp(500)
  $(".menu-btn").trigger("click")
  
  isMenuVisible = false;
  }
 })
 $(".menu-btn").on("click",()=>{
   
 if(isMenuVisible){
   $("nav").slideUp(500)
   $("article, footer").css("opacity", "1")
   $("article, footer").css("transition", ".5s")
 
   isMenuVisible = false;
 }
 else{
   $("nav").slideDown(500)
   $("article, footer").css("opacity", "0.3")
   $("article, footer").css("transition", ".5s")
   isMenuVisible = true;
 }
 })  
 
 
 // Get the menu button element
    
const menuBtn = document.getElementById('menu-btn');

// Add an event listener to the menu button
menuBtn.addEventListener('click', () => {
  // Toggle the 'clicked' class on the menu button
  menuBtn.classList.toggle('clicked');
});
/* Menu button styling end..*/

})