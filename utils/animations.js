const fadeInAnimation = {
    opacity: 0,
    duration: 1,
}
const fadeInFromBottomAnimation = {
    opacity: 0,
    y: '10%',
    duration: 1,
}
const fadeInFromRightAnimation = {
    opacity: 0,
    x: '5%',
    duration: 1,
}
const fadeInFromLeftAnimation = {
    opacity: 0,
    x: '-5%',
    duration: 1,
}
const bannerAnimation = { width: 0, duration: .8, ease: "power3.inOut" }

const scrollTriggerDefaultSettings = {
    start: 'top 65%',
    toggleActions: "restart none none reverse",
    // once: true
}
export const timelineHome = () => {
    const { $gsap } = useNuxtApp()
    const tl = $gsap.timeline()
    tl
        .to('.ani-loader-top', { width: '100%', duration: .8, ease: "power2.out" })
        .to('.ani-loader-line', { width: '0', duration: .8 })
        .to('.ani-loader-bottom', { opacity: 1, duration: .8 }, '+=.2')
        .to('#loader', { opacity: 0, duration: 1 }, '+=.3')
        .to('#loader', { display: 'none' })
        .to('html', { overflow: 'auto' }, '<')
        .from('.ani-nav-imgs', {
            opacity: 0,
            duration: 1,
        }, '<-.5')
        .from(".ani-nav-items", {
            ...fadeInFromLeftAnimation,
            stagger: 0.1,
        }, '-=.2')
        .from(".ani-banner", {
            ...fadeInFromRightAnimation,
            stagger: 0.2,
        }, '-=.5').from('.ani-date > div', { ...fadeInFromBottomAnimation, stagger: 0.2, delay: -1.2 })
}

export const timelineIntro = () => {
    const { $gsap } = useNuxtApp()
    const tl = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#intro' }, })
    tl.from(".ani-intro-container", fadeInAnimation)
        .from(".ani-intro-title", fadeInFromBottomAnimation)
        .from(".ani-intro-line", { width: 0, duration: 1, ease: "power2.inOut" }, '-=.2')
        .from(".ani-intro-fadeIn", { ...fadeInFromBottomAnimation, stagger: .7 })
}

export const timelineProjects = () => {
    const { $gsap } = useNuxtApp()
    const tl0 = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#project-0' }, })
    tl0.from("#projects .ani-banner", bannerAnimation)
        .from("#project-0 .ani-project-title", fadeInFromLeftAnimation)
        .from("#project-0 .ani-project-subtitle", fadeInFromRightAnimation, '-=.4')
        .from("#project-0 .ani-project-cards > div", { ...fadeInFromBottomAnimation, stagger: .1 })
    const tl1 = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#project-1' }, })
    tl1.from("#project-1 .ani-project-title", fadeInFromLeftAnimation)
        .from("#project-1 .ani-project-subtitle", fadeInFromRightAnimation, '-=.4')
        .from("#project-1 .ani-project-cards > div", { ...fadeInFromBottomAnimation, stagger: .1 })
    const tl2 = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#project-2' }, })
    tl2.from("#project-2 .ani-project-title", fadeInFromLeftAnimation)
        .from("#project-2 .ani-project-subtitle", fadeInFromRightAnimation, '-=.4')
        .from("#project-2 .ani-project-cards > div", { ...fadeInFromBottomAnimation, stagger: .1 })
    const tl3 = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#project-3' }, })
    tl3.from("#project-3 .ani-project-title", fadeInFromLeftAnimation)
        .from("#project-3 .ani-project-subtitle", fadeInFromRightAnimation, '-=.4')
        .from("#project-3 .ani-project-cards > div", { ...fadeInFromBottomAnimation, stagger: .1 })
}

export const timelineDirector = () => {
    const { $gsap } = useNuxtApp()
    const tl = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#teachers' }, })
    tl.from("#teachers .ani-banner", bannerAnimation)
        .from('.ani-director-card', fadeInFromBottomAnimation, '-=.2')
        .from('.ani-director-words', { ...fadeInFromBottomAnimation, y: '2%' }, '-=.2')
}
export const timelineTeachers = () => {
    const { $gsap } = useNuxtApp()
    const tl = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#teachers-2' }, })
    tl.from("#teachers-2 .ani-banner", bannerAnimation)
        .from('.ani-teacher-2-card', { ...fadeInFromBottomAnimation }, '-=.2')
        .from('.ani-teacher-2-words', { ...fadeInFromBottomAnimation, y: '2%' }, '-=.2')

    const tl2 = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#teachers-2-cards' } })
    tl2.from('.ani-teacher-card-0', { y: '2%', opacity: 0, stagger: .4, duration: 1 })
        .from('.ani-teacher-card-1', { y: '2%', opacity: 0, stagger: .5, delay: .2, duration: 1 }, '<')
}

export const timelineTeam = () => {
    const { $gsap } = useNuxtApp()
    const tl = $gsap.timeline({ scrollTrigger: { ...scrollTriggerDefaultSettings, trigger: '#team' }, })
    tl.from("#team .ani-banner", bannerAnimation)
        .from('.ani-team-card', { ...fadeInFromBottomAnimation, stagger: .4, duration: 2 }, '-=.2')
}