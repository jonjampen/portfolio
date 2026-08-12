---
title: "PulseMetrics: Monitoring"
summary: "High-availability uptime monitoring platform built with Next.js, Go, and AWS."
tags: ["Go", "Next.js", "AWS", "Terraform", "PostgreSQL"]
priority: "featured"
order: 2
github: "https://github.com/jonjampen"
link: ""
impact: "Engineered with a distributed check-runner architecture for sub-second precision."
---

## Overview

**PulseMetrics** is a modern, high-availability status monitoring and uptime tracking platform. Designed for engineers and system administrators, it provides real-time visibility into microservices, web servers, and databases with sub-second alerting times.

## Architecture

- **Go Runner Cluster**: Lightweight, globally distributed daemon agents that perform ICMP ping, HTTP, and TCP handshakes.
- **Next.js Dashboard**: A glassmorphic web dashboard providing live charts, status indicators, and SLA performance metric calculations.
- **AWS Infrastructure**: Managed via Terraform, deploying runner tasks to Amazon ECS and RDS PostgreSQL database clusters.
- **Real-Time Notification engine**: Integrated with Slack, Discord, and Telegram webhooks for instant downtime notifications.

## Key Takeaways

Through this project, I gained deep expertise in configuring scalable multi-region AWS environments, writing concurrent network checking agents in Go, and automating resource provisioning using Infrastructure as Code (IaC) with Terraform.
