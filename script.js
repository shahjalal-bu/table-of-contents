var menuHead = document.querySelectorAll(".menu-head");
var menuHeadIcon = document.querySelectorAll(".menu-head i");
var itemContainer = document.querySelectorAll(".item-container");

menuHead.forEach((item, index) => {
  item.addEventListener("click", event => {
    if (itemContainer[index].classList.contains("hide") == true) {
      itemContainer.forEach(item => {
        item.classList.add("hide");
      });
      itemContainer[index].classList.remove("hide");
      menuHeadIcon[index].classList.remove("bi-caret-down")
      menuHeadIcon[index].classList.add("bi-caret-up")
      
    } else {
      itemContainer.forEach(item => {
        item.classList.add("hide");
        menuHeadIcon[index].classList.remove("bi-caret-up")
        menuHeadIcon[index].classList.add("bi-caret-down")
      });
    }
  });
});



var beginerBtn = document.querySelectorAll(".beginer-btn");
var beginerSection = document.querySelectorAll("#beginer .section");

beginerBtn.forEach((item, index) => {
  item.addEventListener("click", function (e) {
    beginerSection.forEach(item => {
      item.classList.add("hide");
    });
    beginerSection[index].classList.remove("hide");
    beginerBtn.forEach(item => item.classList.remove("menu-item-active"));
    item.classList.add("menu-item-active");
  });
});
