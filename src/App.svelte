<script>
	let newDecorations = [
		{
			name: "rect",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-double",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "add",
										static: -10,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "add",
										static: -10,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-double-proportional",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: -0.1,
									unit: "max",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: -0.1,
									unit: "max",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-double-in",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 10,
										rel_value: 0.5,
										rel_unit: "width",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 10,
										rel_value: 0.5,
										rel_unit: "height",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.5,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.5,
											rel_unit: "height",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.5,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "ellipse",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
			],
		},
		{
			name: "ellipse-double",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "add",
										static: -10,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},

				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
			],
		},
		{
			name: "ellipse-double-in",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 10,
										rel_value: 0.25,
										rel_unit: "width",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "width",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "width",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "height",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "width",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "width",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "height",
											},
										},
									},
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-horizontal",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "height",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "height",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-vertical",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "width",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "diamond",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-right",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-half-center-right",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-half-right",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-left",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-half-center-left",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-half-left",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-up",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-half-center-up",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-half-up",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-down",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 1,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: -1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-half-center-down",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-half-down",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 1,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-sw",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-ne",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-nw",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "triangle-sw",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 1,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "diamond-double-rel",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: -0.2,
									unit: "height",
									offset: {
										op: "max",
										static: -0,
										rel_value: -0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.7,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.7,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.7,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.7,
										unit: "width",
										offset: {
											op: "max",
											static: -0,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.7,
										unit: "height",
										offset: {
											op: "max",
											static: -0,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.7,
										unit: "width",
										offset: {
											op: "max",
											static: -0,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "diamond-full-height",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "diamond-full-width",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "diamond-full-height-double",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "add",
										static: -10,
										rel_value: -0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "diamond-full-width-double",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "add",
										static: -10,
										rel_value: -0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-clipped",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 20,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "octagon",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.3,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.4,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.3,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.3,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.4,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.3,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.3,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.3,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.3,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.4,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "octagon-proper",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "max",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: -0.25,
									unit: "max",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.25,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.25,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.25,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.25,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.25,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.25,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.25,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.25,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "octagon-square",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
							},
							segments: [],
						},
						{
							start: {
								relative: true,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: -0.6,
									unit: "max",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.2,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.4,
										unit: "max",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "rect-clipped-paper",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 20,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-clipped-paper-proportional",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-fold-paper",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 20,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "max",
										static: -20,
										rel_value: -0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-fold-paper-proportional",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-handle",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 20,
										rel_value: 1,
										rel_unit: "width",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-horizontal-black",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "height",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "height",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-horizontal-black-diamond",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "height",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "height",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: -20,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -20,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-horizontal-black-diamond-fit",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.25,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -20,
										rel_value: -0.5,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "bar-horizontal-black-diamond-black",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "height",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "height",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: -20,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -20,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-horizontal-black-diamond-black-fit",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.25,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -20,
										rel_value: -0.5,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-horizontal-black-diamond-quad",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "height",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "height",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "bar-horizontal-black-diamond-quad-fit",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.25,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "bar-vertical-black",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "width",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-vertical-black-diamond",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "width",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: -20,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-vertical-black-diamond-fit",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.25,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -20,
										rel_value: -0.5,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-vertical-black-diamond-black",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "width",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: -20,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-vertical-black-diamond-black-fit",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.25,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -20,
										rel_value: -0.5,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bar-vertical-black-diamond-quad",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.5,
										rel_unit: "width",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -1,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "bar-vertical-black-diamond-quad-fit",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.25,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},

								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.25,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.25,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "hexagon",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: -0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "pill",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: -0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										sweep: false,
										large: true,
										rx: {
											value: 0.5,
											unit: "min",
											offset: {
												op: "add",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "min",
											offset: {
												op: "add",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: -0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										sweep: false,
										large: true,
										rx: {
											value: 0.5,
											unit: "min",
											offset: {
												op: "add",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "min",
											offset: {
												op: "add",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										sweep: false,
										large: true,
										rx: {
											value: 0.5,
											unit: "min",
											offset: {
												op: "add",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "min",
											offset: {
												op: "add",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.5,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										sweep: false,
										large: true,
										rx: {
											value: 0.5,
											unit: "min",
											offset: {
												op: "add",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "min",
											offset: {
												op: "add",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bracket-left",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "min",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "bracket-right",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 0,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "min",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "bracket-both",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "min",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -40,
											rel_value: -0.3,
											rel_unit: "width",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "min",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -30,
											rel_value: -0.3,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},

						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "min",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 40,
											rel_value: 0.3,
											rel_unit: "width",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "min",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 30,
											rel_value: 0.3,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "bracket-left-outer",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "min",
										offset: {
											op: "add",
											static: -10,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "bracket-right-outer",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 0,
										unit: "min",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "min",
										offset: {
											op: "add",
											static: -10,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "bracket-both-outer",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "add",
										static: 10,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "add",
										static: -10,
										rel_value: -0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -40,
											rel_value: -0.45,
											rel_unit: "width",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "min",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -40,
											rel_value: -0.45,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},

						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "add",
										static: -10,
										rel_value: -0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "add",
										static: -10,
										rel_value: -0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0,
										unit: "min",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 40,
											rel_value: 0.45,
											rel_unit: "width",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0,
										unit: "min",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 40,
											rel_value: 0.45,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: -0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "diamond-plus",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [],
						},
						{
							start: {
								relative: true,
								y: {
									value: -0.25,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},

								{
									relative: true,
									x: {
										value: 0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.1,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.1,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},

								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "diamond-plus-big",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "max",
										static: -30,
										rel_value: -0.3,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 5,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "max",
											static: -5,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 30,
											rel_value: 0.3,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 5,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 5,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 30,
											rel_value: 0.3,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "max",
											static: -5,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 5,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "max",
											static: -30,
											rel_value: -0.3,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "max",
											static: -5,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "max",
											static: -5,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "max",
											static: -30,
											rel_value: -0.3,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "diamond-X",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.5,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [],
						},
						{
							start: {
								relative: true,
								y: {
									value: -0.22,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.17,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},

								{
									relative: true,
									x: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},

								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "rect-double-black",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "add",
										static: -10,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "add",
										static: -10,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "add",
											static: -10,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-double-proportional-black",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: -0.1,
									unit: "max",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: -0.1,
									unit: "max",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.1,
										unit: "max",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "rect-double-in-black",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 10,
										rel_value: 0.5,
										rel_unit: "width",
									},
								},
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 10,
										rel_value: 0.5,
										rel_unit: "height",
									},
								},
							},
							segments: [
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.5,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "max",
											static: -10,
											rel_value: -0.5,
											rel_unit: "height",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 10,
											rel_value: 0.5,
											rel_unit: "width",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},
		{
			name: "ellipse-double-black",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "add",
										static: 10,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
			],
		},
		{
			name: "ellipse-double-in-black",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.25,
										rel_unit: "width",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "width",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "width",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "height",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "width",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "width",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "height",
											},
										},
									},
								},
							],
						},
					],
				},
			],
		},
		{
			name: "ellipse-triple-black",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "add",
										static: 10,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "add",
											static: -20,
											rel_value: -0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "add",
											static: 20,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "add",
												static: 10,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "max",
										static: -10,
										rel_value: -0.25,
										rel_unit: "width",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 20,
											rel_value: 0.5,
											rel_unit: "width",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "width",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "height",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "max",
											static: -20,
											rel_value: -0.5,
											rel_unit: "width",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "width",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "max",
												static: -10,
												rel_value: -0.25,
												rel_unit: "height",
											},
										},
									},
								},
							],
						},
					],
				},
			],
		},
		{
			name: "ellipse-mail",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.3,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},

								{
									relative: true,
									x: {
										value: -0.6,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{ relative: true },
							],
						},
						{
							start: {
								relative: true,
								x: {
									value: 0.3,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: -0.2,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.6,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: "ellipse-mail",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: true,
									x: {
										value: -1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: false,
										rx: {
											value: 0.5,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 6,
										rel_value: 0.1,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.3,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "max",
											static: -6,
											rel_value: -0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.6,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.1,
											rel_unit: "min",
										},
									},
								},
							],
						},

						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.3,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.6,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: "cross",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0.5,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [],
						},
						{
							start: {
								relative: true,
								y: {
									value: -0.22,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.17,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},

								{
									relative: true,
									x: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.05,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.17,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},

								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "rect-fold-paper-proportional-striped",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "min",
										static: 15,
										rel_value: 0.2,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.9,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									y: {
										value: 0.6,
										unit: "min",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
							],
						},
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.9,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									y: {
										value: 0.6,
										unit: "min",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
							],
						},
						{
							start: {
								relative: false,
								x: {
									value: 0.5,
									unit: "width",
									offset: {
										op: "max",
										static: -15,
										rel_value: -0.2,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.9,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									y: {
										value: 0.6,
										unit: "min",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
							],
						},
					],
				},
			],
		},

		{
			name: "rect-fold-paper-proportional-arrow-right",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.2,
									unit: "min",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.8,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.9,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: -0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.2,
										unit: "min",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.2,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.2,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.9,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "rect-fold-paper-proportional-arrow-right-black",
			paths: [
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "white",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 1,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0.5,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.4,
									unit: "min",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.4,
										unit: "min",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0.5,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								x: {
									value: 0.2,
									unit: "min",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								y: {
									value: 0.8,
									unit: "height",
									offset: {
										op: "add",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									x: {
										value: 0.9,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: -0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.2,
										unit: "min",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.2,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.2,
										unit: "min",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: -0.2,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: 0.1,
										unit: "height",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.9,
										unit: "width",
										offset: {
											op: "add",
											static: 0,
											rel_value: 0.4,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "double-arrow",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: true,
									y: {
										value: 0.3,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.4,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.3,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: 0.6,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									x: {
										value: -0.6,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: true,
									y: {
										value: -0.3,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									x: {
										value: 0,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		{
			name: "cone-arrow",
			paths: [
				{
					fill: "black",
					stroke: "black",
					parts: [
						{
							start: {
								relative: false,
								y: {
									value: 0,
									unit: "height",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
								x: {
									value: 0.2,
									unit: "width",
									offset: {
										op: "min",
										static: 0,
										rel_value: 0,
										rel_unit: "min",
									},
								},
							},
							segments: [
								{
									relative: false,
									y: {
										value: 0.5,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 1,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 1,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.2,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
								},
								{
									relative: false,
									y: {
										value: 0,
										unit: "height",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									x: {
										value: 0.2,
										unit: "width",
										offset: {
											op: "min",
											static: 0,
											rel_value: 0,
											rel_unit: "min",
										},
									},
									arc: {
										angle: 0,
										sweep: false,
										large: true,
										rx: {
											value: 0.2,
											unit: "width",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
										ry: {
											value: 0.5,
											unit: "height",
											offset: {
												op: "min",
												static: 0,
												rel_value: 0,
												rel_unit: "min",
											},
										},
									},
								},
								{
									relative: false,
								},
							],
						},
					],
				},
			],
		},

		// {
		// 	name: "example",
		// 	paths: [
		// 		{
		// 			fill: "black",
		// 			parts: [
		// 				{
		// 					start: {
		// 						relative: false,
		// 						x: {value: 0, unit: "width", offset: {op:"min",static: 0, rel_value:0, rel_unit: "min"}},
		// 						y: {value: 0, unit: "height", offset: {op:"min",static: 0, rel_value:0, rel_unit: "min"}},
		// 					},
		// 					segments: [
		// 						{
		// 							relative: false,
		// 						x: {value: 1, unit: "width", offset: {op:"min",static: 0, rel_value:0, rel_unit: "min"}},
		// 						y: {value: 0, unit: "height", offset: {op:"min",static: 0, rel_value:0, rel_unit: "min"}},
		// 							arc: {
		// 								angle:0,
		// 								sweep:false,
		// 								large: false,
		// 								rx: {value: 0, unit: "width/height/min/max/null", offset: {op:"min",static: 0, rel_value:0, rel_unit: "width/height/min/max/null"}},
		// 								ry: {value: 0, unit: "width/height/min/max/null", offset: {op:"min",static: 0, rel_value:0, rel_unit: "width/height/min/max/null"}},
		// 							}
		// 						},
		// 					]
		// 				}
		// 			]
		// 		}
		// 	]
		// }
	];

	const box = {
		x: 50,
		y: 80,
		width: 100,
		height: 100,
	};

	function clampAbs(v, max) {
		return Math.sign(v) * Math.min(Math.abs(v), max);
	}

	function newCoord(box, dim, relative, coord) {
		const units = {
			max: Math.max(box.width, box.height),
			min: Math.min(box.width, box.height),
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
			add: (a, b) => a + b,
		};

		const origin = box[dim];
		const base = coord.value * units[coord.unit];
		const offset = ops[coord.offset.op](
			coord.offset.static,
			units[coord.offset.rel_unit] * coord.offset.rel_value,
		);
		return (relative ? base : base + origin) + offset;
	}

	function newSegment(box, startPos, { x: currentX, y: currentY }, segment) {
		const relative = !!segment.relative;
		const vertical = !!segment.y;
		const horizontal = !!segment.x;
		const diagonal = vertical && horizontal;
		const arc = !!segment.arc;

		if (arc) {
			const rx = newCoord(box, "x", true, segment.arc.rx);
			const ry = newCoord(box, "y", true, segment.arc.ry);
			const params =
				rx +
				"," +
				ry +
				"," +
				(segment.arc.angle ? 1 : 0) +
				"," +
				(segment.arc.sweep ? 1 : 0) +
				"," +
				(segment.arc.large ? 1 : 0);

			if (diagonal) {
				const x = newCoord(box, "x", segment.relative, segment.x);
				const y = newCoord(box, "y", segment.relative, segment.y);

				return {
					string: (relative ? "a" : "A") + params + "," + x + "," + y,
					pos: relative
						? { x: currentX + x, y: currentY + y }
						: { x, y },
				};
			} else if (vertical) {
				const y = newCoord(box, "y", segment.relative, segment.y);
				return {
					string:
						(relative ? "a" : "A") +
						params +
						"," +
						(relative ? 0 : currentX) +
						"," +
						y,
					pos: relative
						? { x: currentX, y: currentY + y }
						: { x: currentX, y },
				};
			} else if (horizontal) {
				const x = newCoord(box, "x", segment.relative, segment.x);
				return {
					string:
						(relative ? "a" : "A") +
						params +
						"," +
						x +
						"," +
						(relative ? 0 : currentY),
					pos: relative
						? { x: currentX + x, y: currentY }
						: { x, y: currentY },
				};
			} else {
				return {
					string:
						(relative ? "a" : "A") +
						params +
						"," +
						(relative ? 0 : currentX) +
						"," +
						(relative ? 0 : currentY),
					pos: relative
						? { x: currentX + x, y: currentY + y }
						: { x: currentX, y: currentY },
				};
			}
		} else {
			if (diagonal) {
				const x = newCoord(box, "x", segment.relative, segment.x);
				const y = newCoord(box, "y", segment.relative, segment.y);
				return {
					string: (relative ? "l" : "L") + x + "," + y,
					pos: relative
						? { x: currentX + x, y: currentY + y }
						: { x, y },
				};
			} else if (vertical) {
				const y = newCoord(box, "y", segment.relative, segment.y);
				return {
					string: (relative ? "v" : "V") + y,
					pos: relative
						? { x: currentX, y: currentY + y }
						: { x: currentX, y },
				};
			} else if (horizontal) {
				const x = newCoord(box, "x", segment.relative, segment.x);
				return {
					string: (relative ? "h" : "H") + x,
					pos: relative
						? { x: currentX + x, y: currentY }
						: { x, y: currentY },
				};
			} else {
				return {
					string: relative ? "z" : "Z",
					pos: startPos,
				};
			}
		}
	}

	function newPath(box, path) {
		return path.parts
			.map((part) => {
				const start = {
					x: newCoord(box, "x", part.start.relative, part.start.x),
					y: newCoord(box, "y", part.start.relative, part.start.y),
				};

				return part.segments.reduce(
					({ string: accString, pos: currentPos }, seg) => {
						const currentSeg = newSegment(
							box,
							start,
							currentPos,
							seg,
						);
						return {
							string: accString + currentSeg.string,
							pos: currentSeg.pos,
						};
					},
					{
						string: `${part.start.relative ? "m" : "M"} ${start.x} ${start.y}`,
						pos: start,
					},
				).string;
			})
			.join(" ");
	}
</script>

<header>
	<h2>Renew Icons</h2>
	<div>
		<label
			>Width: <input
				type="range"
				min={0}
				step=".1"
				max={100}
				bind:value={box.width}
			/>
		</label><br />
		<label
			>Height: <input
				type="range"
				min={0}
				step=".1"
				max={100}
				bind:value={box.height}
			/>
		</label>
	</div>
</header>

<div class="grid">
	{#each newDecorations as deco}
		<article class="cell">
			<svg
				viewBox="{box.x - 30} {box.y - 30} {box.width +
					60} {box.height + 60}"
			>
				<rect {...box} fill="#0001"></rect>
				{#each deco.paths as path}
					<path
						d={newPath(box, path)}
						fill={path.fill}
						stroke={path.stroke}
						vector-effect="non-scaling-stroke"
						stroke-width="0.5"
						fill-rule="evenodd"
					/>
				{/each}
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

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		background: #fffa;
		right: 0;
		padding: 1em;
		font-family: monospace;
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
		margin-top: 8em;
	}
	.cell {
		background: #e0faff;
		text-align: center;
		font-size: small;
		width: 100%;
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
	}

	label {
		display: flex;
		align-items: center;
		gap: 1em;
	}
</style>
