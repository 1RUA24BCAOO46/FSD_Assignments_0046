# React Native Web + React-Bootstrap + Express

A small universal starter project:

- React Native / Expo for Android and iOS
- React Native Web + Vite for the browser
- React-Bootstrap for web-only UI components
- Express backend on a separate port

## Ports

- Web: http://localhost:5173
- Express API: http://localhost:4000
- Expo / Metro: 8081

## Install

From the project root:

```bash
npm run install:all
```

## Run web + API

```bash
npm run dev
```

Open:

- Website: http://localhost:5173
- API: http://localhost:4000
- API test: http://localhost:4000/api/hello

## Run mobile

In another terminal:

```bash
npm run native
```

For Android emulator:

```bash
npm run android
```

## Web entry file

The browser entry file is:

```text
client/src/index.web.jsx
```

It imports Bootstrap CSS and mounts `App.jsx`.

## Web UI file

The React-Bootstrap website is in:

```text
client/src/screens/HomeScreen.web.jsx
```

It includes:

- Navbar
- Hero section
- Responsive Bootstrap grid
- Cards
- Buttons
- Badges
- Alerts
- Spinner
- Accordion
- Modal
- Footer
- Express API status section

## Native UI file

The Android/iOS screen is:

```text
client/src/screens/HomeScreen.native.jsx
```

React-Bootstrap is intentionally not imported into this file because Bootstrap is browser/DOM-oriented.

## Physical Android/iPhone

Copy `client/.env.example` to `client/.env` and set your computer's LAN IP:

```env
EXPO_PUBLIC_API_URL=http://192.168.1.20:4000
```

Replace the IP with your own machine's LAN address.
