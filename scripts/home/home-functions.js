// sending discover file when discover clicked

const sidebardiscoverButtonContainer = document.querySelector(".sidebar-discover-container");
const sidebarHomeButtonContainer = document.querySelector(".sidebar-home-container");


document.querySelector(".sidebar-discover-button").addEventListener("click", function () {
  window.location.href='discover.html';
});

//________________________________________________________________________

// removes suggested tab when click close

const SuggestedAccountsContainer = document.querySelector('.suggested-feed');

document.querySelector(".suggested-feed-close-button").addEventListener("click", function () {
    SuggestedAccountsContainer.style.display = "none";
});


