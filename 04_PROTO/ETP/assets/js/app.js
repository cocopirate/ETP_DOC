$(document).ready(function(){
  // 账号密码登录与手机动态登录切换
  $(".tabs-item").click(function () {
    $(this).addClass("tabs-active").siblings().removeClass("tabs-active");
    $(".login-panel .tabs-panel").eq($(this).index()).show().siblings(".tabs-panel").hide();
    $(".hot-line").css("left",$(this).index() * 145 + "px");
  })
  // 常规登录与扫码登录切换
  $(".btn-toggle").click(function () {
    $(".normal-login").is(":hidden") ? $(this).css("background-image","url(assets/images/half_qrcode.svg)") : $(this).css("background-image","url(assets/images/half_compute.svg)")
    $(".scan-tips, .normal-login, .scan-login").toggle()
  })
  // 支持checkbox文字选中
  $(".checkbox-text").click(function () {
    var checkbox = $(this).prev("input");
    checkbox.prop('checked') ? checkbox.removeAttr('checked') : checkbox.prop('checked', true)
  })
  // 切换密码登录
  $(".toggle-pwd").click(function () {
    $(".tabs-item").first().addClass("tabs-active").siblings().removeClass("tabs-active");
    $(".login-panel .tabs-panel").eq(0).show().siblings(".tabs-panel").hide();
    $(".hot-line").css("left","0px");
    $(".scan-tips, .normal-login, .scan-login").toggle()
  })
});