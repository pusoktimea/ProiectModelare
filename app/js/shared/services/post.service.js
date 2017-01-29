System.register(["./logging.service", "@angular/core", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var logging_service_1, core_1, http_1, PostService;
    return {
        setters: [
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            PostService = (function () {
                function PostService(http, loggingService) {
                    this.http = http;
                    this.loggingService = loggingService;
                    this.postsUrl = "http://localhost:3000/posts/";
                }
                PostService.prototype.getPosts = function () {
                    return this.http.get(this.postsUrl + "?_sort=id&_order=DESC")
                        .map(function (res) { return res.json(); })
                        .catch(this.loggingService.handleError);
                };
                PostService.prototype.getPost = function (id) {
                    return this.http.get(this.postsUrl + id)
                        .map(function (res) { return res.json(); })
                        .catch(this.loggingService.handleError);
                };
                PostService.prototype.save = function (post) {
                    var headers = new http_1.Headers({
                        "Content-Type": "application/json",
                    });
                    return this.http
                        .post(this.postsUrl, JSON.stringify(post), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.loggingService.handleError);
                };
                PostService.prototype.delete = function (post) {
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    return this.http
                        .delete(this.postsUrl + post.id, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.loggingService.handleError);
                };
                return PostService;
            }());
            PostService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http, logging_service_1.LoggingService])
            ], PostService);
            exports_1("PostService", PostService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9zaGFyZWQvc2VydmljZXMvcG9zdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT2EsV0FBVztnQkFHcEIscUJBQW9CLElBQVUsRUFBVSxjQUE4QjtvQkFBbEQsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBRjlELGFBQVEsR0FBRyw4QkFBOEIsQ0FBQztnQkFHbEQsQ0FBQztnQkFFTSw4QkFBUSxHQUFmO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLHVCQUF1QixDQUFDO3lCQUN4RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFTSw2QkFBTyxHQUFkLFVBQWUsRUFBVTtvQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3lCQUNuQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFTSwwQkFBSSxHQUFYLFVBQVksSUFBVTtvQkFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7d0JBQ3RCLGNBQWMsRUFBRSxrQkFBa0I7cUJBQ3JDLENBQUMsQ0FBQztvQkFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLE9BQU8sU0FBQSxFQUFDLENBQUM7eUJBQ3BELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVNLDRCQUFNLEdBQWIsVUFBYyxJQUFVO29CQUNwQixJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO29CQUVuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFDLE9BQU8sU0FBQSxFQUFDLENBQUM7eUJBQzFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7eUJBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUNMLGtCQUFDO1lBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtZQXRDWSxXQUFXO2dCQUR2QixpQkFBVSxFQUFFO2lEQUlpQixXQUFJLEVBQTBCLGdDQUFjO2VBSDdELFdBQVcsQ0FzQ3ZCOztRQUNELENBQUMiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL3Bvc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9zdH0gZnJvbSBcIi4uL21vZGVscy9wb3N0XCI7XG5pbXBvcnQge0xvZ2dpbmdTZXJ2aWNlfSBmcm9tIFwiLi9sb2dnaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SGVhZGVycywgSHR0cCwgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvc3RTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHBvc3RzVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgbG9nZ2luZ1NlcnZpY2U6IExvZ2dpbmdTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBvc3RzKCk6IE9ic2VydmFibGU8UG9zdFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucG9zdHNVcmwgKyBcIj9fc29ydD1pZCZfb3JkZXI9REVTQ1wiKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dpbmdTZXJ2aWNlLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zdChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxQb3N0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucG9zdHNVcmwgKyBpZClcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnaW5nU2VydmljZS5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUocG9zdDogUG9zdCk6IE9ic2VydmFibGU8UG9zdD4ge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdCh0aGlzLnBvc3RzVXJsLCBKU09OLnN0cmluZ2lmeShwb3N0KSwge2hlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dpbmdTZXJ2aWNlLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKHBvc3Q6IFBvc3QpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5kZWxldGUodGhpcy5wb3N0c1VybCArIHBvc3QuaWQsIHtoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5sb2dnaW5nU2VydmljZS5oYW5kbGVFcnJvcik7XG4gICAgfVxufVxuIl19
