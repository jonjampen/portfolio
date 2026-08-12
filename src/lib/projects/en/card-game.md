---
title: "Online Multiplayer Card Game"
summary: "WebSockets-powered real-time tactical card game lobby and gameplay engine."
tags: ["Go", "WebSockets", "Svelte"]
priority: "other"
order: 3
github: "https://github.com/jonjampen"
link: ""
---

## Overview

A fast, concurrent online multiplayer card game server and web client. Engineered in Go and Svelte to demonstrate low-latency state synchronization.

## Features

- **Go Game Loop**: Event-driven backend handling state validation, turn timing, and reconnect logic.
- **WebSocket Protocol**: Custom lightweight communication protocol ensuring sub-50ms message delivery.
- **Responsive Web UI**: Svelte frontend with fluid transition animations and drag-and-drop card actions.
