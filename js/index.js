$(function() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:{
          delay:5000,
        },
  
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
        effect:'fade',
        fadeEffect: {
          crossFade: true,
        },
        
        
      })
      
    // 弹出侧边导航
    var x_ = false;
    
    function leftSlide() {
      console.log(123)
      var currentWidth = $(document).width();
      var computedWidth = currentWidth * 0.2;
      if (!x_) {
        $(".left-slide").animate({"left":0},500);
        $(".popIMG").hide();
        $('.cha').show();
        x_ = true;
      }else {
        $(".left-slide").animate({"left":-computedWidth},500)
        $(".cha").hide();
        $('.popIMG').show();        
        x_ = false;
      }
    }

    function throttle(func,delay){
      var prev = Date.now();
      return function(){
          var context = this;
          var args = arguments;
          var now = Date.now();
          if(now-prev>=delay){
              func.apply(context,args);
              prev = Date.now();
          }
      }
    }

    $(".close").click(throttle(leftSlide,500))

    var currentHeight = $(document).height();
    $('#index').height(currentHeight);
    
    //下划线从0滑到100
    $(".left-slide a").hover(function () {
      var currHoverWidth = $(this).width(); 
      console.log(currHoverWidth)
      // $('.left-slide a::after').attr({display:"block",content:'',position:"absolute",bottom:0,left:0,width:0})
      //                         .animate({"width":currHoverWidth},1000)
      $(this).addClass("showP");
      $(".showP .hiddenP").show().animate({"width":currHoverWidth},700,"swing")
      

    },function () {
      $(".showP .hiddenP").show().animate({"width":0},700,"swing")
      $(this).removeClass("showP");
    })

    //显示二维码
    $(".share>div").hover(function() {
      $(this).find(".QR").fadeIn()
    },function () {
      $(this).find(".QR").fadeOut()
    })
    
})