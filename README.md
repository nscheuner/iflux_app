# Iflux - Academic Citizen Delation App

<a name="top"></a>

* [Author](#author)
* [Prerequisites](#pre)
* [Installation](#install)
* [Final APK](#APK)
* [Features](#features)
* [Demonstration](#demo)
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

<a name="demo"></a>
## Demonstration
# Logister
![alt Img1_Logister](http://ac2p.ch/tmp/1_Logister.PNG)
Auth page calls the "logister" ressource from the API, put whatever you want to login, auth is based on JWT token.
# Issue Map
![alt Img1_MAP](http://ac2p.ch/tmp/2_Map.PNG)
This is the default page once logged in, you see all the issue display on the map, you can click on them to see information pop-up and hit details to open the issue details.
The app will try to get your position to center the map, when geolocation can't access your postion you will be focus to Yverdon where default issue are based
# Issue List
![alt Img3_List](http://ac2p.ch/tmp/3_List.PNG)
The issue list shows the 20 last issue added, you can hit the more button to load the 20 next.
You can use full text search bar to search trough the issue (only the one displayed)
Hit one specific issue to seee details
# Issue Details
Nothing special here, you can hit the "+" button for tag and comment to show/hide tags and comments (if there is any) for the specific issue
# New issue
![alt Img4_New](http://ac2p.ch/tmp/4_New.PNG)
Here you can create a new issue, Type as to be choosen from the given list, description is mandatory and ou can add tag (poor design to be improved..) just hit enter or mobile equivalent to assign tag.
Geolocation is automatic, in case geolocation is not possible, issue will have position  [46.78;6.65] (Yverdon)
Hit the camera button to take a picture with you mobile device (only work on mobile devices), please be patient server is slow :)
Once your picture is uploaded hit add and the app will redirect you on the issue details of your newly added app.



<a name="bug"></a>
## Known bugs

Currently there is a problem with the API when sorting the issue.
We get the different geolocation to display the issue on the map but retrieve always the same description and picture.
It does not affect the issue list
<a href="#top">Back to top</a>
<a name="todo"></a>
## ToDo list

“Mon projet préféré ? C'est le prochain.”

* Solve pop-up map issues problem
* Enhance pop-up styling
* Implement admin function(such as issue deletion)
* Enhance tag styling
* Handle issue comments
* Deploy "real" ACL and user base
