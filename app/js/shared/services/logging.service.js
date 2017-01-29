System.register(["@angular/core", "rxjs/Observable"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, Observable_1, LoggingService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            LoggingService = (function () {
                function LoggingService() {
                }
                LoggingService.prototype.handleError = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : "Server error";
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                return LoggingService;
            }());
            LoggingService = __decorate([
                core_1.Injectable()
            ], LoggingService);
            exports_1("LoggingService", LoggingService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9zaGFyZWQvc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWEsY0FBYztnQkFBM0I7Z0JBUUEsQ0FBQztnQkFOVSxvQ0FBVyxHQUFsQixVQUFtQixLQUFVO29CQUN6QixJQUFJLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTzt3QkFDeEMsS0FBSyxDQUFDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLEdBQUcsY0FBYyxDQUFDO29CQUM1RSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN0QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0wscUJBQUM7WUFBRCxDQVJBLEFBUUMsSUFBQTtZQVJZLGNBQWM7Z0JBRDFCLGlCQUFVLEVBQUU7ZUFDQSxjQUFjLENBUTFCOztRQUNELENBQUMiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2luZ1NlcnZpY2Uge1xuXG4gICAgcHVibGljIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgbGV0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOlxuICAgICAgICAgICAgZXJyb3Iuc3RhdHVzID8gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dH1gIDogXCJTZXJ2ZXIgZXJyb3JcIjtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICAgIH1cbn1cbiJdfQ==
