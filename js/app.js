window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ 
        duration: 1.2,
        opacity: 0
    });

    // ANIMATION
    //ABOUT-ME
    const TimeLine01 = gsap.timeline({
        scrollTrigger: {
            trigger: "#presentation",
            start: "top center",
        },
    });
    
    //const centerSectionTitle = document.querySelectorAll('.title-center');
    TimeLine01.from("#profil-image",{ x: -150 });
    TimeLine01.from(".about-content-text",{ x: 150 }, "-=1");
    
    // SKILLS
    const TimeLine02 = gsap.timeline({
        scrollTrigger: {
            trigger: "#skills",
            start: "top center",
        },
    });
    
    TimeLine02.from("#skills-title",{ y: -50 });
    TimeLine02.from(".skill-title",{ y: -50 }, "-=1");
    TimeLine02.from(".skill-container",{ opacity: 0 }, "-=1");
    
    // PROJECTS
    /* const TimeLine03 = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects",
            start: "top center",
        },
    });
    
    TimeLine03.from("#projects-title",{ y: -50 });
    TimeLine03.from(".swiper-slide ",{ y: -150 }, "-=1.2");*/
    
    // CONTACT
    const TimeLine04 = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact-container",
            start: "center bottom",
        },
    });
    
    TimeLine04.from(".image-box",{ x: -150 });
    TimeLine04.from("#form",{ x: 150 }, "-=1.5");

    //FOOTER
    const footerContent = document.querySelectorAll(".footer-container");
    const TimeLine05 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-infos-container",
            start: "bottom bottom",
        },
    });
    
    TimeLine05.from(footerContent,{ y: 50 });
    TimeLine05.from("#copyright",{ y: 50 }, "-=1");
    console.log("ScrollTrigger", ScrollTrigger);
})