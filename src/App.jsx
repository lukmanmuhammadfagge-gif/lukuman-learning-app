import { useState } from 'react'
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
  }
]

function App() {
  const [page, setPage] = useState('home')
  const [lessonIndex, setLessonIndex] = useState(0)
  const [selected, setSelected] = useState('')
  const [checked, setChecked] = useState(false)
  const [completed, setCompleted] = useState([])

  const lesson = lessons[lessonIndex]

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
              <span className="badge soon">COMING SOON</span>
              <h3>AI for Beginners</h3>
              <p>Koyi yadda ake amfani da AI wajen aiki da karatu.</p>
              <p>Learn practical AI skills for everyday life.</p>
              <button className="course-button" disabled>Coming Soon</button>
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
