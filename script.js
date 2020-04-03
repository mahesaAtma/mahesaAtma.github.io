var i = 0;


$(".rightBtn").click(function(){
    if(i<3 && i > -3){
        var w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        i = i+1;
        console.log("Nilai : ", i);
        console.log("Width : ", w);
        if (i == -1) {
            imgKeduaRight();
            
        } else if (i == 0) {
            imgKetigaRight();
        } else if (i == 1) {
            imgKeempatRight();
        }else if(i == 2){
            imgKelimaRight();
        }

    }
});
$(".leftBtn").click(function () {
    if (i < 3 && i > -3) {
        if(i == -1){
            imgKeduaLeft();
        }else if(i == 0){
            imgKetigaLeft();
        }else if (i == 1) {
            imgKeempatLeft();
        }else if (i == 2) {
            imgKelimaLeft();
        }
        i = i - 1;
        console.log("Nilai : ", i);
    }
});

// ============================================================
// Right Button
function imgKelimaRight(){
    $(".carouselSection").css("left", "35%");
    $(".carouselSection .firstImage").css("width", "22%");
    $(".carouselSection .lastImage").css("width", "15%");
    $(".carouselSection .secondImage").css("width", "18%");
    $("#imgPertama").css("width", "9%");
    $("#imgKedua").css("width", "12%");
}

function imgKeempatRight(){
    $(".carouselSection").css("left", "43%");
    $(".carouselSection .secondImage").css("width", "22%");
    $(".carouselSection .lastImage").css("width", "18%");
    $("#imgKedua").css("width", "16%");
    $("#imgKelima").css("width", "18%");
}
function imgKetigaRight() {
    $(".carouselSection").css("left", "60%");
    $(".carouselSection .secondImage").css("width", "18%");
    $(".carouselSection .lastImage").css("width", "22%");
    $(".carouselSection .firstImage").css("width", "12%");
}
function imgKeduaRight() {
    $(".carouselSection").css("left", "70%");
    $(".carouselSection .secondImage").css("width", "22%");
    $(".carouselSection .lastImage").css("width", "18%");
    $("#imgKeempat").css("width", "16%");
    $("#imgPertama").css("width", "18%");
}

// Left Button
function imgKelimaLeft() {
    $(".carouselSection").css("left", "43%");
    $(".carouselSection .secondImage").css("width", "22%");
    $(".carouselSection .lastImage").css("width", "18%");
    $("#imgKedua").css("width", "16%");
    $("#imgKelima").css("width", "18%");
}

function imgKeempatLeft() {
    $(".carouselSection").css("left", "60%");
    $(".carouselSection .secondImage").css("width", "18%");
    $(".carouselSection .lastImage").css("width", "22%");
    $(".carouselSection .firstImage").css("width", "12%");
}
function imgKetigaLeft() {
    $(".carouselSection").css("left", "70%");
    $(".carouselSection .secondImage").css("width", "22%");
    $(".carouselSection .lastImage").css("width", "18%");
    $("#imgKeempat").css("width", "16%");
    $("#imgPertama").css("width", "18%");
}
function imgKeduaLeft() {
    $(".carouselSection").css("left", "85%");
    $(".carouselSection .firstImage").css("width", "22%");
    $(".carouselSection .lastImage").css("width", "15%");
    $(".carouselSection .secondImage").css("width", "18%");
    $("#imgKelima").css("width", "9%");
    $("#imgKeempat").css("width", "12%");
}
// =====================================================================

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log("Scroll : ",wScroll)

    if(wScroll>$(".aboutUs").offset().top - 250){
        $(".aboutUs").css("opacity", 1);
        $(".aboutUs").css("transform", "translateY(0px)");
    }
    if (wScroll > $(".activitySection").offset().top - 250) {
        $(".imgActivity").css("opacity", 1);
        $(".imgActivity").css("transform", "rotate(0deg)");
    }
})