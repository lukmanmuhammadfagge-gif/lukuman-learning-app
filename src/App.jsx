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
