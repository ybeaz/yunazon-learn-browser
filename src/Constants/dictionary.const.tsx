import React from 'react'

export type IDictionary = Record<string, any>

export const DICTIONARY: IDictionary = {
  _: {
    en: '_',
    ru: '_',
  },
  stage_metaData: {
    en: 'getting meta data',
    ru: 'получение мета данных',
  },
  stage_transcript: {
    en: 'resource obtaining',
    ru: 'получение ресурса',
  },
  stage_summary: {
    en: 'content preprocessing',
    ru: 'предобработка контента',
  },
  stage_questions: {
    en: 'module creation',
    ru: 'создание модуля',
  },
  stage_objections: {
    en: 'objections creation',
    ru: 'создание возражений',
  },
  stage_courseModule: {
    en: 'finalization',
    ru: 'завершение',
  },
  todo: {
    en: 'not started',
    ru: 'не начато',
  },
  pending: {
    en: 'in progress',
    ru: 'в процессе',
  },
  sucess: {
    en: 'success',
    ru: 'успешно закончено',
  },
  failure: {
    en: 'failure',
    ru: 'произошла ошибка',
  },
  Show: {
    en: 'Show',
    ru: 'Показать',
  },
  Hide: {
    en: 'Hide',
    ru: 'Скрыть',
  },
  summary: {
    en: 'summary',
    ru: 'краткое изложение',
  },
  objections: {
    en: 'objections',
    ru: 'возражения',
  },
  Create_course: {
    en: 'Create course',
    ru: 'Создать курс',
  },
  My_courses: {
    en: 'My courses',
    ru: 'Мои курсы',
  },
  My_documents: {
    en: 'My documents',
    ru: 'Мои документы',
  },
  Competencies: {
    en: 'Competencies',
    ru: 'Компетенции',
  },
  My_profile: {
    en: 'My profile',
    ru: 'Мой профиль',
  },
  tell_about_yourself: {
    en: 'tell about yourself',
    ru: 'расскажите о себе',
  },
  Save: {
    en: 'Save',
    ru: 'Сохранить',
  },
  Up: {
    en: 'Up',
    ru: 'Наверх',
  },
  Success_Stories: {
    en: 'Success Stories',
    ru: 'Успешные истории',
  },
  Online: {
    en: 'Online',
    ru: 'Онлайн',
  },
  Catalog_of_Topics: {
    en: 'Catalog of Topics',
    ru: 'Каталог тем',
  },
  Receive_users_by_topic: {
    en: 'Display users by topic',
    ru: 'Вывести по теме пользователей',
  },
  Get_users_by_topic: {
    en: 'Get users by topic',
    ru: 'Получить пользователей по теме',
  },
  Get_user_list: {
    en: 'Get user list',
    ru: 'Получить список пользователей',
  },
  Get_chat_list: {
    en: 'Get chat list',
    ru: 'Получить чат лист',
  },
  A_list_to_chat_is_created: {
    en: 'Chat list is created from people with experience in the field',
    ru: 'Чат лист создается из людей с опытом в указанной области',
  },
  Service_works_simply: {
    en: 'Service works simply',
    ru: 'Сервис работает просто',
  },
  Select: {
    en: 'Select',
    ru: 'Подобрать',
  },
  Choose: {
    en: 'Choose',
    ru: 'Выбрать',
  },
  choose: {
    en: 'choose',
    ru: 'выбрать',
  },
  clarify_the_question: {
    en: 'clarify the question',
    ru: 'уточнить вопрос',
  },
  if_needed: {
    en: 'if needed',
    ru: 'если нужно',
  },
  optionaly: {
    en: 'optionaly',
    ru: 'не обязательно',
  },

  Use_filters: {
    en: 'Use filters',
    ru: 'Использовать фильтры',
  },
  and_begin_to_chat: {
    en: 'and begin to chat',
    ru: 'и начать чат',
  },
  person: {
    en: 'a person',
    ru: 'собеседника(цу)',
  },
  ageGroup: {
    en: 'age group',
    ru: 'возрастой группе',
  },
  reputation: {
    en: 'reputation',
    ru: 'репутации',
  },
  gender: {
    en: 'gender',
    ru: 'полу',
  },
  age: {
    en: 'age',
    ru: 'возраст',
  },
  geography: {
    en: 'geography',
    ru: 'географии',
  },
  country: {
    en: 'country',
    ru: 'стране',
  },
  browser_app: {
    en: 'browser app',
    ru: 'страницу в браузере',
  },
  mobile_app: {
    en: 'mobile app',
    ru: 'мобильное приложение',
  },
  other: {
    en: 'other',
    ru: 'другое',
  },
  topic: {
    en: 'topic',
    ru: 'тему',
  },
  category: {
    en: 'category',
    ru: 'категорию',
  },
  language: {
    en: 'language',
    ru: 'язык',
  },
  Ask_and_offer_help: {
    en: 'Ask and offer help',
    ru: '_',
  },
  Say_hello_and_hear_new_things: {
    en: 'Say hello and hear new things',
    ru: 'Поприветствовать и услышать новое',
  },
  Ask_question_and_extend_contacts: {
    en: 'Ask question and extend contacts',
    ru: 'Задать вопрос и расширить контакты',
  },
  Ask_question_and_begin_the_talk: {
    en: 'Ask question and begin the talk',
    ru: 'Задать вопрос и начать беседу',
  },
  messaging: {
    en: 'messaging',
    ru: 'сообщения',
  },
  voice: {
    en: 'voice',
    ru: 'голос',
  },
  video: {
    en: 'video',
    ru: 'видео',
  },
  Manage: {
    en: 'Manage',
    ru: 'Управлять',
  },
  enjoy: {
    en: 'enjoy',
    ru: 'ответы и общение',
  },
  pause: {
    en: 'pause',
    ru: 'пауза',
  },
  configure: {
    en: 'configure',
    ru: 'настройки',
  },
  Features: {
    en: 'Features',
    ru: 'Свойства',
  },
  Communicate_receiving_information_and_giving_help: {
    en: 'Communicate receiving information and giving help',
    ru: 'Общайтесь, получая информацию и оказывая помощь',
  },
  Communicate_in_good_company_receiving_information_and_giving_help: {
    en: 'Communicate in good company receiving information and giving help',
    ru: 'Общайтесь в хорошей компании, получая информацию и оказывая помощь',
  },
  Enjoy_good_company_while_receiving_information_and_giving_help: {
    en: 'Enjoy good company while receiving information and giving help',
    ru: 'Наслаждайтесь хорошей компанией, получая информацию и оказывая помощь',
  },
  Enjoy_good_company_while_receiving_and_giving_help: {
    en: 'Enjoy good company while receiving and giving help',
    ru: 'Наслаждайтесь хорошей компанией, получая и оказывая помощь',
  },
  real_people_is_talking_to_you: {
    en: 'Here, real people is talking to you, not chat bots or robots.',
    ru: 'Здесь с вами говорят живые люди, а не чат боты или роботы.',
  },
  Users_are_ready_to_start_a_conversation: {
    en: 'Users are ready to start a conversation on topics of mutual interests.',
    ru: 'Пользователи готовы начать общаться по темам взаимных интересов.',
  },
  Everybody_is_protected: {
    en: 'Everybody is protected',
    ru: 'Каждый защищен',
  },
  There_are_people_for_all_major_topics: {
    en: 'People with knowledge of many themes are already here.',
    ru: 'Пользователи по многим темам уже здесь.',
  },
  You_don_t_need_to_wait: {
    en: "You don't need to wait",
    ru: 'Вам не нужно ждать',
  },
  You_can_find_a_person_of_your_interests: {
    en: 'You can find a person of your interests',
    ru: 'Вы можете найти человека по вашим интересам,',
  },
  who_is_ready_to_answer_your_topic_right_now: {
    en: 'who is ready to answer your topic right now',
    ru: 'который готов ответить по вашей теме прямо сейчас',
  },
  who_is_ready_to_answer_your_question_right_now: {
    en: 'who is ready to answer your question right now',
    ru: 'который готов ответить на ваш вопрос прямо сейчас',
  },
  Our_contacts: {
    en: 'Our contacts',
    ru: 'Наши контакты',
  },
  WhatsApp: {
    en: 'WhatsApp',
    ru: 'WhatsApp',
  },
  Tel: {
    en: 'Tel',
    ru: 'Тел',
  },
  This_functionality_is_under_development: {
    en: 'This functionality is under development',
    ru: 'Функциональность сервиса находится в стадии разработки.',
  },
  We_are_currently_looking_for_support_and_feedback: {
    en: 'We are currently looking for support and feedback.',
    ru: 'В настоящее время мы ищем поддержку и отзывы.',
  },
  If_you_have_any_ideas_or_opinions: {
    en: 'If you have any ideas, opinion or suggesions,',
    ru: 'Если у вас есть идеи, мнение или предложения,',
  },
  dont_hesitate_to_share_with_us: {
    en: "don't hesitate to share them with us",
    ru: 'делитесь вашими мыслями',
  },
  please_share_them_with_us: {
    en: 'please, share them with us',
    ru: 'пожалуйста, поделитесь ими с нами',
  },
  Please_fill_required_fields: {
    en: 'Please fill required fields',
    ru: 'Пожалуйста, заполните обязательные поля',
  },
  Basic_search: {
    en: 'Basic search',
    ru: 'Простой поиск',
  },
  Advanced_search: {
    en: 'Advanced search',
    ru: 'Расширенный поиск',
  },
  Knowledge_and_experience: {
    en: 'Knowledge and experience',
    ru: 'Знания и опыт',
  },
  directly_from_people: {
    en: 'directly from people',
    ru: 'напрямую от людей',
  },
  _3_million_members: {
    en: '3 million members',
    ru: '3 миллиона пользователей',
  },
  _175_countries: {
    en: '175 countries & territories',
    ru: '175 стран и территорий',
  },
  _11000_knowledges_and_skills: {
    en: '11000 knowledges & skills ',
    ru: '11000 знаний и умений',
  },
  Over_3_million_members: {
    en: (
      <>
        Over 3 million members
        <br />
        from over 175 countries
        <br />
        offers more than 11000 skills
      </>
    ),
    ru: (
      <>
        3 миллиона пользователей
        <br />
        из 175 стран готовы предложить
        <br />
        более 11000 знаний и умений
      </>
    ),
  },
  Here_you: {
    en: 'Here you',
    ru: 'Здесь вы',
  },
  Get_intro_knowledge_and_answers: {
    en: 'Get intro answers and knowledge in real time',
    ru: 'Получайте ответы и знания в реальном времени',
  },
  Get_answers_and_knowledge_in_real_time: {
    en: 'Get answers and knowledge in real time',
    ru: 'Получайте ответы и знания в реальном времени',
  },
  Get_answers_to_your_questions_and_information: {
    en: 'Get answers to your questions and information',
    ru: 'Получаете ответы на ваши вопросы и информацию',
  },
  Get_answers_and_knowledge_from_people: {
    en: 'Get answers and knowledge from people',
    ru: 'Получаете ответы и знания от людей',
  },
  Share_your_knowledge: {
    en: 'Share your experience',
    ru: 'Делитесь своим опытом',
  },
  and_skills: {
    en: 'and skills',
    ru: 'и умениями',
  },
  Become_an_expert_for_others: {
    en: 'Become an expert for others in your field',
    ru: 'Становитесь экспертом для других в своей области',
  },
  Share_your_knowledge_and_skills: {
    en: 'Share your experience and skills',
    ru: 'Делитесь своим опытом и умениями',
  },
  Find_people_by_knowledge_and_skills: {
    en: 'Find people by knowledge and skills quickly',
    ru: 'Быстро находите людей по знаниям и умениям',
  },
  open_for_contacts: {
    en: 'open for contacts',
    ru: 'открытых для контактов',
  },
  Expand_your_circle_of_friends_by_interests: {
    en: 'Expand your circle of friends by interests',
    ru: 'Расширяете круг знакомых по интересам',
  },
  Find_and_add_people_contacts_by_interests: {
    en: 'Find and add people contacts by interests',
    ru: 'Находите и добавляйте людей по интересам',
  },
  Meet_and_add_contacts_by_interests: {
    en: 'Meet and add contacts by interests',
    ru: 'Знакомьтесь и добавляйте контакты по интересам',
  },
  Make_acquaintances_by_interests: {
    en: 'Make new acquaintances by interests',
    ru: 'Приобретайте новые знакомства по интересам',
  },
  Make_friends_in_different_regions: {
    en: 'Make friends in different regions and countries',
    ru: 'Заводите друзей из разных областей и стран',
  },
  Chat_on_your_topics_in_all_languages: {
    en: 'Chat on your topics in native and other languages',
    ru: 'Общаетесь по вашим темам на родном и других языках',
  },
  Chat_meet_new_people: {
    en: 'Chat and meet new people',
    ru: 'Общайтесь, узнавайте новых людей',
  },
  Communicate_practice_foreign_languages: {
    en: 'Communicate, practice foreign languages',
    ru: 'Общайтесь, практикуйте иностранные языки',
  },
  Get_started_in_any_knowledge: {
    en: 'Get started in any knowledge area quickly, share your skills while \
    making friends in different regions and countries',
    ru: 'Начинайте в любой области знаний быстро, \
    делитесь своими умениями и заводите другей из разных регионов и стран',
  },
  You_can_find_a_user: {
    en: 'You can find a friend and get answers your questions by',
    ru: 'Вы можете найти друга и получить ответы на ваши вопросы, выбирая',
  },
  required_information: {
    en: 'required information',
    ru: 'требуемую информацию',
  },
  required_knowledge: {
    en: 'required knowledge',
    ru: 'требуемые знания',
  },
  language_of_communication: {
    en: 'language of communication',
    ru: 'язык коммуникации',
  },
  mean_of_communication: {
    en: 'mean of communication',
    ru: 'способ связи',
  },
  other_criteria: {
    en: 'other criteria',
    ru: 'другие критерии',
  },
  You_will_have_a_chance_to_hear: {
    en: 'You will have a chance to hear an explanation of the topic your are \
    interested in and you will help with what you know better',
    ru: 'Вы получите шанс услышать объяснение предмета своего интереса и помочь в том, что вы знаете лучше',
  },
  You_can_also_host_or_take_video_lessons: {
    en: 'You can also host or take video lessons-tests from our members, \
    to prove knowledge and get a certificate',
    ru: 'Вы также можете разместить или пройти видео уроки-тесты, \
    подтвердить знания и получить сертификат',
  },
  Required: {
    en: 'Required',
    ru: 'Обязательно выбрать',
  },
  'Toggle site theme': {
    en: 'Toggle site theme',
    ru: 'Переключить стиль сайта',
  },
  'Multi choice': {
    en: 'Multi choice',
    ru: 'Мульти выбор',
  },
  optional: {
    en: 'optional',
    ru: 'опционно',
  },
  Continue: {
    en: 'Continue',
    ru: 'Продолжить',
  },
  Search: {
    en: 'Search',
    ru: 'Поиск',
  },
  'Sort results by': {
    en: 'Sort results by',
    ru: 'Отрортировать результаты по',
  },
  Matter_of_interest: {
    en: 'Matter of interest/ question',
    ru: 'Интересующий вопрос/ тема',
  },
  Specific_topic: {
    en: 'Specific topic/ question',
    ru: 'Тема/ вопрос детально',
  },
  Specific_question: {
    en: 'Specific question',
    ru: 'Вопрос детально',
  },
  'Description contains': {
    en: 'Description contains',
    ru: 'Описание содержит',
  },
  Year_of_birth: {
    en: 'Year of birth',
    ru: 'Год рождения',
  },
  Communication_media: {
    en: 'Communication media',
    ru: 'Способ коммуникации',
  },
  'Select media': { en: 'Select media', ru: 'Выберете способ коммуникации' },
  'Prefered media or mean': {
    en: 'Prefered media or mean',
    ru: 'Предпочтительный способ коммуникации',
  },
  'Prefered gender': {
    en: 'Prefered gender',
    ru: 'Предпочтения по полу',
  },
  AboutUser: {
    en: 'About',
    ru: 'Oбо мне',
  },
  Media: {
    en: 'Media',
    ru: 'Медиа',
  },
  Gender: {
    en: 'Gender',
    ru: 'Пол',
  },
  to: {
    en: 'to',
    ru: 'до',
  },
  fromStart: {
    en: 'from',
    ru: 'от',
  },
  Age: {
    en: 'Age',
    ru: 'Возраст',
  },
  Languages: {
    en: 'Languages',
    ru: 'Языки',
  },
  Speaking_languages: {
    en: 'Speaking languages',
    ru: 'Языки общения',
  },
  Country: {
    en: 'Country',
    ru: 'Страна',
  },
  Category_info_you_are_looking_for: {
    en: 'Category/ topic',
    ru: 'Категория/ тема',
  },
  Knowledge_info_you_are_looking_for: {
    en: 'Knowledge/info you are looking for',
    ru: 'Знания/информация, которую вы ищите',
  },
  Find_a_skill_exchange_partner_who_has: {
    en: 'Find a skill exchange partner who has',
    ru: 'Найдите участника со знаниями',
  },
  You_are_suggesting_to_exchange: {
    en: 'You are suggesting to exchange',
    ru: 'Вы предлагаете для обмена',
  },
  Together_know_everything: {
    en: 'Together know everything',
    ru: 'Вместе знаем все',
  },
  Together_we_know: {
    en: 'Together we know',
    ru: 'Вместе мы знаем',
  },
  You_Know: {
    en: ' - You Know!',
    ru: ' - Вы знаете!',
  },
  Topics_People_Connections: {
    en: ' - Topics People Connections',
    ru: ' - Темы Связи с людьми',
  },
  Knowledge_Exchange_and_Useful_Contacts: {
    en: 'Knowledge Exchange and Useful Contacts',
    ru: 'Обмен знаниями и полезные контакты',
  },
  Useful_and_interesting_contacts: {
    en: 'Useful and interesting contacts',
    ru: 'Полезные и интересные контакты',
  },
  Knowledge_Exchange_and_Contacts_to_Experience: {
    en: 'Knowledge Exchange and Contacts to Experience',
    ru: 'Обмен знаниями и контакты для получения опыта',
  },
  Knowledge_Exchange_and_Connection_to_People: {
    en: 'Knowledge Exchange and Connection to People',
    ru: 'Обмен знаниями и контакты',
  },
  Knowledge_Exchange_and_Professional_Contacts: {
    en: 'Knowledge Exchange and Professional Contacts',
    ru: 'Обмен знаниями и профессиональные контакты',
  },
  Knowledge_Exchange_and_Contacts: {
    en: 'Knowledge Exchange and Contacts',
    ru: 'Обмен знаниями и контакты',
  },
  Knowledge_and_experience_directly_from_people: {
    en: 'Knowledge and experience directly from people',
    ru: 'Знания и опыт напрямую от людей',
  },
  Welcome_to_Experience_Exchange_Service: {
    en: 'Welcome to Experience Exchange Service!',
    ru: 'Добро пожаловать в Сервис Обмена Опытом',
  },
  Welcome_to_Knowledge_Exchange_Community: {
    en: 'Welcome to Knowledge Exchange Community!',
    ru: 'Добро пожаловать в Сообщество Обмена Знаниями',
  },
  Fast_Knowledge_and_Experience_Exchange: {
    en: 'Fast Knowledge and Experience Exchange',
    ru: 'Быстрый Обмен Знаниями и Опытом',
  },
  'Members Search - Fast Skill Exchange': {
    en: 'Fast Knowledge Exchange',
    ru: 'Быстрый Обмен Знаниями',
  },
  'Members Search - Find a Skill Exchange Partner': {
    en: 'Members Search - Find a Skill Exchange Partner',
    ru: 'Поиск Пользователей - Найдите Партнера по Обмену Знаниями',
  },
  'multi choice': {
    en: 'multi choice',
    ru: 'множественный выбор',
  },
  notSelected: {
    en: 'not selected',
    ru: 'не выбрано',
  },
  select: {
    en: 'select',
    ru: 'выберете',
  },
  PleaseReloadThePage: {
    en: (
      <div>
        Please reload the page and
        <br />
        try with Google again or
        <br />
        or proceed with another option
      </div>
    ),
    ru: (
      <div>
        Перезагрузите страницу и<br />
        попобуйте с Гуугл снова или
        <br />
        попробуйте другую опцию
      </div>
    ),
  },
  Academy: {
    en: 'Academy',
    ru: 'Академия',
  },
  name: {
    en: 'name',
    ru: 'имя',
  },
  Name: {
    en: 'Name',
    ru: 'Имя',
  },
  Back: {
    en: 'Back',
    ru: 'Назад',
  },
  Next: {
    en: 'Next',
    ru: 'Далее',
  },
  orSignInManually: {
    en: 'Or sign in manually:',
    ru: 'Или авторизуйтесь через эл. адрес',
  },
  or: {
    en: 'or',
    ru: 'или',
  },
  Login: {
    en: 'Login',
    ru: 'Логин',
  },
  Logout: {
    en: 'logout',
    ru: 'Выйти',
  },
  loginSocialMediaEmail: {
    en: 'Login with Social Media or Email',
    ru: 'Авторизация через соцсети или эл. адрес',
  },
  InputYourEmailToResetPassword: {
    en: 'InputYrl your email to reset password',
    ru: 'Введите ваш эл. адрес',
  },
  ForgetPassword: {
    en: 'Forget password',
    ru: 'Забыл пароль',
  },
  SignUp: {
    en: 'Sign Up',
    ru: 'Регистрация',
  },
  loginWithFacebook: {
    en: 'Login with Facebook',
    ru: 'Логин с Facebook',
  },
  loginWithVkontakte: {
    en: 'Login with Vkontakte',
    ru: 'Логин с ВКонтакте',
  },
  loginWithTwitter: {
    en: 'Login with Twitter',
    ru: 'Логин с Twitter',
  },
  loginWithGoogle: {
    en: 'Login with Google',
    ru: 'Логин с Google',
  },
  username: {
    en: 'Username',
    ru: 'Имя пользователя',
  },
  Email: {
    en: 'Email',
    ru: 'Эл. адрес',
  },
  Password: {
    en: 'Password',
    ru: 'Пароль',
  },
  RepeatPassword: {
    en: 'Repeat password',
    ru: 'Повторите пароль',
  },
  createCourseQuiz: {
    en: 'Create course / quiz',
    ru: 'Создать курс / викторину',
  },
  pleaseWait: {
    en: 'Loading ... Please wait or select the course',
    ru: 'Загружаю ... Пожалуйста подождите или выберите курс',
  },
  pleaseRefreshWindow: {
    en: 'Loading ... Please refresh window or wait',
    ru: 'Загружаю ... Пожалуйста перезагрузите окно или подождите',
  },
  youCanCheckYourUnderstanding: {
    en: (
      <div className='_text'>
        <div className='_line1'>Unique educational service!</div>
        <div className='_line2'>
          Сheck your understanding and get the confirmation
        </div>
      </div>
    ),
    ru: (
      <div className='_text'>
        <div className='_line1'>Уникальный образовательный сервис!</div>
        <div className='_line2'>
          Проверьте свое понимание и получите подтверждение
        </div>
      </div>
    ),
  },
  Home: {
    en: 'Home',
    ru: 'На главную',
  },
  PersonalСabinet: {
    en: 'Personal cabinet',
    ru: 'Личный кабинет',
  },
  About: {
    en: 'About',
    ru: 'О нас',
  },
  Services: {
    en: 'Services',
    ru: 'Услуги',
  },
  Contacts: {
    en: 'Contacts',
    ru: 'Контакты',
  },
  weAreWorkingOnThis: {
    en: 'Sorry for inconvenience\nwe are working on this',
    ru: 'Извините за неудобства\nмы работаем над этим',
  },
  copyLinkToClipboard: {
    en: 'copy link',
    ru: 'скопировать ссылку',
  },
  sendToEmail: {
    en: 'sent it to email',
    ru: 'послать на email',
  },
  sendToPrint: {
    en: 'send it to print or save as pdf',
    ru: 'послать на печать или сохранить как pdf',
  },
  backToCourse: {
    en: 'back to course',
    ru: 'обратно к курсу',
  },
  difficulty: {
    en: 'difficulty',
    ru: 'сложность',
  },
  succeded: {
    en: 'succeded',
    ru: 'прошли',
  },
  tried: {
    en: 'tried',
    ru: 'пробовали',
  },
  Profile: {
    en: 'Profile',
    ru: 'Профиль',
  },
  About_me: {
    en: 'About me',
    ru: 'Обо мне',
  },
  Expertise: {
    en: 'Expertise',
    ru: 'Экспертиза',
  },
  nameLast: {
    en: 'last name',
    ru: 'фамилия',
  },
  nameFirst: {
    en: 'first name',
    ru: 'имя',
  },
  nameMiddle: {
    en: 'middle name',
    ru: 'отчество',
  },
  ToReceiveCertificateFillTheForm: {
    en: 'To receive a certificate fill the form',
    ru: 'Для получения сертификата заполните форму',
  },
  ToReceiveCertificateLogIn: {
    en: 'To receive a certificate and access your data in the future, please log in',
    ru: 'Для получения сертификата и доступа к Вашим данным в будущем, пожалуйста, авторизуйтесь',
  },
  correctAnsweresFrom: {
    en: 'correct answeres from',
    ru: 'верными ответали из',
  },
  andPassedTheTestWith: {
    en: 'and passed the final test with',
    ru: 'и прошли финальный тест с',
  },
  YouCompletedTheCourse: {
    en: 'You completed the course',
    ru: 'Вы закончили курс',
  },
  Congratulations: {
    en: 'Congratulations!',
    ru: 'Наши поздравления!',
  },
  QuestionsWithIncorrectAnswers: {
    en: 'Questions with incorrect answers:',
    ru: 'Вопросы с неверными ответами:',
  },
  YouCanTryOnceAgain: {
    en: 'You can try once again',
    ru: 'Вы можете попробовать снова',
  },
  andReceiveTheCertificate: {
    en: 'and receive the certificate.',
    ru: 'и получить сертификат.',
  },
  ThisIsNotEnough: {
    en: 'This is not enough to complete the course',
    ru: 'Это не достаточно, чтобы закончить курс',
  },
  from: {
    en: 'from',
    ru: 'из',
  },
  andThisTimeAnswered: {
    en: 'and this time answered correcly',
    ru: 'и в этот раз ответили на',
  },
  YouWereCommittedToSuccess: {
    en: 'You were committed to success.',
    ru: 'Вы были нацелены на успех',
  },
  WeGreetYou: {
    en: 'We greet you!',
    ru: 'Приветствуем Вас!',
  },
  Certificate: {
    en: 'Certificate',
    ru: 'До сертификата',
  },
  certificate: {
    en: 'certificate',
    ru: 'сертификат',
  },
  min: {
    en: 'min',
    ru: 'мин',
  },
  question: {
    en: 'question',
    ru: 'вопрос',
  },
  by: {
    en: 'by',
    ru: 'по',
  },
  and: {
    en: 'and',
    ru: 'и',
  },
}
