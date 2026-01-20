const labData = {
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
                            <li><strong>Адаптивність:</strong> форма автоматично переходить у вертикальний режим на екранах смартфонів завдяки Flexbox.</li>
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
};

function renderLab(labId) {
    const sidebar = document.getElementById('sidebar-menu');
    const contentContainer = document.getElementById('lab-content');
    const currentLab = labData[labId];

    sidebar.innerHTML = ''; // Очищуємо меню

    currentLab.menu.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.title;
        li.dataset.contentId = item.id;

        if (item.subItems) {
            const subOl = document.createElement('ol');
            item.subItems.forEach(subItem => {
                const subLi = document.createElement('li');
                subLi.textContent = subItem.title;
                subLi.dataset.contentId = subItem.id;
                
                subLi.addEventListener('click', (e) => {
                    e.stopPropagation();
                    updateContent(subItem.id, subLi);
                });
                subOl.appendChild(subLi);
            });
            li.appendChild(subOl);
        }

        li.addEventListener('click', () => {
            updateContent(item.id, li);
        });

        sidebar.appendChild(li);
    });

    //update content and class
    function updateContent(id, element) {
        if (currentLab.content[id]) {
            contentContainer.innerHTML = currentLab.content[id];
            
            //remove active from li in sidebar
            document.querySelectorAll('#sidebar-menu li').forEach(el => el.classList.remove('active'));
            //add active
            element.classList.add('active');
        }
    }

    //by default - first lab
    const firstId = currentLab.menu[0].id;
    updateContent(firstId, sidebar.querySelector('li'));
}

document.addEventListener('DOMContentLoaded', () => {
    const topMenuBtns = document.querySelectorAll('.lab-btn');

    topMenuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            //COntrol active button
            topMenuBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            //Render lab
            const labId = btn.dataset.lab;
            renderLab(labId);
        });
    });

    //Initialisation of the first lab
    renderLab(1);
});