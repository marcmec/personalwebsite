import { useState, useEffect, useRef, useCallback } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { loadGLTFModel } from "../libs/model"
import { RoomSpinner, RoomContainer } from "./vox-room-loader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const LoadMyRoom = () => {
    const [loading, setLoading] = useState(true)
    const refContainer = useRef()
    const [scene] = useState(new THREE.Scene())
    const [camera] = useState(
        new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.25,
            20
        )
    )
    const [_controls, setControls] = useState()

    const [renderer, setRenderer] = useState()

    useEffect(() => {
        const { current: container } = refContainer

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        })

        // camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()
        camera.position.set(-100, 100, 100)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(container.clientWidth, container.clientHeight)
        renderer.outputEncoding = THREE.sRGBEncoding
        container.appendChild(renderer.domElement)
        setRenderer(renderer)
        const ambientLight = new THREE.RectAreaLight(0xcccccc, 2)
        scene.add(ambientLight)

        const loader = new GLTFLoader()

        loader.load("/myroom.glb", function (gltf) {
            ;(gltf.receiveShadow = false), (gltf.castShadow = false)
            scene.add(gltf.scene)

            animate()

            setLoading(false)
        })

        camera.aspect = container.clientWidth / container.clientHeight
        camera.updateProjectionMatrix()

        renderer.setSize(container.clientWidth, container.clientHeight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.autoRotate = true

        controls.enableDamping = true
        controls.minDistance = 1
        controls.maxDistance = 10
        controls.target.set(0, 0.35, 0)

        setControls(controls)
        const animate = () => {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)

            controls.update()
        }

        // return () => {
        //     cancelAnimationFrame(null)
        //     renderer.dispose()
        // }
    }, [])

    return (
        <RoomContainer ref={refContainer}>
            {loading && <RoomSpinner />}
        </RoomContainer>
    )
}

export default LoadMyRoom
