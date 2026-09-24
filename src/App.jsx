function App() {
  return (
    <div>
            {/* Navigation Bar */}
            <nav>
        <h2>Sahana Rao</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      {/* Home Section */}
      <section id="home">
  <p className="intro">Hello, I'm</p>

  <h1>Sahana Rao </h1>

  <h2>AI Engineer</h2>

  <p className="hero-description">
    I build intelligent solutions using Machine Learning,
    Generative AI, RAG, and Agentic AI.
  </p>

  <div className="hero-buttons">
    <button>View My Projects</button>
    <button className="secondary-button">GitHub</button>
  </div>
</section>

      {/* About Section */}
      <section id="about">
  <div className="about-content">

    <div className="about-heading">
      <p className="section-label">GET TO KNOW ME</p>
      <h2>About Me</h2>
    </div>

    <div className="about-text">
      <p className="about-intro">
        I'm an Information Science Engineering graduate passionate
        about building intelligent systems that solve real-world problems.
      </p>

      <p>
        My journey in AI started with Machine Learning and has grown
        into an interest in Generative AI, RAG, and Agentic AI.
        I enjoy turning ideas into practical projects while continuously
        exploring new technologies.
      </p>

      <div className="about-highlights">

        <div className="highlight-card">
          <span>🎓</span>
          <div>
            <h3>Education</h3>
            <p> Information Science Engineering</p>
          </div>
        </div>

        <div className="highlight-card">
          <span>🤖</span>
          <div>
            <h3>Focus</h3>
            <p>ML · GenAI · RAG · Agentic AI</p>
          </div>
        </div>

        <div className="highlight-card">
          <span>🚀</span>
          <div>
            <h3>Currently Building</h3>
            <p>AI-powered applications & intelligent systems</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
      {/* Skills Section */}
      <section id="skills">
  <h2>Skills</h2>

  <div className="skills-container">

    <div className="skill-card">
      <h3>💻 Programming</h3>
      <p>Python, SQL</p>
    </div>

    <div className="skill-card">
      <h3>🤖 Machine Learning</h3>
      <p>Scikit-learn, Pandas, NumPy</p>
    </div>

    <div className="skill-card">
      <h3>🧠 Artificial Intelligence</h3>
      <p>Generative AI, RAG, Agentic AI</p>
    </div>

    <div className="skill-card">
      <h3>🗄️ Databases</h3>
      <p>MySQL, MongoDB</p>
    </div>

    <div className="skill-card">
      <h3>🛠️ Tools</h3>
      <p>Git, GitHub, Jupyter Notebook, VS Code, Google Colab</p>
    </div>

    <div className="skill-card">
      <h3>📊 Data Visualization</h3>
      <p>Matplotlib, Power BI</p>
    </div>

  </div>
</section>
  {/* Certifications & Learning Section */}

<section id="certifications">
  <div className="certifications-heading">
    <p className="section-label">LEARNING & DEVELOPMENT</p>
    <h2>Certifications & Learning</h2>

    <p>
      Continuous learning through structured AI training and
      hands-on technology workshops.
    </p>
  </div>

  <div className="certifications-container">

    <div className="certification-card">
      <div className="certification-icon">🤖</div>

      <div>
        <h3>AI Engineer Course</h3>

        <p className="organization">
          DataMites
        </p>

        <p>
          Completed an AI Engineer course covering Machine Learning,
          Deep Learning, Artificial Intelligence, and practical
          AI development concepts.
        </p>
      </div>
    </div>

    <div className="certification-card">
      <div className="certification-icon">💻</div>

      <div>
        <h3>MERN Stack Hands-on Workshop</h3>

        <p className="organization">
          Edunet
        </p>

        <p>
          Participated in a hands-on workshop focused on the MERN
          stack and gained practical exposure to modern full-stack
          web development technologies.
        </p>
      </div>
    </div>

  </div>
</section>
      {/* Projects Section */}
      <section id="projects">
  <div className="projects-heading">
    <p className="section-label">MY WORK</p>

    <h2>Projects</h2>

    <p>
      A selection of Machine Learning and AI projects focused on
      solving practical problems and exploring intelligent systems.
    </p>
  </div>

  <div className="projects-container">

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-number">01</div>

      <h3>Sales Effectiveness Prediction</h3>

      <p>
        Developed a machine learning classification system to identify
        high-potential and low-potential leads, helping prioritize
        promising leads for sales follow-up.
      </p>

      <p>
        The project involved data preprocessing, feature engineering,
        categorical encoding, exploratory analysis, and model evaluation.
        Logistic Regression, Decision Tree, Random Forest, and SVM models
        were compared to identify an effective approach.
      </p>

      <p>
        Logistic Regression achieved 73.65% test accuracy with 60.24%
        recall for High Potential leads.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>Scikit-learn</span>
        <span>Logistic Regression</span>
        <span>Random Forest</span>
        <span>SVM</span>
      </div>

      <button>View Project →</button>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <div className="project-number">02</div>

      <h3>Flight Fare Prediction</h3>

      <p>
        Developed a machine learning regression system to predict flight
        fares using historical flight and travel-related information.
      </p>

      <p>
        The project involved data preprocessing, exploratory data analysis,
        feature preparation, model training, and evaluation to understand
        how different flight characteristics influence ticket prices.
      </p>

      <p>
        The model learns patterns from historical data and uses relevant
        flight features to estimate the expected fare.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Matplotlib</span>
        <span>Machine Learning</span>
      </div>

      <button>View Project →</button>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <div className="project-number">03</div>

      <h3>RAG Question Answering System</h3>

      <p>
        Built a Retrieval-Augmented Generation system that allows users
        to ask questions about information contained in documents.
      </p>

      <p>
        The system processes documents into smaller chunks, converts
        them into embeddings, and uses similarity search to retrieve
        the most relevant information for a user's question.
      </p>

      <p>
        The retrieved context is then provided to an LLM to generate
        a context-aware answer based on the available document content.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Embeddings</span>
        <span>Vector Search</span>
        <span>LLM</span>
        <span>RAG</span>
      </div>

      <button>View Project →</button>
    </div>

    {/* Project 4 */}
    <div className="project-card">
      <div className="project-number">04</div>

      <h3>Agentic AI System</h3>

      <p>
        Currently developing an AI agent capable of handling tasks
        that require multiple steps rather than simply generating
        a direct response.
      </p>

      <p>
        The system is designed to understand a user's task, break it
        into smaller steps, determine which tools or actions are needed,
        and retrieve relevant information during the process.
      </p>

      <p>
        The goal is to create an intelligent workflow where the agent
        can reason about the task, use available tools, and generate
        a final response based on the results.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>LLMs</span>
        <span>AI Agents</span>
        <span>Tool Calling</span>
        <span>RAG</span>
      </div>

      <button>View Project →</button>
    </div>

  </div>
</section>
            {/* Resume Section */}
            <section id="resume">
        <h2>Resume</h2>

        <p>
        Explore my resume to learn more about my education, technical skills, projects, and experience.
        </p>

        <button>View Resume</button>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>

        <p>
          I'm open to opportunities in Artificial Intelligence
          and Machine Learning.
        </p>

        <p>Email: your-email@example.com</p>

        <p>GitHub: github.com/yourusername</p>

        <p>LinkedIn: linkedin.com/in/yourusername</p>
      </section>
    </div>
  )
}

export default App