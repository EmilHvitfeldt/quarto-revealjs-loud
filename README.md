# loud revealjs plugin For Quarto

This plugin centers all slides and makes the text as big as it can. This is done by adding the [center](https://quarto.org/docs/presentations/revealjs/advanced.html#center) class to all slides, and the [r-fit-text](https://quarto.org/docs/presentations/revealjs/advanced.html#fit-text) class to all elements of the slides. 

## Installing

To install, run the following line in your terminal

```bash
quarto add emilhvitfeldt/quarto-revealjs-loud
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Using

Once an extension has been added, you can use the Reveal plugin by adding it to the reveal-plugins key. For example:

```yaml
---
title: "My Presentation"
format: revealjs
revealjs-plugins:
  - loud
---
```

## Example

Here is the source code for a minimal example: [example.qmd](example.qmd).
