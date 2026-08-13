---
title: 'Solar Log Dashboard'
summary: 'Dashboard zur Echtzeit-Visualisierung der Energieerzeugung von SolarLog-Base-Photovoltaikanlagen.'
tags: ['Svelte', 'ApexCharts', 'API']
priority: 'other'
order: 5
github: 'https://github.com/jonjampen/solarlog-dashboard'
link: ''
---

## Übersicht

**Solar Log Dashboard** ist eine Web-Oberfläche zur Aggregation und Visualisierung von Energiedaten lokaler SolarLog-Base-Hardware. Die Anwendung entstand im Rahmen des Ergänzungsfachs Informatik an der Kantonsschule und demonstriert die Anbindung und Darstellung von Gerätedaten via API.

## Motivation & Anwendungsfall

Das Hauptziel dieses Projekts war das Erlernen von Webschnittstellen (APIs) und reaktiven Webkomponenten. Durch die Anbindung des lokalen Netzwerk-Endpunkts der PV-Anlage unseres Hauses konnte ich ein übersichtliches Dashboard erstellen, das die aktuelle Leistung und langfristige Ertragsstatistiken veranschaulicht.

## Technische Details

- **Svelte**: Dient als reaktives Frontend-Framework für ein schlankes, performantes Dashboard.
- **ApexCharts**: Wird zur Darstellung reaktiver Liniendiagramme verwendet, die den täglichen Ertragsverlauf und Leistungskurven abbilden.
- **Geräte-API**: Kommuniziert direkt mit dem SolarLog-Gerät im lokalen Netzwerk, ruft JSON-Daten ab und verarbeitet diese für das UI.
