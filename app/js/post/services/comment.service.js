System.register(["../../shared/services/logging.service", "@angular/core", "@angular/http"], function (exports_1, context_1) {
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
    var logging_service_1, core_1, http_1, CommentService;
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
            CommentService = (function () {
                function CommentService(http, loggingService) {
                    this.http = http;
                    this.loggingService = loggingService;
                    this.postsUrl = "http://localhost:3000/posts/";
                    this.commentsUrl = "http://localhost:3000/comments/";
                }
                CommentService.prototype.getComments = function (postId) {
                    return this.http.get(this.postsUrl + postId + "/comments?_sort=id&_order=DESC")
                        .map(function (res) { return res.json(); })
                        .catch(this.loggingService.handleError);
                };
                CommentService.prototype.save = function (comment) {
                    var headers = new http_1.Headers({
                        "Content-Type": "application/json",
                    });
                    return this.http
                        .post(this.postsUrl + comment.postId + "/comments", JSON.stringify(comment), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.loggingService.handleError);
                };
                CommentService.prototype.delete = function (comment) {
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    return this.http
                        .delete(this.commentsUrl + comment.id, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .catch(this.loggingService.handleError);
                };
                return CommentService;
            }());
            CommentService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http, logging_service_1.LoggingService])
            ], CommentService);
            exports_1("CommentService", CommentService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9wb3N0L3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9hLGNBQWM7Z0JBSXZCLHdCQUFvQixJQUFVLEVBQVUsY0FBOEI7b0JBQWxELFNBQUksR0FBSixJQUFJLENBQU07b0JBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO29CQUg5RCxhQUFRLEdBQUcsOEJBQThCLENBQUM7b0JBQzFDLGdCQUFXLEdBQUcsaUNBQWlDLENBQUM7Z0JBR3hELENBQUM7Z0JBRU0sb0NBQVcsR0FBbEIsVUFBbUIsTUFBYztvQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLGdDQUFnQyxDQUFDO3lCQUMxRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFTSw2QkFBSSxHQUFYLFVBQVksT0FBZ0I7b0JBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO3dCQUN0QixjQUFjLEVBQUUsa0JBQWtCO3FCQUNyQyxDQUFDLENBQUM7b0JBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO3lCQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBQyxPQUFPLFNBQUEsRUFBQyxDQUFDO3lCQUN0RixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO3lCQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFTSwrQkFBTSxHQUFiLFVBQWMsT0FBZ0I7b0JBQzFCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7b0JBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUMsT0FBTyxTQUFBLEVBQUMsQ0FBQzt5QkFDaEQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzt5QkFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBQ0wscUJBQUM7WUFBRCxDQWpDQSxBQWlDQyxJQUFBO1lBakNZLGNBQWM7Z0JBRDFCLGlCQUFVLEVBQUU7aURBS2lCLFdBQUksRUFBMEIsZ0NBQWM7ZUFKN0QsY0FBYyxDQWlDMUI7O1FBQ0QsQ0FBQyIsImZpbGUiOiJwb3N0L3NlcnZpY2VzL2NvbW1lbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2luZ1NlcnZpY2V9IGZyb20gXCIuLi8uLi9zaGFyZWQvc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gIFwiLi4vbW9kZWxzL2NvbW1lbnRcIjtcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SGVhZGVycywgSHR0cCwgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1lbnRTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHBvc3RzVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcG9zdHMvXCI7XG4gICAgcHJpdmF0ZSBjb21tZW50c1VybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2NvbW1lbnRzL1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGxvZ2dpbmdTZXJ2aWNlOiBMb2dnaW5nU2VydmljZSkge1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb21tZW50cyhwb3N0SWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q29tbWVudFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMucG9zdHNVcmwgKyBwb3N0SWQgKyBcIi9jb21tZW50cz9fc29ydD1pZCZfb3JkZXI9REVTQ1wiKVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dpbmdTZXJ2aWNlLmhhbmRsZUVycm9yKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZShjb21tZW50OiBDb21tZW50KTogT2JzZXJ2YWJsZTxDb21tZW50PiB7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0KHRoaXMucG9zdHNVcmwgKyBjb21tZW50LnBvc3RJZCArIFwiL2NvbW1lbnRzXCIsIEpTT04uc3RyaW5naWZ5KGNvbW1lbnQpLCB7aGVhZGVyc30pXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMubG9nZ2luZ1NlcnZpY2UuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoY29tbWVudDogQ29tbWVudCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLmRlbGV0ZSh0aGlzLmNvbW1lbnRzVXJsICsgY29tbWVudC5pZCwge2hlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmxvZ2dpbmdTZXJ2aWNlLmhhbmRsZUVycm9yKTtcbiAgICB9XG59XG4iXX0=
