const subjectsData = {
    'web-design' : {
    1: {
        menu: [
            { id: 'app_introduction', title: 'Тема, мета, місце' },
            { id: 'business_description', title: 'Опис середовища' },
            { id: 'HTML_table_code', title: 'HTML-код таблиці' },
            { id: 'HTML_image_code', title: 'HTML-код зображення' },
            { id: 'main_page', title: 'Головна сторінка web-застосунку'},
            { id: 'main_page_code', title: 'Код головної сторінки web-застосунку'}
        ],
        content: {
            'app_introduction': 
                ` <article>
                    <h2>1. Тема, мета та місце розташування сайту</h2>
                    <h3>Тема WEB-застосунку</h3>
                    <p>SimAccu: Інтегрована WEB-платформа для Спрощеного Фінансового Обліку та 
                    Управління Клієнтами (CRM) для Індивідуальних Підприємців та Малого Бізнесу.</p>
                    <h3> Мета створення власного WEB-застосунку</h3>
                    <p><strong>Мета:</strong> надати індивідуальним підприємцям та представникам 
                    малого бізнесу інтуїтивно зрозумілий, доступний та безпечний інструмент, що 
                    об'єднує ключові функції фінансового обліку та управління взаємовідносинами 
                    з клієнтами.</p>
                    <ol><strong>Ключові цілі:</strong>
                        <li><strong>Спрощення обліку:</strong> Максимально автоматизувати та спростити процес 
                        ведення фінансових записів, дозволяючи користувачам без спеціалізованих 
                        знань швидко реєструвати доходи та витрати.</li>
                        <li><strong>Поліпшення CRM:</strong> Централізувати інформацію про клієнтів, історію взаємодій та статус 
                        угод для ефективного управління продажами та підвищення лояльності.</li>
                        <li><strong>Прийняття рішень:</strong> Надавати зрозумілу аналітику та звіти, що дозволяють власнику бізнесу швидко оцінювати 
                        фінансовий стан та приймати обґрунтовані стратегічні рішення.</li>
                    </ol>
                </article>`,
            'business_description': 
                `<article>
                    <h2>2. Опис предметного середовища та бізнес-логіки</h2>
                    <p>Предметне середовище застосунку SimAccu охоплює два ключові напрямки малого бізнесу: Фінансовий Облік та Управління Клієнтами (CRM), 
                    інтегровані в єдину систему.</p>
                    <ul>Напрям системи "Фінансовий Облік" відповідає за: 
                        <li>Облік доходів: Реєстрація всіх надходжень (оплат від клієнтів). Доходи класифікуються за категоріями (наприклад, продаж товарів, 
                        надання послуг). Система генерує та зберігає Рахунки-Фактури (Інвойси).</li>
                        <li>Облік витрат: Реєстрація всіх платежів та операційних витрат. Витрати також класифікуються за категоріями (наприклад, оренда, 
                        зарплата, маркетинг).</li>
                        <li>Категоризація: Кожен дохід і витрата має бути прив'язаний до визначеної користувачем або стандартної категорії для подальшого аналізу.</li>
                        <li>Баланс: Система автоматично розраховує поточний фінансовий результат (доходи мінус витрати) за вибраний період.</li>
                    </ul>
                    <ul>Напрям системи "Управління клієнтами" відповідає за:
                        <li>Картка клієнта: Зберігання повної інформації про фізичних чи юридичних осіб (контакти, адреси, податкові дані).</li>
                        <li>КВоронка продажів: Відстеження статусів угод ("Пропозиція відправлена", "Очікує оплати", "Успішно завершено").</li>
                        <li>Інтеграція: Успішно завершена угода в CRM автоматично створює чернетку рахунку-Фактури у блоці Обліку.</li>
                    </ul>
                    <ul>Напрям системи "Аналітика та звітність" агрегує дані з обох модулів для створення:
                        <li>Звітів про прибутки та збитки.</li>
                        <li>Звітів про ефективність продажів (конверсія воронки).</li>
                        <li>Аналізу доходів/витрат за категоріями та клієнтами.</li>
                    </ul>
                    <h3>Функціональні вимоги</h3>
                    <table border=1>
                        <tr>
                            <th>Функціональна вимога</th>
                            <th>Опис</th>
                        </tr>
                        <tr>
                            <td>Автентифікація</td>
                            <td>Користувач повинен мати можливість зареєструватися, увійти/вийти з системи.</td>
                        </tr>
                        <tr>
                            <td>Керування клієнтами</td>
                            <td>Користувач повинен мати можливість створювати, переглядати, редагувати та видаляти картки клієнтів.</td>
                        </tr>
                        <tr>
                            <td>Облік транзакцій</td>
                            <td>Користувач повинен мати можливість реєструвати нові транзакції та призначати їм категорію.</td>
                        </tr>
                        <tr>
                            <td>Керування категоріями</td>
                            <td>Користувач повинен мати можливість створювати та редагувати власні категорії транзакцій.</td>
                        </tr>
                        <tr>
                            <td>Формування звітів</td>
                            <td>Система повинна генерувати базові фінансові звіти за вибраний період.</td>
                        </tr>
                        <tr>
                            <td>Дашборд</td>
                            <td>Система повинна відображати огляд ключових фінансових показників на головній сторінці.</td>
                        </tr>
                    </table>
                    <h3>Нефункціональні вимоги</h3>
                    <table border=1>
                        <tr>
                            <th>Вимога</th>
                            <th>Опис</th>
                        </tr>
                        <tr>
                            <td>Безпека даних</td>
                            <td>Усі персональні та фінансові дані повинні передаватися лише через захищений протокол та зберігатися у зашифрованому вигляді.</td>
                        </tr>
                        <tr>
                            <td>Надійність</td>
                            <td>Система повинна забезпечувати цілодобову доступність.</td>
                        </tr>
                        <tr>
                            <td>Мобільна адаптація</td>
                            <td>Інтерфейс застосунку має бути повністю адаптивним для коректного відображення та використання на мобільних пристроях.</td>
                        </tr>
                        <tr>
                            <td>Масштабованість</td>
                            <td>Архітектура системи повинна дозволяти швидке додавання нових функцій.</td>
                        </tr>
                    </table>
                </article>  `,
            'HTML_table_code': `
                <article>
                    <h2>4. HTML код таблиці</h2>
                    <p>
                        <code>
                            &nbsp;&lt;table border=&quot;1&quot;&gt;<br>
                                &nbsp;&nbsp;&lt;tr&gt;<br>
                                    &nbsp;&nbsp;&nbsp;&lt;th&gt;Accurate Accounting&lt;/th&gt;<br>
                                    &nbsp;&nbsp;&nbsp;&lt;th&gt;Comprehensive Reporting&lt;/th&gt;<br>
                                    &nbsp;&nbsp;&nbsp;&lt;th&gt;Actionable Analytics&lt;/th&gt;<br>
                                &nbsp;&nbsp;&lt;/tr&gt;<br>
                                &nbsp;&nbsp;&lt;tr&gt;<br>
                                    &nbsp;&nbsp;&nbsp;&lt;td&gt;Easily track income and expenses, manage ledgers, and handle <br>
                                        &nbsp;&nbsp;&nbsp;all your fundamental bookkeeping tasks. Our intuitive system <br>
                                        &nbsp;&nbsp;&nbsp;ensures your records are always accurate and up-to-date.&lt;/td&gt;<br>
                                    &nbsp;&nbsp;&nbsp;&lt;td&gt;Generate detailed financial reports for virtually any purpose, <br>
                                        &nbsp;&nbsp;&nbsp;from tax filing to stakeholder review. Utilize our basic and <br>
                                        &nbsp;&nbsp;&nbsp;customizable templates to get started quickly and ensure <br>
                                        &nbsp;&nbsp;&nbsp;consistency.&lt;/td&gt;<br>
                                    &nbsp;&nbsp;&lt;td&gt;Gain powerful insights from your business data. Our analytics <br>
                                        &nbsp;&nbsp;&nbsp;tools transform your numbers into clear visualizations, helping <br>
                                        &nbsp;&nbsp;&nbsp;you understand performance, spot trends, and make informed strategic <br>
                                        &nbsp;&nbsp;&nbsp;decisions.&lt;/td&gt;<br>
                                &nbsp;&nbsp;&lt;/tr&gt;<br>
                            &nbsp;&lt;/table&gt;<br>
                        </code>
                    </p>
                </article>
            `,
            'HTML_image_code': `
                <article>
                    <h2>4. HTML код зображення</h2>
                    <p>
                        <code>
                            &lt;img src="images/logo.jpg" 
                                alt="Logo"
                                width=150px&gt;
                        </code>
                    </p>
                </article>
            `,
            'main_page' : `
                <h2>6. Головна сторінка WEB-застосунку</h2>
                <p>Для перегляду HTML-коду головної сторінки застосунку перейдіть за посиланням: </p>
                <a href="https://sandytheak.github.io/IP-zpi51_appRECORD-Okolot_Oleksandr-FIOT-2025/">Сторінка застосунку</a>
            `,
            'main_page_code' : `
                <h2>7. Код головної сотінки застосунку</h2>
                <p>Для перегляду HTML-коду головної сторінки застосунку перейдіть за посиланням: </p>
                <a href="https://github.com/sandytheak/IP-zpi51_appRECORD-Okolot_Oleksandr-FIOT-2025">Сторінка коду застосунку</a>
            `
        }
    },
    2: {
        menu: [
            { id: 'lab2_theme', title: 'Тема, мета ЛР №2 Місце розташування сайту, звіту' },
            { id: 'lab2_styles', title: 'Способи підключення стилів' },
            { id: 'lab2_sel_tag', title: 'Селектори тегу' },
            { id: 'lab2_sel_class', title: 'Селектори класу' },
            { id: 'lab2_sel_id', title: 'Селектори ідентифікаторів' },
            { id: 'lab2_sel_other', title: 'Інші селектори' },
            { id: 'lab2_css_features', title: 'CSS Просунутий' },
            { id: 'lab2_conclusions', title: 'ВИСНОВКИ до ЛР №2' }
        ],
        content: {
            'lab2_theme': `<h2>Тема та мета ЛР №2</h2><h3>Стильове оформлення документу в HTML. Каскадні таблиці стилю</h3>
            <p><b>Мета:</b> придбати практичні навички роботи з селекторами, ідентифікаторами, списками, різноманітними властивостями 
            кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів</p>`,
            'lab2_styles': `<article>
                                <h2>Способи підключення стилів CSS</h2>
                                <p>Для оформлення веб-документів використовують три основні методи підключення каскадних таблиць стилів:</p>
        
                                <ol>
                                    <li>
                                        <strong>Зовнішні стилі (External Styles):</strong>
                                        <p>Стилі описуються в окремому файлі з розширенням <code>.css</code> і підключаються в розділі <code>&lt;head&gt;</code> за допомогою тегу <code>&lt;link&gt;</code>. Це найбільш професійний спосіб, що дозволяє використовувати один файл стилів для багатьох сторінок.</p>
                                        <pre><code>&lt;link rel="stylesheet" href="css/style.css"&gt;</code></pre>
                                    </li>
                                    
                                    <li>
                                        <strong>Внутрішні стилі (Internal Styles):</strong>
                                        <p>Стилі розміщуються безпосередньо в HTML-документі всередині тегу <code>&lt;style&gt;</code>, 
                                        який зазвичай розташовується в секції <code>&lt;head&gt;</code>. 
                                        Вони діють лише на поточну сторінку.</p>
                                        <pre><code>&lt;style&gt; body { background-color: #f4f4f4; }&lt;/style&gt;</code></pre>
                                    </li>
                                    
                                    <li>
                                        <strong>Вбудовані стилі (Inline Styles):</strong>
                                        <p>Записуються безпосередньо всередині HTML-тегу за допомогою атрибута <code>style</code>. Цей спосіб має найвищий пріоритет, але робить код громіздким, тому його рекомендується використовувати лише для швидких правок.</p>
                                        <pre><code>&lt;h1 style="color: blue; text-align: center;"&gt;Заголовок&lt;/h1&gt;</code></pre>
                                    </li>
                                </ol>

                <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #104901; margin-top: 20px;">
                        <strong>Висновок:</strong> У даній лабораторній роботі було продемонстровано використання всіх трьох способів, що дозволило зрозуміти їхній пріоритет (Inline > Internal > External) та сферу застосування.
                    </div>
                </article>`,
                'lab2_sel_tag': `<article>
                                <h2>Селектори тегу (Type Selectors)</h2>
                                <h3>Приклад коду з проекту:</h3>
                                <pre><code>/* Селектор тегу для оформлення секції */
                                section {
                                    background-color: #a6e2b3; 
                                    padding: 20px;             
                                    margin-bottom: 20px;       
                                    border-left: 5px solid #223f2d; 
                                }</code></pre>
                            </article>`,
                'lab2_sel_class': `<article>
                                    <h2>Селектори класу (Class Selectors)</h2>
                                    <p>Селектор класу дозволяє застосовувати стилі до групи елементів, які мають однаковий атрибут <code>class</code>. У проекті <strong>SimAccu</strong> це основний інструмент для створення повторюваних карток переваг.</p>
                                    
                                    <div style="background-color: #f1f8f1; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                                        <strong>Синтаксис:</strong> Назва класу в CSS завжди починається з крапки (наприклад, <code>.advantage_block</code>).
                                    </div>

                                    <h3>Використання в проекті:</h3>
                                    <ul>
                                        <li><strong>.advantage_block:</strong> Контейнер для кожної окремої картки. Використовує <code>display: flex</code> та <code>flex-direction: row-reverse</code> для горизонтального розміщення тексту та зображення.</li>
                                        <li><strong>.advantage_text:</strong> Клас для блоку з описом переваги, що забезпечує гнучкий розподіл ширини (<code>flex: 2</code>) та відступи від картинки.</li>
                                        <li><strong>.top-menu та .lab-btn:</strong> Використовуються у звіті для створення горизонтального навігаційного меню з ефектами наведення (<code>:hover</code>) та активного стану.</li>
                                    </ul>

                                    <h3>Приклад коду:</h3>
                                    <pre><code>/* Оформлення картки переваг */
                            .advantage_block {
                                display: flex;
                                flex-direction: row-reverse;
                                align-items: center;
                                background: white;
                                padding: 30px;
                                border-radius: 8px;
                                box-shadow: 0 4px 6px rgba(0,0,0,0.5);
                            }</code></pre>

                                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #104901; margin-top: 20px;">
                                        <strong>Перевага:</strong> Використання класів дозволило нам створити єдиний дизайн для трьох різних блоків (Efficiency, Security, Control), просто додавши їм однакове ім'я класу в HTML.
                                    </div>
                                </article>`,
                'lab2_sel_id': `<article>
                                    <h2>Селектори ідентифікаторів (ID Selectors)</h2>
                                    <p>Селектор ідентифікатора використовується для вибору одного унікального елемента на сторінці. В HTML ідентифікатор задається атрибутом <code>id</code>, а в CSS він позначається символом решітки (<code>#</code>).</p>
                                    
                                    <div style="background-color: #fff4e5; padding: 15px; border-radius: 8px; border-left: 5px solid #ff9800; margin-bottom: 20px;">
                                        <strong>Особливість:</strong> На одній сторінці не може бути двох елементів з однаковим <code>id</code>. Вони мають найвищу специфічність серед базових селекторів.
                                    </div>

                                    <h3>Застосування у проекті SimAccu:</h3>
                                    <ul>
                                        <li><strong>#brand:</strong> Використовується для унікального блоку в хедері, що об'єднує логотип та назву компанії. Забезпечує вирівнювання елементів через <code>flex</code>.</li>
                                        <li><strong>#header-logo:</strong> Застосований до зображення логотипу для точного налаштування його розміру (<code>60px</code>) та закруглення кутів.</li>
                                        <li><strong>#main-footer:</strong> Визначає унікальні стилі для підвалу сторінки, включаючи специфічний колір фону <code>#104901</code> та відступи.</li>
                                    </ul>

                                    <h3>Приклад коду:</h3>
                                    <pre><code>/* Стилізація унікального логотипу */
                                    #header-logo {
                                        width: 60px;
                                        height: auto;
                                        border-radius: 50%; /* Кругла форма */
                                    }

                                    /* Унікальний ідентифікатор для головного футера */
                                    #main-footer {
                                        background-color: #104901;
                                        color: #ffffff;
                                        padding: 40px 0;
                                    }</code></pre>

                                            <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #104901; margin-top: 20px;">
                                                <strong>Висновок:</strong> Ідентифікатори в проекті SimAccu дозволили нам чітко розмежувати унікальні структурні частини сторінки (логотип, бренд-блок, підвал) та надати їм пріоритетні стилі, які не будуть випадково змінені іншими правилами CSS.
                                            </div>
                                </article>`,
                'lab2_sel_other': `<article>
                                    <h2>Інші селектори CSS</h2>
                                    <p>Окрім базових селекторів, у проекті використано просунуті методи вибору елементів для створення динамічних ефектів та оптимізації коду.</p>
                                    
                                    <h3>1. Псевдокласи (Pseudo-classes)</h3>
                                    <p>Використовуються для стилізації елементів у певному стані. Найпоширенішим у проекті є <code>:hover</code> — для зміни вигляду елемента при наведенні мишкою.</p>
                                    <ul>
                                        <li><strong>.top-menu li:hover:</strong> Змінює колір фону кнопок меню та прозорість, роблячи інтерфейс відгукувальним.</li>
                                        <li><strong>tr:hover:</strong> Використовується в таблицях для підсвічування рядка, на який вказує користувач.</li>
                                    </ul>

                                    <h3>2. Універсальний селектор (Universal Selector)</h3>
                                    <p>Позначається символом зірочки (<code>*</code>). Він вибирає абсолютно всі елементи на сторінці. У нашому коді він використаний для скидання стандартних налаштувань бокс-моделі.</p>
                                    <pre><code>* {box-sizing: border-box; /* Гарантує правильний розрахунок розмірів блоків */
                            }</code></pre>

                                    <h3>3. Групування селекторів</h3>
                                    <p>Дозволяє застосовувати однакові правила для декількох різних тегів одночасно, що скорочує розмір файлу CSS.</p>
                                    <pre><code>/* Спільні стилі для заголовків та списків */
                            h1, h2 {
                                text-align: center;
                            }

                            ul, ol {
                                padding: 0;
                                margin: 0;
                            }</code></pre>

                                    

                                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #104901; margin-top: 20px;">
                                        <strong>Висновок:</strong> Комбінація різних типів селекторів дозволила нам досягти чистоти коду (через групування), забезпечити передбачувану верстку (через універсальний селектор) та покращити користувацький досвід за допомогою інтерактивних станів.
                                    </div>
                                </article>`,
                'lab2_css_features': `<article>
                                            <h2>CSS: Просунуте оформлення (Таблиці, Фон, Контури)</h2>
                                            <p>У цьому розділі розглянуто використання складних властивостей CSS для створення візуально привабливого та зручного інтерфейсу проекту <strong>SimAccu</strong>.</p>
                                            
                                            <h3>1. Стилізація таблиць (Tables)</h3>
                                            <p>Замість застарілих HTML-атрибутів використано CSS для повного контролю над виглядом даних:</p>
                                            <ul>
                                                <li><strong>border-collapse: collapse;</strong> — дозволяє позбутися подвійних рамок між комірками.</li>
                                                <li><strong>nth-child(even):</strong> — створення ефекту "зебри" для покращення читабельності довгих списків продуктів.</li>
                                            </ul>
                                            <pre><code>table {width: 100%;border-collapse: collapse;}</code></pre>
                                            <pre><code>th {background-color: #104901; color: white; padding: 12px;}</code></pre>

                                            <h3>2. Робота з фоном (Backgrounds)</h3>
                                            <p>У проекті застосовано різні типи фонів для створення багатошаровості:</p>
                                            <ul>
                                                <li><strong>Кольоровий фон з прозорістю:</strong> Використання формату <code>#a5f7a262</code> для основного фону <code>body</code> дозволяє отримати м'який пастельний відтінок.</li>
                                                <li><strong>Суцільний залив:</strong> Контрастні кольори для хедера та футера для чіткого зонування сторінки.</li>
                                            </ul>

                                            <h3>3. Контури, Тіні та Закруглення (Borders, Shadows, Radius)</h3>
                                            <p>Для перетворення звичайних блоків на сучасні "картки" використано такі властивості:</p>
                                            <ul>
                                                <li><strong>border-radius:</strong> (наприклад, <code>8px</code> або <code>50%</code>) для пом'якшення кутів карток переваг та створення круглих логотипів.</li>
                                                <li><strong>box-shadow:</strong> Додає глибину елементам. Приклад з коду: <code>0 4px 6px rgba(0,0,0,0.5)</code>.</li>
                                                <li><strong>border-left:</strong> Акцентна товста рамка (<code>5px solid #223f2d</code>) для виділення логічних секцій контенту.</li>
                                            </ul>

                                            

                                            <div style="background-color: #f9f9f9; padding: 15px; border-left: 5px solid #104901; margin-top: 20px;">
                                                <strong>Висновок:</strong> Використання просунутих властивостей фону та контурів дозволило відійти від "плаского" дизайну. Таблиці стали інтерактивними, а блоки контенту отримали об'єм та чітку візуальну структуру, що характерно для сучасних CRM-систем.
                                            </div>
                                        </article>`,
                'lab2_conclusions': `<article>
                                        <h2>Висновки до лабораторної роботи №2</h2>
                                        <div style="background-color: #f1f8f1; padding: 20px; border-left: 5px solid #104901; border-radius: 8px;">
                                            <p>Під час виконання лабораторної роботи №2 були здобуті практичні навички роботи з каскадними таблицями стилів (CSS), 
                                            що дозволило перетворити структурований HTML-документ на повноцінну візуально привабливу веб-сторінку проекту <strong>SimAccu</strong>.</p>
                                            
                                            <h3>Основні досягнення:</h3>
                                            <ul>
                                                <li><strong>Опанування селекторів:</strong> На практиці застосовано різні типи селекторів (тегів, класів, ідентифікаторів), що дозволило гнучко керувати пріоритетами стилів та специфічністю елементів.</li>
                                                <li><strong>Робота з Flexbox:</strong> Вивчено сучасні методи створення адаптивних макетів. Завдяки <code>display: flex</code> та властивостям вирівнювання було реалізовано складні блоки переваг із дзеркальним розташуванням контенту.</li>
                                                <li><strong>Блочна модель (Box Model):</strong> Налаштоване керувати внутрішніми (padding) та зовнішніми (margin) відступами, а також властивістю <code>box-sizing: border-box</code> для створення передбачуваної верстки.</li>
                                                <li><strong>Стилізація компонентів:</strong> Оформлено таблиці з ефектом "зебри", створено сучасний фіксований хедер (sticky) та стилізовано футер, що забезпечило цілісність дизайну CRM-системи.</li>
                                                <li><strong>Методи підключення:</strong> Проаналізовано переваги використання зовнішніх файлів стилів (external CSS) для кращої підтримки та масштабованості коду.</li>
                                            </ul>

                                            <p style="margin-top: 15px;">
                                                <strong>Результат:</strong> Створено функціональний та естетичний інтерфейс веб-застосунку, який відповідає сучасним вимогам до UI/UX дизайну, має логічну структуру та високу читабельність.
                                            </p>
                                        </div>
                                    </article>`
            }
        },

        3: {
            menu: [
                { id: 'lab3_theme', title: 'Тема, мета ЛР №3. Місце розташування' },
                { id: 'lab3_contacts', title: 'Розробка сторінки контактів та форм'},
                { id: 'lab3_adaptive', title: 'Принципи адаптивної верстки' },
                { id: 'lab3_js_menu', title: 'Програмна реалізація меню-бутерброда' },
                { id: 'lab3_media_queries', title: 'Медіа-запити та Viewport' },
                { id: 'lab3_conclusions', title: 'ВИСНОВКИ до ЛР №3' }
            ],
            content: {
                'lab3_theme': `
                    <article>
                        <h2>Тема та мета ЛР №3</h2>
                        <h3>Верстка адаптивних веб-сторінок. JavaScript у веб-застосунках</h3>
                        <p><strong>Мета:</strong> набути практичних навичок у створенні адаптивних інтерфейсів, що коректно відображаються на пристроях з різною шириною екрана, та впровадженні базової інтерактивності за допомогою мови програмування JavaScript.</p>
                        <div style="background-color: #f1f8f1; padding: 15px; border-left: 5px solid #37f347; margin-top: 20px;">
                            <strong>Місце розташування:</strong> Проект SimAccu розгорнуто на GitHub Pages.
                        </div>
                    </article>`,
                    'lab3_contacts': `
                        <article>
                            <h2>Розробка сторінки контактів та форм</h2>
                            <p>На сторінці <strong>Contact us</strong> реалізовано форму зворотного зв'язку для збору відгуків.</p>
                            <ul>
                                <li><strong>Валідація:</strong> використано атрибути HTML5 (required, type="email") для перевірки даних перед відправкою.</li>
                                <li><strong>UX:</strong> додано випадаючий список для категоризації запитів (Технічна підтримка, Продажі тощо).</li>
                            }  <li><strong>Адаптивність:</strong> форма автоматично переходить у вертикальний режим на екранах смартфонів завдяки Flexbox.</li>
                            </ul>
                        </article>`,
                    'lab3_adaptive': `
                        <article>
                            <h2>Принципи адаптивної верстки в SimAccu</h2>
                            <p>Для виконання нефункціональної вимоги щодо мобільної адаптації було використано наступні підходи:</p>
                            <ul>
                                <li><strong>Гнучка сітка (Flexible Grids):</strong> використання відсоткових значень ширини та властивості <code>max-width: 1100px</code> для контейнерів.</li>
                                <li><strong>Плинні зображення:</strong> встановлення <code>height: auto</code> для логотипу та фото, що дозволяє їм масштабуватися без спотворення пропорцій.</li>
                                <li><strong>Трансформація контенту:</strong> зміна напрямку Flex-контейнерів з горизонтального (row) на вертикальний (column) на екранах менше 420px.</li>
                            </ul>
                            
                        </article>`,

                'lab3_js_menu': `
                    <article>
                        <h2>Програмна реалізація розкриваючогося меню</h2>
                        <p>Для мобільної версії було розроблено меню, яке початково приховане і розгортається лише при натисканні на кнопку.</p>
                        <h3>JavaScript код (DOM Manipulation):</h3>
                        <pre><code>
                            const menu = document.querySelector('#mobile-menu');
                            const navList = document.querySelector('.nav-list');

                            menu.addEventListener('click', () => {
                                navList.classList.toggle('active'); // Перемикання класу видимості
                                menu.classList.toggle('is-active'); // Анімація іконки
                            });
                        </code></pre>
                        <p>Цей підхід дозволяє економити місце на екрані смартфона, відображаючи навігацію лише за запитом користувача.</p>
                    </article>`,

                'lab3_media_queries': `
                    <article>
                        <h2>Використання Медіа-запитів</h2>
                        <p>Медіа-запити (Media Queries) дозволяють застосовувати специфічні CSS-правила залежно від характеристик пристрою.</p>
                        <p><strong>Приклад з проекту:</strong> налаштування адаптації карток переваг.</p>
                        <pre><code>
                                @media (max-width: 420px) {
                                    .advantage_block {
                                        flex-direction: column !important; /* Вертикальне розміщення */
                                        align-items: flex-start !important; /* Вирівнювання тексту ліворуч */
                                        width: 100%;
                                    }
                                    .advantage_block img {
                                        display: none; /* Приховування іконок для економії простору */
                                    }
                                }
                        </code></pre>
                    </article>`,

                'lab3_conclusions': `
                    <article>
                        <h2>Висновки до лабораторної роботи №3</h2>
                        <div style="background-color: #f9f9f9; padding: 20px; border-left: 5px solid #104901; border-radius: 8px;">
                            <p>Під час виконання ЛР №3 було реалізовано повну мобільну адаптацію веб-застосунку <strong>SimAccu</strong>.</p>
                            <ul>
                                <li><strong>Адаптивність:</strong> завдяки медіа-запитам сайт коректно відображається на смартфонах з шириною екрана 420px.</li>
                                <li><strong>Інтерактивність:</strong> впроваджено меню-бутерброд через JavaScript, що покращило UX на мобільних пристроях.</li>
                                <li><strong>Оптимізація:</strong> приховано зайві графічні елементи на малих екранах для пришвидшення завантаження та фокусування на текстовому контенті.</li>
                            </ul>
                        </div>
                    </article>`
            }                          
        }
    },
    'client-dev' : {
        1: {
        menu: [
            { id: 'okr_lab1_intro', title: 'Тема, мета, посилання' },
            { id: 'okr_lab1_task1', title: 'Завдання №1 (Час)' },
            { id: 'okr_lab1_task2', title: 'Завдання №2 (Дні тижня)' },
            { id: 'okr_lab1_task3', title: 'Завдання №3 (Логін)' },
            { id: 'okr_lab1_task4', title: 'Завдання №4 (Доставка)' },
            { id: 'okr_lab1_task5', title: 'Завдання №5 (Дроїди)' },
            { id: 'okr_lab1_task6', title: 'Завдання №6 (Масиви)' },
            { id: 'okr_lab1_task7', title: 'Завдання №7 (ОДВ Масив)' },
            { id: 'okr_lab1_task8', title: 'Завдання №8 (ДВВ Масив)' },
            { id: 'okr_lab1_conclusions', title: 'ВИСНОВКИ' }
        ],
        content: {
            'okr_lab1_intro': `
                <article>
                    <h2>Тема та мета ЛР №1</h2>
                    <h3>Основи мови JavaScript. Змінні, типи даних, розгалуження, масиви та функції</h3>
                    <p><strong>Мета:</strong> набути практичних навичок роботи з базовими конструкціями JavaScript: введення/виведення даних, умовні оператори, створення та обробка одновимірних і двовимірних масивів, а також написання власних функцій.</p>
                    
                    <h3>Посилання на ресурси:</h3>
                    <ul>
                        <li><a href="https://github.com/sandytheak/IP-zpi51_appRECORD-Okolot_Oleksandr-FIOT-2025" target="_blank">Репозиторій власного WEB-застосунку</a></li>
                        <li><a href="https://sandytheak.github.io/IP-zpi51_appRECORD-Okolot_Oleksandr-FIOT-2025/" target="_blank">Жива сторінка власного WEB-застосунку</a></li>
                        <li><a href="https://github.com/sandytheak/IP-zpi51_appWEB-Okolot_Oleksandr-FIOT-2025" target="_blank">Репозиторій звітного HTML-документу</a></li>
                        <li><a href="https://sandytheak.github.io/IP-zpi51_appWEB-Okolot_Oleksandr-FIOT-2025/?authuser=0&hl=en" target="_blank">Жива сторінка звітного HTML-документу</a></li>
                    </ul>
                    <p><em>*Примітка: замініть символ # на ваші реальні посилання.</em></p>
                </article>`,

            'okr_lab1_task1': `
                <article>
                    <h2>Завдання №1</h2>
                    <p><strong>Умова:</strong> Збережіть введене значення часу (год:хвил) у змінну hour. Вивести значення у Console, використовуючи шаблонний рядок. Перевірити до якої чверті години відноситься введене значення. Відповідь вивести за допомогою alert().</p>
                    <h3>Програмний код</h3>
                    <pre><code>
let time = prompt("Input timer in hh:mm format.", "00:00"); // default value
let errorMessage = "Wrong format. Please, use hh:mm format.";
console.log(\`User's input: \${time}\`);

let minutes, hours;
if (time === null || time.trim() === "") {
    alert("No input");
} else {
    let timePart = time.split(':');
    if (timePart.length !== 2) {
        alert(errorMessage);
    } else {
        minutes = parseInt(timePart[1]);
        hours =  parseInt(timePart[0]);
        if (isNaN(minutes) || isNaN(hours)) {
            alert(errorMessage);
        }
        else if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            alert(errorMessage);
        }
        else {
            let result;
            if (minutes < 15) result = "First";
            else if (minutes < 30) result = "Second";
            else if (minutes < 45) result = "Third";
            else result = "Fourth";
            alert(\`\${result} quarter\`);
        }     
    }
}
                    </code></pre>
                    <h3>Результати виконання (Console)</h3>
                    <img src="images/lab1/task1.png" alt="Результат Завдання 1" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
                </article>`,

            'okr_lab1_task2': `
                <article>
                    <h2>Завдання №2</h2>
                    <p><strong>Умова:</strong> Змінна day може набувати одне із 7 значень. Розв'яжіть завдання через switch-case з дефолтним значенням.</p>
                    <h3>Програмний код</h3>
                    <pre><code>
let day = prompt("Input day number from 1 to 7", "1");
let finish;
switch (day) {
    case '1': finish = "Monday"; break;
    case '2': finish = "Tuesday"; break;
    case '3': finish = "Wednesday"; break;
    case '4': finish = "Thursday"; break;
    case '5': finish = "Friday"; break;
    case '6': finish = "Saturday"; break;
    case '7': finish = "Sunday"; break;
    default: finish = "Wrong input";
}
if (finish == "Wrong input") console.log(finish);
else console.log(\`User's day: \${finish}\`);
                    </code></pre>
                    <h3>Результати виконання (Console)</h3>
                    <img src="images/lab1/task2.png" alt="Результат Завдання 2" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
                </article>`,

            'okr_lab1_task3': `
                <article>
                    <h2>Завдання №3</h2>
                    <p><strong>Умова:</strong> Запит логіна (User1, User2, User3) та пароля. Перевірка введених значень з виведенням результату через alert().</p>
                    <h3>Програмний код</h3>
                    <pre><code>
let user1 = "user1", user2 = "user2", user3 = "user3";
let pass1 = "pass1", pass2 = "pass2", pass3 = "pass3";
let messageError = "I do not know you"

let pass, login;
while (login === undefined || login === null || login.trim() === "") {
    login = prompt("Please, input you login");
}

let authorisedUser;

if (login == user1 || login == user2 || login == user3) {
    while (pass === undefined || pass === null || pass.trim() === "") {
        pass = prompt("Please, input you password");
    }
    console.log(\`User's login: \${login}\`);
    
    switch (login) {
        case user1: if (pass == pass1) authorisedUser = "User1"; break;
        case user2: if (pass == pass2) authorisedUser = "User2"; break;
        case user3: if (pass == pass3) authorisedUser = "User3"; break;
    }
    
    if(authorisedUser) alert(\`Hello, \${authorisedUser}\`);
    else alert(messageError);
} else {
    alert(messageError);
}
                    </code></pre>
                    <h3>Результати виконання (Console)</h3>
                    <img src="images/lab1/task3.png" alt="Результат Завдання 3" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
                </article>`,

            'okr_lab1_task4': `
                <article>
                    <h2>Завдання №4</h2>
                    <p><strong>Умова:</strong> Оголоси функцію getShippingMessage(country, price, deliveryFee), яка повертає рядок з повідомленням про загальну вартість доставки.</p>
                    <h3>Програмний код</h3>
                    <pre><code>
function getShippingMessage(country, price, deliveryFee) {
    if (isNaN(price) || isNaN(deliveryFee)) return "Input error.";
    let totalPrice = price + deliveryFee;
    return \`Shipping to \${country} will cost \${totalPrice} credits.\`
}

let message = getShippingMessage("Ukraine", 15.0, 150.03);
alert(message);
                    </code></pre>
                    <h3>Результати виконання (Console)</h3>
                    <img src="images/lab1/task4.png" alt="Результат Завдання 4" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
                </article>`,

            'okr_lab1_task5': `
                <article>
                    <h2>Завдання №5</h2>
                    <p><strong>Умова:</strong> Функція makeTransaction(quantity, pricePerDroid, customerCredits). Перевірка можливості оплати та виведення відповідного повідомлення.</p>
                    <h3>Програмний код</h3>
                    <pre><code>
function makeTransaction(quantity, pricePerDroid, customerCredits) {
    if (isNaN(quantity) || isNaN(pricePerDroid) || isNaN(customerCredits)) {
        return "Input error";
    }

    let totalPrice = quantity * pricePerDroid;

    if (totalPrice > customerCredits) return "Insufficient fund!";
    else return \`You ordered \${quantity} droids worth \${totalPrice} credits.\`;
}

let message = makeTransaction(10, 15.3, 200);
console.log(message);
message = makeTransaction(11, 4.5, 5);
console.log(message);
message = makeTransaction(10, 'a', 20);
console.log(message);
                    </code></pre>
                    <h3>Результати виконання (Console)</h3>
                    <img src="images/lab1/task5.png" alt="Результат Завдання 5" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
                </article>`,

            'okr_lab1_task6': `
                <article>
                    <h2>Завдання №6</h2>
                    <p><strong>Умова:</strong> Функція makeArray(firstArray, secondArray, maxLength), яка об'єднує масиви та обрізає їх до заданої довжини.</p>
                    <h3>Програмний код</h3>
                    <pre><code>
function makeArray(firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);

    if (newArray.length > maxLength) {
        newArray = newArray.slice(0, maxLength);
    }

    return newArray;
}

let first = ['Some', 'New', 'Words'];
let second = ['a', 'b', 'c'];

let result = makeArray(first, second, 3);
console.log(result);

first = ['Some', 'New', 'Words'];
second = ['a', 'b', 'c'];

result = makeArray(first, second, 9);
console.log(result);
                    </code></pre>
                    <h3>Результати виконання (Console)</h3>
                    <img src="images/lab1/task6.png" alt="Результат Завдання 6" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
                </article>`,

            'okr_lab1_task7': `
                <article>
                    <h2>Завдання №7</h2>
                    <p><strong>Умова:</strong> Робота з одновимірним масивом. Знайти суму елементів з парними індексами, максимальний елемент, мінімальний елемент з непарними індексами. Відсортувати масив.</p>
                    <h3>Програмний код</h3>
                    <pre><code>
function createArray() {
    let size = prompt("Input an array size: ");
    size = parseInt(size);
    let max = 100, min = 0;
    let newArray = [];

    if (isNaN(size) || size <= 0) {
        alert("Input is not a number or below zero, empty array will be returned");
        return [];
    }

    for (let i = 0; i < size; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        newArray.push(randomNum);
    }
    return newArray;
}

function findSumEven(someArray) {
    let sum = 0;
    for (let i = 0; i < someArray.length; i = i + 2) {
        sum += someArray[i]
    }
    return \`Sum of even elements is \${sum}.\`;
}

function findMaxValue(someArray) {
    let max = someArray[0];
    let position = 0;
    if (someArray.length != 1) {
        for (let i = 1; i < someArray.length; i++) {
            if (max < someArray[i]) {
                position = i;
                max = someArray[i];
            }
        }
    }
    return \`The max element is \${max} at the \${position} position in the array.\`;
}

function findMinOddValue(someArray) {
    if (someArray.length == 1) return "The array length is 1 element, no min value is exist!";
    let min = someArray[1];
    let position = 1;
    for (let i = 1; i < someArray.length; i = i + 2) {
        if (min > someArray[i]) {
            min = someArray[i];
            position = i;
        }
    }
    return \`The min element for odd numbers is \${min} at the \${position} position in the array.\`;
}

function sortArray(someArray) {
    let sortedArray = [...someArray].sort((a, b) => a - b);
    return sortedArray;
}

function printArray(someArray) {
    console.log("The array is:", someArray);
}

let array = createArray();
let message = findSumEven(array) 
console.log(message);

message = findMaxValue(array);
console.log(message);

message = findMinOddValue(array);
console.log(message);

let arraySorted = sortArray(array);
printArray(array);
printArray(arraySorted);
                    </code></pre>
                    <h3>Результати виконання (Console)</h3>
                    <img src="images/lab1/task7.png" alt="Результат Завдання 7" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
                </article>`,

            'okr_lab1_task8': `
                <article>
                    <h2>Завдання №8</h2>
                    <p><strong>Умова:</strong> Робота з двовимірним масивом чисел. Вивести початковий масив. Зберегти перший і останній елементи. Вставити число 25 після другого елемента.</p>
                    <h3>Програмний код</h3>
                    <pre><code>
function createArray() {
    let rows = parseInt(prompt("Input rows size: "));
    let cols = parseInt(prompt("Input columns size: "));
    let max = 100, min = -100;
    let newArray = [];

    if (isNaN(rows) || rows <= 0 || isNaN(cols) || cols <= 0) {
        alert("Input is not a number or below zero, empty array will be returned");
        return [];
    }

    for (let i = 0; i < rows; i++) {
        let currentRow = [];
        for (let j = 0; j < cols; j++) {
            let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            currentRow.push(randomNum);
        }
        newArray.push(currentRow);
    }
    return newArray;
}

function printArray(someArray) {
    console.log("The array is:");
    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i]);
    }
}

function insertTwentyFive(someArray) {
    if (someArray.length < 2) {
        console.log("The size of main arrai is less than 3, no insert is possible")
        return someArray;
    }
    someArray.splice(2, 0, [25]);
    return someArray;
}

let array = createArray();
printArray(array);

let first = array[0][0];
let last = array[array.length - 1][array[array.length - 1].length - 1];
console.log(\`First element of arraye is \${first}, the lat is \${last}\`);
let arrayNew = insertTwentyFive(array);
printArray(arrayNew);
                    </code></pre>
                    <h3>Результати виконання (Console)</h3>
                    <img src="images/lab1/task8.png" alt="Результат Завдання 8" style="max-width: 100%; border: 1px solid #ccc; border-radius: 4px;">
                </article>`,

            'okr_lab1_conclusions': `
                <article>
                    <h2>Висновки до лабораторної роботи №1</h2>
                    <div style="background-color: #f9f9f9; padding: 20px; border-left: 5px solid #104901; border-radius: 8px;">
                        <p>Під час виконання лабораторної роботи №1 були здобуті практичні навички роботи з мовою JavaScript у середовищі браузера.</p>
                        <ul>
                            <li><strong>Базові конструкції:</strong> Відпрацьовано використання функцій <code>prompt()</code> та <code>alert()</code> для взаємодії з користувачем, а також <code>console.log()</code> для виведення результатів та дебагінгу.</li>
                            <li><strong>Умовні оператори:</strong> Успішно застосовано оператори розгалуження <code>if/else</code> та <code>switch-case</code> для обробки різних сценаріїв (наприклад, визначення чверті години та днів тижня).</li>
                            <li><strong>Функції:</strong> Створено власні функції з параметрами (наприклад, для розрахунку вартості доставки та перевірки балансу) з використанням шаблонних рядків для зручного форматування результату.</li>
                            <li><strong>Робота з масивами:</strong> Набуто досвіду генерації, сортування та маніпуляції з одновимірними та двовимірними масивами. Реалізовано алгоритми пошуку максимального/мінімального значень та сум за певними умовами (індексами).</li>
                        </ul>
                    </div>
                </article>`
        }
    }
    }
};

function renderLab(subjectId, labId) {
    const sidebar = document.getElementById('sidebar-menu');
    const contentContainer = document.getElementById('lab-content');
    const currentLabData = subjectsData[subjectId]?.[labId];

    if (!currentLabData) {
        contentContainer.innerHTML = 'Звіт відсутній';
        sidebar.innerHTML = '';
        return;
    }

    sidebar.innerHTML = ''; 

    currentLabData.menu.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.title;
        li.addEventListener('click', () => {
            contentContainer.innerHTML = currentLabData.content[item.id];
            document.querySelectorAll('#sidebar-menu li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
        });
        sidebar.appendChild(li);
    });

    if (currentLabData.menu.length > 0) {
        contentContainer.innerHTML = currentLabData.content[currentLabData.menu[0].id];
        sidebar.querySelector('li')?.classList.add('active');
    }
}

function updateLabsMenu(subjectId) {
    const labsMenu = document.getElementById('labs-menu');
    labsMenu.innerHTML = '';
    
    const labsCount = Object.keys(subjectsData[subjectId]).length;
    
    for (let i = 1; i <= labsCount; i++) {
        const li = document.createElement('li');
        li.className = i === 1 ? 'lab-btn active' : 'lab-btn';
        li.textContent = `Лабораторна робота №${i}`;
        li.dataset.lab = i;
        
        li.addEventListener('click', () => {
            document.querySelectorAll('.lab-btn').forEach(b => b.classList.remove('active'));
            li.classList.add('active');
            renderLab(subjectId, i);
        });
        labsMenu.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const subjectBtns = document.querySelectorAll('.subject-btn');

    subjectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            subjectBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const selectedSubject = btn.dataset.subject;
            updateLabsMenu(selectedSubject);
            renderLab(selectedSubject, 1);
        });
    });

    updateLabsMenu('web-design');
    renderLab('web-design', 1);
});