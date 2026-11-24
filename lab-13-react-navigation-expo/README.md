# Lab 13 — React Navigation (Expo)

A React Native app built with Expo and TypeScript that demonstrates how to combine
**bottom tab navigation** with **nested native stack navigators**, typed route params,
and tab icons/badges.

## Features

- Bottom tab bar with four tabs: Home, Search, Notifications, Profile
- Each tab owns its own native stack navigator (nested navigation)
- Home stack: `Home → Profile` (passes a `userId` route param) and `Home → Settings`
- `goBack()` navigation from detail screens
- Focus-aware Ionicons in the tab bar and a badge on the Notifications tab
- Fully typed navigation (`ParamList` types for every navigator)

## Tech stack

- [Expo SDK 54](https://docs.expo.dev/) / React Native 0.81 / React 19
- TypeScript (strict mode)
- React Navigation 7 — `@react-navigation/bottom-tabs`, `@react-navigation/native-stack`
- `@expo/vector-icons` (Ionicons)

## Project structure

```
.
├── App.tsx                      # Root component (navigation + status bar)
├── index.js                     # Expo entry point (registerRootComponent)
├── app.json                     # Expo app config
└── src/
    ├── navigation/
    │   ├── RootNavigator.tsx    # NavigationContainer + bottom tabs
    │   ├── HomeStackNavigator.tsx
    │   ├── SearchStackNavigator.tsx
    │   ├── NotificationsStackNavigator.tsx
    │   ├── ProfileStackNavigator.tsx
    │   └── types.ts             # Typed route params for all navigators
    └── screens/
        ├── HomeScreen.tsx
        ├── ProfileScreen.tsx    # Reads userId from route.params
        ├── SettingsScreen.tsx
        ├── SearchScreen.tsx
        ├── NotificationsScreen.tsx
        └── ProfileTabScreen.tsx
```

## Getting started

Requirements: Node.js 18+ and the Expo Go app (or an Android/iOS emulator).

```bash
npm install
npx expo start        # or: npm start
```

Then scan the QR code with Expo Go, or press `a` (Android) / `i` (iOS) in the terminal.

Other scripts:

```bash
npm run android
npm run ios
npm run web           # first run: npx expo install react-dom react-native-web
```

## Author

Author: cristiano8518
