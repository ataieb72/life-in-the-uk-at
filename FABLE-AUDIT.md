# Claude Fable audit prompt

Copy everything below the line into **Claude Fable 5** (Claude Code / agent with browser).

Replace `APP_URL` with:
- GitHub Pages / Vercel URL of this repo, or
- `https://raw.githack.com/ataieb72/life-in-the-uk-at/main/Life-in-the-UK-Study-App.html` (or your branch), or
- a local `http://localhost:…` URL if Fable can open it.

---

```text
You are auditing the Life in the UK Study App (single-page HTML study tool for the official 3rd edition handbook).

APP URL: APP_URL

## Product intent (non-negotiable)
The intended study order is:
1. READ a chapter section by section
2. Only AFTER the last section of that chapter: practise cards + chapter mini-quiz
3. Full mocks only after the user has covered material

Do not treat "questions first" as acceptable.

## Audit procedure
Open the app in a real browser. Execute every step below. Record pass/fail with evidence (what you saw, quote UI text, note missing UI).

### A. First load & navigation
1. Note the default tab/view on first load. Prefer Read over Tests.
2. Confirm bottom nav order supports Read → Practice → Mocks (or equivalent).
3. Toggle light/dark theme if present; check readability.

### B. Read-first flow (Chapter 1)
1. Open Chapter 1 from the chapter list.
2. Open the FIRST section only.
3. FAIL if a primary CTA pushes "Practice Chapter 1 cards" or "Chapter 1 mini-quiz" as the main next step before the last section.
4. PASS if you only see Next section / progress like "Section 1 of N — keep reading".
5. Walk every section to the LAST section.
6. On the last section only: PASS if "Practice Chapter 1 cards" and "Chapter 1 mini-quiz" appear.
7. From chapter overview (section list): practice may be listed under "After you have read", but reading sections must remain the primary path.

### C. Flashcards
1. Start Chapter 1 cards (from last-section CTA or Practice tab → chapter).
2. For a card whose stem is MCQ-style ("Which of these…", "Which freedom…"):
   - FAIL if only the question + "Show answer" appear with NO options.
   - PASS if four options are visible before reveal.
3. Reveal answer: correct option should be indicated; full answer text shown.
4. Rating 0–5 should advance the session; low ratings may re-queue the card.

### D. Chapter mini-quiz
1. Start Chapter 1 mini-quiz (6 questions).
2. Confirm all questions are Chapter 1 scoped (values / permanent residence / principles — not random history).
3. Not a full timed mock (no 45-minute requirement for mini-quiz).
4. Complete or abandon cleanly; history/progress should update if applicable.

### E. Full mocks
1. Open Mocks / Test area.
2. Start fixed Mock 1 (or numbered mock). Note the 24 question IDs/order if visible in DOM/state.
3. Abandon; start Mock 1 again. PASS if the same 24 questions and option order repeat (deterministic).
4. Start Mock 2. PASS if not identical to Mock 1.
5. Start a random timed mock: 24 questions, ~45:00 timer, 75% pass mark (18/24).
6. Answer all correctly if possible; confirm score and pass/fail messaging.

### F. Content quality (sample, do not exhaust)
1. Report approximate question-bank size if shown in UI.
2. Spot-check 5 questions across values, history, government: plausible distractors; answer not identical to a distractor.
3. Note any "Which of these" stems that still lack options on cards.

### G. Accessibility & UX (lightweight)
1. Keyboard: Tab to main controls; Enter activates buttons.
2. After "Show answer", focus should not be lost in a dead end.
3. Mobile width (~390px): no horizontal overflow on Read and Cards.
4. Empty states: no due cards; locked chapter (if progressive unlock on) should explain how to unlock.

## Output format
Return a structured report:

1. Summary verdict: Ready / Needs fixes
2. Blockers (must fix)
3. Major issues
4. Minor issues
5. What passed
6. Recommended fix order (max 8 items, specific to UI/code behaviour)

Be strict on Read-before-Practice. Prefer evidence over opinion.
```

---

## Optional follow-up prompt

After the first report:

```text
For each Blocker and Major issue, propose the minimal code change in the single-file HTML app (function names if known: renderRead, renderCards, startSession, startTest). Do not rewrite the whole app.
```
