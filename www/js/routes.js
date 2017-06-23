angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.kNiaSaad', {
    url: '/index',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kNiaSaad.html',
        controller: 'kNiaSaadCtrl'
      }
    }
  })

  .state('menu.promoEs', {
    url: '/promocoes',
    views: {
      'side-menu21': {
        cache: false,
        templateUrl: 'templates/promoEs.html',
        controller: 'promoEsCtrl'
      }
    }
  })

  .state('menu.aClNica', {
    url: '/aClinica',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aClNica.html',
        controller: 'aClNicaCtrl'
      }
    }
  })

  .state('menu.antesDepois', {
    url: '/antesDepois',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antesDepois.html',
        controller: 'antesDepoisCtrl'
      }
    }
  })

  .state('menu.sugestEsTrabalheConosco', {
    url: '/sugestoes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sugestEsTrabalheConosco.html',
        controller: 'sugestEsTrabalheConoscoCtrl'
      }
    }
  })

  .state('menu.localizaOContatos', {
    url: '/localizacaoContatos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/localizaOContatos.html',
        controller: 'localizaOContatosCtrl'
      }
    }
  })

  .state('menu.compartilhamento', {
    url: '/compartilhamento',
    views: {
      'side-menu21': {
        templateUrl: 'templates/compartilhamento.html',
        controller: 'compartilhamentoCtrl'
      }
    }
  })

  .state('trabalheConosco', {
    url: '/trabalheconosco',
    templateUrl: 'templates/trabalheConosco.html',
    controller: 'trabalheConoscoCtrl'
  })

  .state('menu.instalaEs', {
    url: '/instalacoes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalaEs.html',
        controller: 'instalaEsCtrl'
      }
    }
  })

  .state('menu.bemEstar', {
    url: '/bemEstar',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bemEstar.html',
        controller: 'bemEstarCtrl'
      }
    }
  })

  .state('menu.salODeBeleza', {
    url: '/salaoBeleza',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salODeBeleza.html',
        controller: 'salODeBelezaCtrl'
      }
    }
  })

  .state('menu.estTica', {
    url: '/estetica',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estTica.html',
        controller: 'estTicaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

 .state('menu.reserva', {
    url: '/reserva/:valor',
    views: {
      'side-menu21': { 
        templateUrl: 'templates/reserva.html',
        controller: 'reservaController'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/index')

  

});