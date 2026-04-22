const programs = [
        {
            icon: "fas fa-chart-line",
            name: "Коммерция",
            desc: "Подготовка специалистов в сфере коммерческой деятельности, экономики и управления",
            hours: "520 часов",
            price: "39 900 ₽"
        },
        {
            icon: "fas fa-child",
            name: "Специальное дошкольное образование",
            desc: "Коррекционная работа с детьми дошкольного возраста, логопедия, дефектология",
            hours: "620 часов",
            price: "44 900 ₽"
        },
        {
            icon: "fas fa-chalkboard-teacher",
            name: "Коррекционная педагогика в начальном образовании",
            desc: "Работа с детьми с ОВЗ, методики коррекционного обучения в начальной школе",
            hours: "540 часов",
            price: "42 900 ₽"
        },
        {
            icon: "fas fa-puzzle-piece",
            name: "Дошкольное образование",
            desc: "Воспитатель ДОУ, современные методики развития детей, ФГОС",
            hours: "520 часов",
            price: "37 900 ₽"
        },
        {
            icon: "fas fa-users",
            name: "Педагогика дополнительного образования",
            desc: "Организация кружковой работы, разработка программ дополнительного образования",
            hours: "500 часов",
            price: "38 900 ₽"
        },
        {
            icon: "fas fa-info",
            name: "Информатика",
            desc: "Современные подходы к преподаванию информатики, алгоритмизация, цифровая грамотность педагога",
            hours: "400 часов",
            price: "33 900 ₽"
        }
    ];

    // Отзывы слушателей
    const testimonials = [
        {
            text: "Прошла профессиональную переподготовку по программе «Специальное дошкольное образование». Отличная организация учебного процесса, доступные материалы, кураторы всегда на связи. Получила диплом, который позволил устроиться в коррекционный детский сад.",
            name: "Екатерина В.",
            role: "учитель-дефектолог"
        },
        {
            text: "Выбрал программу «Педагогика дополнительного образования». Очень удобный дистанционный формат, можно совмещать с работой. Преподаватели дают актуальные знания, много практических кейсов. Рекомендую!",
            name: "Алексей М.",
            role: "педагог дополнительного образования"
        },
        {
            text: "Обучение по направлению «Дошкольное образование» помогло систематизировать знания и получить современные компетенции. Документы оформлены быстро, всё внесено в ФИС ФРДО. Спасибо команде ИДПО!",
            name: "Марина С.",
            role: "воспитатель ДОУ"
        }
    ];

    // Рендер программ
    function renderPrograms() {
        const container = document.getElementById('programsGrid');
        if (!container) return;

        container.innerHTML = programs.map(program => `
            <div class="program-card">
                <div class="program-icon"><i class="${program.icon}"></i></div>
                <h3>${program.name}</h3>
                <p>${program.desc}</p>
                <div class="program-details">
                    <span class="program-hours"><i class="far fa-clock"></i> ${program.hours}</span>
                    <span class="program-price">${program.price}</span>
                </div>
                <a href="#contact" class="btn-outline" style="display: inline-block; margin-top: 20px; width: 100%; text-align: center;">Записаться →</a>
            </div>
        `).join('');
    }


    // Повышение квалификации - данные
const trainingPrograms = [
    {
        icon: "fas fa-music",
        name: "Музыкальное искусство в развитии и воспитании детей в ДОО",
        desc: "Развитие музыкальных способностей и воспитание детей в условиях ФГОС ДО",
        hours: "72 часа",
        price: "8 900 ₽"
    },
    {
        icon: "fas fa-book-open",
        name: "ФАОП дошкольного образования",
        desc: "Федеральная адаптированная образовательная программа: требования и особенности",
        hours: "64 часа",
        price: "7 900 ₽"
    },
    {
        icon: "fas fa-users",
        name: "Просвещение родителей детей раннего возраста",
        desc: "Работа с родителями детей младенческого, раннего и дошкольного возраста в ДОО",
        hours: "56 часов",
        price: "6 900 ₽"
    },
    {
        icon: "fas fa-star",
        name: "Организация дополнительных услуг в ДОО",
        desc: "Организация дополнительных образовательных услуг в дошкольной образовательной организации",
        hours: "72 часа",
        price: "8 500 ₽"
    },
    {
        icon: "fas fa-chalkboard-user",
        name: "Управление образовательной организацией",
        desc: "Управление в условиях реализации ФГОС НОО, ФГОС ООО, ФГОС СОО",
        hours: "80 часов",
        price: "9 900 ₽"
    },
    {
        icon: "fas fa-map-marker-alt",
        name: "Преподавание кубановедения",
        desc: "Особенности преподавания кубановедения в соответствии с ФГОС",
        hours: "48 часов",
        price: "5 900 ₽"
    }
];

// Рендер программ повышения квалификации
function renderTraining() {
    const container = document.getElementById('trainingGrid');
    if (!container) return;
    
    container.innerHTML = trainingPrograms.map(program => `
        <div class="program-card">
            <div class="program-icon"><i class="${program.icon}"></i></div>
            <h3>${program.name}</h3>
            <p>${program.desc}</p>
            <div class="program-details">
                <span class="program-hours"><i class="far fa-clock"></i> ${program.hours}</span>
                <span class="program-price">${program.price}</span>
            </div>
            <a href="#contact" class="btn-outline" style="display: inline-block; margin-top: 20px; width: 100%; text-align: center;">Записаться →</a>
        </div>
    `).join('');
}

// Добавьте вызов функции после существующего рендера
document.addEventListener('DOMContentLoaded', function() {
    renderPrograms();
    renderTraining(); // новый вызов
    renderTestimonials(); // если есть функция рендера отзывов
});
    // Рендер отзывов
    function renderTestimonials() {
        const container = document.getElementById('testimonialsGrid');
        if (!container) return;

        container.innerHTML = testimonials.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-text">“${t.text}”</div>
                <div class="testimonial-author">
                    <i class="fas fa-user-circle"></i>
                    <div>
                        <strong>${t.name}</strong><br>
                        <small style="color: #6c8da8;">${t.role}</small>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Показ уведомления
    function showToast(message, isError = false) {
        const existingToast = document.querySelector('.toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.style.background = isError ? '#c44536' : '#1e4a6b';
        toast.innerHTML = `<i class="fas ${isError ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 4000);
    }

    // Обработка формы
    function initForm() {
        const form = document.getElementById('applicationForm');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name')?.value.trim();
            const phone = document.getElementById('phone')?.value.trim();
            const program = document.getElementById('programSelect')?.value;

            if (!name || !phone) {
                showToast('Пожалуйста, заполните имя и телефон', true);
                return;
            }

            if (phone.length < 10) {
                showToast('Введите корректный номер телефона', true);
                return;
            }

            console.log('Заявка на обучение:', { name, phone, program });
            showToast(`Спасибо, ${name}! Заявка на программу "${program}" принята. Менеджер свяжется с вами.`);
            form.reset();
        });
    }

    // Плавная прокрутка
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === "#" || href === "") return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // Инициализация
    document.addEventListener('DOMContentLoaded', () => {
        renderPrograms();
        renderTestimonials();
        initForm();
        initSmoothScroll();
    });