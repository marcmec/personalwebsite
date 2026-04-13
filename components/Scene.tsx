'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

interface SceneProps {
  modelPath: string
  className?: string
}

export default function Scene({ modelPath, className }: SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current!
    const width = container.offsetWidth
    const height = container.offsetHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.set(3, 2, 2)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 0, 0)

    scene.add(new THREE.AmbientLight(0xffffff, 1.5))
    const dirLight = new THREE.DirectionalLight(0xffffff, 2)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)

    const loader = new GLTFLoader()
    loader.load(modelPath, (gltf) => {
      scene.add(gltf.scene)
    })

    function animate() {
      controls.update()
      renderer.render(scene, camera)
    }
    renderer.setAnimationLoop(animate)

    const observer = new ResizeObserver(() => {
      const w = container.offsetWidth
      const h = container.offsetHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    })
    observer.observe(container)

    return () => {
      renderer.setAnimationLoop(null)
      controls.dispose()
      observer.disconnect()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [modelPath])

  return <div ref={containerRef} className={className} />
}
