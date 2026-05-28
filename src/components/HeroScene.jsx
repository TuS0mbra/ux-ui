import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Cinematic WebGL backdrop: a glowing faceted core, an orbiting ring, and a
// drifting particle field lit by violet + gold lights. Reacts to cursor
// (parallax) and scroll (depth/rotation). Raw three.js so we control disposal
// and keep the dependency surface tiny. `quality` lightens it for mobile/weak GPUs.
export default function HeroScene({ quality = 'high' }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const low = quality === 'low'
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !low,
        powerPreference: 'high-performance',
      })
    } catch (e) {
      return undefined // No WebGL — parent keeps the CSS gradient fallback.
    }

    const width = mount.clientWidth
    const height = mount.clientHeight
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, low ? 1.5 : 2))
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050506, 0.085)

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100)
    camera.position.set(0, 0, 9)

    const group = new THREE.Group()
    scene.add(group)

    // --- Faceted core (glowing wireframe + dark inner solid) ---
    const coreGeo = new THREE.IcosahedronGeometry(2.1, 1)
    const wire = new THREE.Mesh(
      coreGeo,
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.55 }),
    )
    const innerGeo = new THREE.IcosahedronGeometry(2.05, 1)
    const inner = new THREE.Mesh(
      innerGeo,
      new THREE.MeshStandardMaterial({
        color: 0x140a2b,
        emissive: 0x4c1d95,
        emissiveIntensity: 0.5,
        metalness: 0.6,
        roughness: 0.35,
        flatShading: true,
      }),
    )
    group.add(inner)
    group.add(wire)

    // --- Orbiting ring ---
    const ringGeo = new THREE.TorusGeometry(3.4, 0.045, 12, 140)
    const ring = new THREE.Mesh(
      ringGeo,
      new THREE.MeshStandardMaterial({
        color: 0xd8b25a,
        emissive: 0xb8902f,
        emissiveIntensity: 0.7,
        metalness: 0.9,
        roughness: 0.3,
      }),
    )
    ring.rotation.x = Math.PI / 2.4
    group.add(ring)

    // --- Particle field ---
    const count = low ? 420 : 1400
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const r = 6 + Math.random() * 10
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    const partGeo = new THREE.BufferGeometry()
    partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particles = new THREE.Points(
      partGeo,
      new THREE.PointsMaterial({
        color: 0xa78bfa,
        size: low ? 0.05 : 0.04,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    )
    scene.add(particles)

    // --- Lights ---
    scene.add(new THREE.AmbientLight(0x342a5a, 0.6))
    const violet = new THREE.PointLight(0x7c3aed, 60, 60)
    violet.position.set(5, 4, 6)
    scene.add(violet)
    const gold = new THREE.PointLight(0xe7cd8f, 22, 60)
    gold.position.set(-6, -3, 4)
    scene.add(gold)

    // --- Interaction state ---
    const pointer = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    let scrollProgress = 0

    const onPointerMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2
      target.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    const onScroll = () => {
      scrollProgress = Math.min(window.scrollY / (window.innerHeight || 1), 1.2)
    }
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('scroll', onScroll, { passive: true })

    const clock = new THREE.Clock()
    let rafId
    let running = true

    const animate = () => {
      if (!running) return
      const t = clock.getElapsedTime()

      pointer.x += (target.x - pointer.x) * 0.05
      pointer.y += (target.y - pointer.y) * 0.05

      group.rotation.y = t * 0.12 + pointer.x * 0.5
      group.rotation.x = pointer.y * 0.35 + Math.sin(t * 0.3) * 0.05
      group.position.y = Math.sin(t * 0.5) * 0.15 - scrollProgress * 1.6

      wire.rotation.z = t * 0.06
      ring.rotation.z = t * 0.25

      particles.rotation.y = t * 0.02
      particles.rotation.x = -scrollProgress * 0.3

      violet.position.x = Math.sin(t * 0.4) * 6
      violet.position.z = Math.cos(t * 0.4) * 6
      gold.position.x = Math.cos(t * 0.32) * 6

      camera.position.z = 9 + scrollProgress * 2
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      rafId = requestAnimationFrame(animate)
    }
    animate()
    onScroll()

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    // Pause the loop when the hero is offscreen (saves battery / GPU).
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true
          animate()
        } else if (!entry.isIntersecting) {
          running = false
          cancelAnimationFrame(rafId)
        }
      },
      { threshold: 0 },
    )
    io.observe(mount)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      io.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      coreGeo.dispose()
      innerGeo.dispose()
      ringGeo.dispose()
      partGeo.dispose()
      wire.material.dispose()
      inner.material.dispose()
      ring.material.dispose()
      particles.material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [quality])

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
}
