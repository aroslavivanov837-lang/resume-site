/* ============================================================
   script.js — вся логика интерфейса (бургер, скролл, форма, эффекты)
   (подключается после animations.js)
   ============================================================ */

// Ждём полной загрузки DOM
document.addEventListener('DOMContentLoaded', function () {

    // ============================================================
    // 1. БУРГЕР-МЕНЮ (открытие/закрытие)
    // ============================================================
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');

    if (burger && navLinks) {
        // Открытие/закрытие по клику на бургер
        burger.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = burger.classList.toggle('active');
            navLinks.classList.toggle('active');
            burger.setAttribute('aria-expanded', isOpen);
        });

        // Закрытие меню при клике на любую ссылку внутри
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
            });
        });

        // Закрытие меню при клике вне его (на любое место документа)
        document.addEventListener('click', function (e) {
            const isClickInsideNav = navLinks.contains(e.target);
            const isClickOnBurger = burger.contains(e.target);
            if (!isClickInsideNav && !isClickOnBurger) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
            }
        });

        // Закрытие при нажатии Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                burger.classList.remove('active');
                navLinks.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                burger.focus();
            }
        });
    }

    // ============================================================
    // 2. ЭФФЕКТ ТЕНИ НА НАВБАРЕ ПРИ СКРОЛЛЕ
    // ============================================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let ticking = false;

        window.addEventListener('scroll', function () {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    const currentScrollY = window.scrollY;
                    if (currentScrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

    // ============================================================
    // 3. ПЛАВНЫЙ СКРОЛЛ К ЯКОРЯМ (с учётом высоты навбара)
    // ============================================================
    document.querySelectorAll('a[href^="#"]:not(.btn-primary)').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 10;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================================
    // 4. КНОПКА "НАВЕРХ" (если добавите в HTML)
    // ============================================================
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        // Сначала скрываем кнопку
        scrollTopBtn.style.display = 'none';

        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                scrollTopBtn.style.display = 'flex';
                scrollTopBtn.style.opacity = '1';
            } else {
                scrollTopBtn.style.opacity = '0';
                setTimeout(() => {
                    if (window.scrollY <= 500) {
                        scrollTopBtn.style.display = 'none';
                    }
                }, 300);
            }
        }, { passive: true });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ============================================================
    // 5. ОБРАБОТКА ФОРМЫ (валидация и отправка)
    // ============================================================
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Собираем данные — ищем поля по их атрибутам или классам
            const nameField = this.querySelector('input[name="name"], input[placeholder*="Имя"]');
            const emailField = this.querySelector('input[type="email"]');
            const messageField = this.querySelector('textarea');

            // Простая валидация
            let isValid = true;
            let errorMessage = '';

            // Проверка имени
            if (!nameField || nameField.value.trim() === '') {
                isValid = false;
                errorMessage += 'Пожалуйста, введите ваше имя.\n';
                if (nameField) nameField.classList.add('error');
            } else {
                if (nameField) nameField.classList.remove('error');
            }

            // Проверка email
            if (!emailField || emailField.value.trim() === '') {
                isValid = false;
                errorMessage += 'Пожалуйста, введите ваш email.\n';
                if (emailField) emailField.classList.add('error');
            } else if (!isValidEmail(emailField.value.trim())) {
                isValid = false;
                errorMessage += 'Введите корректный email (например, name@domain.ru).\n';
                if (emailField) emailField.classList.add('error');
            } else {
                if (emailField) emailField.classList.remove('error');
            }

            // Проверка сообщения
            if (!messageField || messageField.value.trim() === '') {
                isValid = false;
                errorMessage += 'Пожалуйста, напишите сообщение.\n';
                if (messageField) messageField.classList.add('error');
            } else {
                if (messageField) messageField.classList.remove('error');
            }

            if (!isValid) {
                alert('⚠️ ' + errorMessage);
                return;
            }

            // Если валидация пройдена – имитация отправки
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';

            // Имитация задержки
            setTimeout(() => {
                alert('✅ Сообщение успешно отправлено! Я свяжусь с вами в ближайшее время.');
                this.reset(); // очищаем форму
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                // Убираем классы ошибок
                this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            }, 1500);
        });

        // Убираем класс ошибки при вводе
        contactForm.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function () {
                this.classList.remove('error');
            });
            field.addEventListener('blur', function () {
                if (this.value.trim() === '') {
                    this.classList.add('error');
                } else {
                    this.classList.remove('error');
                }
            });
        });
    }

    // Вспомогательная функция для проверки email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ============================================================
    // 6. ДИНАМИЧЕСКАЯ ПОДГРУЗКА ИЗОБРАЖЕНИЙ (лайзи-лоад)
    // ============================================================
    const lazyImages = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback для старых браузеров
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }

    // ============================================================
    // 7. КОРРЕКТНАЯ РАБОТА СЕТКИ ПРИ ИЗМЕНЕНИИ РАЗМЕРА ЭКРАНА
    // ============================================================
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Например, обновить высоту элементов, если требуется
        }, 250);
    }, { passive: true });

    // ============================================================
    // 8. ЛОГИРОВАНИЕ ГОТОВНОСТИ
    // ============================================================
    console.log('✅ script.js загружен и все функции активированы');

}); // конец DOMContentLoaded
