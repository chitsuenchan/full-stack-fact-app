# Full Stack Fact REACT Application
![my screenshot](Resources/readme-qa-image.jpg)

**Table of Contents**
- [Introduction](#introduction)
- [Motivation](#motivation)
- [Technology Used](#technologyUsed)
- [Build Status](#buildStatus)
- [Features](#features)
- [Installation](#installation)
- [Execution](#execution)

## Introduction <a name="introduction"></a>
A full stack application where you can share facts across various categories and rank them.

## Motivation <a name="motivation"></a>
This is a personal learning project aimed to further knowledge of front-end development by using modern frameworks such as REACT while also learning how to set up a back-end database to host the fact information.

## Technology Used <a name="technologyUsed"></a>
<table>
  <tbody>
    <tr>
      <td>Language</td>
      <td>JavaScript, HTML and CSS</td>
    </tr>
    <tr>
      <td>Frameworks</td>
      <td>REACT</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>Supabase (vendor solution for back-end database)</td>
    </tr>
    <tr>
      <td>Deployment</td>
      <td>Netlify (vendor solution for online web app hosting)</td>
    </tr>
  </tbody>
</table>

## Build Status <a name="buildStatus"></a>
Project is completed.

## Features <a name="features"></a>
- Share a fact
- Drill down menu
- Vote on buttons
- Source
- Disputed
- Resizable window

**Share a fact**



# Installation <a name="installation"></a>

**Pre-requisites**
* [Appium installed](https://appium.io/docs/en/about-appium/getting-started/?lang=en) - the webserver used to execute commands on a mobile device
* Samsung S20 (or emulate S20 device from Android Studios)

## Setting up environment
1. Download the MyObservatory app APK - [Link here](https://m.apkpure.com/myobservatory-%E6%88%91%E7%9A%84%E5%A4%A9%E6%96%87%E5%8F%B0/hko.MyObservatory_v1_0)
2. Place the APK in the base directory
3. Open up the Command Line in the base directory
4. Run the code below to install package dependencies 
```python
pip install -r requirements.txt
```

## Setting up the Appium Server
1. Open up the Appium application
2. Start server with Port = 4723
3. Connect the S20 device to your PC with USB debugging ON in the developer options
4. Open the Windows Command Line and execute $adb devices to find your device name
5. Open the config.py and edit the "deviceName": within the desired_cap dictionary to match the device name from step 4
```python
desired_cap = {
    "platformName": "Android",
    "deviceName": "DEVICE_NAME_HERE",
    "platformVersion": "10.0",
    "app": app_path,
    "newCommandTimeout": 0,
    'appPackage': '',
    'appWaitActivity': ''
}
```
# Execution <a name="execution"></a>
Executing Pytest will make it read the test_suite.py which contains the automated test cases and run the testing suite. The steps to execute Pytest are: 
1. Open the Windows Command Line
2. Execute $pytest
5. Pytest will return the results in the command window

## Example of results
![my screenshot](Resources/example_executed.PNG)











# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
