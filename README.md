# react-native-app

This template can be used to create your react-native-app.

## Run the template

1. Install required packages from npm packages:

    `npm install`

2. Setting up Emulators

    If you are on windows:

    1. Already has the emulator virtual device setup for Android:
        
        1. Open android studios and Start the emulator virtual device

        2. Run the step 3 command to start the application in android virtual device emulator.

    2. If you does not have emulator setup for android:

        1. Install android studios from `https://developer.android.com/studio`.

        2. After installation Open Android studios.

        3. Navigate to the `projects` --> `more actions` --> Click on `Virtual Device Manager`.

        4. Click on `Create Virtual Device` --> `Choose a device definition` screen select you prefered device like pixel 4 then click on `Next`.

        5. In `Select a system image` screen download your prefered android version need to be installed in emulator. like Nouget, etc then click on `Next`.

        6. In `Verify Configuration` screen if needed change the AVD Name or else click on `Finish`.

        7. Once go to `Device manager` screen and Click on the play/start icon of your device to run your emulator.

    If you are on mac:

    1. Already has the simulator setup for ios:
        
        1. Open Xcode and Start the simulator.

        2. Run the step 3 command to start the application in ios simulator.

    2. If you does not have simulator setup for ios:

        1. Download and Install Xcode

        2. Setup the details for simulator.

3. Go to your project folder and Run `npx expo start` to run the react-native-app in emulator/simulator.

    If you are running app in android emulator:

    1. Press `a`.

    If you are running app in mac xcode simulator:

    1. Press `i`.

## Note

    If you found any issue with expo app connecting in emulator or simulator conncet manually with example url in `exp://192.168.1.20:8081` in expo app and run.

4. You have successfully launched your app in emulator/simulator.

<!--
  Welcome to Tailwind Play, the official Tailwind CSS playground!

  Everything here works just like it does when you're running Tailwind locally
  with a real build pipeline. You can customize your config file, use features
  like `@apply`, or even add third-party plugins.

  Feel free to play with this example if you're just learning, or trash it and
  start from scratch if you know enough to be dangerous. Have fun!
-->
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <img src="/img/beams.jpg" alt="" class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
  <div class="relative bg-white px-6 pb-8 pt-5 shadow-2xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 w-52">
    <div class="flex-row flex justify-between">
    <div class="h-[60px] w-[60px] px-1 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    </div>
    <div class="h-[40px] w-[40px] px-1 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    </div>
    </div>
    <div class="px-1 py-1">
      <div class="mb-2 text-xl font-bold">Chemistry</div>
      <p class="text-base text-gray-700">It is involved with elements and compounds composed of atoms, molecules, and ions.</p>
    </div>
  </div>
</div>

