<script>
    import { onMount } from "svelte";
    import decorations from "./shapes.js";
    import { buildCoord, buildStep, buildPath } from "./path.js";

    let decos = decorations;
    let fetched = false;

    onMount(() => {
        fetch("http://localhost:4000/api/symbols")
            .then((r) => {
                return r.json().then((data) => {
                    decos = data.shapes;
                    console.log(data.shapes);
                    fetched = true;
                });
            })
            .catch((e) => {
                fetched = false;
            });
    });

    const box = {
        x: 50,
        y: 80,
        width: 100,
        height: 100,
        fill: "#ffffff",
        stroke: "#111111",
    };
</script>

<article>
    <header>
        <div>
            <h2>Renew Icons</h2>
            <p>
                Below you see a set of parametric icons for <a
                    href="http://www.renew.de">Renew</a
                >.
            </p>
            <p>
                The icons can adjust to fill the space of the rectangle they are
                placed in without violating their characteristic proportions.
            </p>
            <div
                style="display: grid; grid-auto-flow: column; grid-template-columns: auto auto auto auto; grid-template-rows: 1fr 1fr; gap: 0 2ex; align-self: start;"
            >
                <label for="Width">Width: </label>
                <input
                    id="Width"
                    type="range"
                    min={0}
                    step=".1"
                    max={100}
                    bind:value={box.width}
                />
                <label for="Height">Height: </label>
                <input
                    id="Height"
                    type="range"
                    min={0}
                    step=".1"
                    max={100}
                    bind:value={box.height}
                />

                <label for="Fill">Fill: </label>
                <input type="color" bind:value={box.fill} />
                <label id="Fill" for="Stroke">Stroke: </label>
                <input id="Stroke" type="color" bind:value={box.stroke} />
            </div>
        </div>
        <hr />
    </header>

    <div class="grid">
        {#each decos as deco}
            <article class="cell" class:fetched>
                <svg
                    viewBox="{box.x - 20} {box.y - 20} {box.width +
                        2 * 20} {box.height + 2 * 20}"
                >
                    <rect {...box} stroke="none" fill="#0001"></rect>
                    <g fill={box.fill} stroke={box.stroke}>
                        {#each deco.paths as path}
                            <path
                                d={buildPath(box, path)}
                                fill={path.fill_color}
                                stroke={path.stroke_color}
                                vector-effect="non-scaling-stroke"
                                stroke-width="0.5"
                                fill-rule="evenodd"
                            />
                        {/each}
                    </g>
                    <rect
                        x={box.x - 1}
                        y={box.y - 1}
                        width={box.width + 2}
                        height={box.height + 2}
                        stroke-width="2"
                        fill="none"
                        stroke="#08a5"
                        stroke-dasharray="5 5"
                    ></rect>
                </svg>
                <footer>{deco.name}</footer>
            </article>
        {/each}
    </div>
</article>

<style>
    article {
        display: grid;
        grid-template-rows: auto auto;
        gap: 1em;
    }

    header {
        position: sticky;
        top: 0;
        left: 0;
        background: #fffa;
        right: 0;
        font-family: monospace;
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 1ex;
    }

    hr {
        border: none;
        border-bottom: 1px solid #aaa;
    }

    footer {
        font-family: monospace;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(9em, 1fr));
        grid-auto-rows: 9em;
        gap: 3em 1em;
        padding-bottom: 3em;
    }
    .cell {
        background: #f0f0f0;
        text-align: center;
        font-size: small;
        width: 100%;
    }

    .cell.fetched {
        background: #e0faff;
    }

    h2 {
        margin: 0;
    }
    svg {
        width: 100%;
        height: 100%;
    }

    input {
        padding: 0;
        margin: 0;
    }

    input[type="range"] {
        width: 20em;
        max-width: 80vw;
    }

    label {
        display: flex;
        align-items: center;
        gap: 1em;
    }
</style>
