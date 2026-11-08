# Backend Journey

A learning log for my path to becoming a backend engineer.

**Started:** November 2026
**Target:** Backend internship, semester 7 (October 2027)
**Focus:** Java + Spring Boot + PostgreSQL (primary), Node.js (secondary)

---

## Rules

1. No week without a commit.
2. 20% reading, 80% typing. Never copy-paste.
3. Every folder has a `Catatan.md` — what I learned and what confused me.
4. All notes, commit messages, and code comments in English.
5. Keyword **"keeping"** = ask for a recall session on material already studied. When I say it, review by questioning me on key concepts, correct what is wrong, and do not restart from zero.
6. Every day ends with the gate: explain back (5 lines, no notes), predict 3 outputs, write 1 exercise from zero. Pass 2 of 3, or repeat the same day tomorrow. Do not advance on a failed gate.
7. Every week needs 1 trace, 1 bug log entry, and 1 commit. Missing any of them means the week is not finished.
8. Reading-code track: 1 file per week at the current level. Levels 1-5 are defined in PLAN.md.
9. PLAN.md holds the phases, gates, and schedule. If it conflicts with this README, PLAN.md wins.
10. Never delete wrong code. Comment it out and add one line saying why it was wrong:
    `// WRONG - why: "90" is a string, so "90" < "100" is false`. Deleted code is lost evidence.
11. End every session mid-problem, not at a clean stopping point. Stop while the next
    step is written down and unfinished, so tomorrow starts with a task instead of a decision.
12. Two tracking files live at the repo root. `KESALAHAN.md` = thinking mistakes, filled
    immediately and reviewed monthly (anything appearing 3 times needs a different approach).
    `SKILLS.md` = concept status 0-4, updated every week. No core concept below 3 before applying.
13. `SYMBOLS.md` at the repo root = how to read every JS symbol out loud, in English and
    Indonesian. Open it whenever a symbol is unfamiliar. Do not guess.
14. Every session declares a mode. `Normal` = full material. `Recovery` = minimum 15 minutes,
    one small exercise, still commit. Maximum 2 consecutive Recovery days; the third must be
    Normal or it is logged in `KESALAHAN.md` as avoidance.
15. `SKILLS.md` status 3+ requires evidence in the Evidence column. No evidence means the
    status stays at 2.

---

## Mastery Gate — no advancing without mastery

16. **Two consecutive correct answers, unaided, on DIFFERENT questions.** That is the only
    condition for moving to the next concept. Repeating the same question proves recall,
    not understanding.
17. When an answer is wrong, run the full remediation loop. No skipping steps:
    a. **STOP.** Do not advance, do not say "we will come back to it later".
    b. **DIAGNOSE.** Name the exact misconception, not just "wrong".
    c. **RE-TEACH with a DIFFERENT explanation.** Never repeat the same words or analogy.
       If explanation 1 failed, use analogy 2, then analogy 3.
    d. **MICRO-CHECK.** One tiny question to confirm the new explanation landed.
    e. **NEW QUESTION.** Same concept, different form. Never the same question.
    f. **REPEAT** until 2 consecutive correct on different questions.
17b. **Failure ladder.** Track attempts per concept within a session.
    - Attempt 1-2 fail → continue remediation, new analogy each time.
    - Attempt 3 fail → STOP the concept. Write it in `Catatan.md` under `## Deferred`,
      with the exact question that broke it. Move to another concept or end the session.
    - Never attempt the same concept more than 3 times in one day. A fourth attempt
      today trains frustration, not understanding.
17c. **"Different question" means a different SURFACE FORM, not different numbers.**
    Acceptable variation: same concept inside `console.log` vs inside a variable
    assignment; an invalid-code variant where the learner must find the bug; the same
    concept rewritten from if/else. Not acceptable: changing 85 to 95 in an otherwise
    identical question.
17d. **Difficulty ladder.** Each concept needs at least one MEDIUM question passed.
    - EASY: direct output prediction.
    - MEDIUM: find the bug, or rewrite from another form.
    - HARD: combine with a previously learned concept.
    Two EASY passes alone do not clear a concept.
17e. **Write-from-memory test.** Each concept needs one question where the learner writes
    the syntax from scratch with no example visible. Reading code is not the same as
    producing it. This is the only test that catches typing-level gaps such as `>+`
    instead of `>=`.
17f. **Cross-concept HARD.** Every third HARD question must combine the current concept with
    one from a previous day. Concepts decay; testing only today's topic hides the decay.
17g. **Time targets.** EASY 30 seconds, MEDIUM 2 minutes, HARD 5 minutes. Exceeding the
    target is not a FAIL, but it is recorded in the Gate Log. Two overruns on the same
    concept means it needs another pass — slow recall is not mastery.
18. **Correct answer with wrong reasoning = FAIL.** Always ask "why?" after a correct answer.
    A lucky guess is not mastery.
18b. **Reasoning rubric.** A "why" answer passes only if it names the MECHANISM.
    - PASS: "because 0 > 0 is false, so it takes the part after the colon"
    - PASS: "because ?? only replaces null and undefined, and 0 is neither"
    - FAIL: "because it is the newer operator"
    - FAIL: "because that is how it works"
    Rule of thumb: if the answer would still be true for a different input, it is not
    an explanation.
19. **Error taxonomy.** Classify every mistake before fixing it:
    | Type | Symptom | Treatment |
    |---|---|---|
    | CONCEPT | Does not understand the idea | Re-teach with a new analogy |
    | READING | Misread the instruction | Practise reading to the end before answering |
    | SYNTAX | Typo, wrong symbol | Drill that symbol 5 times |
    | LOGIC | Right idea, wrong order or flow | Trace it step by step |
    Different errors need different fixes. Do not treat a reading error as a concept error.
20. **Spaced re-check.** Every concept at status 3 is re-tested 2 days later. If it fails,
    the status drops to 2 and the remediation loop applies again. The schedule lives in
    `REVIEW_QUEUE.md` — a concept with no due date will never be re-checked.
21. **AI never fixes the learner's code.** The learner fixes it. AI may point at the line and
    ask a question, never edit the file on the learner's behalf.
22. **Gate log is mandatory.** Every question asked, every answer given, and every verdict is
    written into `Catatan.md` under `## Gate Log`. A gate that exists only in conversation
    leaves no evidence and cannot be reviewed.
22b. **Gate log economy.** Log every FAIL. Log a PASS only if it is MEDIUM or HARD — an EASY
    pass carries no information. More than 20 questions in one day means the session is too
    broad: cut scope, do not cut logging.
23. **System budget.** Maintaining the system — editing README, PLAN, SKILLS, KESALAHAN,
    templates — is capped at 20 minutes per week, done only at the end of the week. An
    improvement idea that appears mid-week goes into `IMPROVEMENTS.md` and waits. A system
    that grows faster than the skill it tracks has become the work.
23b. **Improvement triage.** Every item in `IMPROVEMENTS.md` gets one of three verdicts at the
    weekly review: ADOPT (real failure observed), DEFER (plausible, no evidence yet),
    REJECT (solves a problem that does not exist). No item may stay undecided for more than
    two weeks — undecided items become permanent clutter.
23c. **One change at a time.** Only one rule may be added per week. If two changes are
    proposed, pick the one with observed evidence. Multiple simultaneous rule changes make
    it impossible to tell which one helped.
24. **Question quality standard.** Every gate question must satisfy all five. A question that
    fails any of these is rewritten before it is asked, not after.
    a. **ONE concept** — no mixing three things at once.
    b. **STATED intent** — the learner knows what is being tested.
    c. **NO trick** — it tests understanding, not reading sharpness.
    d. **REAL context** — an application situation, not abstract code.
    e. **EXPLAINABLE** — the answer has a reason, not a guess.
24b. **No zero-output trick questions.** Never ask "how many lines are printed" when the
     answer is zero. That tests attention, not understanding. If output is zero, ask why
     there is no output and what would need to change to produce one.
24c. **State what is already known.** If the code prints exactly one line, say so in the
     question. Then ask what that line contains and why. Removing the trivial part frees
     the learner to think about the mechanism.
25. **One concept in flight.** Do not open a new concept while any concept sits in
    `## Deferred`. If the session ends, the next session starts with the Deferred concept,
    not with new material. A half-finished topic is a debt that compounds.
25b. **Full completion per concept.** A concept is complete only after all four levels pass:
    EASY (predict), MEDIUM (find the bug), HARD (combine with an earlier concept), and
    WRITE (produce from memory). Two of four is not completion. There is no attempt limit
    while a concept is the active one — if it takes twenty questions, it takes twenty.

---

## Structure

```
Phase 1 Foundation/
  1 Week/
    01_Js Basic/
      Exercises/
      Catatan.md
```

Naming pattern:

| Level | Style | Example |
|---|---|---|
| Phase | Title Case | `Phase 1 Foundation` |
| Group | N Week | `1 Week` |
| Week | NN_Title Case | `01_Js Basic` |
| Inside | Title Case | `Exercises`, `Catatan.md` |

---

## Progress

### Phase 1 Foundation - November 2026 to January 2027

| Week | Topic | Done |
|---|---|---|
| 01 | Js Basic | in progress (day 3 of 5) |
| 02 | Function Scope | [ ] |
| 03 | Array Methods | [ ] |
| 04 | Object Destructuring | [ ] |
| 05 | Async Await | [ ] |
| 06 | Http Fundamental | [ ] |
| 07 | Nodejs Basics | [ ] |
| 08 | Express Api | [ ] |
| 09 | Sql Crud | [ ] |
| 10 | Sql Query | [ ] |
| 11 | Sql Join | [ ] |
| 12 | Database Design | [ ] |

### Phase 2 Second Language - February to April 2027

| Week | Topic | Done |
|---|---|---|
| 13 | Java Syntax | [ ] |
| 14 | Java Method | [ ] |
| 15 | Java Oop Basics | [ ] |
| 16 | Java Oop Advanced | [ ] |
| 17 | Java Collection | [ ] |
| 18 | Java Exception Io | [ ] |
| 19 | Spring Boot Get | [ ] |
| 20 | Spring Boot Crud | [ ] |
| 21 | Spring Jpa Postgres | [ ] |
| 22 | Docker Basics | [ ] |
| 23 | Docker Compose | [ ] |
| 24 | Testing Junit | [ ] |

### Phase 3 Project - May to July 2027

| Week | Topic | Done |
|---|---|---|
| 25 | Setup Auth | [ ] |
| 26 | Jwt Middleware | [ ] |
| 27 | Crud Events | [ ] |
| 28 | Validation Pagination | [ ] |
| 29 | Ticketing Stock | [ ] |
| 30 | Promo Pricing | [ ] |
| 31 | Payment | [ ] |
| 32 | Api Documentation | [ ] |
| 33 | Github Actions | [ ] |
| 34 | Deploy | [ ] |
| 35 | Error Handling Logging | [ ] |
| 36 | Polish Readme | [ ] |

### Phase 4 Preparation - August to October 2027

| Week | Topic | Done |
|---|---|---|
| 37 | Linux Basics | [ ] |
| 38 | Linux Ssh | [ ] |
| 39 | System Design | [ ] |
| 40 | System Design 2 | [ ] |
| 41 | Mock Interview | [ ] |
| 42 | Project Architecture | [ ] |
| 43 | Leetcode Sprint 1 | [ ] |
| 44 | Leetcode Sprint 2 | [ ] |
| 45 | Polish Repo | [ ] |
| 46 | Github Profile | [ ] |
| 47 | Cv Application | [ ] |
| 48 | Interview Prep | [ ] |

---

## Time Budget

| Unit | Target |
|---|---|
| Per day | 2-3 hours (minimum 30 minutes) |
| Per week | 15-20 hours |
| Per month | 60-80 hours |
| Total, 48 weeks | 720-960 hours |

---

## Resources

| Resource | For |
|---|---|
| javascript.info | JavaScript in depth |
| java-programming.mooc.fi | Structured Java |
| sqlbolt.com | Interactive SQL |
| baeldung.com | Spring Boot |
| neetcode.io | LeetCode |
| roadmap.sh/backend | Skill map |
| docs.docker.com | Docker |

---

## Key Concepts Learned

A running list of things I do not want to forget.

### Week 01 - JS Basics

**Variables**
- `const` by default, `let` only when the value changes, never `var`
- Variable names use camelCase

**Template literals**
- `${}` only works inside backticks `` ` ``, not single or double quotes
- Wrong quotes do not throw an error, they just print the literal text

**Type conversion**
- Data from outside (forms, URLs, files, APIs) always arrives as a string
- `Number("123abc")` is `NaN` because `Number` is strict
- `parseInt("123abc")` is `123` because it stops at the first non-digit
- `Number("")` is `0` but `parseInt("")` is `NaN`

**The `+` trap**
- `+` has two jobs: add numbers and join strings
- If either side is a string, `+` joins instead of adds
- `-`, `*`, `/`, `%` only have one job, so they always convert to number
- `"5" + 3` is `"53"` but `"5" - 3` is `2`

**Comparison**
- `==` converts types before comparing, `===` does not
- Always use `===`. `0 == ""` is `true`, which causes real bugs

**NaN**
- `NaN` is the only value not equal to itself
- Use `Number.isNaN(x)`, never `x === NaN`
- One `NaN` in a calculation poisons the whole result

**Truthy and falsy**
- Only 8 falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`
- `[]` and `{}` are truthy even when empty
- `"false"` is truthy because it is a non-empty string

**Browser vs Node.js**
- `alert`, `prompt`, `document`, `window` exist only in the browser
- Node.js has no DOM, so use `console.log` instead of `alert`

**Reading errors**
- The first line of an error shows the file and line number
- Everything starting with `at Module...` is internal Node.js, ignore it
- When an error happens, JavaScript stops and the rest of the file never runs
