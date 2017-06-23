// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services','ngCordova'])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

.run(function($ionicPlatform, $state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
     if( ionic.Platform.isAndroid() )  
     {
        window.FirebasePlugin.getToken(function(token) {
            // save this server-side and use it to push notifications to this device
           //alert("Token do dispositivo: "+token);
        }, function(error) {
            console.error(error);
        });

        window.FirebasePlugin.onNotificationOpen(function(notification) {
          angular.forEach(notification, function(index, element){
           // alert('onNotificationOpen '+element);
            //$state.go('menu.promoEs', { url: "/promocoes"});
          });
           //alert('notificação '+notification);
            $state.go('menu.promoEs', { url: "/promocoes"});

        }, function(error) {
            console.error(error);
            //alert('onNotificationOpen '+error)
        });


      }

    if( ionic.Platform.isAndroid() )  { 
     admobid = { // for Android
        banner: 'ca-app-pub-3773811061508464/5926162034' // Change this to your Ad Unit Id for banner...
     };

     if(window.AdMob) 
     {
     // alert('funcionando');
        AdMob.createBanner( {
           adId:admobid.banner, 
           position:AdMob.AD_POSITION.BOTTOM_CENTER, 
           autoShow:true
        } );
      }
  }
    
   
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.controller('MotionController', function($scope, $cordovaAdMob, $ionicPlatform, $window) {
 
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});