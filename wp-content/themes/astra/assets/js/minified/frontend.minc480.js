var astraGetParents = function (e, t) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
            for (var t = (this.document || this.ownerDocument).querySelectorAll(e), a = t.length; 0 <= --a && t.item(a) !== this;);
            return -1 < a
        });
        for (var a = []; e && e !== document; e = e.parentNode)(!t || e.matches(t)) && a.push(e);
        return a
    },
    getParents = function (e, t) {
        console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."), astraGetParents(e, t)
    },
    astraToggleClass = function (e, t) {
        e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
    },
    toggleClass = function (e, t) {
        console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."), astraToggleClass(e, t)
    },
    astraTriggerEvent = (! function () {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var a = document.createEvent("CustomEvent");
            return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(), function (e, t) {
        var a = new CustomEvent(t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {});
        e.dispatchEvent(a)
    });
! function () {
    var l = document.querySelectorAll("#masthead .main-header-menu-toggle"),
        i = document.getElementById("masthead"),
        r = {},
        c = "",
        d = document.body,
        u = "";

    function s(e) {
        c = e.detail.type;
        var t = document.querySelectorAll(".menu-toggle");
        if ("dropdown" === c && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"), m("updateHeader")), "off-canvas" === c)
            for (var a = 0; a < t.length; a++) void 0 !== t[a] && t[a].classList.contains("toggled") && t[a].click();
        n(c)
    }

    function m(e) {
        var t = "";
        if (null == (u = i.querySelector("#ast-mobile-header")) || "dropdown" !== u.dataset.type || "updateHeader" === e) {
            t = (void 0 !== e && "updateHeader" !== e ? e.closest(".ast-mobile-popup-inner") : document.querySelector("#ast-mobile-popup")).querySelectorAll(".menu-item-has-children");
            for (var a = 0; a < t.length; a++) {
                t[a].classList.remove("ast-submenu-expanded");
                for (var n = t[a].querySelectorAll(".sub-menu"), s = 0; s < n.length; s++) n[s].style.display = "none"
            }
            var o = document.querySelectorAll(".menu-toggle");
            document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"), document.documentElement.classList.remove("ast-off-canvas-active");
            for (var l = 0; l < o.length; l++) o[l].classList.remove("toggled"), o[l].style.display = "flex"
        }
    }

    function n(e) {
        var t = document.querySelectorAll("#ast-mobile-header .menu-toggle"),
            a = document.querySelectorAll("#ast-desktop-header .menu-toggle");
        if (void 0 === e && null !== i)
            if (u = i.querySelector("#ast-mobile-header")) e = u.dataset.type;
            else {
                var n = i.querySelector("#ast-desktop-header");
                if (!n) return;
                e = n.dataset.toggleType
            } if ("off-canvas" === e) {
            var n = document.getElementById("menu-toggle-close"),
                s = document.querySelector(".ast-mobile-popup-inner");
            if (null == s) return;
            popupLinks = s.getElementsByTagName("a");
            for (var o = 0; o < t.length; o++) t[o].removeEventListener("click", astraNavMenuToggle, !1), t[o].addEventListener("click", popupTriggerClick, !1), t[o].trigger_type = "mobile";
            for (o = 0; o < a.length; o++) a[o].removeEventListener("click", astraNavMenuToggle, !1), a[o].addEventListener("click", popupTriggerClick, !1), a[o].trigger_type = "desktop";
            for (n.addEventListener("click", function (e) {
                    document.getElementById("ast-mobile-popup").classList.remove("active", "show"), m(this)
                }), document.addEventListener("keyup", function (e) {
                    27 === e.keyCode && (e.preventDefault(), document.getElementById("ast-mobile-popup").classList.remove("active", "show"), m())
                }), document.addEventListener("click", function (e) {
                    e.target === document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay") && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"), m())
                }), link = 0, len = popupLinks.length; link < len; link++) null !== popupLinks[link].getAttribute("href") && popupLinks[link].getAttribute("href").startsWith("#") && (!popupLinks[link].parentElement.classList.contains("menu-item-has-children") || popupLinks[link].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (popupLinks[link].addEventListener("click", g, !0), popupLinks[link].headerType = "off-canvas");
            AstraToggleSetup()
        } else if ("dropdown" === e) {
            s = document.querySelector(".ast-mobile-header-content") || !1, n = document.querySelector(".ast-desktop-header-content") || !1;
            if (s) {
                var l = s.getElementsByTagName("a");
                for (link = 0, len = l.length; link < len; link++) null !== l[link].getAttribute("href") && l[link].getAttribute("href").startsWith("#") && (!l[link].parentElement.classList.contains("menu-item-has-children") || l[link].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (l[link].addEventListener("click", g, !0), l[link].headerType = "dropdown")
            }
            if (n) {
                var r = n.getElementsByTagName("a");
                for (link = 0, len = r.length; link < len; link++) r[link].addEventListener("click", g, !0), r[link].headerType = "dropdown"
            }
            for (o = 0; o < t.length; o++) t[o].removeEventListener("click", popupTriggerClick, !1), t[o].addEventListener("click", astraNavMenuToggle, !1), t[o].trigger_type = "mobile";
            for (o = 0; o < a.length; o++) a[o].removeEventListener("click", popupTriggerClick, !1), a[o].addEventListener("click", astraNavMenuToggle, !1), a[o].trigger_type = "desktop";
            AstraToggleSetup()
        }
        v()
    }

    function g(e) {
        switch (e.currentTarget.headerType) {
            case "dropdown":
                for (var t = document.querySelectorAll(".menu-toggle.toggled"), a = 0; a < t.length; a++) t[a].click();
                break;
            case "off-canvas":
                document.getElementById("menu-toggle-close").click()
        }
    }
    "" !== (u = null != i ? i.querySelector("#ast-mobile-header") : u) && null !== u && (c = u.dataset.type), document.addEventListener("astMobileHeaderTypeChange", s, !1), popupTriggerClick = function (e) {
        var e = e.currentTarget.trigger_type,
            t = document.getElementById("ast-mobile-popup");
        d.classList.contains("ast-popup-nav-open") || d.classList.add("ast-popup-nav-open"), d.classList.contains("ast-main-header-nav-open") || "mobile" === e || d.classList.add("ast-main-header-nav-open"), document.documentElement.classList.contains("ast-off-canvas-active") || document.documentElement.classList.add("ast-off-canvas-active"), "desktop" === e && (t.querySelector(".ast-mobile-popup-content").style.display = "none", t.querySelector(".ast-desktop-popup-content").style.display = "block"), "mobile" === e && (t.querySelector(".ast-desktop-popup-content").style.display = "none", t.querySelector(".ast-mobile-popup-content").style.display = "block"), this.style.display = "none", t.classList.add("active", "show")
    }, window.addEventListener("load", function () {
        n()
    }), document.addEventListener("astLayoutWidthChanged", function () {
        n()
    }), document.addEventListener("astPartialContentRendered", function () {
        l = document.querySelectorAll(".main-header-menu-toggle"), d.classList.remove("ast-main-header-nav-open"), document.addEventListener("astMobileHeaderTypeChange", s, !1), n(), v()
    });
    var o = window.visualViewport.width;
    window.addEventListener("resize", function () {
        var e, t, a, n;
        "INPUT" !== document.activeElement.tagName && (e = document.getElementById("menu-toggle-close"), t = document.querySelector(".menu-toggle.toggled"), a = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"), n = document.querySelector(".elementor-editor-active"), a && (a.style.display = "none"), window.visualViewport.width !== o && (t && null === n && t.click(), document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"), e && null == n && e.click()), p(), AstraToggleSetup())
    }), document.addEventListener("DOMContentLoaded", function () {
        if (AstraToggleSetup(), null !== (e = d.classList.contains("ast-header-break-point") ? document.getElementById("ast-mobile-header") : document.getElementById("ast-desktop-header"))) {
            var e, t = e.querySelector(".navigation-accessibility");
            if (t && e) {
                var a = e.getElementsByTagName("button")[0];
                if (void 0 !== a || void 0 !== (a = e.getElementsByTagName("a")[0])) {
                    var n = t.getElementsByTagName("ul")[0];
                    if (void 0 !== n) {
                        n.setAttribute("aria-expanded", "false"), -1 === n.className.indexOf("nav-menu") && (n.className += " nav-menu"), "off-canvas" === c && (document.getElementById("menu-toggle-close").onclick = function () {
                            -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false"), n.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-expanded", "true"))
                        }), a.onclick = function () {
                            -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false"), n.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-expanded", "true"))
                        };
                        for (var s = n.getElementsByTagName("a"), o = n.getElementsByTagName("ul"), l = 0, r = o.length; l < r; l++) o[l].parentNode.setAttribute("aria-haspopup", "true");
                        for (l = 0, r = s.length; l < r; l++) s[l].addEventListener("focus", b, !0), s[l].addEventListener("blur", b, !0), s[l].addEventListener("click", y, !0)
                    } else a.style.display = "none"
                }
            }
        }
    });
    for (var e, t, a, p = function () {
            var e = d.style.overflow,
                t = (d.style.overflow = "hidden", document.documentElement.clientWidth);
            if (d.style.overflow = e, astra.break_point < t || 0 === t) {
                if (0 < l.length)
                    for (var a = 0; a < l.length; a++) null !== l[a] && l[a].classList.remove("toggled");
                d.classList.remove("ast-header-break-point"), d.classList.add("ast-desktop"), astraTriggerEvent(d, "astra-header-responsive-enabled")
            } else d.classList.add("ast-header-break-point"), d.classList.remove("ast-desktop"), astraTriggerEvent(d, "astra-header-responsive-disabled")
        }, v = function () {
            var e, t, a = document.querySelectorAll(".ast-account-action-login")[0];
            void 0 !== a && (e = document.getElementById("ast-hb-login-close"), t = document.getElementById("ast-hb-account-login-wrap"), a.onclick = function (e) {
                e.preventDefault(), e.stopPropagation(), t.classList.contains("show") || t.classList.add("show")
            }, e.onclick = function (e) {
                e.preventDefault(), t.classList.remove("show")
            })
        }, h = (p(), AstraToggleSubMenu = function (e) {
            e.preventDefault();
            for (var t = this.parentNode, a = (t.classList.contains("ast-submenu-expanded") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && (this.classList.contains("ast-menu-toggle") || "" !== (e = t.querySelector("a").getAttribute("href")) && "#" !== e && (window.location = e)), t.querySelectorAll(".menu-item-has-children")), n = 0; n < a.length; n++) {
                a[n].classList.remove("ast-submenu-expanded");
                var s = a[n].querySelector(".sub-menu, .children");
                null !== s && (s.style.display = "none")
            }
            for (var o = t.parentNode.querySelectorAll(".menu-item-has-children"), n = 0; n < o.length; n++)
                if (o[n] != t) {
                    o[n].classList.remove("ast-submenu-expanded");
                    for (var l = o[n].querySelectorAll(".sub-menu"), r = 0; r < l.length; r++) l[r].style.display = "none"
                } t.classList.contains("menu-item-has-children") && (astraToggleClass(t, "ast-submenu-expanded"), t.classList.contains("ast-submenu-expanded") ? t.querySelector(".sub-menu").style.display = "block" : t.querySelector(".sub-menu").style.display = "none")
        }, AstraToggleSetup = function () {
            var e, t;
            if ("undefined" != typeof astraAddon) astraToggleSetupPro(c, d, r);
            else if (e = "off-canvas" === c || "full-width" === c ? document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header") : document.querySelectorAll("#ast-mobile-header"), 0 < (t = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length)
                for (var a = 0; a < t.length; a++)
                    if (t[a].setAttribute("data-index", a), r[a] || (r[a] = t[a], t[a].addEventListener("click", astraNavMenuToggle, !1)), void 0 !== e[a])
                        for (var n, s = 0; s < e.length; s++)
                            if (0 < (n = document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") ? e[s].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle") : e[s].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)
                                for (var o = 0; o < n.length; o++) n[o].addEventListener("click", AstraToggleSubMenu, !1)
        }, astraNavMenuToggle = function (e) {
            if ("undefined" != typeof astraAddon) astraNavMenuTogglePro(e, d, c, this);
            else {
                e.preventDefault();
                var e = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),
                    t = (l = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"), "0");
                if (null !== this.closest("#ast-fixed-header") && (e = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"), l = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"), t = "0"), void 0 === e[t]) return !1;
                for (var a = e[t].querySelectorAll(".menu-item-has-children"), n = 0; n < a.length; n++) {
                    a[n].classList.remove("ast-submenu-expanded");
                    for (var s = a[n].querySelectorAll(".sub-menu"), o = 0; o < s.length; o++) s[o].style.display = "none"
                } - 1 !== (this.getAttribute("class") || "").indexOf("main-header-menu-toggle") && (astraToggleClass(e[t], "toggle-on"), astraToggleClass(l[t], "toggled"), e[t].classList.contains("toggle-on") ? (e[t].style.display = "block", d.classList.add("ast-main-header-nav-open")) : (e[t].style.display = "", d.classList.remove("ast-main-header-nav-open")))
            }
        }, d.addEventListener("astra-header-responsive-enabled", function () {
            var e = document.querySelectorAll(".main-header-bar-navigation");
            if (0 < e.length)
                for (var t = 0; t < e.length; t++) {
                    null != e[t] && (e[t].classList.remove("toggle-on"), e[t].style.display = "");
                    for (var a = e[t].getElementsByClassName("sub-menu"), n = 0; n < a.length; n++) a[n].style.display = "";
                    for (var s = e[t].getElementsByClassName("children"), o = 0; o < s.length; o++) s[o].style.display = "";
                    for (var l = e[t].getElementsByClassName("ast-search-menu-icon"), r = 0; r < l.length; r++) l[r].classList.remove("ast-dropdown-active"), l[r].style.display = ""
                }
        }, !1), t = navigator.userAgent, a = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(a[1]) ? e = /\brv[ :]+(\d+)/g.exec(t) || [] : "Chrome" === a[1] && null != (e = t.match(/\bOPR|Edge\/(\d+)/)) || (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && a.splice(1, 1, e[1]), "Safari" === a[0] && a[1] < 11 && document.body.classList.add("ast-safari-browser-less-than-11")), document.getElementsByClassName("astra-search-icon")), f = 0; f < h.length; f++) h[f].onclick = function (e) {
        var t;
        this.classList.contains("slide-search") && (e.preventDefault(), (t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active") ? ("" !== (t.querySelector(".search-field").value || "") && t.querySelector(".search-form").submit(), t.classList.remove("ast-dropdown-active")) : (t.classList.add("ast-dropdown-active"), t.querySelector(".search-field").setAttribute("autocomplete", "off"), setTimeout(function () {
            t.querySelector(".search-field").focus()
        }, 200)))
    };

    function y() {
        var e = this || "";
        if (e && !e.classList.contains("astra-search-icon") && null === e.closest(".ast-builder-menu") && -1 !== new String(e).indexOf("#")) {
            var t = e.parentNode;
            if (d.classList.contains("ast-header-break-point")) document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && t.classList.contains("menu-item-has-children") || (document.querySelector(".main-header-menu-toggle").classList.remove("toggled"), (t = document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"), t.style.display = "none", astraTriggerEvent(document.querySelector("body"), "astraMenuHashLinkClicked"));
            else
                for (; - 1 === e.className.indexOf("nav-menu");) "li" === e.tagName.toLowerCase() && -1 !== e.className.indexOf("focus") && (e.className = e.className.replace(" focus", "")), e = e.parentElement
        }
    }

    function b() {
        for (var e = this; - 1 === e.className.indexOf("navigation-accessibility");) "li" === e.tagName.toLowerCase() && e.classList.toggle("focus"), e = e.parentElement
    }
    d.onclick = function (e) {
        if (void 0 !== e.target.classList && !e.target.classList.contains("ast-search-menu-icon") && 0 === astraGetParents(e.target, ".ast-search-menu-icon").length && 0 === astraGetParents(e.target, ".ast-search-icon").length)
            for (var t = document.getElementsByClassName("ast-search-menu-icon"), a = 0; a < t.length; a++) t[a].classList.remove("ast-dropdown-active")
    }, "querySelector" in document && "addEventListener" in window && (d.addEventListener("mousedown", function () {
        d.classList.add("ast-mouse-clicked")
    }), d.addEventListener("keydown", function () {
        d.classList.remove("ast-mouse-clicked")
    }))
}();