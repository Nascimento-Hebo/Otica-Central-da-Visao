/**
 * =====================================================
 * ODONTO SORRISO - CLÍNICA ODONTOLÓGICA
 * Script Principal
 * =====================================================
 *
 * Este arquivo contém todas as funcionalidades JavaScript
 * da landing page da clínica odontológica.
 *
 * FUNCIONALIDADES:
 * - Menu mobile (hambúrguer)
 * - Scroll suave para âncoras
 * - Acordeão do FAQ
 * - Animações de scroll
 * - Integração com WhatsApp
 *
 * ===================================================== */

/* =====================================================
      contador de clientes
      ===================================================== */
const funcTime = document.getElementById('funcTime')
const agora = new Date().getTime()
const weekendDay = new Date().getDay()
console.log(weekendDay)






let contNumber = document.getElementById('contador');
let num = 1

const contFunctio = setInterval(() => {
    contNumber.innerHTML = `${num} Mil+`
    if (num >= 517) {
        clearInterval(contFunctio)
    } else {
        num++
    }

}, -90000000);

/* =====================================================
      contador de anos
      ===================================================== */
let yearCont = document.getElementById('yearCont');
let countYear = 1;

const contTime = setInterval(() => {
    yearCont.innerHTML = `${countYear}`;

    if (countYear >= 27) {
        clearInterval(contTime);
    } else {
        countYear++;
    }
}, 60);




document.addEventListener('DOMContentLoaded', function () {

    /* =====================================================
       1. MENU MOBILE (HAMBÚRGUER)
       ===================================================== */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        // Toggle do menu
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fecha menu ao clicar em link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Fecha menu ao clicar fora
        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    /* =====================================================
       2. SCROLL SUAVE
       ===================================================== */
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* =====================================================
       3. FAQ ACORDEÃO
       ===================================================== */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Fecha todos
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Abre o clicado (se não estava aberto)
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    /* =====================================================
       4. HEADER SCROLL EFFECT
       ===================================================== */
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 119, 182, 0.2)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 119, 182, 0.1)';
        }
    });

    /* =====================================================
       5. ANIMAÇÕES DE ENTRADA (SCROLL)
       ===================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll(
        '.servico-card, .destaque-card, .beneficio-card, .depoimento-card, .faq-item, .feature'
    );

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    document.addEventListener('scroll', function () {
        animateElements.forEach(el => {
            if (el.classList.contains('in-view')) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });

    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);

    /* =====================================================
       6. LINK WHATSAPP COM MENSAGEM PADRÃO
       EDITÁVEL: Altere a mensagem abaixo
       ===================================================== */
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    const defaultMessage = encodeURIComponent(
        'Olá! Gostaria de agendar uma avaliação odontológica.'
    );

    whatsappLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        if (!currentHref.includes('text=')) {
            link.setAttribute('href', `${currentHref}?text=${defaultMessage}`);
        }
    });

    /* =====================================================
       7. MAPA PLACEHOLDER CLICK
       EDITÁVEL: Altere o endereço na URL
       ===================================================== */
    const mapaPlaceholder = document.querySelector('.mapa-placeholder');

    if (mapaPlaceholder) {
        mapaPlaceholder.addEventListener('click', function () {
            // EDITÁVEL: Altere o endereço aqui
            const mapsUrl = 'https://www.google.com/maps/place/%C3%93tica+Central+da+Vis%C3%A3o/@-25.7679585,-49.71888,17z/data=!4m14!1m7!3m6!1s0x94dd7510fbdd8fd7:0x1330d633a932c684!2s%C3%93tica+Central+da+Vis%C3%A3o!8m2!3d-25.7679585!4d-49.71888!16s%2Fg%2F11y44hnw6b!3m5!1s0x94dd7510fbdd8fd7:0x1330d633a932c684!8m2!3d-25.7679585!4d-49.71888!16s%2Fg%2F11y44hnw6b?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D';
            window.open(mapsUrl, '_blank');
        });
    }

});
