// sidebar toggle variables
const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

// page navigation variables
const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');


// variables for filtering
const filterBtn = document.querySelectorAll('.filter-item');
const itemCategory = document.querySelectorAll('.item-category');

// toggling sidebar in mobile
menuToggler.addEventListener('click', function(){
  sideBar.classList.toggle('active');
});


// page navigation functionality

for (let i = 0; i < navItemLinks.length; i++) {
  // added onclick event in nav links
  navItemLinks[i].addEventListener('click', function(){

    // collected nav links innertext
    const itemLinkText = this.textContent.toLowerCase();

    // defined page and add active class 
    for (let i = 0; i < pages.length; i++) {

      // defining page condition
      if (pages[i].classList.contains(itemLinkText)) {
        // add active class on current page
        pages[i].classList.add('active');
        // add active class on clicked nav link
        navItemLinks[i].classList.add('active');
      } else {
        // remove active class from other pages
        pages[i].classList.remove('active');
        // remove active class from other nav links
        navItemLinks[i].classList.remove('active');
      }

    }

  });
}









document.addEventListener("DOMContentLoaded", function () {
  const filterItems = document.querySelectorAll(".filter-item");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterItems.forEach(item => {
    item.addEventListener("click", function () {
      // Remove active class from all buttons
      filterItems.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      portfolioItems.forEach(portfolioItem => {
        if (filter === "all" || portfolioItem.getAttribute("data-category") === filter) {
          portfolioItem.style.display = "block";
        } else {
          portfolioItem.style.display = "none";
        }
      });
    });
  });
});



const filterItems = document.querySelectorAll(".filter-item");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterItems.forEach(item => {
  item.addEventListener("click", function () {
    document.querySelector(".filter-item.active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    portfolioItems.forEach(portfolioItem => {
      if (filterValue === "all" || portfolioItem.getAttribute("data-category") === filterValue) {
        portfolioItem.style.display = "block";
      } else {
        portfolioItem.style.display = "none";
      }
    });
  });
});