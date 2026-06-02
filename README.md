# Full Stack Developer Interview Questions (Java + AWS + PostgreSQL + React + Snowflake + CI/CD + GitHub Actions + Keycloak)

## 1. Core Java

### Beginner

1. Difference between JDK, JRE, and JVM?
2. What are the main OOP concepts?
3. Difference between `==` and `equals()`?
4. What is method overloading vs overriding?
5. Difference between `ArrayList` and `LinkedList`?
6. What is the purpose of `hashCode()`?
7. Difference between `HashMap` and `ConcurrentHashMap`?
8. What are Java Collections?
9. Difference between checked and unchecked exceptions?
10. What is immutability?

### Intermediate

1. How does garbage collection work?
2. Explain Java Memory Model.
3. Difference between `volatile`, `synchronized`, and `AtomicInteger`.
4. What is thread safety?
5. Explain ExecutorService.
6. How does CompletableFuture work?
7. Difference between Callable and Runnable?
8. Explain Stream API.
9. What are Functional Interfaces?
10. Explain Optional.

### Advanced

1. How does ConcurrentHashMap work internally?
2. Explain ClassLoader hierarchy.
3. What causes memory leaks in Java?
4. Explain JVM tuning parameters.
5. What is ForkJoinPool?
6. Explain Virtual Threads (Project Loom).
7. Difference between heap dump and thread dump?
8. Explain lock contention and deadlocks.
9. How would you design a high-performance caching layer?
10. How do you troubleshoot high CPU utilization?

---

# 2. Spring Boot & Microservices

### Beginner

1. What is Spring Boot?
2. What are Spring starters?
3. Difference between `@Component`, `@Service`, and `@Repository`?
4. What is Dependency Injection?
5. Explain Spring Bean lifecycle.

### Intermediate

1. What is Spring Security?
2. Difference between `@RestController` and `@Controller`.
3. How does Spring Data JPA work?
4. What are Profiles?
5. Explain transaction management.

### Advanced

1. Circuit Breaker pattern.
2. API Gateway vs Load Balancer.
3. Service Discovery using Eureka.
4. Distributed tracing implementation.
5. Event-driven architecture using Kafka.
6. Saga Pattern.
7. Idempotency in microservices.
8. Handling distributed transactions.
9. Rate limiting implementation.
10. How would you secure microservices?

---

# 3. PostgreSQL

### Beginner

1. Difference between DELETE, TRUNCATE, and DROP.
2. What is a primary key?
3. Difference between clustered and non-clustered indexes?
4. What are foreign keys?
5. Explain joins.

### Intermediate

1. What are CTEs?
2. Explain transactions.
3. ACID properties.
4. What is MVCC?
5. Explain indexing strategies.

### Advanced

1. How does PostgreSQL query planner work?
2. Explain EXPLAIN ANALYZE.
3. Partitioning strategies.
4. Database replication types.
5. VACUUM vs VACUUM FULL.
6. Handling deadlocks.
7. Connection pooling.
8. PostgreSQL performance tuning.
9. Optimizing large tables.
10. Explain WAL (Write Ahead Logging).

---

# 4. React JS

### Beginner

1. What is React?
2. What is JSX?
3. Difference between State and Props?
4. What are React Hooks?
5. Explain Virtual DOM.

### Intermediate

1. useState vs useReducer.
2. useEffect lifecycle.
3. Controlled vs uncontrolled components.
4. React Context API.
5. React Router.

### Advanced

1. React rendering lifecycle.
2. Memoization using React.memo.
3. useMemo vs useCallback.
4. Code splitting and lazy loading.
5. State management using Redux.
6. SSR vs CSR.
7. Hydration.
8. Performance optimization techniques.
9. Micro Frontends.
10. React Suspense.

---

# 5. AWS

### Beginner

1. What is AWS?
2. Difference between EC2 and Lambda?
3. What is S3?
4. What is IAM?
5. What is VPC?

### Intermediate

1. Explain Auto Scaling.
2. What is an Application Load Balancer?
3. Difference between RDS and Aurora?
4. Explain CloudWatch.
5. What is Route53?

### Advanced

1. Design a highly available application.
2. Multi-region deployment strategy.
3. Blue-Green deployment.
4. Disaster recovery architecture.
5. Security best practices.
6. Cost optimization techniques.
7. ECS vs EKS.
8. Event-driven architecture using SQS/SNS.
9. API Gateway use cases.
10. Infrastructure as Code using CloudFormation/Terraform.

---

# 6. Snowflake

### Beginner

1. What is Snowflake?
2. Difference between database, schema, and warehouse?
3. What is a virtual warehouse?
4. Explain Snowflake architecture.
5. What are stages?

### Intermediate

1. Explain Time Travel.
2. What is Zero Copy Cloning?
3. Snowpipe.
4. Streams and Tasks.
5. Data sharing.

### Advanced

1. How does Snowflake handle scalability?
2. Query optimization techniques.
3. Micro-partitions.
4. Clustering keys.
5. Materialized views.
6. Secure Data Sharing.
7. External Tables.
8. Dynamic Tables.
9. Warehouse sizing strategy.
10. Cost optimization in Snowflake.

---

# 7. CI/CD

### Beginner

1. What is CI/CD?
2. Difference between Continuous Integration and Continuous Deployment?
3. Why automate deployments?

### Intermediate

1. Build pipeline stages.
2. Artifact repositories.
3. Automated testing strategy.
4. Blue-Green deployment.
5. Canary deployment.

### Advanced

1. GitOps.
2. Rollback strategies.
3. Feature flags.
4. Security scanning in pipelines.
5. Infrastructure as Code integration.
6. Zero-downtime deployments.
7. Multi-environment pipelines.
8. Deployment approvals.
9. Containerized deployments.
10. Observability after deployment.

---

# 8. GitHub Actions

### Beginner

1. What is GitHub Actions?
2. What is workflow_dispatch?
3. Difference between jobs and steps?
4. What are runners?
5. What are GitHub Secrets?

### Intermediate

1. Reusable workflows.
2. Matrix builds.
3. Self-hosted runners.
4. Environment variables.
5. Artifacts handling.

### Advanced

1. How would you deploy a Java application using GitHub Actions?
2. Secure secret management.
3. Multi-environment deployments.
4. Deploying to AWS from GitHub Actions.
5. Caching dependencies.
6. Conditional workflows.
7. Docker build and push workflows.
8. Rollback automation.
9. Approval gates.
10. Performance optimization of workflows.

---

# 9. Keycloak

### Beginner

1. What is Keycloak?
2. Difference between Authentication and Authorization?
3. What is SSO?
4. What are Realms?
5. What are Clients?

### Intermediate

1. OAuth2 flow.
2. OpenID Connect.
3. Access Token vs Refresh Token.
4. Client Credentials Flow.
5. User Federation.

### Advanced

1. Keycloak architecture.
2. JWT token validation.
3. Custom authentication flows.
4. Identity Brokering.
5. LDAP integration.
6. Keycloak clustering.
7. SSL configuration in Keycloak.
8. Token exchange.
9. Role-based access control design.
10. Securing microservices with Keycloak.

---

# System Design Questions

1. Design a scalable e-commerce platform.
2. Design a URL shortener.
3. Design an online banking application.
4. Design a notification service.
5. Design a distributed file upload system.
6. Design an authentication platform using Keycloak.
7. Design a data warehouse solution using Snowflake.
8. Design a microservices platform on AWS.
9. Design a CI/CD pipeline for 100+ microservices.
10. Design a real-time stock trading application.

---

# Frequently Asked Scenario-Based Questions

1. Production application is slow. How would you troubleshoot?
2. PostgreSQL CPU is 100%. What would you check?
3. Snowflake cost suddenly doubled. How would you investigate?
4. Keycloak login is failing after SSL enablement.
5. GitHub Actions deployment is failing only in production.
6. React application has performance issues.
7. AWS application is unavailable in one region.
8. Microservice memory keeps increasing.
9. Database migration failed during deployment.
10. How would you perform zero-downtime deployment for a Spring Boot application?

These questions cover what is typically asked for **8–15 years experienced Full Stack Java Developers / Solution Architects** in enterprise interviews.
