---
title: 'Obsidian Plugin: Xournal++'
summary: 'Seamless integration of digital, handwritten Xournal++ notes in Obsidian.'
tags: ['TypeScript', 'Obsidian API', 'CI/CD', 'Vitest']
priority: 'featured'
order: 1
github: 'https://github.com/jonjampen/obsidian-xournalpp'
link: 'https://obsidian.md/plugins?id=xournalpp'
impact: 'Lead Developer and Maintainer of a growing community with over 9,000+ installations.'
---

## Overview

The **Obsidian Xournal++ Integration** plugin provides an automated bridge between Xournal++ (`.xopp`), an open-source note-taking tool for handwriting, and Obsidian. This resolves a common workflow gap for researchers, students, and engineers who want to manage handwritten diagrams and structured text notes in a single, unified workspace.

## The Problem

As a student, I designed a customized Obsidian setup for taking lecture notes. However, Obsidian lacks native support for handwritten notes, which is a major drawback in fields like mathematics where complex formulas and quick sketches are essential.

While commercial software like OneNote exists, I preferred to stick with Obsidian on Linux. I discovered Xournal++, an excellent open-source tool for digital handwriting and PDF annotations. Unfortunately, switching back and forth between the two applications and dealing with incompatible file formats disrupted the note-taking flow. I developed this plugin to integrate both environments seamlessly.

## Key Features

- **Automated PDF Rendering**: Tracks changes to `.xopp` files and automatically exports them to high-quality vector PDFs.
- **Embedded Document Preview**: Generates inline markdown embeds to preview the rendered handwriting and sketches directly within Obsidian vaults.
- **Quick File Creation**: Easily create new Xournal++ files (`.xopp`) from Obsidian’s ribbon icon, file explorer, or command palette.
- **Direct Editing Integration**: Adds an "Edit in Xournal++" button to PDF previews, embeds, and the file explorer (via the `X++` indicator) for quick, one-click access to the editable source file.
- **Offline First**: All processing and rendering is performed locally inside the Obsidian application sandbox.

## Technical Implementation & Learnings

Since Obsidian is built on Electron, its plugin ecosystem operates in JavaScript/TypeScript. Utilizing the Obsidian Plugin API, I designed the event listeners and menu attachments. This was my first major contribution to public software, which required learning how to interface with a host application's lifecycle, adhere to community plugin guidelines, and set up a robust TypeScript environment.

To maintain high code quality, the project uses a modern, zero-warning ESLint v9 architecture, automated Vitest testing, and automated release deployment pipelines.

## Impact & Community

As the creator and lead maintainer of this plugin, I have grown a user base of over **9,000+ active installations**. I actively triage issue reports, collaborate with open-source contributors, and ensure ongoing compatibility with new Obsidian release cycles.

## Links

[Get the Plugin](https://obsidian.md/plugins?id=xournalpp) • [GitHub Code](https://github.com/jonjampen/obsidian-xournalpp) • [Obsidian](https://obsidian.md) • [Xournal++](https://xournalpp.github.io)
