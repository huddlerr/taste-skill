---
name: founder-voice-direct-response
description: Generates social ads and short-form copy in the voice of a named founder/operator. Hormozi-style by default, with switchable voices (Naval, Sahil, Tucker Max, Justin Welsh). Hooks under 130 chars, named-method anchoring required, banned filler words, counter-positioning frame, IG/FB caption-ready output.
---

# Founder Voice Direct-Response Skill

## What this skill is for

Writing the kind of social ad copy that a sharp solo founder writes themselves —
not what an agency writes for them. Punchy, declarative, opinionated. Names the
wrong thing the market sells, then names the right thing.

Default voice is **Alex Hormozi**. The voice is switchable via the
`VOICE` setting (see below) but the structural rules below apply across all
voices.

## ACTIVE CONFIGURATION

* **VOICE:** `hormozi`  (options: `hormozi`, `naval`, `sahil`, `tucker`, `welsh`)
* **PLATFORM:** `instagram_facebook`  (options: `instagram_facebook`, `linkedin`, `twitter`, `tiktok`)
* **HOOK_MAX_CHARS:** 130  (Instagram's pre-truncation visible line)
* **NAMED_METHOD_REQUIRED:** `true`

**AI Instruction:** Apply these values as global variables. Adapt them
dynamically when the user explicitly requests different ones in chat. Do
not ask the user to edit this file.

## 1. THE FOUR LAWS

These four rules govern every output. Violating any of them means starting
over, not patching.

1. **Name the wrong thing, then name the right thing.** Every ad must
   identify what the market is currently selling (the wrong answer) and
   contrast it with what this product does (the right answer). Without
   this contrast, the ad is generic.
2. **Name a method.** Every product has a named methodology, framework,
   feature, or guarantee. Reference it by name in the body. Vague benefits
   don't convert; named mechanisms do.
3. **Sentence economy.** Average sentence under 12 words. Some under 5.
   Stack them.
4. **First-person or no-person.** Use "I built X" or speak as the brand
   directly. Never use the announcer "you" of bad agency copy ("Are YOU
   tired of...").

## 2. STRUCTURAL FRAME

The default ad has this skeleton. Deviations require a reason.

```
[HOOK]                  ← ≤130 chars, stops the scroll, names a problem or a foe
[CONTRAST]              ← 2–4 short lines naming the wrong thing the market sells
[REVEAL]                ← what THIS product is + the named method
[BENEFIT-IN-DOMAIN]     ← 1–2 lines on what it actually delivers, in their words
[CREDIBILITY-IF-EARNED] ← who you are, in 1 line. Optional.
[CTA]                   ← one specific verb. Never "learn more."
```

## 3. THE HOOK

The hook is 80% of the ad. The rest is execution.

### Approved hook archetypes

When generating, choose ONE archetype per ad. Don't mix.

* **Contrarian:** *"Most retired athletes lose 10 years to one question."*
* **Diagnosis flip:** *"You don't have a motivation problem. You have a structure problem."*
* **Stat cold-open:** *"1 in 3 X never recover from Y."*
* **Manifesto / counter-positioning:** *"Every retired athlete becomes an influencer. I'm not doing that."*
* **Founder confession:** *"I wasted ten years figuring out what nobody told me about X."*
* **Enemy call-out:** *"Stop following retired athletes who became influencers."*
* **Question that names the void:** *"What happens to a 5am routine when there's no game on Saturday?"*

### Hook constraints

* **≤130 characters** (IG truncates around there; the whole hook must read before "more")
* Must be a **complete sentence**. No fragments, no ellipses cliffhangers.
* **No question marks for the sake of engagement** ("Are you ready to…?"). A
  question is allowed only when it's *the* question the audience is already
  asking themselves silently.
* **No numbers in the hook unless they're true and specific** (`10 years`,
  `1 in 3` — OK; `999% better` — banned).

## 4. BANNED PHRASES (SLOP DETECTOR)

These are AI-copy fingerprints. If they appear in the output, regenerate.

### Strictly banned

* elevate
* unleash
* unlock (your potential)
* seamless / seamlessly
* next-gen
* game-changer / game-changing
* revolutionary / revolution
* world-class
* harness (the power of)
* delve into
* tapestry
* navigate (the complexities of)
* in today's fast-paced world
* in the world of X

### Discouraged (use only with strong reason)

* journey
* transform
* discover
* explore
* empower
* premium (unless literally describing price tier)
* curated

### Filler tells

* "Whether you're X or Y…" — instant tell, banned
* "More than just a..." — banned
* "Designed for those who…" — banned
* "Built different" — banned (post-2022 cliché)

## 5. COUNTER-POSITIONING

The ad's authority comes from naming the alternative and dismissing it.
This is a rhetorical move, not a fact-check; the comparison must be fair
but pointed.

### Pattern

```
[Most/Every X does Y].
[Y has this specific failure].
[We do Z instead].
```

### Example

> Every retired athlete becomes an influencer.
> They sell a camp. A course. A call.
> None of it survives real life after sport.
>
> BELVR is the system I needed when I retired.

### Constraint

* Never name a real competitor by name in the ad body unless the founder
  has explicitly authorized the call-out. Punch up at the *pattern*, not
  the *person*.

## 6. CTA DISCIPLINE

The CTA is one verb. The verb maps to what the user can actually do.

### Approved

* `Join the waitlist`
* `Get early access`
* `Get in →`
* `Sign up`
* `Watch the demo`
* `Read the breakdown`

### Banned

* `Learn more` — never. Specify what they'll learn.
* `Click here` — never.
* `Find out` — vague.
* `Discover X` — slop tell.

## 7. VOICE PROFILES

### `hormozi` (default)

* Short. Stacked. Declarative.
* Diagnosis flips and contrarian openers
* Heavy use of "stop X / start Y"
* Frameworks named explicitly
* Math/specifics when available, rhetorical force when not
* Almost no adjectives
* Lists and numbered breakdowns OK

### `naval`

* Aphoristic, philosophical
* One core idea per ad
* Often one-sentence body
* Never markets, only observes
* No CTA pressure; CTA implied

### `sahil` (Sahil Bloom)

* Story-driven openers
* "I made $X mistakes so you don't have to" frame
* Numbered insight lists
* More vulnerable / personal than hormozi
* Heavy first-person

### `tucker` (Tucker Max)

* Counter-positioning is the whole ad
* "I'm not doing X. Here's why X is bullshit."
* Explicit, uncensored
* Picks fights with the category
* Voice is the proof

### `welsh` (Justin Welsh)

* LinkedIn-native
* Educational frame, ad in disguise
* Carousels and lists
* "Here's what I learned from X"
* Soft sell, hard structure

## 8. OUTPUT FORMAT

Always output ad copy in caption-ready form:

```
[HOOK LINE — single line, fits in IG truncation window]

[Body, line-broken for IG readability — short lines, white space, no walls of text]

[CTA]

→ [domain or link]
```

When asked for multiple variants, label them by archetype, not just number:

```
### Variant 1 — Contrarian
[ad]

### Variant 2 — Diagnosis flip
[ad]

### Variant 3 — Manifesto
[ad]
```

## 9. PRE-FLIGHT CHECK

Before returning output, verify:

* [ ] Hook ≤ 130 chars
* [ ] No banned filler words present
* [ ] Named method/framework appears in the body
* [ ] Wrong thing → right thing contrast is explicit
* [ ] CTA is a specific verb, not "learn more"
* [ ] No "whether you're X or Y" / "more than just" / "built different"
* [ ] Voice matches the selected profile
* [ ] Average sentence length is under 12 words

If any box is unchecked, regenerate. Do not patch a bad ad — write a new one.

## 10. ANTI-PATTERNS

Things that look right but aren't:

* **The "polished" version.** Smooth, agency-sounding copy is the failure
  state. Awkward, specific, opinionated copy is the success state.
* **Three benefits in a row.** "Faster. Better. Smarter." Banned. Pick one.
* **The faux-personal opener.** "Picture this: it's 3am and you're…"
  Banned. Real founders don't write fiction; they write claims.
* **The we-help-you frame.** "We help athletes find purpose after sport."
  Banned. Show, don't tell. Replace with concrete mechanism.
* **Engagement bait.** "Comment YES if you've felt this." Banned.
  Engagement bait converts low and looks desperate.

## Worked Example — BELVR

Inputs: the BELVR positioning brief (`positioning-intake-skill`) and the
winning hooks (`scroll-stop-hook-skill`, hooks 02 + 10). Voice = `hormozi`.

### The ad

```
You don't have a motivation problem. You have a structure problem.

When the season ends, the alarm still goes off at 5am.
But there's no practice. No team. No scoreboard.
So you fill the hole with content. A camp. A course. A call.
None of it survives the Tuesday after.

BELVR is the operating system I needed when I retired.
It runs on the Belief Code — five stages that rebuild
identity and structure after sport, not around it.

I lost four years to "who am I now?"
You don't have to lose four weeks.

Get early access →
belvr.com
```

### Why it passes the pre-flight check

* **Hook ≤130 chars** — 65. ✓
* **Named method present** — "the Belief Code." ✓
* **Wrong thing → right thing** — "a camp, a course, a call" (the enemy
  from the brief) vs. "an operating system that runs on the Belief
  Code." ✓
* **CTA is a specific verb** — "Get early access," not "learn more." ✓
* **No banned filler** — no elevate/unleash/journey/seamless. ✓
* **First person** — founder's why is load-bearing, not decoration. ✓
* **Sentence economy** — average well under 12 words; several under 5. ✓

### How the three skills chained

```
positioning-intake  →  brief (audience, enemy, Belief Code, founder's why)
        ↓
scroll-stop-hook    →  12 tagged hooks; 02 + 10 selected
        ↓
founder-voice       →  full ad above, built around the selected hooks
        ↓
examples/belvr-ads/ →  the ad rendered as a 28.5s video spot
```

That's the intended pipeline: never start at the ad. Start at the brief.

## Worked Example — Taste-Skill (self-test, B2B developer tool)

Same skill, same voice profile (`hormozi`), totally different surface:
a B2B developer tool with no emotional founder story to lean on.
Proves the skill works when the credibility wedge is *technical
specificity* instead of *personal vulnerability*.

Inputs: the Taste-Skill positioning brief (`positioning-intake-skill`)
and the winning hooks (`scroll-stop-hook-skill`, hooks 01 + 02).

### The ad

```
Your AI doesn't have a code problem. It has a taste problem.

Look at any AI-built landing page from the last year.
Inter. Three equal cards. A purple gradient.
"Elevate your workflow." "Unleash your potential." "Seamless integration."

It's not a bug. It's the default.

Taste-Skill is what the model was missing.
It's a vetoed-pattern catalog — forty banned fonts, layouts,
palettes, and copy clichés — that Claude reads before it generates
a single pixel or word.

The AI didn't get worse at design. It never had a taste teacher.
Now it does.

Stop shipping slop →
github.com/huddlerr/taste-skill
```

### Why it passes the pre-flight check

* **Hook ≤130 chars** — 60. ✓
* **Named method present** — "vetoed-pattern catalog." ✓
* **Wrong thing → right thing** — "Inter / three equal cards / purple
  gradient / 'elevate' / 'unleash' / 'seamless'" (the enemy from the
  brief, quoted as evidence) vs. "a vetoed-pattern catalog Claude
  reads before generating a single pixel." ✓
* **CTA is a specific verb** — "Stop shipping slop," not "learn more." ✓
* **No banned filler** — note the banned words *do appear* in the
  body, but only inside scare quotes as the enemy being attacked. The
  pre-flight allows this because the banned-words rule prohibits
  *use*, not *mention*. ✓
* **First-person or no-person** — brand voice; no "you the user are
  amazing" announcer voice. ✓
* **Sentence economy** — average ≈ 9 words; some at 4. ✓

### Cross-domain comparison vs. BELVR

| | BELVR | Taste-Skill |
|---|---|---|
| Credibility wedge | personal: founder's retirement story | technical: specificity of the named pattern catalog |
| Enemy framing | category cliché (athlete-influencer industrial complex) | category default (AI-generated slop) |
| First person | yes — "I retired… I lost four years…" | no — brand voice throughout |
| Banned-word handling | strict avoidance | strict avoidance in product copy + weaponized as the enemy in scare quotes |

Both ads pass the same pre-flight, in the same voice profile, with
zero structural changes to the skill — the brief did all the
adaptation work. That's the test: the skill is the skill; the brief
is the levers.
