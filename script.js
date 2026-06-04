const topics = [
  {
    name: "Core Java",
    sections: {
      Beginner: [
        "Difference between JDK, JRE, and JVM?",
        "What are the main OOP concepts?",
        "Difference between == and equals()?",
        "What is method overloading vs overriding?",
        "Difference between ArrayList and LinkedList?",
        "What is the purpose of hashCode()?",
        "Difference between HashMap and ConcurrentHashMap?",
        "What are Java Collections?",
        "Difference between checked and unchecked exceptions?",
        "What is immutability?"
      ],
      Intermediate: [
        "How does garbage collection work?",
        "Explain Java Memory Model.",
        "Difference between volatile, synchronized, and AtomicInteger.",
        "What is thread safety?",
        "Explain ExecutorService.",
        "How does CompletableFuture work?",
        "Difference between Callable and Runnable?",
        "Explain Stream API.",
        "What are Functional Interfaces?",
        "Explain Optional."
      ],
      Advanced: [
        "How does ConcurrentHashMap work internally?",
        "Explain ClassLoader hierarchy.",
        "What causes memory leaks in Java?",
        "Explain JVM tuning parameters.",
        "What is ForkJoinPool?",
        "Explain Virtual Threads (Project Loom).",
        "Difference between heap dump and thread dump?",
        "Explain lock contention and deadlocks.",
        "How would you design a high-performance caching layer?",
        "How do you troubleshoot high CPU utilization?"
      ]
    }
  },
  {
    name: "Spring Boot & Microservices",
    sections: {
      Beginner: [
        "What is Spring Boot?",
        "What are Spring starters?",
        "Difference between @Component, @Service, and @Repository?",
        "What is Dependency Injection?",
        "Explain Spring Bean lifecycle."
      ],
      Intermediate: [
        "What is Spring Security?",
        "Difference between @RestController and @Controller.",
        "How does Spring Data JPA work?",
        "What are Profiles?",
        "Explain transaction management."
      ],
      Advanced: [
        "Circuit Breaker pattern.",
        "API Gateway vs Load Balancer.",
        "Service Discovery using Eureka.",
        "Distributed tracing implementation.",
        "Event-driven architecture using Kafka.",
        "Saga Pattern.",
        "Idempotency in microservices.",
        "Handling distributed transactions.",
        "Rate limiting implementation.",
        "How would you secure microservices?"
      ]
    }
  },
  {
    name: "PostgreSQL",
    sections: {
      Beginner: [
        "Difference between DELETE, TRUNCATE, and DROP.",
        "What is a primary key?",
        "Difference between clustered and non-clustered indexes?",
        "What are foreign keys?",
        "Explain joins."
      ],
      Intermediate: [
        "What are CTEs?",
        "Explain transactions.",
        "ACID properties.",
        "What is MVCC?",
        "Explain indexing strategies."
      ],
      Advanced: [
        "How does PostgreSQL query planner work?",
        "Explain EXPLAIN ANALYZE.",
        "Partitioning strategies.",
        "Database replication types.",
        "VACUUM vs VACUUM FULL.",
        "Handling deadlocks.",
        "Connection pooling.",
        "PostgreSQL performance tuning.",
        "Optimizing large tables.",
        "Explain WAL (Write Ahead Logging)."
      ]
    }
  },
  {
    name: "React JS",
    sections: {
      Beginner: [
        "What is React?",
        "What is JSX?",
        "Difference between State and Props?",
        "What are React Hooks?",
        "Explain Virtual DOM."
      ],
      Intermediate: [
        "useState vs useReducer.",
        "useEffect lifecycle.",
        "Controlled vs uncontrolled components.",
        "React Context API.",
        "React Router."
      ],
      Advanced: [
        "React rendering lifecycle.",
        "Memoization using React.memo.",
        "useMemo vs useCallback.",
        "Code splitting and lazy loading.",
        "State management using Redux.",
        "SSR vs CSR.",
        "Hydration.",
        "Performance optimization techniques.",
        "Micro Frontends.",
        "React Suspense."
      ]
    }
  },
  {
    name: "AWS",
    sections: {
      Beginner: [
        "What is AWS?",
        "Difference between EC2 and Lambda?",
        "What is S3?",
        "What is IAM?",
        "What is VPC?"
      ],
      Intermediate: [
        "Explain Auto Scaling.",
        "What is an Application Load Balancer?",
        "Difference between RDS and Aurora?",
        "Explain CloudWatch.",
        "What is Route53?"
      ],
      Advanced: [
        "Design a highly available application.",
        "Multi-region deployment strategy.",
        "Blue-Green deployment.",
        "Disaster recovery architecture.",
        "Security best practices.",
        "Cost optimization techniques.",
        "ECS vs EKS.",
        "Event-driven architecture using SQS/SNS.",
        "API Gateway use cases.",
        "Infrastructure as Code using CloudFormation/Terraform."
      ]
    }
  },
  {
    name: "Snowflake",
    sections: {
      Beginner: [
        "What is Snowflake?",
        "Difference between database, schema, and warehouse?",
        "What is a virtual warehouse?",
        "Explain Snowflake architecture.",
        "What are stages?"
      ],
      Intermediate: [
        "Explain Time Travel.",
        "What is Zero Copy Cloning?",
        "Snowpipe.",
        "Streams and Tasks.",
        "Data sharing."
      ],
      Advanced: [
        "How does Snowflake handle scalability?",
        "Query optimization techniques.",
        "Micro-partitions.",
        "Clustering keys.",
        "Materialized views.",
        "Secure Data Sharing.",
        "External Tables.",
        "Dynamic Tables.",
        "Warehouse sizing strategy.",
        "Cost optimization in Snowflake."
      ]
    }
  },
  {
    name: "CI/CD",
    sections: {
      Beginner: [
        "What is CI/CD?",
        "Difference between Continuous Integration and Continuous Deployment?",
        "Why automate deployments?"
      ],
      Intermediate: [
        "Build pipeline stages.",
        "Artifact repositories.",
        "Automated testing strategy.",
        "Blue-Green deployment.",
        "Canary deployment."
      ],
      Advanced: [
        "GitOps.",
        "Rollback strategies.",
        "Feature flags.",
        "Security scanning in pipelines.",
        "Infrastructure as Code integration.",
        "Zero-downtime deployments.",
        "Multi-environment pipelines.",
        "Deployment approvals.",
        "Containerized deployments.",
        "Observability after deployment."
      ]
    }
  },
  {
    name: "GitHub Actions",
    sections: {
      Beginner: [
        "What is GitHub Actions?",
        "What is workflow_dispatch?",
        "Difference between jobs and steps?",
        "What are runners?",
        "What are GitHub Secrets?"
      ],
      Intermediate: [
        "Reusable workflows.",
        "Matrix builds.",
        "Self-hosted runners.",
        "Environment variables.",
        "Artifacts handling."
      ],
      Advanced: [
        "How would you deploy a Java application using GitHub Actions?",
        "Secure secret management.",
        "Multi-environment deployments.",
        "Deploying to AWS from GitHub Actions.",
        "Caching dependencies.",
        "Conditional workflows.",
        "Docker build and push workflows.",
        "Rollback automation.",
        "Approval gates.",
        "Performance optimization of workflows."
      ]
    }
  },
  {
    name: "Keycloak",
    sections: {
      Beginner: [
        "What is Keycloak?",
        "Difference between Authentication and Authorization?",
        "What is SSO?",
        "What are Realms?",
        "What are Clients?"
      ],
      Intermediate: [
        "OAuth2 flow.",
        "OpenID Connect.",
        "Access Token vs Refresh Token.",
        "Client Credentials Flow.",
        "User Federation."
      ],
      Advanced: [
        "Keycloak architecture.",
        "JWT token validation.",
        "Custom authentication flows.",
        "Identity Brokering.",
        "LDAP integration.",
        "Keycloak clustering.",
        "SSL configuration in Keycloak.",
        "Token exchange.",
        "Role-based access control design.",
        "Securing microservices with Keycloak."
      ]
    }
  },
  {
    name: "System Design",
    sections: {
      Advanced: [
        "Design a scalable e-commerce platform.",
        "Design a URL shortener.",
        "Design an online banking application.",
        "Design a notification service.",
        "Design a distributed file upload system.",
        "Design an authentication platform using Keycloak.",
        "Design a data warehouse solution using Snowflake.",
        "Design a microservices platform on AWS.",
        "Design a CI/CD pipeline for 100+ microservices.",
        "Design a real-time stock trading application."
      ]
    }
  },
  {
    name: "Scenarios",
    sections: {
      Advanced: [
        "Production application is slow. How would you troubleshoot?",
        "PostgreSQL CPU is 100%. What would you check?",
        "Snowflake cost suddenly doubled. How would you investigate?",
        "Keycloak login is failing after SSL enablement.",
        "GitHub Actions deployment is failing only in production.",
        "React application has performance issues.",
        "AWS application is unavailable in one region.",
        "Microservice memory keeps increasing.",
        "Database migration failed during deployment.",
        "How would you perform zero-downtime deployment for a Spring Boot application?"
      ]
    }
  }
];

const allQuestions = topics.flatMap((topic) =>
  Object.entries(topic.sections).flatMap(([level, questions]) =>
    questions.map((text, index) => ({
      id: `${topic.name}-${level}-${index}`.replace(/[^a-z0-9]+/gi, "-").toLowerCase(),
      topic: topic.name,
      level,
      text
    }))
  )
);

const state = {
  topic: topics[0].name,
  level: "All",
  query: "",
  flashQuestion: null,
  completed: new Set(JSON.parse(localStorage.getItem("interview-prep-completed") || "[]"))
};

const elements = {
  topicNav: document.querySelector("#topicNav"),
  searchInput: document.querySelector("#searchInput"),
  levelButtons: document.querySelectorAll("[data-level]"),
  questionList: document.querySelector("#questionList"),
  activeTopicTitle: document.querySelector("#activeTopicTitle"),
  activeLevelLabel: document.querySelector("#activeLevelLabel"),
  totalQuestions: document.querySelector("#totalQuestions"),
  visibleQuestions: document.querySelector("#visibleQuestions"),
  completedQuestions: document.querySelector("#completedQuestions"),
  coveragePercent: document.querySelector("#coveragePercent"),
  focusTopic: document.querySelector("#focusTopic"),
  focusMeta: document.querySelector("#focusMeta"),
  randomQuestion: document.querySelector("#randomQuestion"),
  nextFlash: document.querySelector("#nextFlash"),
  markFlashDone: document.querySelector("#markFlashDone"),
  resetProgress: document.querySelector("#resetProgress"),
  flashTopic: document.querySelector("#flashTopic"),
  flashQuestion: document.querySelector("#flashQuestion")
};

function saveProgress() {
  localStorage.setItem("interview-prep-completed", JSON.stringify([...state.completed]));
}

function filteredQuestions() {
  const query = state.query.trim().toLowerCase();

  return allQuestions.filter((question) => {
    const matchesTopic = question.topic === state.topic;
    const matchesLevel = state.level === "All" || question.level === state.level;
    const matchesQuery =
      !query ||
      question.text.toLowerCase().includes(query) ||
      question.topic.toLowerCase().includes(query) ||
      question.level.toLowerCase().includes(query);

    return matchesTopic && matchesLevel && matchesQuery;
  });
}

function topicCount(topicName) {
  return allQuestions.filter((question) => question.topic === topicName).length;
}

function renderTopics() {
  elements.topicNav.innerHTML = topics
    .map(
      (topic) => `
        <button class="topic-button ${topic.name === state.topic ? "active" : ""}" type="button" data-topic="${topic.name}">
          ${topic.name}
          <span>${topicCount(topic.name)}</span>
        </button>
      `
    )
    .join("");

  elements.topicNav.querySelectorAll("[data-topic]").forEach((button) => {
    button.addEventListener("click", () => {
      state.topic = button.dataset.topic;
      state.flashQuestion = null;
      render();
    });
  });
}

function renderQuestions(questions) {
  if (!questions.length) {
    elements.questionList.innerHTML = '<div class="empty-state">No questions match this filter.</div>';
    return;
  }

  elements.questionList.innerHTML = questions
    .map(
      (question) => `
        <label class="question-item ${state.completed.has(question.id) ? "done" : ""}">
          <input type="checkbox" data-question="${question.id}" ${state.completed.has(question.id) ? "checked" : ""} />
          <p class="question-text">${question.text}</p>
          <span class="level-pill ${question.level}">${question.level}</span>
        </label>
      `
    )
    .join("");

  elements.questionList.querySelectorAll("[data-question]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        state.completed.add(checkbox.dataset.question);
      } else {
        state.completed.delete(checkbox.dataset.question);
      }
      saveProgress();
      render();
    });
  });
}

function renderStats(visible) {
  const topicQuestions = allQuestions.filter((question) => question.topic === state.topic);
  const topicCompleted = topicQuestions.filter((question) => state.completed.has(question.id)).length;
  const percent = topicQuestions.length ? Math.round((topicCompleted / topicQuestions.length) * 100) : 0;

  elements.totalQuestions.textContent = allQuestions.length;
  elements.visibleQuestions.textContent = visible.length;
  elements.completedQuestions.textContent = state.completed.size;
  elements.coveragePercent.textContent = `${percent}%`;
  elements.focusTopic.textContent = state.topic;
  elements.focusMeta.textContent = `${topicCompleted} of ${topicQuestions.length} questions completed`;
}

function renderFlashcard(questions) {
  const fallback = questions[0] || allQuestions.find((question) => question.topic === state.topic) || allQuestions[0];
  const current = state.flashQuestion || fallback;

  state.flashQuestion = current;
  elements.flashTopic.textContent = current.topic;
  elements.flashQuestion.textContent = current.text;
  elements.markFlashDone.disabled = state.completed.has(current.id);
  elements.markFlashDone.textContent = state.completed.has(current.id) ? "Completed" : "Mark done";
}

function render() {
  renderTopics();
  const questions = filteredQuestions();

  elements.activeTopicTitle.textContent = state.topic;
  elements.activeLevelLabel.textContent = state.level === "All" ? "All levels" : state.level;
  renderQuestions(questions);
  renderStats(questions);
  renderFlashcard(questions);
}

function pickRandomQuestion() {
  const questions = filteredQuestions();
  const pool = questions.length ? questions : allQuestions.filter((question) => question.topic === state.topic);
  state.flashQuestion = pool[Math.floor(Math.random() * pool.length)];
  render();
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  state.flashQuestion = null;
  render();
});

elements.levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    elements.levelButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.level = button.dataset.level;
    state.flashQuestion = null;
    render();
  });
});

elements.randomQuestion.addEventListener("click", pickRandomQuestion);
elements.nextFlash.addEventListener("click", pickRandomQuestion);

elements.markFlashDone.addEventListener("click", () => {
  if (!state.flashQuestion) return;
  state.completed.add(state.flashQuestion.id);
  saveProgress();
  pickRandomQuestion();
});

elements.resetProgress.addEventListener("click", () => {
  state.completed.clear();
  saveProgress();
  render();
});

render();
