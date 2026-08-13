---
title: 'Fatigue Diary'
summary: 'Umfassende Web-App für Patient*innen mit Chronischem Fatigue-Syndrom (CFS) zur Verfolgung des Energielevels.'
tags: ['Next.js', 'React', 'MySQL', 'TailwindCSS']
priority: 'featured'
order: 3
github: 'https://github.com/jonjampen/fatiguediary'
link: 'https://fatiguediary.ch'
impact: 'Über 400 registrierte Nutzer*innen. Nominiert für die beste Maturaarbeit.'
---

## Übersicht

**Fatigue Diary** ist eine patientenorientierte Tagebuch-Anwendung, die speziell für Betroffene des Chronischen Fatigue-Syndroms (CFS/ME), Long COVID und Multipler Sklerose entwickelt wurde. Sie hilft den Patient*innen, ihre täglichen Energiereserven zu protokollieren und auszuwerten. Das Projekt entstand ursprünglich als meine Maturaarbeit und ist heute eine produktive Web-App, die von Patient*innen in der ganzen Schweiz genutzt und von Therapeut*innen empfohlen wird.

## Das Problem

Die Bewältigung des Chronischen Fatigue-Syndroms erfordert ein striktes Energiemanagement, das sogenannte _Pacing_. Traditionell tragen Patient*innen ihre stündlichen Energiewerte, Schlafzeiten und Aktivitäten in Papierformulare ein, um Erschöpfungszustände (PEM) zu vermeiden. Die manuelle Erfassung auf Papier ist jedoch unübersichtlich, erschwert langfristige Analysen und ist im Alltag unpraktisch.

Das Ziel dieser Arbeit war es zu untersuchen, ob eine Web-App eine effizientere und komfortablere Alternative zur Papiererfassung bieten kann.

## Hauptfunktionen

- **Energie-Tracking**: Einfaches stündliches und tägliches Erfassen von Müdigkeitswerten, Schlafstunden, Aktivitäten und Medikamenteneinnahmen.
- **Interaktive Grafiken**: Diagramme zeigen den Zusammenhang zwischen Belastungsphasen und nachfolgenden Erschöpfungs-Zyklen auf (Unterstützung beim Pacing).
- **Aktivitäts-Bewertung**: Die App berechnet automatisch den Einfluss verschiedener Aktivitäten auf das Energielevel, basierend auf den Daten des vergangenen Monats.
- **PDF-Berichts-Export**: Generiert übersichtliche PDFs, die direkt mit Hausärzten, Spezialisten und Krankenkassen besprochen werden können.
- **Mehrsprachigkeit**: Die Benutzeroberfläche ist komplett auf Deutsch und Englisch verfügbar.

## Validierung & Reichweite

Die Webanwendung zählt mittlerweile **über 400 registrierte Nutzer\*innen**. Während der Entwicklung wurde Fatigue Diary von rund 15 Therapeut*innen und ebenso vielen Patient*innen getestet. Die Rückmeldungen und meine eigenen Erfahrungen zeigten, dass die App eine weitaus praktischere und übersichtlichere Methode zur Energieerfassung bietet.

Aufgrund des gesellschaftlichen Nutzens und der technischen Umsetzung wurde die Arbeit als eine der **besten Maturaarbeiten** des Kantons Solothurn nominiert.

## Technische Entwicklung

Ursprünglich wurde die Anwendung mit PHP ohne Frontend-Framework realisiert. Im Jahr 2023 entschied ich mich für einen kompletten Rewrite mit **Next.js** und **React**, um die Performance zu optimieren, die Ladezeiten zu verkürzen und ein modernes Benutzererlebnis zu bieten.

### Verwendete Bibliotheken:

- **Shadcn/ui**: Moderne Design-Komponenten.
- **NextAuth**: Sichere Authentifizierung.
- **ApexCharts**: Interaktive Diagramme für Zeitreihendaten.
- **next-pwa**: Progressive Web App-Unterstützung für mobile Installationen.

## Publikationen & Links

Weitere wissenschaftliche und technische Details zum Projekt können in meiner Maturaarbeit nachgelesen werden:
[Projektbeschrieb (Maturaarbeit) 📝](https://github.com/jonjampen/fatiguediary/blob/main/docs/maturapaper/matura_paper_jon_jampen.pdf)

Website und Kontakt:
[www.fatiguediary.ch](https://www.fatiguediary.ch) | [info@fatiguediary.ch](mailto:info@fatiguediary.ch) | Instagram: [@fatiguediary.ch](https://www.instagram.com/fatiguediary.ch/)
