const cb = function (el,isIntersecting){
    if(isIntersecting){
        const ta = new TextAnimation(el);
        ta.animate()
    }
}
const so = new ScrollObserver('.animate-title',cb)

class ScrollObserver {
    constructor(els,cb,options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb =cb
        this.options = Object.assign(defaultOptions,options)
    }
}

class A {
    constructor(options) {
        const defaultOptions = {
            root: null
        }
        this.options = Object.assign(defaultOptions)
    }
}