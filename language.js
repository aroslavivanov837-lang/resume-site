/* Automatic Russian/English localization for the resume. */
(function () {
    'use strict';

    const englishText = {
    "Ярослав": "Yaroslav",
    "Обо мне": "About",
    "Навыки": "Skills",
    "Опыт": "Experience",
    "Портфолио": "Portfolio",
    "Образование": "Education",
    "Связаться": "Contact me",
    "Привет, я": "Hi, I'm",
    "Ярослав Иванов": "Yaroslav Ivanov",
    "Студент-веб-разработчик с опытом создания сайтов, дизайна в Figma и ведения соцсетей. Ищу возможность расти в digital-маркетинге и digital-проектах.": "Web development student with hands-on experience building websites, designing in Figma, and managing social media. I am looking for an opportunity to grow in digital marketing and digital projects.",
    "Профессиональный профиль": "Professional Profile",
    "Кто я и что я могу": "Who I am and what I can contribute",
    "Студент 2 курса ITHub": "Second-year student at ITHub",
    "по специальности «Веб-разработка». Стремлюсь развиваться в сфере digital-маркетинга и интернет-проектов.": "majoring in Web Development. I am building my career in digital marketing and online projects.",
    "Имею практический опыт разработки сайтов для клиентов, создания интерфейсов в Figma, работы с Tilda и ведения сообществ ВКонтакте. Умею работать с заказчиками, самостоятельно доводить проекты до результата и быстро осваивать новые инструменты.": "I have hands-on experience developing websites for clients, creating interfaces in Figma, working with Tilda, and managing VK communities. I communicate effectively with clients, take projects from idea to completion independently, and learn new tools quickly.",
    "Ищу возможность начать карьеру в digital-маркетинге, где смогу применять технические знания, помогать в продвижении проектов и постоянно развиваться.": "I am seeking an entry-level opportunity in digital marketing where I can apply my technical skills, help promote projects, and continue learning.",
    "Дата рождения:": "Date of birth:",
    "Местоположение:": "Location:",
    "Россия": "Russia",
    "Готовность:": "Availability:",
    "Полная занятость, стажировка": "Full-time role or internship",
    "Web-разработка": "Web Development",
    "Контент": "Content",
    "Экспертиза": "Expertise",
    "Ключевые навыки": "Core Skills",
    "Технологии и инструменты, с которыми я работаю": "Technologies and tools I work with",
    "Основы интернет-маркетинга": "Digital marketing fundamentals",
    "Основы SMM": "Social media marketing fundamentals",
    "Подготовка и публикация контента": "Content creation and publishing",
    "Ведение сообществ ВКонтакте": "VK community management",
    "Работа с сообщениями": "Community messaging",
    "Анализ конкурентов": "Competitor analysis",
    "Базовое понимание UX/UI": "Foundational UX/UI knowledge",
    "Контент-менеджмент": "Content Management",
    "Аналитика": "Analytics",
    "Адаптивная вёрстка": "Responsive Design",
    "Инструменты": "Tools",
    "Карьера": "Career",
    "Опыт работы": "Work Experience",
    "Проекты и достижения": "Projects and accomplishments",
    "Фриланс — Разработка сайтов": "Freelance — Website Development",
    "2023 — настоящее время": "2023 — Present",
    "2024-2026 — настоящее время": "2024–2026 — Present",
    "Создавал сайты для клиентов с нуля.": "Built websites for clients from the ground up.",
    "Разрабатывал дизайн страниц в Figma.": "Designed page layouts and interfaces in Figma.",
    "Писал сайты с использованием HTML5 и CSS3.": "Developed websites using HTML5 and CSS3.",
    "Использовал Tilda для создания и редактирования сайтов.": "Used Tilda to build and update websites.",
    "Вносил изменения по обратной связи от заказчиков.": "Iterated on projects based on client feedback.",
    "Самостоятельно доводил проекты до завершения.": "Managed projects independently through completion.",
    "Figma-прототип": "Figma Prototype",
    "Ведение сообщества ВКонтакте": "VK Community Management",
    "Подготавливал и публиковал контент.": "Created and published content.",
    "Отвечал на сообщения пользователей.": "Responded to community messages.",
    "Следил за оформлением сообщества.": "Maintained a consistent community visual style.",
    "Поддерживал активность страницы.": "Helped keep the page active and engaging.",
    "Официант": "Waiter",
    "Работал с большим количеством клиентов.": "Served a high volume of customers.",
    "Развил навыки коммуникации, стрессоустойчивости и работы в команде.": "Developed strong communication, teamwork, and composure under pressure.",
    "Научился быстро принимать решения в условиях высокой нагрузки.": "Learned to make quick decisions in a fast-paced environment.",
    "Работы": "Work",
    "Мои проекты": "Selected Projects",
    "Некоторые из последних работ": "A selection of my recent work",
    "Посмотреть": "View Project",
    "Сайт для компании": "Company Website",
    "Разработка лендинга на Tilda с кастомной анимацией": "Tilda landing page development with custom animation",
    "Разработка лендинга с нуля при помощи HTML5/CCS3 с кастомной анимацией": "Custom animated landing page built from scratch with HTML5 and CSS3",
    "Смотреть": "View Prototype",
    "Дизайн мобильного приложения для доставки": "Mobile delivery app interface design",
    "Ведение VK-сообщества": "VK Community Management",
    "Контент-план, посты, общение с подписчиками": "Content planning, posts, and community engagement",
    "Учёба": "Learning",
    "Образование & Сертификаты": "Education & Certificates",
    "Где я учился и что изучаю": "My education and ongoing learning",
    "Веб-разработка": "Web Development",
    "2 курс · продолжается": "Second year · In progress",
    "Курс «Бизнес»": "Business Course",
    "4 года обучения": "Four years of study",
    "Видеомонтаж": "Video Editing",
    "Планирую обучение": "Planned area of study",
    "В процессе": "In progress",
    "Языки": "Languages",
    "Русский — родной": "Russian — Native",
    "Английский — A2": "English — A2",
    "Связь": "Contact",
    "Давайте работать вместе": "Let's Work Together",
    "Готов к сотрудничеству и новым проектам": "Open to opportunities and new projects",
    "Телефон": "Phone",
    "ВКонтакте": "VK",
    "© 2026 Ярослав Иванов · Сделано с": "© 2026 Yaroslav Ivanov · Made with",
    "и кодом": "and code"
};
    const englishAttributes = {
    "Загрузка": "Loading",
    "Главная навигация": "Main navigation",
    "На главную": "Go to home section",
    "Открыть меню": "Open menu",
    "Закрыть меню": "Close menu",
    "Фото Ярослава Иванова": "Photo of Yaroslav Ivanov",
    "Сайт компании MaratDeev": "MaratDeev company website",
    "Прототип интерфейса мобильного приложения": "Mobile app interface prototype",
    "Сообщество ВКонтакте": "VK community",
    "Написать по email": "Send an email",
    "Позвонить": "Call by phone",
    "Написать в Telegram": "Message me on Telegram",
    "Профиль на GitHub": "GitHub profile",
    "Профиль ВКонтакте": "VK profile"
};
    const pageMetadata = {
    "ru": {
        "title": "Иванов Ярослав · Digital-резюме | Junior Marketing Assistant",
        "description": "Резюме Ярослава Иванова – Junior Digital Marketing Assistant, веб-разработчик, специалист по SMM и контенту. Ищу работу в digital-маркетинге.",
        "keywords": "резюме, digital маркетинг, веб-разработка, SMM, контент-менеджер, Junior, HTML, CSS, JavaScript, Tilda, Figma",
        "author": "Иванов Ярослав Сергеевич",
        "ogTitle": "Иванов Ярослав · Digital-резюме",
        "ogDescription": "Junior Digital Marketing Assistant с опытом веб-разработки и SMM. Готов к сотрудничеству.",
        "schemaName": "Иванов Ярослав Сергеевич",
        "schemaEmployer": "Фриланс"
    },
    "en": {
        "title": "Yaroslav Ivanov · Digital Resume | Junior Marketing Assistant",
        "description": "Resume of Yaroslav Ivanov, a Junior Digital Marketing Assistant with hands-on experience in web development, social media, content, Figma, and Tilda.",
        "keywords": "resume, digital marketing, web development, social media marketing, content management, Junior, HTML, CSS, JavaScript, Tilda, Figma",
        "author": "Yaroslav Ivanov",
        "ogTitle": "Yaroslav Ivanov · Digital Resume",
        "ogDescription": "Junior Digital Marketing Assistant with hands-on experience in web development, social media, and content.",
        "schemaName": "Yaroslav Ivanov",
        "schemaEmployer": "Freelance"
    }
};

    function normalizeText(value) {
        return value.replace(/\s+/g, ' ').trim();
    }

    function setMeta(attribute, key, value) {
        let element = document.querySelector('meta[' + attribute + '="' + key + '"]');
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attribute, key);
            document.head.appendChild(element);
        }
        element.setAttribute('content', value);
    }

    function translateBody(language) {
        if (language !== 'en') return;

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!normalizeText(node.nodeValue || '')) return NodeFilter.FILTER_REJECT;
                if (node.parentElement && node.parentElement.closest('script, style, noscript')) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const textNodes = [];
        let node;
        while ((node = walker.nextNode())) textNodes.push(node);

        textNodes.forEach(function (textNode) {
            const original = textNode.nodeValue;
            const translated = englishText[normalizeText(original)];
            if (!translated) return;
            const leading = (original.match(/^\s*/) || [''])[0];
            const trailing = (original.match(/\s*$/) || [''])[0];
            textNode.nodeValue = leading + translated + trailing;
        });

        document.querySelectorAll('[aria-label], [alt], [placeholder], [title]').forEach(function (element) {
            ['aria-label', 'alt', 'placeholder', 'title'].forEach(function (attribute) {
                const original = element.getAttribute(attribute);
                if (original && englishAttributes[original]) {
                    element.setAttribute(attribute, englishAttributes[original]);
                }
            });
        });
    }

    function updateMetadata(language) {
        const data = pageMetadata[language];
        const canonicalUrl = language === 'en'
            ? 'https://yaroslav-resume.ru/?lang=en'
            : 'https://yaroslav-resume.ru/';

        document.title = data.title;
        setMeta('name', 'description', data.description);
        setMeta('name', 'keywords', data.keywords);
        setMeta('name', 'author', data.author);
        setMeta('property', 'og:title', data.ogTitle);
        setMeta('property', 'og:description', data.ogDescription);
        setMeta('property', 'og:url', canonicalUrl);
        setMeta('property', 'og:locale', language === 'en' ? 'en_US' : 'ru_RU');

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.href = canonicalUrl;

        const schemaElement = document.getElementById('person-schema');
        if (schemaElement) {
            try {
                const schema = JSON.parse(schemaElement.textContent);
                schema.name = data.schemaName;
                schema.inLanguage = language;
                if (schema.worksFor) schema.worksFor.name = data.schemaEmployer;
                schemaElement.textContent = JSON.stringify(schema, null, 2);
            } catch (error) {
                console.warn('Unable to update resume schema language.', error);
            }
        }
    }

    function saveLanguagePreference(language) {
        try {
            localStorage.setItem('resume-language', language);
        } catch (error) {
            // The language still changes when browser storage is disabled.
        }

        const secure = window.location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = 'resume-language=' + language + '; Max-Age=31536000; Path=/; SameSite=Lax' + secure;
    }

    function updateLanguageToggle(language) {
        const toggle = document.getElementById('languageToggle');
        if (!toggle) return;

        const nextLanguage = language === 'en' ? 'ru' : 'en';
        const label = language === 'en' ? 'Switch to Russian' : 'Переключить на английский';
        const url = new URL(window.location.href);
        const text = toggle.querySelector('span');

        url.searchParams.set('lang', nextLanguage);
        toggle.href = url.pathname + url.search + url.hash;
        toggle.dataset.language = nextLanguage;
        toggle.setAttribute('aria-label', label);
        toggle.setAttribute('title', label);
        if (text) text.textContent = nextLanguage.toUpperCase();

        toggle.addEventListener('click', function () {
            saveLanguagePreference(nextLanguage);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const language = window.resumeInitialLanguage === 'en' ? 'en' : 'ru';
        document.documentElement.lang = language;
        translateBody(language);
        updateMetadata(language);
        saveLanguagePreference(language);
        updateLanguageToggle(language);
        document.documentElement.removeAttribute('data-language-loading');
    });
}());
