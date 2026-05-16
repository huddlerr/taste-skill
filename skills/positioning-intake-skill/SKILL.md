---
name: positioning-intake
description: Forces a structured 5-question intake before any downstream copy is generated. Produces a positioning brief covering product, wedge audience, named proof point, enemy, and founder's why. Downstream copy skills (founder-voice, scroll-stop-hook) consume this brief. Use this before writing ads, landing pages, taglines, or pitch decks.
---

# Positioning Intake Skill

## What this skill is for

Almost every bad AI-generated marketing artifact is bad because the
*inputs* were vague — not because the writing was bad. "Write an ad for
my SaaS that helps remote teams collaborate" produces slop because the
brief is slop. This skill replaces that with a forced intake so every
downstream copy task starts from a real positioning brief.

**Trigger this skill whenever the user asks to generate:**
- Social ads (IG, FB, TikTok, LinkedIn)
- Landing page hero copy
- Taglines or one-liners
- Cold email or DM templates
- Sales deck headlines
- Brand manifestos

**Skip this skill when** the user explicitly provides a positioning brief
themselves, or when they're iterating on a draft that already passed intake.

## The Five Questions

Ask these in order. Do not generate any downstream copy until all five
have answers that pass the quality bar described below.

### 1. What does it do? (One sentence. No jargon.)

The user should be able to finish this sentence:

> "[Product] is a [category] that helps [who] [achieve specific outcome]."

**Weak answers:**
- "A platform for productivity" — what kind, for whom, doing what?
- "We help companies leverage AI" — banned: "leverage," "help," "AI"
- "It's like Notion but better" — comparison without specificity

**Strong answers:**
- "BELVR is an operating system that helps retired athletes rebuild
  structure and identity after sport."
- "Stripe is a payments API that helps developers accept money in 7
  lines of code."

### 2. Who's the wedge audience? (Not "everyone.")

The user names ONE buyer archetype. Not a market segment — a person.
Specificity is the test.

**Weak answers:**
- "Small businesses" — too broad
- "Athletes" — too broad
- "Anyone who wants to be more productive" — banned

**Strong answers:**
- "Retired D1 athletes in the 18-month window after their last game,
  before they've fully figured out what's next."
- "Solo founders running a $500K–$5M ARR business who haven't yet hired
  their first marketing person."
- "First-generation immigrants applying to US visa programs from India,
  ages 22–35, currently using paid consultants they don't trust."

### 3. What's the named proof point? (A method, feature, or guarantee.)

Every product has a name for its mechanism — even if the user hasn't
named it yet. Force the naming.

**Weak answers:**
- "Better AI" — what's the mechanism?
- "Personalized recommendations" — what makes them personalized?
- "Best in class technology" — banned

**Strong answers:**
- "The Belief Code — a 5-stage framework for rebuilding identity after
  sport, built from interviews with 200 retired pros."
- "30-second checkout — we hold card data so returning customers don't
  re-enter anything."
- "Same-day approval guarantee — if we don't process your visa packet
  within 24 hours, it's free."

If the user can't name a mechanism, **stop and help them name one.**
The ad cannot be written without it.

### 4. What's the enemy? (The wrong thing the market currently sells.)

Every positioning has an enemy. It's the incumbent answer, the cliché,
or the lazy alternative. The ad's authority comes from naming this and
contrasting against it.

**Weak answers:**
- "Other apps" — too vague
- "The status quo" — banned
- "Boring software" — too generic

**Strong answers:**
- "The retired-athlete-influencer industrial complex — camps, courses,
  one-on-ones that don't survive contact with real life."
- "PHP-era payment gateways with 200-line integrations and dropped
  webhooks."
- "$15,000 immigration consultants who treat every case the same and
  ghost you for weeks."

### 5. What's the founder's why? (Their personal stake. Not "to solve X.")

The why is the credibility wedge. Without it, the ad is just claims.

**Weak answers:**
- "To make X better" — bromide
- "Because I'm passionate about Y" — banned
- "To disrupt the industry" — banned (the word "disrupt" is itself banned)

**Strong answers:**
- "I retired from pro soccer at 27 and lost 4 years to the question 'who
  am I now?' before I figured out what nobody coaches you on. I'm
  building BELVR so the next person loses 4 weeks instead."
- "I built three companies on Stripe and watched payments swallow 30% of
  my engineering team's time every quarter. Never again."

## Output: The Positioning Brief

When all five questions have strong answers, produce a positioning brief
in this format. This brief is the input to all downstream copy skills.

```markdown
# Positioning Brief: [PRODUCT NAME]

## One-liner
[Product] is a [category] that helps [audience] [outcome].

## Wedge audience
[Specific buyer archetype with constraints: stage, sport, geography, role, age,
trigger event, etc.]

## Named proof point
**[Method/feature name]** — [one-sentence description of the mechanism].

## Enemy
[The wrong thing the market currently sells, named specifically. Bonus
points for naming the *pattern* without naming a real competitor.]

## Founder's why
[1–3 sentences of personal stake. First person.]

## Voice anchors (optional)
- Reference founders: [Hormozi / Naval / Sahil / Tucker / Welsh / Custom]
- Banned words for this brand: [add brand-specific bans on top of the standard list]
```

## Common Failure Modes

### "Everyone is the audience"
Push back. Even if the long-term vision is everyone, the *wedge* is one
specific buyer. Ask: "If you could only sell to one type of person for
the next 12 months, who would you bet on?"

### "We're the only one doing this"
Push back. There's always an enemy — even if it's the absence of a
solution. "Nobody is solving this" is a real enemy. So is "everyone
hires consultants for $15K when they should be paying $300."

### "The founder doesn't have a personal story"
Push back. Without a why, the positioning is generic. If the founder
truly has no personal connection, the brand voice must lean *operator*
(third-person, expert, methodical) — never *founder* (first-person,
confessional). Most copy skills assume founder voice; flag the
divergence in the brief.

### "We have many products / features / verticals"
Pick the wedge. Position one product, for one audience, against one
enemy. Multi-product positioning is a *separate* discipline (corporate
brand) and not what direct-response copy needs.

## Anti-patterns

- **Boilerplate intake that the user can answer with throwaway answers.**
  This skill must push back when answers are weak. Do not accept "small
  businesses" as an audience.
- **Pretending intake is done when it isn't.** If the user resists
  answering a question, ask them to *guess* — a guess produces a
  testable brief; a refusal produces vapor.
- **Treating the brief as final.** Positioning iterates. The brief is a
  v0 to test, not a contract.
