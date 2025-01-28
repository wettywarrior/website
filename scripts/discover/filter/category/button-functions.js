// men
menFilter.addEventListener("click", function () {
  hideCatagoryPage()
  renderMenPage()
});

menClothing.addEventListener("click", function () {
  hideMenPage()
  renderMenClothingPage()
});

menTops.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenTopsPage()
});

menBottoms.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenBottomsPage()
});

menBottomsJeans.addEventListener("click", function () {
  hideMenBottomsPage()
  renderMenBottomsJeansPage()
});

menBottomsTrousers.addEventListener("click", function () {
  hideMenBottomsPage()
  renderMenBottomsTrousersPage()
});

menCoats.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenCoatsPage()
});

menJackets.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenJacketsPage()
});

menSuits.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenSuitsPage()
});

menSportswear.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenSportswearPage()
});

menSportswearTops.addEventListener("click", function () {
  hideMenSportswearPage()
  renderMenSportswearTopsPage()
});



// women section
const womenFilter = document.querySelector(".category-women");
const womenBack = document.querySelector(".category-women-back-button");

// women filters
const womenClothing = document.querySelector(".category-women-clothing");
const womenShoes = document.querySelector(".category-women-shoes");
const womenAccessories = document.querySelector(".category-women-accessories");

