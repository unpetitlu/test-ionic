angular.module('starter.factories', [])
.factory('serviceName', function($q, $firebaseObject, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var obj = $firebaseObject(ref.child('user'));

	return {
		doStuff: function(x){
			var defer = $q.defer();
			obj.$loaded().then(function(){
				defer.resolve(obj);
			});

			return defer.promise;
		},
		doMoreStuff: function(){
			return "hello";
		}
	}
})