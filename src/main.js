import './style.css'
 document.body.innerHTML =`
<header>
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <h1>Fit<span>Force</span></h1>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="#" data-page="home" class="nav-link active">Главная</a></li>
                <li><a href="#" data-page="about" class="nav-link">О клубе</a></li>
                <li><a href="#" data-page="workouts" class="nav-link">Тренировки</a></li>
                <li><a href="#" data-page="schedule" class="nav-link">Расписание</a></li>
                <li><a href="#" data-page="contact" class="nav-link">Контакты</a></li>
            </ul>
            <div class="burger" id="burger">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </div>
</header>

<main>
    <div class="container">
        <!-- ГЛАВНАЯ СТРАНИЦА -->
        <div id="homePage" class="page active-page">
            <div class="hero">
                <div class="hero-content">
                    <h1>Преобрази свое тело 
 с <span style="color:#e63946;">FitForce</span></h1>
                    <p>Современный спортклуб с лучшими тренерами, инвентарем и атмосферой. Достигни целей вместе с нами!</p>
                    <a href="#" class="btn" data-page="contact">Начни тренировку <i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="hero-image">
                    <img src="https://avatars.mds.yandex.net/get-altay/10647561/2a0000018c7b81ac4fc7d2495fa054d555f5/orig" alt="Спортзал" style="object-fit: cover;">
                </div>
            </div>

            <div class="features">
                <div class="feature-card">
                    <i class="fas fa-dumbbell"></i>
                    <h3>Современное оборудование</h3>
                    <p>Новейшие тренажеры и зона функционального тренинга.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-chalkboard-user"></i>
                    <h3>Профессиональные тренеры</h3>
                    <p>Мастера спорта, сертифицированные инструкторы.</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-heartbeat"></i>
                    <h3>Групповые программы</h3>
                    <p>Йога, CrossFit, единоборства и танцы на любой вкус.</p>
                </div>
            </div>

            <div style="background: var(--light-bg); border-radius: 2rem; padding: 2rem; margin-top: 1rem;">
                <h2 class="section-title">Почему выбирают нас?</h2>
                <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1.5rem;">
                    <div style="flex:1; min-width: 180px;"><i class="fas fa-calendar-alt" style="color:#e63946;"></i> <strong>Гибкое расписание</strong>
Утро, день, вечер</div>
                    <div style="flex:1;"><i class="fas fa-water" style="color:#e63946;"></i> <strong>Фитнес-бар</strong>
Здоровое питание</div>
                    <div style="flex:1;"><i class="fas fa-shower" style="color:#e63946;"></i> <strong>Комфортные зоны</strong>
Душевые, парковка</div>
                </div>
            </div>
        </div>

        <!-- СТРАНИЦА О КЛУБЕ -->
        <div id="aboutPage" class="page">
            <h2 class="section-title">О спортивном клубе</h2>
            <div style="display: flex; flex-wrap: wrap; gap: 2rem; margin: 2rem 0;">
                <div style="flex: 1.5;">
                    <p style="font-size: 1.1rem; margin-bottom: 1rem;">FitForce основан в 2015 году профессиональными спортсменами. С тех пор мы выросли в сеть из 3 клубов и помогли более 10 000 людей обрести силу, выносливость и здоровье.</p>
                    <p>Наша философия — поддержка и индивидуальный подход. Каждый член клуба получает персональную программу тренировок и контроль прогресса. Мы верим, что спорт меняет жизнь к лучшему.</p>
                    <div style="margin-top: 1.5rem;">
                        <span class="badge">>10 000 участников</span>


<span class="badge" style="background: #1d3557;">15+ направлений</span>
                        <span class="badge">🏆 2024 Лучший фитнес-клуб</span>
                    </div>
                </div>
                <div style="flex: 1;">
                    <img src="https://i.pinimg.com/736x/df/60/32/df6032fbbf67a87d0441a44db132d23a.jpg" alt="team training" style="width:100%; border-radius: 2rem; box-shadow: var(--shadow);">
                </div>
            </div>

            <h3 class="section-title" style="font-size: 1.6rem;">Наши тренеры</h3>
            <div class="trainers-grid">
                <div class="trainer-card">
                    <img src="https://www.sportsamara.ru/assets/images/trainers/7149/hitrin-dm.jpg" alt="Тренер">
                    <h3>Дмитрий Репин</h3>
                    <p>Кроссфит, силовая подготовка | Мастер спорта</p>
                </div>
                <div class="trainer-card">
                    <img src="https://sun9-80.userapi.com/s/v1/ig2/6YuFEq9qotJWEghLS_qjFq9DjdeqyyMjeV4WVRt-lwc_0AgggAXX4BiqM3fBEtvRcSRQYJw7D1eLv524eQrlotOj.jpg?quality=95&as=32x24,48x36,72x54,108x81,160x120,240x180,360x270,480x360,540x405,640x480,720x540,1080x810,1280x960,1440x1080,2560x1920&from=bu&u=SHYwlFYX5KbYRM9bxqw3e5zHU2uo72fZKvBYMMoR6kM&cs=1280x0" alt="Тренер">
                    <h3>Матвей Бутылкин</h3>
                    <p>Бокс, ММА, функциональный тренинг</p>
                </div>
                <div class="trainer-card">
                    <img src="https://sun9-29.userapi.com/s/v1/ig2/5_r7_TU2hl2NlGejO-3epbVvLP4vr7zLQqEHBg2lWk4OxWHmwr6DXG7oUPWe9W9vybqfmri8y8dT1ZQVyXrMeb6g.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,1680x1680&from=bu&u=CzL9D6GmKyWcJwaUDmZcUBiNpVppWLIoRYKciuHILoM&cs=1280x0" alt="Тренер">
                    <h3>Елена Саенко</h3>
                    <p>Йога, пилатес, стретчинг | Сертификат Yoga Alliance</p>
                </div>
            </div>
        </div>

        <!-- СТРАНИЦА ТРЕНИРОВКИ -->
        <div id="workoutsPage" class="page">
            <h2 class="section-title">Направления тренировок</h2>
            <div class="workouts-grid">
                <div class="workout-card">
                    <img src="https://i.pinimg.com/originals/c1/4e/05/c14e0572f29fa5fab0e11a4298d64f85.jpg" alt="Кроссфит">
                    <h3>Кроссфит</h3>
                    <p>Интенсивные круговые тренировки на силу, скорость и выносливость.</p>
                    <a href="#" class="btn btn-outline" style="margin-bottom: 1rem; display: inline-block;" data-page="contact">Записаться</a>
                </div>
                <div class="workout-card">
                    <img src="https://s3.envato.com/files/24710f8c-f80f-4964-8f4f-a9a083fb4ef5/inline_image_preview.jpg" alt="Йога">
                    <h3>Йога / Релакс</h3>
                    <p>Гармония тела и разума, гибкость, дыхательные практики.</p>
                    <a href="#" class="btn btn-outline" style="margin-bottom: 1rem;" data-page="contact">Записаться</a>
                </div>
                <div class="workout-card">
                    <img src="https://excellentfit.ru/uploads/images/elements_single/services/b79aa5c24ffb36414e0f7042cf7e4689/1024x768.jpg" alt="Боевые искусства">
                    <h3>Боевые искусства</h3>
                    <p>Бокс, кикбоксинг, самооборона — для всех уровней.</p>
                    <a href="#" class="btn btn-outline" style="margin-bottom: 1rem;" data-page="contact">Записаться</a>
                </div>
                <div class="workout-card">
                    <img src="https://avatars.mds.yandex.net/i?id=962ceab28906c5732f75728faa42dcf3_l-5220772-images-thumbs&n=13" alt="TRX">
                    <h3>Функциональный тренинг</h3>
                    <p>TRX, бодибаланс, работа с весом — укрепление всего тела.</p>
                    <a href="#" class="btn btn-outline" style="margin-bottom: 1rem;" data-page="contact">Записаться</a>
                </div>
            </div>
            <div style="background: linear-gradient(120deg,#e6394608, white); padding: 1.8rem; border-radius: 2rem;">
                <p><i class="fas fa-clock"></i> <strong>Пробная тренировка — бесплатно!</strong> Приходи в любое удобное время, мы подберем программу.</p>
            </div>
        </div>

        <!-- СТРАНИЦА РАСПИСАНИЕ -->
        <div id="schedulePage" class="page">
            <h2 class="section-title">Расписание групповых занятий</h2>
            <p style="margin-bottom: 1.5rem;">Актуальное расписание на текущую неделю. Присоединяйся к любой группе!</p>
            <div class="schedule-table">
                <table>
                    <thead>


<tr><th>Время</th><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>09:00 – 10:00</td><td>Йога</td><td>Функционал</td><td>Кроссфит</td><td>Пилатес</td><td>Йога</td><td>Зумба</td></tr>
                        <tr><td>12:00 – 13:00</td><td>Boxing</td><td>TRX</td><td>Силовая</td><td>Кроссфит</td><td>Boxing</td><td>Фитнес-микс</td></tr>
                        <tr><td>18:00 – 19:00</td><td>Кроссфит</td><td>Йога</td><td>ММА</td><td>Стретчинг</td><td>Кроссфит</td><td>Детская группа</td></tr>
                        <tr><td>19:30 – 20:30</td><td>Зумба</td><td>Бокс</td><td>Функционал</td><td>Йога-нидра</td><td>TRX</td><td>—</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="features" style="margin-top: 2rem;">
                <div class="feature-card"><i class="fas fa-child"></i><h4>Детские группы</h4><p>от 7 до 14 лет (сб 11:00)</p></div>
                <div class="feature-card"><i class="fas fa-running"></i><h4>Индивидуальные</h4><p>По записи с тренером</p></div>
            </div>
        </div>

        <!-- СТРАНИЦА КОНТАКТЫ -->
        <div id="contactPage" class="page">
            <h2 class="section-title">Свяжитесь с нами</h2>
            <div class="contact-wrapper">
                <div class="contact-info">
                    <h3>Контакты клуба</h3>
                    <p><i class="fas fa-map-marker-alt"></i> г. Новосибирск, ул. Восход, 20</p>
                    <p><i class="fas fa-phone-alt"></i> +7 (996) 280-70-59</p>
                    <p><i class="fas fa-envelope"></i> kiborg@fitforce.ru</p>
                    <p><i class="fas fa-clock"></i> Ежедневно: 08:00 – 23:00</p>
<div class="map-placeholder" style="margin-top: 20px;">
  <iframe 
    src="https://yandex.ru/map-widget/v1/?ll=82.941856,55.012389&z=17&pt=82.941856,55.012389,flag&l=map"
    width="100%" 
    height="320" 
    frameborder="0"
    allowfullscreen="true">
  </iframe>
</div>
                </div>
                <div class="contact-form">
                    <h3>Записаться на пробное занятие</h3>
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" id="name" placeholder="Ваше имя" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <textarea rows="3" placeholder="Сообщение / вид тренировки" id="message"></textarea>
                        </div>
                        <button type="submit" class="btn">Отправить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

<footer>
    <div class="container">
        <div class="social-icons">
            <a href="#"><i class="fab fa-vk"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-telegram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
        <p>© 2025 FitForce Спортивный клуб. Все права защищены. Будь сильным, будь собой.</p>
    </div>
</footer>
 `
const pages = {
        home: document.getElementById('homePage'),
        about: document.getElementById('aboutPage'),
        workouts: document.getElementById('workoutsPage'),
        schedule: document.getElementById('schedulePage'),
        contact: document.getElementById('contactPage')
    };

    const navLinks = document.querySelectorAll('.nav-link');
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navLinks');

    function showPage(pageId) {
        Object.values(pages).forEach(page => {
            page.classList.remove('active-page');
        });
        if (pages[pageId]) {
            pages[pageId].classList.add('active-page');
        }
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('data-page');
            if (linkPage === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (navMenu.classList.contains('nav-active')) {
            navMenu.classList.remove('nav-active');
        }
    }

    function handleNavigation(e) {
        e.preventDefault();
        const target = e.currentTarget;
        let pageId = target.getAttribute('data-page');
        if (!pageId && target.closest('[data-page]')) {
            pageId = target.closest('[data-page]').getAttribute('data-page');
        }
        if (pageId && pages[pageId]) {
            showPage(pageId);
            history.pushState({ page: pageId }, '', `#${pageId}`);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    document.querySelectorAll('[data-page]').forEach(el => {
        if (el.classList && el.classList.contains('nav-link')) return;
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = el.getAttribute('data-page');
            if (pageId && pages[pageId]) showPage(pageId);
        });
    });

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('nav-active');
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!burger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('nav-active');
            }
        }
    });

    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            if (name) {
                alert(`Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.`);
                form.reset();
            } else {
                alert('Пожалуйста, заполните имя.');
            }
        });
    }

    const hash = window.location.hash.slice(1);
    if (hash && pages[hash]) {
        showPage(hash);
    } else {
        showPage('home');
    }
    
    window.addEventListener('popstate', (event) => {
        const page = event.state?.page || window.location.hash.slice(1);
        if (page && pages[page]) showPage(page);
        else showPage('home');
    });
