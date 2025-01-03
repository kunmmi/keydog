! function() {
    let e = {
        desktop: 1024,
        tablet: 768,
        mobile: 480
    };

    function t(t) {
        let n = e[t] || 0,
            i = document.body.className.match("wpbf-" + t + "-breakpoint-[\\w-]*\\b");
        if (!i) return n;
        let s = i.toString().match(/\d+/);
        return Array.isArray(s) ? parseInt(s[0], 10) : 0
    }

    function n() {
        return e.desktop = t("desktop"), e.tablet = t("tablet"), e.mobile = t("mobile"), e
    }
    window.WpbfTheme = function(e) {
            let t = !!window.wp && !!window.wp.customize,
                i = n(),
                s = "desktop";

            function o() {
                let t = e(window).width(),
                    n = "";
                t && (t > i.desktop ? (n = "wpbf-is-desktop", s = "desktop") : t > i.tablet ? (n = "wpbf-is-tablet", s = "tablet") : (n = "wpbf-is-mobile", s = "mobile")), document.body.classList.remove("wpbf-is-desktop"), document.body.classList.remove("wpbf-is-tablet"), document.body.classList.remove("wpbf-is-mobile"), document.body.classList.add(n)
            }
            return o(),
                function() {
                    let t = document.querySelector(".scrolltop");
                    if (!t || !(t instanceof HTMLElement)) return;
                    let n = t.dataset.scrolltopValue,
                        i = n ? parseFloat(n) : 0;
                    window.addEventListener("scroll", function(n) {
                        let s = e(this).scrollTop();
                        s && s > i ? t.classList.add("is-visible") : t.classList.remove("is-visible")
                    }), e(document).on("click", ".scrolltop", function() {
                        document.body.tabIndex = -1, document.body.focus(), this.blur(), e("body, html").animate({
                            scrollTop: 0
                        }, 500)
                    })
                }(), e(".wpcf7-form-control-wrap").on("mouseenter", function() {
                    e(".wpcf7-not-valid-tip", this).fadeOut()
                }),
                function() {
                    let t = e(".wpbf-page"),
                        n = t.css("margin-top");
                    window.addEventListener("resize", function() {
                        let i = t.width(),
                            s = e(window).width();
                        i && s && i >= s ? t.css({
                            "margin-top": "0",
                            "margin-bottom": "0"
                        }) : t.css({
                            "margin-top": n,
                            "margin-bottom": n
                        })
                    })
                }(), window.addEventListener("resize", function(e) {
                    o()
                }), window.addEventListener("load", function() {
                    e(".opacity").delay(200).animate({
                        opacity: "1"
                    }, 200), e(".display-none").show(), e(window).trigger("resize"), e(window).trigger("scroll")
                }), {
                    isInsideCustomizer: t,
                    breakpoints: i,
                    activeBreakpoint: s
                }
        }(jQuery),
        function(e) {
            let t = window.WpbfTheme.isInsideCustomizer,
                n = parseInt(e(".wpbf-navigation").data("sub-menu-animation-duration"), 10);

            function i() {
                e(".wpbf-menu-item-search").hasClass("active") && (e(".wpbf-menu-search").stop().animate({
                    opacity: "0",
                    width: "0px"
                }, 250, function() {
                    this.style.display = "none"
                }), setTimeout(function() {
                    e(".wpbf-menu-item-search").removeClass("active").attr("aria-expanded", "false")
                }, 400))
            }

            function s() {
                if (!document.querySelector(".wpbf-menu-centered")) return;
                let t = e(".wpbf-navigation .wpbf-menu-centered .wpbf-menu > li > a").length / 2;
                t = Math.floor(t) - 1, e(".wpbf-menu-centered .logo-container").insertAfter(".wpbf-navigation .wpbf-menu-centered .wpbf-menu >li:eq(" + t + ")").css({
                    display: "block"
                })
            }
            e(document).on("click", ".wpbf-menu-item-search", function(t) {
                t.stopPropagation(), e(".wpbf-navigation .wpbf-menu > li").slice(-3).addClass("calculate-width");
                let n = 0;
                e(".calculate-width").each(function(t, i) {
                    let s = e(i).outerWidth();
                    s && (n += s)
                }), n < 200 && (n = 250), this.classList.contains("active") || (this.classList.add("active"), this.setAttribute("aria-expanded", "true"), e(".wpbf-menu-search", this).stop().css({
                    display: "block"
                }).animate({
                    width: n,
                    opacity: "1"
                }, 200), e("input[type=search]", this).val("").focus())
            }), window.addEventListener("click", function(e) {
                i()
            }), document.addEventListener("keyup", function(e) {
                if ("Escape" === e.key || "Esc" === e.key) i();
                else if ("Tab" === e.key) {
                    let t = e.target;
                    t instanceof HTMLElement && !t.classList.contains("wpbff-search") && i()
                }
            }), s(), e(document).on("mouseenter", ".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .menu-item-has-children", function() {
                e(".sub-menu", this).first().stop().css({
                    display: "block"
                }).animate({
                    opacity: "1"
                }, n)
            }).on("mouseleave", ".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-mega-menu) .menu-item-has-children", function() {
                e(".sub-menu", this).first().stop().animate({
                    opacity: "0"
                }, n, function() {
                    this.style.display = "none"
                })
            }), e(document).on("mouseenter", ".wpbf-sub-menu-animation-fade > .menu-item-has-children", function() {
                e(".sub-menu", this).first().stop().fadeIn(n)
            }).on("mouseleave", ".wpbf-sub-menu-animation-fade > .menu-item-has-children", function() {
                e(".sub-menu", this).first().stop().fadeOut(n)
            }), e(".menu-item-has-children").each(function(t, n) {
                e(n).attr("aria-haspopup", "true")
            }), document.body.addEventListener("mousedown", function() {
                this.classList.add("using-mouse"), e(".menu-item-has-children").removeClass("wpbf-sub-menu-focus")
            }), document.body.addEventListener("keydown", function() {
                this.classList.remove("using-mouse")
            }), e(document).on("mouseenter", ".wpbf-sub-menu > .menu-item-has-children:not(.wpbf-sub-menu-focus)", function(t) {
                document.body.classList.add("using-mouse"), e(".menu-item-has-children").removeClass("wpbf-sub-menu-focus"), e(this).find("> a").trigger("focus")
            }), e(document).on("mouseleave", ".wpbf-sub-menu > .menu-item-has-children.wpbf-sub-menu-focus", function() {
                this.classList.remove("wpbf-sub-menu-focus")
            }), e(document).on("focus", ".wpbf-sub-menu a", function(t) {
                e("body").hasClass("using-mouse") || (e(".wpbf-sub-menu > .menu-item-has-children").removeClass("wpbf-sub-menu-focus"), e(".wpbf-sub-menu > .menu-item-has-children > .sub-menu").stop().hide(), e(this).parents(".menu-item-has-children").addClass("wpbf-sub-menu-focus"))
            }), t && window.wp.customize.bind("preview-ready", function() {
                window.wp.customize.selectiveRefresh.bind("partial-content-rendered", function(t) {
                    n = parseInt(e(".wpbf-navigation").data("sub-menu-animation-duration"), 10), s()
                })
            })
        }(jQuery),
        function(e) {
            let t, i = n();

            function s() {
                if (document.querySelector(".wpbf-mobile-menu-hamburger")) {
                    t = "hamburger";
                    return
                }
                if (document.querySelector(".wpbf-mobile-menu-default")) {
                    t = "default";
                    return
                }
                t = "premium"
            }

            function o(t) {
                if ("premium" === t) return;
                let n = document.querySelector("#wpbf-mobile-menu-toggle");
                n && n.classList.contains("active") && (e(".wpbf-mobile-menu-container").removeClass("active").stop().slideUp(), n.classList.remove("active"), n.setAttribute("aria-expanded", "false"), "hamburger" === t && (n.classList.remove("wpbff-times"), n.classList.add("wpbff-hamburger")))
            }

            function a(t) {
                e(document).on("click", "hamburger" === t ? ".wpbf-mobile-menu-hamburger .wpbf-submenu-toggle" : ".wpbf-mobile-menu-default .wpbf-submenu-toggle", function(e) {
                    e.preventDefault(), this.classList.contains("active") ? c(this) : u(this)
                })
            }

            function u(t) {
                e("i", t).removeClass("wpbff-arrow-down").addClass("wpbff-arrow-up"), t.classList.add("active"), t.setAttribute("aria-expanded", "true"), e(t).siblings(".sub-menu").stop().slideDown(), e(t).closest(".wpbf-navigation").hasClass("wpbf-mobile-sub-menu-auto-collapse") && e(t).closest(".menu-item-has-children").siblings(".menu-item-has-children").each(function(e, t) {
                    let n = t.querySelector(".wpbf-submenu-toggle");
                    n && n instanceof HTMLElement && c(n)
                })
            }

            function c(t) {
                e("i", t).removeClass("wpbff-arrow-up").addClass("wpbff-arrow-down"), t.classList.remove("active"), t.setAttribute("aria-expanded", "false"), e(t).siblings(".sub-menu").stop().slideUp()
            }
            window.addEventListener("resize", function(e) {
                i = n()
            }), s(), e(document).on("click", ".wpbf-mobile-menu a", function() {
                "premium" !== t && (this.href.match("#") || this.href.match("/#")) && (this.parentNode.classList.contains("menu-item-has-children") ? e(this).closest(".wpbf-mobile-mega-menu").length ? o(t) : function(t) {
                    let n = e(t).siblings(".wpbf-submenu-toggle");
                    if (!n.length) return;
                    let i = n[0];
                    i.classList.contains("active") ? c(i) : u(i)
                }(this) : o(t))
            }), e(document).on("click", ".wpbf-mobile-menu-toggle", function() {
                s(),
                    function(t) {
                        if ("premium" === t) return;
                        let n = document.querySelector("#wpbf-mobile-menu-toggle");
                        n && (n.classList.contains("active") ? o(t) : function(t) {
                            if ("premium" === t) return;
                            let n = document.querySelector("#wpbf-mobile-menu-toggle");
                            n && (e(".wpbf-mobile-menu-container").addClass("active").stop().slideDown(), n.classList.add("active"), n.setAttribute("aria-expanded", "true"), "hamburger" === t && (n.classList.remove("wpbff-hamburger"), n.classList.add("wpbff-times")))
                        }(t))
                    }(t)
            }), e(window).resize(function() {
                let n = e(window).height(),
                    s = e(window).width();
                if (n) {
                    let t = e(".wpbf-mobile-nav-wrapper").outerHeight();
                    t && e(".wpbf-mobile-menu-container.active nav").css({
                        "max-height": n - t
                    })
                }
                s && s > i.desktop && o(t)
            }), a("default"), a("hamburger")
        }(jQuery)
}();