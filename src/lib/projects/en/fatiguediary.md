---
title: 'Fatigue Diary'
summary: 'Comprehensive web tracker for patients with Chronic Fatigue Syndrome (CFS).'
tags: ['Next.js', 'React', 'MySQL', 'TailwindCSS']
priority: 'featured'
order: 3
github: 'https://github.com/jonjampen/fatiguediary'
link: 'https://fatiguediary.ch'
impact: 'Over 400 registered users. Nominated for the best Matura thesis.'
---

## Overview

**Fatigue Diary** is a patient-centric web logging application developed to help individuals suffering from Chronic Fatigue Syndrome (CFS/ME), Long COVID, and Multiple Sclerosis track, visualize, and analyze their daily energy reserves. The project was originally conceived as my Matura thesis and has since evolved into a live utility used by patients and recommended by therapists across Switzerland.

## The Problem

Managing Chronic Fatigue Syndrome requires strict energy budgeting, commonly known as _pacing_. Traditionally, patients track their hourly energy levels, sleep, and physical activities on physical paper charts to plan their days and prevent post-exertional malaise (PEM). However, paper tracking is inefficient, difficult to analyze over long periods, and tedious to maintain.

The goal of this project was to determine whether a dedicated web application could provide a more comfortable, practical, and analytical alternative to paper logs.

## Key Features

- **Energy Tracking**: Interactive hourly and daily logs for recording fatigue levels, sleep hours, activity duration, and medication.
- **Visual Analytics**: Dynamic, responsive charts mapping correlation trends between active periods and subsequent fatigue triggers.
- **Activity Impact Rating**: Programmatic analysis rating activities based on their impact on energy levels, calculated using historical data from the past month.
- **PDF Export**: Generates compact activity reports designed for patients to share directly with general practitioners, specialists, and insurance providers.
- **Bilingual Interface**: Built with user-friendly layouts in both English and German to accommodate a wider patient demographic.

## Validation & Reach

The application currently supports **more than 400 registered active users**. During its development, Fatigue Diary was tested and reviewed by approximately 15 specialized therapists and an equal number of patients. The feedback confirmed that the digital diary offers a significantly more efficient, practical, and insightful way to track energy compared to paper charts.

For its social value and engineering quality, the project received a nomination for Solothurn's **best Matura thesis** award.

## Technical Evolution

The project was originally developed using PHP without a frontend framework. In 2023, I completely rebuilt the application from the ground up using **Next.js** and **React** to modernize the stack, improve load times, and leverage reactive components.

### Libraries & Tools:

- **Shadcn/ui**: Modern design component primitives.
- **NextAuth**: Secure session management.
- **ApexCharts**: Interactive time-series data visualizations.
- **next-pwa**: Progressive web app support for offline capability and mobile installation.

## Publications & Links

For an in-depth look at the scientific and technical details of the project, you can download my full Matura research paper:
[Project Description (Matura Paper) 📝](https://github.com/jonjampen/fatiguediary/blob/main/docs/maturapaper/matura_paper_jon_jampen.pdf)

Visit the application or get in touch:
[www.fatiguediary.ch](https://www.fatiguediary.ch) | [info@fatiguediary.ch](mailto:info@fatiguediary.ch) | Instagram: [@fatiguediary.ch](https://www.instagram.com/fatiguediary.ch/)
