/*
So, generate a uniform random number u in [0,1) range, then calculate x by:
x = log(1-u)/(-λ)
x = log(1-uniformRand(0, 1))/(-λ)
where λ is the rate parameter of the exponential distribution. Now, x is a random number with an exponential distribution. Note that log above is ln, the natural logarithm.
*/

import { ISourceOptions } from "tsparticles/types/bundle"
const particlesOptions: ISourceOptions = {
  autoPlay: true,

  background: {
    color: {
      value: "transparent",
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },

  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },

  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: false,
    zIndex: -1,
  },

  detectRetina: true,
  duration: 0,
  fpsLimit: 120,

  /* ################################################# START INTERACTIVITY ################################################# */
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: false,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 50,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },

    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        opacity: 0.1,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
    },
  },
  /* ################################################# END INTERACTIVITY ################################################# */

  manualParticles: [],
  /* ################################################# START PARTICLES ################################################# */
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },

    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: false,
      maxSpeed: 50,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },

    color: {
      value: "#fff",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true,
        },
      },
    },

    groups: {},

    move: {
      angle: {
        offset: 0,
        value: 0,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "left",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: true,
      speed: { min: 0, max: 0.4 },
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: true,
      trail: {
        enable: false,
        length: 10,
        fill: {},
      },
      vibrate: false,
      warp: false,
    },

    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: 0,
      value: 900,
    },

    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 0.25,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },

    reduceDuplicates: false,

    shadow: {
      blur: 3,
      color: {
        value: "#fff",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },

    shape: {
      close: true,
      fill: true,
      options: {
        star: {
          nb_sides: 8,
        },
      },
      type: "star",
    },

    size: {
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: {
        min: 0,
        max: 2,
      },
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },

    stroke: {
      width: 0,
    },

    zIndex: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },

    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },

    rotate: {
      random: {
        enable: true,
        minimumValue: 0,
      },
      value: 360,
      animation: {
        enable: true,
        speed: { min: 0, max: 10 },
        decay: 0,
        sync: false,
      },
      direction: "",
      path: false,
    },

    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {},
      },
    },

    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: 25,
    },

    tilt: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: "clockwise",
      enable: false,
    },

    twinkle: {
      lines: {
        enable: false,
        frequency: 10,
        opacity: 1,
      },
      particles: {
        enable: true,
        color: {
          value: "#fff",
        },
        frequency: 0.001,
        opacity: 1,
      },
    },

    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10,
      },
    },

    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        delay: 0,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },

    links: {
      blink: false,
      color: {
        value: "#fff",
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },

    repulse: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
  },
  /* ################################################# END PARTICLES ################################################# */

  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: [],
}

export default particlesOptions
