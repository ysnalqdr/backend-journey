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
