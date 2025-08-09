# Short story writing comparison between various models

## Motivation

Compare the relative performance of models on a common fiction-writing prompt.

## Prompt

Write chapter 1 of an HFY story, but instead of focussing on human physicality, focus on the mind. The premise is that cooperate-compete is a continuum — too far towards compete, and species wipe each other out, too far towards cooperate and they never have a drive to leave their home-world. Most of the interplanetary civilisations are much more cooperative than humans are and found it easy to agree to treaties that require limited growth; most of the species known to the interplanetary civilisations are even more cooperative and never developed space travel at all due to the easy path to space being via weapons of war which they never needed to invent. The one known space-faring species that is more aggressive than humans, spends most of its time fighting itself rather than expanding, though forces from them occasionally terrorise the rest of the galactic community.

## Results

| Model | Word count (including title) | Observations |
|-------|------------|-----------------------|
| [4o](4o.md) (custom instructions) | 770 | Confused with one character both using and rejecting another’s repeated word “Fascinating” (realistic but bad writing) |
| [o1-mini](o1-mini.md) | 735 |  |
| [o1-preview](o1-preview.md) | 1802 | Just about acceptable length for “chapter 1”. |
| [OpenAI-unknown](OpenAI-unknown.md) (custom instructions) | 582 | My personal preference for actual writing style. |
| [GPT-5](GPT-5.md) (custom instructions) | 580 |  |
| [Claude Sonnet 4](Claude-Sonnet-4.md) | 1012 | Marginally acceptable length; my personal preference for getting the point of the idea. |

**General observations**:
- All models understood the setting
- All of these outputs are significantly better than most of the stuff I've read on r/HFY, including the stories I liked
- These are all world building, not plot. OK, so it's chapter 1, this is more of a hook… but it would be nice if there was a story as well as a world for that story.
- Current preference: **Claude Sonnet 4** for capturing the idea, **OpenAI-unknown** for style.
