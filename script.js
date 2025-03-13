// Sidebar Toggle
document.querySelector('.menu-toggler').addEventListener('click', function() {
  document.querySelector('.side-bar').classList.toggle('active');
});

// Page Navigation
document.querySelectorAll('.nav li a').forEach(navLink => {
  navLink.addEventListener('click', function() {
    const itemLinkText = this.textContent.toLowerCase();

    document.querySelectorAll('.page').forEach(page => {
      page.classList.toggle('active', page.classList.contains(itemLinkText));
    });

    document.querySelectorAll('.nav li a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Portfolio Filtering
document.querySelectorAll(".filter-item").forEach(filterItem => {
  filterItem.addEventListener("click", function() {
    document.querySelector(".filter-item.active")?.classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    document.querySelectorAll(".portfolio-item").forEach(portfolioItem => {
      portfolioItem.style.display = (filterValue === "all" || portfolioItem.getAttribute("data-category") === filterValue) 
        ? "block" 
        : "none";
    });
  });
});