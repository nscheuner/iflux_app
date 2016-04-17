# Iflux - Academic Citizen Delation App

<a name="top"></a>

* [Author](#author)
* [Prerequisites](#pre)
* [Installation](#install)
* [Final APK](#APK)
* [Features](#features)
* [Known bug](#bug)
* [ToDo list](#todo)


<a name="author"></a>
## Author: Nicolas S. & Lukas S. - MM42 - HEIG-VD
<a name="pre"></a>
## Prerequisites

This academic projet is base on [this article](http://www.iflux.io/use-case/2015/02/03/citizen-engagement.html) and [this course repository](https://github.com/SoftEng-HEIGVD/Teaching-HEIGVD-CM_WEBS-2016).

<a name="install"></a>
## Installation

The aim of this projet is to build a mobile app that interacts with an API.
If you wish to use our code you will need the following:

* Projet is built with [angular](https://angularjs.org/ be sure to check the doc if you want play with the code
* [Node.js](https://nodejs.org)(v.5.x.x not supported)
You could just us the GUI
* [Ionic](http://ionicframework.com/)
```sh
    $ npm install -g ionic cordova
```
* Git clone this rep.
* Install/Update dependencies 
```sh
    $ npm install && bower install
```
* Create 'production' and 'development' config filed in 'config' base on the 'sample.json' provided gulp file is already configurated so that you can switch between production and development like this.
```sh
    $ gulp config-production
```
**NOTE** We used [Mapbox](https://www.mapbox.com/) and a custom image hoster API, feel free to work with whatever you want.
* The app requires several cordova plugin we will just give you the complete installation line (you are welcome)
```sh
    $ cordova plugin add cordova-plugin-geolocation && cordova plugin add cordova-plugin-camera
    && cordova plugin add cordova-plugin-console && cordova plugin add cordova-plugin-device
    && cordova plugin add cordova-plugin-splashscreen && cordova plugin add cordova-plugin-statusbar
    && cordova plugin add cordova-plugin-whitelist && cordova plugin add ionic-plugin-keyboard
```


<a name="APK"></a>
## Final APK
You could also try our built projet. Get the [APK](http://www.)


<a href="#top">Back to top</a>



<a name="features"></a>
## Features

Based on the original feature suggestion, we impleted the user part of the app (no admin function)


The proposed app allow citizens to do the following:

* add new issues:
  * With type and description;
  * the user can take a photo of the issue;
  * the issue can be geolocated;
  * Add tags to the issue
* see existing issues on an interactive map;
* browse the list of existing issues:
  * issues sorted by date;
* see the details of an issue:
  * date;
  * description;
  * picture;
  * comments;
  * Tags;
* see user related issues



<a href="#top">Back to top</a>



<a name="bug"></a>
## Known bugs

Currently there is a problem with the API when sorting the issue.
We get the different geolocation to display the issue on the map but retrieve always the same description and picture.
It does not affect the issue list

<a name="todo"></a>
## ToDo list

“Mon projet préféré ? C'est le prochain.”

* Solve pop-up map issues problem
* Enhance pop-up styling
* Implement admin function(such as issue deletion)
* Handle issue comments
* Deploy "real" ACL and user base
