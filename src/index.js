
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
    const $button = createHtmlElement("button", null, ["button"], "view menu");
  
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
//Menu page creation
  const menu = [
    {
      name: "Hokkaido Sushi Boat",
      description:
        "A lovely boat of sushi with a bunch of stuff you can eat hooray.",
      price: "40$",
    },
    {
      name: "Nagoya Roll",
      description:
        "This roll has all you can imagine inside of it!",
      price: "15$",
    },
    {
      name: "Fried Squid Nigiri",
      description:
        "I know, it sounds weird right, but trust me it's good!",
      price: "20$",
    },
  ];
  
  function renderMenu() {
    const $main = document.createElement("main");
    $main.classList.add("main");

    const $title = createHtmlElement("h1", null, ["gray"], "Menu");
  

    $main.appendChild($title);

  
    menu.forEach((item) => {
      const $div = createHtmlElement("div", null, ["menu-item"], null);
  
      const $name = createHtmlElement("h2", null, ["golden"], item.name);
      const $description = createHtmlElement(
        "p",
        null,
        ["gray"],
        item.description
      );
      const $price = createHtmlElement("h2", null, ["golden"], item.price);
      const $hr = createHtmlElement("hr", null, ["menu-hr"], null);
  
      $div.appendChild($name);
      $div.appendChild($description);
      $div.appendChild($price);

  
      $main.appendChild($div);
    });
  
    $content.appendChild($main);
  }
  
  function renderAbout() {
    const $main = document.createElement("main");
    $main.classList.add("main");

    const $title = createHtmlElement("h1", null, ["gray"], "Where we're from");
  

    const content =
      "This would be alot of backstory to have to create from imagination, so i'm just going to use lorem ipsum! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non elementum metus. Donec ac nisi eget ligula elementum finibus in a quam. Curabitur sit amet pretium ante. Aliquam molestie auctor feugiat. Vivamus at ullamcorper tellus, non viverra mi. Pellentesque convallis porttitor volutpat. Nunc non orci iaculis, congue augue sed, ultricies lectus. Nullam nec ligula quis nulla commodo finibus in vel erat.";
    const $p = createHtmlElement("p", null, ["about-text"], content);
  
    $main.appendChild($title);
    $main.appendChild($p);
  
    $content.appendChild($main);
  }
  

function homePage() {
    $content.innerHTML = "";
    renderNav();
    renderHome();
    renderFooter();
}
function menuPage() {
    $content.innerHTML = "";
    renderNav();
    renderMenu();
    renderFooter();
}
function aboutPage() {
    $content.innerHTML = "";
    renderNav();
    renderAbout();
    renderFooter();
}

//generates homepage on site load
homePage();

//event listener for clicking to switch pages
document.addEventListener("click", (e) => {
    const target = e.target.innerText;
  
    if (target === "HOME") homePage();
    if (target === "MENU" || target === "view menu") menuPage();
    if (target === "ABOUT") aboutPage();
  });
