(function() {
	angular.module('cadastroEmpresa').controller('CicloCadastroCtrl', [
		'$http',
		'msgs',
		'tabs',
		CicloCadastroController
	])

	function CicloCadastroController($http, msgs, tabs) {
		const vm = this
		const url = 'http://localhost:3003/api/cicloCadastros'

		vm.refresh = function() {
			$http.get(url).then(function(response) {
				vm.cicloCadastro = {}
				vm.cicloCadastros = response.data
				tabs.show(vm, {tabList:true, tabCreate:true})
			})
		}

		vm.create = function() {
			
			$http.post(url, vm.cicloCadastro).then(function(response) {
				
				vm.refresh()
				msgs.addSuccess('Operacao realizada com sucesso!!')
			
			}).catch(function(response) {
				msgs.addError(response.data.errors)
			})
		}

		vm.showTabUpdate = function(cicloCadastro) {
			vm.cicloCadastro = cicloCadastro
			tabs.show(vm, {tabUpdate: true})
		}

		vm.showTabDelete = function(cicloCadastro) {
			vm.cicloCadastro = cicloCadastro
			tabs.show(vm, {tabDelete: true})
		}

		vm.update = function() {
			const updateUrl = `${url}/${vm.cicloCadastro._id}`
			$http.put(updateUrl, vm.cicloCadastro).then(function(response) {
				vm.refresh()
				msgs.addSuccess('Operacao realizada com sucesso!!')
			}).catch(function(response) {
				msgs.addError(response.data.errors)
			})
		}

		vm.delete = function() {
			const deleteUrl = `${url}/${vm.cicloCadastro._id}`
			$http.delete(deleteUrl, vm.cicloCadastro).then(function(response) {
				vm.refresh()
				msgs.addSuccess('Operacao realizada com sucesso!!')
			}).catch(function(response) {
				msgs.addError(response.data.errors)
			})
		}

		vm.refresh()
	}
})()