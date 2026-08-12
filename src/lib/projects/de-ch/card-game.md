---
title: "Online Multiplayer-Kartenspiel"
summary: "WebSockets-basiertes taktisches Kartenspiel mit Echtzeit-Synchronisation."
tags: ["Go", "WebSockets", "Svelte"]
priority: "other"
order: 3
github: "https://github.com/jonjampen"
link: ""
---

## Übersicht

Ein schnelles Multiplayer-Kartenspiel mit Go-Backend und reaktivem Svelte-Client, entwickelt zur Demonstration von Echtzeit-Zustandssynchronisierung bei geringer Latenz.

## Features

- **Go Game Loop**: Event-gesteuertes Backend zur Validierung von Spielzügen, Zugzeiten und automatischem Reconnect-Handling.
- **Latenzarmes WebSocket-Protokoll**: Eigenes leichtgewichtiges Datenprotokoll für Nachrichtenübermittlung unter 50ms.
- **Interaktiver Client**: Flüssige Svelte-Übergänge und Drag-and-Drop Schnittstelle zum Ausspielen der Karten.
