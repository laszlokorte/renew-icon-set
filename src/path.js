export function serializeCoord(dim, relative, coord) {
  const sizes = {
    x: "width",
    y: "height",
  };

  const ops = {
    max: (a, b) => Math.max(a, b),
    min: (a, b) => Math.min(a, b),
    sum: (a, b) => a + b,
  };

  // const origin = box[dim];
  const base = `${coord.value} ${coord.unit}`;
  const offset = `${coord.offset.operation}(${coord.offset.value_static}, ${coord.offset.dynamic_value} * ${coord.offset.dynamic_unit})`;

  return `${base} + ${offset}`;
}

export function buildCoord(box, dim, relative, coord, argValues) {
  const units = {
    maxsize: Math.max(box.width, box.height),
    minsize: Math.min(box.width, box.height),
    width: box.width,
    height: box.height,
  };

  const sizes = {
    x: "width",
    y: "height",
  };

  const ops = {
    max: (a, b) => Math.max(a, b),
    min: (a, b) => Math.min(a, b),
    sum: (a, b) => a + b,
  };

  const origin = box[dim];
  const base = coord.value * units[coord.unit];
  const offset =
    ops[coord.offset.operation](
      coord.offset.value_static,
      units[coord.offset.dynamic_unit] * coord.offset.dynamic_value,
    ) *
    (argValues && coord.offset.arg
      ? (argValues[coord.offset.arg]?.[dim] ?? 1)
      : 1);

  return (relative ? base : base + origin) + offset;
}

export function buildStep(
  makeCoords,
  startPos,
  { x: currentX, y: currentY },
  step,
  argValues,
) {
  const relative = !!step.relative;
  const vertical = !!step.vertical;
  const horizontal = !!step.horizontal;
  const diagonal = vertical && horizontal;
  const arc = !!step.arc;

  if (arc) {
    if (step.arc.centered) {
      const cx = makeCoords("x", false, step.arc.rx, argValues);
      const cy = makeCoords("y", false, step.arc.ry, argValues);

      const x = step.horizontal
        ? makeCoords("x", step.relative, step.horizontal, argValues)
        : 0;
      const y = step.vertical
        ? makeCoords("y", step.relative, step.vertical, argValues)
        : 0;
      const r = Math.hypot(currentX - cx, currentY - cy);
      const a1 = Math.atan2(currentY - cy, currentX - cx);
      const a2 = Math.atan2(y - cy, x - cx);
      let delta = a2 - a1;
      delta = (delta + 2 * Math.PI) % (2 * Math.PI);

      const autoLarge = delta > Math.PI ? 1 : 0;
      const params =
        r +
        ", " +
        r +
        ", " +
        (step.arc.angle ? 1 : 0) +
        ", " +
        (step.arc.large ? (autoLarge ? 1 : 0) : 0) +
        ", " +
        (step.arc.large ? (step.arc.sweep ? 1 : 0) : autoLarge ? 0 : 1);
      return {
        string: (relative ? "a" : "A") + " " + params + ", " + x + ", " + y,
        pos: relative
          ? {
              x: currentX + x,
              y: currentY + y,
            }
          : {
              x,
              y,
            },
      };
    } else {
      const rx = makeCoords("x", true, step.arc.rx, argValues);
      const ry = makeCoords("y", true, step.arc.ry, argValues);
      const params =
        rx +
        ", " +
        ry +
        ", " +
        (step.arc.angle ? 1 : 0) +
        ", " +
        (step.arc.large ? 1 : 0) +
        ", " +
        (step.arc.sweep ? 1 : 0);

      if (diagonal) {
        const x = makeCoords("x", step.relative, step.horizontal, argValues);
        const y = makeCoords("y", step.relative, step.vertical, argValues);

        return {
          string: (relative ? "a" : "A") + " " + params + ", " + x + ", " + y,
          pos: relative
            ? {
                x: currentX + x,
                y: currentY + y,
              }
            : {
                x,
                y,
              },
        };
      } else if (vertical) {
        const y = makeCoords("y", step.relative, step.vertical, argValues);
        return {
          string:
            (relative ? "a" : "A") +
            " " +
            params +
            ", " +
            (relative ? 0 : currentX) +
            ", " +
            y,
          pos: relative
            ? {
                x: currentX,
                y: currentY + y,
              }
            : {
                x: currentX,
                y,
              },
        };
      } else if (horizontal) {
        const x = makeCoords("x", step.relative, step.horizontal, argValues);
        return {
          string:
            (relative ? "a" : "A") +
            " " +
            params +
            ", " +
            x +
            ", " +
            (relative ? 0 : currentY),
          pos: relative
            ? {
                x: currentX + x,
                y: currentY,
              }
            : {
                x,
                y: currentY,
              },
        };
      } else {
        return {
          string:
            (relative ? "a" : "A") +
            " " +
            params +
            ", " +
            (relative ? 0 : currentX) +
            ", " +
            (relative ? 0 : currentY),
          pos: relative
            ? {
                x: currentX,
                y: currentY,
              }
            : {
                x: currentX,
                y: currentY,
              },
        };
      }
    }
  } else {
    if (diagonal) {
      const x = makeCoords("x", step.relative, step.horizontal, argValues);
      const y = makeCoords("y", step.relative, step.vertical, argValues);
      return {
        string: (relative ? "l" : "L") + " " + x + ", " + y,
        pos: relative
          ? {
              x: currentX + x,
              y: currentY + y,
            }
          : {
              x,
              y,
            },
      };
    } else if (vertical) {
      const y = makeCoords("y", step.relative, step.vertical, argValues);
      return {
        string: (relative ? "v" : "V") + " " + y,
        pos: relative
          ? {
              x: currentX,
              y: currentY + y,
            }
          : {
              x: currentX,
              y,
            },
      };
    } else if (horizontal) {
      const x = makeCoords("x", step.relative, step.horizontal, argValues);
      return {
        string: (relative ? "h" : "H") + " " + x,
        pos: relative
          ? {
              x: currentX + x,
              y: currentY,
            }
          : {
              x,
              y: currentY,
            },
      };
    } else {
      return {
        string: relative ? "z" : "Z",
        pos: startPos,
      };
    }
  }
}

export function buildPath(box, path, argValues) {
  return path.segments
    .map((segment) => {
      const start = {
        x: buildCoord(box, "x", segment.relative, segment.x, argValues),
        y: buildCoord(box, "y", segment.relative, segment.y, argValues),
      };

      return segment.steps.reduce(
        ({ string: accString, pos: currentPos }, step) => {
          const currentStep = buildStep(
            (...args) => buildCoord(box, ...args),
            start,
            currentPos,
            step,
            argValues,
          );
          return {
            string: accString + currentStep.string,
            pos: currentStep.pos,
          };
        },
        {
          string: `${segment.relative ? "m" : "M"} ${start.x} ${start.y} `,
          pos: start,
        },
      ).string;
    })
    .join(" ");
}

export function serializePath(path) {
  return path.segments
    .map((segment) => {
      const start = {
        x: serializeCoord("x", segment.relative, segment.x),
        y: serializeCoord("y", segment.relative, segment.y),
      };

      return segment.steps.reduce(
        ({ string: accString, pos: currentPos }, step) => {
          const currentStep = buildStep(
            serializeCoord,
            start,
            currentPos,
            step,
          );
          return {
            string: accString + " " + currentStep.string,
            pos: currentStep.pos,
          };
        },
        {
          string: `${segment.relative ? "m" : "M"} ${start.x} ${start.y} `,
          pos: start,
        },
      ).string;
    })
    .join(" ");
}
