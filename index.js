let description = document.getElementById("description");
let details = document.getElementById("details");
let des = document.getElementsByClassName("description");
let det = document.getElementsByClassName("details");
let input = document.querySelectorAll("input");
let label = document.querySelectorAll("label");
let wrapper = document.getElementsByClassName("wrapper");
let ele1 = document.getElementById("colo-1");
let ele2 = document.getElementById("colo-2");
let ele3 = document.getElementById("colo-3");
let ele4 = document.getElementById("colo-4");
let ele5 = document.getElementById("colo-5");
let chairimg = document.getElementsByClassName("chair-img");
let button = document.getElementsByClassName("button");

console.log(chairimg[0]);
description.addEventListener("click", function () {
  des[0].style.display = "block";
  description.classList.remove("hovereffect");
  details.classList.add("hovereffect");
  details.classList.add("opa");
  description.classList.remove("opa");
  det[0].style.display = "none";
  des[0].classList.add("animate");
});
details.addEventListener("click", function () {
  det[0].style.display = "flex";
  des[0].style.display = "none";
  description.classList.add("opa");
  details.classList.remove("opa");
  details.classList.remove("hovereffect");
  description.classList.add("hovereffect");
  det[0].classList.add("animate");
});

function show(clicked_id) {
  if (clicked_id == "colo-1") {
    ele1.classList.add("border");
    chairimg[0].src = "images/chair1.png";
    ele2.classList.remove("border");
    ele3.classList.remove("border");
    ele4.classList.remove("border");
    ele5.classList.remove("border");
    wrapper[0].style.backgroundImage =
      "linear-gradient(196deg, #f1a9a9, #e66767)";

    chairimg[0].classList.remove("shake-1");
    void chairimg[0].offsetWidth;
    chairimg[0].classList.add("shake-1");
    button[0].style.backgroundColor = "#944852";
    button[0].addEventListener("mouseover", function () {
      button[0].style.backgroundColor = "#333";
      button[0].classList.add("hover");
    });
    button[0].addEventListener("mouseout", function () {
      button[0].style.backgroundColor = "#944852";
      button[0].classList.remove("hover");
    });
  } else if (clicked_id == "colo-2") {
    ele2.classList.add("border");
    chairimg[0].src = "images/chair2.png";
    ele1.classList.remove("border");
    chairimg[0].classList.remove("shake-1");
    void chairimg[0].offsetWidth;
    chairimg[0].classList.add("shake-1");
    wrapper[0].style.backgroundImage =
      "linear-gradient(196deg, #4c4c4c, #262626)";
    ele3.classList.remove("border");
    ele4.classList.remove("border");
    ele5.classList.remove("border");
    button[0].style.backgroundColor = "#1a1a1a";
    button[0].addEventListener("mouseover", function () {
      button[0].style.backgroundColor = "#333";
      button[0].classList.add("hover");
    });
    button[0].addEventListener("mouseout", function () {
      button[0].style.backgroundColor = "#1a1a1a";
      button[0].classList.remove("hover");
    });
  } else if (clicked_id == "colo-3") {
    ele3.classList.add("border");
    chairimg[0].src = "images/chair3.png";
    ele1.classList.remove("border");
    ele2.classList.remove("border");
    chairimg[0].classList.remove("shake-1");
    void chairimg[0].offsetWidth;
    chairimg[0].classList.add("shake-1");
    wrapper[0].style.backgroundImage =
      "linear-gradient(196deg, #8a9fb2, #5f7991)";
    ele4.classList.remove("border");
    ele5.classList.remove("border");
    button[0].style.backgroundColor = "#40566e";
    button[0].addEventListener("mouseover", function () {
      button[0].style.backgroundColor = "#333";
      button[0].classList.add("hover");
    });
    button[0].addEventListener("mouseout", function () {
      button[0].style.backgroundColor = "#40566e";
      button[0].classList.remove("hover");
    });
  } else if (clicked_id == "colo-4") {
    ele4.classList.add("border");
    chairimg[0].src = "images/chair4.png";
    ele1.classList.remove("border");
    ele2.classList.remove("border");
    ele3.classList.remove("border");
    chairimg[0].classList.remove("shake-1");
    void chairimg[0].offsetWidth;
    chairimg[0].classList.add("shake-1");
    wrapper[0].style.backgroundImage =
      "linear-gradient(196deg, #97afc3, #6789a7)";
    ele5.classList.remove("border");
    button[0].style.backgroundColor = "#5e89b2";
    button[0].addEventListener("mouseover", function () {
      button[0].style.backgroundColor = "#333";
      button[0].classList.add("hover");
    });
    button[0].addEventListener("mouseout", function () {
      button[0].style.backgroundColor = "#5e89b2";
      button[0].classList.remove("hover");
    });
  } else if (clicked_id == "colo-5") {
    ele5.classList.add("border");
    chairimg[0].src = "images/chair5.png";
    ele1.classList.remove("border");
    ele2.classList.remove("border");
    ele3.classList.remove("border");
    ele4.classList.remove("border");
    chairimg[0].classList.remove("shake-1");
    void chairimg[0].offsetWidth;
    chairimg[0].classList.add("shake-1");
    wrapper[0].style.backgroundImage =
      "linear-gradient(196deg, #afa6a0, #8c7f76)";
    button[0].style.backgroundColor = "#8c7f76";
    button[0].addEventListener("mouseover", function () {
      button[0].style.backgroundColor = "#333";
      button[0].classList.add("hover");
    });
    button[0].addEventListener("mouseout", function () {
      button[0].style.backgroundColor = "#8c7f76";
      button[0].classList.remove("hover");
    });
  }
}
