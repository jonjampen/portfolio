---
title: "Health Dashboard"
summary: "Comprehensive personal analytics dashboard for fitness and health data visualization."
tags: ["SvelteKit", "MongoDB", "Lucia Auth", "ApexCharts"]
priority: "other"
order: 1
github: "https://github.com/jonjampen/healthdashboard"
link: ""
---

## Overview

**Health Dashboard** is a self-hosted, personal health telemetry platform designed to aggregate, store, and visualize historical health and fitness metrics. It allows for in-depth comparative analysis that goes beyond the capabilities of standard consumer fitness trackers.

## Motivation & Use Case

While consumer fitness devices capture granular health data, their native companion applications often restrict long-term access and limit data visualization tools. Critical historical metrics are often archived, requiring manual data requests to retrieve.

This project solves that limitation by giving me absolute ownership over my health data. The application utilizes custom ETL pipelines to import raw telemetry files, structure them into a flexible database, and render them in detailed, correlative layouts.

## Key Features

- **Time-Series Overview**: Seamless daily, weekly, monthly, and yearly historical aggregations.
- **Correlative Analysis**: Interactive charting system where users select and plot multiple health metrics concurrently to identify physiological trends.
- **PWA & Mobile Support**: Built as a Progressive Web App (PWA) with secure user authentication, allowing quick installation on mobile devices.

## Technical Architecture

- **SvelteKit & Svelte**: Powers the highly responsive frontend UI.
- **MongoDB**: Used as a document store to query diverse, non-uniform health metrics efficiently.
- **Python ETL**: Automated scripts designed to parse, clean, and format raw fitness exports before importing them into MongoDB.
- **Lucia Auth**: Handles secure, session-based user authentication.
- **ApexCharts**: Generates highly interactive, responsive time-series charts.
- **Shadcn-Svelte & TailwindCSS**: Delivers a premium, cohesive UI design.
