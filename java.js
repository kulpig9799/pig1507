
var images = ["img/Pig2.jpg","img/Pig3.jpg","img/Pig4.jpg","img/Pig5.jpg","img/Pig6.jpg","img/Pig7.jpg","img/Pig8.jpg","img/Pig9.jpg","img/Pig10.jpg","img/Pig11.jpg","img/Pig12.jpg","img/Pig13.jpg",
"img/Pig14.jpg","img/Pig15.jpg","img/Pig16.jpg","img/Pig17.jpg","img/Pig18.jpg","img/Pig19.jpg","img/Pig20.jpg","img/Pig21.jpg","img/Pig22.jpg","img/Pig23.jpg","img/Pig24.jpg","img/Pig25.jpg","img/Pig26.jpg",
"img/Pig27.jpg","img/Pig28.jpg","img/Pig29.jpg","img/Pig30.jpg","img/Pig31.jpg","img/Pig32.jpg","img/Pig33.jpg","img/Pig34.jpg","img/Pig35.jpg","img/Pig36.jpg","img/Pig37.jpg","img/Pig38.jpg","img/Pig39.jpg",
"img/Pig40.jpg","img/Pig41.jpg","img/Pig42.jpg","img/Pig43.jpg","img/Pig44.jpg","img/Pig45.jpg","img/Pig46.jpg","img/Pig47.jpg","img/Pig48.jpg","img/Pig49.jpg","img/Pig50.jpg","img/Pig51.jpg","img/Pig52.jpg","img/Pig53.jpg",
"img/Pig54.jpg","img/Pig55.jpg"]


for ( i = 0; i < images.length; i++ ){
  $(".slideshow-container").append(`
  <div class="mySlides fade">
  <img src="${images[i]}" style="width:100%;max-width:900px">
</div>
`)
}

//khai báo biến slideIndex đại diện cho slide hiện tại
var slideIndex;
// KHai bào hàm hiển thị slide
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }

    slides[slideIndex].style.display = "block";  
    // dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
      slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 3000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
  showSlides(slideIndex = n);
}