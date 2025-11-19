# Author Guidelines

## Checklist for initial submissions

Please ensure that the following are true before making a submission to the journal.
Submissions may be returned to authors who do not adhere to these guidelines.

- [x] The submission has not been previously published, nor is it under consideration by another journal (or an explanation has been provided to the editors).

- [x] The document submitted is in **.PDF** (however produced), **.DOCX** (MS Word/OnlyOffice), **.ODT** (LibreOffice/Calligra Suite), or **.RTF** (rich text) format.

- [x] The text uses clear and concise English and is consistent in punctuation, spelling (American vs. British), and general formatting.

- [x] Full bibliographical information is provided, including URLs for references to online resources and the dates they were accessed.

- [x] The document is clearly readable, uses standard font sizes and typeface styles, and all illustrations, figures, and tables are included.

- [x] The document has been prepared for anonymous review, following [the instructions described below](#preparing-the-submission-for-anonymous-review).

- [x] Those submitting a [special issue proposal](https://mulpress.mcmaster.ca/jhap/announcement/view/18) have used the dedicated [submission form](https://mulpress.mcmaster.ca/public/journals/1/SpecialIssueSubmissionForm.pdf) and have contacted the [editors for special issues](https://jhaponline.org/about/editorialTeam) directly.

## Checklist for final versions for publication

Please ensure that the following are true before submitting the final version of a work accepted for publication.

- [x] The file for the final version is in **.DOCX** (MS Word/OnlyOffice), **.ODT** (LibreOffice), **.EPUB** (eBook), **.RTF** (rich text), **.HTML** (web page), **.TEX** (LaTeX), or **.MD** (markdown) formats.

- [x] An abstract (100–200 words) has been provided, either in the document or separately to the managing editor.

- [x] The text has been proofread carefully by a fluent speaker of English.

- [x] Steps have been taken to ensure the work is optimized for producing multiple output formats, as [described below](#optimizing-for-multiple-output-formats).

- [x] Full bibliographical information is provided, including URLs for references to online resources and the dates they were accessed.

- [x] The citations and bibliography style are consistent with those used by the journal. [See below for details.](#citations-and-bibliographies)

- [x] The journal's conventions regarding headings, punctuation, and so on, [as outlined below](#conventions-regarding-headings-punctuation-etc), are followed as closely as possible.

## Preparing the submission for anonymous review

To ensure the integrity of the anonymous peer-reviewing process for submissions, every effort should be made to prevent the identities of the authors and reviewers from being known to each other.
This involves the authors, editors, and reviewers (who upload documents as part of their review) checking to see if the following steps have been taken with regard to the text and the file properties:

* The authors of the submission have deleted their names from the text. References to the authors' own works should be excluded.
* Anything identifying the authors should also be removed from the properties of the file, its metadata, and revision and undo history.

## Optimizing for multiple output formats

JHAP publishes its accepted articles and reviews in a variety of output formats, for accessibility, convenience, and other purposes.
Your document therefore should not be composed with one particular output in mind.
Authors should focus on the *content* and *structure* of their document rather than its appearance when printed, or what it looks like in one program in particular.

The best way to do this is to separate style and content. How this is done depends on the software and formats used during composition.

### Separating style and content with traditional word processors

Separation of style and content with a traditional word processor requires the consistent use of common text and paragraph styles such as “Heading 1”, “Heading 2”, “Block Quotation”, etc.
These styles are usually available from a drop-down on the word processor's toolbar.
These should be used instead of applying things like the font face, font size, indentation, color, spacing, and so on, which modify appearance directly.
Consistent use of named styles clarifies the roles things play in the document's overall structure, making it unambiguous what is meant as a section heading, what is meant as a subsection heading, and so on.

For the purposes of review, the precise configuration of the styles can be changed, but usually it is best to maintain something close to the default values.
For example, a 12 point serif font with double spacing for the body text will ensure readability for the reviewers.

When applying styles such as “*emphasis*” to smaller spans of text, care should be taken with regard to their exact boundaries. For example, when an individual word is emphasized (italicized), do not apply the style to the spaces or punctuation surrounding it.
It is easy to make mistakes with WYSIWYG word processors which seem small, but they can lead to oddities especially when the same document is presented in a different way.

### Separating style and content in markup languages (LaTeX, markdown, html)

It is typically easier to separate style and content in markup languages, as there are clear conventions for marking something as a heading, or a quotation, etc. visibly within the file.
HTML has tags specifically for headings of specific levels (`<h1>…</h1>`), for block quotations (`<blockquote>…</blockquote>`), for emphasis (`<em>…</em>`) and the like. These should be used in place of directly stylized elements.

Authors should try to limit themselves to environments and formatting elements that describe the *structure* of their document, rather than the precise appearance.

E.g., in LaTeX, one should use:

```tex
\section{Title of Section}
```

Rather than something that directly modifies the text appearance like:

```tex
\bigskip
\begin{Large}
\textbf{Title of Section}
\end{Large}
```

Accepted papers and reviews that are submitted in a plain-text-based markup format such as markdown, html, or LaTeX will likely be typeset and published in a shorter amount of time.

## Citations and bibliographies

Citations and bibliographical listings published by JHAP make use of the [*Chicago Manual of Style*](https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html) (17th edition) Author-Date style.

Compatibility with this style can be ensured by utilizing the corresponding [Citation Style Language](https://citationstyles.org/) (CSL) specification, or by making use of software that can apply CSL styles automatically for you, such as [Zotero](https://www.zotero.org/), [Mendeley](https://www.mendeley.com/), the [citation-style-language](https://ctan.org/pkg/citation-style-language) LaTeX package, or [pandoc's implementation of citeproc](https://pandoc.org/MANUAL.html#citations).
The Chicago author-date .csl file and thousands of others can be found in [the CSL styles repository](https://github.com/citation-style-language/styles).

Citations in this style typically appear in the body of the text in parentheses, containing the author's name and year of publication, followed (when appropriate) by a comma and specific textual location such as a page, page range or section number: (Raven 1998, 36).
Multiple works are separated by semi-colons (Marion 2006; Tuborg 2008).
If the cited author's name appears in the sentence, then it may simply be followed by the year (and textual location, if applicable) in parentheses, for example if it mentions Bertrand Russell (1903, secs. 10–12).

Most citations should be in the body of the text. Footnotes should never be purely citational. A footnote may introduce a citation and then comment on it, or may include citations specifically relevant to other content in the footnote.

Citations to specific pages, sections, etc., should include the full range such as (Landini 1997, 127–129), rather than use “f.” or “ff.”.

In the bibliography, books are listed with the name, publication year, title, place of publication, and publisher as so:

> Fricker, Miranda. 2007. *Epistemic Injustice: Power and Ethics of Knowing*. New York: Oxford University Press.

If there are multiple authors, subsequent names begin with the given name. Journal articles should specify the volume, optionally the issue number, and page range as follows.

> Sultanescu, Olivia, and Claudine Verheggen. 2019. “Davidson’s Answer to Kripke’s Sceptic.” *Journal for the History of Analytical Philosophy* 7(2): 9–28.

The abbreviations “ed.” or “eds.” follow the name of editors prior to the date in works without a primary author:

> Biggs, Stephen, and Heimir Giersson, eds. 2021. *The Routledge Handbook of Linguistic Reference*. New York: Routledge.

Book chapters and anthology contributions place the editors' names after both the contribution title and book title, followed by the page range, place of publication and publisher.

> Smith, Barry C. 1998. “On Knowing One’s Own Language.” In *On Knowing Our Own Minds*, edited by C. Wright, B. C. Smith, and C. Macdonald, 391–428. Oxford: Clarendon Press.

Full given names are used for authors and for editors of works listed at the start of an entry, unless not included in the original publication.
Initials for given names may be used for translators or editors appearing later in the entry, as above.

Although it is not required, the journal encourages submission of structured bibliographic information in a CSL .json, CSL .yaml, or BibTeX .bib database. This helps to accelerate production, and may lead to quicker publication.

## Conventions regarding headings, punctuation, etc.

1) Section Headings (Heading 1) Should Be In Title Case, but Subsection (Heading 2+) and lower headings should be in sentence case.

2) Ellipses … are used for deletions inside quotations, and [brackets] for insertions. Use of both at the same time […], paradoxically suggesting that a deletion has been inserted, should be avoided.

3) JHAP uses em-dashes without spaces around them—like this—for breaking up text, rather than en-dashes – like this – with spaces. En-dashes are used for number ranges, such as 131–156. Dashes should not be confused with hyphens, which appear in hyphenated words like space-time, nor with the mathematical minus/subtraction sign −.

    Traditional word processors often try to autocorrect typed hyphens to the correct punctuation sign, but often make mistakes, and the results should be checked. In LaTeX and pandoc markdown, a single ASCII `-` can be used to produce a regular hyphen (U+002D), two `--` to produce a unicode en-dash – (U+2013), three `---` to produce an em-dash — (U+2014), and a hyphen in math mode `$-$` to produce the subtraction sign − (U+2212).

4) Dates should be in an international format but with the month spelled out, such as “5 May 1915”, rather than the US format “May 5, 1915”, if possible.

5) Common English names of places are used rather than native names, if different, e.g., “Munich”, not “München”.

6) Authors may use either single quotation marks (as is 'typical' in British English) or double quotes (as is “typical” in American English) primarily, as they prefer, but should be consistent in their choices.

7) Unnecessary Latin-isms such as “cf.” and “viz.” should be avoided in favor of ordinary words such as “compare” and “namely”. The Latin abbreviations “i.e.” or “e.g.” may be used sparingly. They should be followed by commas in most cases, e.g., like this.

## Articles

Although the journal sometimes publishes longer articles, we recommend that they stay within reasonable bounds, between 6000 and 12000 words in length.
Whenever possible, each submitted article is doubly refereed. The process is fully anonymous. JHAP articles are published under a Creative Commons License and authors retain full copyright.

To make a new article submission: [click here](https://jhaponline.org/submission/wizard?sectionId=1).

## Reviews and Critical Notices/Studies

Reviews are usually commissioned by the Review Editors. If you would like to make a suggestion or volunteer to write a review, please contact us.

JHAP publishes two kinds of reviews of books.

*Reviews* are informative pieces (about 2000–4000 words) that present the content of the book and raise some critical points.

*Critical notices/studies* are longer pieces (about 4000–6000 words) that present the content of the book and provide more in-depth discussion of some critical points.

Whatever the format, criticisms should be raised in a fair and respectful manner.

JHAP also welcomes contributions in the style of “author meets critics” to be considered for a journal’s special issue.
These symposia generally consist of 2–4 pieces (of about 4000-6000 words) by different contributors, and will discuss some central themes of the book, followed by the author’s response (about 4000–8000 words).

To make a new review or critical notice/studies submission: [click here](https://jhaponline.org/submission/wizard?sectionId=2).

## Discussions

We are not currently accepting Discussion submissions.
