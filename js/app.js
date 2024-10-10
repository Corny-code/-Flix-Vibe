$(document).ready(function(){
//Start Header

// Start Back To Top
    $('.btn-backtotops').hide();
    $(window).scroll(function(){
    var getscrolltops = $(this).scrollTop();

    if(getscrolltops >= 370){
        $('.btn-backtotops').fadeIn(1000);
    }else{
        $('.btn-backtotops').fadeOut(1000);
    }
});
// End Back To Top

//Start Nav Bar
  $(window).scroll(function(){

  let position = $(this).scrollTop();
 //   console.log(position);

    if(position >= 200){
        $('.navbar').addClass('navmenus');

    }else{
        $('.navbar').removeClass('navmenus');
    }
});

  $('.navbuttons').click(function(){
    $(this).toggleClass('crossxs');
});
//End Nav Bar

//Start Toggle Ball
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll("header,.navbar,.h3,.menuitems,.toggle,.movie-list-container,.title,.movie-list-title,.bannerheaders,.bannerheaders .display-3,.bannerparagraphs,.subscribes,.subscribes .display-4");

ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active");
  })
  ball.classList.toggle("active");
})
//End Toggle Ball
//End Header 

//Start Movie Section
let rightarrows = document.querySelectorAll(".rightarrow");
let leftarrows = document.querySelectorAll(".leftarrow");
let movielists = document.querySelectorAll(".movie-list");

rightarrows.forEach((rightarrow,i)=>{
  let itemNumber = movielists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  rightarrow.addEventListener("click",() => {
    const ratio = Math.floor(window.innerWidth / 350);
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
      // movielists[i].style.backgroundColor = "gray"
      movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
    } else{
      movielists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  // console.log(movielists[i].querySelectorAll("img").length);

  console.log(Math.floor(window.innerWidth/270));
});


leftarrows.forEach((leftarrow,i)=>{
  let itemNumber = movielists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  leftarrow.addEventListener("click",() => {
    const ratio = Math.floor(window.innerWidth / 350);
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4 - ratio) <= 0){
      // movielists[i].style.backgroundColor = "gray"
      movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value300}px)`;
    } else{
      movielists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  // console.log(movielists[i].querySelectorAll("img").length);

  console.log(Math.floor(window.innerWidth/270));
});


// Start Trendings menulists
      $('.menulists').click(function(){
         
        // $(this).addClass('activeitems');
        $(this).addClass('activeitems').siblings().removeClass('activeitems');

        let filtervalue = $(this).attr('data-filter');
            filtervalue = $(this).data('filter');
        // console.log(filtervalue);

        if(filtervalue === 'trendings'){
          $('.filters').show();
        }else{
          $('.filters').hide();
        }

      });

// End Trendings menulists
 
//End Movie Section

// Start Footer  Section 

const getyear = document.getElementById('getyear');
const getfullyear = new Date().getUTCFullYear();
    
getyear.textContent = getfullyear;

// End Footer Section 


});