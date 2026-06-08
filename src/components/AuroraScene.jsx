import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useIsDesktop, usePrefersReducedMotion } from '../hooks/useMediaQuery'

// Aurora ribbons + drifting embers + distant gold stars.
// Ported from the approved /tmp/hero-aurora.html prototype.
// - Three layered shader-driven planes ripple to form the aurora.
// - Warm gold/orange embers rise from below with sway + pulse.
// - Pauses its render loop while offscreen.
// - Falls back to nothing (parent shows CSS gradient) if WebGL is missing.
// - Respects prefers-reduced-motion: renders one static frame.
export default function AuroraScene() {
  const canvasRef = useRef(null)
  const desktop = useIsDesktop()
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: !reduced,
        alpha: false,
        powerPreference: 'high-performance',
      })
    } catch (e) {
      return undefined
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, desktop ? 2 : 1.5))
    renderer.setClearColor(0x06040c, 1)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 6

    const resize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / Math.max(1, h)
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener('resize', resize)

    // ───────────────────── Aurora ribbons ─────────────────────
    const auroraVert = `
      uniform float u_time;
      varying vec2 v_uv;
      varying float v_disp;
      void main() {
        v_uv = uv;
        float wave =
          sin(uv.x * 4.0 + u_time * 0.18) * 0.7 +
          sin(uv.x * 9.0 - u_time * 0.12) * 0.35 +
          sin(uv.y * 2.5 + u_time * 0.22) * 0.4;
        vec3 p = position;
        p.y += wave * 1.2;
        v_disp = wave;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`
    const auroraFrag = `
      uniform vec3 u_low;
      uniform vec3 u_mid;
      uniform vec3 u_hi;
      uniform float u_opacity;
      uniform float u_time;
      varying vec2 v_uv;
      varying float v_disp;
      void main() {
        float t = clamp(v_uv.y, 0.0, 1.0);
        vec3 col = mix(u_low, u_mid, smoothstep(0.0, 0.65, t));
        col = mix(col, u_hi, smoothstep(0.65, 1.0, t));
        float shimmer = sin(v_uv.x * 8.0 - u_time * 0.25) * 0.5 + 0.5;
        col += vec3(0.3, 0.18, 0.5) * shimmer * 0.10;
        float a = smoothstep(0.0, 0.18, t) * smoothstep(1.0, 0.5, t);
        a *= (0.65 + v_disp * 0.4) * u_opacity;
        gl_FragColor = vec4(col, a);
      }`
    const palettes = [
      { low: new THREE.Color('#1a0b3a'), mid: new THREE.Color('#7c3aed'), hi: new THREE.Color('#d4af37'), z: -2, op: 0.7 },
      { low: new THREE.Color('#2a0a4a'), mid: new THREE.Color('#a78bfa'), hi: new THREE.Color('#e7cd8f'), z: -0.5, op: 0.5 },
      { low: new THREE.Color('#0a0815'), mid: new THREE.Color('#6d28d9'), hi: new THREE.Color('#c4b5fd'), z: 1.5, op: 0.35 },
    ]
    const ribbons = palettes.map((p, i) => {
      const geo = new THREE.PlaneGeometry(16, 6, desktop ? 96 : 56, desktop ? 24 : 14)
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          u_time: { value: i * 2.1 },
          u_low: { value: p.low },
          u_mid: { value: p.mid },
          u_hi: { value: p.hi },
          u_opacity: { value: p.op },
        },
        vertexShader: auroraVert,
        fragmentShader: auroraFrag,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
      const m = new THREE.Mesh(geo, mat)
      m.position.set(0, 0, p.z)
      m.rotation.x = -0.08
      scene.add(m)
      return { geo, mat, mesh: m }
    })

    // ───────────────────── Stars ─────────────────────
    const starCount = desktop ? 320 : 180
    const starPos = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i += 1) {
      starPos[i * 3] = (Math.random() - 0.5) * 36
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 22
      starPos[i * 3 + 2] = -7 - Math.random() * 8
    }
    const starsGeo = new THREE.BufferGeometry()
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    const starsMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0xe7cd8f,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    })
    scene.add(new THREE.Points(starsGeo, starsMat))

    // ───────────────────── Embers ─────────────────────
    const emberCount = desktop ? 240 : 120
    const ePos = new Float32Array(emberCount * 3)
    const eCol = new Float32Array(emberCount * 3)
    const eSize = new Float32Array(emberCount)
    const ePhase = new Float32Array(emberCount)
    const eSpeed = new Float32Array(emberCount)
    const eBaseX = new Float32Array(emberCount)
    const gold = new THREE.Color('#e7cd8f')
    const warm = new THREE.Color('#ff9d4a')
    const violet = new THREE.Color('#a78bfa')
    for (let i = 0; i < emberCount; i += 1) {
      ePos[i * 3] = (Math.random() - 0.5) * 20
      ePos[i * 3 + 1] = (Math.random() - 0.5) * 14
      ePos[i * 3 + 2] = (Math.random() - 0.5) * 4
      eBaseX[i] = ePos[i * 3]
      const r = Math.random()
      const c = r < 0.5 ? gold : r < 0.8 ? warm : violet
      eCol[i * 3] = c.r
      eCol[i * 3 + 1] = c.g
      eCol[i * 3 + 2] = c.b
      eSize[i] = 0.8 + Math.random() * 2.6
      ePhase[i] = Math.random() * Math.PI * 2
      eSpeed[i] = 0.04 + Math.random() * 0.06
    }
    const emberGeo = new THREE.BufferGeometry()
    emberGeo.setAttribute('position', new THREE.BufferAttribute(ePos, 3))
    emberGeo.setAttribute('color', new THREE.BufferAttribute(eCol, 3))
    emberGeo.setAttribute('aSize', new THREE.BufferAttribute(eSize, 1))
    emberGeo.setAttribute('aPhase', new THREE.BufferAttribute(ePhase, 1))
    emberGeo.setAttribute('aSpeed', new THREE.BufferAttribute(eSpeed, 1))
    emberGeo.setAttribute('aBaseX', new THREE.BufferAttribute(eBaseX, 1))

    const emberMat = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_pixel: { value: renderer.getPixelRatio() },
      },
      vertexShader: `
        attribute float aSize;
        attribute float aPhase;
        attribute float aSpeed;
        attribute float aBaseX;
        uniform float u_time;
        uniform float u_pixel;
        varying vec3 vColor;
        varying float vGlow;
        void main() {
          vColor = color;
          float life = mod(u_time * aSpeed + aPhase * 0.16, 1.0);
          vec3 p = position;
          p.y = -7.0 + life * 14.0;
          p.x = aBaseX + sin(u_time * 0.5 + aPhase) * 0.6;
          float pulse = 0.55 + 0.45 * sin(u_time * 1.4 + aPhase * 2.2);
          float fade = smoothstep(0.0, 0.12, life) * smoothstep(1.0, 0.85, life);
          vGlow = pulse * fade;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = aSize * (0.7 + pulse * 0.6) * u_pixel * (55.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vColor;
        varying float vGlow;
        void main() {
          vec2 c = gl_PointCoord - vec2(0.5);
          float d = length(c);
          float core = smoothstep(0.5, 0.0, d);
          float halo = smoothstep(0.5, 0.18, d) * 0.55;
          float a = (core + halo) * vGlow;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vColor, a);
        }`,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const embers = new THREE.Points(emberGeo, emberMat)
    scene.add(embers)

    // ───────────────────── Render loop ─────────────────────
    let rafId
    let running = true
    const start = performance.now()
    const renderFrame = (t) => {
      ribbons.forEach((r, i) => {
        r.mat.uniforms.u_time.value = t + i * 1.7
      })
      emberMat.uniforms.u_time.value = t
      renderer.render(scene, camera)
    }
    const tick = () => {
      if (!running) return
      const t = (performance.now() - start) / 1000
      renderFrame(t)
      rafId = requestAnimationFrame(tick)
    }
    if (reduced) {
      renderFrame(0)
    } else {
      tick()
    }

    // Pause when offscreen to save battery / GPU.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true
          if (!reduced) tick()
        } else if (!entry.isIntersecting) {
          running = false
          cancelAnimationFrame(rafId)
        }
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      io.disconnect()
      window.removeEventListener('resize', resize)
      ribbons.forEach((r) => {
        r.geo.dispose()
        r.mat.dispose()
      })
      starsGeo.dispose()
      starsMat.dispose()
      emberGeo.dispose()
      emberMat.dispose()
      renderer.dispose()
    }
  }, [desktop, reduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  )
}
