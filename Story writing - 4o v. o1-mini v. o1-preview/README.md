# Short story writing comparison between various models

## Motivation

Compare the relative performance of models on a common fiction-writing prompt.

## Prompt

Write chapter 1 of an HFY story, but instead of focussing on human physicality, focus on the mind. The premise is that cooperate-compete is a continuum — too far towards compete, and species wipe each other out, too far towards cooperate and they never have a drive to leave their home-world. Most of the interplanetary civilisations are much more cooperative than humans are and found it easy to agree to treaties that require limited growth; most of the species known to the interplanetary civilisations are even more cooperative and never developed space travel at all due to the easy path to space being via weapons of war which they never needed to invent. The one known space-faring species that is more aggressive than humans, spends most of its time fighting itself rather than expanding, though forces from them occasionally terrorise the rest of the galactic community.

## Results

* [4o](4o.md) (with custom instructions)
* [o1-mini](o1-mini.md)
* [o1-preview](o1-preview.md)
* [GPT-5](GPT-5.md) (with custom instructions)
* [Claude Sonnet 4](Claude-Sonnet-4.md)


## Discussion

* All models understood the setting
* 4o got confused with one character both using then rejecting another repeating the word "Fascinating"; while this is realistic (for humans, at least), it's not good writing
* Output of 4o, o1-mini, GPT-5 is way too short for the task of "write chapter 1", even in the context of web fiction and including the title in the word count — 4o: 770 words; o1-mini: 735 words; GPT-5: 582 words; Claude Sonnet 4 is marginal at 1012 words; o1-preview is just about acceptable at 1802 words.
* All of these outputs are significantly better than most of the stuff I've read on r/HFY, including the stories I liked
* Current personal preference is Claude Sonnet 4 for getting the point of the idea, GPT-5 for actual writing style.
* General observation: this is world building, not plot. OK, so it's chapter 1, this is more of a hook… but it would be nice if there was a story as well as a world for that story.
