! function ($) {
    "use strict";
    var BgHandler = function ($scope, $) {
        var bg_row_elem, section_id, animation_type, style, hideMaxWidth, hideMinWidth, winWidth, canvas_opacity, prepend_content, animation_birds, animation_fog, animation_waves, animation_net, animation_dots, animation_custom, animation_all_particles;
        $scope.hasClass("pp-bg-effects-yes") && (bg_row_elem = elementorFrontend.isEditMode() ? $scope.find(".pp-background-wrapper") : $scope, section_id = $scope.data("id"), animation_type = bg_row_elem.data("animation-type"), style = "", hideMaxWidth = bg_row_elem.data("hide-max-width"), hideMinWidth = bg_row_elem.data("hide-min-width"), winWidth = $(window).width(), canvas_opacity = 1, prepend_content = function (e) {
            elementorFrontend.isEditMode() ? "particles" === animation_type && "nasa" === animation_type && "bubble" === animation_type && "snow" === animation_type && "custom" === animation_type || bg_row_elem.css("opacity", e) : $('<div class="pp-background-wrapper" id="pp-background-' + section_id + '"' + (' style="opacity: ' + e + ';"') + "></div>").insertBefore(bg_row_elem.find(".elementor-container"))
        }, animation_birds = function () {
            var e = bg_row_elem.data("bird-bg-color"),
                o = bg_row_elem.data("bird-color-1"),
                a = bg_row_elem.data("bird-color-2"),
                t = bg_row_elem.data("bird-color-mode"),
                n = bg_row_elem.data("bird-quantity"),
                i = bg_row_elem.data("bird-size"),
                r = bg_row_elem.data("bird-wing-span"),
                l = bg_row_elem.data("bird-speed-limit"),
                d = bg_row_elem.data("bird-separation"),
                _ = bg_row_elem.data("bird-alignment"),
                c = bg_row_elem.data("bird-cohesion");
            VANTA.BIRDS({
                el: "#pp-background-" + section_id,
                backgroundColor: new THREE.Color(parseInt(e)),
                color1: new THREE.Color(parseInt(o)),
                color2: new THREE.Color(parseInt(a)),
                colorMode: t,
                quantity: n,
                birdSize: i,
                wingSpan: r,
                speedLimit: l,
                separation: d,
                alignment: _,
                cohesion: c
            })
        }, animation_fog = function () {
            var e = bg_row_elem.data("fog-highlight-color"),
                o = bg_row_elem.data("fog-midtone-color"),
                a = bg_row_elem.data("fog-lowlight-color"),
                t = bg_row_elem.data("fog-base-color"),
                n = bg_row_elem.data("fog-blur-factor"),
                i = bg_row_elem.data("fog-zoom"),
                r = bg_row_elem.data("fog-speed");
            VANTA.FOG({
                el: "#pp-background-" + section_id,
                highlightColor: new THREE.Color(parseInt(e)),
                midtoneColor: new THREE.Color(parseInt(o)),
                lowlightColor: new THREE.Color(parseInt(a)),
                baseColor: new THREE.Color(parseInt(t)),
                blurFactor: n,
                zoom: i,
                speed: r
            })
        }, animation_waves = function () {
            var e = bg_row_elem.data("waves-color"),
                o = bg_row_elem.data("waves-shininess"),
                a = bg_row_elem.data("waves-height"),
                t = bg_row_elem.data("waves-zoom"),
                n = bg_row_elem.data("waves-speed");
            VANTA.WAVES({
                el: "#pp-background-" + section_id,
                shininess: o,
                color: new THREE.Color(parseInt(e)),
                waveHeight: a,
                zoom: t,
                waveSpeed: n
            })
        }, animation_net = function () {
            var e = bg_row_elem.data("net-color"),
                o = bg_row_elem.data("net-bg-color"),
                a = bg_row_elem.data("net-points"),
                t = bg_row_elem.data("net-max-distance"),
                n = bg_row_elem.data("net-spacing"),
                i = bg_row_elem.data("net-show-dot");
            VANTA.NET({
                el: "#pp-background-" + section_id,
                color: new THREE.Color(parseInt(e)),
                backgroundColor: new THREE.Color(parseInt(o)),
                points: a,
                maxDistance: t,
                spacing: n,
                showDots: i
            })
        }, animation_dots = function () {
            var e = bg_row_elem.data("dots-color-1"),
                o = bg_row_elem.data("dots-color-2"),
                a = bg_row_elem.data("dots-bg-color"),
                t = bg_row_elem.data("dots-size"),
                n = bg_row_elem.data("dots-spacing");
            VANTA.DOTS({
                el: "#pp-background-" + section_id,
                color: new THREE.Color(parseInt(e)),
                color2: new THREE.Color(parseInt(o)),
                backgroundColor: new THREE.Color(parseInt(a)),
                size: t,
                spacing: n
            })
        }, animation_custom = function () {
            var e = bg_row_elem.data("custom-code");
            "" !== e && particlesJS("pp-background-" + section_id, e)
        }, animation_all_particles = function () {
            var e, o, a, t, n, i, r, l, d, _, c, s, m, b, p = "" !== bg_row_elem.data("part-color") ? bg_row_elem.data("part-color") : "#ffffff",
                g = bg_row_elem.data("part-opacity"),
                w = bg_row_elem.data("rand-opacity"),
                f = bg_row_elem.data("quantity"),
                h = bg_row_elem.data("part-size"),
                u = bg_row_elem.data("part-speed"),
                y = bg_row_elem.data("part-direction"),
                v = bg_row_elem.data("hover-effect"),
                E = bg_row_elem.data("hover-size");
            "particles" === animation_type && (e = !0, t = !(a = !(o = "circle")), m = "" !== bg_row_elem.data("line-color") ? bg_row_elem.data("line-color") : "#ffffff", n = "" !== f ? f : 80, i = "" !== g ? g : .5, r = "" !== w && w, l = "" !== y ? y : "none", d = "" !== u ? u : 3, _ = "" !== h ? h : 3, c = "noeffect" !== v, s = "none" !== v ? v : "repulse", b = "" !== E ? E : 0), "nasa" === animation_type && (t = a = !(e = !(o = "star")), n = "" !== f ? f : 110, i = "" !== g ? g : 1, r = "" === w || w, l = "" !== y ? y : "none", d = "" !== u ? u : 1, _ = "" !== h ? h : 3, c = "noeffect" !== v, s = "none" !== v ? v : "bubble", m = "grab" === v && "" !== bg_row_elem.data("line-h-color") ? bg_row_elem.data("line-h-color") : "#ffffff", b = "" !== E ? E : 0), "bubble" === animation_type && (t = !(a = !(e = !(o = "circle"))), n = "" !== f ? f : 6, i = "" !== g ? g : .6, r = "" !== w && w, l = "" !== y ? y : "none", d = "" !== u ? u : 10, _ = "" !== h ? h : 160, c = "noeffect" !== v, s = "none" !== v ? v : "none", m = "grab" === v && "" !== bg_row_elem.data("line-h-color") ? bg_row_elem.data("line-h-color") : "#ffffff", b = "" !== E ? E : 0), "snow" === animation_type && (e = !1, t = !(a = !(o = "circle")), n = "" !== f ? f : 300, i = "" !== g ? g : .5, r = "" === w || w, l = "" !== y ? y : "bottom", d = d = "" !== u ? u : 5, _ = "" !== h ? h : 10, c = "noeffect" !== v, s = "none" !== v ? v : "bubble", m = "grab" === v && "" !== bg_row_elem.data("line-h-color") ? bg_row_elem.data("line-h-color") : "#ffffff", b = "" !== E ? E : 4), particlesJS("pp-background-" + section_id, {
                particles: {
                    number: {
                        value: n,
                        density: {
                            enable: !0,
                            value_area: 800
                        }
                    },
                    color: {
                        value: p
                    },
                    shape: {
                        type: o,
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "",
                            width: 0,
                            height: 0
                        }
                    },
                    opacity: {
                        value: i,
                        random: r,
                        anim: {
                            enable: !0,
                            speed: 1,
                            opacity_min: .1,
                            sync: !1
                        }
                    },
                    size: {
                        value: _,
                        random: t,
                        anim: {
                            enable: !1,
                            speed: 40,
                            size_min: .1,
                            sync: !1
                        }
                    },
                    line_linked: {
                        enable: e,
                        distance: 150,
                        color: m,
                        opacity: .4,
                        width: 1
                    },
                    move: {
                        enable: !0,
                        speed: d,
                        direction: l,
                        random: a,
                        straight: !1,
                        out_mode: "out",
                        bounce: !1,
                        attract: {
                            enable: !1,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: c,
                            mode: s
                        },
                        onclick: {
                            enable: !0,
                            mode: "repulse"
                        },
                        resize: !0
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: .5
                            }
                        },
                        bubble: {
                            distance: 400,
                            size: b,
                            duration: .3,
                            opacity: 1,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: .4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: !0
            })
        }, setTimeout(function () {
            var canvas_opacity, canvas_opacity;
            (hideMaxWidth < winWidth || winWidth < hideMinWidth || "none" == hideMaxWidth) && ("particles" === animation_type || "nasa" === animation_type || "bubble" === animation_type || "snow" === animation_type ? (canvas_opacity = "", prepend_content(canvas_opacity), animation_all_particles()) : (canvas_opacity = bg_row_elem.data("canvas-opacity"), prepend_content(canvas_opacity), eval("animation_" + animation_type)()))
        }, 500))
    };
    $(window).on("elementor/frontend/init", function () {
        elementorFrontend.hooks.addAction("frontend/element_ready/global", BgHandler)
    })
}(jQuery);