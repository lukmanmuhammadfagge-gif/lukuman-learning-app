import './App.css'

function App() {
return (
<div className="app">
<header className="header">
<div className="brand">Lukuman Learning</div>
<span className="tagline">Learn today. Build tomorrow.</span>
</header>

  <main>
    <section className="hero">
      <p className="eyebrow">WELCOME TO LUKUMAN LEARNING</p>
      <h1>Koyi sabon abu. Gina makomarka.</h1>
      <p className="intro">
        Welcome! Learn English, technology, and useful skills at your own pace.
      </p>
      <a className="button" href="#courses">Fara Koyo / Start Learning</a>
    </section>

    <section className="courses" id="courses">
      <h2>Darussanmu / Our Courses</h2>
      <div className="course-grid">
        <article className="course-card">
          <span className="badge free">FREE</span>
          <h3>English for Beginners</h3>
          <p>Koyi Turanci daga tushe tare da sauƙaƙan darussa.</p>
          <p>Learn English step by step with Hausa support.</p>
          <button type="button" className="course-button">Start Free Course</button>
        </article>

        <article className="course-card">
          <span className="badge soon">COMING SOON</span>
          <h3>AI for Beginners</h3>
          <p>Koyi yadda ake amfani da AI wajen aiki da karatu.</p>
          <p>Learn practical AI skills for everyday life.</p>
          <button type="button" className="course-button" disabled>Coming Soon</button>
        </article>

        <article className="course-card">
          <span className="badge soon">COMING SOON</span>
          <h3>Career Development</h3>
          <p>Inganta ƙwarewarka domin samun damar aiki.</p>
          <p>Build skills for your career and future.</p>
          <button type="button" className="course-button" disabled>Coming Soon</button>
        </article>
      </div>
    </section>
  </main>

  <footer className="footer">
    <p>© 2026 Lukuman Muhammad Abubakar Fagge</p>
    <p>Knowledge is the key to a better future.</p>
  </footer>
</div>

)
}

export default App
