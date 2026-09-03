# Connective-Essay Method

Standing reference for the "X read through admissibility/repair/continuation"
essay series (author: Flyxion). Consult this before starting a new essay in
the series; don't re-derive it each time.

This is the *general* recipe abstracted from the pattern in the corpus — not
tied to any one pairing (e.g. "X before Y"). It applies whenever the move is
"take a field's anchor text/system, find what it backgrounded, and show the
admissibility/repair/continuation vocabulary is doing the load-bearing work
the field didn't name."

1. **Pick the anchor.** A specific external text, system, historical episode,
   or piece of formalism — not a vague topic. Something with actual argued
   content the essay can be checked against.

2. **Locate the unexamined premise.** Read the anchor for what it treats as
   primary/given vs. secondary/derived. State the claim — "this field treats
   Y as basic, but X is doing the load-bearing work" — before touching the
   framework.

3. **Name the two senses of the relation before using it.** If the essay
   claims A requires/precedes B, distinguish temporal priority from
   constitutive priority explicitly and early. This heads off the most
   common objection to the genre.

4. **Bring in the minimum apparatus.** Only the admissibility/repair/
   continuation/RSVP vocabulary actually doing work for *this* case — one or
   two constructs, defined, applied in the anchor's own terms. Don't reach
   for the full framework by default.

5. **Work through real cases.** 2-3 examples from the anchor material itself,
   in enough depth that a skeptical reader can check the mapping against the
   source, not just take it on faith.

6. **Actively look for a disconfirming instance.** Search the anchor (or
   wider corpus) for a case that runs the opposite direction or resists the
   mapping. Include it if found. If none is found, say so explicitly rather
   than omitting the step.

7. **State non-triviality conditions.** When would the central move be wrong
   or empty? Independent checkability of the claimed dependency, a genuine
   (not strawmanned) absence in the field's existing account, and survival of
   a deliberate search for counterexamples.

8. **One tentative "why" section.** Short, explicitly speculative, gesturing
   at the broader framework without fully importing it. Flag it as
   underdeveloped.

9. **Self-cite sparingly and only what's verified.** Footnote back only to
   corpus essays actually confirmed finished and checked against — not ones
   inferred from title alone.

10. **Compile clean.** XeLaTeX, no overfull boxes, page count proportional to
    the actual argument rather than padded to a target length.

## Notes for this repo

- Shared preamble/macros live in `preamble.tex`.
- Author on every essay: **Flyxion**.
- Verified self-citable corpus in this repo: `theory-rsvp.html` (RSVP),
  `theory-holonomy.html` (Distinction Holonomy), `theory-spherepop.html`
  (Spherepop), `theory-unified.html` (Distinction and Continuation). Cite
  these by their actual claims, not by title guess.
- *Contradiction and Continuation* (the Priest-Flyxion logic book) is now a
  **verified** corpus item, per author-supplied structure: six parts, 24
  chapters, ~109-111 pages. Part I: logic as constraint (x⇝_R y, Belnap-Dunn
  bilattice, local/global consistency vs. constraint closure vs.
  representational coherence, contradiction/obstruction/refusal). Part II:
  worlds and admissibility (splits admissibility R from modal accessibility
  𝓡; reconstructs Priest's non-normal worlds as a suspended compositional
  rule, downgrading an initial "non-normal world = refusal" mapping as a
  deliberate negative result). Part III: gaps (insufficient support) vs.
  gluts (incompatible support, not auto-deleted); paraconsistency via failure
  of disjunctive syllogism's polar-exclusivity assumption at overdetermined
  points; classical logic recovered via a repair/merge operation (LPm) at
  single-proposition level. Part IV: truth-as-construction orthogonal to
  support; resolution parameter for vagueness/degree; "dispersion
  obstruction" (local step agreement can still fail to add up to global
  agreement — compatibility ≠ continuity ≠ persistence). Part V (deliberate
  stress-test, allowed to disagree with Priest): identity-under-transport as
  invariant of admissible continuation, not repeated primitive equality;
  typed transition-object account of change vs. Priest's dialetheic
  contradictory-state-at-an-instant; continuous RSVP vector-field account of
  motion left in explicit unresolved "Tension" against Priest's
  contradictory-occupancy account; closes on "a state doesn't contain enough
  structure to explain its own continuation." Part VI: additive
  evidence-sheaf formalism (witness tokens per patch, a cochain-level
  coherence defect — explicitly *not* literal H¹, which is always zero by
  construction, correcting an earlier error), a Mutual Non-Determination
  Proposition (logical status T/F/B/N and structural coherence don't
  determine each other), and a repair functional over evidence fit,
  polarity-repair cost, and action-relative coherence liability. Negative
  results (non-normal worlds ≠ refusal; bilattice join ≠ sheaf gluing; glut ≠
  H¹ obstruction) are treated as findings, not gaps. Open problem left
  unresolved: transition-rule behavior when the admissibility regime itself
  changes state to state (R_{x_t} ≠ R_{x_{t+1}}).
  External sources it's read against: Priest, *In Contradiction* (2006);
  Priest, *An Introduction to Non-Classical Logic* (2nd ed., 2008); Belnap
  (1977) / Dunn (1976) bilattice; Heyting (1956); Kripke (1963); Lewis
  (1973); Łukasiewicz (1920/1970). Self-referential sources: *Holonomic
  Space* (admissibility presheaf, sheaf/gluing theorem, Čech coboundary, H¹,
  Conjecture 28.1); *The Ecology of Distinctions* (TARTAN Admissibility
  Theorem, Coherence Tile/Recursive Tiling, Sheaf-Variational Equivalence,
  compatibility-vs-dispersion-obstruction); *"Against Chain of Thought"*
  (Chain of Memory formalism, M₀→...→Mₖ, RSVP field encoding — explicit
  warning against conflating CoM reasoning trajectories with physical time).
  Essays may now cite this book's specific claims by part/chapter as listed
  above. Still do **not** invent claims beyond what's listed here, and still
  do not assert specific content for any other unverified corpus item (e.g.
  a MIRI-style ledger critique, an admissibility-substrates monograph) unless
  the author supplies the same level of verified detail for it.
- No LaTeX toolchain (xelatex/pdflatex) is installed in this environment and
  it's not installable here (Ubuntu Core, no apt/dnf). Essays are written to
  compile cleanly under XeLaTeX but have not been build-verified in this
  session — flag this to whoever compiles them next.
