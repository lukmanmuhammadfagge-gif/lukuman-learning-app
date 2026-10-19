import { useState, useEffect } from 'react'
import './App.css'

const lessons = [
  {
    title: 'Lesson 1: Greetings',
    hausaTitle: 'Darasi na 1: Gaisuwa',
    explanation: 'Greetings are words we use when meeting people.',
    hausaExplanation: 'Gaisuwa ita ce kalmomin da muke amfani da su idan muka haɗu da mutane.',
    examples: [
      ['Good morning.', 'Ina kwana.'],
      ['Good afternoon.', 'Ina wuni.'],
      ['How are you?', 'Yaya kake? / Yaya kike?'],
      ['I am fine, thank you.', 'Lafiya lau, na gode.'],
    ],
    question: 'What does "How are you?" mean?',
    options: ['Ina kwana.', 'Yaya kake?', 'Sai anjima.'],
    answer: 'Yaya kake?',
  },
  {
    title: 'Lesson 2: Introducing Yourself',
    hausaTitle: 'Darasi na 2: Gabatar da Kai',
    explanation: 'Use these sentences when telling people about yourself.',
    hausaExplanation: 'Ka yi amfani da waɗannan jimloli idan kana gabatar da kanka ga mutane.',
    examples: [
      ['My name is Lukman.', 'Sunana Lukman.'],
      ['I am from Nigeria.', 'Ni ɗan Najeriya ne.'],
      ['I live in Kano.', 'Ina zaune a Kano.'],
      ['Nice to meet you.', 'Na ji daɗin haɗuwa da kai.'],
    ],
    question: 'How do you say "Sunana Lukman" in English?',
    options: ['I am fine.', 'My name is Lukman.', 'I live in Kano.'],
    answer: 'My name is Lukman.',
  },
  {
    title: 'Lesson 3: Everyday Sentences',
    hausaTitle: 'Darasi na 3: Jimlolin Yau da Kullum',
    explanation: 'Learn simple English sentences for everyday conversations.',
    hausaExplanation: 'Ka koyi jimlolin Turanci masu sauƙi don tattaunawar yau da kullum.',
    examples: [
      ['Please help me.', 'Don Allah ka taimake ni.'],
      ['I do not understand.', 'Ban gane ba.'],
      ['Please speak slowly.', 'Don Allah ka yi magana a hankali.'],
      ['Thank you very much.', 'Na gode sosai.'],
    ],
    question: 'What does "I do not understand" mean?',
    options: ['Na gode sosai.', 'Ban gane ba.', 'Ina zuwa.'],
    answer: 'Ban gane ba.',
  },
  {
    "title": "Lesson 4: Numbers and Counting",
    "hausaTitle": "Darasi na 4: Lambobi da Ƙirgawa",
    "explanation": "Learn simple English numbers.",
    "hausaExplanation": "Koyi lambobin Turanci masu sauƙi.",
    "examples": [
      [
        "One",
        "Ɗaya"
      ],
      [
        "Two",
        "Biyu"
      ],
      [
        "Three",
        "Uku"
      ],
      [
        "Ten",
        "Goma"
      ]
    ],
    "question": "What does Two mean?",
    "options": [
      "Ɗaya",
      "Biyu",
      "Uku"
    ],
    "answer": "Biyu"
  },
  {
    "title": "Lesson 5: Days and Time",
    "hausaTitle": "Darasi na 5: Kwanaki da Lokaci",
    "explanation": "Learn useful words about time.",
    "hausaExplanation": "Koyi kalmomin Turanci game da lokaci.",
    "examples": [
      [
        "Today",
        "Yau"
      ],
      [
        "Tomorrow",
        "Gobe"
      ],
      [
        "Yesterday",
        "Jiya"
      ],
      [
        "What time is it?",
        "Karfe nawa?"
      ]
    ],
    "question": "What does Tomorrow mean?",
    "options": [
      "Jiya",
      "Yau",
      "Gobe"
    ],
    "answer": "Gobe"
  },
  {
    "title": "Lesson 6: Family",
    "hausaTitle": "Darasi na 6: Iyali",
    "explanation": "Learn English words for family members.",
    "hausaExplanation": "Koyi sunayen yan uwa a Turanci.",
    "examples": [
      [
        "Father",
        "Uba"
      ],
      [
        "Mother",
        "Uwa"
      ],
      [
        "Brother",
        "Dan’uwa"
      ],
      [
        "Sister",
        "Yar’uwa"
      ]
    ],
    "question": "What does Mother mean?",
    "options": [
      "Uba",
      "Uwa",
      "Yar’uwa"
    ],
    "answer": "Uwa"
  },
  {
    "title": "Lesson 7: At the Market",
    "hausaTitle": "Darasi na 7: A Kasuwa",
    "explanation": "Learn useful English for shopping.",
    "hausaExplanation": "Koyi Turancin da ake amfani da shi a kasuwa.",
    "examples": [
      [
        "How much is this?",
        "Nawa ne wannan?"
      ],
      [
        "It is too expensive.",
        "Ya yi tsada sosai."
      ],
      [
        "I want to buy this.",
        "Ina son in sayi wannan."
      ],
      [
        "Please reduce the price.",
        "Don Allah a rage farashin."
      ]
    ],
    "question": "What does How much is this mean?",
    "options": [
      "Ina son wannan.",
      "Nawa ne wannan?",
      "Ya yi kyau."
    ],
    "answer": "Nawa ne wannan?"
  },
  {
    "title": "Lesson 8: English for Business",
    "hausaTitle": "Darasi na 8: Turanci a Kasuwanci",
    "explanation": "Learn English phrases for business.",
    "hausaExplanation": "Koyi jimlolin Turanci na kasuwanci.",
    "examples": [
      [
        "I have a shop.",
        "Ina da shago."
      ],
      [
        "How much does it cost?",
        "Nawa ne farashinsa?"
      ],
      [
        "I want to order more.",
        "Ina son in ƙara oda."
      ],
      [
        "Thank you for your business.",
        "Na gode da cinikinku."
      ]
    ],
    "question": "What does I have a shop mean?",
    "options": [
      "Ina da shago.",
      "Ina zuwa.",
      "Ina son abinci."
    ],
    "answer": "Ina da shago."
  },
  {
    "title": "Lesson 9: Asking Questions",
    "hausaTitle": "Darasi na 9: Yin Tambayoyi",
    "explanation": "Learn how to ask everyday questions.",
    "hausaExplanation": "Koyi yadda ake yin tambayoyi na yau da kullum.",
    "examples": [
      [
        "What is your name?",
        "Menene sunanka?"
      ],
      [
        "Where do you live?",
        "Ina kake zaune?"
      ],
      [
        "What do you do?",
        "Me kake yi?"
      ],
      [
        "Can you help me?",
        "Za ka iya taimaka mini?"
      ]
    ],
    "question": "What does Where do you live mean?",
    "options": [
      "Menene sunanka?",
      "Ina kake zaune?",
      "Me kake yi?"
    ],
    "answer": "Ina kake zaune?"
  },
  {
    "title": "Lesson 10: Everyday Conversations",
    "hausaTitle": "Darasi na 10: Tattaunawar Yau da Kullum",
    "explanation": "Learn useful everyday English sentences.",
    "hausaExplanation": "Koyi jimlolin Turanci na yau da kullum.",
    "examples": [
      [
        "I am coming.",
        "Ina zuwa."
      ],
      [
        "Wait a moment.",
        "Jira na ɗan lokaci."
      ],
      [
        "I am busy right now.",
        "Ina cikin aiki yanzu."
      ],
      [
        "See you tomorrow.",
        "Sai gobe."
      ]
    ],
    "question": "What does See you tomorrow mean?",
    "options": [
      "Sai gobe.",
      "Sai jiya.",
      "Ina zuwa."
    ],
    "answer": "Sai gobe."
  },
  {
    "title": "Lesson 11: Talking About Yourself",
    "hausaTitle": "Darasi na 11: Magana Game da Kai",
    "explanation": "Learn simple sentences to describe yourself.",
    "hausaExplanation": "Koyi jimloli masu sauƙi da za ka yi amfani da su wajen bayyana kanka.",
    "examples": [
      [
        "I am a student.",
        "Ni ɗalibi ne."
      ],
      [
        "I am learning English.",
        "Ina koyon Turanci."
      ],
      [
        "I like reading.",
        "Ina son karatu."
      ],
      [
        "I want to improve.",
        "Ina son in inganta kaina."
      ]
    ],
    "question": "What does 'I am a student' mean?",
    "options": [
      "Ni malami ne.",
      "Ni ɗalibi ne.",
      "Ina gida."
    ],
    "answer": "Ni ɗalibi ne."
  },
  {
    "title": "Lesson 12: At School",
    "hausaTitle": "Darasi na 12: A Makaranta",
    "explanation": "Learn useful English sentences for school.",
    "hausaExplanation": "Koyi jimlolin Turanci masu amfani a makaranta.",
    "examples": [
      [
        "Where is my classroom?",
        "Ina ajina?"
      ],
      [
        "I have a question.",
        "Ina da tambaya."
      ],
      [
        "Please explain again.",
        "Don Allah, ka sake bayani."
      ],
      [
        "I understand now.",
        "Yanzu na gane."
      ]
    ],
    "question": "How do you say 'I have a question'?",
    "options": [
      "Ina da tambaya.",
      "Na tafi gida.",
      "Ina jin yunwa."
    ],
    "answer": "Ina da tambaya."
  },
  {
    "title": "Lesson 13: At Work",
    "hausaTitle": "Darasi na 13: A Wurin Aiki",
    "explanation": "Learn English phrases for your workplace.",
    "hausaExplanation": "Koyi jimlolin Turanci da za ka yi amfani da su a wurin aiki.",
    "examples": [
      [
        "I am ready to work.",
        "Na shirya yin aiki."
      ],
      [
        "What time do we start?",
        "Wane lokaci za mu fara?"
      ],
      [
        "I need help.",
        "Ina buƙatar taimako."
      ],
      [
        "I have finished the task.",
        "Na gama aikin."
      ]
    ],
    "question": "What does 'I need help' mean?",
    "options": [
      "Ina buƙatar taimako.",
      "Na gama cin abinci.",
      "Ina zuwa kasuwa."
    ],
    "answer": "Ina buƙatar taimako."
  },
  {
    "title": "Lesson 14: Food and Drinks",
    "hausaTitle": "Darasi na 14: Abinci da Abin Sha",
    "explanation": "Learn how to talk about food and drinks.",
    "hausaExplanation": "Koyi yadda za ka yi magana game da abinci da abin sha.",
    "examples": [
      [
        "I am hungry.",
        "Ina jin yunwa."
      ],
      [
        "I am thirsty.",
        "Ina jin ƙishirwa."
      ],
      [
        "I would like some water.",
        "Ina son ruwa, don Allah."
      ],
      [
        "The food is delicious.",
        "Abincin yana da daɗi."
      ]
    ],
    "question": "What does 'I am thirsty' mean?",
    "options": [
      "Ina jin barci.",
      "Ina jin ƙishirwa.",
      "Ina jin sanyi."
    ],
    "answer": "Ina jin ƙishirwa."
  },
  {
    "title": "Lesson 15: Directions",
    "hausaTitle": "Darasi na 15: Hanyar Zuwa Wuri",
    "explanation": "Learn simple directions in English.",
    "hausaExplanation": "Koyi yadda ake bayyana hanya cikin Turanci.",
    "examples": [
      [
        "Where is the market?",
        "Ina kasuwa?"
      ],
      [
        "Go straight ahead.",
        "Ka ci gaba kai tsaye."
      ],
      [
        "Turn left.",
        "Juya hagu."
      ],
      [
        "Turn right.",
        "Juya dama."
      ]
    ],
    "question": "What does 'Turn left' mean?",
    "options": [
      "Juya dama.",
      "Tsaya a nan.",
      "Juya hagu."
    ],
    "answer": "Juya hagu."
  },
  {
    "title": "Lesson 16: Health",
    "hausaTitle": "Darasi na 16: Lafiya",
    "explanation": "Learn useful phrases for talking about your health.",
    "hausaExplanation": "Koyi jimlolin Turanci da za ka yi amfani da su wajen magana game da lafiya.",
    "examples": [
      [
        "I do not feel well.",
        "Ba na jin daɗi."
      ],
      [
        "I have a headache.",
        "Ina ciwon kai."
      ],
      [
        "I need to see a doctor.",
        "Ina buƙatar ganin likita."
      ],
      [
        "Please help me.",
        "Don Allah, ka taimake ni."
      ]
    ],
    "question": "What does 'I have a headache' mean?",
    "options": [
      "Ina ciwon ciki.",
      "Ina ciwon kai.",
      "Ina jin yunwa."
    ],
    "answer": "Ina ciwon kai."
  },
  {
    "title": "Lesson 17: Phone and Messages",
    "hausaTitle": "Darasi na 17: Waya da Saƙonni",
    "explanation": "Learn English phrases for phone calls and messages.",
    "hausaExplanation": "Koyi jimlolin Turanci na kira da saƙonnin waya.",
    "examples": [
      [
        "Please call me.",
        "Don Allah, ka kira ni."
      ],
      [
        "Send me a message.",
        "Ka turo mini saƙo."
      ],
      [
        "My phone battery is low.",
        "Batirin wayata ya kusa ƙarewa."
      ],
      [
        "I will call you later.",
        "Zan kira ka daga baya."
      ]
    ],
    "question": "How do you say 'Please call me'?",
    "options": [
      "Don Allah, ka kira ni.",
      "Ka jira ni.",
      "Ka turo mini kuɗi."
    ],
    "answer": "Don Allah, ka kira ni."
  },
  {
    "title": "Lesson 18: Money and Shopping",
    "hausaTitle": "Darasi na 18: Kuɗi da Siyayya",
    "explanation": "Learn English for buying and selling.",
    "hausaExplanation": "Koyi Turancin da ake amfani da shi wajen saye da sayarwa.",
    "examples": [
      [
        "How much does it cost?",
        "Nawa ne farashinsa?"
      ],
      [
        "It is too expensive.",
        "Ya yi tsada sosai."
      ],
      [
        "Do you accept bank transfers?",
        "Kuna karɓar kuɗin transfer?"
      ],
      [
        "Here is the money.",
        "Ga kuɗin."
      ]
    ],
    "question": "What does 'It is too expensive' mean?",
    "options": [
      "Ya yi arha sosai.",
      "Ya yi tsada sosai.",
      "Ba ni da lokaci."
    ],
    "answer": "Ya yi tsada sosai."
  },
  {
    "title": "Lesson 19: Making Plans",
    "hausaTitle": "Darasi na 19: Shirya Haɗuwa",
    "explanation": "Learn how to make simple plans with other people.",
    "hausaExplanation": "Koyi yadda za ka tsara haɗuwa da wasu mutane cikin Turanci.",
    "examples": [
      [
        "Are you free today?",
        "Kana da lokaci yau?"
      ],
      [
        "Let us meet tomorrow.",
        "Mu haɗu gobe."
      ],
      [
        "What time should I come?",
        "Wane lokaci zan zo?"
      ],
      [
        "I will be there on time.",
        "Zan zo a kan lokaci."
      ]
    ],
    "question": "What does 'Let us meet tomorrow' mean?",
    "options": [
      "Mu haɗu jiya.",
      "Mu haɗu gobe.",
      "Mu tafi yanzu."
    ],
    "answer": "Mu haɗu gobe."
  },
  {
    "title": "Lesson 20: Polite English",
    "hausaTitle": "Darasi na 20: Turanci na Ladabi",
    "explanation": "Learn polite expressions for everyday conversations.",
    "hausaExplanation": "Koyi kalmomin ladabi da za ka yi amfani da su a hirar yau da kullum.",
    "examples": [
      [
        "Excuse me.",
        "Gafara dai."
      ],
      [
        "I am sorry.",
        "Yi haƙuri."
      ],
      [
        "You are welcome.",
        "Babu komai."
      ],
      [
        "Have a nice day.",
        "Ka yini lafiya."
      ]
    ],
    "question": "What does 'I am sorry' mean?",
    "options": [
      "Na gode.",
      "Yi haƙuri.",
      "Sai anjima."
    ],
    "answer": "Yi haƙuri."
  },
  {
    "title": "Lesson 21: English for Business",
    "hausaTitle": "Darasi na 21: Turancin Kasuwanci",
    "explanation": "Learn useful English phrases for serving customers.",
    "hausaExplanation": "Koyi jimlolin Turanci don yi wa kwastomomi hidima.",
    "examples": [
      [
        "How can I help you?",
        "Yaya zan taimake ka?"
      ],
      [
        "What would you like to buy?",
        "Me kake son saya?"
      ],
      [
        "The price is five thousand naira.",
        "Farashin naira dubu biyar ne."
      ],
      [
        "Thank you for your purchase.",
        "Mun gode da sayayyarka."
      ]
    ],
    "question": "What does 'How can I help you?' mean?",
    "options": [
      "Yaya zan taimake ka?",
      "Ina za ka je?",
      "Nawa ne kuɗin?"
    ],
    "answer": "Yaya zan taimake ka?"
  },
  {
    "title": "Lesson 22: Customer Service",
    "hausaTitle": "Darasi na 22: Kula da Kwastomomi",
    "explanation": "Learn polite ways to communicate with customers.",
    "hausaExplanation": "Koyi yadda za ka yi magana da kwastomomi cikin ladabi.",
    "examples": [
      [
        "Welcome to our shop.",
        "Barka da zuwa shagonmu."
      ],
      [
        "Please wait a moment.",
        "Don Allah, ka ɗan jira."
      ],
      [
        "Let me check for you.",
        "Bari in duba maka."
      ],
      [
        "Thank you for your patience.",
        "Mun gode da haƙurinka."
      ]
    ],
    "question": "How do you say 'Please wait a moment'?",
    "options": [
      "Ka tafi yanzu.",
      "Don Allah, ka ɗan jira.",
      "Na gama aiki."
    ],
    "answer": "Don Allah, ka ɗan jira."
  },
  {
    "title": "Lesson 23: Job Applications",
    "hausaTitle": "Darasi na 23: Neman Aiki",
    "explanation": "Learn basic English for applying for a job.",
    "hausaExplanation": "Koyi Turanci mai sauƙi don neman aiki.",
    "examples": [
      [
        "I am looking for a job.",
        "Ina neman aiki."
      ],
      [
        "Here is my CV.",
        "Ga takardar bayanan karatuna da aikina."
      ],
      [
        "I have experience in sales.",
        "Ina da ƙwarewa a harkar sayarwa."
      ],
      [
        "I am available for an interview.",
        "Zan iya zuwa hirar neman aiki."
      ]
    ],
    "question": "What does 'I am looking for a job' mean?",
    "options": [
      "Ina neman aiki.",
      "Ina neman abinci.",
      "Ina zuwa makaranta."
    ],
    "answer": "Ina neman aiki."
  },
  {
    "title": "Lesson 24: Job Interviews",
    "hausaTitle": "Darasi na 24: Hirar Neman Aiki",
    "explanation": "Practise common questions asked during job interviews.",
    "hausaExplanation": "Yi atisaye da tambayoyin hirar neman aiki.",
    "examples": [
      [
        "Tell me about yourself.",
        "Ka ba ni labarin kanka."
      ],
      [
        "Why do you want this job?",
        "Me ya sa kake son wannan aikin?"
      ],
      [
        "I am hardworking and honest.",
        "Ina da ƙwazo kuma ina faɗin gaskiya."
      ],
      [
        "When can you start?",
        "Yaushe za ka iya farawa?"
      ]
    ],
    "question": "What does 'Tell me about yourself' mean?",
    "options": [
      "Ka ba ni labarin kanka.",
      "Ka rufe ƙofar.",
      "Ka jira ni."
    ],
    "answer": "Ka ba ni labarin kanka."
  },
  {
    "title": "Lesson 25: Business Phone Calls",
    "hausaTitle": "Darasi na 25: Kiran Wayar Kasuwanci",
    "explanation": "Learn simple English for professional phone calls.",
    "hausaExplanation": "Koyi Turancin kiran waya na kasuwanci.",
    "examples": [
      [
        "Hello, this is Lukuman speaking.",
        "Sannu, Lukuman ne ke magana."
      ],
      [
        "May I speak to the manager?",
        "Zan iya magana da manaja?"
      ],
      [
        "Please call me back.",
        "Don Allah, ka sake kirana."
      ],
      [
        "I will send you the details.",
        "Zan turo maka cikakkun bayanai."
      ]
    ],
    "question": "What does 'Please call me back' mean?",
    "options": [
      "Ka rubuto mini wasiƙa.",
      "Don Allah, ka sake kirana.",
      "Ka zo gobe."
    ],
    "answer": "Don Allah, ka sake kirana."
  },
  {
    "title": "Lesson 26: Using Technology",
    "hausaTitle": "Darasi na 26: Amfani da Fasaha",
    "explanation": "Learn English phrases for phones and computers.",
    "hausaExplanation": "Koyi jimlolin Turanci na amfani da waya da kwamfuta.",
    "examples": [
      [
        "Please open the app.",
        "Don Allah, buɗe manhajar."
      ],
      [
        "I cannot connect to the internet.",
        "Ba zan iya haɗuwa da intanet ba."
      ],
      [
        "Save the file.",
        "Ajiye fayil ɗin."
      ],
      [
        "I forgot my password.",
        "Na manta kalmar sirrina."
      ]
    ],
    "question": "What does 'I forgot my password' mean?",
    "options": [
      "Na manta kalmar sirrina.",
      "Na sayi sabuwar waya.",
      "Na buɗe fayil ɗin."
    ],
    "answer": "Na manta kalmar sirrina."
  },
  {
    "title": "Lesson 27: Email and Online Communication",
    "hausaTitle": "Darasi na 27: Imel da Sadarwar Intanet",
    "explanation": "Learn useful phrases for writing and sending emails.",
    "hausaExplanation": "Koyi jimlolin rubuta da aika imel.",
    "examples": [
      [
        "I have sent you an email.",
        "Na aika maka da imel."
      ],
      [
        "Please check your inbox.",
        "Don Allah, duba akwatin saƙonninka."
      ],
      [
        "I have attached the document.",
        "Na haɗa takardar da saƙon."
      ],
      [
        "I look forward to your reply.",
        "Ina jiran amsarka."
      ]
    ],
    "question": "What does 'I have sent you an email' mean?",
    "options": [
      "Na kira ka.",
      "Na aika maka da imel.",
      "Na turo maka kuɗi."
    ],
    "answer": "Na aika maka da imel."
  },
  {
    "title": "Lesson 28: Meetings and Teamwork",
    "hausaTitle": "Darasi na 28: Taro da Aiki Tare",
    "explanation": "Learn English phrases for meetings and teamwork.",
    "hausaExplanation": "Koyi jimlolin Turanci na taro da aiki tare.",
    "examples": [
      [
        "Let us start the meeting.",
        "Mu fara taron."
      ],
      [
        "I agree with you.",
        "Na yarda da kai."
      ],
      [
        "Can you explain your idea?",
        "Za ka iya bayyana ra'ayinka?"
      ],
      [
        "We need to work together.",
        "Muna buƙatar yin aiki tare."
      ]
    ],
    "question": "What does 'I agree with you' mean?",
    "options": [
      "Ban san ka ba.",
      "Na yarda da kai.",
      "Ina jiran ka."
    ],
    "answer": "Na yarda da kai."
  },
  {
    "title": "Lesson 29: Solving Problems",
    "hausaTitle": "Darasi na 29: Magance Matsaloli",
    "explanation": "Learn how to explain a problem and ask for help.",
    "hausaExplanation": "Koyi yadda za ka bayyana matsala da neman taimako.",
    "examples": [
      [
        "There is a problem.",
        "Akwai matsala."
      ],
      [
        "Can you help me solve it?",
        "Za ka iya taimaka mini in magance ta?"
      ],
      [
        "Let us try another way.",
        "Mu gwada wata hanya."
      ],
      [
        "The problem is solved.",
        "An magance matsalar."
      ]
    ],
    "question": "What does 'There is a problem' mean?",
    "options": [
      "Akwai matsala.",
      "Babu matsala.",
      "An gama cin abinci."
    ],
    "answer": "Akwai matsala."
  },
  {
    "title": "Lesson 30: Building Confidence",
    "hausaTitle": "Darasi na 30: Ƙarfafa Gwiwa",
    "explanation": "Practise useful sentences to build confidence in English.",
    "hausaExplanation": "Yi atisaye da jimloli masu amfani domin ƙara ƙarfin gwiwa a Turanci.",
    "examples": [
      [
        "I am improving every day.",
        "Ina ƙara inganta kaina kowace rana."
      ],
      [
        "I am not afraid to learn.",
        "Ba na tsoron koyon sabbin abubuwa."
      ],
      [
        "Could you please repeat that?",
        "Don Allah, za ka iya maimaita abin da ka faɗa?"
      ],
      [
        "Practice makes progress.",
        "Atisaye yana taimaka wa mutum ya ci gaba."
      ]
    ],
    "question": "How do you say 'I am improving every day'?",
    "options": [
      "Na daina koyo.",
      "Ina ƙara inganta kaina kowace rana.",
      "Ina barci kullum."
    ],
    "answer": "Ina ƙara inganta kaina kowace rana."
  },
  {
    "title": "English for Daily Conversations",
    "hausaTitle": "Turanci don Tattaunawar Kullum",
    "explanation": "Use simple expressions to keep a conversation going.",
    "hausaExplanation": "Ka yi amfani da jimloli masu sauƙi don ci gaba da hira.",
    "examples": [
      "What are you doing?",
      "Me kake yi?",
      "I am reading a book.",
      "Ina karanta littafi."
    ],
    "question": "What does 'I am reading a book' mean?",
    "options": [
      "Ina cin abinci.",
      "Ina karanta littafi.",
      "Ina tafiya."
    ],
    "answer": "Ina karanta littafi."
  },
  {
    "title": "Talking About Your Hometown",
    "hausaTitle": "Magana Game da Garinku",
    "explanation": "Describe where you come from using simple English.",
    "hausaExplanation": "Ka bayyana garinku da Turanci mai sauƙi.",
    "examples": [
      "I come from Kano.",
      "Na fito daga Kano.",
      "My hometown is beautiful.",
      "Garina yana da kyau."
    ],
    "question": "What does 'I come from Kano' mean?",
    "options": [
      "Ina zaune a Legas.",
      "Na fito daga Kano.",
      "Zan tafi Kano."
    ],
    "answer": "Na fito daga Kano."
  },
  {
    "title": "Describing Your Daily Routine",
    "hausaTitle": "Bayyana Ayyukan Yau da Kullum",
    "explanation": "Talk about activities you do every day.",
    "hausaExplanation": "Ka yi magana game da abubuwan da kake yi kullum.",
    "examples": [
      "I open my shop at nine.",
      "Ina buɗe shaguna da ƙarfe tara.",
      "I close my shop in the evening.",
      "Ina rufe shaguna da yamma."
    ],
    "question": "What does 'I open my shop at nine' mean?",
    "options": [
      "Ina buɗe shagona da ƙarfe tara.",
      "Ina barci da tara.",
      "Ina zuwa makaranta."
    ],
    "answer": "Ina buɗe shagona da ƙarfe tara."
  },
  {
    "title": "Talking About Skills",
    "hausaTitle": "Magana Game da Ƙwarewa",
    "explanation": "Use can and cannot to talk about abilities.",
    "hausaExplanation": "Yi amfani da can da cannot don bayyana abin da za ka iya ko ba za ka iya ba.",
    "examples": [
      "I can use a computer.",
      "Zan iya amfani da kwamfuta.",
      "I cannot drive a car.",
      "Ba zan iya tuƙa mota ba."
    ],
    "question": "What does 'I can use a computer' mean?",
    "options": [
      "Zan iya amfani da kwamfuta.",
      "Ba ni da kwamfuta.",
      "Ina sayar da mota."
    ],
    "answer": "Zan iya amfani da kwamfuta."
  },
  {
    "title": "Making Requests Politely",
    "hausaTitle": "Neman Abu Cikin Ladabi",
    "explanation": "Use polite expressions when asking for help.",
    "hausaExplanation": "Yi amfani da kalmomin ladabi idan kana neman taimako.",
    "examples": [
      "Could you help me, please?",
      "Za ka iya taimaka mini, don Allah?",
      "Please show me the way.",
      "Don Allah, nuna mini hanya."
    ],
    "question": "Which sentence politely asks for help?",
    "options": [
      "Go away.",
      "Could you help me, please?",
      "I don't care."
    ],
    "answer": "Could you help me, please?"
  },
  {
    "title": "Talking About the Weather",
    "hausaTitle": "Magana Game da Yanayi",
    "explanation": "Describe common weather conditions.",
    "hausaExplanation": "Ka bayyana yanayi daban-daban.",
    "examples": [
      "It is raining today.",
      "Ana ruwan sama yau.",
      "The weather is hot.",
      "Yanayin yana da zafi."
    ],
    "question": "What does 'It is raining today' mean?",
    "options": [
      "Ana ruwan sama yau.",
      "Akwai iska kawai.",
      "Yau akwai sanyi."
    ],
    "answer": "Ana ruwan sama yau."
  },
  {
    "title": "Talking About Future Plans",
    "hausaTitle": "Magana Game da Shirye-shiryen Gaba",
    "explanation": "Use 'I will' to talk about future actions.",
    "hausaExplanation": "Yi amfani da 'I will' don magana game da abin da za ka yi nan gaba.",
    "examples": [
      "I will study tonight.",
      "Zan yi karatu yau da dare.",
      "I will visit my friend tomorrow.",
      "Zan ziyarci abokina gobe."
    ],
    "question": "What does 'I will study tonight' mean?",
    "options": [
      "Na yi karatu jiya.",
      "Zan yi karatu yau da dare.",
      "Ina cin abinci."
    ],
    "answer": "Zan yi karatu yau da dare."
  },
  {
    "title": "Talking About Past Activities",
    "hausaTitle": "Magana Game da Abubuwan da Suka Wuce",
    "explanation": "Use past-tense verbs to describe completed actions.",
    "hausaExplanation": "Yi amfani da kalmomin lokacin baya wajen bayyana abin da ka riga ka yi.",
    "examples": [
      "I visited my friend yesterday.",
      "Na ziyarci abokina jiya.",
      "I worked in my shop.",
      "Na yi aiki a shaguna."
    ],
    "question": "What does 'yesterday' mean?",
    "options": [
      "Gobe",
      "Yau",
      "Jiya"
    ],
    "answer": "Jiya"
  },
  {
    "title": "Giving Directions",
    "hausaTitle": "Bayar da Umarnin Hanya",
    "explanation": "Use simple phrases to guide someone to a place.",
    "hausaExplanation": "Yi amfani da jimloli masu sauƙi wajen nuna wa mutum hanya.",
    "examples": [
      "Turn left at the junction.",
      "Juya hagu a mahadar hanya.",
      "Go straight ahead.",
      "Ci gaba kai tsaye."
    ],
    "question": "What does 'Go straight ahead' mean?",
    "options": [
      "Juya baya.",
      "Ci gaba kai tsaye.",
      "Tsaya nan."
    ],
    "answer": "Ci gaba kai tsaye."
  },
  {
    "title": "Talking About Goals",
    "hausaTitle": "Magana Game da Manufofi",
    "explanation": "Describe your goals and what you want to achieve.",
    "hausaExplanation": "Ka bayyana manufofinka da abin da kake son cimmawa.",
    "examples": [
      "I want to improve my English.",
      "Ina son inganta Turancina.",
      "I practise every day.",
      "Ina yin atisaye kullum."
    ],
    "question": "What does 'I want to improve my English' mean?",
    "options": [
      "Ina son inganta Turancina.",
      "Na manta Turanci.",
      "Ba na son karatu."
    ],
    "answer": "Ina son inganta Turancina."
  }
]

function App() {
  const [page, setPage] = useState('home')
  const [lessonIndex, setLessonIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [checked, setChecked] = useState(false)
  const [completed, setCompleted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lukuman-learning-completed') || '[]')
    } catch {
      return []
    }
  })

  const lesson = lessons[lessonIndex]

  useEffect(() => {
    try {
      localStorage.setItem('lukuman-learning-completed', JSON.stringify(completed))
    } catch {}
  }, [completed])

  function openLesson(index = 0) {
    setLessonIndex(index)
    setSelected('')
    setChecked(false)
    setPage('lesson')
  }

  function checkAnswer() {
    if (!selected) return
    setChecked(true)
    if (selected === lesson.answer && !completed.includes(lessonIndex)) {
      setCompleted([...completed, lessonIndex])
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Lukuman Learning</h1>
        <p>Learn today. Build tomorrow.</p>
      </header>

      {page === 'home' ? (
        <>
          <section className="hero">
            <h2>WELCOME TO LUKUMAN LEARNING</h2>
            <h3>Koyi sabon abu. Gina makomarka.</h3>
            <p>Welcome! Learn English, technology, and useful skills at your own pace.</p>
            <button className="course-button" onClick={() => openLesson(0)}>
              Fara Koyo / Start Learning
            </button>
          </section>

          <main className="courses">
            <h2>Darussanmu / Our Courses</h2>

            <article className="course-card">
              <span className="badge">FREE</span>
              <h3>English for Beginners</h3>
              <p>Koyi Turanci daga tushe tare da sauƙaƙan darussa.</p>
              <p>Learn English step by step with Hausa support.</p>
              <button className="course-button" onClick={() => openLesson(0)}>
                Start Free Course
              </button>
            </article>

                      <article className="course-card">
            <span className="badge">AVAILABLE</span>
            <h3>AI for Beginners</h3>
            <p>Koyi yadda ake amfani da AI wajen aiki da karatu.</p>
            <a className="course-button" href="https://lukumanmuhammadfagge-gif.github.io/ai-videos/index.html" target="_blank" rel="noreferrer">
              Buɗe Littafi / Open Book
            </a>
          </article>

            <article className="course-card">
              <span className="badge soon">COMING SOON</span>
              <h3>Career Development</h3>
              <p>Inganta ƙwarewarka domin samun damar aiki.</p>
              <p>Build skills for your career and future.</p>
              <button className="course-button" disabled>Coming Soon</button>
            </article>
          </main>
        </>
      ) : (
        <main className="lesson-page">
          <button className="course-button" onClick={() => setPage('home')}>
            ← Back to Home / Komawa
          </button>

          <h2>English for Beginners</h2>
          <p>Lesson {lessonIndex + 1} of {lessons.length}</p>
            <p>Progress / Ci gaba: {completed.length} / {lessons.length} lessons completed</p>
          <progress value={lessonIndex + 1} max={lessons.length} />

          <section className="course-card">
            <h2>{lesson.title}</h2>
            <h3>{lesson.hausaTitle}</h3>
            <p>{lesson.explanation}</p>
            <p>{lesson.hausaExplanation}</p>

            <h3>Examples / Misalai</h3>
            {lesson.examples.map(([english, hausa]) => (
              <div className="example" key={english}>
                <p><strong>{english}</strong></p>
                <button
                  type="button"
                  className="course-button"
                  onClick={() => {
                    if ("speechSynthesis" in window) {
                      window.speechSynthesis.cancel();
                      const voice = new SpeechSynthesisUtterance(english);
                      voice.lang = "en-US";
                      window.speechSynthesis.speak(voice);
                    } else {
                      alert("Text-to-speech is not supported by this browser.");
                    }
                  }}
                >
                  🔊 Listen / Saurara
                </button>
                <p>{hausa}</p>
              </div>
            ))}

            <h3>Test Yourself / Gwada Kanka</h3>
            <p>{lesson.question}</p>

            {lesson.options.map((option) => (
              <label className="quiz-option" key={option}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selected === option}
                  onChange={() => {
                    setSelected(option)
                    setChecked(false)
                  }}
                />
                {option}
              </label>
            ))}

            <button
              className="course-button"
              onClick={checkAnswer}
              disabled={!selected}
            >
              Check Answer / Duba Amsa
            </button>

            {checked && (
              <p role="status">
                {selected === lesson.answer
                  ? 'Correct! Daidai ne! Allah ya ƙara ilimi!'
                  : `Not quite. Ba daidai ba. Amsa ita ce: ${lesson.answer}`}
              </p>
            )}

            {completed.includes(lessonIndex) && (
              <p>✅ An kammala wannan gwajin!</p>
            )}

            {lessonIndex < lessons.length - 1 ? (
              <button
                className="course-button"
                onClick={() => openLesson(lessonIndex + 1)}
              >
                Next Lesson / Darasi na Gaba →
              </button>
            ) : (
              <button className="course-button" onClick={() => setPage('home')}>
                Finish / Kammala
              </button>
            )}
          </section>
        </main>
      )}

      <footer className="footer">
        <p>© 2026 Lukuman Muhammad Abubakar Fagge</p>
        <p>Knowledge is the key to a better future.</p>
      </footer>
    </div>
  )
}

export default App
