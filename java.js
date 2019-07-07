var images = ["img/11a.jpg","img/12a.jpg","img/13a.jpg","img/14a.jpg","img/15a.jpg","img/16a.jpg","img/17a.jpg","img/18a.jpg","img/20.jpg","img/21.jpg","img/22.jpg","img/23.jpg","img/24.jpg","img/25.jpg"]

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