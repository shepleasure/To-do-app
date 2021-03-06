var model = {
			user: "Qwinix",
			items: [{ action: "Buy Shoes", done: false },
			{ action: "Code", done: false },
			{ action: "Collect Tickets", done: true },
			{ action: "Call Joe", done: false }]
		};

		var todoApp = angular.module("todoApp", []);

		todoApp.filter("checkedItems", function () {
			return function (items, showComplete) {
				var resultArr = [];
				angular.forEach(items, function (item) {
					if (item.done == false || showComplete == true) {
						resultArr.push(item);
					}
				});
				return resultArr;
			}
		});

		todoApp.controller("ToDoCtrl", function ($scope) {

			$scope.todo = model;

			$scope.incompleteCount = function () {
				var count = 0;
				angular.forEach($scope.todo.items, function (item) {
					if (!item.done) { count++ }
				});
				return count;
			}


			$scope.addNewItem = function (actionText) {
				$scope.todo.items.push({ action: actionText, done: false });
			}

		});