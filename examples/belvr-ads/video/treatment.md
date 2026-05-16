# BELVR — 60s Spot Treatment

**Brief.** A Nike-style commercial for BELVR, the operating system for athletes
transitioning out of sport. Tone: quiet, intimate, documentary. Reference frame:
Nike's *Failure* (Jordan, 1997). Less stadium, more kitchen. The athletic
intensity is present — but in service of a different game.

**Format.** 60 seconds. Shoot in vertical 9:16 native for IG / TikTok / Reels.
Cut a 16:9 letterbox for YouTube pre-roll and broadcast.

**Voiceover.** The founder. His own voice. Calm, low, close-mic. He is not
announcing — he is admitting. Treat it like the first sentence of a memoir.

**Music.** Minimal. A single repeating piano motif (Ólafur Arnalds / Nils
Frahm territory). One muffled crowd swell allowed in Scene 2. Hold long
silences. Silence is the score's job.

**Casting.** Cast a real former athlete to play himself. Real face, real
hands, real gym bag in the closet. If possible, the founder himself. No
models.

**Grade.** Cooled-down highlights, lifted shadows, slight green-blue cast
in Scene 1. Warm earth tones in Scenes 4–5. Documentary, not gloss.

---

## Storyboard

### Scene 1 — Cold open  · 0:00 – 0:08

| | |
|---|---|
| **Visual** | Tight close-up: muddy cleats on damp turf at dawn. Soft mist. Stadium empty. A figure in training kit walks slowly past camera, back to us. Color muted, almost monochrome. |
| **Sound** | Distant whistle. Then silence. |
| **VO** | "Every athlete eventually stops." |
| **On-screen** | None. Hold on the image. |

### Scene 2 — Memory montage  · 0:08 – 0:20

| | |
|---|---|
| **Visual** | Four quick cuts, archival home-video grade (grainy, 4:3, letterboxed): (1) a kid kicking a ball against a garage door, (2) a high school stadium under lights, slow-mo cheer, (3) a locker room with name tape on a door, (4) a trophy on a counter beside a wedding photo. |
| **Sound** | The muffled crowd swell rises under the cuts, then drops out hard on the last frame. |
| **VO** | "The whistle blows. The crowd leaves. The locker empties. And then —" |
| **On-screen** | None. |

### Scene 3 — The void  · 0:20 – 0:30

| | |
|---|---|
| **Visual** | Present day. The athlete (35) sits at a kitchen table in soft morning light. Wearing his old training top. He is staring at his phone — calendar open, mostly empty, one event at 2 PM. He sets the phone face-down. He doesn't look up. |
| **Sound** | A clock somewhere. His breathing. Nothing else. |
| **VO** | (almost whisper) "Who am I now?" |
| **On-screen** | Smash cut to black. Serif italic, full screen: ***Who am I now?*** Hold 2 seconds in silence. |

### Scene 4 — The diagnosis  · 0:30 – 0:40

| | |
|---|---|
| **Visual** | Same kitchen, same chair. He opens a laptop. Soft glow of the BELVR interface — today's day, plans laid out: training, mindset, work blocks. He picks up a pen. The light through the window has warmed. |
| **Sound** | The piano motif enters. One note. |
| **VO** | "Turns out it wasn't a motivation problem. It was a structure problem." |
| **On-screen** | Subtle: a single word reveals over the laptop frame — `structure` — Instrument Serif italic, 1-second hold. |

### Scene 5 — The new game  · 0:40 – 0:52

| | |
|---|---|
| **Visual** | Quick cuts of a new life — same intensity, different arenas: (1) lifting alone in a home gym at sunrise, (2) at a desk sketching on paper, (3) walking with a partner, mid-conversation, (4) stretching on a porch with coffee. All shot in the same warm tone. He looks present. Not performing. |
| **Sound** | The piano motif continues, slightly fuller. |
| **VO** | "Same engine. New game." |
| **On-screen** | None. |

### Scene 6 — End card  · 0:52 – 1:00

| | |
|---|---|
| **Visual** | Hard cut to black. Slow type-on, centered: **BELVR**. Beat. Below it, smaller: "The operating system for athletes in transition." Beat. Below it, mono: `belvr.com`. |
| **Sound** | One piano note. Then silence. |
| **VO** | None. |

---

## Production notes

- **No b-roll of cheering crowds.** This is not a comeback spot. The arena is
  behind him.
- **No motivational tropes.** No dramatic music build, no "the only way out is
  through" voiceover. The piece works because it under-promises.
- **Hands and faces.** Linger on hands — calloused, scarred, ringed — and on
  the small unguarded moments when the athlete isn't performing for a camera.
  Avoid hero shots.
- **Wardrobe.** His own clothes. The training top from Scene 3 reappears in
  Scene 5 (lifting). Subtle continuity — same body, different life.
- **Camera.** Handheld on Scenes 1, 3, 4. Locked-off on Scene 2 (memory grain
  should feel found, not shot). Slow dolly on Scene 5.

## What to keep, what to cut

If the spot needs to be a 30, cut Scene 2 and tighten Scene 5 to two cuts.
The non-negotiables: Scene 1 image + opening line, Scene 3 "Who am I now?"
type takeover, Scene 4 diagnosis flip, Scene 6 end card. Everything else is
seasoning.

---

## Kinetic-typography version

`spot.html` + `record.js` + `encode.sh` produce a 28.5-second type-only cut of
this same idea — runnable as a Reel today, no shoot required, no licensing.
It uses the same five beats:

1. BELVR (caret intro)
2. "Every athlete eventually stops."
3. The whistle / crowd / locker rapid cuts
4. *Who am I now?* — the centerpiece
5. The diagnosis flip — motivation → structure
6. End card

Render it: `node record.js && ./encode.sh` → `belvr-spot.mp4`.

This typography cut is meant to run **before** the live-action version is
shot — it's a paid-ad placeholder and a test of the message. Once the live
spot exists, this becomes the cutdown for stories / 6-second pre-roll.
