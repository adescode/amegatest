# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions step, before proceeding.

## Step 1: Install dependencies

First, you will need to install package dependencies

To start installation, run the following command from the _root_ of your React Native project:

```bash
yarn install
```

## Step 2: For ios you need to install pods

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To install pods, run the following command from the _root_ of your React Native project:

```bash
# navigate to ios folder
cd ios

# then run
pod install
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# issue

The Fetching of Live forex data then saving it in store with the updates that follow, make the Market screen fetch took longer to load. This can be optimize, probably to move websocket directly to market screen component and mutate the state directly.

# Library

To learn more about React Native, take a look at the following resources:

- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage#readme) - For Local storage but later switch to zustand
- [zustand](https://github.com/pmndrs/zustand) - For Global **store** management
- [react-native-snap-carousel](https://reactnative.dev/docs/getting-started) - For the Dashboard **carousel**.
- [react navigation](https://reactnavigation.org) -For screen **Navigation**.