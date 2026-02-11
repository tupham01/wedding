const buttons = document.querySelectorAll("#ctaBtn, #ctaBtn2");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Cảm ơn bạn đã đăng ký! 🚀");
  });
});
