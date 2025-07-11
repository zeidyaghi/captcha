// Code By Webdevtrick ( https://webdevtrick.com )
var cd;
var IsAllowed = false;
$(document).ready(function() {
    CreateCaptcha();
});

// Create Captcha
function CreateCaptcha() {
  //$('#InvalidCapthcaError').hide();
  var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
                    
  var i;
  for (i = 0; i < 6; i++) {
    var a = alpha[Math.floor(Math.random() * alpha.length)];
    var b = alpha[Math.floor(Math.random() * alpha.length)];
    var c = alpha[Math.floor(Math.random() * alpha.length)];
    var d = alpha[Math.floor(Math.random() * alpha.length)];
    var e = alpha[Math.floor(Math.random() * alpha.length)];
    var f = alpha[Math.floor(Math.random() * alpha.length)];
  }
  cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
  $('#CaptchaImageCode').empty().append('<canvas id="CapCode" class="capcode" width="300" height="80"></canvas>')
  
  var c = document.getElementById("CapCode"),
      ctx=c.getContext("2d"),
      x = c.width / 2,
      img = new Image();

  img.src = "blueBg.jpg";
  //img.src = "redBg.jpg";
  img.onload = function () {
      var pattern = ctx.createPattern(img, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.font="46px Roboto Slab";
      ctx.fillStyle ='white';
      ctx.textAlign = 'center';
      ctx.setTransform (1, -0.12, 0, 1, 0, 15);
      ctx.fillText(cd,x,55);
  };
}

// Validate Captcha
function ValidateCaptcha() {
  var string1 = removeSpaces(cd);
  var string2 = removeSpaces($('#UserCaptchaCode').val());
  if (string1 == string2) {
    return true;
  }
  else {
    return false;
  }
}

// Remove Spaces
function removeSpaces(string) {
  return string.split(' ').join('');
}

// Check Captcha
function CheckCaptcha() {
  var result = ValidateCaptcha();
         $(".TFBtn").fadeToggle(5000);

  if( $("#UserCaptchaCode").val() == "" || $("#UserCaptchaCode").val() == null || $("#UserCaptchaCode").val() == "undefined") {
    
     

 $('#WrongCaptchaError').text('Please Enter Code Given Below In a Picture.').show();
       
     $(".ReloadBtn").css({"visibility" : "hidden"});

    $(".TFBtn").css({"visibility" : "visible"});
    $(".TFBtn").css({"background" : "url('https://webdevtrick.com/wp-content/uploads/xicon.svg')"});

    $('#UserCaptchaCode').focus();
  } else {
   
    if(result == false) { 
      IsAllowed = false;

     // تغيير خصائص( حقل ادخال رمز التحقق ) في حال الخطأ

      $(".CaptchaTxtField").css({"color" : "red"});
      $(".CaptchaTxtField").css({"border-color" : "red"});
      $(".CaptchaTxtField").css({"box-shadow" : "8px 8px 8px rgba(0, 0, 0, 0.3)"});
 
    $(".ReloadBtn").css({"background" : "url('Spinner-1.1s-114px.svg')"});

   $(".TFBtn").css({"background" : "url('https://webdevtrick.com/wp-content/uploads/xicon.svg')"});//اظهار صورة الخطأ
   $(".TFBtn").css({"cursor" : "default"});
      $('#WrongCaptchaError').text('Invalid Captcha! Please Try Again.').show();//text(): تابع اسناد نص

     // CreateCaptcha();
      $('#UserCaptchaCode').focus().select();
                     

    }
    else { 
      IsAllowed = true;
       
     // $('#UserCaptchaCode').val('').attr('place-holder','Enter Captcha ادخل رمز التحقق');//val():تابع قيمة,attr():تابع اسناد قيمة
         
      
     // CreateCaptcha();
       $(".TFBtn").fadeToggle(5000);// ظهور واخفاء م
      $('#WrongCaptchaError').fadeOut(100);//fadeOut():دالة الاختفاء المتلاشي
      $(".CaptchaTxtField").css({"color" : "rgb(0,128,0)"});
      $(".CaptchaTxtField").css({"font-weight":"bold"});
      $(".CaptchaTxtField").css({"border-color" : "#609D29"});
      $(".CaptchaTxtField").css({"box-shadow" : "8px 8px 8px rgba(0, 0, 0, 0.6)"});
      $(".TFBtn").css({"background" : "url('https://webdevtrick.com/wp-content/uploads/check-icon.svg')"});
      $(".TFBtn").css({"cursor" : "default"});
      $('#SuccessMessage').fadeToggle(500).css('display','block');//:حركةظهور متلاشيfadeIn(),css():css تابع التعامل مع
     // 
      $(".btnSubmit").css({"background-color" : "green"});
      $(".btnSubmit").fadeIn(500).css({"display" : "none"}).delay(1000).fadeOut(250);
            $(".btnSubmit").fadeIn(500).css({"display" : "block"}).delay(1000).fadeOut(250);
                   $(".captchaField").fadeToggle(10000);// ظهور واخفاء م

//$(".captchaField").fadeIn(500).css({"display" : "none"}).delay(1000).fadeOut(250);
                         // $(".captchaField").fadeIn(500).css({"display" : "block"}).delay(1000).fadeOut(250);

    }
  }  
}
