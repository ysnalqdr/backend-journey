# Full Roadmap - Backend Engineer

**Name:** Muhammad Yasin Al Qadri
**Duration:** 48 weeks (November 2026 to October 2027)
**Target:** Backend internship in semester 7
**Rule #1:** No week without a commit

---

## Time Budget

| Unit            | Target                         |
|-----------------|--------------------------------|
| Per day         | 2-3 hours (minimum 30 minutes) |
| Per week        | 15-20 hours (5-6 active days)  |
| Per month       | 60-80 hours                    |
| Total, 48 weeks | 720-960 hours                  |

## Method: 20/80

```
20% reading or watching (maximum 30 minutes per session)
80% typing it myself (never copy-paste)

Flow:
1. Read the concept
2. Retype the example
3. Break it - change one thing, watch the error
4. Build my own variation
5. Write Catatan.md
6. Push to GitHub
```

Do not use AI while learning fundamentals. AI is for work projects, not for practice.

---

# Phase 1 Foundation

**Period:** November 2026 to January 2027
**Target:** Deep JavaScript, HTTP, Node.js, SQL

## 1 Week - JavaScript In Depth

### Resources
- javascript.info part 1
- Fireship - JavaScript in 100 Seconds
- Traversy Media - JavaScript Crash Course

**Js Basic**
- Practice: Variables, data types, operators, conditions, loops
- Output: Temperature converter

**Function Scope**
- Practice: Function declaration, expression, arrow, closure
- Output: CLI calculator

**Array Methods**
- Practice: map, filter, reduce, find, some, every
- Output: Filter a concert list

**Object Destructuring**
- Practice: Objects, this, destructuring, spread, rest
- Output: Simple inventory


**Checkpoint:** Write a 50-100 line program without looking at references.

## 2 Week - Async and Node.js

### Resources
- javascript.info chapter 11
- The Net Ninja - Node.js Crash Course
- ByteByteGo - What happens when you type a URL
- Hussein Nasser - HTTP Crash Course
- MDN Web Docs - HTTP Overview

**Async Await**
- Practice: Callbacks, promises, async/await, try-catch
- Output: Fetch a public API

**Http Fundamental**
- Practice: Request flow, methods, status codes, headers
- Output: Request flow diagram

**Nodejs Basics**
- Practice: Modules, fs, path, process
- Output: Read and write JSON files

**Express Api**
- Practice: Routes, middleware, req/res
- Output: To-do list CRUD


**Checkpoint:** Build a 4-endpoint REST API without a tutorial.

## 3 Week - SQL and Databases

### Resources
- SQLBolt (18 interactive lessons)
- PostgreSQL Tutorial
- freeCodeCamp - SQL Tutorial Full Course
- Fireship - SQL in 100 Seconds
- DB Fiddle for browser practice

**Sql Crud**
- Practice: CREATE, INSERT, SELECT, UPDATE, DELETE
- Output: 10 .sql files

**Sql Query**
- Practice: WHERE, ORDER BY, LIMIT, LIKE, aggregates
- Output: Concert and ticket dataset

**Sql Join**
- Practice: INNER, LEFT, RIGHT JOIN, GROUP BY, HAVING
- Output: 5 complex queries

**Database Design**
- Practice: Primary key, foreign key, index, normalization
- Output: SoundWave schema in SQL


**LeetCode starts in week 11:** 2 Easy problems per week.

**Checkpoint:** Write a 3-table JOIN query without Google.

---

# Phase 2 Second Language

**Period:** February to April 2027
**Target:** Java basics, Spring Boot, Docker, Testing

## 1 Week - Java Fundamentals

### Resources
- MOOC.fi (java-programming.mooc.fi) part 1
- Bro Code - Java Full Course
- IntelliJ IDEA Community

**Java Syntax**
- Practice: Variables, types, input output, conditions, loops
- Output: 7 .java files

**Java Method**
- Practice: Parameters, return values, overloading
- Output: Calculator and temperature converter

**Java Oop Basics**
- Practice: Classes, objects, constructors, getters setters
- Output: User, Event, Ticket models

**Java Oop Advanced**
- Practice: Inheritance, interfaces, polymorphism
- Output: Payment system


**Checkpoint:** Write a 200+ line object-oriented Java program.

## 2 Week - Advanced Java and Spring Boot

### Resources
- MOOC.fi part 2
- Spring.io Guides
- Baeldung
- Amigoscode - Spring Boot Tutorial
- Java Brains - Spring Boot playlist

**Java Collection**
- Practice: List, Map, Set, generics
- Output: Phonebook CLI

**Java Exception Io**
- Practice: Try-catch, custom exceptions, read CSV
- Output: CSV data processing program

**Spring Boot Get**
- Practice: Project setup, RestController, GetMapping
- Output: GET /hello and /users endpoints

**Spring Boot Crud**
- Practice: PostMapping, RequestBody, ResponseEntity
- Output: Full CRUD API


**Checkpoint:** A working Spring Boot API with 4 CRUD endpoints.

## 3 Week - Database, Docker, Testing

### Resources
- TechWorld with Nana - Docker Tutorial for Beginners
- Docker docs Get Started
- Amigoscode - Spring Boot Testing

**Spring Jpa Postgres**
- Practice: Entities, repositories, PostgreSQL connection
- Output: CRUD with a real database

**Docker Basics**
- Practice: Dockerfile, images, containers
- Output: Dockerized API

**Docker Compose**
- Practice: Spring Boot plus PostgreSQL in one command
- Output: docker-compose.yml

**Testing Junit**
- Practice: JUnit, Mockito, endpoint tests
- Output: At least 10 unit tests


**LeetCode:** 3 problems per week, start attempting Medium.

**Checkpoint:** Spring Boot + PostgreSQL + Docker + 10 tests, all on GitHub.

---

# Phase 3 Project

**Period:** May to July 2027
**Project:** SoundWave Backend v2 (separate repository)
**Stack:** Java, Spring Boot, PostgreSQL, Docker, JWT

## 1 Week - Project Foundation

| Week | Target                                           | Output                |
|------|--------------------------------------------------|-----------------------|
| 25   | Project setup, database design, 6-table ERD      | New repo, README, ERD |
| 26   | User registration, bcrypt, JWT login, middleware | Working auth          |
| 27   | Event CRUD: create, read, update, delete         | Event endpoints       |
| 28   | Input validation, pagination, search filter      | Validated endpoints   |

## 2 Week - Core Features

| Week | Target                                                    | Output               |
|------|-----------------------------------------------------------|----------------------|
| 29   | Ticket purchase, stock decrement, race condition handling | Transaction logic    |
| 30   | Promo codes, discounts, tiered price calculation          | Price calculation    |
| 31   | Sandbox payment integration, webhook handler              | Working payment flow |
| 32   | API documentation with Swagger                            | Swagger UI           |

## 3 Week - Production

| Week | Target                                             | Output                   |
|------|----------------------------------------------------|--------------------------|
| 33   | GitHub Actions: automated build, test, lint        | Green CI                 |
| 34   | Deploy to Railway or Render                        | App live on the internet |
| 35   | Error handling, logging, security headers          | Stable system            |
| 36   | Portfolio README polish, screenshots, architecture | Repo ready to show       |

**Checkpoint:** Live project, professional README, complete test suite.

---

# Phase 4 Preparation

**Period:** August to October 2027
**Target:** Interview ready, start applying

## 1 Week - Linux and System Design

### Resources
- ByteByteGo - system design basics
- Ubuntu documentation

| Week | Target                                                 | Output            |
|------|--------------------------------------------------------|-------------------|
| 37   | Install Ubuntu on ThinkPad T480, basic command line    | Linux notes       |
| 38   | SSH, permissions, file system, deploy to VPS           | Accessible server |
| 39   | Load balancer, caching, horizontal vs vertical scaling | Diagram and notes |
| 40   | Message queues, consistency, monolith vs microservices | Diagram and notes |

## 2 Week - Interview Practice

| Week | Target                                        | Output             |
|------|-----------------------------------------------|--------------------|
| 41   | Explain the SoundWave v2 project in 5 minutes | Self recording     |
| 42   | Explain the architecture on a whiteboard      | Self recording     |
| 43   | LeetCode sprint: 5 problems per week          | 20 solutions       |
| 44   | Advanced LeetCode sprint, Medium focus        | 40 total solutions |

## 3 Week - Applications

| Week | Target                                               | Output                |
|------|------------------------------------------------------|-----------------------|
| 45   | Polish all repos: README, comments, remove dead code | 3 professional repos  |
| 46   | GitHub profile: bio, pinned repos, photo             | Profile ready to view |
| 47   | One-page CV, LinkedIn, apply to 5-10 positions       | Applications sent     |
| 48   | Interview preparation: behavioral and technical      | Interview ready       |

**Checkpoint:** 3 professional repos, 80+ LeetCode, CV ready, applications sent.

---

# Internship Targets

| Company          | Position                       | Experience Required |
|------------------|--------------------------------|---------------------|
| tiket.com        | Software Engineer I            | 0-2 years           |
| Sea Labs         | Back End Engineer (Enterprise) | 1-3 years           |
| Mid-size startup | Backend Engineer (Node.js)     | Entry level         |
| Digital bank     | Backend intern or junior       | Internship          |

---

# Skills I Already Have

JavaScript, Node.js, Express, Firebase, REST API, Git, Midtrans, a real project (SoundWave).

Not zero. Already started.

---

# Main Resources

## Websites

| Resource        | Address                  | For                   |
|-----------------|--------------------------|-----------------------|
| javascript.info | javascript.info          | JavaScript in depth   |
| MOOC.fi         | java-programming.mooc.fi | Structured Java       |
| SQLBolt         | sqlbolt.com              | Interactive SQL       |
| Baeldung        | baeldung.com             | Spring Boot           |
| NeetCode        | neetcode.io              | LeetCode              |
| roadmap.sh      | roadmap.sh/backend       | Skill map             |
| MDN             | developer.mozilla.org    | HTTP and JavaScript   |
| freeCodeCamp    | freecodecamp.org         | JavaScript algorithms |
| Docker docs     | docs.docker.com          | Docker                |
| Spring          | spring.io/guides         | Spring Boot           |

## YouTube

| Channel              | Content                  |
|----------------------|--------------------------|
| Fireship             | Fast concepts            |
| ByteByteGo           | System design            |
| Hussein Nasser       | Backend in depth         |
| Traversy Media       | Crash courses            |
| The Net Ninja        | Node.js and JavaScript   |
| Amigoscode           | Java and Spring Boot     |
| TechWorld with Nana  | Docker and DevOps        |
| Java Brains          | Spring Boot              |
| Bro Code             | Java full course         |
| NeetCode             | LeetCode strategy        |
| Programmer Zaman Now | Java and Go (Indonesian) |

## Tools

| Tool                    | For                           |
|-------------------------|-------------------------------|
| VS Code                 | JavaScript and Node.js editor |
| IntelliJ IDEA Community | Java IDE                      |
| Postman                 | API testing                   |
| DBeaver                 | Database GUI                  |
| DB Fiddle               | SQL in the browser            |
| Docker Desktop          | Containers                    |
| Git Bash                | Terminal                      |

---

# Weekly Rule

```
Every week, at least 1 commit on GitHub.
If busy or sick: push Catatan.md describing what I studied.
A broken streak is an alarm. Never let it go more than 1 week empty.
```
