window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ 
        duration: 1.2,
        opacity: 0
    });

    // ANIMATION
    //HOME
    /*const TimeLine01 = gsap.timeline({
        scrollTrigger: {
            trigger: "#presentation",
            start: "top-=330 center",
        },
    });
    
    //const centerSectionTitle = document.querySelectorAll('.title-center');
    TimeLine01.from(".navbar_logo",{ x: -150 }, "-=1");
    TimeLine01.from(".nav_menu",{ x: 150 }, "-=1");
    TimeLine01.from("#homepage-mainTitle",{ z: 150 }, "-=1");
    TimeLine01.from("#homepage-subtitle",{ z: 150 }, "-=1");*/
    
    //ABOUT-ME
    const TimeLine02 = gsap.timeline({
        scrollTrigger: {
            trigger: "#presentation",
            start: "top center",
        },
    });
    
    //const centerSectionTitle = document.querySelectorAll('.title-center');
    TimeLine02.from("#profil-image",{ x: -150 });
    TimeLine02.from(".about-content-text",{ x: 150 }, "-=1");
    
    // SKILLS
    const TimeLine03 = gsap.timeline({
        scrollTrigger: {
            trigger: "#skills",
            start: "top center",
        },
    });
    
    TimeLine03.from("#skills-title",{ y: -50 });
    TimeLine03.from(".skill-title",{ y: -50 }, "-=1");
    TimeLine03.from(".skill-container",{ opacity: 0 }, "-=1");
    
    // PROJECTS
    const TimeLine04 = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top center",
        },
    });
    
    TimeLine04.from("#project-title",{ y: -50 });
    TimeLine04.from(".project-container ",{ y: -150 }, "-=1.2");
    
    // CONTACT
    const TimeLine05 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact-container",
            start: "center bottom",
        },
    });
    
    TimeLine05.from(".image-box",{ x: -150 });
    TimeLine05.from("#form",{ x: 150 }, "-=1.5");

    //FOOTER
    const footerContent = document.querySelectorAll(".footer-container");
    const TimeLine06 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-infos-container",
            start: "bottom bottom",
        },
    });
    
    TimeLine06.from(footerContent,{ y: 50 });
    TimeLine06.from("#copyright",{ y: 50 }, "-=1");
    console.log("ScrollTrigger", ScrollTrigger);
})