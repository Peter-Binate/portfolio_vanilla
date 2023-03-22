
window.addEventListener('load', () => {
    /*const navMenu = document.getElementById('nav-menu');
    const navItems = [
        { href: "#homepage", text: "Accueil", icon: "fa-house" },
        { href: "#presentation", text: "Présentation", icon: "fa-user" },
        { href: "#skills", text: "Compétences", icon: "fa-brain" },
        { href: "#projects", text: "Projets", icon: "fa-folder" },
        { href: "#contact-me", text: "Contact", icon: "fa-paper-plane" },
        { href: "./image/Cv_BINATE_Beliko_Peter.pdf", text: "Cv", icon: "fa-file-pdf" },
    ];

    const navLinks = navItems.map((navItem) => {
        return `<li class="nav_item">
                    <a class="nav_link" href="${navItem.href}">
                        <i class="fa-solid ${navItem.icon} nav_icon"></i>
                        <span>${navItem.text}</span>
                    </a>
                </li>`;
    }).join('');

    const ulNavList = `<ul class="nav-list">${navLinks}</ul>`;
    navMenu.innerHTML = ulNavList;*/

    const navMenu = document.getElementById('nav-menu');
    const navItems = [
        { href: "#homepage", text: "Home", icon: "fa-house" },
        { href: "#presentation", text: " Presentation", icon: "fa-user" },
        { href: "#skills", text: " Fähigkeiten", icon: "fa-brain" },
        { href: "#projects", text: " Projekte", icon: "fa-folder" },
        { href: "#contact-me", text: " Kontact", icon: "fa-paper-plane" },
        { href: "./image/Cv_BINATE_Beliko_Peter.pdf", text: "Lebenslauf", icon: "fa-file-pdf" },
      ];
      
      const ul = document.createElement("ul");
      ul.classList.add("nav-list");
      
      navItems.forEach((navItem) => {
        const li = document.createElement("li");
        li.classList.add("nav_item");
      
        const a = document.createElement("a");
        a.classList.add("nav_link");
        a.href = navItem.href;
      
        const i = document.createElement("i");
        i.classList.add("fa-solid", `${navItem.icon}`, "nav_icon");
      
        const span = document.createElement("span");
        span.textContent = navItem.text;
      
        a.append(i, span);
        li.appendChild(a);
        ul.appendChild(li);
      });
      
      navMenu.appendChild(ul);
    /*
    NAVBAR  
    Faire apparaitre le background au scroll*/
    const navBackground = document.querySelector('.nav-container');
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    let lastScroll = 0;

    if (mediaQuery.matches) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset
        
            if(currentScroll > 0){
                navBackground.classList.add("nav-background");
            } else{
                navBackground.classList.remove("nav-background");
            }
        
            lastScroll = currentScroll;
        })
    }

    /*
    Navbar pour Format tablette et smartphone:
    Lorsque je clique sur le menu burger*/
    const navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    } 

    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }
})
