---
title: 'PulseMetrics: Monitoring'
summary: 'Hochverfügbare Uptime-Monitoring-Plattform entwickelt mit Next.js, Go und AWS.'
tags: ['Go', 'Next.js', 'AWS', 'Terraform', 'PostgreSQL']
priority: 'featured'
order: 2
github: 'https://github.com/jonjampen'
link: ''
impact: 'Ausgestattet mit einer dezentralen Runner-Architektur für subsekundengenaue Kontrollen.'
---

## Übersicht

**PulseMetrics** ist eine moderne, hochverfügbare Plattform für Status- und Server-Uptime-Überwachung. Sie bietet Entwicklern und Administratoren direkte Echtzeit-Transparenz über Microservices, HTTP-Server und Backend-Datenbanken.

## Infrastruktur

- **Go Runner Cluster**: Globale, parallel laufende Hintergrundprozesse in Go, die Ping-, HTTP- und TCP-Anfragen im Sekunden-Takt absenden.
- **Next.js Dashboard**: Ein modernes Webinterface mit Live-Auswertungen, Service-Statusleuchten und SLA-Berechnungen.
- **AWS Bereitstellung**: Konfiguriert als Infrastructure as Code (IaC) mit Terraform, deployed über Amazon ECS und eine RDS PostgreSQL Instanz.
- **Benachrichtigungen**: Direkte Integration für Echtzeit-Warnungen bei Ausfällen via Slack-, Discord- und Telegram-Webhooks.

## Erkenntnisse

In diesem Projekt habe ich gelernt, wie man globale Cloud-Infrastrukturen automatisiert mit Terraform orchestriert, hochperformante parallele Clients in Go schreibt und reaktive Dashboards für Systemzustände entwirft.
