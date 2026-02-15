// gsap code goes here


gsap.registerPlugin(SplitText, ScrollTrigger);


SplitText.create(".about-text",{
    type: 'chars',
    autoSplit: true,
    onSplit: (self) => {
        return gsap.from{
            opacity: 25,

            scrollTrigger: {
                scrub: true;
                trigger: "about-section"
                start: '20% 100%'
                end: "100% 100%"
            }
        }
    }
})