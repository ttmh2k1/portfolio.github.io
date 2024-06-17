document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navList = document.querySelector(".nav-list");
  const navItems = document.querySelectorAll(".nav-item");

  // Toggle menu visibility when menu button is clicked
  menuBtn.addEventListener("click", function () {
    navList.classList.toggle("show");
  });

  // Hide menu when a menu item is clicked
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navList.classList.remove("show");
    });
  });

  // Hide menu when clicking outside of it
  document.body.addEventListener("click", function (event) {
    if (!menuBtn.contains(event.target) && !navList.contains(event.target)) {
      navList.classList.remove("show");
    }
  });
});

function downloadFile() {
  var url = "./BusinessAnalyst-TranThiMyHuyen.pdf";
  var filename = "BusinessAnalyst-TranThiMyHuyen.pdf";
  var element = document.createElement("a");
  element.setAttribute("href", url);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function countVisits() {
  // Kiểm tra xem LocalStorage đã có key 'page_view' chưa
  if (localStorage.page_view) {
    // Nếu có, tăng giá trị lên 1
    localStorage.page_view = Number(localStorage.page_view) + 1;
  } else {
    // Nếu chưa có, khởi tạo giá trị là 1
    localStorage.page_view = 1;
  }
  // Hiển thị số lượt truy cập
  document.getElementById("visitCount").innerText =
    "Views: " + localStorage.page_view;
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backTop").style.display = "block";
  } else {
    document.getElementById("backTop").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
