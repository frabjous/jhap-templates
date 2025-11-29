
# Brief note on the CSL file

The file is named `journal-for-the-history-of-analytical-philosophy.csl`, but also symlinked to `default.csl` for backwards compatibility with old project settings.

The csl style is based is based on `chicago-author-date.csl` (18th edition) file in the official [CSL styles repository](https://github.com/citation-style-language/styles/blob/master/chicago-author-date.csl) (version 2025-08-07), but modified in the following ways.

* Added support for the `note` field.
* Added support the `abstract` fields as well, treated like a note, for backwards compatibility with our old file.
* Re-added support for the `publisher-place` field, which Chicago uses in 17th but not 18th edition.
* Includes `accessed` field even when another date is available.
* Uses international date (25 June 2025 over June 25, 2025), even with en-US locale
* Uses narrow non-breaking space between volume and issue number for journals.
* Never uses "et al." regardless of number of authors.
