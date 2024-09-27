export default [{
    "name": "rect",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-double",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-double-proportional",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.1
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.1
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.1
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.1
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": -1
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.1
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "maxsize",
          "value": -0.1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "maxsize",
          "value": -0.1
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-double-in",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "height",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 10
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "height",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 10
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "ellipse",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "ellipse-double",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "ellipse-double-in",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "width",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "height",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "width",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "height",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": 0.25,
            "operation": "min",
            "value_static": 10
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  },

  {
    "name": "pie",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          },
          "relative": true
        }, {

          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          },
        }, {
          relative: true,
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-horizontal",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "height",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "height",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-vertical",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -1,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-right",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-half-center-right",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-half-right",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-left",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-half-center-left",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-half-left",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-up",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-half-center-up",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-half-up",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-down",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 1
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-half-center-down",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-half-down",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 1
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-sw",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-ne",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-nw",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "triangle-se",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 1
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond-double-rel",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.7
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.7
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "max",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.7
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.7
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "max",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.7
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "max",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.7
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "max",
            "value_static": 0
          },
          "unit": "height",
          "value": -0.2
        }
      }, {
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond-full-height",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond-full-width",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond-full-height-double",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond-full-width-double",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": -0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-clipped",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 20
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "octagon",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.4
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.3
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.3
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.3
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.3
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.4
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.3
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.3
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.4
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.3
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "octagon-proper",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.25
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.25
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.25
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.25
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.25
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.25
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.25
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.25
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "maxsize",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "maxsize",
          "value": -0.25
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "octagon-square",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": true,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.2
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.4
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.4
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.4
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.4
          }
        }, {
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "maxsize",
          "value": -0.6
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-clipped-paper",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 20
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-clipped-paper-proportional",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-fold-paper",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 20
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -20
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-fold-paper-proportional",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-handle",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }, {
        "relative": false,
        "steps": [{
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": 1,
            "operation": "min",
            "value_static": 20
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-horizontal-black",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "height",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "height",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-horizontal-black-diamond",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "height",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "height",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -20
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-horizontal-black-diamond-fit",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.25,
            "operation": "max",
            "value_static": -10
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -20
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-horizontal-black-diamond-black",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "height",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "height",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -20
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-horizontal-black-diamond-black-fit",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.25,
            "operation": "max",
            "value_static": -10
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -20
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-horizontal-black-diamond-quad",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "height",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "height",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-horizontal-black-diamond-quad-fit",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.25,
            "operation": "max",
            "value_static": -10
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-vertical-black",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -1,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-vertical-black-diamond",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -1,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -20
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-vertical-black-diamond-fit",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.25,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -20
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-vertical-black-diamond-black",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -1,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -20
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-vertical-black-diamond-black-fit",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.25,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -20
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-vertical-black-diamond-quad",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 1,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -1,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": -0.5,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bar-vertical-black-diamond-quad-fit",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 0
          },
          "relative": true
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.25,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.25,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.25,
              "operation": "min",
              "value_static": 10
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "hexagon",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.5
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.5
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.5,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "pill",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": true,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 0
              },
              "unit": "minsize",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 0
              },
              "unit": "minsize",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.5
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.5,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "arc": {
            "angle": 0,
            "large": true,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 0
              },
              "unit": "minsize",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 0
              },
              "unit": "minsize",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "arc": {
            "angle": 0,
            "large": true,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 0
              },
              "unit": "minsize",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 0
              },
              "unit": "minsize",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.5
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "arc": {
            "angle": 0,
            "large": true,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 0
              },
              "unit": "minsize",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 0
              },
              "unit": "minsize",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.5,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bracket-left",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.4,
              "operation": "min",
              "value_static": 10
            },
            "unit": "minsize",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.4,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.4,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bracket-right",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.4,
              "operation": "min",
              "value_static": 10
            },
            "unit": "minsize",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.4,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.4,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bracket-both",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -10
            },
            "unit": "minsize",
            "value": 0
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.3,
              "operation": "max",
              "value_static": -40
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 10
            },
            "unit": "minsize",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.3,
              "operation": "max",
              "value_static": -30
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }, {
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 10
            },
            "unit": "minsize",
            "value": 0
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.3,
              "operation": "min",
              "value_static": 40
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 10
            },
            "unit": "minsize",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.3,
              "operation": "min",
              "value_static": 30
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bracket-left-outer",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "minsize",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bracket-right-outer",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "minsize",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "bracket-both-outer",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.45,
              "operation": "max",
              "value_static": -40
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "minsize",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.45,
              "operation": "max",
              "value_static": -40
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 10
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "height",
          "value": 0
        }
      }, {
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "minsize",
            "value": 0
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.45,
              "operation": "min",
              "value_static": 40
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "minsize",
            "value": 0
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.45,
              "operation": "min",
              "value_static": 40
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond-plus",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": true,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.2
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.2
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.2
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.1
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.2
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": -0.25
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond-plus-big",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 5
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -5
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.3,
              "operation": "min",
              "value_static": 30
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 5
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 5
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.3,
              "operation": "min",
              "value_static": 30
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -5
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 5
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.3,
              "operation": "max",
              "value_static": -30
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -5
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -5
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.3,
              "operation": "max",
              "value_static": -30
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.3,
            "operation": "max",
            "value_static": -30
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "diamond-X",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.5
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.5
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": true,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.05
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.05
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.05
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.05
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.17
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": -0.22
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-double-black",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -10
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": -10
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-double-proportional-black",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.1
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.1
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": 0.1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.1
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.1
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": -1
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "maxsize",
            "value": -0.1
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "maxsize",
          "value": -0.1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "maxsize",
          "value": -0.1
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-double-in-black",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -10
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "height",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -10
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 10
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 10
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "height",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 10
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "ellipse-double-black",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 10
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "ellipse-double-in-black",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "width",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "height",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "width",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "height",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": -0.25,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "ellipse-triple-black",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": -20
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "sum",
                "value_static": 10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 20
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 10
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "width",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "height",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 20
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "width",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "height",
                "dynamic_value": -0.25,
                "operation": "max",
                "value_static": -10
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "width",
              "dynamic_value": -0.5,
              "operation": "max",
              "value_static": -20
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "width",
            "dynamic_value": -0.25,
            "operation": "max",
            "value_static": -10
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "ellipse-mail",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.3
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.6
          },
          "relative": true
        }, {
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": true,
        "steps": [{
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.6
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.3
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": -0.2
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "ellipse-mail-filled",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -1
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.3
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.1,
              "operation": "max",
              "value_static": -6
            },
            "unit": "minsize",
            "value": -0.2
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.6
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.1,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          }
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.1,
            "operation": "min",
            "value_static": 6
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.3
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.6
          },
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "cross",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.5
        }
      }, {
        "relative": true,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.05
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.05
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.05
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.05
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.05
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.17
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.17
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.17
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": -0.22
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-fold-paper-proportional-striped",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.6
          }
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.2,
            "operation": "min",
            "value_static": 15
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.9
        }
      }, {
        "relative": false,
        "steps": [{
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.6
          }
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.9
        }
      }, {
        "relative": false,
        "steps": [{
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.6
          }
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": -0.2,
            "operation": "max",
            "value_static": -15
          },
          "unit": "width",
          "value": 0.5
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.9
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-fold-paper-proportional-arrow-right",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.4,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.9
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.2
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.2
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.2
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.4,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.9
          },
          "relative": true
        }, {
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.2
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.8
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "rect-fold-paper-proportional-arrow-right-black",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.5,
              "operation": "min",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.4
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0.5,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 1
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.4
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": -0.4,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.9
          },
          "relative": true
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "minsize",
            "value": 0.2
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.2
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "minsize",
            "value": -0.2
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.2
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.1
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0.4,
              "operation": "sum",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.9
          },
          "relative": true
        }, {
          "relative": true
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "minsize",
          "value": 0.2
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "sum",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.8
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "double-arrow",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.4
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.3
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.3
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.6
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": -0.6
          },
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "relative": true,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": -0.3
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  }, {
    "name": "cone-arrow",
    "paths": [{
      "fill_color": "black",
      "segments": [{
        "relative": false,
        "steps": [{
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.5
          }
        }, {
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.2
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 1
          }
        }, {
          "arc": {
            "angle": 0,
            "large": true,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.2
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.5
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0.2
          },
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0
          }
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0.2
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0
        }
      }],
      "stroke_color": "black"
    }]
  },

  {
    "name": "database",
    "paths": [{
      "fill_color": "white",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.2
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": true
        }, {
          "relative": false,
          "vertical": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "height",
            "value": 0.2
          }
        }, {
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.2
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 0
          },
          "relative": false
        }, {
          "relative": false
        }],
        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.8
        }
      }],
      "stroke_color": "black"
    }, {
      "fill_color": "none",
      "segments": [{
        "relative": false,
        "steps": [{
          "arc": {
            "angle": 0,
            "large": false,
            "rx": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 0.5
            },
            "ry": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.2
            },
            "sweep": false
          },
          "horizontal": {
            "offset": {
              "dynamic_unit": "minsize",
              "dynamic_value": 0,
              "operation": "min",
              "value_static": 0
            },
            "unit": "width",
            "value": 1
          },
          "relative": false
        }, ],

        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.2
        }
      }, {
        "relative": true,
        "steps": [{
            "vertical": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.1
            },
            "relative": true
          },

          {
            "arc": {
              "angle": 0,
              "large": true,
              "rx": {
                "offset": {
                  "dynamic_unit": "minsize",
                  "dynamic_value": 0,
                  "operation": "min",
                  "value_static": 0
                },
                "unit": "width",
                "value": 0.5
              },
              "ry": {
                "offset": {
                  "dynamic_unit": "minsize",
                  "dynamic_value": 0,
                  "operation": "min",
                  "value_static": 0
                },
                "unit": "height",
                "value": 0.2
              },
              "sweep": false
            },
            "horizontal": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": -1
            },
            "relative": true
          }, {
            "vertical": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "height",
              "value": 0.1
            },
            "relative": true
          },

          {
            "arc": {
              "angle": 0,
              "large": false,
              "rx": {
                "offset": {
                  "dynamic_unit": "minsize",
                  "dynamic_value": 0,
                  "operation": "min",
                  "value_static": 0
                },
                "unit": "width",
                "value": 0.5
              },
              "ry": {
                "offset": {
                  "dynamic_unit": "minsize",
                  "dynamic_value": 0,
                  "operation": "min",
                  "value_static": 0
                },
                "unit": "height",
                "value": 0.2
              },
              "sweep": false
            },
            "horizontal": {
              "offset": {
                "dynamic_unit": "minsize",
                "dynamic_value": 0,
                "operation": "min",
                "value_static": 0
              },
              "unit": "width",
              "value": 1
            },
            "relative": true
          },
        ],

        "x": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "width",
          "value": 0
        },
        "y": {
          "offset": {
            "dynamic_unit": "minsize",
            "dynamic_value": 0,
            "operation": "min",
            "value_static": 0
          },
          "unit": "height",
          "value": 0.0
        }
      }],
      "stroke_color": "black"
    }]
  },
]