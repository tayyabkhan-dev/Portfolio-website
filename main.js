document.addEventListener("DOMContentLoaded", () => {

  const title = document.querySelector("#hero h1")

  console.log(title)

  title.textContent = "I am Developer"

  title.addEventListener("click", () => {
    title.textContent = "You clicked me 😎"
  })

})
gsap.from("#hero h1", {
  y: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
})
gsap.from("#hero p", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  delay: 0.5
})
gsap.from("#about", {
  opacity: 0,
  duration: 2,
  scrollTrigger: "#about"
})