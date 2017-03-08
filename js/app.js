var  app = angular.module('helloworldApp', []);

app.controller('mainCtrl', function($scope) {
    $scope.entradaTexto = 'Hello World!';
   
    $scope.exibirConteudo = function(texto) {
        alert(texto);
    
    $scope.exibirNomeCompleto = function(nome, sobrenome) {
        alert(nome + ' ' + sobrenome);
    }

    }
});