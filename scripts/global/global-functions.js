// display sidebar following accounts when menu dropped down

const followingAccountsContainer = document.querySelector(".following-accounts");
followingAccountsContainerDisplay = true
const sidebarFollowingDownArrow = document.querySelector(".sidebar-following-down-arrow");
const sidebarFollowingUpArrow = document.querySelector(".sidebar-following-up-arrow");


document.querySelector(".sidebar-following-button").addEventListener("click", function () {

    if(followingAccountsContainerDisplay === true){
      followingAccountsContainer.style.display = "none"
      followingAccountsContainerDisplay = false
      sidebarFollowingDownArrow.style.display = "none";
      sidebarFollowingUpArrow.style.display = "block";
    } else {
      followingAccountsContainer.style.display = "block";
      followingAccountsContainerDisplay = true
      sidebarFollowingDownArrow.style.display = "block";
      sidebarFollowingUpArrow.style.display = "none";
    }

});

//_________________________________________________________________________

