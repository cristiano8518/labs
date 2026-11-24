# Lab 14 — Lists & User Input (React Native / Expo Router)

A React Native app built with Expo Router and TypeScript. It combines two lab tasks
in one app: a **high-performance contacts list** built on `FlatList`, and a
**registration form** with live validation and keyboard handling.

## Features

### Task 1 — Contacts list (`task1/`)

- Renders 100+ generated contacts with `FlatList`
- Search by name
- Mark / unmark favourites
- Add a new contact and sort the list by name
- Pull-to-refresh and an empty-state message
- Performance tuning: `useCallback` for `renderItem` / `keyExtractor`, fixed-height rows with `getItemLayout`

### Task 2 — Registration form (`task2/`)

- Name, email and password fields
- Email validation with a regular expression
- Password rules: at least 8 characters and at least one digit
- Show / hide password toggle
- Submit button disabled while the form is invalid
- Keyboard handling with `KeyboardAvoidingView` and tap-outside-to-dismiss
- Success alert on registration

## How the tasks fit into the app

The lab work lives in `task1/` and `task2/`; the Expo Router app in `app/` is the shell that runs it.
The **Home** tab (`app/(tabs)/index.tsx`) imports both screens and shows a switcher bar
at the bottom to toggle between **Contacts** (Task 1) and **Register** (Task 2).
The **Explore** tab and the modal screen are the standard Expo Router starter screens.

## Tech stack

- [Expo SDK 54](https://docs.expo.dev/) with [Expo Router 6](https://docs.expo.dev/router/introduction/) (file-based routing, typed routes)
- React Native 0.81 / React 19
- TypeScript (strict mode)
- React Navigation 7 (bottom tabs), React Native Reanimated
- ESLint (`eslint-config-expo`)

## Project structure

```
.
├── app/                         # Expo Router routes
│   ├── _layout.tsx              # Root stack + theme
│   ├── modal.tsx
│   └── (tabs)/
│       ├── _layout.tsx          # Bottom tabs
│       ├── index.tsx            # Home: switches between Task 1 and Task 2
│       └── explore.tsx          # Expo starter screen
├── task1/src/
│   ├── screens/ContactsScreen.tsx
│   ├── utils/mockData.ts        # Contact generator
│   └── types.ts                 # Contact type
├── task2/src/
│   └── screens/RegistrationScreen.tsx
├── components/                  # Themed UI building blocks
├── constants/theme.ts
├── hooks/
├── assets/images/
└── app.json                     # Expo config
```

## Getting started

Requirements: Node.js 18+ and the Expo Go app (or an Android/iOS emulator).

```bash
npm install
npx expo start        # or: npm start
```

Scan the QR code with Expo Go, or press `a` (Android), `i` (iOS) or `w` (web).

Other scripts:

```bash
npm run android
npm run ios
npm run web
npm run lint
```

> Note: `npm run reset-project` is the Expo starter script that moves `app/` aside to start a blank project. Do not run it unless you want to start over.

## Author

Author: cristiano8518
