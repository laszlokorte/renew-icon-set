export function exportElixir(deco) {
  return {
    name: deco.name,
    paths: deco.paths.map((p, pi) => ({
      ...p,
      sort: pi,
      segments: p.segments.map((s, si) => ({
        sort: si,
        steps: s.steps.map((st, sti) => ({
          sort: sti,
          relative: st.relative,
          vertical: !st.vertical
            ? null
            : {
                y_offset_dynamic_unit: st.vertical.offset.dynamic_unit,
                y_offset_dynamic_value: st.vertical.offset.dynamic_value,
                y_offset_operation: st.vertical.offset.operation,
                y_offset_value_static: st.vertical.offset.value_static,
                y_unit: st.vertical.unit,
                y_value: st.vertical.value,
              },
          horizontal: !st.horizontal
            ? null
            : {
                x_offset_dynamic_unit: st.horizontal.offset.dynamic_unit,
                x_offset_dynamic_value: st.horizontal.offset.dynamic_value,
                x_offset_operation: st.horizontal.offset.operation,
                x_offset_value_static: st.horizontal.offset.value_static,
                x_unit: st.horizontal.unit,
                x_value: st.horizontal.value,
              },
          arc: !st.arc
            ? null
            : {
                angle: 0,
                large: false,
                rx_offset_dynamic_unit: st.arc.rx.offset.dynamic_unit,
                rx_offset_dynamic_value: st.arc.rx.offset.dynamic_value,
                rx_offset_operation: st.arc.rx.offset.operation,
                rx_offset_value_static: st.arc.rx.offset.value_static,
                rx_unit: st.arc.rx.unit,
                rx_value: st.arc.rx.value,
                ry_offset_dynamic_unit: st.arc.ry.offset.dynamic_unit,
                ry_offset_dynamic_value: st.arc.ry.offset.dynamic_value,
                ry_offset_operation: st.arc.ry.offset.operation,
                ry_offset_value_static: st.arc.ry.offset.value_static,
                ry_unit: st.arc.ry.unit,
                ry_value: st.arc.ry.value,
                sweep: false,
              },
        })),

        x_offset_dynamic_unit: s.x.offset.dynamic_unit,
        x_offset_dynamic_value: s.x.offset.dynamic_value,
        x_offset_operation: s.x.offset.operation,
        x_offset_value_static: s.x.offset.value_static,
        x_unit: s.x.unit,
        x_value: s.x.value,

        y_offset_dynamic_unit: s.y.offset.dynamic_unit,
        y_offset_dynamic_value: s.y.offset.dynamic_value,
        y_offset_operation: s.y.offset.operation,
        y_offset_value_static: s.y.offset.value_static,
        y_unit: s.y.unit,
        y_value: s.y.value,
      })),
    })),
  };
}
