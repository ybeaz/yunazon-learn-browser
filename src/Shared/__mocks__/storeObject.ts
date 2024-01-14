export const storeObject = {
  analyticsID: null,
  componentsState: {
    isSepAdvancedSearch: false,
    isShownPalette: false,
    questionsSlideNumber: 0,
    isModalFrameVisible: false,
    isSideNavLeftVisible: false,
    isLoaderOverlayVisible: false,
    isCourseStarted: false,
    isOAuthFacebookScriptLoaded: false,
    isOAuthVKontakteScriptLoaded: false,
    isOAuthGoogleScriptLoaded: false,
    oAuthStage: null,
    modalFrames: [
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: {
          scenario: {
            branch: 'signInManually',
            step: '',
          },
        },
      },
    ],
    pagination: {
      pageCourses: {
        first: 0,
        offset: 10,
      },
    },
  },
  courses: [
    {
      courseID: '1K4O2zhm590n',
      capture: 'Комментирование исходников 9',
      description:
        'Как и что комментировать в исходном коде ваших программ, чтобы комментарии принесли максимальную пользу.',
      language: 'ru',
      isActive: true,
      dateCreated: 1701312970068,
      dateUpdated: 1701653931887,
      dateDeleted: null,
      meta: {
        institution: 'YouRails Academy',
        specTitle: 'Tutor',
        specName: 'Roman Ches',
        email: 't3531350@yahoo.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: 'I12MGlYQAO1k',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: '-SRUctRR_4s',
          capture: 'Модуль I',
          duration: '41:30',
          questionNumber: 4,
          passRate: 0.75,
          questions: [
            {
              questionID: 'AhA3z4gL8i2M',
              capture: 'Маячки для навигации служат для чего?',
              isActive: true,
              options: [
                {
                  optionID: 'IQuitP6Re5BX',
                  label:
                    'Чтобы программист знал, за что отвечаст эта часть кода',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'TitwcA2DqF1g',
                  label: 'Чтобы код сохранял поддерживаемость',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'A4UENpabuTAf',
                  label: 'Чтобы компилятор знал, как строить код',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'tSl2QIhQdZK6',
                  label: 'Чтобы руководитель мог оценить работу программиста',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'dvyiPoujoXSP',
              capture: 'Как расставлять маячки НЕ нужно?',
              isActive: true,
              options: [
                {
                  optionID: 'FpzILWK3OM8g',
                  label: 'В коммиты и PR',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'le06XLgsOg2b',
                  label: 'В сам код',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'zCQa4MKMTzRi',
                  label: 'В комментарии к коду',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'uOazeG89Toxp',
                  label: 'В документацию, вкл. README.md',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'E9AMajmSG36f',
                  label: 'В эл. письма и сообщения коллегам',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'YPhWg9YWpNnw',
              capture: 'Как расставлять маячки в код НЕ нужно',
              isActive: true,
              options: [
                {
                  optionID: 'F8aDBvWBFySV',
                  label: 'Вставлять объяснение изменений в личный файл',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'dcT2yLONX9TK',
                  label: 'Создавать unit tests к частям кода',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'm1hryvbHeqzg',
                  label: 'Применять декомпозицию функций',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'rDT0FTBecmD2',
                  label: 'Использовать говорящие имена',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'PZalqeZUU02S',
                  label: 'Добавлять примеры использования, в т.ч. в tutorial',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'Tzm2ZGZUsc61',
              capture: 'Хороший комментарий отвечает на вопрос',
              isActive: true,
              options: [
                {
                  optionID: 'lySckU0xegBl',
                  label: 'Что сделано?',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'XbNWWU7WCEdP',
                  label: 'Зачем это сделано?',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'TC5ASo38CHaF',
                  label: 'Кем это сделано?',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'EN2tMwy880FZ',
                  label: 'Когда это сделано?',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'W44BoIM6Vnna',
              capture: 'В документацию помещаем информацию',
              isActive: true,
              options: [
                {
                  optionID: '48kfJRDG9qtm',
                  label: 'которая через пол года не "оторвется" от проекта',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'b8zakJI9mAdN',
                  label: 'которая раскрывает архитектуру проекта',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'ROb2cFSuMaCc',
                  label: 'которая связана с текущей стадией проекта',
                  status: false,
                  answer: false,
                },
                {
                  optionID: '3fVyog73aL6v',
                  label: 'которая поясняет назначение конкретных изменений',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'pod1KmO2CYXQ',
              capture: 'Лучшие практики документирования API',
              isActive: true,
              options: [
                {
                  optionID: 'uVXmFF9MUxJe',
                  label: 'Документируем самые сложные места',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'FgaSHQMesfbl',
                  label: 'Документируем только не очевидное',
                  status: false,
                  answer: false,
                },
                {
                  optionID: '60XBOUvSS8ia',
                  label: 'Документируем полностью',
                  status: true,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        'комментирование исходников 9 как и что комментировать в исходном коде ваших программ, чтобы комментарии принесли максимальную пользу. модуль i  маячки для навигации служат для чего? чтобы программист знал, за что отвечаст эта часть кода чтобы код сохранял поддерживаемость чтобы компилятор знал, как строить код чтобы руководитель мог оценить работу программиста как расставлять маячки не нужно? в коммиты и pr в сам код в комментарии к коду в документацию, вкл. readme.md в эл. письма и сообщения коллегам как расставлять маячки в код не нужно вставлять объяснение изменений в личный файл создавать unit tests к частям кода применять декомпозицию функций использовать говорящие имена добавлять примеры использования, в т.ч. в tutorial хороший комментарий отвечает на вопрос что сделано? зачем это сделано? кем это сделано? когда это сделано? в документацию помещаем информацию которая через пол года не "оторвется" от проекта которая раскрывает архитектуру проекта которая связана с текущей стадией проекта которая поясняет назначение конкретных изменений лучшие практики документирования api документируем самые сложные места документируем только не очевидное документируем полностью',
    },
    {
      courseID: 'wBvQba1DI1Y',
      capture: 'Исторические деятели России и СССР первой половины XX века',
      description:
        'Кратко и емко в запоминающейся форме о деятелях России и СССР первой половины XX века',
      language: 'ru',
      isActive: true,
      dateCreated: 1640995200000,
      dateUpdated: 1701746794932,
      dateDeleted: null,
      meta: {
        institution: 'Студия "Городок"',
        specTitle: 'Специалист Oтдела Мировой Истории',
        specName: 'Олег Приколов',
        email: 't3531350@yahoo.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: 'wBvQba1DI1Y',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: 'wBvQba1DI1Y',
          capture: 'Модуль I',
          duration: '2:36',
          questionNumber: 4,
          passRate: 0.75,
          questions: [
            {
              questionID: 'bjz6ZqwMVfbH',
              capture: 'Согласно текста самодержец Николка',
              isActive: true,
              options: [
                {
                  optionID: 'cnWYDmMvxU5D',
                  label: 'правил так, что было что закусить',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'st6LzOdFtbCi',
                  label: 'был выдающейся личностью в истории',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'hyvIZN22Pxcc',
                  label: 'не видел дальше носа своего',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'hjsWazI6WSfN',
                  label: 'был внешностью красив',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'd7GvvtV5iNpp',
              capture: 'Согласно услышанного при товарище Сталине...',
              isActive: true,
              options: [
                {
                  optionID: 'qdYVJCZrVqtF',
                  label: 'колхозы распустили',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'vdBam9SrC5Wq',
                  label: 'граждан жизни не лишали',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'rOShxMPdExL9',
                  label: 'строились ТЭЦ',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'ejippPC6sdwy',
                  label: 'в лагеря загнали всех',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'rww2FpjBq2sc',
              capture: 'Согласно песни Микитушка...',
              isActive: true,
              options: [
                {
                  optionID: 'vOc9KjlE2tfG',
                  label: 'наградил Кеннади медалью',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'qlekTApDOyPR',
                  label: 'совершил немного дел',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'dPIfvr9aPJsd',
                  label: 'пихал (космонавтов) на Луну',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'cWtr8GqhgNVM',
                  label: 'был невысого роста',
                  status: true,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        'исторические деятели россии и ссср первой половины xx века кратко и емко в запоминающейся форме о деятелях россии и ссср первой половины xx века модуль i  согласно текста самодержец николка правил так, что было что закусить был выдающейся личностью в истории не видел дальше носа своего был внешностью красив согласно услышанного при товарище сталине... колхозы распустили граждан жизни не лишали строились тэц в лагеря загнали всех согласно песни микитушка... наградил кеннади медалью совершил немного дел пихал (космонавтов) на луну был невысого роста',
    },
    {
      courseID: 'jJy5wbBb4vg',
      capture: '1. ТРИЗ. Курс приемов устранения противоречий. Введение.',
      description:
        'Курс лекций по «Приемам устранения технических противоречий» на Ютубе. Кому они предназначены? Всем!',
      language: 'ru',
      isActive: true,
      dateCreated: 1700976254297,
      dateUpdated: 1701746794959,
      dateDeleted: null,
      meta: {
        institution: 'Малая ТРИЗ Академия',
        specTitle: 'Председатель Приемной Комиссии',
        specName: 'Лев Певзнер',
        email: 't3531350@yahoo.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: 'jJy5wbBb4vg',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: 'jJy5wbBb4vg',
          capture: 'Модуль I',
          duration: '13:11',
          questionNumber: 4,
          passRate: 0.75,
          questions: [
            {
              questionID: 'aVD6pAIDml10',
              capture: 'Что случилось, когда крестьянин принес яйцо домой?',
              isActive: true,
              options: [
                {
                  optionID: 'WmMc3zW1wPj',
                  label: 'Курица съела яйцо.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'vu0gtxcp9Iz4',
                  label: 'Курица высиживала яйцо.',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'b7moYZEi7BGP',
                  label: 'Яйцо разбилось.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'qCA3gkasG63S',
                  label: 'Из яйца вылупился птенец.',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'dpZaYEadiKS4',
              capture: 'Какие два основных постулата ТРИЗ?',
              isActive: true,
              options: [
                {
                  optionID: 'wFiiUT7up6xj',
                  label:
                    'Технические системы развиваются по определенным активным законам.',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'fCOqevK1S1nh',
                  label:
                    'Технические системы развиваются по пути возникновения, развитие и преодоление противоречий.',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'rlNmlKV4N0sL',
                  label: 'Технические системы развиваются случайным образом.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'ua3PIbve5cMa',
                  label:
                    'Технические системы развиваются только благодаря гениальным изобретателям.',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'lWoU2vam1myU',
              capture: 'Что такое противоречие в контексте ТРИЗ?',
              isActive: true,
              options: [
                {
                  optionID: 's0eBl93zORgV',
                  label:
                    'Противоречие - это согласие между разными частями системы.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'rJOCcLQv6Oy3',
                  label: 'Противоречие - это неразрешимая проблема.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'iXB6C2pAght5',
                  label:
                    'Противоречие - это отсутствие конфликта между разными частями системы.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'xJtZWIUsPbKF',
                  label:
                    'Противоречие возникает, когда одна часть системы улучшается при ухудшении другой.',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'pYD0GbilSNZR',
              capture: 'Может ли каждый человек научиться изобретать?',
              isActive: true,
              options: [
                {
                  optionID: 'd6HnrAN4MWzz',
                  label:
                    'Только люди с определенными способностями могут изобретать.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'hn4W4MewAORD',
                  label: 'Нет, только гении могут изобретать.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'jsVYejWqFmIu',
                  label: 'Изобретательство - это удел избранных.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'wSlbbhPj1ED4',
                  label: 'Да, каждый может научиться изобретать.',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'dwdqLqLmAtT2',
              capture: 'Что такое приемы устранения противоречий?',
              isActive: true,
              options: [
                {
                  optionID: 'nfta0Iy6A0UZ',
                  label:
                    'Приемы устранения противоречий - это набор правил для создания художественных произведений.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'rRVshJXs3Cd7',
                  label:
                    'Приемы устранения противоречий - это случайные методы решения проблем.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'acBqQBZlqQsh',
                  label:
                    'Приемы устранения противоречий - это 40 приемов, которые позволяют решать технические задачи.',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'dPY0j7vyk8qE',
                  label:
                    'Приемы устранения противоречий - это инструмент, созданный основателем ТРИЗ Генрихом Силу и Чем Альтшуллером.',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'fFFRuhhh4wH3',
              capture: 'Можно ли научиться ТРИЗ без больших усилий?',
              isActive: true,
              options: [
                {
                  optionID: 'gR7Llg35RnUX',
                  label: 'ТРИЗ можно освоить за один день.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'nSaQwaEoBbvq',
                  label: 'Изучение ТРИЗ не требует изменения системы мышления.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'tI0ID3UBo7qL',
                  label: 'Да, можно научиться ТРИЗ без больших усилий.',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'xnbtpSNgyGY3',
                  label:
                    'Нет, изучение ТРИЗ требует достаточно больших усилий.',
                  status: true,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        '1. триз. курс приемов устранения противоречий. введение. курс лекций по «приемам устранения технических противоречий» на ютубе. кому они предназначены? всем! модуль i  что случилось, когда крестьянин принес яйцо домой? курица съела яйцо. курица высиживала яйцо. яйцо разбилось. из яйца вылупился птенец. какие два основных постулата триз? технические системы развиваются по определенным активным законам. технические системы развиваются по пути возникновения, развитие и преодоление противоречий. технические системы развиваются случайным образом. технические системы развиваются только благодаря гениальным изобретателям. что такое противоречие в контексте триз? противоречие - это согласие между разными частями системы. противоречие - это неразрешимая проблема. противоречие - это отсутствие конфликта между разными частями системы. противоречие возникает, когда одна часть системы улучшается при ухудшении другой. может ли каждый человек научиться изобретать? только люди с определенными способностями могут изобретать. нет, только гении могут изобретать. изобретательство - это удел избранных. да, каждый может научиться изобретать. что такое приемы устранения противоречий? приемы устранения противоречий - это набор правил для создания художественных произведений. приемы устранения противоречий - это случайные методы решения проблем. приемы устранения противоречий - это 40 приемов, которые позволяют решать технические задачи. приемы устранения противоречий - это инструмент, созданный основателем триз генрихом силу и чем альтшуллером. можно ли научиться триз без больших усилий? триз можно освоить за один день. изучение триз не требует изменения системы мышления. да, можно научиться триз без больших усилий. нет, изучение триз требует достаточно больших усилий.',
    },
    {
      courseID: '2b0MNP1Qne8',
      capture:
        '2. ТРИЗ. Курс приемов устранения противоречий. Противоречие, оперативная зона и оперативное время.',
      description:
        'Одним из простых, но сильных инструментов теории решения изобретательских задач являются приемы устранения технических противоречий. В этой лекции рассмотрены базовые понятия теории решения изобретательских задач: - Противоречие, - Оперативная зона, - Оперативное время.',
      language: 'ru',
      isActive: true,
      dateCreated: 1700976254297,
      dateUpdated: 1701746794989,
      dateDeleted: null,
      meta: {
        institution: 'Малая ТРИЗ Академия',
        specTitle: 'Председатель Приемной Комиссии',
        specName: 'Лев Певзнер',
        email: 't3531350@yahoo.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: '2b0MNP1Qne8',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: '2b0MNP1Qne8',
          capture: 'Модуль III',
          duration: '14:55',
          questionNumber: 4,
          passRate: 0.75,
          questions: [
            {
              questionID: 'zM477dBn0SoV',
              capture: 'Что Эйнштейн хотел объяснить журналистке?',
              isActive: true,
              options: [
                {
                  optionID: 'cox1v9ZqsOvA',
                  label: 'Как готовить яичницу',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'vggC9UdyzZ5a',
                  label: 'Историю науки',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'scpfySzfCEYr',
                  label: 'Принципы физики',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'p494iNbHcEGl',
                  label: 'Теорию относительности',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'eAjzJKWQUYqz',
              capture: 'С чего начинается решение задачи?',
              isActive: true,
              options: [
                {
                  optionID: 'q3sAiYjzfsCw',
                  label: 'С определения метода решения',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'fuuWxTaI4qEp',
                  label: 'С определения цели',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'rUR2903iKavb',
                  label: 'С поиска сути задачи',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'nnQwieXRRHEB',
                  label: 'С анализа результатов',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'bdgfS05C7xNs',
              capture:
                'Какие основные группы приемов для разрешения противоречий существуют?',
              isActive: true,
              options: [
                {
                  optionID: 'qHhSWW9Uiuto',
                  label: 'Во времени',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'zAOH4I8OQhN7',
                  label: 'В пространстве',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'qzPDfUZbaMLr',
                  label: 'В системе',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'hT9R1gvNSuCp',
                  label: 'В над системе',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'jaBV8SK2vrQY',
              capture:
                'Какой пример разрешения противоречий во времени приводится в тексте?',
              isActive: true,
              options: [
                {
                  optionID: 'ekOzjAotNsgs',
                  label: 'Выдвижная лестница',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'aLMbdbf6xQMi',
                  label: 'Светофор на перекрестке',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'ePidv8F20sA3',
                  label: 'Бочкообразные валки',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'cXceg1jhndJ6',
                  label: 'Турбонаддув в самолете',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'oFCTltr8bh5A',
              capture:
                'Какой пример разрешения противоречий в системе приводится в тексте?',
              isActive: true,
              options: [
                {
                  optionID: 'ft0UqbWbTJst',
                  label: 'Выдвижная лестница',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'ez8syMZh4txl',
                  label: 'Бочкообразные валки',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'jFLlZz03vJSw',
                  label: 'Турбонаддув в самолете',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'dlAumIWQFZuf',
                  label: 'Светофор на перекрестке',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'je1Velx7ery1',
              capture:
                'Какой пример разрешения противоречий в над системе приводится в тексте?',
              isActive: true,
              options: [
                {
                  optionID: 'uOKebFhQmlPD',
                  label: 'Светофор на перекрестке',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'lUQj6oSHkqXw',
                  label: 'Бочкообразные валки',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'dgS1LdqYviZn',
                  label: 'Выдвижная лестница',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'xnd43V6JEs6f',
                  label: 'Турбонаддув в самолете',
                  status: true,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        '2. триз. курс приемов устранения противоречий. противоречие, оперативная зона и оперативное время. одним из простых, но сильных инструментов теории решения изобретательских задач являются приемы устранения технических противоречий. в этой лекции рассмотрены базовые понятия теории решения изобретательских задач: - противоречие, - оперативная зона, - оперативное время. модуль iii  что эйнштейн хотел объяснить журналистке? как готовить яичницу историю науки принципы физики теорию относительности с чего начинается решение задачи? с определения метода решения с определения цели с поиска сути задачи с анализа результатов какие основные группы приемов для разрешения противоречий существуют? во времени в пространстве в системе в над системе какой пример разрешения противоречий во времени приводится в тексте? выдвижная лестница светофор на перекрестке бочкообразные валки турбонаддув в самолете какой пример разрешения противоречий в системе приводится в тексте? выдвижная лестница бочкообразные валки турбонаддув в самолете светофор на перекрестке какой пример разрешения противоречий в над системе приводится в тексте? светофор на перекрестке бочкообразные валки выдвижная лестница турбонаддув в самолете',
    },
    {
      courseID: 'V6jWszm3j4Q',
      capture:
        '3. ТРИЗ. Курс приемов устранения противоречий. Прием принцип предварительного исполнения. Часть 1.',
      description:
        'Одним из простых, но сильных инструментов теории решения изобретательских задач являются приемы устранения технических противоречий. Если противоречие связано с тем, что процесс слишком сложный, трудноуправляемый, то прием «Принцип предварительного исполнения» рекомендует сделать часть операций заблаговременно, до начала процесса. Это позволит упростить процесс, повысить производительность, снизить затраты  и разрешить противоречия связанные с этим.',
      language: 'ru',
      isActive: true,
      dateCreated: 1700972005343,
      dateUpdated: 1701746795072,
      dateDeleted: null,
      meta: {
        institution: 'Малая ТРИЗ Академия',
        specTitle: 'Председатель Приемной Комиссии',
        specName: 'Лев Певзнер',
        email: 't3531350@yahoo.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: 'V6jWszm3j4Q',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: 'V6jWszm3j4Q',
          capture: 'Модуль III',
          duration: '18:13',
          questionNumber: 4,
          passRate: 0.75,
          questions: [
            {
              questionID: 'jvteMiBU79Tr',
              capture:
                'Что делали люди, чтобы стать счастливыми согласно легенде?',
              isActive: true,
              options: [
                {
                  optionID: 'a9UrTUSxghAE',
                  label: 'Медитировали на вершине горы',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'cp0F8NsuA7Z4',
                  label: 'Поднимались в горы и срывали белый цветок',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'n7LtUG1NRVyZ',
                  label: 'Искали сокровища в пещерах',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'cNfPkka36HdE',
                  label: 'Путешествовали по миру',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'jFlXiAhsUfoH',
              capture:
                'Какой совет дал мудрец юношам перед их путешествием в горы?',
              isActive: true,
              options: [
                {
                  optionID: 's3sxDVwHX5lL',
                  label: 'Ищите счастье в другом месте',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'zBiWapxzAGLr',
                  label: 'Сражайтесь с опасностями на своем пути',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'xmjhdXN7d5LI',
                  label: '7 раз упади, восемь раз поднимись',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'h3TQyovOVwfL',
                  label: 'Берегите свою жизнь и не идите в горы',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'r4xHeFcGy6P3',
              capture: 'Что означает принцип предварительного исполнения?',
              isActive: true,
              options: [
                {
                  optionID: 'mXCW9CfimoA7',
                  label:
                    'Вынесение части операций из перегруженного момента времени',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'rkb0MhoXcLXL',
                  label: 'Упрощение процесса путем уменьшения операций',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'wTZ6mUo2r1CP',
                  label:
                    'Использование новых технологий для ускорения процесса',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'jusadSUaWKb2',
                  label: 'Увеличение количества операций в процессе',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'dM4uiNJs5h7E',
              capture:
                'Какие варианты реализации принципа предварительного исполнения существуют?',
              isActive: true,
              options: [
                {
                  optionID: 'qla7PkrW98oN',
                  label: 'Заранее расставить элементы системы',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'jCMxtzDlNm3a',
                  label: 'Заранее выполнить требуемые изменения системы',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'w2mf59uBQPZn',
                  label: 'Использовать заранее подготовленные полуфабрикаты',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'q3ws6lQgBnLU',
                  label: 'Увеличить количество рабочих для выполнения операций',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'cdDa5G3EgLNw',
              capture: 'Как надувают резиновый мячик без отверстия?',
              isActive: true,
              options: [
                {
                  optionID: 'wGDTJk3VLxcm',
                  label:
                    'Помещают специальное вещество внутрь мячика перед склеиванием',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'xqo51e3YvdZB',
                  label: 'Надувают мячик с помощью специального насоса',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'bSGwjC4JfDQD',
                  label:
                    'Используют воздух, заключенный внутри мячика при производстве',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'uOXLR5FO6qV9',
                  label: 'Мячик надувается сам по себе',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'qW1z0WnPtSs3',
              capture: 'Как быстро создать газон возле дома?',
              isActive: true,
              options: [
                {
                  optionID: 'tBCeTXQlDbfh',
                  label: 'Купить искусственный газон',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'bwR34AdcH8Ln',
                  label: 'Посадить траву и ждать несколько лет',
                  status: false,
                  answer: false,
                },
                {
                  optionID: '5cto8eEDTDe',
                  label: 'Использовать промышленное выращивание газонов',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'fc0rH9LeQsz4',
                  label: 'Покрыть землю камнями вместо газона',
                  status: false,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        '3. триз. курс приемов устранения противоречий. прием принцип предварительного исполнения. часть 1. одним из простых, но сильных инструментов теории решения изобретательских задач являются приемы устранения технических противоречий. если противоречие связано с тем, что процесс слишком сложный, трудноуправляемый, то прием «принцип предварительного исполнения» рекомендует сделать часть операций заблаговременно, до начала процесса. это позволит упростить процесс, повысить производительность, снизить затраты  и разрешить противоречия связанные с этим. модуль iii  что делали люди, чтобы стать счастливыми согласно легенде? медитировали на вершине горы поднимались в горы и срывали белый цветок искали сокровища в пещерах путешествовали по миру какой совет дал мудрец юношам перед их путешествием в горы? ищите счастье в другом месте сражайтесь с опасностями на своем пути 7 раз упади, восемь раз поднимись берегите свою жизнь и не идите в горы что означает принцип предварительного исполнения? вынесение части операций из перегруженного момента времени упрощение процесса путем уменьшения операций использование новых технологий для ускорения процесса увеличение количества операций в процессе какие варианты реализации принципа предварительного исполнения существуют? заранее расставить элементы системы заранее выполнить требуемые изменения системы использовать заранее подготовленные полуфабрикаты увеличить количество рабочих для выполнения операций как надувают резиновый мячик без отверстия? помещают специальное вещество внутрь мячика перед склеиванием надувают мячик с помощью специального насоса используют воздух, заключенный внутри мячика при производстве мячик надувается сам по себе как быстро создать газон возле дома? купить искусственный газон посадить траву и ждать несколько лет использовать промышленное выращивание газонов покрыть землю камнями вместо газона',
    },
    {
      courseID: 'cj8dDTHGJBY',
      capture:
        'Eukaryopolis - The City of Animal Cells: Crash Course Biology #4',
      description:
        'Hank tells us about the city of Eukaryopolis - the animal cell that is responsible for all the cool things that happen in our bodies.',
      language: 'ru',
      isActive: true,
      dateCreated: 1640995200000,
      dateUpdated: 1701746795095,
      dateDeleted: null,
      meta: {
        institution: 'YouRails Academy',
        specTitle: 'Tutor',
        specName: 'Anna Ches',
        email: 'anya.cheskidova@gmail.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: 'cj8dDTHGJBY',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: 'cj8dDTHGJBY',
          capture: 'Модуль I',
          duration: '11:34',
          questionNumber: 5,
          passRate: 0.75,
          questions: [
            {
              questionID: 'egsZ5fiuMzRY',
              capture: 'What did Robert Hooke discover?',
              isActive: true,
              options: [
                {
                  optionID: 's9tfb74vNWl2',
                  label: 'membrane',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'd4706QSMwSWF',
                  label: 'nucleus',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'wGEN4wc7G9Ix',
                  label: 'organelles',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'xRqYosUySuGc',
                  label: 'cell',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'gdi6TZSJHTvX',
              capture: 'What are the cilia and flagella made of?',
              isActive: true,
              options: [
                {
                  optionID: 'yYlDlosdIlLV',
                  label: 'cellulose',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'fGQlDipFfE3l',
                  label: 'protein microtubules',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'aSSM1Fr9bpE9',
              capture: 'What is the function of the membrane?',
              isActive: true,
              options: [
                {
                  optionID: 'ib6IRk0G97xo',
                  label: 'synthesizes proteins',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'hypg3gO4jlTX',
                  label: 'controls what goes in and out of the cage.',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'yMN5ebzzaLmv',
                  label: 'performs heat exchange with the environment',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'lMwtmyYICm8d',
              capture:
                'Does the cytoplasm provide infrastructure for ALL organelles?',
              isActive: true,
              options: [
                {
                  optionID: 'uVREgGebUaQX',
                  label: 'no',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'uooJYPgLJP4v',
                  label: 'yes',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'eoZPBsRNS9zR',
              capture: 'What does a rough ER do?',
              isActive: true,
              options: [
                {
                  optionID: 'esOCynfinXsM',
                  label: 'helps to synthesize and package proteins',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'u4QoWLCwKRCm',
                  label: 'gives the cell a shape',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'uU6xTfQThv70',
                  label: 'protects the cell from the inside',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'y6CH1y1tKeUM',
                  label: 'helps make lipids',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'hVBKf6Yik81q',
              capture: 'What is the job of ribosomes?',
              isActive: true,
              options: [
                {
                  optionID: 'rOYIab1q2jiR',
                  label: 'collect amino acids and polypeptides',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'dPxpcTDUgTp6',
                  label: 'create energy',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'nGoJWytP9N0M',
                  label: 'collect proteins',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'kKVbxmXsLoUg',
              capture:
                'What is the name of the particles that make up the Golgi apparatus?',
              isActive: true,
              options: [
                {
                  optionID: 'l7fBGbADGlFQ',
                  label: 'Golgi pouches',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'o7vgjmuz2kZ8',
                  label: 'mini membrane',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'qnnbCyCTp9GJ',
                  label: 'Golgi bodies',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'sLMUs6YY51hZ',
                  label: 'Golgi components',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'obmA4UBbZwxx',
              capture: 'What is the function of lysosomes?',
              isActive: true,
              options: [
                {
                  optionID: 'xrBTmX5io6tY',
                  label: 'lead the cell',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'rjpI58ZEyKsp',
                  label: 'waste recycling',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'xG5aMLgmn30R',
                  label: 'produce proteins',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'cEIJ2IsWQ629',
                  label: 'generate energy',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'fRhXz4OpCxoO',
              capture: 'What does the nucleus store?',
              isActive: true,
              options: [
                {
                  optionID: 'pJJV1pDwY8je',
                  label: 'RVC',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'hX265jyJAIQa',
                  label: 'RNA',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'fLhKqsvIJYC3',
                  label: 'DNA',
                  status: true,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        'eukaryopolis - the city of animal cells: crash course biology #4 hank tells us about the city of eukaryopolis - the animal cell that is responsible for all the cool things that happen in our bodies. модуль i  what did robert hooke discover? membrane nucleus organelles cell what are the cilia and flagella made of? cellulose protein microtubules what is the function of the membrane? synthesizes proteins controls what goes in and out of the cage. performs heat exchange with the environment does the cytoplasm provide infrastructure for all organelles? no yes what does a rough er do? helps to synthesize and package proteins gives the cell a shape protects the cell from the inside helps make lipids what is the job of ribosomes? collect amino acids and polypeptides create energy collect proteins what is the name of the particles that make up the golgi apparatus? golgi pouches mini membrane golgi bodies golgi components what is the function of lysosomes? lead the cell waste recycling produce proteins generate energy what does the nucleus store? rvc rna dna',
    },
    {
      courseID: 'HVT3Y3_gHGg',
      capture: 'Water - Liquid Awesome: Crash Course Biology #2',
      description:
        'Hank teaches us why water is one of the most fascinating and important substances in the universe.',
      language: 'ru',
      isActive: true,
      dateCreated: 1640995200000,
      dateUpdated: 1701746795113,
      dateDeleted: null,
      meta: {
        institution: 'YouRails Academy',
        specTitle: 'Tutor',
        specName: 'Anna Ches',
        email: 'anya.cheskidova@gmail.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: 'HVT3Y3_gHGg',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: 'HVT3Y3_gHGg',
          capture: 'Модуль I',
          duration: '11:16',
          questionNumber: 4,
          passRate: 0.75,
          questions: [
            {
              questionID: 't1O1sIyK1TJD',
              capture: 'What is the formula for a water molecule?',
              isActive: true,
              options: [
                {
                  optionID: 'qr2CoIlLwUU0',
                  label: 'H2S',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'tZ4Lh0F9esp1',
                  label: 'O2',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'jMljrM9zlOtv',
                  label: 'CO2',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'lL9RwHUZ9NIt',
                  label: 'H2O',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'rtndg0SpMlZz',
              capture:
                'What distinguishes hydrophobic substances from hydrophilic substances?',
              isActive: true,
              options: [
                {
                  optionID: 'ulvdnPWjyQPg',
                  label: 'does not dissolve in water',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'fqtQmrmXtwgO',
                  label: 'dissolves in water',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'pNj2sXKSkaOs',
              capture:
                'What did the most eccentric scientist Henry Cavendish do to advance the study of water?',
              isActive: true,
              options: [
                {
                  optionID: 'f6fHz4F8n0qp',
                  label: 'Determined the density of water',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'vOQQhTxMdbvT',
                  label: 'discovered the formula of water',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'lzlyY0gArKOC',
                  label: 'proved the importance of water',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'ibAcOJZkDZ5v',
              capture:
                'The main property of ice that influenced all life on earth?',
              isActive: true,
              options: [
                {
                  optionID: 'pexrDxU3FzSM',
                  label: 'ice has no hydrogen compounds',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'ojUrzsFMh8gx',
                  label: 'ice does not sink',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'rkTHaPWU3DEd',
                  label: 'ice is more dense than water',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'tmq09qkrSqp3',
              capture: 'Will water drip on the glass?',
              isActive: true,
              options: [
                {
                  optionID: 'x3LTTlhzBuBO',
                  label: 'no',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'sRtlVHeAGs7q',
                  label: 'yes',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'ksF23KkiPbXA',
              capture:
                'What property of water allows the oceans to regulate the temperature of our planet?',
              isActive: true,
              options: [
                {
                  optionID: 'gjhuqRTYMGtC',
                  label: 'has three states of aggregation',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'vNWDC6PyHHqv',
                  label: 'Heat Capacity',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'qyFDb9vBxe8T',
                  label: 'that it is an excellent solvent',
                  status: false,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        'water - liquid awesome: crash course biology #2 hank teaches us why water is one of the most fascinating and important substances in the universe. модуль i  what is the formula for a water molecule? h2s o2 co2 h2o what distinguishes hydrophobic substances from hydrophilic substances? does not dissolve in water dissolves in water what did the most eccentric scientist henry cavendish do to advance the study of water? determined the density of water discovered the formula of water proved the importance of water the main property of ice that influenced all life on earth? ice has no hydrogen compounds ice does not sink ice is more dense than water will water drip on the glass? no yes what property of water allows the oceans to regulate the temperature of our planet? has three states of aggregation heat capacity that it is an excellent solvent',
    },
    {
      courseID: 'H8WJ2KENlK0',
      capture:
        'Biological Molecules - You Are What You Eat: Crash Course Biology #3',
      description:
        'Hank talks about the molecules that make up every living thing - carbohydrates, lipids, and proteins - and how we find them in our environment and in the food that we eat.',
      language: 'ru',
      isActive: true,
      dateCreated: 1640995200000,
      dateUpdated: 1701746795130,
      dateDeleted: null,
      meta: {
        institution: 'YouRails Academy',
        specTitle: 'Tutor',
        specName: 'Anna Ches',
        email: 'anya.cheskidova@gmail.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: 'H8WJ2KENlK0',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: 'H8WJ2KENlK0',
          capture: 'Модуль I',
          duration: '14:08',
          questionNumber: 4,
          passRate: 0.75,
          questions: [
            {
              questionID: 'mWA8Xl1SXkvM',
              capture: 'Which statements are true for William Prout?',
              isActive: true,
              options: [
                {
                  optionID: 'qnvxe69QBaZl',
                  label:
                    'He stated that to be healthy you need to eat all three types of foods.',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'kYYjNig1R8ve',
                  label:
                    'He was the first to discover that our stomach contains hydrochloric acid.',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'mrjOnt27UeRP',
                  label:
                    'He was the first to discover the chemical composition of urea',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'tckdbbqonYxF',
                  label:
                    'He compiled a teaching on the complete process of urine excretion.',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'lHxe0HnihJAN',
              capture: 'What sugars are carbohydrates made from?',
              isActive: true,
              options: [
                {
                  optionID: 'v1AMyEhYaSaR',
                  label: 'Nalosaccharides',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'vkTFPqnRzIit',
                  label: 'Monosaccharides',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'iVTnrIuEorsQ',
                  label: 'Polysaccharides',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'p8nFJUZQyudz',
                  label: 'Disaccharides',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'e9yXC1dYbGCu',
              capture: 'What do carbohydrates do?',
              isActive: true,
              options: [
                {
                  optionID: 'mKSDZVxaj6wl',
                  label: 'Store all the energy available to us',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'ulhSdfN3Z9Yb',
                  label: 'Perform a wide variety of functions',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'rhp5PMibTCwT',
                  label: 'Store energy for a long time',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'io0AJRDPNL8X',
              capture: 'The main function of fats is it?',
              isActive: true,
              options: [
                {
                  optionID: 'kLszda5MHTDa',
                  label: 'Store energy for a long time',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'xc5Zks1SvQ1r',
                  label: 'Store all the energy available to us',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'blnWG4MNlv8f',
                  label: 'Perform a wide variety of functions',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'ewx6ng9blrE1',
              capture: 'What are fats made of?',
              isActive: true,
              options: [
                {
                  optionID: 'u0SlFpOiHiGM',
                  label: 'Sugars',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'xdpruy3UIAOc',
                  label: 'Сarbohydrates',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'pNKlmsZbaYID',
                  label: 'Fatty acid',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'iuH6OqEDJLtK',
                  label: 'Glycerol',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'feNuR5T6ZOhk',
              capture: 'What do proteins do?',
              isActive: true,
              options: [
                {
                  optionID: 'xjwEIxfkcPj2',
                  label: 'Store all the energy available to us',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'kygaSlXLWVSX',
                  label: 'Perform a wide variety of functions',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'ctkniNgmpclk',
                  label: 'Store energy for a long time',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'rwEkx4B4Zr6Q',
              capture:
                'What determines the form and function of an amino acid?',
              isActive: true,
              options: [
                {
                  optionID: 'tQlJsxZk3uOx',
                  label: 'J-group',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'vd14bJqVke0N',
                  label: 'C-group',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'yqzy7bnnnTIE',
                  label: 'R-group',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'hUCPo1miMmzj',
                  label: 'K-group',
                  status: false,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        'biological molecules - you are what you eat: crash course biology #3 hank talks about the molecules that make up every living thing - carbohydrates, lipids, and proteins - and how we find them in our environment and in the food that we eat. модуль i  which statements are true for william prout? he stated that to be healthy you need to eat all three types of foods. he was the first to discover that our stomach contains hydrochloric acid. he was the first to discover the chemical composition of urea he compiled a teaching on the complete process of urine excretion. what sugars are carbohydrates made from? nalosaccharides monosaccharides polysaccharides disaccharides what do carbohydrates do? store all the energy available to us perform a wide variety of functions store energy for a long time the main function of fats is it? store energy for a long time store all the energy available to us perform a wide variety of functions what are fats made of? sugars сarbohydrates fatty acid glycerol what do proteins do? store all the energy available to us perform a wide variety of functions store energy for a long time what determines the form and function of an amino acid? j-group c-group r-group k-group',
    },
    {
      courseID: '9UvlqAVCoqY',
      capture: 'Plant Cells: Crash Course Biology #6',
      description:
        'Hank describes why plants are so freaking amazing - discussing their evolution, and how their cells are both similar to & different from animal cells.',
      language: 'ru',
      isActive: true,
      dateCreated: 1640995200000,
      dateUpdated: 1701746795146,
      dateDeleted: null,
      meta: {
        institution: 'YouRails Academy',
        specTitle: 'Tutor',
        specName: 'Anna Ches',
        email: 'anya.cheskidova@gmail.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: '9UvlqAVCoqY',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: '9UvlqAVCoqY',
          capture: 'Модуль I',
          duration: '10:27',
          questionNumber: 6,
          passRate: 0.75,
          questions: [
            {
              questionID: 'euO0BXTA8ekI',
              capture:
                'What kind of plant appeared during the time of the dinosaurs?',
              isActive: true,
              options: [
                {
                  optionID: 'p2VBScrmrxZa',
                  label: 'succulents',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'svBl34yhdLFH',
                  label: 'angiosperms',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'qqdWTljyAOE3',
                  label: 'gymnosperms',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'hOehpo2d7RV8',
                  label: 'scaly trees',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'iaKmrIjvQQXp',
              capture: 'How do plants produce food for themselves?',
              isActive: true,
              options: [
                {
                  optionID: 'kzL7Qeb5pIK4',
                  label: 'by vacuole',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'vSD7tCxuh2Yz',
                  label: 'by photosynthesis',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'ic2YwnBE1peM',
              capture:
                'What is the difference between eukaryotic and prokaryotic cells?',
              isActive: true,
              options: [
                {
                  optionID: 't8uH3lebWHhP',
                  label: 'presence of a membrane',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'd12pKKFavb7b',
                  label: 'presence of a core',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'qujB41y9ruX5',
                  label: 'presence of DNA',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'lJfJyBbqWKij',
              capture: 'What part of a plant cell is cellulose?',
              isActive: true,
              options: [
                {
                  optionID: 'kp4Nlc9ZWz3Q',
                  label: 'core',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'wtSlJW8UQJrn',
                  label: 'organelles',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'gTyTtEd9eT7p',
                  label: 'vacuole',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'niwesZcTaIeq',
                  label: 'membrane',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'qAxm87fz5P1t',
              capture: 'What do chloroplasts produce?',
              isActive: true,
              options: [
                {
                  optionID: 'f6z92BnURhN8',
                  label: 'waste products',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'ucHs84YX09Rt',
                  label: 'oxygen',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'kMPS0VJwZXHN',
                  label: 'nutrients',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'a98zRDDXQeRw',
              capture: 'Why do plants need a vacuole?',
              isActive: true,
              options: [
                {
                  optionID: 'p7alKNdgM5W4',
                  label: 'for water storage',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'vT8c5D8GrCuI',
                  label: 'for photosynthesis',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 's4FUJRsE9c7l',
                  label: 'to remove waste products',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'qHAr8YBoGG8P',
                  label: 'to shape the plant',
                  status: true,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        'plant cells: crash course biology #6 hank describes why plants are so freaking amazing - discussing their evolution, and how their cells are both similar to & different from animal cells. модуль i  what kind of plant appeared during the time of the dinosaurs? succulents angiosperms gymnosperms scaly trees how do plants produce food for themselves? by vacuole by photosynthesis what is the difference between eukaryotic and prokaryotic cells? presence of a membrane presence of a core presence of dna what part of a plant cell is cellulose? core organelles vacuole membrane what do chloroplasts produce? waste products oxygen nutrients why do plants need a vacuole? for water storage for photosynthesis to remove waste products to shape the plant',
    },
    {
      courseID: '_6bkzHLI2T8',
      capture:
        'Жизнедеятельность клетки, её деление и рост. Видеоурок по биологии',
      description:
        'На этом уроке мы поговорим о том, каким образом клетка осуществляет свою жизнедеятельность.',
      language: 'ru',
      isActive: true,
      dateCreated: 1640995200000,
      dateUpdated: 1701746795162,
      dateDeleted: null,
      meta: {
        institution: 'YouRails Academy',
        specTitle: 'Tutor',
        specName: 'Anna Ches',
        email: 'anya.cheskidova@gmail.com',
        isSendingBcc: true,
      },
      modules: [
        {
          moduleID: '_6bkzHLI2T8',
          index: 0,
          isActive: true,
          contentType: 'ytID',
          contentID: '_6bkzHLI2T8',
          capture: 'Модуль I',
          duration: '11:46',
          questionNumber: 4,
          passRate: 0.75,
          questions: [
            {
              questionID: 'mKR64Wr2KTYf',
              capture: 'Что предшествует первому этапу роста клетки?',
              isActive: true,
              options: [
                {
                  optionID: 'bIH32misY6NQ',
                  label: 'Превращение материнской клетки в дочернию',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'g0TVDs93civg',
                  label: 'Деление материнской клетки на две дочерние',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'xMXA1Bk0l60k',
                  label: 'Превращение дочерней клетки в материнскую',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'fdMj4tFjVwSK',
                  label: 'Образование центральной вакуоли в материнской клетке',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'lbPGDe0Pb8f5',
              capture: 'Что происходит на втором этапе роста клетки?',
              isActive: true,
              options: [
                {
                  optionID: 'spdjz7TLuKbm',
                  label: 'Клетка приспосабливается к окружающей среде',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'cJmRvoUkCo61',
                  label: 'Образовывается единая центральная вакуоль',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'rPddZr37A5Io',
                  label: 'Происходит деление клетки',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'dycxBfEe6wuD',
                  label: 'Происходит быстрый рост',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'e1H7KMgK0nWG',
              capture: 'За счет чего происходит быстрый рост клетки?',
              isActive: true,
              options: [
                {
                  optionID: 'cymFUi4RfLk3',
                  label: 'Роста числа вакуолей',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'dsCGPJgqdau9',
                  label: 'Питания',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'saKEmvb4lfzj',
                  label: 'Воды',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'hmZ7n8pNsgha',
                  label: 'Деления клетки',
                  status: false,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'oLLVw3bepgH3',
              capture: 'Что происходит при делении клетки?',
              isActive: true,
              options: [
                {
                  optionID: 'e5poGBpF8RDk',
                  label: 'Образуется разделяющая стенка из целлюлозы',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'i4smb7bkhnZI',
                  label: 'Образуются две дочерние клетки',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'cOKZ0NL4N0UR',
                  label: 'Появляются поры',
                  status: true,
                  answer: false,
                },
                {
                  optionID: 'o82ii32B6Yfg',
                  label: 'Информация находящаяся в клетке расходится',
                  status: true,
                  answer: false,
                },
              ],
            },
            {
              questionID: 'c60srfLrIOEy',
              capture: 'Что происходит на третьем этапе роста клетки?',
              isActive: true,
              options: [
                {
                  optionID: 'v4JUes3xhqkw',
                  label: 'У клетки появляется центральная вакуоль',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'znYaJSxITvzu',
                  label: 'Клетка делиться',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'sSZyjky1z6Kc',
                  label: 'Клетка прекращает свою жизнедейтельность',
                  status: false,
                  answer: false,
                },
                {
                  optionID: 'c710Rki4HoWW',
                  label:
                    'Клетка приобретает особенности во внутреннем строении',
                  status: true,
                  answer: false,
                },
              ],
            },
          ],
        },
      ],
      searchString:
        'жизнедеятельность клетки, её деление и рост. видеоурок по биологии на этом уроке мы поговорим о том, каким образом клетка осуществляет свою жизнедеятельность. модуль i  что предшествует первому этапу роста клетки? превращение материнской клетки в дочернию деление материнской клетки на две дочерние превращение дочерней клетки в материнскую образование центральной вакуоли в материнской клетке что происходит на втором этапе роста клетки? клетка приспосабливается к окружающей среде образовывается единая центральная вакуоль происходит деление клетки происходит быстрый рост за счет чего происходит быстрый рост клетки? роста числа вакуолей питания воды деления клетки что происходит при делении клетки? образуется разделяющая стенка из целлюлозы образуются две дочерние клетки появляются поры информация находящаяся в клетке расходится что происходит на третьем этапе роста клетки? у клетки появляется центральная вакуоль клетка делиться клетка прекращает свою жизнедейтельность клетка приобретает особенности во внутреннем строении',
    },
  ],
  documents: [],
  users: [],
  scorm: {
    numberQuestionsInSlide: 2,
    durationMultiplier: 1,
  },
  forms: {
    inputSearch: '',
    sendTo: '',
    sendCc: '',
    searchFormSep: {
      selectSkillsOffered: [],
      selectSkillsRequired: '',
      selectCountryRequired: [],
      selectLanguageRequired: [],
      inputAgeFromRequired: 0,
      inputAgeToRequired: 100,
      selectGenderRequired: [],
      selectMediaRequired: [],
      inputDescriptionRequired: '',
      selectSortBy: '',
    },
    userPrev: {
      userAvatar: '',
      userBirthYear: null,
      userDateCreated: '',
      userDateDeleted: '',
      userDateUpdated: '',
      userEmail: '',
      userGender: '',
      userIdProfile: '',
      userIdAuth: '',
      userIdExternal: '',
      userInfoAbout: '',
      userLanguages: [],
      userLocaleCity: '',
      userLocaleCountry: '',
      userLoginSource: '',
      userMedia: [],
      userName: '',
      userNameNick: '',
      nameFirst: '',
      nameLast: '',
      nameMiddle: '',
      userPasswordAuth: '',
      userPasswordAuth2: '',
      userPhone: null,
      userRoles: [],
      userSkillsExpertise: [],
      userStatus: '',
      userWebLink: '',
      userWebTokenAuth: '',
      userZoneInfo: '',
      userAwsCognitoAuth: {
        id_token: '',
        access_token: '',
        refresh_token: '',
        expires_in: 0,
        token_type: '',
      },
    },
    user: {
      userAvatar: '',
      userBirthYear: null,
      userDateCreated: '',
      userDateDeleted: '',
      userDateUpdated: '',
      userEmail: '',
      userGender: '',
      userIdProfile: '',
      userIdAuth: '',
      userIdExternal: '',
      userInfoAbout: '',
      userLanguages: [],
      userLocaleCity: '',
      userLocaleCountry: '',
      userLoginSource: '',
      userMedia: [],
      userName: '',
      userNameNick: '',
      nameFirst: '',
      nameLast: '',
      nameMiddle: '',
      userPasswordAuth: '',
      userPasswordAuth2: '',
      userPhone: null,
      userRoles: [],
      userSkillsExpertise: [],
      userStatus: '',
      userWebLink: '',
      userWebTokenAuth: '',
      userZoneInfo: '',
      userAwsCognitoAuth: {
        id_token: '',
        access_token: '',
        refresh_token: '',
        expires_in: 0,
        token_type: '',
      },
    },
  },
  isLoaded: {
    isLoadedGlobalVars: true,
    isLoadedCourses: true,
    mediaLoaded: {
      '-SRUctRR_4s': true,
      wBvQba1DI1Y: true,
      jJy5wbBb4vg: true,
      '2b0MNP1Qne8': true,
      V6jWszm3j4Q: true,
      cj8dDTHGJBY: true,
      HVT3Y3_gHGg: true,
      H8WJ2KENlK0: true,
      '9UvlqAVCoqY': true,
      _6bkzHLI2T8: true,
    },
  },
  language: 'en',
  authAwsCognitoUserData: {
    sub: '240844e8-90c1-7048-eddd-5f58260ef473',
    email: 'ybeaz@yahoo.com',
    preferred_username: 'Ybeaz',
    cognito_groups: ['general'],
    exp: 1701750644000,
    message: 'Success getAuthAwsCognitoUserRefreshed',
    refresh_token:
      'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.EqZTEALplaym_M9j-oVsX3XZHMq0MEuTk2iVJHJzCJAtGEq2Rtwk6SYZZj8JlPgP9y2S2GpoXNEqJHAdauMzmdK01Q14r8UXjC48Yic39nlXxgzLzPv0vi2XNOq3uGcaepTmC7w0A4m8FSoVjEbgvMOqiZE-nwnsJp22Udj20TarIte22iw3keJ156NSKIxOf2a20KsEq1dkrjJ0kGEqP-nMXxD3g2EGiJwb40TgoKKdhzGPHTf6QanJqw9oXlVbjgKgv9-tvz3tGRkGygCiZ1WyhWpcgUQ3a3yY8tQ2p0ePVwHReAmmsUWIGia1qcqoO-IDRBteWH0W-kmnq-q-Vg.KK6l_egoCqhcyiif.NQMxVe21bv5j4TsHUUTje_rowYckDkI_knGTl6zG30daBlQ_buLKcSVP-WIeMJUbbTxTgisk8a_X1dJ60bo-533B7Q1hjfmB5YX0b_hh_UPYmaoxiEilgGiZHIDpFWsEosOuhNsrwv2CD3UBWkotktg9tdhQxkQBy5pCRySn2RIONzlHVAQ6GtH54Cgnkg82T7HbwQt1DZ73WCiyVAV_Lg5NlYYVaVn8OiDgKEpGRYg81W1Phd4CTfpMQnCkkud48Edkpu8xWXvuKcBAmFAP4XX3z27oMyJAPEn7LWSKYJL_Cq0zkvynxfDRr2xL43XmyrWvcWDI5WK7QdaJV0Wua5fbc_WwNBCMN3o8Gc_9CQkP9Zg3Zq26gQd_vVCYkjmpLqwabmPy53s0TTk9PopeGugeTE6ZDiMoLpSnhtx8CS4oboN8tuUmJGETVRHlQycKeNdgeVYhupsQN9VtlbRP7CiNZ99QdmRfJw9JStXCUz9Ft6oktHnRthFyUQt84O-KFZsb3HL6OkMkd35YIRfv4QOpJTltNQh5PI1Try-mmakwWEr-mNmBUVPdVd5mlW9Cwu5np6wvAYOLdA4iqH33R5OTWssoX03WASj44NTJwa6EryTieV8ftCG2I2NhskWDfgP6YPK2LunUShN62pqvE3UxakF0MSNPK5Nf-yLh1QA-FYEyPUdGZaTuLzqA2v4gPJ3Bf6b3vqcR6WtRgOT0aCVPcqQCcLkHTytUxKgbhFjhiQ41TJuskXoXQbVpdatShzVUnPoiR_sNWQ-UTDp2g1oxdCPJG3wcX933EJ8HAE4eXXkt0gllRdPEyo_HIQ_77UI6gE1iZz0fue2sBj8cyXYhK0dIO_534LPx1hBgHQYJ6JgpW4GLxgswHETkjIuU1SwhMn5-CGmFbwNEQdTYrCURABtstmbeKzkYeabgWXob3UeVulbCcR2eNO0yhn93jR4CrG7snJ4MwjG9cZS0A9yErHNRcXRELFMATC7VNQN1whMQcxvee7iYsDGrGYfcnEVaA0rnLZlnl8hn8DwBfp6u4CZBbtUU8uCYRAJuzfXNlpwU4q3UQ7Bq06hO3uABisrrCV0x8GXVNf0SpsBXCaBbds8l59Q7cB8psH-C1cNlz0aVqALplQOKaEipgxsHOgGgmrmAOmBB6EF3IJWjKvynh1lM-Swdo6VkijDji_SF-k4ezLWE92C918jLH5hE3wPDuVqWns6Y9Rf_6tnTeMrxmTjIr5ptX9o0xAiUxBJ8hv__ryFHintP_kugg8HV1bRt1NTHFCvxQoU44ghIcHILdRu2EUESYuopYGpHAM2GeQx8R3LXncLzVIMdB90.3IO6esDerCh6H5q-15_ZZg',
  },
  globalVars: {
    titleSite: 'Academy YouRails - Teach curious; Learn from inspired',
    descriptionSite:
      'Behind every great human achievement there are teachers who helped to get on top. Courses, tests, certificates',
    canonicalUrlSite: 'https://academy.yourails.com',
    langSite: 'en',
    theme: 'Dark',
  },
}
