---
title: 'Obsidian Plugin: Xournal++'
summary: 'Nahtlose Integration von digitalen, handgeschriebenen Xournal++-Notizen in Obsidian.'
tags: ['TypeScript', 'Obsidian API', 'CI/CD', 'Vitest']
priority: 'featured'
order: 1
github: 'https://github.com/jonjampen/obsidian-xournalpp'
link: 'https://obsidian.md/plugins?id=xournalpp'
impact: "Hauptentwickler und Maintainer einer wachsenden Open-Source-Community mit über 9'000 Installationen."
---

## Übersicht

Das **Obsidian Xournal++ Integration**-Plugin schlägt eine automatisierte Brücke zwischen Xournal++ (`.xopp`), einer Open-Source-Anwendung für handschriftliche Notizen, und Obsidian. Es löst ein bekanntes Workflow-Problem für Studierende, Forschende und Entwickler*innen, die handschriftliche Skizzen und getippte Notizen in einem gemeinsamen Workspace verwalten möchten.

## Das Problem

Als begeisterter Obsidian-Nutzer habe ich mein Setup für das Mitschreiben an der Universität optimiert. Da Obsidian jedoch keine handschriftlichen Notizen unterstützt, stiess das System in Fächern wie Mathematik an Grenzen, in denen man Formeln und Skizzen schnell notieren muss.

Als Linux-Nutzer fiel meine Wahl auf Xournal++, ein hervorragendes Open-Source-Programm für handschriftliche Notizen und PDF-Anmerkungen. Der ständige Wechsel zwischen den beiden Apps und das Hantieren mit unterschiedlichen Dateiformaten störte jedoch den Fluss. Daher entwickelte ich mein eigenes Plugin, um beide Welten zu verbinden.

## Hauptfunktionen

- **Automatischer PDF-Export**: Überwacht `.xopp`-Dateien und exportiert sie bei jeder Änderung automatisch als hochauflösende Vektor-PDFs.
- **Eingebettete Notiz-Vorschau**: Erlaubt das direkte Einbetten und Anzeigen der gerenderten PDF-Dateien in den Obsidian-Notes.
- **Einfache Erstellung**: Neue Xournal++-Dateien können direkt aus Obsidian über die Ribbon-Leiste, den Datei-Explorer oder die Befehlspalette erstellt werden.
- **Direktes Bearbeiten**: Fügt eine "In Xournal++ bearbeiten"-Schaltfläche in der PDF-Vorschau, in Einbettungen und im Datei-Explorer hinzu, um mit einem Klick die Bearbeitung der Quelldatei zu starten.
- **Offline First**: Die gesamte Verarbeitung geschieht lokal auf dem Gerät innerhalb der Obsidian-Sandbox.

## Technische Umsetzung & Learnings

Da Obsidian auf Electron basiert, nutzt das Plugin-System JavaScript und TypeScript. Über die Obsidian-Plugin-API habe ich Event-Listener und UI-Elemente implementiert. Dies war mein erstes grösseres Open-Source-Projekt, bei dem ich lernte, mich in bestehende APIs einzulesen, Kompatibilität mit der Kernanwendung sicherzustellen und Plugin-Richtlinien einzuhalten.

Um langfristige Stabilität zu garantieren, nutzt das Projekt ein modernes ESLint v9-Setup, automatisierte Tests mit Vitest sowie CI/CD-Pipelines für Releases.

## Reichweite & Community

Als Gründer und Hauptentwickler verzeichnet das Plugin mittlerweile **über 9'000 aktive Installationen**. Ich betreue Fehlermeldungen, arbeite mit Contributoren zusammen und stelle die Kompatibilität mit neuen Obsidian-Versionen sicher.

## Links

[Plugin herunterladen](https://obsidian.md/plugins?id=xournalpp) • [GitHub-Repository](https://github.com/jonjampen/obsidian-xournalpp) • [Obsidian](https://obsidian.md) • [Xournal++](https://xournalpp.github.io)
