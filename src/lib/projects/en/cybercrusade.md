---
title: 'Cyber Crusade'
summary: 'Real-time online multiplayer social deduction card game built with SvelteKit and Firebase.'
tags: ['SvelteKit', 'Firebase', 'JavaScript']
priority: 'other'
order: 4
github: 'https://github.com/jonjampen/cyber-crusade'
link: 'https://cyber-crusade.vercel.app'
---

## Overview

**Cyber Crusade** is an online multiplayer adaptation of a tactical social deduction card game, built to enable group play over remote connections. Developed as my final year supplementary computer science project during my Matura studies, this application showcases real-time state synchronization across multiple client instances.

## Game Concept

Set in a futuristic cyber-hacker universe, players are assigned secret roles within an elite hacker group called _The Cyber Crusade_:

- **Hackers**: Work cooperatively to hack into target systems and gain full network access within four rounds.
- **Agents**: Hidden undercover saboteurs who aim to stall for time or deceive the hackers into breaching honeypot nodes.

## Technical Architecture

- **SvelteKit**: Powers the frontend application, managing layouts, page transitions, and client-side reactivity.
- **Firebase Realtime Database**: Serves as the primary data synchronizer, pushing instant game state updates (card plays, chat messages, lobby changes) to all connected clients without requiring manual page refreshes.
- **Firebase Authentication**: Provides secure, anonymous or email-based player registration and session management.
