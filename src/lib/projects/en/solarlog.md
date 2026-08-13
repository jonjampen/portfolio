---
title: 'Solar Log Dashboard'
summary: 'Real-time visualization dashboard for SolarLog Base photovoltaic systems.'
tags: ['Svelte', 'ApexCharts', 'API']
priority: 'other'
order: 5
github: 'https://github.com/jonjampen/solarlog-dashboard'
link: ''
---

## Overview

**Solar Log Dashboard** is a clean web interface that aggregates and visualizes energy data from local SolarLog Base hardware. Developed as a final-year Matura project for a supplementary computer science course, the application demonstrates how to fetch and parse device API payloads into responsive, informative graphs.

## Motivation & Use Case

The primary goal of this project was to learn the fundamentals of web APIs and reactive components. By connecting to the local network endpoint of our household SolarLog Base photovoltaic panels, I created a custom web interface that displays active power yields and long-term energy stats in an intuitive way.

## Technical Details

- **Svelte**: Used as the core frontend compiler to build a fast, reactive dashboard.
- **ApexCharts**: Selected to render clean time-series line and bar charts tracking daily energy output.
- **Local API Integration**: Communicates directly with the SolarLog device via JSON payloads, parsing generation logs and sensor readings.
