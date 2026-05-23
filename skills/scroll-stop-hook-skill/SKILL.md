---
name: scroll-stop-hook-engineering
description: Generates 10-15 hook variants for a given one-line pitch using 10 named archetypes (contrarian, diagnosis-flip, manifesto, stat cold-open, founder confession, enemy call-out, before/after, identity hook, role reversal, named-question). Each hook tagged with its archetype so the user can A/B by structure, not just by wording.
---

# Scroll-Stop Hook Engineering Skill

## What this skill is for

The hook is 80% of the ad. Body copy fails or succeeds based on whether
the hook stopped the scroll. This skill generates hook variants in
isolation — useful when you have body copy you like but a weak top, or
when you want to A/B test by *structure* rather than by wording.

**Trigger this skill whenever the user asks for:**
- Multiple hook options
- A new opener for existing ad copy
- A "punchier first line"
- Headlines for an ad set, landing page, or email subject lines

## ACTIVE CONFIGURATION

* **PLATFORM:** `instagram_facebook`  (sets character constraint)
* **MAX_HOOK_CHARS:** 130  (IG truncation; 80 for TikTok; 90 for Twitter; 70 for email subject)
* **VARIANT_COUNT:** 12  (default — generate 12 hooks, one per archetype where applicable)
* **TAG_EACH_HOOK:** `true`  (always label hooks with their archetype)

## What stops the scroll

A scroll-stopping hook does ONE of three things:

1. **Names a private thought** the reader already had but never said aloud
2. **Names a private fear** the reader has been avoiding
3. **Picks a fight** with something the reader has been told is true

Hooks that fail to do one of these things are decoration. They will not
stop a scroll regardless of how clever they are.

## The 10 Archetypes

For each, use the pattern, follow the constraints, avoid the failure
mode.

---

### 1. Contrarian

**Pattern:** *Most [audience] [does/believes/loses] [thing].*

**When to use:** When the product exists because the audience has a
common, costly habit they don't see.

**When NOT to use:** When the audience already feels singled out — this
hook accuses the group, not the individual, and works best when the
reader thinks "wait, am I one of those?"

**Examples:**
- Most retired athletes lose 10 years to one question.
- Most founders spend more on lawyers than they do on customers.
- Most startups die from indigestion, not starvation.

**Failure mode:** Becomes preachy if the "most people" claim isn't true.

---

### 2. Diagnosis Flip

**Pattern:** *You don't have a [wrong diagnosis] problem. You have a [right diagnosis] problem.*

**When to use:** When the audience is already trying to solve the wrong
problem — and the product is the right tool for the right problem.

**When NOT to use:** When the audience hasn't recognized the problem
exists at all. Diagnosis flip presupposes self-awareness.

**Examples:**
- You don't have a motivation problem. You have a structure problem.
- You don't have a leads problem. You have a closing problem.
- You don't have a writing problem. You have an editing problem.

**Failure mode:** Easy to fake. The flip has to be true and the product
has to credibly address the *real* diagnosis.

---

### 3. Stat Cold-Open

**Pattern:** *[Specific statistic] [audience description] [outcome].*

**When to use:** When you have a real, citable stat that quantifies the
problem — and the stat is shocking or counterintuitive.

**When NOT to use:** Without a real source. Invented stats kill
credibility and risk platform takedowns.

**Examples:**
- 1 in 3 retired athletes battles depression within 2 years.
- 73% of SaaS demos are watched at 2x speed.
- The average solo founder logs 67 hours a week. 9 of them are billable.

**Failure mode:** Round numbers (50%, 99%, 100%) read as fabricated. Use
specific decimal stats (47.2%, 73%) for credibility.

---

### 4. Manifesto / Counter-Positioning

**Pattern:** *Every [audience-archetype] [does common thing]. [I'm/We're] not doing that.*

**When to use:** When the product is a counter-move against an entire
category. Strong against tired categories with well-known clichés.

**When NOT to use:** When the product is a slight improvement on the
norm. Manifesto hooks promise a different game, not a better version.

**Examples:**
- Every retired athlete becomes an influencer. I'm not doing that.
- Every founder writes a book. We're not doing that.
- Every productivity app gamifies. Ours doesn't.

**Failure mode:** Requires the "we don't" to be visibly true downstream.
Manifesto hook + then-the-product-does-exactly-that = brand damage.

---

### 5. Founder Confession

**Pattern:** *I [embarrassing or vulnerable admission about past failure or naïveté].*

**When to use:** When the product was born from the founder's own
failure. Highest-converting for solo-founder brands.

**When NOT to use:** B2B enterprise. Confession reads as unprofessional
in regulated buying contexts.

**Examples:**
- I retired from pro soccer at 27 and spent four years asking who I was.
- I made $0 from my first three startups. Here's what the fourth did differently.
- I wrote 200,000 words on Substack before anyone subscribed.

**Failure mode:** Has to be a *specific* confession with a number, date,
or scar. Generic vulnerability ("I struggled too") reads as fake.

---

### 6. Enemy Call-Out

**Pattern:** *Stop [doing common bad thing the audience is doing right now].*

**When to use:** When the audience is mid-mistake. Imperative voice gets
attention because it presupposes the reader is doing the bad thing
right now.

**When NOT to use:** When the "bad thing" isn't actually that bad. This
hook is a fight — pick fights you can win.

**Examples:**
- Stop following retired athletes who became influencers.
- Stop A/B testing button colors.
- Stop hiring senior engineers to do junior engineering.

**Failure mode:** Fight that the audience secretly agrees with hits.
Fight that the audience disagrees with creates churn, not conversion.

---

### 7. Before/After (Compressed)

**Pattern:** *Used to: [old state]. Now: [new state].*  *Or:* *[Old role] became [new role].*

**When to use:** When the transformation is concrete, visual, and
short. Strong for productized services and tools that change a daily
ritual.

**When NOT to use:** Abstract transformations ("anxious → calm") read
as wellness-app cliché.

**Examples:**
- Used to: 7 tabs. Now: 1 keyboard shortcut.
- Used to: 3 hours a day in Notion. Now: 4 minutes in BELVR.
- The athlete became the operator.

**Failure mode:** "Used to / now" works only with specific, numeric, or
visual contrasts. Abstract pairs fall flat.

---

### 8. Identity Hook

**Pattern:** *If you're [specific identity], [implication or instruction].*

**When to use:** When the wedge audience has a strong identity marker
they self-identify with publicly. Hooks like this say "this is for me"
fast.

**When NOT to use:** When the identity isn't clean. "If you're an
entrepreneur" is too broad. "If you sold your company last year" is
sharp.

**Examples:**
- If you played D1 anything, you already know what this is.
- If you've ever ghosted a $50K consulting call, this is for you.
- If you've sold a company in the last 18 months, read this.

**Failure mode:** Identity hook fails when the identity is too broad or
too aspirational ("if you're a high performer" = everyone thinks
they are).

---

### 9. Role Reversal

**Pattern:** *[Familiar role] now [does the opposite of familiar role's job].*

**When to use:** When the product changes who does what. Strong for
tools that automate a step or invert a workflow.

**When NOT to use:** When the role reversal isn't real. This is a
strong hook precisely because it's surprising; lying about it kills the
brand.

**Examples:**
- The coach is now the coached.
- The agency now buys ads from its clients.
- The lawyer drafts. Our AI redlines.

**Failure mode:** Reads as cute if not literally true downstream.

---

### 10. Named-Question

**Pattern:** *[The question the audience is asking themselves silently, named directly].*

**When to use:** When the audience has a specific unspoken question
that *they* would say out loud only privately. Naming it creates
immediate intimacy.

**When NOT to use:** Generic questions ("Are you ready to level up?")
are banned. Only use this archetype for questions the audience would
literally think in private.

**Examples:**
- Who am I now?
- Is this the year I finally hire someone?
- What if it doesn't work this time either?

**Failure mode:** Confusing the hook-as-question with the engagement-bait
question. "Are YOU ready to crush it?" is not this archetype — it's
salesy filler.

---

## Output Format

When generating hooks, always produce them in this format:

```
### Hook 01 — Contrarian
[hook text]   (chars: 87)

### Hook 02 — Diagnosis Flip
[hook text]   (chars: 92)

### Hook 03 — Stat Cold-Open
[hook text]   (chars: 71)
```

Always:
- Tag each hook with its archetype
- Show character count
- Skip archetypes that don't fit the product rather than forcing them
- Generate at least 10, no more than 15

## Pre-Flight Check

Before returning hooks, verify:

* [ ] Each hook is ≤ MAX_HOOK_CHARS
* [ ] No banned filler words (see founder-voice-skill banned list)
* [ ] No engagement bait ("comment YES")
* [ ] No round-number stats (50%, 99%, 100%)
* [ ] No "Are YOU ready to..." style questions
* [ ] Each archetype is genuinely different in structure, not just rewording
* [ ] At least one hook tested for what the *audience* would say privately to themselves

## Anti-Patterns

- **The "viral" hook.** Trying to force virality produces clickbait that
  underperforms. Specificity always outperforms cleverness.
- **The pun.** Almost always reads as agency. Skip.
- **The "POV:" opener.** Platform-specific trend hook with a short shelf life. Skip unless explicitly briefed.
- **The CAPS-LOCK opener.** Reads as low-effort. Use weight and rhythm to emphasize, not caps.
- **The emoji opener.** Banned across all formats unless the user explicitly requests it.
- **Hook that doesn't connect to body.** The hook implies a promise; the
  body must keep it. Disconnected hooks feel like clickbait.

## Worked Example — BELVR

Input: the BELVR positioning brief (see `positioning-intake-skill`).
Wedge audience = retired D1/pro athletes; enemy = the athlete-influencer
industrial complex; proof point = the Belief Code.

12 hooks generated against that brief, one per archetype where it fit:

```
### Hook 01 — Contrarian
Most retired athletes lose ten years to one question.   (chars: 52)

### Hook 02 — Diagnosis Flip
You don't have a motivation problem. You have a structure problem.   (chars: 65)

### Hook 03 — Stat Cold-Open
1 in 3 retired athletes battles depression within two years.   (chars: 60)

### Hook 04 — Manifesto
Every retired athlete becomes an influencer. I'm not doing that.   (chars: 63)

### Hook 05 — Founder Confession
I retired from pro soccer at 27 and spent four years asking who I was.   (chars: 69)

### Hook 06 — Enemy Call-Out
Stop following retired athletes who became influencers.   (chars: 54)

### Hook 07 — Before/After
The athlete became the operator.   (chars: 32)

### Hook 08 — Identity Hook
If you played D1 anything, you already know what this is.   (chars: 56)

### Hook 09 — Role Reversal
The one who got coached now builds the system.   (chars: 46)

### Hook 10 — Named-Question
Who am I now?   (chars: 13)

### Hook 11 — Diagnosis Flip (variant)
It's not that you lost the sport. You lost the structure.   (chars: 56)

### Hook 12 — Contrarian (variant)
The hardest opponent shows up the day after you retire.   (chars: 55)
```

### Which won

Hooks 02 (Diagnosis Flip) and 10 (Named-Question) became the spine of
the 28.5s video spot. Note *why*: Hook 10 names the audience's private
thought ("who am I now?") — the highest-tier scroll-stop move — and Hook
02 reframes it as a solvable, named problem the product addresses. They
work as a pair: question, then diagnosis. The full ad built around them
lives in `founder-voice-skill`'s worked example.
