let cube, scene, camera, renderer

document.addEventListener("DOMContentLoaded", () => {

  // 🟣 TEXT (Day 3)
  const title = document.querySelector("#hero h1")

  title.textContent = "I am Developer"

  title.addEventListener("click", () => {
    title.textContent = "You clicked me 😎"
  })

  // 🔵 GSAP Animations (Day 4)
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

  // 🟢 THREE.JS (Day 5)
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
  })

  renderer.setSize(window.innerWidth, window.innerHeight)

  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshStandardMaterial({ color: 0x00d9ff })

  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // 🔥 LIGHT
  const light = new THREE.PointLight(0x00d9ff, 2)
  light.position.set(5, 5, 5)
  scene.add(light)

  // 🌫 FOG
  scene.fog = new THREE.Fog(0x000000, 5, 15)

  camera.position.z = 5

  // 🔄 ANIMATION LOOP
  function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.005
    cube.rotation.y += 0.005

    renderer.render(scene, camera)
  }

  animate()

  // 🖱 MOUSE INTERACTION (Day 6)
  document.addEventListener("mousemove", (event) => {

    const x = (event.clientX / window.innerWidth - 0.5) * 2
    const y = (event.clientY / window.innerHeight - 0.5) * 2

    gsap.to(cube.rotation, {
      x: y,
      y: x,
      duration: 0.5
    })

  })

})