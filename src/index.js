console.log("Hello world");

const $content = document.getElementById("content");

// Creates the elements of html, easier to use then making it by scratch
function createHtmlElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses)
      arrayClasses.forEach((myClass) => element.classList.add(myClass));
  
    if (content) element.innerText = content;
  
    return element;
  }

//Navbar creation
function renderNav() {
    const navItems = ["home", "menu", "about"];
    const $ul = document.createElement("ul");
  
    navItems.forEach((item) =>
      $ul.appendChild(createHtmlElement("li", null, null, item))
    );
  
    const $nav = document.createElement("nav");
    $nav.appendChild($ul);
  
    $content.appendChild($nav);
  }
  
//Homepage creation
function renderHome() {
    const $main = document.createElement("main");
  
    const $title = createHtmlElement("h1", null, ["white"], "Mitake Sushi");
  
    const $subtitle = createHtmlElement(
      "p",
      null,
      ["text-center", "white"],
      "A piece of serenity from the Gifu prefecture."
    );
    const $button = createHtmlElement("button", null, null, "view menu");
  
    $main.appendChild($title);
    $main.appendChild($subtitle);
    $main.appendChild($button);
  
    $content.appendChild($main);
  }

//Footer creation
function renderFooter() {
    const $footer = document.createElement("footer");
    const $p = createHtmlElement(
      "p",
      null,
      ["golden"],
      "Created for the Odin Project - Made Entirely with Javascript"
    );
    $footer.appendChild($p);
    $content.appendChild($footer);
  }


//Runs all the functions to generate the webpage
renderNav();
renderHome();
renderFooter();