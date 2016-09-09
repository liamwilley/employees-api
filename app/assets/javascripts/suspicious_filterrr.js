angular.module("app").filter('suspicious', [function () {
  return function(employees) {
    if (employees) {
      var suspiciousEmployees = [];

      var date = new Date();
      var thisYear = date.getFullYear();
      var seventyYearsAgo = thisYear - 70;

      for(var i=0;i<employees.length;i++) {
        var birthYear = parseInt(employees[i].birthdate.substring(0,4));
        if (birthYear < seventyYearsAgo) {
          suspiciousEmployees.push(employees[i]);
        };
      }
      return suspiciousEmployees;
    }
  }
}]);