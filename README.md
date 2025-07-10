# 📦 Delayed Stage Reminder

This is a learning project.

Service where you can manage delivery stages.

## Description

As a manager, you can create a new order, edit, and delete it.

There are 5 stages:

- 📦 Order prepared
- 📤 Dispatched from warehouse
- 🚚 In transit
- 📥 Arrived at delivery location
- ✅ Delivered

If product delivery delayed on on of the stages for 12 or more hours, you'll be notified.

## 📝 Requirements

### Dashboard

| Create a new order | Edit an order | Delete an order | Make statuses |
| ------------------ | ------------- | --------------- | ------------- |
| [x]                | [x]           | [x]             | [x]           |

### Telegram bot

| Notify when product delivery delayed |
| ------------------------------------ |
| [x]                                  |

## Setup

1. Clone the repository

```bash
$ git clone https://github.com/Hleb4ikk/Delayed-Stage-Reminder
cd Delayed-Stage-Reminder
$ npm install
```

## Build

```bash
$ npm run build
```

Internally that command calls for next to build the project.

# Run

```bash
$ npm run dev
```

Internally that calls for next to run the project.
