export interface Period {
  id: string;
  name: string;
  subTitle: string;
  years: string;
  overview: string;
  capital: string;
  significance: string;
  achievements: string[];
  keyFigures: string[];
}

export interface Pharaoh {
  id: string;
  name: string;
  regnalYears: string;
  dynasty: string;
  title: string;
  epithet: string;
  biography: string;
  keyFeats: string[];
  builtMonuments: string[];
  quote: string;
  image?: string;
}

export interface Wonder {
  id: string;
  name: string;
  era: string;
  location: string;
  heightOrSize: string;
  purpose: string;
  description: string;
  architecturalMystery: string;
  sections?: {
    name: string;
    description: string;
    detail: string;
  }[];
}

export interface Deity {
  id: string;
  name: string;
  role: string;
  symbol: string;
  appearance: string;
  mythology: string;
  sacredAnimal: string;
}

export interface NileLocation {
  id: string;
  name: string;
  ancientName: string;
  region: 'Quyi Misr (Shimol)' | 'O‘rta Misr' | 'Yuqori Misr (Janub)';
  description: string;
  highlightArtifact: string;
  coordinatesPct: { x: number; y: number }; // x%, y% on schematic map
}

export const PERIODS: Period[] = [
  {
    id: 'early-dynastic',
    name: 'Ilk Podsholik Davri',
    subTitle: 'Birlashgan Misrning ibtidosi va poydevori',
    years: 'Mil. avv. ~3100 – 2686 yillar',
    capital: 'Tis (Tinis), keyinchalik Memfis',
    overview: 'Fir\'avn Narmer (Menes) tomonidan Yuqori va Quyi Misr yerlarining yagona davlatga birlashtirilishi. Qadimgi dunyoning eng birinchi qudratli markazlashgan davlatchiligi vujudga keldi.',
    significance: 'Oq va Qizil tojlar birlashtirilib, "Pshent" qo\'shma toji yaratildi. Ieroglif yozuvining dastlabki qonun-qoidalari shakllandi.',
    achievements: [
      'Narmer lavhasi — tarixdagi eng qadimiy siyosiy hujjatlardan biri',
      'Memfis (Oq Devorlar) shahrining qurilishi',
      'Ieratik va ieroglif yozuvining rasmiy davlat tiliga aylanishi'
    ],
    keyFigures: ['Narmer (Menes)', 'Axa', 'Djer', 'Qaa']
  },
  {
    id: 'old-kingdom',
    name: 'Qadimgi Podsholik',
    subTitle: 'Ehromlar va muhandislikning oltin davri',
    years: 'Mil. avv. 2686 – 2181 yillar (III–VI sulolalar)',
    capital: 'Ineb-Hedj (Memfis)',
    overview: 'Misr tarixining eng qudratli me\'moriy davri. Aynan shu asrlarda Saqqarada ilk pog\'onali ehrom va Gizadagi Buyuk piramidalar barpo etildi. Fir\'avnlar yer yuzidagi tirik xudo sifatida ulug\'langan.',
    significance: 'Davlat boshqaruvi, geometriya, astronomiya va tosh yo\'nish san\'ati o\'z davri uchun aqlbovar qilmas cho\'qqiga yetdi.',
    achievements: [
      'Joserning Saqqaradagi pog\'onali ehromi (me\'mor Imxotep)',
      'Gizadagi Xufu (Xeops), Xafra va Menkaura piramidalari majmuasi',
      'Katta Sfenks haykalining qoyatoshdan yo\'nilishi',
      'Iqtisodiy va soliq tizimining mukammal markazlashuvi'
    ],
    keyFigures: ['Joser', 'Imxotep', 'Snofru', 'Xufu (Xeops)', 'Xafra', 'Menkaura']
  },
  {
    id: 'middle-kingdom',
    name: 'O‘rta Podsholik',
    subTitle: 'Klassik adabiyot, san’at va qayta tiklanish',
    years: 'Mil. avv. 2055 – 1650 yillar (XI–XII sulolalar)',
    capital: 'Fiva (Uaset), keyinchalik Itj-taui',
    overview: 'Birinchi oraliq davrdagi parokandalikdan so\'ng Mentuxotep II mamlakatni qayta birlashtirdi. Bu davr Misr adabiyoti, gumanistik dunyoqarashi va xalqaro savdoning eng yuksak bosqichi hisoblanadi.',
    significance: 'Fir\'avn endi nafaqat qudratli hukmdor, balki o\'z xalqining "G\'amxo\'r cho\'poni" sifatida tasvirlana boshlandi. Faiyum vohasida keng ko\'lamli irrigatsiya ishlari amalga oshirildi.',
    achievements: [
      'Sinuxe sarguzashtlari va Eloquent Peasant kabi mumtoz adabiy durdonalar',
      'Merid ko\'li va Faiyum botqoqliklarini obod qilish loyihasi',
      'Nubiya bilan barqaror oltin savdosi yo\'llarining mustahkamlanishi'
    ],
    keyFigures: ['Mentuxotep II', 'Amenemxet I', 'Senusret III', 'Amenemxet III']
  },
  {
    id: 'new-kingdom',
    name: 'Yangi Podsholik',
    subTitle: 'Buyuk harbiy imperiya va xalqaro qudrat',
    years: 'Mil. avv. 1550 – 1069 yillar (XVIII–XX sulolalar)',
    capital: 'Fiva (Uaset) va Per-Ramzes',
    overview: 'Giksoslar bosqinidan qutulgan Misr buyuk jahon imperiyasiga aylandi. Furot daryosidan tortib Nubiyaning 4-ostonasigacha bo\'lgan ulkan hududlar bo\'ysundirildi.',
    significance: 'Karnak va Luksor ibodatxonalari, Abu Simbel, Shohlar vodiysidagi dabdabali daxmalar va oltin xazinalar aynan shu davrga tegishli.',
    achievements: [
      'Tuxmos III ning 17 ta muvaffaqiyatli harbiy yurishi',
      'Xatshepsutning Punt o\'lkasiga mashhur dengiz ekspeditsiyasi',
      'Exnatonning yagona quyosh xudosi (Aton) islohoti',
      'Tutanxamon daxmasining mislsiz oltin buyumlari',
      'Ramzes II ning Xettlar bilan tuzgan tarixdagi ilk xalqaro tinchlik shartnomasi (Kadesh)'
    ],
    keyFigures: ['Yaxmos I', 'Xatshepsut', 'Tuxmos III', 'Exnaton', 'Nefertiti', 'Tutanxamon', 'Ramzes II']
  },
  {
    id: 'late-ptolemaic',
    name: 'So‘nggi va Ptolomeylar Davri',
    subTitle: 'Madaniyatlar uyg‘unligi va Misrning so‘nggi saltanati',
    years: 'Mil. avv. 664 – 30 yillar',
    capital: 'Sayis, keyin Iskandariya (Aleksandriya)',
    overview: 'Fors imperiyasi hukmronligi, keyinchalik Iskandar Zulqarnaynning Misrni egallashi va Ptolomeylar ellinistik sulolasining 300 yillik boshqaruvi. Iskandariya dunyoning ilm-fan va kitob markaziga aylandi.',
    significance: 'Misr va qadimgi yunon madaniyatining sintezi. Mashhur Iskandariya kutubxonasi va Iskandariya mayoqi qurildi. Mil. avv. 30 yilda Kleopatra vafoti bilan Misr Rim imperiyasi viloyatiga aylandi.',
    achievements: [
      'Rozetta toshi yozuvlari — 3 xil xat bilan yozilgan tarixiy farmon',
      'Edfu va Dendera ibodatxonalarining mukammal qurilishi',
      'Iskandariya kutubxonasida qadimgi dunyo ilmlarining to\'planishi'
    ],
    keyFigures: ['Psamtik I', 'Iskandar Zulqarnayn', 'Ptolomey I Soter', 'Kleopatra VII']
  }
];

export const PHARAOHS: Pharaoh[] = [
  {
    id: 'khufu',
    name: 'Xufu (Xeops)',
    regnalYears: 'Mil. avv. ~2589 – 2566',
    dynasty: 'IV sulola',
    title: 'Yuqori va Quyi Misr Hukmdori',
    epithet: 'Buyuk Ehrom Bunyodkori',
    biography: 'Qadimgi podsholikning eng mashhur fir\'avni. U o\'z davrida dunyoning eng baland va eng mahobatli tosh inshooti — Gizadagi Buyuk Piramidani barpo ettirdi. Uning shaxsiyati qat\'iy markazlashgan hokimiyat va tengsiz muhandislik irodasini ifodalaydi.',
    keyFeats: [
      'Giza platosida 146.6 metrlik Buyuk piramidani qurdirdi',
      'Sinay yarimorolidagi feruza va mis konlarini o\'zlashtirishni kengaytirdi',
      'Nil bo\'ylab xomashyo tashish logistikasini yo\'lga qo\'ydi'
    ],
    builtMonuments: ['Gizadagi Buyuk Xufu Piramidasi', 'Giza quyosh kemasi (Lodiya)', 'Vadi al-Jarf qadimgi bandargohi'],
    quote: '"Toshlar vaqt oldida ojiz, ammo vaqt ehromlar oldida ojizdir."'
  },
  {
    id: 'hatshepsut',
    name: 'Xatshepsut',
    regnalYears: 'Mil. avv. ~1479 – 1458',
    dynasty: 'XVIII sulola',
    title: 'Maatkara (Haqiqat Ra-ning qalbida)',
    epithet: 'Taxtdagi Birinchi Buyuk Malika-Fir\'avn',
    biography: 'Misr tarixidagi eng muvaffaqiyatli ayol hukmdorlardan biri. U erkak fir\'avnlarga xos soqol va unvonlar bilan taxtga o\'tirib, 20 yildan ortiq vaqt davomida mamlakatda tinchlik, ulkan bunyodkorlik va xalqaro savdoni mislsiz ravishda rivojlantirdi.',
    keyFeats: [
      'Afrikaning sirli Punt o\'lkasiga xushbo\'y daraxtlar va oltin olib keluvchi yirik flot ekspeditsiyasi',
      'Deyr al-Bahridagi ko\'p pog\'onali mashhur qoyatosh ibodatxonasi',
      'Karnak ibodatxonasidagi 30 metrli ulkan granit obelisklar'
    ],
    builtMonuments: ['Deyr al-Bahri (Djeser-Djeseru)', 'Karnak qizil kapellasi', 'Shohlar vodiysi KV20 daxmasi'],
    quote: '"Mening qalbim meni yo\'lladi: men xalqimga boylik va Amun-Ra ga abadiy shon-sharaf keltirdim."'
  },
  {
    id: 'thutmose3',
    name: 'Tuxmos III',
    regnalYears: 'Mil. avv. ~1479 – 1425',
    dynasty: 'XVIII sulola',
    title: 'Menxeperra (Ra-ning timsoli barqarordir)',
    epithet: 'Qadimgi Dunyo Sarkardasi',
    biography: 'Xatshepsutdan so\'ng to\'liq hokimiyatni qo\'lga olgan Tuxmos III harbiy daho bo\'lib chiqdi. U Yaqin Sharq bo\'ylab 17 ta yirik harbiy yurish o\'tkazib, birorta ham jangda mag\'lub bo\'lmadi va Megiddo jangida afsonaviy g\'alabaga erishdi.',
    keyFeats: [
      'Megiddo jangidagi jasur va kutilmagan tog\' yo\'li orqali qilingan hujum',
      'Suriya, Falastin va Furot daryosi bo\'yidagi davlatlarni bo\'ysundirish',
      'Misr hududini shimolda Furotdan janubda Nubiyagacha kengaytirish'
    ],
    builtMonuments: ['Karnak Ax-Menu zali', 'Geliopol obelisklari ("Kleopatra ignalari")', 'Fivadagi tantanali ibodatxonalar'],
    quote: '"Kutilmagan yo\'lni tanlagan sarkarda mag\'lub bo\'lmaydi."'
  },
  {
    id: 'akhenaten',
    name: 'Exnaton (Amenxotep IV)',
    regnalYears: 'Mil. avv. ~1353 – 1336',
    dynasty: 'XVIII sulola',
    title: 'Neferxeprura-Vaenra',
    epithet: 'Diniy Islohotchi va Monoteizm Peshvosi',
    biography: 'Misr tarixidagi eng ziddiyatli va inqilobiy fir\'avn. U qadimiy ko\'pxudolik e\'tiqodini bekor qilib, barcha ibodatlarni yagona quyosh nuri timsoli — Aton xudosiga yo\'naltirdi. Poytaxtni yangi barpo etilgan Axetaton (hozirgi Amarna) shahriga ko\'chirdi.',
    keyFeats: [
      'Dunyodagi ilk monoteistik (yakkayuxudolik) diniy islohotlardan biri',
      'Amarna san\'at uslubining vujudga kelishi (realistik, nozik his-tuyg\'uli tasvirlar)',
      'Mashhur Nefertiti büstining yaratilish davri'
    ],
    builtMonuments: ['Axetaton (Amarna) yangi poytaxti', 'Buyuk Aton ibodatxonasi', 'Karnakdagi Aton ziyoratgohi'],
    quote: '"Sen o\'z nuring bilan tiriklikni yaratasan, ey yagona Aton!"'
  },
  {
    id: 'tutankhamun',
    name: 'Tutanxamon',
    regnalYears: 'Mil. avv. ~1332 – 1323',
    dynasty: 'XVIII sulola',
    title: 'Nebxeprura',
    epithet: 'Oltin Fir\'avn va Asr Kashfiyoti',
    biography: 'Exnatonning o\'g\'li, yoshligida taxtga o\'tirib, qadimgi an\'anaviy din va Fiva nufuzini qayta tikladi. U 19 yoshida bevaqt vafot etgan bo\'lsa-da, 1922 yilda Govard Karter tomonidan uning daxmasi (KV62) deyarli talanmagan holda topilishi uni dunyodagi eng mashhur fir\'avnga aylantirdi.',
    keyFeats: [
      'Eski xudolar e\'tiqodini va Amun-Ra ziyoratgohlarini qayta tiklash to\'g\'risidagi tiklanish stelasini chiqardi',
      'Misr poytaxtini Memfisga qaytardi',
      '5000 dan ortiq toza oltin va qimmatbaho buyumlar saqlangan daxma merosi'
    ],
    builtMonuments: ['Shohlar vodiysidagi KV62 daxmasi', 'Karnakdagi Amun va Mut haykallari', 'Tiklanish stelasi'],
    quote: '"Men ajoyib narsalarni ko\'ryapman — sof oltin yaraqlaydi!" — Govard Karter'
  },
  {
    id: 'ramesses2',
    name: 'Ramzes II (Buyuk Ramzes)',
    regnalYears: 'Mil. avv. ~1279 – 1213',
    dynasty: 'XIX sulola',
    title: 'Usermaatra-Setepenra',
    epithet: 'Buyuk Quruvchi va Qudratli Jangchi',
    biography: '66 yil davomida Misrni boshqargan va 90 yoshdan oshiq umr ko\'rgan eng buyuk hukmdor. U Xett imperiyasiga qarshi jang olib bordi, so\'ngra tarixdagi ilk xalqaro tinchlik bitimini imzoladi. Misr bo\'ylab yuzlab ibodatxonalar va gigant haykallar bunyod ettirdi.',
    keyFeats: [
      'Mil. avv. 1274 yildagi Kadesh jangi (5000 jang aravalari to\'qnashuvi)',
      'Misr-Xett abadiy tinchlik shartnomasi (kumush lavhaga bitilgan)',
      'Abu Simbel qoyatosh majmuasi va Ramesseum me\'moriy mo\'jizalari'
    ],
    builtMonuments: ['Abu Simbel (Katta va Kichik ibodatxona)', 'Ramesseum memorial majmuasi', 'Per-Ramzes yangi harbiy poytaxti', 'Karnak ustunlar zali'],
    quote: '"Mening qudratim toshlarga muhrlandi, mening nomim asrlar osha jaranglaydi."'
  },
  {
    id: 'cleopatra',
    name: 'Kleopatra VII Filopator',
    regnalYears: 'Mil. avv. 51 – 30',
    dynasty: 'Ptolomeylar sulolasi',
    title: 'Teo Filopator (Otasini sevadigan ma\'buda)',
    epithet: 'Nilning So\'nggi Malika-Fir\'avni',
    biography: 'Misrning mustaqil davlat sifatidagi so\'nggi fir\'avni. U 9 ta tilni mukammal bilgan, faylasuf, mohir diplomat va siyosatchi edi. Yuliy Sezar va Mark Antoniy bilan ittifoq tuzib, Rim tazyiqiga qarshi Misr qudratini saqlab qolishga uringan.',
    keyFeats: [
      'Ptolomeylar sulolasidan qadimgi misr tilini o\'rgangan yagona hukmdor',
      'Iskandariya dengiz floti va iqtisodiyotini qayta oyoqqa turg\'azish',
      'Dendera ibodatxonasi relyeflaridagi buyuk qurilish homiyligi'
    ],
    builtMonuments: ['Denderadagi Xatxor ibodatxonasi fasadi', 'Iskandariya dengiz saroyi majmuasi'],
    quote: '"Men hech qachon zanjirband holda g\'alaba aravasi ortidan yurmayman."'
  }
];

export const WONDERS: Wonder[] = [
  {
    id: 'giza-pyramid',
    name: 'Xufu (Xeops) Buyuk Ehromi',
    era: 'Qadimgi Podsholik (~Mil. avv. 2560)',
    location: 'Giza platosi (Qohiradan 15 km)',
    heightOrSize: 'Asl balandligi: 146.6 m (hozir 138.8 m), Asosi: 230.4 m x 230.4 m',
    purpose: 'Fir\'avn Xufuning mangulik daxmasi va osmon yulduzlariga yo\'l oluvchi ziyoratgoh',
    description: 'Qadimgi dunyoning 7 mo\'jizasidan bizning kunlargacha saqlanib qolgan yagona durdonadir. Taxminan 2.3 millionta tosh blokdan iborat bo\'lib, har bir blokning og\'irligi 2.5 tonnadan 15 tonnagacha boradi.',
    architecturalMystery: 'Piramidaning 4 tomoni dunyo tomonlariga (Shimol, Janub, Sharq, G\'arb) 1 darajaning o\'ndan bir qismigacha favqulodda aniqlik bilan yo\'naltirilgan. Bloklar orasiga qog\'oz pichog\'i ham sig\'maydigan darajada zich jipslashtirilgan.',
    sections: [
      {
        name: 'Qirol xonasi (King\'s Chamber)',
        description: 'Piramidaning 43 metr balandligida joylashgan qizil granit xona. Shiftida 5 qavatli og\'irlikni yengillashtiruvchi granit tosh plitalar o\'rnatilgan.',
        detail: 'Bu yerda Xufuning qattiq pushti granitdan yo\'nilgan bo\'sh sarkofagi saqlanadi.'
      },
      {
        name: 'Buyuk Galereya (Grand Gallery)',
        description: 'Uzunligi 47 metr, balandligi 8.6 metr bo\'lgan mahobatli ko\'tariluvchi yo\'lak. Pog\'onali (korbell) shift texnikasi bilan terilgan.',
        detail: 'U dunyodagi toshdan yasalgan eng ajoyib akustik va me\'moriy yo\'laklardan biridir.'
      },
      {
        name: 'Malika xonasi (Queen\'s Chamber)',
        description: 'Qirol xonasining pastki sathida joylashgan ohaktosh xona. Nomiga qaramay malika uchun emas, diniy haykal yoki "Ka" ruhi uchun mo\'ljallangan deb taxmin qilinadi.',
        detail: 'Sharqiy devorida sirli chiroyli nisha (tokcha) mavjud.'
      },
      {
        name: 'Shamollatish yoki Yulduz shaftlari',
        description: 'Xonalardan to\'g\'ridan-to\'g\'ri tashqariga yo\'nalgan 20x20 sm li tosh kanallar.',
        detail: 'Ular Orion yulduz turkumi va Sirioz yulduziga to\'g\'ri burchak ostida yo\'naltirilgan bo\'lib, fir\'avn ruhining samoga ko\'tarilishini ta\'minlagan.'
      },
      {
        name: 'Yerosti bitmagan xonasi',
        description: 'Piramida asosidan 30 metr chuqurlikdagi qoyatosh ichiga o\'yilgan dastlabki xona.',
        detail: 'Qurilish rejasi o\'zgarib, asosiy xonalar yuqoriga ko\'chirilgani sababli chala qoldirilgan.'
      }
    ]
  },
  {
    id: 'sphinx',
    name: 'Katta Sfenks',
    era: 'Qadimgi Podsholik (~Mil. avv. 2500)',
    location: 'Giza platosi',
    heightOrSize: 'Uzunligi: 73 metr, Balandligi: 20 metr',
    purpose: 'Ehromlar va muqaddas voha qo\'riqchisi, quyosh xudosi Hor-em-axet timsoli',
    description: 'Arslon gavdasi va inson (ehtimol fir\'avn Xafra) boshiga ega bo\'lgan yagona ulkan monolit ohaktosh qoyadan yo\'nilgan eng qadimgi monumental haykal.',
    architecturalMystery: 'Sfenks yuzidagi xotirjam tabassum va qadimgi suv eroziyasi izlari olimlar o\'rtasida Sahara cho\'li ilgari sernam yashil o\'lka bo\'lgani bo\'yicha qizg\'in bahslarga sabab bo\'lgan.'
  },
  {
    id: 'karnak',
    name: 'Karnak Ibodatxonalar Majmuasi',
    era: 'O‘rta va Yangi Podsholik (1500 yildan ortiq vaqt davomida qurilgan)',
    location: 'Fiva (zamonaviy Luksor)',
    heightOrSize: 'Maydoni: 100 gektardan ortiq — dunyodagi eng yirik diniy majmua',
    purpose: 'Amun-Ra, uning rafiqasi Mut va o\'g\'li Xonsu sharafiga bunyod etilgan davlat ibodatxonasi',
    description: '134 ta ulkan tosh ustunlardan iborat Gipostil zali bilan mashhur. O\'rtadagi 12 ta ustunning har biri 21 metr balandlikda va diametri 3.5 metr bo\'lib, papirus gulini ifodalaydi.',
    architecturalMystery: 'O\'nlab fir\'avnlar o\'zidan oldingilarining ustiga yangi pilonlar, zallar va obelisklarni qo\'shib borgan, natijada toshda bitilgan haqiqiy tarix qatlamlari ensiklopediyasi hosil bo\'lgan.'
  },
  {
    id: 'abu-simbel',
    name: 'Abu Simbel Qoyatosh Ibodatxonasi',
    era: 'Yangi Podsholik (~Mil. avv. 1264)',
    location: 'Nubiya chegarasi, Nosir ko\'li bo\'yi',
    heightOrSize: 'Fasaddagi Ramzes II haykallari: 20 metr balandlikda',
    purpose: 'Misrning janubiy chegaralaridagi qudratini namoyish etish va Ramzes II ning ilohiylashtirilishi',
    description: 'Qattiq qumtosh qoyaning ichiga o\'yilgan ikki ibodatxona (Ramzes II va uning sevimli rafiqasi Nefertari uchun).',
    architecturalMystery: 'Yilda ikki marta — 22 fevral (Ramzes tug\'ilgan kuni) va 22 oktyabrda (taxtga o\'tirgan kuni) tonggi quyosh nuri 65 metr ichkariga kirib, xudolar va Ramzes haykalini 20 daqiqa yoritadi, faqat zulmat xudosi Ptah haykali soyada qoladi!'
  }
];

export const DEITIES: Deity[] = [
  {
    id: 'ra',
    name: 'Ra (Quyosh Xudosi)',
    role: 'Koinot yaratuvchisi, oliy iloh va quyosh nuri egasi',
    symbol: 'Quyosh diski, Urey (kobra iloni), Anx',
    appearance: 'Lochin boshli odam, boshida quyosh gardishi va ilon',
    mythology: 'Har kuni ertalab kunduzgi quyosh qayig\'ida (Mandjet) osmon bo\'ylab suzadi, tunda esa yerosti olamida zulmat ajdahosi Apop bilan jang qilib, tongda qayta g\'alaba qozonadi.',
    sacredAnimal: 'Lochin, sher, Bennu qushi'
  },
  {
    id: 'osiris',
    name: 'Osiris (Oziris)',
    role: 'O‘limdan keyingi hayot, tirilish va unumdorlik hukmdori',
    symbol: 'Atef toji, xasso va qamchi (heqa va nexaxa)',
    appearance: 'Yashil tusli teriga ega (tirilayotgan o\'simliklar ramzi), oq kafanga o\'ralgan fir\'avn qiyofasi',
    mythology: 'O\'z ukasi Set tomonidan hasad bilan o\'ldirilib, qismlarga bo\'lib tashlangan. Rafiqasi Isis uni qayta yig\'ib tiriltiradi va Osiris narigi dunyo shohi bo\'ladi.',
    sacredAnimal: 'Apis buqasi'
  },
  {
    id: 'isis',
    name: 'Isis (Izida)',
    role: 'Sehr-jodu, onalik, shifo va sadoqat ma’budasi',
    symbol: 'Taxt ko\'rinishidagi bosh kiyimi, qanotlar, Tyet (Izida tuguni)',
    appearance: 'Boshida taxt timsoli yoki sigir shoxlari orasidagi quyosh gardishi bor ayol',
    mythology: 'Osirisning sodiq turmush o\'rtog\'i va Horusning onasi. U o\'zining yuksak sehr qudrati bilan erining tanasini jonlantirdi va o\'g\'lini cho\'ldagi xavflardan asrab voyaga yetkazdi.',
    sacredAnimal: 'Sigir, qarqara'
  },
  {
    id: 'anubis',
    name: 'Anubis (Inpu)',
    role: 'Mumiyolash homiysi, qabristonlar qo‘riqchisi va narigi dunyo yo‘lboshchisi',
    symbol: 'Tarozu, mumiyolash matolari, kanop ko\'zalari',
    appearance: 'Qora chiyobori (shaqol) boshli odam gavdasi',
    mythology: 'Vafot etganlarning qalbini narigi dunyodagi "Ikki haqiqat zali"ga yetaklab boradi va tarozida marhumning yuragini Ma\'at pati bilan o\'lchaydi.',
    sacredAnimal: 'Qora chiyobori (shaqol), it'
  },
  {
    id: 'horus',
    name: 'Horus (Gor)',
    role: 'Osmon, yorug‘lik va hukmronlik homiysi; tirik fir’avnlar timsoli',
    symbol: 'Uajat (Horus ko\'zi — butunlik va shifo ramzi)',
    appearance: 'Lochin yoki lochin boshli yosh jangchi, boshida Pshent qo\'shma toji',
    mythology: 'Otasi Osirisning qasosini olish uchun Set bilan uzoq yillar jang qilib g\'alaba qozondi. Misrning har bir tirik fir\'avni yer yuzidagi Horus hisoblangan.',
    sacredAnimal: 'Lochin'
  },
  {
    id: 'thoth',
    name: 'Thoth (Tot)',
    role: 'Donolik, yozuv, oy, fan va vaqt hisobi xudosi',
    symbol: 'Qamish qalam va palitra, oy yarim oyi',
    appearance: 'Ibis qushi boshli yoki pavian maymuni qiyofasidagi iloh',
    mythology: 'Ieroglif yozuvini va taqvimni ixtiro qilgan. Narigi dunyo sudida tarozu hisob-kitoblarini papirus varag\'iga aniq qayd etib boradi.',
    sacredAnimal: 'Ibis qushi, pavian maymun'
  },
  {
    id: 'maat',
    name: 'Ma’at',
    role: 'Haqiqat, adolat, qonun va koinot muvozanati ma’budasi',
    symbol: 'Tuyaqush pati (Ostrich feather)',
    appearance: 'Boshida bitta oq tuyaqush pati qadalgan oq libosli ayol',
    mythology: 'Koinot tartibi Ma\'at qonunlariga asoslangan. Agar inson yer yuzida ezgu, adolatli hayot kechirgan bo\'lsa, uning yuragi Ma\'at patidan yengilroq chiqadi va u jannatga yo\'l oladi.',
    sacredAnimal: 'Tuyaqush'
  },
  {
    id: 'bastet',
    name: 'Bastet',
    role: 'Oila, quvonch, raqs, go‘zallik va xonadon homiysi',
    symbol: 'Sistr (musiqiy asbob), mushuk bolalari bo\'lgan savatcha',
    appearance: 'Mushuk boshli latofatli ayol',
    mythology: 'Xonadonlarni yovuz ruhlar, chayonlar va ilonlardan himoya qilgan. Misrliklar mushuklarni aynan Bastetning muqaddas timsoli sifatida e\'zozlashgan.',
    sacredAnimal: 'Uy mushugi'
  }
];

export const NILE_LOCATIONS: NileLocation[] = [
  {
    id: 'alexandria',
    name: 'Iskandariya (Aleksandriya)',
    ancientName: 'Raqote / Alexandria',
    region: 'Quyi Misr (Shimol)',
    description: 'Mil. avv. 331 yilda Iskandar Zulqarnayn tomonidan asos solingan O\'rta Yer dengizining buyuk port shahri va qadimgi dunyoning eng katta ilm markazi.',
    highlightArtifact: 'Iskandariya Mayoqi va Ilmiy Kutubxona qoldiqlari',
    coordinatesPct: { x: 38, y: 12 }
  },
  {
    id: 'giza-memphis',
    name: 'Giza va Qadimgi Memfis',
    ancientName: 'Ineb-Hedj (Oq Devorlar) & Men-Nefer',
    region: 'Quyi Misr (Shimol)',
    description: 'Ilk va Qadimgi podsholikning afsonaviy poytaxti. Giza ehromlari, Saqqara pog\'onali piramidasi va Katta Sfenks joylashgan muqaddas maskan.',
    highlightArtifact: 'Xufu Buyuk Ehromi va Joser nekropoli',
    coordinatesPct: { x: 48, y: 26 }
  },
  {
    id: 'amarna',
    name: 'Amarna (Axetaton)',
    ancientName: 'Axetaton (Aton ufqi)',
    region: 'O‘rta Misr',
    description: 'Fir\'avn Exnaton tomonidan bo\'sh cho\'l o\'rtasida Aton quyosh e\'tiqodi uchun qisqa vaqt ichida barpo etilgan yorqin va inqilobiy poytaxt.',
    highlightArtifact: 'Nefertiti ohaktosh büsti va Amarna loy lavhalari',
    coordinatesPct: { x: 53, y: 45 }
  },
  {
    id: 'thebes-luxor',
    name: 'Fiva (Luksor va Karnak)',
    ancientName: 'Uaset (Hassalar shahri)',
    region: 'Yuqori Misr (Janub)',
    description: 'Yangi podsholikning buyuk diniy va harbiy poytaxti. Nilning sharqiy sohilida tiriklar shahri (Karnak, Luksor), g\'arbida esa Shohlar vodiysi joylashgan.',
    highlightArtifact: 'Tutanxamon oltin niqobi va Karnak gipostil zali',
    coordinatesPct: { x: 62, y: 64 }
  },
  {
    id: 'edfu',
    name: 'Edfu',
    ancientName: 'Behdet / Djeba',
    region: 'Yuqori Misr (Janub)',
    description: 'Lochin boshli Horus xudosiga bag\'ishlangan va eng yaxshi holatda butun saqlanib qolgan ulkan qumtosh ibodatxona joylashgan shahar.',
    highlightArtifact: 'Horus granit lochin haykali va devor relyeflari',
    coordinatesPct: { x: 64, y: 76 }
  },
  {
    id: 'aswan',
    name: 'Asvon (Elefantina)',
    ancientName: 'Suenet (Savdo bozori)',
    region: 'Yuqori Misr (Janub)',
    description: 'Misrning qizil granit karerlari vatani. Ehromlar va sarkofaglar uchun barcha og\'ir toshlar aynan shu yerdan Nil bo\'ylab oqizilgan.',
    highlightArtifact: 'Tugallanmagan 1200 tonnalik ulkan obelisk',
    coordinatesPct: { x: 68, y: 85 }
  },
  {
    id: 'abu-simbel-loc',
    name: 'Abu Simbel',
    ancientName: 'Meha / Ibsambul',
    region: 'Yuqori Misr (Janub)',
    description: 'Nubiya chegarasida, Nil daryosining 2-ostonasi yaqinida qoyaga o\'yilgan Ramzes II ning shon-shuhrat qal\'asi.',
    highlightArtifact: '20 metrli to\'rtta ulkan Ramzes II kolossi',
    coordinatesPct: { x: 65, y: 95 }
  }
];

export const MUMMIFICATION_STEPS = [
  {
    step: 1,
    title: 'Tanani tozalash va yuvish',
    duration: '1–2 kun',
    description: 'Marhumning tanasi Nilning muqaddas suvi va natron tuzi eritmasi bilan yaxshilab yuviladi. Bu marosim ruhning poklanishini ifodalaydi.',
    tools: 'Muqaddas ko\'zalar, Nil suvi, xushbo\'y moylar'
  },
  {
    step: 2,
    title: 'Ichki a’zolarni chiqarish va Kanop ko‘zalari',
    duration: '2–3 kun',
    description: 'Maxsus ilmoq bilan burun orqali miya ehtiyotkorlik bilan olinadi. Chap qovurg\'a ostidan kesilib jigar, o\'pka, oshqozon va ichaklar olinadi va 4 ta Kanop ko\'zasiga joylanadi. Yurak esa tananing ichida qoldiriladi — chunki u oxirat sudida kerak bo\'ladi!',
    tools: 'Obsidian pichoq, bronza ilmoq, 4 ta Horus o\'g\'illari boshli Kanop ko\'zalari'
  },
  {
    step: 3,
    title: 'Natron tuzida quritish',
    duration: '40 kun',
    description: 'Tana barcha namlikdan xalos bo\'lishi uchun quruq tabiiy natron (soda va tuz aralashmasi) qatlami ostiga ko\'miladi. 40 kundan so\'ng tana to\'liq quriydi va buzilmas holga keladi.',
    tools: 'Quruq mineral natron tuzi, xushbo\'y qatronlar'
  },
  {
    step: 4,
    title: 'Moylar, smola va shakl berish',
    duration: '10–15 kun',
    description: 'Qurigan tana sadr daraxti moyi, mirra, tutatqilar va xushbo\'y moylar bilan silanadi. Tana bo\'shliqlari zig\'ir mato bo\'laklari, qipiq va qatron bilan to\'ldirilib, tabiiy ko\'rinishi tiklanadi.',
    tools: 'Sadr yog\'i, mirra smolasi, xushbo\'y moylar'
  },
  {
    step: 5,
    title: 'Zig‘ir matoga o‘rash va tumorlar taqish',
    duration: '15 kun',
    description: 'Tana yuzlab metr nozik zig\'ir mato tasmalari bilan o\'raladi. Har bir qatlam orasiga xavfsizlik va omonlik timsoli bo\'lgan Uajat ko\'zi, Skarabey qo\'ng\'izi va Anx tumorlari qo\'yiladi. Oxirida marhum yuziga oltin yoki bo\'yalgan niqob kiyg\'iziladi.',
    tools: 'Yuzlab metr zig\'ir tasmalar, oltin niqob, Skarabey yurak tumori, sarkofag'
  }
];

export interface HieroglyphChar {
  letter: string;
  glyph: string;
  symbolName: string;
  transliteration: string;
  meaning: string;
}

export const HIEROGLYPH_ALPHABET: Record<string, HieroglyphChar> = {
  A: { letter: 'A', glyph: '𓄿', symbolName: 'Burgut (Vulture)', transliteration: 'Ꜣ', meaning: 'Erkinlik va o\'tkir nigoh' },
  B: { letter: 'B', glyph: '𓃀', symbolName: 'Oyoq va boldir (Foot)', transliteration: 'b', meaning: 'Harakat va qat\'iyat' },
  D: { letter: 'D', glyph: '𓂧', symbolName: 'Qo\'l panjasi (Hand)', transliteration: 'd', meaning: 'Bunyodkorlik va saxovat' },
  E: { letter: 'E', glyph: '𓇋', symbolName: 'Qamish guli (Reed)', transliteration: 'j / i', meaning: 'Nil sohillari unumdorligi' },
  F: { letter: 'F', glyph: '𓆑', symbolName: 'Shoxli ilon (Horned viper)', transliteration: 'f', meaning: 'Ogohlik va himoya' },
  G: { letter: 'G', glyph: '𓎼', symbolName: 'Ko\'za tagligi (Jar stand)', transliteration: 'g', meaning: 'Barqarorlik' },
  H: { letter: 'H', glyph: '𓉔', symbolName: 'Qamish kulba (Reed shelter)', transliteration: 'h', meaning: 'Boshpana va osoyishtalik' },
  I: { letter: 'I', glyph: '𓇋', symbolName: 'Ikki qamish (Reeds)', transliteration: 'y', meaning: 'Hayot oqimi' },
  J: { letter: 'J', glyph: '𓆓', symbolName: 'Kobra (Cobra)', transliteration: 'ḏ', meaning: 'Podshohlik qudrati' },
  K: { letter: 'K', glyph: '𓎡', symbolName: 'Dastali savat (Basket)', transliteration: 'k', meaning: 'To\'kin-sochinlik' },
  L: { letter: 'L', glyph: '𓃭', symbolName: 'Yotgan sher (Lion)', transliteration: 'rw / l', meaning: 'Kuch va botirlik' },
  M: { letter: 'M', glyph: '𓅓', symbolName: 'Boyqush (Owl)', transliteration: 'm', meaning: 'Tungi donolik' },
  N: { letter: 'N', glyph: '𓈖', symbolName: 'Suv to\'lqini (Water ripple)', transliteration: 'n', meaning: 'Nilning hayotbaxsh suvlari' },
  O: { letter: 'O', glyph: '𓍯', symbolName: 'Bog\'ich / Ilmoq (Lasso)', transliteration: 'w / o', meaning: 'Birlashuv va rishta' },
  P: { letter: 'P', glyph: '𓊪', symbolName: 'Bo\'yra / Kursi (Stool)', transliteration: 'p', meaning: 'Martaba va tartib' },
  Q: { letter: 'Q', glyph: '𓈎', symbolName: 'Qum tepaligi (Hill slope)', transliteration: 'q', meaning: 'Tog\'dek yuksaklik' },
  R: { letter: 'R', glyph: '𓂋', symbolName: 'Ochiq og\'iz (Mouth)', transliteration: 'r', meaning: 'So\'z qudrati va haqiqat' },
  S: { letter: 'S', glyph: '𓋴', symbolName: 'Buralgan zig\'ir mato (Cloth)', transliteration: 's', meaning: 'Poklik va nafosat' },
  T: { letter: 'T', glyph: '𓏏', symbolName: 'Non kulchasi (Bread loaf)', transliteration: 't', meaning: 'Rizq va to\'qlik' },
  U: { letter: 'U', glyph: '𓅱', symbolName: 'Bedana jo\'jasi (Quail chick)', transliteration: 'w / u', meaning: 'Yangi hayot va uyg\'onish' },
  V: { letter: 'V', glyph: '𓆑', symbolName: 'Shoxli ilon (Viper)', transliteration: 'v', meaning: 'Qalqon' },
  X: { letter: 'X', glyph: '𓐍', symbolName: 'Quyosh gardishi / Ko\'lmak', transliteration: 'ḫ', meaning: 'Sirli bilimlar' },
  Y: { letter: 'Y', glyph: '𓇌', symbolName: 'Ikkita gullagan qamish', transliteration: 'y', meaning: 'Gullab-yashnash' },
  Z: { letter: 'Z', glyph: '𓊃', symbolName: 'Eshik zulfi (Door bolt)', transliteration: 'z', meaning: 'Mustahkam himoya' },
  Oʻ: { letter: 'O‘', glyph: '𓍯', symbolName: 'Bog\'ich', transliteration: 'w', meaning: 'Nil to\'lqini' },
  Gʻ: { letter: 'G‘', glyph: '𓎼', symbolName: 'Ko\'za tagligi', transliteration: 'g', meaning: 'Boylik' },
  SH: { letter: 'SH', glyph: '𓈙', symbolName: 'Bog\' hovuzi (Water basin)', transliteration: 'š', meaning: 'Salqinlik va xuzur' },
  CH: { letter: 'CH', glyph: '𓍿', symbolName: 'Bog\'ich arqon', transliteration: 'ṯ', meaning: 'Kengash' }
};

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qadimgi Misrni yagona davlatga birlashtirgan ilk fir’avn kim edi?',
    options: ['Xufu (Xeops)', 'Narmer (Menes)', 'Ramzes II', 'Tuxmos III'],
    correctIndex: 1,
    explanation: 'Mil. avv. taxminan 3100 yilda Fir\'avn Narmer Yuqori va Quyi Misrni birlashtirdi va Narmer lavhasida ikki toj egasi sifatida tasvirlandi.'
  },
  {
    id: 2,
    question: 'Gizadagi Buyuk Ehrom (Piramida) qaysi fir’avn sharafiga bunyod etilgan?',
    options: ['Xafra', 'Xufu (Xeops)', 'Joser', 'Menkaura'],
    correctIndex: 1,
    explanation: 'Buyuk ehrom IV sulola fir\'avni Xufu (yunoncha Xeops) davrida qurilgan bo\'lib, balandligi dastlab 146.6 metrni tashkil qilgan.'
  },
  {
    id: 3,
    question: 'Tarixdagi eng birinchi tosh pog‘onali piramida kim tomonidan va qayerda loyihalashtirilgan?',
    options: ['Xufu tomonidan Gizada', 'Imxotep tomonidan Saqqarada', 'Senusret tomonidan Dahshurda', 'Ramzes tomonidan Luksorda'],
    correctIndex: 1,
    explanation: 'Dunyodagi ilk pog\'onali ehrom fir\'avn Joser uchun uning daho me\'mori Imxotep tomonidan Saqqara nekropolida barpo etilgan.'
  },
  {
    id: 4,
    question: 'Misr tarixida yagona xudo — Aton (quyosh diski) sharafiga diniy inqilob o‘tkazgan fir’avn kim?',
    options: ['Exnaton (Amenxotep IV)', 'Tutanxamon', 'Yaxmos I', 'Seti I'],
    correctIndex: 0,
    explanation: 'Exnaton an\'anaviy Amun e\'tiqodini bekor qilib, faqat yagona Aton xudosiga sajda qilishni buyurdi va yangi Axetaton poytaxtini qurdi.'
  },
  {
    id: 5,
    question: '1922 yilda deyarli buzilmagan dabdabali oltin daxmasi topilgan mashhur yosh fir’avn kim?',
    options: ['Ramzes II', 'Tutanxamon', 'Tuxmos I', 'Ptolomey V'],
    correctIndex: 1,
    explanation: 'Govard Karter Shohlar vodiysida Tutanxamonning KV62 daxmasini ochdi, undan 5000 dan ziyod bebaho oltin ashyolar chiqdi.'
  },
  {
    id: 6,
    question: 'Mumiyolash paytida marhumning ichki a’zolari solinadigan maxsus 4 ta idish nima deb ataladi?',
    options: ['Sarkofag', 'Kanop ko‘zalari', 'Ushabti', 'Pshent'],
    correctIndex: 1,
    explanation: 'Marhumning jigar, o\'pka, oshqozon va ichaklari Horusning 4 o\'g\'li boshiga ega bo\'lgan muqaddas Kanop ko\'zalarida saqlangan.'
  },
  {
    id: 7,
    question: 'Qadimgi Misr ieroglif yozuvlarini ochish (o‘qish) imkonini bergan mashhur tosh qanday nomlanadi?',
    options: ['Giza plitasi', 'Rozetta toshi', 'Palermo toshi', 'Karnak stelasi'],
    correctIndex: 1,
    explanation: '1799 yilda topilgan Rozetta toshida bitta matn uch xil yozuvda bitilgan bo\'lib, 1822 yilda Jan-Fransua Shampolyon ierogliflar sirini ochdi.'
  },
  {
    id: 8,
    question: 'Narigi dunyo sudida marhumning yuragi qaysi ma’budaning pati bilan tarozida o‘lchangan?',
    options: ['Bastet', 'Isis (Izida)', 'Ma’at', 'Sexmet'],
    correctIndex: 2,
    explanation: 'Haqiqat va adolat ma\'budasi Ma\'atning oq tuyaqush pati bilan marhum yuragi tarozida tortilgan.'
  },
  {
    id: 9,
    question: 'Mil. avv. 1274 yilda Kadesh jangida qaysi qudratli davlat bilan to‘qnashuv yuz bergan va keyinchalik ilk xalqaro tinchlik shartnomasi tuzilgan?',
    options: ['Ossuriya imperiyasi', 'Fors imperiyasi', 'Xett imperiyasi', 'Vavilon podsholigi'],
    correctIndex: 2,
    explanation: 'Ramzes II va Xett podshohi Xattusili III o\'rtasida Kadesh jangi bo\'lib, keyin tarixdagi ilk yozma tinchlik sulhi imzolangan.'
  },
  {
    id: 10,
    question: 'Misrning mustaqil fir’avnlik sifatidagi so‘nggi malika-hukmdori kim bo‘lgan?',
    options: ['Nefertiti', 'Xatshepsut', 'Kleopatra VII', 'Tiya'],
    correctIndex: 2,
    explanation: 'Mil. avv. 30 yilda Kleopatra VII vafotidan so\'ng Misr rasman Rim imperiyasining viloyatiga aylangan.'
  }
];

export const GLOSSARY_TERMS = [
  { term: 'Kartush (Shenu)', desc: 'Fir\'avn yoki malikaning shohona ismini o\'rab turuvchi oval shakldagi himoya halqasi; abadiylikni ifodalaydi.' },
  { term: 'Anx (Ankh)', desc: 'Qadimgi Misrning "Hayot kaliti" — abadiy tiriklik, baraka va ilohiy nafas ramzi.' },
  { term: 'Papirus', desc: 'Nil daryosi qamishlaridan tayyorlangan dunyodagi ilk qog\'oz o\'tmishdoshi bo\'lgan yozuv materiali.' },
  { term: 'Ka va Ba', desc: 'Misr e\'tiqodida inson ruhiyatining ikki qismi: Ka — insonning hayotiy quvvati va egizagi; Ba — qush qanotli sayr qiluvchi erkin ruhi.' },
  { term: 'Sarkofag', desc: 'Tosh, yog\'och yoki oltindan yasalgan mahobatli tobut; ustiga marhum qiyofasi va duo matnlari o\'yilgan.' },
  { term: 'Ushabti', desc: 'Dafn paytida daxmaga qo\'yiladigan kichik haykalchalar; ular narigi dunyoda marhum o\'rniga mehnat qilishga mo\'ljallangan.' },
  { term: 'Vezir (Chati)', desc: 'Fir\'avndan keyingi eng oliy davlat amaldori — bosh vazir, adliya va soliq tizimi rahbari.' },
  { term: 'Uajat (Horus ko‘zi)', desc: 'Muqaddas himoya, salomatlik va koinot yaxlitligi tumori; barcha zararlardan asragan.' }
];
