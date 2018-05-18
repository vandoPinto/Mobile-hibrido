angular.module('app.controllers', [])
  
.controller('kNiaSaadCtrl', ['$scope', '$stateParams', '$ionicPlatform', '$cordovaAdMob', '$window', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	console.log("VANDO VANDO ")
	$scope.jsonTituloTextos = '';
	$scope.mensagemError = {
		bemEstar :{
			titulo: "Error de conexão",
			mensagem: "Nao foi possível atualizar as informações, por favor verifique sua conexão com a internet."
		},
		salao:{
			titulo: "Error de conexão",
			mensagem: "Nao foi possível atualizar as informações, por favor verifique sua conexão com a internet."	
		},
		estetica:{
			titulo: "Error de conexão",
			mensagem: "Nao foi possível atualizar as informações, por favor verifique sua conexão com a internet."
		}
	},

	

	function($scope, $ionicPlatform, $cordovaAdMob, $window) 
	{
		
		var adMobId = {
        admob_banner_key: 'ca-app-pub-3773811061508464/7311190030',
        admob_interstitial_key: 'ca-app-pub-3773811061508464/4030626438'
	    };
	     
	    var adMobPosition = {
	        BOTTOM_CENTER: 8
	    };

		 $scope.showBannerAd = function() {
	         console.log("VANDO VANDO VANDO VANDO")
	        try {
	             
	            console.log('Mostrando banner adicionado');          
	             
	            $cordovaAdMob.createBannerView({
	                adId: adMobId.admob_banner_key,
	                position: adMobPosition.BOTTOM_CENTER,
	                isTesting: false,
	                autoShow: true
	            });
	 
	        } catch (e) {
	            alert(e);
	        }       
	    }
	     
	    $scope.showInterstitialAd = function() {
	         
	        try {
	             
	            console.log('Show Interstitial Ad');            
	 
	            $cordovaAdMob.createInterstitialView({
	                adId: adMobId.admob_interstitial_key,
	                isTesting: false,
	                autoShow: true
	            });
	             
	        } catch (e) {
	            //alert(e);
	        }       
	    } 
	}



}])

.controller('GanharDinheiro', function($scope, $ionicPlatform, $cordovaAdMob, $window) {
  $ionicPlatform.ready(function() {
 
    var adMobId = {
        admob_banner_key: 'ca-app-pub-3773811061508464/7311190030',
        admob_interstitial_key: 'ca-app-pub-3773811061508464/4030626438'
    };
     
    var adMobPosition = {
        BOTTOM_CENTER: 8
    };  
     
    $scope.showBannerAd = function() {
         
        try {
             
            console.log('Show Banner Ad');          
             
            $cordovaAdMob.createBannerView({
                adId: adMobId.admob_banner_key,
                position: adMobPosition.BOTTOM_CENTER,
                isTesting: false,
                autoShow: true
            });
 
        } catch (e) {
            //alert(e);
        }       
    }
     
    $scope.showInterstitialAd = function() {
         
        try {
             
            console.log('Show Interstitial Ad');            
 
            $cordovaAdMob.createInterstitialView({
                adId: adMobId.admob_interstitial_key,
                isTesting: false,
                autoShow: true
            });
             
        } catch (e) {
            //alert(e);
        }       
    }

    $scope.dindin = function()
    {
      if(window.AdMob) 
         {
            AdMob.createBanner( {
               adId:admobid.banner, 
               position:AdMob.AD_POSITION.BOTTOM_CENTER, 
               autoShow:true
            } );
        }
    }

  });   
})


   
.controller('promoEsCtrl', ['$scope', '$stateParams', 'jsonService', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, jsonService, $rootScope) {

	$scope.doRefresh = function() 
	{
		$scope.jsonTituloTextos = [];
		jsonService.success(function(data){
			console.log(data[0].promocao[0].preco)
			
			$scope.jsonTituloTextos = data[0];
			 //$rootScope.$broadcast('updateItems', data[0]);

		}).error(function(error){
			$scope.jsonTituloTextos = $scope.mensagemError;

		}).finally(function() {
	         // Stop the ion-refresher from spinning
	         $scope.$broadcast('scroll.refreshComplete');
	         
	       });
      
      }


       


	jsonService.success(function(data){
		$scope.jsonTituloTextos = data[0];
	}).error(function(error){
		console.log($scope.mensagemError);
		console.log("Deu erro "+error);
		$scope.jsonTituloTextos = $scope.mensagemError;
		console.log($scope.jsonTituloTextos);
	});


	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{/*alert('Não é Android');*/} 

}])
   
.controller('aClNicaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{/*alert('Não é Android');*/}

}])
   
.controller('antesDepoisCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{}

}])

.controller('mailto',['$scope','$stateParams',
function($scope, $stateParams ){

	$scope.EnviarMensagem = function(){
		let mensagem = document.getElementById('mensagem').value;
		let nomes = document.getElementById('nome').value;
		let email = document.getElementById('email').value;
		let telefone = document.getElementById('telefone').value;
		let assunto = document.getElementById('assunto').value;

		let corpoMensagem = "Nome: "+nomes+"%0D%0A"+
							"Email: "+email+"%0D%0A"+
							"Telefone: "+telefone+"%0D%0A"+"%0D%0A"+
							""+mensagem;
	    var mailWindow = window.open("mailto:esteticakf@gmail.com?subject="+assunto+
	    	"&body="+corpoMensagem);     
	    mailWindow.close();
	 }
}])
   
.controller('sugestEsTrabalheConoscoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName




function ($scope, $stateParams) {
	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{
	}


}])
   
.controller('localizaOContatosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{}

}])
   
.controller('compartilhamentoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{}

}])
   
.controller('trabalheConoscoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{}

}])
   
.controller('instalaEsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{}

}])
   
.controller('bemEstarCtrl', ['$scope', '$stateParams', 'jsonService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, jsonService) {
	
	jsonService.success(function(data){
		$scope.jsonTituloTextos = data[0];
	}).error(function(error){$scope.jsonTituloTextos= $scope.mensagemError;});

	if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{}

}])
   
.controller('salODeBelezaCtrl', ['$scope', '$stateParams', 'jsonService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, jsonService) {
	
	jsonService.success(function(data){
		$scope.jsonTituloTextos = data[0];
	}).error(function(error){$scope.jsonTituloTextos= $scope.mensagemError;});


	 if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
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
	  }else{}

}])
   
.controller('estTicaCtrl', ['$scope', '$stateParams', 'jsonService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, jsonService) {
	

	
	jsonService.success(function(data){
		$scope.jsonTituloTextos = data[0];
	}).error(function(error){
		console.log($scope.mensagemError);
		console.log("Deu erro "+error);
		$scope.jsonTituloTextos = $scope.mensagemError;
		console.log($scope.jsonTituloTextos);
	});

	 if( ionic.Platform.isAndroid() )  { 
	     admobid = { // for Android
	        banner: 'ca-app-pub-3773811061508464/7311190030' // Change this to your Ad Unit Id for banner...
	     };

	     if(window.AdMob) 
	     {
	     // alert('funcionando');
	        AdMob.createBanner( {
	           adId:admobid.banner, 
	           position:AdMob.AD_POSITION.BOTTOM_CENTER, 
	           autoShow:true,
	        } );
	    }
	  }else{}

}])

.controller('reservaController', ['$scope', '$stateParams', 'jsonService', '$state', '$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, jsonService) {
	/*$rootScope.$state = $state;
	alert($rootScope.$state)
    $rootScope.$stateParams = $stateParams;
    alert($rootScope.$stateParams)
    $rootScope.$stateParams = $stateParams.valor;
    alert($rootScope.$stateParams.preco)
	//var textoPromocao = angular.fromJson($stateParams);
//$scope.textoPromocao = JSON.stringify($stateParams.valor);
	//var item = $stateParams.idItem;
	//alert('1 '+$rootScope.$stateParams);
	//alert('2 '+$stateParams[0]);
//alert(JSON.parse($stateParams).titulo)
	//alert('3 '+$scope.textoPromocao);
*/

	jsonService.success(function(data){
		$scope.jsonTituloTextos = data[0];
	}).error(function(error){
		console.log($scope.mensagemError);
		console.log("Deu erro "+error);
		$scope.jsonTituloTextos = $scope.mensagemError;
		console.log($scope.jsonTituloTextos);
	});

	$scope.agendar = function(){
				
		let nomes = document.getElementById('nome').value;
		let telefone = document.getElementById('telefone').value;
		let procedimento = document.getElementById('procedimento').value;
		let data = document.getElementById('data').value;
		console.log(data)
		data = data.split('-').reverse().join('/');
		let horario = document.getElementById('horario').value;
		let mensagem = document.getElementById('mensagem').value;

		let corpoMensagem = "Nome: "+nomes+"%0D%0A"+							
							"Telefone: "+telefone+"%0D%0A"+
							"Procedimento: "+procedimento+"%0D%0A"+
							"Data: "+data+"%0D%0A"+
							"Horario: "+horario+"%0D%0A"+"%0D%0A"+
							""+mensagem;
	    var mailWindow = window.open("mailto:esteticakf@gmail.com?subject=-- Pré-Reserva --"+
	    	"&body="+corpoMensagem);     
	    mailWindow.close();
	 }
	 

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
