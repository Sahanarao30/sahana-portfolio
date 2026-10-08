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
      My journey in AI started with Machine Learning and has expanded
      into building applications using Generative AI, RAG, and Agentic AI.
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
            <h3>Building</h3>
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
      <h3>💻 Programming & Data</h3>
      <p>Python, SQL, Pandas, NumPy</p>
    </div>

    <div className="skill-card">
      <h3>🤖 Machine Learning</h3>
      <p>Scikit-learn, Regression, Classification, Model Evaluation</p>
    </div>

    <div className="skill-card">
      <h3>🧠 Deep Learning</h3>
      <p>CNN, RNN, Neural Networks</p>
    </div>

    <div className="skill-card">
      <h3>✨ Generative AI</h3>
      <p>LLMs, RAG, Agentic AI, LangChain, Ollama</p>
    </div>

    <div className="skill-card">
      <h3>🗄️ Databases</h3>
      <p>MySQL, MongoDB</p>
    </div>

    <div className="skill-card">
      <h3>🛠️ Tools & Development</h3>
      <p>Git, GitHub, Jupyter Notebook, VS Code, Google Colab, Streamlit</p>
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
        Deep Learning, Artificial Intelligence, and practical model development 
        through hands-on projects.
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
      solving practical problems and building intelligent systems.
    </p>
  </div>

  <div className="projects-container">

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-number">01</div>

      <h3>Agentic AI System</h3>

      <p>
        Built a local Agentic AI system that can understand user tasks,
        select appropriate tools, execute actions, and combine tool
        results to generate a final response.
      </p>

      <p>
        The system uses Ollama and LangChain to work with a local LLM
        and includes tools for mathematical calculations, text analysis,
        and document-based question answering.
      </p>

      <p>
        Integrated Retrieval-Augmented Generation to retrieve relevant
        information from a Distributed Systems PDF when required,
        allowing the agent to handle multi-step tasks involving both
        calculations and document-based questions.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>LangChain</span>
        <span>Ollama</span>
        <span>LLMs</span>
        <span>AI Agents</span>
        <span>RAG</span>
      </div>

      <a
        href="https://github.com/Sahanarao30/agentic-ai-system"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Project →</button>
      </a>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <div className="project-number">02</div>

      <h3>RAG Question Answering System</h3>

      <p>
        Built a Retrieval-Augmented Generation system that allows users
        to ask questions about information contained in PDF documents.
      </p>

      <p>
        The system processes the document into smaller overlapping
        chunks, generates vector embeddings using a sentence-transformer
        model, and performs similarity search to retrieve relevant
        context.
      </p>

      <p>
        The retrieved information is then provided to a local language
        model to generate context-aware answers based on the document
        content.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>RAG</span>
        <span>Embeddings</span>
        <span>Vector Search</span>
        <span>LLM</span>
        <span>Sentence Transformers</span>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <div className="project-number">03</div>

      <h3>Sales Effectiveness Prediction</h3>

      <p>
        Developed a machine learning classification system to identify
        high-potential and low-potential leads, helping prioritize
        promising leads for sales follow-up.
      </p>

      <p>
        The project involved data preprocessing, exploratory data
        analysis, feature engineering, categorical encoding, and
        evaluation of multiple classification algorithms.
      </p>

      <p>
        Logistic Regression, Decision Tree, Random Forest, and SVM
        models were compared to identify an effective classification
        approach.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>Scikit-learn</span>
        <span>Logistic Regression</span>
        <span>Random Forest</span>
        <span>SVM</span>
      </div>
    </div>

  {/* Project 4 */}
    <div className="project-card">
      <div className="project-number">04</div>

      <h3>Cell Phone Price Prediction</h3>

      <p>
        Developed a machine learning classification model to predict
        the price range of mobile phones based on their technical
        specifications.
      </p>

      <p>
        The project involved data preprocessing, exploratory analysis,
        model training, evaluation, and comparison of classification
        approaches to identify the most effective model.
      </p>

      <p>
        Logistic Regression achieved 96.5% test accuracy, with RAM
        identified as one of the most influential features for
        predicting the phone price range.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Classification</span>
        <span>Machine Learning</span>
      </div>
    </div>


    {/* Project 5 */}
    <div className="project-card">
      <div className="project-number">05</div>

      <h3>Heart Disease Prediction</h3>

      <p>
        Developed a machine learning classification model to predict
        the presence of heart disease using patient-related features.
      </p>

      <p>
        The project involved data preprocessing, exploratory analysis,
        model training, cross-validation, and evaluation using
        classification metrics.
      </p>

      <p>
        Logistic Regression achieved 88.9% test accuracy, with the
        evaluation showing strong performance in identifying positive
        cases.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>Scikit-learn</span>
        <span>Logistic Regression</span>
        <span>SVM</span>
        <span>Classification</span>
      </div>
    </div>

  </div>
</section>
           {/* Resume Section */} <section id="resume"> 
            <h2>Resume</h2> 
            <p> 
              Explore my resume to learn more about my education, technical skills, 
              projects, and experience. 
              </p> 
            <a href="/Sahana-Rao-Resume.pdf"
               target="_blank" rel="noopener noreferrer" 
               >
             <button>View Resume</button>
              </a> 
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