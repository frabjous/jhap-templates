---
title: JHAP Pandoc Markdown Primer
date: 19 November 2025
css: documentation.css
---

:::{#githubwarning}
*Warning*: This documentation file is written in, and is about, **pandoc's version** of markdown.
However, this document is also stored in a code repository on GitHub.
GitHub provides a preview of markdown documents.
However, it assumes these documents use **GitHub's version** of markdown, which is less sophisticated than pandoc's.
If you are viewing this directly on GitHub, it will **not appear correctly** in some places.
If this is a problem, either download the raw text of this document and process it with pandoc, or contact the repo owner for a PDF.
:::

# Introduction

## What is pandoc?

[Pandoc](https://pandoc.org) is software for converting documents between formats.
The lead developer of pandoc is a philosophy professor: [John MacFarlane](https://johnmacfarlane.net/) of UC Berkeley.
It can convert from and to too many formats to easily list.
For our purposes, it is enough to note that pandoc can convert both to and from `.docx` (MS Word/Only Office), `.rtf` (rich text), `.tex` (LaTeX), and `.md` (markdown), and can convert to (but not from) `.pdf`.
These are the primary document formats used by JHAP.
Pandoc can also convert between certain bibliography formats, including BibTeX, CSL JSON, CSL YAML, EndNote XML, etc.

## What is markdown?

Markdown files files are plain text files that have been "marked" in conventional ways with extra information about the text, indicating such things as which words are emphasized, which paragraphs are quotations, what the titles of various sections are, and so on.
Text written in markdown is meant to be easy to read, fully intelligible when viewed as is, even in plain text format.
However, markdown files are also meant to be easily converted into other, richer, formats, that can make full use of the "extra information" they contain, with HTML (for web pages) historically being the main target.

Various "flavors" of markdown have been created to fulfill different purposes.
Many note-taking applications use it as their base format.
Markdown is widely used in READMEs for programming code repositories, and software documentation.
It is also used on many websites hosting discussions, bulletin boards, question and answer posts, and even AI chat assistants, allowing the users to post more than bare text.
Its popularity has grown significantly over the past few years.

Some relevant links:

* [Why I Use Markdown, and Why You Should Too](https://medium.com/@RyanElston/why-i-use-markdown-and-why-you-should-too-c4a7e38c96d5), by Ryan Elston
* [The Underestimated Power of Markdown](https://reifschneider.digital/blog/underestimated-power-markdown), by Sven Reifschneider
* [Markdown and the Slow Fade of the Formatting Fetish](https://ia.net/topics/markdown-and-the-slow-fade-of-the-formatting-fetish), by iA.net
* [Markdown CMS: The Smart Choice for the AI Age](https://typemill.net/knowledge-hub/markdown-cms), by Sebastian Schürmanns
* [Is Markdown Taking Over?](https://www.hendrik-erz.de/post/is-markdown-taking-over#h2-final-thoughts) by Hendrik Erz

## What is pandoc's markdown?

Pandoc's markdown is a very sophisticated "flavor" of markdown, designed to make full use of pandoc's conversion capabilities. It forms a kind of neutral base format, ideal for conversion to many different kinds of output.
Compared to other flavors, it is particularly suited for academic work.
It has full support for mathematical and logical equations and formulas, comparable to LaTeX (which it can use in its processing), as well as figures, cross-references, and so on.
It is one of only a couple flavors that fully support academic citations and bibliographies.
Much of this is due to its own implementation of citeproc, a program for formatting citations and reference lists based on [Citation Style Language](https://citationstyles.org/).

Its academic-oriented features, together with the ease with which documents using can be used to create a variety of features, is why it was chosen for JHAP's production process.

Below is a very brief primer. Much more is possible. Consult [the pandoc user's guide](https://pandoc.org/MANUAL.html), and its section on [pandoc's markdown](https://pandoc.org/MANUAL.html#pandocs-markdown) in particular.

# Basic Text Styling

Body text is simply plain text. Blank lines indicate paragraph breaks.

Common text and font styles can be added with special but natural decorations.

:::{#styletable}
| style            | markdown           | result           |
|-------           |----------          |--------          |
| emphasis/italics | `I *love* it.`     | I *love* it.     |
| strong/bold      | `I **love** it.`   | I **love** it.   |
| italics and bold | `I _**love**_ it.` | I _**love**_ it. |
| subscript        | `I ~love~ it.`     | I ~love~ it.     |
| superscript      | `I ^love^ it.`     | I ^love^ it.     |
| strikethrough    | `I ~~love~~ it.`   | I ~~love~~ it.   |
:::

# Spans and Divs

More complicated things can be achieved with the help of CSS-style classes or attributes applied either to inline spans or blocks.

Inline spans are created with brackets around part of a sentence or text range, followed by curly braces and CSS class names (starting with a period), attributes (followed by = and their value), or link target/anchor ids (starting with #).

:::{#spantable}
| markdown                                            | result                                            |
|----------                                           |--------                                           |
| `[Great Scott!]{.smallcaps}`                        | [Great Scott!]{.smallcaps}                        |
| `[Great Scott!]{.underline}`                        | [Great Scott!]{.underline}                        |
| `[Great Scott!]{.mark}`                        | [Great Scott!]{.mark}                        |
| `[Great Scott!]{style="color: red;"}`               | [Great Scott!]{style="color: red"}                |
| `[Great Scott!]{style="background-color: yellow;"}` | [Great Scott!]{style="background-color: pink;"} |

:::

The journal's template defines common classes such as `.underline` and `.smallcaps`, but use of these is discouraged. Direct application of style attributes should be avoided, as they only work in HTML-based outputs by default.

Divs (also called blocks) are paragraph-level document elements or groups of elements. A div is identified with three or more colons on a line at the start, followed in curly brackets by a class, attributes, and/or anchor id, with three more colons marking the end of the block.

```markdown
:::{style="font-family: serif;"}
This uses a serif font.
:::
```
Yields:

::::{.result}
:::{style="font-family: serif;"}
This uses a serif font.
:::
::::

Adding style attributes directly to a block is strongly discouraged, and will not work in all output formats. However, other uses of blocks are noted below.

# Block Quotations

Block quotations indicated by lines starting with greater than signs.

```markdown
Here is the preceding text.

> This is a quotation and
> can take multiple lines.

Here is following text.
```

:::{.result}
Here is the preceding text.

> This is a quotation and
> can take multiple lines.

Here is following text.
:::

Quotations can be nested with multiple `> >`.

# Lists

Numbered lists are indicated by a series of lines each starting with a number, or with `#)`. Whichever you use, the numbering automatically done or redone.

```markdown
#) This is item one.
#) This is item two.
#) This is item three.
```

:::{.result}
#) This is item one.
#) This is item two.
#) This is item three.
:::

Bullet lists can be made similarly, using asterisks, leading hyphens and plus symbols.

```markdown
* One thing
* Another thing
* A third thing
```

:::{.result}
* One thing
* Another thing
* A third thing
:::

Lists can be nested in one another by using extra indentation.

```markdown
* Item
  - Subitem
  - Another subitem
* Another item
  - Its first subitem
  - The last subitem
```

:::{.result}
* Item
  - Subitem
  - Another subitem
* Another item
  - Its first subitem
  - The last subitem
:::

More spaced out lists can be produced by placing blank lines between the line items (in a consistent way).

# External and Internal Hyperlinks

Links are created with the link text in brackets followed by the URL in soft parentheses.

```markdown
This is a link to [Google](https://google.com).
```

:::{.result}
This is a link to [Google](https://google.com).
:::

Links are normal spans and can be followed with their own curly braces.

```markdown
This is a link to [Google](https://google.com){target=_blank} as well, but opens in a new tab.
```

:::{.result}
This is a link to [Google](https://google.com){target=_blank} as well, but opens in a new tab.
:::

Internal links can be created by applying link anchor ids to spans, blocks (or headings, as [described below](#headingsanchors)), for the link targets, and, inside the link, specifying the target with a (hashmarked) link anchor id.

```markdown
:::{#earlierparagraph}
This is a paragraph.
:::

Here is a link to [the earlier paragraph](#earlierparagraph).

```

:::::{.result}
:::{#earlierparagraph}
This is a paragraph.
:::

Here is a link to [the earlier paragraph](#earlierparagraph).

:::::

# Headings

Headings are lines that begin with one or more hashes, the number of hashes indicating their depth. There must be a blank line after them.

```markdown
# This is a Section

## This is a subsection

### This is a subsubsection

#### This is a subsubsubsection

```

:::{.result}
# 1. This is a Section {.unlisted}

## 1.1 This is a subsection {.unlisted}

### 1.1.1 This is a subsubsection {.unlisted}

#### 1.1.1.1 This is a subsubsubsection {.unlisted}
:::

The convention used by JHAP is that section titles should be written in title case, but subsections and lower should be in sentence case, and only the first word, and words that are capitalized for other reasons (like proper names), are capitalized.

JHAP uses a pandoc option that numbers sections automatically. Numbers should not be included in the markdown heading.

Headings may include a hyperlink anchor, with its id specified in curly braces at the end.

```markdown
# Lorem Ipsum {#sect2}

As we noted in [Section 2](#sect2) ...
```

::: result
# 2. Lorem Ipsum {#sect2 .unlisted}

As we noted in [Section 2](#sect2) ...
:::

If the id is not explicitly given, it will use the heading title, but all lowercase, spaces changed to hyphens, and all punctuation suppressed. E.g.

```markdown
## Data and data analysis

According to [our data analysis](#data-and-data-analysis), discussed above, ...
```
:::{.result .data}
## 3.2 Data and data analysis {.unlisted}

According to [our data analysis](#data-and-data-analysis), discussed above, ...
:::

# Images

Images can be inserted by using an exclamation mark before brackets with the "alt text", and then soft parentheses with the absolute or relative url of the iamge.

The "alt text" is used for screen readers, or if the image does not load, as well as for the caption.

```markdown
![Roaring Tiger](/images/tiger.png)

```

:::{.result}
<img src="data:image/png;base64,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" alt="roaring tiger">

Roaring Tiger
:::

The caption can be suppressed by putting other content on the same line, or inserting a backslash `\` after the last parenthesis.

# Logical and Mathematical Formulas

Pandoc uses LaTeX's convention of wrapping inline mathematical (and logical) content between dollar signs, and the old plain TeX convention of wrapping dislayed mathematics in double dollar signs. Pandoc can handle simple LaTeX mathematics without any special measures, regardless of the output format.

```markdown
Because $a = b$ it follows that:

$$
\forall F (\lnot F(a) \rightarrow \lnot F(b))
$$

```

:::{.result}
Because $a = b$ it follows that:

$$
\forall F (\lnot F(a) \rightarrow \lnot F(b))
$$

:::

The JHAP template also makes it possible to use many unicode symbols directly. These work even outside math mode, but it is still best to put them in math mode for the sake of consistent appearance and spacing.

```markdown
$$
∀F(¬F(a) → ¬F(b))
$$
```
:::{.result}
$$
∀F(¬F(a) → ¬F(b))
$$
:::


Pandoc provides a number of [alternative ways](https://pandoc.org/MANUAL.html#math-rendering-in-html) of processing mathematical content in output formats that do not support all of what LaTeX does. The default is good for simple variables, formulas and equations. JHAP uses the [Fregeifier filter](https://github.com/frabjous/fregeifier) when it needs to make use of more advanced or unusual logic/math in conversions to formats such as HTML. See the tips and tricks documentation.

# Footnotes/Endnotes

There are two notations for footnotes supported by pandoc, which can be used simultaneously in the same document.

One involves placing something of the form `[^12]` where the anchor should appear in the body text, and somewhere underneath, the same indicator followed by a colon and the content of the note.

```markdown
Here is some information I want to comment on.[^12] But I also want to move on.

[^12]: Here is the comment I wanted to make.
```

:::{.result}
Here is some information I want to comment on.^[12](#fn12){#anc12}^ But I also want to move on.

\

----
\ [(12)]{#fn12} Here is the comment I wanted to make.[↩︎](#anc12)

:::

Note that the number chosen does not matter, so long as it is unique, as pandoc will renumber them in the output if they become out of order. Indeed, the identifier does not need to be a number all. You can use, e.g., `[^mynote]` as the identifier.

The other, simpler, form inserts the content of the footnote right into the flow of the paragraph, using a caret first and a bracketed span afterwards.

```
This is a really great sentence,^[Everyone thinks so.] isn’t it?
```

:::{.result}
This is a really great sentence,^[13](#fn13){#anc13}^ isn’t it?

\

---
\ [(13)]{#fn13} Everyone thinks so.[↩︎](#anc13)

:::

Technically, footnotes are only possible in formats that have pages, so you will get endnotes instead in formats without pages, such as HTML.


# Citations

## Overview

Pandoc has native support for citations.
They are formatted, along with their corresponding bibliographic entries, automatically by a subprogram called “citeproc”. Citeproc’s formatting follows a specification written in [Citation Style Language](https://citationstyles.org/) (CSL). Thousands of CSL specifications exist for different bibliographic conventions, from Chicago to MLA to IEEP, etc. JHAP currently uses the Chicago Manual of Style 17th Edition Author-Date style.

Citeproc makes use one or more CSL JSON (or CSL YAML) information file with the needed bibliographic information.
In the framework JHAP uses, this file is created using the Bibliography section of the typesetting workflow, usually completed prior to working on the main document.
Each bibliography entry has a citation key which begins with `@`, often consisting of a name and year.

To process citations when converted to other formats, pandoc must be called using the `--citeproc` and `--bibliography [filename]` options. The JHAP project settings in the typesetting framework are configured to do this automatically. With these options, the References section of the document is automatically created in accordance with the CSL style.

## Standard author-date citations

The most common form of citation consists of the cited author's name, year of publication, and if appropriate, a comma and the page range or similar. These are produced in the markdown with the citation key in hard brackets, together with optional information before or after.

```markdown
This sentences relies on information from a source [@mysource, 12].

```

:::{.result}
This sentences relies on information from a source (Jones 2002, 12).
:::

Preceding text can appear inside the brackets.

```markdown
Some philosophers believe there are *a posterioi* necessary truths [see for example @kripke1980].
```

:::{.result}
Some philosophers believe there are *a posterioi* necessary truths (see for example Kripke 1980).
:::

## Author name with parenthetical date

Another common form is used when the author is already mentioned in the sentence, in which case the parenthetical only contains the year (and possibly the page range, etc.) after their name. In the markdown, for these, the citation id is not placed in brackets, but only the extra information.

```markdown
For more information on the indeterminacy of translation, see the work of @quine1960[chap. 2].
```

:::{.result}
For more information on the indeterminacy of translation, see the work of Quine (1960, chap. 2).
:::

## Suppressing the author's name

For either kind of citation, the author's name can be suppressed by placing `-` before the `@`, which can be appropriate if the name appears elsewhere in the sentence, or is otherwise obvious from context.

```markdown
Bertrand Russell is known for his theory of descriptions [-@russell1905].
```

:::{.result}
Bertrand Russell is known for his theory of descriptions (1905).
:::


## Multiple citations

Multiple citations inside the same parenthetical can be achieved by placing a semicolon in between them in markdown. Words may still be inserted before later ones.

```markdown
Many analytic philosophers have been interested in intention and action [@anscombe1963; see also @davidson1963, @grice1971].
```

:::{.result}
Many analytic philosophers have been interested in intention and action (Anscombe 1963; see also Davidson 1963; Grice 1971).
:::
