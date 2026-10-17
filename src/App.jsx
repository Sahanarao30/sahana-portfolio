import './App.css'

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
  <a href="#projects">
    <button>View My Projects</button>
  </a>

  <a
    href="https://github.com/Sahanarao30"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="secondary-button">GitHub</button>
  </a>
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
        I'm an Information Science Engineering graduate
        focused on building practical AI and Machine Learning
        solutions to solve real-world problems.
      </p>

      <p>
        I have hands-on experience developing machine learning
        projects, along with a growing focus on Generative AI,
        Retrieval-Augmented Generation (RAG), and Agentic AI.
        Through my projects, I explore how intelligent systems
        can process information, answer questions, and use tools
        to perform tasks.
      </p>

      <p>
        I'm continuously strengthening my skills in Python,
        data analysis, machine learning, and LLM-based
        applications while building projects that demonstrate
        my technical knowledge and problem-solving abilities.
      </p>

      <div className="about-highlights">

        <div className="highlight-card">
          <span>🎓</span>
          <div>
            <h3>Education</h3>
            <p>Information Science Engineering</p>
          </div>
        </div>

        <div className="highlight-card">
          <span>🤖</span>
          <div>
            <h3>Core Interests</h3>
            <p>Machine Learning · GenAI · RAG</p>
          </div>
        </div>

        <div className="highlight-card">
       <span>🧠</span>
       <div>
      <h3>AI & Innovation</h3>
      <p>Machine Learning · Generative AI · Intelligent Systems</p>
    </div>
  </div>
  </div>
    
  </div>

  </div>
</section>


{/* Skills Section */}
<section id="skills">
  <div className="skills-heading">
    <p className="section-label">MY EXPERTISE</p>
    <h2>Technical Skills</h2>
    <p>
      Technologies and tools I have learned and applied
      through my AI and Machine Learning projects.
    </p>
  </div>

  <div className="skills-container">

    <div className="skill-card">
      <h3>💻 Programming & Data</h3>
      <div className="tech-stack">
        <span>Python</span>
        <span>SQL</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Statistics</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🤖 Machine Learning</h3>
      <div className="tech-stack">
        <span>Scikit-learn</span>
        <span>Classification</span>
        <span>Regression</span>
        <span>Model Evaluation</span>
        <span>Feature Engineering</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🧠 Generative AI</h3>
      <div className="tech-stack">
        <span>LLMs</span>
        <span>RAG</span>
        <span>Embeddings</span>
        <span>Vector Search</span>
        <span>LangChain</span>
        <span>Ollama</span>
      </div>
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
      <a
href="https://github.com/Sahanarao30/RAG-Project"
target="_blank"
rel="noopener noreferrer"
>
<button>View Project →</button>
</a>

    </div>

        {/* Project 3 */}
        <div className="project-card">
      <div className="project-number">03</div>

      <h3>Insurance Cost Prediction</h3>

      <p>
        Developed a machine learning regression model to estimate
        medical insurance costs based on individual and lifestyle
        characteristics.
      </p>

      <p>
        The project involved data preprocessing, exploratory data
        analysis, feature preparation, model training, and evaluation
        of regression algorithms.
      </p>

      <p>
        The best-performing model achieved an R² score of 0.8812,
        demonstrating its ability to explain a substantial proportion
        of the variation in insurance costs.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Regression</span>
        <span>Machine Learning</span>
        </div>

<a
  href="https://github.com/Sahanarao30/Insurance-Cost-Prediction"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>View Project →</button>
</a>
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
      <a
        href="https://github.com/Sahanarao30/Heart-Disease-Prediction"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Project →</button>
      </a>
    </div>

    {/* Project 6 */}
    <div className="project-card">
      <div className="project-number">06</div>

      <h3>Flight Fare Prediction</h3>

      <p>
        Developed a machine learning regression model to estimate
        flight ticket prices based on factors such as airline,
        source and destination, journey date, and flight duration.
      </p>

      <p>
        The project focuses on data preprocessing, exploratory data
        analysis, feature engineering, and training regression models
        to identify patterns that influence airfare.
      </p>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Feature Engineering</span>
        <span>Regression</span>
      </div>
    </div>
    </div>
  </section>
          
{/* Resume Section */}
<section id="resume">
  <h2>Resume</h2>
  <p>
    Explore my resume to learn more about my education,
    technical skills, projects, and experience.
  </p>

  <a
    href="/Sahana-Rao-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
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

  <p>
    <strong>Phone:</strong>{" "}
    <a href="tel:9113845877">9113845877</a>
  </p>

  <p>
    <strong>Email:</strong>{" "}
    <a href="mailto:sahanakr18@gmail.com">
      sahanakr18@gmail.com
    </a>
  </p>

  <p>
    <strong>GitHub:</strong>{" "}
    <a
      href="https://github.com/Sahanarao30"
      target="_blank"
      rel="noopener noreferrer"
    >
      github.com/Sahanarao30
    </a>
  </p>

  <p>
    <strong>LinkedIn:</strong>{" "}
    <a
      href="https://linkedin.com/in/sahana-rao-2567a3313"
      target="_blank"
      rel="noopener noreferrer"
    >
      linkedin.com/in/sahana-rao-2567a3313
    </a>
  </p>
</section>
    </div>
  )
}

export default App