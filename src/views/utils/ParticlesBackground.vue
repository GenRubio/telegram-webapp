<script setup>
import { loadFull } from "tsparticles";

const particlesInit = async engine => {
    await loadFull(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
</script>

<template>
    <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="{
        background: {
            color: {
                value: 'transparent'
            }
        },
        fpsLimit: 120,
        interactivity: {
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                },
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: {
                value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300','#E86363']
            },
            collisions: {
                enable: true
            },
            move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 0.5,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 200
            },
            opacity: {
                value: 0.1
            },
            shape: {
                type: 'circle'
            },
            size: {
                random: true,
                value: 5
            }
        },
        detectRetina: true
    }" />
</template>

<style scoped>
canvas{
    z-index: -100;
}
</style>
