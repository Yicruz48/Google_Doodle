// GSAP included in `index.html`
console.log('OK');

gsap.to('.trio', {
 strength: 10,
 duration: 1,
  x:-20,
  repeat: 1,
  yoyo: true,
  ease:"Bounce.easeInOut",
    stagger: {
      delay: .5,
    each: .5,  
  }
 
  });

gsap.to('.leaf2', {
 rotation: 360,
 duration: 1,
  ease: "slow"
  });

gsap.to('#leaf1', {
 rotation: 360,
 duration: 1,
  
  });

gsap.to('#sign',{
 y: -96, 
  ease: "slow",
  delay: 1
});