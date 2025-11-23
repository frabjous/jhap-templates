---
title: JHAP Typesetting Guide
date: Last edited 21 November 2025
css: documentation.css
header-includes: |
  \usepackage{principia}
---
(Relatively advanced topics marked with *.)

:::{#githubwarning}
*Warning*: This guide is written in, and is about, **pandoc's version** of markdown.
However, this document is also stored in a code repository on GitHub.
GitHub provides a preview of markdown documents.
However, it assumes these documents use **GitHub's version** of markdown, which is less sophisticated than pandoc's.
If you are viewing this directly on GitHub, it will **not appear correctly** in some places.
If this is a problem, either download the raw text of this document and process it with pandoc, or contact the repo owner for a PDF.
:::

# Introduction

## Overview

JHAP uses an instance of the [Open Guide Typesetting Framework](https://github.com/frabjous/open-guide-typesetting-framework) (OGTF), developed by JHAP editor Kevin Klement, to produce the final versions of its articles and review. Users will be given the URL to access it and invited to create an account.

OGTF has a built-in web-based markdown editor with live previewing capabilities, the [Open Guide Editor](https://github.com/frabjous/open-guide-editor) (OGE).

The production process centers around creating a cleaned up version of the document being typeset, using pandoc's markdown format, as well as a CSL JSON bibliography file that can be used along with it.
Once work on them is completed, and proofs corrected by authors, these files are then converted to four different output files, two PDFs with different layouts, an HTML version, and an ePub version, for publication.

## Knowing the basics

It is recommended that those using the framework should have read or be familiar with the following resources. They are too much to memorize, but can always be re-consulted when necessary.

* The [usage documentation for OGTF](https://github.com/frabjous/open-guide-typesetting-framework/blob/main/doc/usage.md).

* The [usage documentation for OGE](https://github.com/frabjous/open-guide-editor/blob/main/doc/basic-usage.md).

* The [markdown primer](./markdown-primer.html) accompanying this guide. This may not be necessary for those who already have their feet wet.

* The [pandoc user's guide](https://pandoc.org/MANUAL.html), especially the section on on [pandoc's markdown](https://pandoc.org/MANUAL.html#pandocs-markdown).

* The [guidelines for authors](https://jhaponline.org/about/submissions) distributed on jhaponline.org for those submitting to the journal.

* This guide.

There is additional documentation for both OGTF and OGE in their GitHub repositories, but it is probably not relevant for most JHAP editors, except those who want to really get their hands dirty.

## Understanding the JHAP production workflow

The process of producing an accepted JHAP article or review can be visualized according to the following flowchart.
This seems complicated, but if all goes well, the only parts that require much human effort are the two places indicated by the gold stars.

![JHAP production flowchart](./images/jhapworkflow.svg)\

The process of distributing and correcting page proofs has been left off the chart above for simplicity.
The [OGTF usage documentation](https://github.com/frabjous/open-guide-typesetting-framework/blob/main/doc/usage.md) goes into more detail about the workflow, including proofs.

# General Typesetting

## Smart punctuation

Pandoc typically does a good job converting non-smart punctuation to smart punctuation.
For example, it changes `"` and `'` to one of `“`, `”`, `’`, or `’`, depending on context, three peroids `...` to a unicode elipsis `…`, as well as `--` and `---` to en-dashes `–` and em-dases `—`, respectively.

If preferred, or if pandoc doesn't handle something correctly, the "smart" characters can be used in directly the markdown as well.
The relevant characters are available from the unicode character insertion widget (`Alt-u`) in OGE.

Note that citeproc will automatically use en-dashes in citations and bibliography page ranges. It is not necessary, and usually best not, to use en-dashes in bibliographic fields, or in the markdown citations. Hyphens will do.

## Using the correct unicode characters

In mathematical contexts, authors often incorrectly use  `<` and greater than `>` symbols instead of actual angle brackets `⟨…⟩ ` (or LaTeX's `\langle` and `\rangle`) for ordered tuples. Change the ugly $<a, b>$ to to $⟨a, b⟩$.

Similarly, authors sometimes use box drawing symbols such as `┌` (U+250C) and `┐` (U+2510) instead of true corner quotes `⌜` (U+231C) `⌝` (U+231D) for schematic hybrids. These should be replaced.

The correct symbols can be found in the unicode insertion dialog in OGE (`Alt-u`).

# CSL Bibliographies

## Limited HTML tag support

CSL bibliographies are meant to be compatible with all sorts of different software, not just markdown.
Markdown cannot be used in them.
However, CSL fields have support for a small number of HTML tags, for applying extra styling to parts of fields.

:::{#cslhtmltable}
+--------------+----------------------------+--------------------------+
| italics      | `<i>italics</i>`           | <i>italics</i>           |
+--------------+----------------------------+--------------------------+
| bold         | `<b>bold</b>`              | <b>bold</b>              |
+--------------+----------------------------+--------------------------+
| small caps   | `<sc>small caps</sc>`      | <span class="smallcaps">small caps</span>      |
+--------------+----------------------------+--------------------------+
| subscripts   | `H<sub>2</sub>O`           | H<sub>2</sub>O           |
+--------------+----------------------------+--------------------------+
| superscripts | `the 38<sup>th</sup> time` | the 38<sup>th</sup> time |
+--------------+----------------------------+--------------------------+
:::

One could use, e.g, `The Method of the <i>Tractatus</i>` to ensure that "Tractatus" in italicized, even in the name of a chapter or article.

Citeproc will handle these correctly in the LaTeX-based outputs as well.

## Marking an item as forthcoming

It does not work to enter "forthcoming" in place of the year in the "issued" field.

Instead, add the field "status" and set its value to "forthcoming".

## Preventing auto-capitalization

With the CSL style we are using, citeproc will apply title case to titles and container titles, and capitalize most words. Especially if the title is not in English, or makes use of technical notation, this can be inappropriate.

There are two ways to prevent this.

For non-English titles, add the "language" field, and enter something that does not begin with "en" (a non-English [locale code](https://simplelocalize.io/data/locales/)). In that case, it will not change the capitalization pattern from what is in the bibiography field.

In situations in which only part of the title should not be in title case, CSL supports one additional html tag, which can be applied internally within a title field to prevent citeproc from applying the capitalization rules for the style.

`Spin wave dispersion on the <span class="nocase">nm</span> scale`

:::{.result}
Spin Wave Dispersion on the nm Scale
:::

## Lazy consistency

Sometimes it is easiest and perhaps advisable to remove less important information from bibliography entries for the sake of consistency. For example:

- If DOI fields were supplied for some items, but not others, it may be difficult to track down the others. To avoid the inconsistent look of some having DOI links but not others, they could all be removed.

- Often both volume and issue numbers are given for journal articles, but sometimes just the volume number. If consistency is preferred, consider removing all of the issue numbers.

## Using anystyle directly

When free-form bibliographies are found in the main uploaded file, and the "extract from main file" button is used on the bibliography page, the free-form bibliography is parsed with an open source Ruby progam called "anystyle".

In some circumstances, it may be useful to run anystyle directly to parse additional free-form bibiography items.

Anystyle has a web interface that can be used without local installation. Visit:

<https://anystyle.io>


Download/save the parsed items as a CSL JSON file and import it into the bibliography using the file upload option in the upper right of the bibiography page.

Anystyle is not perfect, so its result should be checked afterwards.

# Markdown

## Citations

Pandoc's citation system is fairly unique to its version of markdown.
Even those knowledgeable about markdown in general may not know how it works.
See the section on citations in the accompanying [primer about pandoc's markdown](./pandoc_mrkdown_primer.html#citations), and for more information, the [citations section in the Pandoc user's guide](https://pandoc.org/MANUAL.html#citations) for more information.

Each bibliographic item is given a hyperlink target id of the for `#ref-[key]` where `key` is the citation id/key from the bibliography list.
You can manually create links to them:

```markdown
A different theory was advanced by Susan Stebbing in
*Logic in Practice* [(LiP)](#ref-stebbing1934).
```

:::{.result}
A different theory was advanced by Susan Stebbing in
*Logic in Practice* [(LiP)](#ref-stebbing1934).

:::

## Numbered examples

It is quite common in analytic philosophy for authors to display certain sentences or formulas and tag them with a number to refer back to them later.

Pandoc has a method for creating these, and referring back to the numbers later, so that the number in the example, and the later references, update together if more are added.

```markdown
Here are two examples.

(@good) This sentence is grammatical.

(@bad) Grammatical this sentence only Yoda thinks is.

As you can, see example, sentence (@good) makes more sense
than sentence (@bad).

```

:::{.result}
Here are two examples.

(@good) This sentence is grammatical.

(@bad) Grammatical this sentence only Yoda thinks is.

As you can see, example sentence (@good) makes more sense than sentence (@bad).
:::

This has the advantage that if another example needs to be added before one that already exists, the reference numbers will change to match their targets.

See the pandoc user's guide section on [numbered example lists](https://pandoc.org/MANUAL.html#numbered-example-lists) for more information.

## Tables

Pandoc supports multiple conventions for representing tables using plain text. Here are two.

```markdown
This is a "simple table":

One  Two
---- -----
A    B
C    D
---- -----

This is a "pipe table", and has a caption:

| Left column         | Right column        |
|---------------------+---------------------|
| Cell in upper left  | Cell in upper right |
| Cell in lower left  | Cell in lower right |
Table: A nice table
```

:::{.result}
This is a "simple table":

One  Two
---- -----
A    B
C    D
---- -----

This is a "pipe table", and has a caption:

| Left column         | Right column        |
|---------------------+---------------------|
| Cell in upper left  | Cell in upper right |
| Cell in lower left  | Cell in lower right |
Table: A nice table

:::

The [pandoc documentation](https://pandoc.org/MANUAL.html#tables) goes into more details.

Plain text formats and plain text editors are less than ideal for editing tables.
Using a plain text table generator with a graphical interface such as the one at this URL can make the process simpler:

[Online Tables Generator](https://www.tablesgenerator.com/markdown_tables){target=_blank} (<https://www.tablesgenerator.com/markdown_tables>{target=_blank})

Edit or create the table there, and copy and paste the result it shows into the document being edited.

If a table is relatively complex, creating the tables using HTML and LaTeX separately, using "raw html" and "raw latex" tags, as [described below](#raw-html-and-latex), and giving separate HTML and LaTeX code, is an option. The table generator linked above can also export HTML or LaTeX markup for tables.

There are also some tips for handling tables in [the OGE editor](#the-oge-editor) section below.

## Handling line breaks

Non-breaking spaces can be used to prevent line breaks at awkward places in a sentence. The unicode non-breaking space (U+00A0) can be used, and will be indicated as different from a regular space in the editor with a light gray dot. This is the first character in the editor's insert special characters table (`Alt-U`). The HTML entity code `&nbsp;` can also be used. Both should prevent line breaks even in LaTeX-based outputs.

There are times it is better to use a thin non-breaking space (U+202F) instead, as in initials. This is the third item in the unicode insertion table (`Alt-u`). (Check the tooltip when hovering over it.) You can also use the HTML entity `&#x202F;`. 

```markdown
G.&#x202F;E. Moore published *Principa Ethica* in 1903.
```

:::{.result}
G.&#x202F;E. Moore published *Principa Ethica* in 1903.
:::

A manual line break can be forced by ending a line with a backslash, ensuring that nothing, not even spaces or tabs, appear afterwards.

This can also be used to insert blank space between paragraphs.


```markdown
Lorem ipsum\
dolor sit amet.

\

\

Consectetur adipiscing elit.
```

:::{.result}
Lorem ipsum\
dolor sit amet.

\

\

Consectetur adipiscing elit.
:::

There is almost never a good reason to do either of those things.

More common is the need to typeset verse, mailing addresses, etc., where the linebreak pattern should be observed throughout. This can be accomplished by preceding each line with the pipe symbol `|`.

```markdown
| And hast thou slain the jabberwock?
| Come to my arms my beamish boy!
| O frabjous day! Calooh! Callay!
| He chortled in his joy.
```

:::{.result}
| And hast thou slain the jabberwock?
| Come to my arms my beamish boy!
| O frabjous day! Calooh! Callay!
| He chortled in his joy.
:::

## Raw HTML and LaTeX*

All JHAP's output file types have either HTML or LaTeX as intermediate file types.

Pandoc allows the insertion of verbatim or "raw" HTML into HTML-based documents, and verbatim or "raw" LaTeX code directly into LaTeX-based documents. These raw insertions are not converted or changed by pandoc, but directly passed to the intermediate formats used to produce the final ones.

This can be useful if the best ways to achieve the desired effects in the two types of output are different or complicated enough that the same markdown won't do.

Raw insertions are achieved by using `{=latex}` or `{=html}` markers on verbatim spans or divs.

`````markdown
The end of this sentence is written using `<em>HTML</em>`{=html}`\emph{LaTeX}`{=latex}.

```{=latex}
This paragraph uses \LaTeX.
```

```{=html}
This paragraph uses <strong>HTML</strong>.
```
`````

Because you are most likely viewing an HTML-based version of this guide, you'll only see the HTML messages below, and not the LaTeX ones.

:::::{.result}
The end of this sentence is written using `<em>HTML</em>`{=html}`\emph{LaTeX}`{=latex}.

```{=latex}
This paragraph uses \LaTeX.
```

```{=html}
This paragraph uses <strong>HTML</strong>.
```
:::::

The LaTeX-based formats will ignore what is put in the `{=html}` spans or divs, and the HTML-based formats will ignore what is in the `{=latex}` spans and divs. Most often you should include both kinds, so all output formats are covered.

**Warning**: Because these raw insertions are not processed by pandoc at all, regular puncutation is not made into smart punctuation, etc. Be sure to change `'` to `’`, and `"…"` to `“…”` when used between HTML tags (not inside them), and something like `"this"` to ` ``this''` in LaTeX, and so on.

## YAML blocks and adding LaTeX packages*

It is possible in various ways to make use of additional capabilities supported by LaTeX in mathematics and elsewhere. This includes adding packages not loaded by the template by default. Since LaTeX packages must be loaded in the preamble, they can only be inserted using a metadata variable for including things in the document header.

This requires using a YAML metadata block at the start of the document. These blocks begin and end with three hyphens alone on a line.

```markdown
---
header-includes: |
  \usepackage{principia}
---
```

This will allow the use of Landon Elkind's `principia` LaTeX package in math mode for the PDF output files.

To also enable them for HTML-based outputs, the [Fregeifier](#the-fregeifier-filter) can be used and will also pull in these packages.

YAML blocks can be used for other things as well, such as adding additional metadata. (See [the pandoc documentation](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block).) This is not often useful for JHAP, however.

# The Fregeifier Filter*

If unusual mathematical or logical symbolism is used inside math mode, sometimes pandoc's conversion to non-LaTeX formats either cannot handle the symbolism at all, or produces very bad output.


To remedy this, JHAP's pandoc set-up makes use of a [pandoc filter]() called "[The Fregeifier](https://github.com/frabjous/fregeifier)". Math mode material that occurs inside [spans and divs](./markdown-primer.html#spans-and-divs) marked with the `.fregeify` class will be converted (using LaTeX) to scaleable svg images for use in the HTML-based formats, and inserted in the appropriate place.


```markdown
:::{.fregeify}
$$
{\setlength{\GGlinewidth}{53pt}
 \setlength{\GGthickness}{1pt}
 \setlength{\GGbeforelen}{5pt}
 \setlength{\GGafterlen}{5pt}
\GGjudge\GGall{a}\GGconditional
  {\GGterm{F(\mathfrak{a})}}
  {\GGconditional{\GGnot\GGterm{G(\mathfrak{a})}}
  {\GGterm{F(\mathfrak{a})}}}}
$$
:::
```
::::{.result}
:::{.fregeify}
$$
{\setlength{\GGlinewidth}{53pt}
 \setlength{\GGthickness}{1pt}
 \setlength{\GGbeforelen}{5pt}
 \setlength{\GGafterlen}{5pt}
\GGjudge\GGall{a}\GGconditional
  {\GGterm{F(\mathfrak{a})}}
  {\GGconditional{\GGnot\GGterm{G(\mathfrak{a})}}
  {\GGterm{F(\mathfrak{a})}}}}
$$
:::
::::

As the name implies, this is useful for Frege's notation. However, it can be used for anything LaTeX's math mode supports.

Additional LaTeX packages added inside a YAML block ([descrbed above](#yaml-blocks-and-adding-latex-packages)) will also be used by the Fregeifier.

```markdown
---
header-includes: |
  \usepackage{principia}
---

The version of the axiom of reducibility for propositional
functions with two variables may be written as follows.

:::{.fregeify}
$$
\pmthm \pmdottt \pmsome{f} \pmdottt
\pmall{x, y} \pmdott \phi(x, y) \pmdot
\pmiff \pmdot \pmpredd{f}{x}{y} \pmdot
$$
```
:::::{.result}
The version of the axiom of reducibility for propositional
functions with two variables may be written as follows.

:::{.fregeify}
$$
\pmthm \pmdottt \pmsome{f} \pmdottt \pmall{x, y} \pmdott \phi(x, y) \pmdot\pmiff\pmdot \pmpredd{f}{x}{y} \pmdot
$$
:::
:::::

The Fregeifier also has a [web interface](https://russellguide.org/fregeifier) for creating images to be used in non-LaTeX created file formats.

# Unicode Characters and LaTeX*

## The problem

LaTeX was developed before the unicode standard was developed, and before TrueType or OpenType fonts existed.
Older LaTeX compilers, including the most widely used, `pdflatex`, do not support unicode fonts.
Newer LaTeX compilers such as `xelatex` and `lualatex` do support these fonts, but they are *much* slower.
This is particulary noticeable when working with a live-updating preview over a network.
Hence, we have been sticking with pdflatex for now.

This means that whenever a unicode character is used in a source document, pdflatex must be speficially "taught" what to do with it by supplying a LaTeX command that yields the same result.

The JHAP LaTeX template includes commands that do this for common logical, mathematical, and set theoretic symbols, Greek letters, and more. This file can be viewed on GitHub [here](https://github.com/frabjous/jhap-templates/blob/main/templates/unicode.latex). The list covers the characters that appear in OGE's unicode character insertion widget (press `Alt-u`) and a few more. However, the unicode standard currently defines nearly 300,000 characters, and is expected to grow.
It is not practical to define them all, and difficult to completely predict in advance which ones will be used by our authors.

If a document includes a unicode character not on the list, the LaTeX to PDF compilation will fail, and show an error about the undefined character.
Sometimes the author is using the wrong symbol, and it should simply be replaced ([see above](#using-the-correct-unicode-sumbols)).
Other times, the symbol shold be defined, either permanently (in the JHAP template) or locally (in the file being edited).

If the suggestions below are too technical, Kevin is happy to deal with these things as they come up.

## Adding to a specific document*

Include a [YAML block](#yaml-blocks-and-adding-latex-packages) at the top of the markdown document.

```markdown
---
header-includes: |
  \newunicodechar{▷}{\ensuremath{\triangleright}}
---
```
The first braces after the `\newunicodechar` command should contain the unicode symbol itself, and the second the LaTeX command to be used in its place. Wrap the command in `\ensuremath{…}` if it is a math mode symbol. Use `\usepackage{XXX}` before the `\newunicode` command if it requires a special LaTeX package.

To find an appropriate LaTeX command for a symbol, consult the [Comprehensive LaTeX Symbols List](https://tug.ctan.org/info/symbols/comprehensive/symbols-letter.pdf), or draw the symbol with [DeTeXify](https://detexify.kirelabs.org/classify.html).

## Adding to the JHAP template*

If there is a good chance the symbol will be used again in the future, it should be added to the template permanently.

One option is to ask Kevin, who is happy to do this. If you have a GitHub account, and are comfortable doing so, you can also make edits to [the file on GitHub](https://github.com/frabjous/jhap-templates/blob/main/templates/unicode.latex) and create a pull request. As things stand, Kevin needs to approve the edits, and deploy the revised template on the server.

The file conists primarily of `\newunicodechar` commands with the same format described above, and more can simply be added at the end.

# JHAP-specific Conventions

## Acknowledgements

Place acknowledgements at the end of the document as a subsection (`##`) with the `.unnumbered` class.

```markdown
## Acknowledgements {.unnumbered}

I would like to thank …
```

:::{.result}
## Acknowledgements {.unnumbered .unlisted}

I would like to thank …

:::


## Citations in block quotes

Never supress an author's name in the citation after a block quote.

```markdown
Russell once wrote:

> The method of “postulating” what we want has many advantages;
> they are the same as the advantages of theft over honest toil.
> [@russell1919, 71]
```

Instead of:

```markdown
Russell once wrote:

> The method of “postulating” what we want has many advantages;
> they are the same as the advantages of theft over honest toil.
> [-@russell1919, 71]
```

## Ensuring the authors' guidelines are followed

Make adjustments if the authors have not followed the [JHAP Author Guidelines]((https://jhaponline.org/about/submissions)) closely.

These guidelines request the following:

1) Section Headings (Heading 1) Should Be In Title Case, but Subsection (Heading 2+) and lower headings should be in sentence case.

2) Ellipses … are used for deletions inside quotations, and [brackets] for insertions. Use of both at the same time […], paradoxically suggesting that a deletion has been inserted, should be avoided.

3) JHAP uses em-dashes without spaces around them—like this—for breaking up text, rather than en-dashes – like this – with spaces. En-dashes are used for number ranges, such as 131–156. Dashes should not be confused with hyphens, which appear in hyphenated words like "space-time", nor with the mathematical minus/subtraction sign −.

    Traditional word processors often try to autocorrect typed hyphens to the correct punctuation sign, but often make mistakes, and the results should be checked.

   In LaTeX and pandoc markdown, a single ASCII `-` can be used to produce a regular hyphen (U+002D), two `--` to produce a unicode en-dash – (U+2013), three `---` to produce an em-dash — (U+2014), and a hyphen in math mode `$-$` to produce the subtraction sign − (U+2212).

5) Dates should be in an international format but with the month spelled out, such as “5 May 1915”, rather than the US format “May 5, 1915”, if possible.

6) Common English names of places are used rather than native names, if different, e.g., “Munich”, not “München”.

7) Authors may use either single quotation marks (as is 'typical' in British English) or double quotes (as is “typical” in American English) primarily, as they prefer, but should be consistent in their choices.

8) Footnote markers should be placed after end‑of‑sentence punctuation, not before.

9) Unnecessary Latin-isms such as “cf.” and “viz.” should be avoided in favor of ordinary words such as “compare” and “namely”. Simply repeat citations instead of using “ibid.” The Latin abbreviations “i.e.” and “e.g.” may be used sparingly. They should be followed by commas in most cases, e.g., like this.

## Preventing running header overflows

If the title of a JHAP article or review is too long, it might not fit in the running headers in the PDF versions.

In this case the "short title" metadata field should be filled in, to make use of a shorter version of the title for the headers.

The "short title" metadata item should be left blank if the title is not long enough to cause a problem.

## Journal editors list and templates

The list of JHAP editors inserted into all articles and review mastheads consists of a [simple YAML file](https://github.com/frabjous/jhap-templates/blob/main/editors.yaml) in the  [GitHub repository](https://github.com/frabjous/jhap-templates) for the journal's templates and settings files.

If you have a GitHub account and feel comfortable, the file can be edited on GitHub, and a pull request created.

If new *categories* of editors, etc., are created, the pandoc templates themselves must be altered to include them. The pandoc templates can be found in the same git repository in the [templates directory](https://github.com/frabjous/jhap-templates/tree/main/templates).

Kevin is happy to handle all of this if asked, and at present is the only one who can approve edits or deploy them on the server.

# ePubs

The ePub format is not, at least not yet, widely used for academic publishing.
However, this is likely to change as more people take to reading works on phones, tablets, etc., where reflowability is important.
It is a far more accessible format than PDF, and remains available offline, unlike most website pages.

One difficulty, however, is that most currently existing ePub software caters to informal texts such as novels.
While it is possible to embed fonts, complex stylesheets, etc., in ePubs, mainstream ebook software often ignores these components.
They prefer to let the reader choose fonts, margins, spacing, etc., for themselves.
There is little consistency, and each ebook application handles things its own way.

I recommend not spending too long trying to ensure that everything in the ePub output looks pristine.
Even if this were accomplished for one application, you would get different results in a different one.
It is sufficient for present purposes just to check that the ePub file is not corrupted before publishing it.
In 2025, few readers will download this version, and those that do likely know what to expect.

ePub files contain zipped HTML files and resources.
The contents of our ePubs are nearly identical to our HTML version, and if standards were followed, they *should* appear almost exactly the same.
Some of our articles will still be relevant even decades from now (or so we hope), when the format is more popular, and standards are more likely to be followed.
It will then be a good thing that these files were produced.

# The OGE editor

## Bookmarking

When the editor is launched by the "edit main document", it creates a unique URL that will always point to the document in question.

That URL can be bookmarked so that you can go directly to the editor for a given assignment without going through OGTF.

Most pages in OGTF can be bookmarked as well, such as the bibliography page for a certain assignment.
Using them to go directly to a certain page requires having chosen "remember me on this device" when logging in.

## Refreshing the citation autocompletion list

When `@` is typed in the editor, an autocomplete pop-up should appear.
It is populated with citation keys from the bibliography.
The (possibly long) list can be narrowed down by continuing to type the first characters of the sought-after citation key.
Use the arrows and press enter to select one to fill in.

If new entries are added to the bibliography in another window during the editing session, their keys will not appear at first.
To make them appear, save your work both in the editor and on the bibliography page, and reload the editor page.

## Section folding

If a downward caret is visible next to a line number on the left in the editor, this indicates a "foldable" section.

Clicking the caret will hide its content from view temporarily, except for the top line, which will have a green ellipsis marker next to it.
Click the caret (now pointing right) again, or the green marker, to reveal the contents again. 
Individual folds can also be toggled with keybindings (`Alt-f`).

If you plan on focusing on just a small portion of the document for awhile, it might be good to hide everything hideable with `Ctrl-Alt-[`, and then open just the section that needs work.
`Ctrl-Alt-]` will reopen all hidden contents.

## Linux filters/pipes*

### Overview

There are many advantages of using plain text files as our base.
Thousands of programs exist for editing and working with them.
Some can read from "stdin" (standard input) and write to "stdout" (standart output).
OGE allows any part of an edited document to be filtered through any program that works this way on the server.
The server has all the standard GNU linux/unix commands, e.g., [awk](https://linux.die.net/man/1/awk), [column](https://linux.die.net/man/1/column), [cut](https://linux.die.net/man/1/cut), [grep](https://linux.die.net/man/1/grep), [sed](https://linux.die.net/man/1/rev), [sed](https://linux.die.net/man/1/sed), [shuf](https://linux.die.net/man/1/shuf), [sort](https://linux.die.net/man/1/sort), [tr](https://linux.die.net/man/1/tr), [uniq](https://linux.die.net/man/1/uniq), [wc](https://linux.die.net/man/1/uniq), and many more.

These filters an be chained together with `|` between them, so that the result one of one filter is passed to the next.

The possibilities are far too numerous to list, but here are a few examples.

* `sort`: sorts the lines in the selection alphabetically (by default)
* `tr [:lower:] [:upper:]`: transform all lowercase letters in the selection to uppercase
* `wc -w`: replaces text with a word count for that text (you can undo afterwards)
* `grep -vi quine | shuf | rev | cat -n`: removes all selected lines containing the word "Quine" (grep), puts what is left in a random order (shuf), reverses all the characters on each line (rev), and adds line numbers (cat). No, I don't know why you'd want to do that, but hey, you can.

To invoke a filter/pipe, press `Alt-|` or click the filter symbol near the lower left corner, and type in the desired command or chain of commands.

### Using pandoc as a filter

Pandoc itself can read from stdin and output to stdout.
This can be used, among other things, to see what HTML or LaTeX code will be produced from a part of the document.
Start by selecting a markdown passage.

```markdown
It was the *best* of times, and
it was the **worst** of times.
```
Press `Alt-|`, and type in `pandoc -t html`, press enter, and it will become:

```html
<p>It was the <em>best</em> of times, and
it was the <strong>worst</strong> of times.</p>

```
If instead you type `pandoc -t latex` you will see:

```tex
It was the \emph{best} of times, and
it was the \textbf{worst} of times.
```
Be sure to undo the changes afterwards, or duplicate the passage first and remove the duplicate later, or place the results into a [raw html/latex block](#raw-html-and-latex).

### Using column to reformat a table

The unix `column` command is useful for reformatting a markdown table after changes.

Suppose after editing a "pipe table", the column separators are no longed lined up.

```markdown
Heading | Another | Final
-----------------------|------------|-----------
Short | Longer thing | Still going
A | B | C
This one is really long | E | F
```
Select the table, press `Alt-|`, and type in `column -t -s '|' -o '|'`, press enter, and it will become:

```markdown
Heading                 | Another      | Final
----------------------- |------------  |-----------
Short                   | Longer thing | Still going
A                       | B            | C
This one is really long | E            | F

```
That's better.

The command flag `-t` means "table formatting", `-s` is used to indicate the column separator character in the input, and `-o` to indicate the column separator in the output.
The separator `'&'` could be used instead if editing a LaTeX table.
These must be inside (single or double) quotation marks.

## Rectangular selection

If `Alt` is pressed and held while selecting a region of text with the mouse, the selection will take the form of a rectangle, rather than wrapping to the start or end of each line selected.

This could be used, for example, to remove a column from a table as formatted above without disturbing the other columns, or changing the order of the columns by cut and paste.

## Multiple cursors

The editing cursor can be duplicated by ctrl-clicking where the new cursor should appear.
Further typing will then affect both places at once.

If multiple search results are found using the find/replace widget, clicking the double checkmarks at the end of the find field will create cursors at the start of each match, so that all can be edited at once.

Press escape to return to a single cursor.

`Alt-b` clears search result highlighting.

## Git commits and backups*

Git repositories, for version control, are automatically created for all JHAP typesetting assignments.
The server periodically commits the current state of the assignment, and pushes it to a private repository on GitHub.
It is also possible to create a commit with a specific name by using the button at the bottom left of the editor.

Creating a git commit is like creating and saving a "snapshot" of the assignment at its present state.
It is a good idea to create one if you are making changes you are unsure about and may want to revert later.
The framework does not currently provide a direct way of reverting to prior commits.
However, it is very easy for Kevin to do it on the server if needed.

Most files are also backed up when a new proof set or publication version is created.

## Text to speech for proofreading

There is a button near the upper right of toolbar that looks like a loudspeaker.
This button will pass parts of the text of the document being edited to a text-to-speech program.
The text will be read out loud, starting with the active line in the editor, and scrolling down as it goes.
After activation, the loudspeaker becomes a pause button.

I find having text read back to me one of the best ways to catch typos and other small problems.
If I hear something off, I pause the playback, fix the problem, then click the loudspeaker again to continue the process.
This is one reason that sentences are placed on their own lines when importing to markdown.
This makes each line being read a manageable size, and a natural division of the paragraph.

# Additional Resources

See the "[knowing the basics](#knowing-the-basics)" section above for links to the information most directly useful for this process.

Below are more general resources for the underlying technologies and (highly transferable!) text processing skills.

1) Pandoc
    * [Pandoc website](https://pandoc.org)
    * [Pandoc discussion board](https://github.com/jgm/pandoc/discussions)
    * [Pandoc issue tracker](https://github.com/jgm/pandoc/issues)
    * [r/pandoc on Reddit](https://www.reddit.com/r/pandoc/)
2) Citation Style Language
    * [CSL website](https://citationstyles.org/), has info for authors, publishers and developers
    * [CSL style repository](https://github.com/citation-style-language/styles), hosts over 10,000 specification files
    * [Zotero citation style documentation](https://www.zotero.org/support/styles)
2) HTML and CSS (stylesheets for HTML)
    * [freeCodeCamp HTML beginners course](https://www.freecodecamp.org/news/learn-html-beginners-course/)
    * [Google web.dev tutorials](https://web.dev/), including a tutoral about HTML accessibility
    * [W3 Schools tutorials](https://www.w3schools.com/).
    * MDN [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) documentation
3) LaTeX and related technologies.
    * [The (Not So) Short Introduction to LaTeX](http://tobi.oetiker.ch/lshort/lshort.pdf)
    * [LaTeX](https://en.wikibooks.org/wiki/LaTeX) Wikibook
    * [Learn LaTeX .org](https://www.learnlatex.org/)
    * [TeX, LaTeX and Friends StackExchange](https://tex.stackexchange.com/) (Q & A site)
4) Ebook formats
    * [Calibre eBook software](https://calibre-ebook.com/)
    * [Ebook StackExchange](https://ebooks.stackexchange.com/) (Q & A site)
5) Regular expressions (find/replace wizardry)
    * [RegexOne tutorial](https://regexone.com/)
    * [RegexLearn tutorial](https://regexlearn.com/)
    * [regex101.com](https://regex101.com/) (tester)
6) Text processing
    * [Mastering text processing in Linux: A beginner’s guide](https://www.spsanderson.com/steveondata/posts/2025-01-17/)
    * [Linux text processing commands](https://earthly.dev/blog/linux-text-processing-commands/)

Kevin is more than happy to answer questions about any aspect of this process or provide help.
He is also happy to make changes or tweaks to the system for the sake of convenience or efficiency.
This is his weird idea of fun.