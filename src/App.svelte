<script lang="ts">
    import {onMount} from "svelte";
    import {World} from "./entities/World";
    import {Planet} from "./entities/Planet";

    let canvas;
    const fps = 60;
    const world = new World(1400, 800, fps);

    onMount(() => {
        const ctx = canvas.getContext("2d")
        // world.addPlanet(new Planet(680, 380, 60, 0, 0))

        // world.addPlanet(new Planet(680, 300, 5, -60, 0))
        //
        // world.addPlanet(new Planet(680, 200, 10, -40, 0))
        //
        // world.addPlanet(new Planet(680, 680, 10, -30, 0))

        let startX = 0;
        let startY = 0;

        canvas.addEventListener('mousedown', function (event) {
            startX = event.pageX - canvas.offsetLeft;
            startY = event.pageY - canvas.offsetTop;
        }, false);

        // canvas.addEventListener('mousemove', function (event) {
        //     const currentX = 0
        // }, false)

        canvas.addEventListener('mouseup', function (event) {
            const velocityX = startX - event.pageX + canvas.offsetLeft;
            const velocityY = startY - event.pageY + canvas.offsetTop;
            world.addPlanet(new Planet(startX, startY, 10, velocityX, velocityY, true))
        }, false);

        // world.addPlanet(new Planet(800, 200, 5, 0, 0))

        window.setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            world.next()

            world.planets.forEach(planet => {
                ctx.beginPath();
                ctx.arc(planet.x, planet.y, planet.size, 0, 2 * Math.PI, false);
                ctx.fillStyle = '#fa9800';
                ctx.fill();
            })
        }, 1000 / fps)
    })
</script>

<button on:click={() => world.togglePause()}>Pause</button>
<input bind:value={world.multiplier} type="range" min="0" max="100">
<canvas bind:this={canvas} width="1400" height="800">Обновите браузер</canvas>