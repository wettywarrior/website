function checkFilterActiveTab() {
  if (filterActiveTabBack === "") {
    filterBackButton.style.display = "none";
  } else {
    filterBackButton.style.display = "block";
  }
}

function filterBackButtonFunction() {
  if(filterActiveTabBack === "men"){
    hideMenPage()
    renderCatagoryPage()
  } else if(filterActiveTabBack === "menClothing"){
    hideMenClothingPage()
    renderMenPage()
  } else if(filterActiveTabBack === "menClothingTops"){
    hideMenTopsPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingBottoms"){
    hideMenBottomsPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingBottomsJeans"){
    hideMenBottomsJeansPage()
    renderMenBottomsPage()
  } else if(filterActiveTabBack === "menClothingBottomsTrousers"){
    hideMenBottomsTrousersPage()
    renderMenBottomsPage()
  } else if(filterActiveTabBack === "menClothingCoats"){
    hideMenCoatsPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingJackets"){
    hideMenJacketsPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingSuits"){
    hideMenSuitsPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingSportswear"){
    hideMenSportswearPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingSportswearTops"){
    hideMenSportswearTopsPage()
    renderMenSportswearPage()
  } else if(filterActiveTabBack === "menClothingSportswearBottoms"){
    hideMenSportswearBottomsPage()
    renderMenSportswearPage()
  } else if(filterActiveTabBack === "menClothingNightwear"){
    hideMenNightwearPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingUnderwear"){
    hideMenUnderwearPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingSwimwear"){
    hideMenSwimwearPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menAccessories"){
    hideMenAccessoriesPage()
    renderMenPage()
  }
}



filterBackButton.addEventListener("click", function () {
  filterBackButtonFunction()
});

