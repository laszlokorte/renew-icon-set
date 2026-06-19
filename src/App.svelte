<script>
    import { onMount } from "svelte";
    import decorations from "./shapes.js";
    import { buildPath, serializePath } from "./path.js";
    import { exportElixir as ex } from "./elixir_export.js";

    let decos = decorations;
    let fetched = false;
    let serial = null;

    const loadFromApi = (evt) => {
        evt.preventDefault();
        fetch(Object.fromEntries(new FormData(evt.currentTarget)).api_url, {
            mode: "cors",
            credentials: "include",
        })
            .then(async (r) => {
                const data = await r.json();
                if (data.shapes) {
                    decos = data.shapes;
                    console.log(data.shapes);
                    fetched = true;
                }
            })
            .catch((e) => {
                console.error(e);
                alert("could not load symbols from api url");
                fetched = false;
            });
    };

    function exportElixir(deco) {
        serial = JSON.stringify(ex(deco), null, "  ");
    }

    const box = {
        x: 50,
        y: 80,
        width: 100,
        height: 100,
        fill: "#ffffff",
        stroke: "#111111",
    };
    const argValues = {};

    function forceArg(arg, force) {
        if (force.type == "sign") {
            arg = {
                x: Math.min(1, Math.max(0, arg.x * force.value)) * force.value,
                y: Math.min(1, Math.max(0, arg.y * force.value)) * force.value,
            };
        }
        if (force.type == "angle") {
            const bx = Math.cos((force.value * Math.PI) / 180);
            const by = Math.sin((force.value * Math.PI) / 180);
            const len = Math.max(0, arg.x * bx + arg.y * by);
            arg = {
                x: Math.min(
                    1,
                    Math.max(-1, Math.cos((force.value * Math.PI) / 180) * len),
                ),
                y: Math.min(
                    1,
                    Math.max(-1, Math.sin((force.value * Math.PI) / 180) * len),
                ),
            };
        }
        if (force.type == "angle") {
            const bx = Math.cos((force.value * Math.PI) / 180);
            const by = Math.sin((force.value * Math.PI) / 180);
            const len = Math.max(0, arg.x * bx + arg.y * by);
            arg = {
                x: Math.min(
                    1,
                    Math.max(-1, Math.cos((force.value * Math.PI) / 180) * len),
                ),
                y: Math.min(
                    1,
                    Math.max(-1, Math.sin((force.value * Math.PI) / 180) * len),
                ),
            };
        }
        if (force.type == "radius") {
            const len = Math.hypot(arg.y, arg.x);
            arg = {
                x: (arg.x / len) * force.value,
                y: (arg.y / len) * force.value,
            };
        }
        if (force.type == "x") {
            arg = {
                x: force.value,
                y: arg.y,
            };
        }

        if (force.type == "y") {
            arg = {
                y: force.value,
                x: arg.x,
            };
        }
        return arg;
    }
</script>

{#if serial}
    <dialog
        open
        on:close={() => {
            serial = null;
        }}
    >
        <button
            on:click={(evt) => {
                evt.currentTarget.parentNode.close();
                console.log("x");
            }}>Discard</button
        >
        <textarea
            readonly
            style="display: block; width: 70vw; height: 20em; white-space: pre;"
            >{serial}</textarea
        >
    </dialog>
{/if}

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
            <div>
                <form on:submit={loadFromApi} methd="post" action="#">
                    <input
                        type="text"
                        name="api_url"
                        value="http://localhost:4000/api/symbols"
                    />
                    <button type="submit"> Load from API </button>
                </form>
            </div>
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
                                d={buildPath(
                                    box,
                                    path,
                                    Object.fromEntries(
                                        (deco.args ?? []).map((a) => [
                                            a.name,
                                            argValues[a.name] ?? a.default,
                                        ]),
                                    ),
                                )}
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

                    {#if deco.args}
                        {#each deco.args as arg}
                            {@const pos = forceArg(
                                argValues[arg.name] ?? arg.default,
                                arg.force,
                            )}
                            <g
                                class="arg-handle"
                                pointer-events="all"
                                on:pointerdown={(evt) => {
                                    if (evt.isPrimary) {
                                        evt.currentTarget.setPointerCapture(
                                            evt.pointerId,
                                        );
                                    }
                                }}
                                on:pointermove={(evt) => {
                                    if (
                                        evt.currentTarget.hasPointerCapture(
                                            evt.pointerId,
                                        )
                                    ) {
                                        const svg =
                                            evt.currentTarget.ownerSVGElement;
                                        const pt = svg.createSVGPoint(); // demo is an SVGElement
                                        pt.x = evt.clientX;
                                        pt.y = evt.clientY;
                                        const svgGlobal = pt.matrixTransform(
                                            svg.getScreenCTM().inverse(),
                                        );
                                        const adjusted = forceArg(
                                            {
                                                x:
                                                    ((svgGlobal.x -
                                                        ((arg.anchor?.x ?? 0) /
                                                            2) *
                                                            box.width -
                                                        box.x +
                                                        box.width / 2) /
                                                        box.width) *
                                                        2 -
                                                    2,
                                                y: +(
                                                    ((svgGlobal.y -
                                                        ((arg.anchor?.y ?? 0) /
                                                            2) *
                                                            box.height -
                                                        box.y +
                                                        box.height / 2) /
                                                        box.height) *
                                                        2 -
                                                    2
                                                ),
                                            },
                                            arg.force,
                                        );
                                        argValues[arg.name] = adjusted;
                                        // svgGlobal.x and svgGlobal.y are now in SVG coordinates
                                    }
                                }}
                            >
                                <circle
                                    cx={box.x +
                                        box.width / 2 +
                                        (pos.x * box.width) / 2 +
                                        ((arg.anchor?.x ?? 0) / 2) * box.width}
                                    cy={box.y +
                                        box.height / 2 +
                                        (pos.y * box.height) / 2 +
                                        ((arg.anchor?.y ?? 0) / 2) * box.height}
                                    stroke="none"
                                    r="12"
                                    fill="transparent"
                                    cursor="move"
                                />
                                <circle
                                    cx={box.x +
                                        box.width / 2 +
                                        (pos.x * box.width) / 2 +
                                        ((arg.anchor?.x ?? 0) / 2) * box.width}
                                    cy={box.y +
                                        box.height / 2 +
                                        (pos.y * box.height) / 2 +
                                        ((arg.anchor?.y ?? 0) / 2) * box.height}
                                    stroke="gold"
                                    r="5"
                                    fill="yellow"
                                    cursor="move"
                                    class="indicator"
                                />
                                <text
                                    visibility="hidden"
                                    pointer-events="none"
                                    x={box.x +
                                        box.width / 2 +
                                        (pos.x * box.width) / 2 +
                                        ((arg.anchor?.x ?? 0) / 2) * box.width}
                                    y={box.y +
                                        box.height / 2 +
                                        (pos.y * box.height) / 2 +
                                        ((arg.anchor?.y ?? 0) / 2) * box.height}
                                    >{pos.x},{pos.y}</text
                                >
                            </g>
                        {/each}
                    {/if}
                </svg>
                <footer>{deco.name}</footer>
                <footer style="display: flex;">
                    <input
                        readonly
                        class="code"
                        type="text"
                        value={deco.paths.map((p) => serializePath(p))}
                    />
                    <button on:click={exportElixir(deco)}>Ex</button>
                </footer>
            </article>
        {/each}
    </div>
</article>

<style>
    dialog {
        position: fixed;
        top: 2em;
        z-index: 1000;
    }
    article {
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 100%;
        gap: 1em;
    }
    form {
        display: flex;
        gap: 1ex;
        align-items: stretch;
    }

    input[type="text"] {
        font: inherit;
        padding: 1ex;
        flex-grow: 1;
        margin: 0;
        flex-shrink: 1;
        box-sizing: border-box;
        width: 100%;
    }

    button {
        font: inherit;
        padding: 1ex 2ex;
        cursor: pointer;
        margin: 0;
        border: 1px solid #aaa;
        border-radius: 5px;
        background-color: #08f;
        color: #fff;
        background-image: linear-gradient(#fff2, #0002);
        background-size: cover;
        background-repeat: no-repeat;
    }

    button:hover {
        background-color: #08f;
        background-image: linear-gradient(#fff1, #0001);
    }
    button:active {
        background-color: #08f;
        background-image: linear-gradient(#0002, #fff2);
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
        flex-shrink: 1;
        gap: 1ex;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(9em, 1fr));
        grid-auto-rows: 12em;
        gap: 3em 1em;
        padding-bottom: 3em;
    }
    .cell {
        background: #f0f0f0;
        text-align: center;
        font-size: small;
        width: 100%;
        padding: 1ex;
        box-sizing: border-box;
    }

    .code {
        font: inherit;
        padding: ex;
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

    .arg-handle:hover > .indicator {
        fill: gold;
        cursor: move;
    }

    .arg-handle:active > .indicator {
        fill: gold;
        stroke: yellow;
    }
</style>
