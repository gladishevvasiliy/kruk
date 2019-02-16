/* eslint-disable */

// Попевки

export const KICHIGI = [
  {
    value: ["<span class='red'>ö+</span>Dm", 'SK', 'Sm'],
    name: 'Кичиги',
    tone: '2, 6',
  },
]

const MEREZHA = [
  {
    value: [
      "<span class='red'>â</span>В(",
      "<span class='red'>âë</span>H",
      "<span class='red'>ä</span>L9",
      "<span class='red'>ì</span>S y",
      "<span class='red'>ï</span>W",
    ],
    name: 'Мережа 3 и 5 гласа',
    tone: '3',
  },
  {
    value: [
      "<span class='red'>â</span>В(",
      "<span class='red'>âë</span>H",
      "<span class='red'>ä</span>L9",
      "<span class='red'>ì</span>S y",
      "<span class='red'>ï</span>W",
    ],
    name: 'Мережа 3 и 5 гласа',
    tone: '5',
  },
  {
    value: [
      "<span class='red'>ö</span>l{",
      "<span class='red'>öë</span>H",
      "<span class='red'>ä</span>L9",
      "<span class='red'>ã</span>S y",
      "<span class='red'>í</span>W",
    ],
    name: 'Мережа 1 и 7 гласа (Ми)',
    tone: '1, 7 (Ми)',
  },
  {
    value: [
      "<span class='red'>ã</span>k{",
      "<span class='red'>öë</span>H",
      "<span class='red'>ä</span>L9",
      "<span class='red'>ã</span>S y",
      "<span class='red'>í</span>W",
    ],
    name: 'Мережа 1 и 7 гласа (Ут)',
    tone: '1, 7 (Ут)',
  },
]

const MEREZHA_S_PODDERZHKOI = [
  {
    value: [
      "<span class='red'>ì</span>k(",
      "<span class='red'>î</span>H",
      "<span class='red'>-</span>L92",
      "<span class='red'>ö</span>D y",
      "<span class='red'>í</span>W",
    ],
    name: 'Мережа с поддержкой',
    tone: '2, 6',
  },
]

const PLOSCHADKA = [
  {
    value: [
      "<span class='red'>í</span>z",
      "<span class='red'>ö</span><{4",
      "<span class='red'>ã</span>X",
      "<span class='red'>ö+</span>SK{?",
      "<span class='red'>í</span>z",
      "<span class='red'>ì</span>L9",
      "<span class='red'>ö</span>SK",
      "<span class='red'>í</span>W",
    ],
    name: 'Площадка',
    tone: '2, 6, 8',
  },
]

const KULIZMA_SREDNYAYA = [
  {
    value: [
      'g',
      "<span class='red'>ï</span>Y",
      "<span class='red'>ì</span>S /",
      'S y',
      'S',
    ],
    name: 'Кулизма средняя 1, 2, 6 и 8 глас',
    tone: '1, 2, 6, 8',
  },
  {
    value: [
      'g',
      "<span class='red'>ì</span>R",
      "<span class='red'>ð</span>S /",
      'S y',
      "<span class='red'>í</span>Д",
    ],
    name: 'Кулизма средняя 2 и 6 глас (в конце)',
    tone: '2, 6 (в конце)',
  },
  {
    value: [
      'g',
      "<span class='red'>Î</span>R",
      "<span class='red'>âê</span>D6",
      'S y',
      'S',
    ],
    name: 'Кулизма средняя 3 глас',
    tone: '3',
  },
  {
    value: [
      'g',
      "<span class='red'>Ï</span>Y",
      "<span class='red'>Î</span>S /",
      'S y',
      'S',
    ],
    name: 'Кулизма средняя 5 глас',
    tone: '5',
  },
  {
    value: [
      'g',
      "<span class='red'>ï</span>Y",
      "<span class='red'>öê</span>D6",
      'S y',
      'S',
    ],
    name: 'Кулизма средняя 7 глас',
    tone: '7',
  },
]

const KULIZMA_MALAYA = [
  {
    value: ["<span class='red'>ïá</span>W6", 'S y', 'S'],
    name: 'Кулизма малая 1 и 4 глас',
    tone: '1, 4',
  },
]

const DOLINKA_SREDNYAYA = [
  {
    value: [
      "<span class='red'>íó</span>W6",
      "<span class='red'>Í</span>88J\\",
      "<span class='red'>Ã</span>S",
    ],
    name: 'Долинка средняя 1 глас',
    tone: '1',
  },
]

const KOLESO = [
  {
    value: [
      "<span class='red perevodka'>ë</span>P|<span class='red'>ì</span>",
      "<span class='red'>ö</span>D y",
      "<span class='red'>í</span>W",
    ],
    name: 'Колесо 6 глас',
    tone: '6',
  },
]

export const COMPOSITIONS = [
  { id: 1, label: 'Кичиги', value: KICHIGI },
  { id: 2, label: 'Мережа', value: MEREZHA },
  { id: 3, label: 'Мережа с поддержкой', value: MEREZHA_S_PODDERZHKOI },
  { id: 4, label: 'Площадка', value: PLOSCHADKA },
  { id: 5, label: 'Кулизма средняя', value: KULIZMA_SREDNYAYA },
  { id: 6, label: 'Кулизма малая', value: KULIZMA_MALAYA },
  { id: 7, label: 'Долинка средняя', value: DOLINKA_SREDNYAYA },
  { id: 8, label: 'Колесо', value: KOLESO },
]

/* eslint-enable */

export const KRUKI = [
  { id: 1, label: 'Крюк' },
  { id: 2, label: 'Параклит' },
  { id: 3, label: 'Запятая' },
  { id: 4, label: 'Стопица' },
  { id: 5, label: 'Челюстка' },
  { id: 6, label: 'Ключ' },
  { id: 7, label: 'Подчашие' },
  { id: 8, label: 'Палка' },
  { id: 9, label: 'Скамейца' },
  { id: 10, label: 'Дербица' },
  { id: 11, label: 'Переводка' },
  { id: 12, label: 'Голубчик борзый' },
  { id: 13, label: 'Голубчик тихий' },
  { id: 14, label: 'Чашка' },
  { id: 15, label: 'Статья простая' },
  { id: 16, label: 'Статья светлая' },
  { id: 17, label: 'Статья с запятой' },
  { id: 18, label: 'Статья мрачная' },
  { id: 19, label: 'Малая закрытая' },
  { id: 20, label: 'Средняя закрытая' },
  { id: 21, label: 'Крыж' },
  { id: 22, label: 'Рог' },
  { id: 23, label: 'Сложитие' },
  { id: 24, label: 'Сложитие с купной' },
  { id: 25, label: 'Сложитие с запятой' },
  { id: 26, label: 'Полукулизма' },
  { id: 27, label: 'Два в челну' },
  { id: 28, label: 'Труба' },
  { id: 29, label: 'Дуда' },
  { id: 30, label: 'Мечник' },
  { id: 31, label: 'Стрела мрачная' },
  { id: 32, label: 'Стрела крыжевая' },
  { id: 33, label: 'Стрела поводная' },
  { id: 34, label: 'Стрела светлая' },
  { id: 35, label: 'Стрела тресветлая' },
  { id: 36, label: 'Стрела светлотихая' },
  { id: 37, label: 'Стрела поездная' },
  { id: 38, label: 'Стрела громная' },
  { id: 39, label: 'Стрела громосветлая' },
  { id: 40, label: 'Стрела громотресветлая' },
  { id: 41, label: 'Стрела возводная' },
  { id: 42, label: 'Стрела громокрыжная' },
  { id: 43, label: 'Стрела трясосветлая' },
  { id: 44, label: 'Хамило' },
  { id: 45, label: 'Паук малый' },
  { id: 46, label: 'Паук большой' },
  { id: 47, label: 'Фита' },
  { id: 48, label: 'Полукулизма малая' },
  { id: 49, label: 'Фотиза' },
  { id: 50, label: 'Змийца' },
  { id: 51, label: 'Статья с крыжом' },
  { id: 52, label: 'Статья в кулизме' }, // eslint-disable-next-line
  { id: 53, label: 'Запятая с крыжом' }, // для того чтоб отобразить запятую с крыжем, надо указать опцию задержка, это норм или надо менять?
  { id: 54, label: 'Стрела простая' },
  { id: 55, label: 'Стопица с очком' },
]

export const GUIDE_STEPS = [
  {
    selector: '.field-insert-text',
    content: 'Итак, начнем! Введите надписание песнопения.',
  },
  {
    selector: '.field-insert-bucvica',
    content: 'Теперь введите "буквицу" - первую букву песнопения.',
  },
  {
    selector: '.input-name',
    content:
      'Теперь самое интересное! Введите название знамени, которое Вы хотите добавить. Например, Параклит. И нажмите Enter.',
  },
  {
    selector: '.input-option',
    content:
      'Введите опции знамени, которые вы хотите добавить. Например, отсечка, или подчашие. Далее жмем Enter.',
  },
  {
    selector: '.input-pitch',
    content:
      'Еще совсем немного! Введите помету знамени. Например Ут, или Фа. Enter.',
  },
  {
    selector: '.inputTextUCS',
    content:
      'Замечательно! Наконец, введите слог, стоящий под знаменем. Какую кнопку жмем? Правильно, Enter ;)',
  },
  {
    selector: '.paragraph',
    content: 'Поздравляем! Вы добавили первое знамя!',
  },
  {
    selector: '.currentSymbols',
    content:
      'Еще немного новой информации) В этом блоке отображаюстя крюки, подходящие под введенные Вами критерии.',
  },
  {
    selector: '.insertComposition',
    content:
      'А этот блок пригодится при наборе осмогласных песнопений: тут можно вставлять не по одному знамени, а целыми попевками!',
  },
  {
    selector: '.paragraph',
    content:
      'Вы почти прошли все обучение! Наведите курсор на знамя, и Вы увидите кнопки для его редактирования. Если нажать на слог под крюком, можно его изменить :)',
  },
  {
    selector: '.button-download',
    content:
      'Чтоб сохранить введенные крюки на компьютер, нажмите на эту кнопку.',
  },
  {
    selector: '.file',
    content: 'А для того, чтобы загрузить сохраненный файл - смело жмите сюда!',
  },
  {
    selector: '.button-help',
    content:
      'Вот и все) Если вы что-то забудете или не поймете, заглядывайте в раздел "Помощь", или пишите на почту gladishevvasiliy@gmail.com. Бог Вам в помощь!',
  },
]
