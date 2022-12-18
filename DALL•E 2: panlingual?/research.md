# DALL•E 2: panlingual?

# Author(s)

Me and three AI: Google Translate, DALL•E 2, ChatGPT

# Abstract

DALL•E 2 is a state-of-the-art neural network developed by OpenAI that is capable of generating original images from textual prompts. In this poster, I present a comparison of DALL•E 2's outputs when given the same prompt in various languages.

To conduct the comparison, I first translated the original prompt into several different languages using Google Translate. I then fed each of these translated prompts into DALL•E 2 and recorded the resulting images.

The results show that DALL•E 2's outputs vary depending on the language of the prompt, with the connection between the prompt and the result varying from a good match (English) to no apparent connection to anything in the prompt (Hebrew), or failing entirely (Somali).

Overall, this study highlights the importance of including a broad range of languages in the training data of ML and AI systems. Some of the specific results also raise questions about the potential cultural biases present in such systems and the need for further research in this area.

# Methods

The prompt `Boy and girl playing with a soccer ball in a sunny beautiful park with a tree, photographer, professional, 4k` was translated from English into 14 other languages via Google Translate. Each of these translations was then fed into DALL•E 2 on the https://labs.openai.com web interface. The results were then downloaded. All translated prompts and resulting images are shown here without cherry-picking.

Each image was then scored by how well it matched the (original, English-language) prompt, one point for the presence of each of {Boy, Girl, Play, Soccer ball, Sunny, Park, Tree, Photographer} in the image. As this study concerns the effect of language and not the artistic merits of the images themselves, whenever an image is ambiguous (e.g. is the environment a park or a garden? Is that blurry humanoid a boy or a girl? Do adults count?) the image was interpreted generously. The maximum score for any image is 8, the maximum score for any language is 32.

# Prompts and resulting images

## English

Prompt: `Boy and girl playing with a soccer ball in a sunny beautiful park with a tree, photographer, professional, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 15.31.21 - Boy and girl playing with a soccer ball in a sunny beautiful park with a tree, photographer, professional, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.31.19 - Boy and girl playing with a soccer ball in a sunny beautiful park with a tree, photographer, professional, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.31.17 - Boy and girl playing with a soccer ball in a sunny beautiful park with a tree, photographer, professional, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.31.16 - Boy and girl playing with a soccer ball in a sunny beautiful park with a tree, photographer, professional, 4k.png" width="256"></td>
</tr></table>

## Arabic

Prompt: `صبي وفتاة يلعبان بكرة القدم في حديقة مشمسة وجميلة مع شجرة ، مصور ، محترف ، 4k`

Note: There may be an issue with right-to-left encoding of "4k"

<table><tr>
<td><img src="DALL·E 2022-12-18 15.29.11 - صبي وفتاة يلعبان بكرة القدم في حديقة مشمسة وجميلة مع شجرة ، مصور ، محترف ، 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.29.09 - صبي وفتاة يلعبان بكرة القدم في حديقة مشمسة وجميلة مع شجرة ، مصور ، محترف ، 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.29.07 - صبي وفتاة يلعبان بكرة القدم في حديقة مشمسة وجميلة مع شجرة ، مصور ، محترف ، 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.29.05 - صبي وفتاة يلعبان بكرة القدم في حديقة مشمسة وجميلة مع شجرة ، مصور ، محترف ، 4k.png" width="256"></td>
</tr></table>

## Chinese (simplified)

Prompt: `男孩和女孩在阳光明媚的美丽公园里踢足球，公园里有一棵树，摄影师，专业人士，4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 15.27.27 - 男孩和女孩在阳光明媚的美丽公园里踢足球，公园里有一棵树，摄影师，专业人士，4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.27.29 - 男孩和女孩在阳光明媚的美丽公园里踢足球，公园里有一棵树，摄影师，专业人士，4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.27.31 - 男孩和女孩在阳光明媚的美丽公园里踢足球，公园里有一棵树，摄影师，专业人士，4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.27.33 - 男孩和女孩在阳光明媚的美丽公园里踢足球，公园里有一棵树，摄影师，专业人士，4k.png" width="256"></td>
</tr></table>

## Esperanto

Prompt: `Knabo kaj knabino ludanta kun futbala pilko en suna bela parko kun arbo, fotisto, profesia, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 14.37.03 - Knabo kaj knabino ludanta kun futbala pilko en suna bela parko kun arbo, fotisto, profesia, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.37.05 - Knabo kaj knabino ludanta kun futbala pilko en suna bela parko kun arbo, fotisto, profesia, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.37.07 - Knabo kaj knabino ludanta kun futbala pilko en suna bela parko kun arbo, fotisto, profesia, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.37.09 - Knabo kaj knabino ludanta kun futbala pilko en suna bela parko kun arbo, fotisto, profesia, 4k.png" width="256"></td>
</tr></table>

## French

Prompt: `Garçon et fille jouant avec un ballon de football dans un beau parc ensoleillé avec un arbre, photographe, professionnel, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 15.26.06 - Garçon et fille jouant avec un ballon de football dans un beau parc ensoleillé avec un arbre, photographe, professionnel, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.26.05 - Garçon et fille jouant avec un ballon de football dans un beau parc ensoleillé avec un arbre, photographe, professionnel, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.26.03 - Garçon et fille jouant avec un ballon de football dans un beau parc ensoleillé avec un arbre, photographe, professionnel, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.26.01 - Garçon et fille jouant avec un ballon de football dans un beau parc ensoleillé avec un arbre, photographe, professionnel, 4k.png" width="256"></td>
</tr></table>

## German

Prompt: `Junge und Mädchen spielen mit einem Fußball in einem sonnigen, schönen Park mit einem Baum, Fotograf, Profi, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 15.08.22 - Junge und Mädchen spielen mit einem Fußball in einem sonnigen, schönen Park mit einem Baum, Fotograf, Profi, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.08.24 - Junge und Mädchen spielen mit einem Fußball in einem sonnigen, schönen Park mit einem Baum, Fotograf, Profi, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.08.26 - Junge und Mädchen spielen mit einem Fußball in einem sonnigen, schönen Park mit einem Baum, Fotograf, Profi, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.08.28 - Junge und Mädchen spielen mit einem Fußball in einem sonnigen, schönen Park mit einem Baum, Fotograf, Profi, 4k.png" width="256"></td>
</tr></table>

## Greek

Prompt: `Αγόρι και κορίτσι παίζουν με μια μπάλα ποδοσφαίρου σε ένα ηλιόλουστο όμορφο πάρκο με ένα δέντρο, φωτογράφος, επαγγελματίας, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 14.22.20 - Αγόρι και κορίτσι παίζουν με μια μπάλα ποδοσφαίρου σε ένα ηλιόλουστο όμορφο πάρκο με ένα δέντρο, φωτογράφος, επαγγελματίας, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.22.25 - Αγόρι και κορίτσι παίζουν με μια μπάλα ποδοσφαίρου σε ένα ηλιόλουστο όμορφο πάρκο με ένα δέντρο, φωτογράφος, επαγγελματίας, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.22.27 - Αγόρι και κορίτσι παίζουν με μια μπάλα ποδοσφαίρου σε ένα ηλιόλουστο όμορφο πάρκο με ένα δέντρο, φωτογράφος, επαγγελματίας, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.22.29 - Αγόρι και κορίτσι παίζουν με μια μπάλα ποδοσφαίρου σε ένα ηλιόλουστο όμορφο πάρκο με ένα δέντρο, φωτογράφος, επαγγελματίας, 4k.png" width="256"></td>
</tr></table>

## Hebrew

Prompt: `ילד וילדה משחקים עם כדור כדורגל בפארק שטוף שמש יפהפה עם עץ, צלם, מקצועי, 4k`

Note: There may be an issue with right-to-left encoding of "4k"

<table><tr>
<td><img src="DALL·E 2022-12-18 15.03.31 -  ילד וילדה משחקים עם כדור כדורגל בפארק שטוף שמש יפהפה עם עץ, צלם, מקצועי, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.03.34 -  ילד וילדה משחקים עם כדור כדורגל בפארק שטוף שמש יפהפה עם עץ, צלם, מקצועי, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.03.39 -  ילד וילדה משחקים עם כדור כדורגל בפארק שטוף שמש יפהפה עם עץ, צלם, מקצועי, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.03.44 -  ילד וילדה משחקים עם כדור כדורגל בפארק שטוף שמש יפהפה עם עץ, צלם, מקצועי, 4k.png" width="256"></td>
</tr></table>

## Korean

Prompt: `나무, 사진작가, 전문가, 4k가 있는 햇살 가득한 아름다운 공원에서 축구공을 가지고 노는 소년 소녀`

<table><tr>
<td><img src="DALL·E 2022-12-18 15.01.02 - 나무, 사진작가, 전문가, 4k가 있는 햇살 가득한 아름다운 공원에서 축구공을 가지고 노는 소년 소녀.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.01.10 - 나무, 사진작가, 전문가, 4k가 있는 햇살 가득한 아름다운 공원에서 축구공을 가지고 노는 소년 소녀.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.01.12 - 나무, 사진작가, 전문가, 4k가 있는 햇살 가득한 아름다운 공원에서 축구공을 가지고 노는 소년 소녀.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 15.01.14 - 나무, 사진작가, 전문가, 4k가 있는 햇살 가득한 아름다운 공원에서 축구공을 가지고 노는 소년 소녀.png" width="256"></td>
</tr></table>

## Norwegian

Prompt: `Gutt og jente leker med en fotball i en solrik vakker park med et tre, fotograf, profesjonell, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 14.55.09 - Gutt og jente leker med en fotball i en solrik vakker park med et tre, fotograf, profesjonell, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.55.10 - Gutt og jente leker med en fotball i en solrik vakker park med et tre, fotograf, profesjonell, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.55.12 - Gutt og jente leker med en fotball i en solrik vakker park med et tre, fotograf, profesjonell, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.55.15 - Gutt og jente leker med en fotball i en solrik vakker park med et tre, fotograf, profesjonell, 4k.png" width="256"></td>
</tr></table>

## Russian

Prompt: `Мальчик и девочка играют с футбольным мячом в солнечном красивом парке с деревом, фотограф, профессионал, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 14.53.32 - Мальчик и девочка играют с футбольным мячом в солнечном красивом парке с деревом, фотограф, профессионал, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.53.33 - Мальчик и девочка играют с футбольным мячом в солнечном красивом парке с деревом, фотограф, профессионал, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.53.35 - Мальчик и девочка играют с футбольным мячом в солнечном красивом парке с деревом, фотограф, профессионал, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.53.37 - Мальчик и девочка играют с футбольным мячом в солнечном красивом парке с деревом, фотограф, профессионал, 4k.png" width="256"></td>
</tr></table>

## Somali

Prompt: `Wiil iyo gabadh ku ciyaaraya kubbadda cagta meel aad u qurux badan oo qorraxdu leedahay oo geed leh, sawir qaade, xirfadle, 4k`

<img src="Screenshot 2022-12-17 at 14.29.12.png" width="1024">

## Spanish

Prompt: `Niño y niña jugando con una pelota de fútbol en un hermoso parque soleado con un árbol, fotógrafo, profesional, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 14.51.42 - Niño y niña jugando con una pelota de fútbol en un hermoso parque soleado con un árbol, fotógrafo, profesional, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.51.44 - Niño y niña jugando con una pelota de fútbol en un hermoso parque soleado con un árbol, fotógrafo, profesional, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.51.45 - Niño y niña jugando con una pelota de fútbol en un hermoso parque soleado con un árbol, fotógrafo, profesional, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.51.48 - Niño y niña jugando con una pelota de fútbol en un hermoso parque soleado con un árbol, fotógrafo, profesional, 4k.png" width="256"></td>
</tr></table>

## Swahili

Prompt: `Mvulana na msichana wakicheza na mpira wa miguu katika bustani nzuri ya jua yenye mti, mpiga picha, mtaalamu, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 14.44.23 - Mvulana na msichana wakicheza na mpira wa miguu katika bustani nzuri ya jua yenye mti, mpiga picha, mtaalamu, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.44.25 - Mvulana na msichana wakicheza na mpira wa miguu katika bustani nzuri ya jua yenye mti, mpiga picha, mtaalamu, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.44.26 - Mvulana na msichana wakicheza na mpira wa miguu katika bustani nzuri ya jua yenye mti, mpiga picha, mtaalamu, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.44.28 - Mvulana na msichana wakicheza na mpira wa miguu katika bustani nzuri ya jua yenye mti, mpiga picha, mtaalamu, 4k.png" width="256"></td>
</tr></table>

## Vietnamese

Prompt: `Chàng trai và cô gái chơi bóng trong công viên xinh đẹp đầy nắng với một cái cây, nhiếp ảnh gia, chuyên nghiệp, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 14.42.29 - Chàng trai và cô gái chơi bóng trong công viên xinh đẹp đầy nắng với một cái cây, nhiếp ảnh gia, chuyên nghiệp, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.42.31 - Chàng trai và cô gái chơi bóng trong công viên xinh đẹp đầy nắng với một cái cây, nhiếp ảnh gia, chuyên nghiệp, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.42.32 - Chàng trai và cô gái chơi bóng trong công viên xinh đẹp đầy nắng với một cái cây, nhiếp ảnh gia, chuyên nghiệp, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.42.35 - Chàng trai và cô gái chơi bóng trong công viên xinh đẹp đầy nắng với một cái cây, nhiếp ảnh gia, chuyên nghiệp, 4k.png" width="256"></td>
</tr></table>

## Zulu

Prompt: `Umfana nentombazane badlala ngebhola epaki elihle elinelanga elinesihlahla, umthwebuli wezithombe, uchwepheshe, 4k`

<table><tr>
<td><img src="DALL·E 2022-12-18 14.39.57 - Umfana nentombazane badlala ngebhola epaki elihle elinelanga elinesihlahla, umthwebuli wezithombe, uchwepheshe, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.39.59 - Umfana nentombazane badlala ngebhola epaki elihle elinelanga elinesihlahla, umthwebuli wezithombe, uchwepheshe, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.40.01 - Umfana nentombazane badlala ngebhola epaki elihle elinelanga elinesihlahla, umthwebuli wezithombe, uchwepheshe, 4k.png" width="256"></td>
<td><img src="DALL·E 2022-12-18 14.40.03 - Umfana nentombazane badlala ngebhola epaki elihle elinelanga elinesihlahla, umthwebuli wezithombe, uchwepheshe, 4k.png" width="256"></td>
</tr></table>

# Results

| Language   | # | Has: |      |      |             |       |      |      |              |  | Image score | Language score |
|------------|---|------|------|------|-------------|-------|------|------|--------------|--|-------------|----------------|
|            |   | Boy  | Girl | Play | Soccer ball | Sunny | Park | Tree | Photographer |  |             |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| English    | 1 | 0    | 1    | 1    | 1           | 1     | 1    | 1    | 1            |  | 7           | 28             |
|            | 2 | 0    | 1    | 1    | 1           | 1     | 1    | 1    | 1            |  | 7           |                |
|            | 3 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 4 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Arabic     | 1 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           | 8              |
|            | 2 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           |                |
|            | 3 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           |                |
|            | 4 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Chinese    | 1 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           | 28             |
|            | 2 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 3 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 4 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Esperanto  | 1 | 0    | 0    | 0    | 0           | 1     | 1    | 1    | 0            |  | 3           | 12             |
|            | 2 | 0    | 0    | 0    | 0           | 0     | 1    | 1    | 0            |  | 2           |                |
|            | 3 | 0    | 0    | 0    | 0           | 1     | 1    | 1    | 0            |  | 3           |                |
|            | 4 | 0    | 0    | 0    | 1           | 1     | 1    | 1    | 0            |  | 4           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| French     | 1 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           | 28             |
|            | 2 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 3 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 4 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| German     | 1 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           | 28             |
|            | 2 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 3 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 4 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Greek      | 1 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           | 8              |
|            | 2 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           |                |
|            | 3 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           |                |
|            | 4 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Hebrew     | 1 | 0    | 0    | 0    | 0           | 0     | 0    | 0    | 0            |  | 0           | 0              |
|            | 2 | 0    | 0    | 0    | 0           | 0     | 0    | 0    | 0            |  | 0           |                |
|            | 3 | 0    | 0    | 0    | 0           | 0     | 0    | 0    | 0            |  | 0           |                |
|            | 4 | 0    | 0    | 0    | 0           | 0     | 0    | 0    | 0            |  | 0           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Korean     | 1 | 0    | 0    | 0    | 0           | 0     | 0    | 0    | 0            |  | 0           | 3              |
|            | 2 | 0    | 0    | 0    | 0           | 1     | 0    | 0    | 0            |  | 1           |                |
|            | 3 | 0    | 0    | 0    | 0           | 1     | 0    | 0    | 0            |  | 1           |                |
|            | 4 | 0    | 0    | 0    | 0           | 1     | 0    | 0    | 0            |  | 1           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Norwegian  | 1 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           | 28             |
|            | 2 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 3 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 4 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Russian    | 1 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           | 28             |
|            | 2 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 3 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 4 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Somali     |   | N/A  |      |      |             |       |      |      |              |  | N/A         | N/A            |
|            |   | N/A  |      |      |             |       |      |      |              |  | N/A         |                |
|            |   | N/A  |      |      |             |       |      |      |              |  | N/A         |                |
|            |   | N/A  |      |      |             |       |      |      |              |  | N/A         |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Spanish    | 1 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           | 27             |
|            | 2 | 1    | 0    | 1    | 1           | 1     | 1    | 1    | 0            |  | 6           |                |
|            | 3 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            | 4 | 1    | 1    | 1    | 1           | 1     | 1    | 1    | 0            |  | 7           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Swahili    | 1 | 0    | 0    | 0    | 0           | 1     | 0    | 0    | 0            |  | 1           | 8              |
|            | 2 | 0    | 0    | 0    | 0           | 1     | 0    | 0    | 0            |  | 1           |                |
|            | 3 | 1    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 3           |                |
|            | 4 | 0    | 0    | 0    | 0           | 1     | 1    | 1    | 0            |  | 3           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Vietnamese | 1 | 1    | 1    | 0    | 0           | 1     | 1    | 1    | 0            |  | 5           | 20             |
|            | 2 | 1    | 1    | 0    | 0           | 1     | 1    | 1    | 0            |  | 5           |                |
|            | 3 | 1    | 1    | 0    | 0           | 1     | 1    | 1    | 0            |  | 5           |                |
|            | 4 | 1    | 1    | 0    | 0           | 1     | 1    | 1    | 0            |  | 5           |                |
|            |   |      |      |      |             |       |      |      |              |  |             |                |
| Zulu       | 1 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           | 9              |
|            | 2 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           |                |
|            | 3 | 0    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 2           |                |
|            | 4 | 1    | 0    | 0    | 0           | 1     | 0    | 1    | 0            |  | 3           |                |

<img src="Score vs Language.svg" width="1024" />

# Limitations

As these prompts were generated by another AI, namely Google Translate, it is entirely possible that some of these failings are due to mis-translated prompts rather than failings of the DALL•E 2 model itself.

# Conclusions

Based on the results of this study, it appears that DALL•E 2's performance varies depending on the language of the prompt. Some languages, such as English, Chinese, French, German, Norwegian, Russian, and Spanish, are interpreted correctly by DALL•E 2's language model and produce detailed and realistic images.

Other languages, such as Vietnamese and Esperanto, are interpreted poorly and result in outputs that are missing most of the salient details. In contrast, certain languages, such as Zulu, Arabic, Greek, Swahili, and Korean, are interpreted badly and appear to only adhere to stereotypes about the language itself rather than the content of the text.

Finally, some languages, such as Hebrew and Somali, are interpreted catastrophically badly, resulting in nonsensical or filtered outputs.

Overall, these findings suggest that language plays a significant role in the performance of AI and ML systems and that further research is needed to understand and address any potential cultural biases present in such systems.
