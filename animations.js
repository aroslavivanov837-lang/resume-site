/* ============================================================
   animations.js — все анимации и эффекты
   (подключается после AOS.js)
   ============================================================ */

// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {

    // ============================================================
    // 1. ИНИЦИАЛИЗАЦИЯ AOS (Animate On Scroll)
    // ============================================================
    AOS.init({
        duration: 800,                // длительность анимации (мс)
        easing: 'ease-out-cubic',     // плавность
        once: true,                   // анимация срабатывает один раз
        offset: 50,                   // отступ от края экрана для запуска (px)
        delay: 0,                     // задержка между элементами (мс)
        disable: 'mobile',            // отключаем на мобильных для производительности
        startEvent: 'DOMContentLoaded', // событие для старта
        initClassName: 'aos-init',     // класс после инициализации
        animatedClassName: 'aos-animate', // класс во время анимации
        useClassNames: false,         // использовать собственные классы
        disableMutationObserver: false, // отключить MutationObserver
        debounceDelay: 50,            // задержка debounce для resize
        throttleDelay: 99             // задержка throttle для scroll
    });

    console.log('✅ AOS инициализирован');

    // ============================================================
    // 2. ПРЕЛОАДЕР — скрываем после загрузки страницы
    // ============================================================
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Скрываем прелоадер через 300мс после загрузки
        setTimeout(function () {
            preloader.classList.add('hidden');
        }, 300);
    }

    // ============================================================
    // 3. АНИМАЦИЯ ПРОГРЕСС-БАРОВ (навыки)
    // ============================================================
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar div');
        if (!progressBars.length) return;

        progressBars.forEach(bar => {
            const width = bar.style.width; // сохраняем ширину из CSS
            bar.style.width = '0%'; // сбрасываем перед анимацией
            // Анимируем с задержкой
            setTimeout(() => {
                bar.style.transition = 'width 1.2s ease';
                bar.style.width = width;
            }, 200);
        });
    }

    // Отслеживаем появление секции навыков
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        skillsObserver.observe(skillsSection);
    }

    // ============================================================
    // 4. ПАРАЛЛАКС-ЭФФЕКТ ДЛЯ АВАТАРКИ (лёгкое смещение при скролле)
    // ============================================================
    const avatar = document.querySelector('.avatar-circle');
    if (avatar) {
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY;
            // Ограничиваем смещение, чтобы не улетело
            const offset = Math.min(scrollY * 0.05, 30);
            avatar.style.transform = `translateY(${offset}px)`;
        }, { passive: true });
    }

    // ============================================================
    // 5. ПЛАВНОЕ ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ ЗАГРУЗКЕ (дополнительно)
    // ============================================================
    // Добавляем класс 'fade-in' к элементам, которые должны появиться плавно
    const fadeElements = document.querySelectorAll('.hero-content, .profile-card, .section-header');
    fadeElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });

    // ============================================================
    // 6. ДОПОЛНИТЕЛЬНЫЙ ЭФФЕКТ ПРИ НАВЕДЕНИИ НА КАРТОЧКИ (через JS)
    //    (уже есть в CSS, но можно добавить логику для более сложных)
    // ============================================================
    // Например, можно добавить класс 'hovered' при наведении на карточку портфолио
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });
        item.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');
        });
    });

    // ============================================================
    // 7. АНИМАЦИЯ ССЫЛОК В НАВИГАЦИИ (подсветка активного раздела)
    // ============================================================
    const navLinks = document.querySelectorAll('.nav-links a:not(.btn-primary)');
    const sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Добавляем стили для активного пункта
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a.active {
            color: var(--primary);
            font-weight: 600;
        }
        .nav-links a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);

    // Запускаем при скролле
    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav(); // запускаем при загрузке

    // ============================================================
    // 8. ОБРАБОТЧИК ДЛЯ КНОПКИ "НАВЕРХ" (если добавите)
    // ============================================================
    // Можно добавить кнопку "наверх", но её нет в HTML, поэтому опционально
    // Но если добавите, код ниже активирует её
    // const scrollTopBtn = document.getElementById('scrollTop');
    // if (scrollTopBtn) {
    //     window.addEventListener('scroll', function() {
    //         if (window.scrollY > 500) {
    //             scrollTopBtn.classList.add('visible');
    //         } else {
    //             scrollTopBtn.classList.remove('visible');
    //         }
    //     });
    //     scrollTopBtn.addEventListener('click', function() {
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //     });
    // }

    // ============================================================
    // 9. АНИМАЦИЯ ПРИ НАВЕДЕНИИ НА СОЦИАЛЬНЫЕ ИКОНКИ (контакты)
    // ============================================================
    // Уже есть в CSS, но можно добавить дополнительный эффект
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.querySelector('i').style.transform = 'scale(1.2) rotate(5deg)';
            this.querySelector('i').style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function () {
            this.querySelector('i').style.transform = 'scale(1) rotate(0)';
        });
    });

    // ============================================================
    // 10. ОПТИМИЗАЦИЯ: ОТКЛЮЧАЕМ АНИМАЦИИ НА МАЛЫХ ЭКРАНАХ (если нужно)
    // ============================================================
    function disableAnimationsOnMobile() {
        if (window.innerWidth < 576) {
            // Отключаем все AOS-анимации, если они ещё не запущены
            document.querySelectorAll('[data-aos]').forEach(el => {
                el.removeAttribute('data-aos');
            });
            // Также можно отключить наши кастомные анимации
            // Но мы оставляем для плавности
        }
    }
    // Запускаем при загрузке и изменении размера
    disableAnimationsOnMobile();
    window.addEventListener('resize', disableAnimationsOnMobile);

    // ============================================================
    // 11. ЛОГИРОВАНИЕ ГОТОВНОСТИ
    // ============================================================
    console.log('✅ Все анимации и скрипты загружены успешно');

}); // конец DOMContentLoaded
