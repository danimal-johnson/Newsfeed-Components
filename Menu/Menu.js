/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a
      list item <li> element for each item in the array. 
      Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element
      with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked
      it should toggle the class 'menu--open' on the menu
      (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/



// const createMenu = function (siteMenu) {
 
//   let listString = ""; // '<div class = "menu"><ul>';
//   for (i of siteMenu)
//     listString += `<li>${i}</li>`;
//  // listString += "</ul>";

//   return listString;
// }

const createMenu2 = function (siteMenu) {

  const navMenu = document.createElement("div");
  navMenu.classList.add("menu");

  const menuList = document.createElement("ul");
  menuList.classList.add("unorderedList");
  navMenu.appendChild(menuList);

  for (item of siteMenu) {
    let currentLi = document.createElement("li");
    currentLi.textContent = item;
    menuList.appendChild(currentLi);
  }

  return navMenu;
}

let menuButton = document.querySelector(".menu-button");
let attachmentPoint = document.querySelector(".header");

const mainNavMenu = createMenu2(menuItems);
attachmentPoint.appendChild(mainNavMenu);

// const navMenu = document.createElement("div");
// navMenu.classList.add("menu");
// attachmentPoint.appendChild(navMenu);

// const menuList = document.createElement("ul");
// menuList.classList.add("unorderedList");
// // menuList.textContent = createMenu(menuItems);
// navMenu.appendChild(menuList);

// const firstItem = document.createElement("li");
// firstItem.textContent = "FizzBuzz";
// menuList.appendChild(firstItem);

menuButton.addEventListener("click", e => {

  if (mainNavMenu.classList.contains("menu--open")) {
    mainNavMenu.classList.remove("menu--open");
    console.log("shrinking");
  }
  else {
    mainNavMenu.classList.add("menu--open");
    console.log("growing");
  }
});