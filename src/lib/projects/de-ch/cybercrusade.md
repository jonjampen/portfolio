---
title: 'Cyber Crusade'
summary: 'Realtime-Online-Multiplayer-Social-Deduction-Kartenspiel, entwickelt mit SvelteKit und Firebase.'
tags: ['SvelteKit', 'Firebase', 'JavaScript']
priority: 'other'
order: 4
github: 'https://github.com/jonjampen/cyber-crusade'
link: 'https://cyber-crusade.vercel.app'
---

## Übersicht

**Cyber Crusade** ist eine Online-Multiplayer-Umsetzung eines taktischen Social-Deduction-Kartenspiels, das für gemeinsames Spielen über das Internet entwickelt wurde. Das Projekt entstand als Abschlussarbeit im Ergänzungsfach Informatik während meiner Matura und demonstriert die Echtzeit-Synchronisation zwischen mehreren Clients.

## Spielkonzept

In einem futuristischen Hacker-Universum übernehmen die Spieler geheime Rollen innerhalb der Hackergruppe _The Cyber Crusade_:

- **Hacker**: Versuchen kooperativ, innerhalb von vier Runden Zugriff auf das Zielsystem zu erlangen.
- **Agenten**: Undercover-Saboteure, die versuchen, Zeit zu schinden oder die Hacker in einen Honeypot zu locken.

## Technische Umsetzung

- **SvelteKit**: Dient als Basis für das Frontend-Framework und verwaltet Layouts, Übergänge und die reaktive UI.
- **Firebase Realtime Database**: Ermöglicht die unmittelbare Synchronisation des Spielstatus (gespielte Karten, Chatnachrichten, Lobbyzustand) für alle verbundenen Clients ohne Neuladen der Seite.
- **Firebase Authentication**: Bietet eine einfache und sichere Registrierung sowie Verwaltung der Spielersitzungen.
