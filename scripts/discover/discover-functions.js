// sending home file when discover clicked

const sidebarHomeButtonContainer = document.querySelector(".sidebar-home-container");
const sidebardiscoverButtonContainer = document.querySelector(".sidebar-discover-container");

document.querySelector(".sidebar-home-button").addEventListener("click", function () {
  window.location.href='index.html';
});


//________________________________________________________________________

// removes suggested tab when click close

const SuggestedAccountsContainer = document.querySelector('.suggested-feed');

document.querySelector(".suggested-feed-close-button").addEventListener("click", function () {
    SuggestedAccountsContainer.style.display = "none";
});
