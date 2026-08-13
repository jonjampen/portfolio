---
title: 'Health Dashboard'
summary: 'Umfassendes Dashboard zur Visualisierung und Analyse persönlicher Fitness- und Gesundheitsdaten.'
tags: ['SvelteKit', 'MongoDB', 'Lucia Auth', 'ApexCharts']
priority: 'other'
order: 1
github: 'https://github.com/jonjampen/healthdashboard'
link: ''
---

## Übersicht

**Health Dashboard** ist eine selbstgehostete Gesundheits-Telemetry-Plattform zur Aggregation und Visualisierung persönlicher Fitness- und Gesundheitswerte. Die Anwendung ermöglicht tiefgehende, langfristige Vergleiche, die weit über die Standardfunktionen kommerzieller Tracker hinausgehen.

## Motivation & Anwendungsfall

Obwohl moderne Fitnessgeräte präzise Daten aufzeichnen, schränken deren Apps den Zugriff auf den gesamten Datenverlauf oft stark ein. Historische Messwerte, die älter als ein paar Monate sind, sind meist schwer zugänglich.

Mit diesem Projekt habe ich die volle Kontrolle über meine Daten zurückerlangt. Mittels massgeschneiderter Import-Skripte werden Rohdaten aus Exporten ausgelesen, strukturiert gespeichert und in interaktiven Diagrammen visualisiert.

## Hauptfunktionen

- **Langfristige Analysen**: Nahtlose Umschaltung zwischen Tages-, Wochen-, Monats- und Jahresansichten.
- **Korrelationstools**: Nutzer*innen können beliebige Gesundheitswerte auswählen und im selben Diagramm vergleichen, um Trends zu erkennen.
- **PWA-Unterstützung**: Vollständig als Progressive Web App (PWA) installierbar, inklusive sicherer Anmeldung.

## Technische Umsetzung

- **SvelteKit & Svelte**: Liefern die reaktive und schnelle Benutzeroberfläche.
- **MongoDB**: Ein flexibles Dokumenten-Datenbanksystem zur effizienten Abfrage unstrukturierter Gesundheitsdaten.
- **Python ETL**: Automatisierte Skripte bereiten Rohdaten auf und importieren sie strukturiert in die Datenbank.
- **Lucia Auth**: Verwaltet die sichere, sessionbasierte Authentifizierung.
- **ApexCharts**: Generiert interaktive Zeitreihen-Diagramme.
- **Shadcn-Svelte & TailwindCSS**: Sorgen für ein modernes Design.
