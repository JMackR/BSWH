# BSWH

# Description: Display list of names 

![Image of IOS]


![Image of ANDROID]


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




