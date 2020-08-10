# BSWH

# Description: Display list of names 

## Features to look for:
 * Fully operational Death Star and Firebase Auth system with Email/Facebook/Apple authentication. You will be signing in to firebase if you would like to see the backend set up shoot me an email and I'll add your creds to the console.
 * Navigation system using react-navigation v5 utilizing React Hooks Context to provide needed data and custom hook functionality to an authenticated user
 * App Context provider can be found in the /providers folder
 * Custom Hooks used to provide the selected user to other parts of the app
 * Custom Axios hook to fetch the data 
 * When the data is fetched the array of users are filtered and sorted by the users last name and displayed alphabetically
 * Had some fun regexing... nobody like regexing
 * When a user is selected you are navigated to the details screen when there is a handy little function to look for missing data and avoid displaying unused and avoid potential crashed from nested props.
 

# Setting up the development environment 

- [x] Brew
- [x] Node
- [x] watchman
- [x] cocoapods
- [x] React-native-cli
- [x] typescript template


- [x] clone repo 

# Server installation 
- [x] cd /server
- [x] yarn


# App Installation
- [x] cd to project dir 
- [x] yarn 

** There is a postinstall script created to make your life a little better by installing the Pods and Jettify all dependencies

** In the root project folder cmdline 

## Start the Rest Api Server
- [x] yarn server

## Start IOS 
- [x] yarn ios

## Start ANDROID: open AVD manager/launch a device 

- [x] YOU may or may not need to cd android/local.properties and add sdk.dir=/Users/<YOUR_USERNAME>/Library/Android/sdk
- [x If the file doesn't exist add local.properties to your tandem/android/

- [x] yarn android


# App Structure

## STYLING

** A custom styling architecture is implemented to avoid inline styles as much as possible

*All styles used are memoized when using mergeStyles from /utils/styles/merge-styles*
*a custom screen size scalling method is added moderateScale /utils/styles/scaling helpful for sizing text across multiple devices*
*typography, colors, layout are all controlled in the /theme folder *


## COMMON COMPONENT
* /components
* Button
* Gauge =>"Tile"
* Text
* TextField => TextInput
* Dashboard

## SCREENS => Containers
* /screens
* Home 

** Folder structures are setup with each component having a named file and an index file for export this system helps when you have multiple files open
You don't have a bunch of "index" files in your editor
This also allows you to keep your any presets, props, and test files contained within **


# Testing suite
- [x] yarn test
* using jest and enzyme

** Several test don't pass didn't have time to finish **

** Used typescript as much as possible time constaints forced me to get sloppy to get it done on time **




