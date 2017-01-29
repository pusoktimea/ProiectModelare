System.register(["../../shared/services/post.service", "../models/comment", "../services/comment.service", "@angular/core", "@angular/router", "rxjs/Observable"], function (exports_1, context_1) {
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
    var post_service_1, comment_1, comment_service_1, core_1, router_1, Observable_1, PostComponent, PostComponent_1;
    return {
        setters: [
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (comment_1_1) {
                comment_1 = comment_1_1;
            },
            function (comment_service_1_1) {
                comment_service_1 = comment_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            PostComponent = PostComponent_1 = (function () {
                function PostComponent(postService, commentService, route, router) {
                    this.postService = postService;
                    this.commentService = commentService;
                    this.route = route;
                    this.router = router;
                }
                PostComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.comment = new comment_1.Comment();
                    this.route.params.forEach(function (params) {
                        if (params[PostComponent_1.ID_ROUTE_PARAM] !== undefined) {
                            var id = +params[PostComponent_1.ID_ROUTE_PARAM];
                            _this.postService.getPost(id).subscribe(function (post) {
                                _this.post = post;
                                _this.comment = new comment_1.Comment();
                                _this.comment.postId = _this.post.id;
                                _this.refreshData();
                            });
                        }
                        else {
                            _this.router.navigate(["/dashboard"]);
                        }
                    });
                };
                PostComponent.prototype.ngOnDestroy = function () {
                    if (this.commentsSubscription) {
                        this.commentsSubscription.unsubscribe();
                    }
                    if (this.timerSubscription) {
                        this.timerSubscription.unsubscribe();
                    }
                };
                PostComponent.prototype.save = function () {
                    var _this = this;
                    this.commentService
                        .save(this.comment)
                        .subscribe(function (comment) {
                        _this.comments.unshift(comment);
                        _this.comment = new comment_1.Comment();
                        _this.comment.postId = _this.post.id;
                    });
                };
                PostComponent.prototype.deleteComment = function (comment, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.commentService
                        .delete(comment)
                        .subscribe(function () {
                        _this.comments = _this.comments.filter(function (returnableObjects) {
                            return returnableObjects.id !== comment.id;
                        });
                    });
                };
                PostComponent.prototype.refreshData = function () {
                    var _this = this;
                    this.commentsSubscription = this.commentService.getComments(this.post.id).subscribe(function (comments) {
                        _this.comments = comments;
                        _this.subscribeToData();
                    });
                };
                PostComponent.prototype.subscribeToData = function () {
                    var _this = this;
                    // this.timerSubscription = Observable_1.Observable.timer(5000).first().subscribe(function () { return _this.refreshData(); });
                };
                return PostComponent;
            }());
            PostComponent.ID_ROUTE_PARAM = "id";
            PostComponent = PostComponent_1 = __decorate([
                core_1.Component({
                    providers: [comment_service_1.CommentService],
                    selector: "bid",
                    template: `
                      <div *ngIf="comments">
                          <h3>{{post.title}}</h3>
                          <div>
                              <textarea rows="4" cols="40" [(ngModel)]="comment.content" placeholder="What is in your mind?"> </textarea>
                              <button id="add-button" (click)="save()">Add</button>
                          </div>
                          <ul class="comments">
                              <li *ngFor="let comment of comments">
                                  <span class="comment-element">{{comment.content}}</span>
                                  <button class="delete-button" (click)="deleteComment(comment, $event)">Delete</button>
                              </li>
                          </ul>
                      </div>
                    `,
                }),
                __metadata("design:paramtypes", [post_service_1.PostService, comment_service_1.CommentService,
                    router_1.ActivatedRoute, router_1.Router])
            ], PostComponent);
            exports_1("PostComponent", PostComponent);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9wb3N0L2NvbXBvbmVudHMvcG9zdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjYSxhQUFhO2dCQVN0Qix1QkFBb0IsV0FBd0IsRUFBVSxjQUE4QixFQUNoRSxLQUFxQixFQUFVLE1BQWM7b0JBRDdDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFDaEUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7b0JBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtnQkFDakUsQ0FBQztnQkFFTSxnQ0FBUSxHQUFmO29CQUFBLGlCQWVDO29CQWRHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7b0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWM7d0JBQ3JDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDckQsSUFBSSxFQUFFLEdBQVcsQ0FBQyxNQUFNLENBQUMsZUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDOzRCQUN2RCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO2dDQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQ0FDakIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztnQ0FDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0NBQ25DLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs0QkFDdkIsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDSixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ3pDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFTSxtQ0FBVyxHQUFsQjtvQkFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzVDLENBQUM7b0JBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN6QyxDQUFDO2dCQUNMLENBQUM7Z0JBRU0sNEJBQUksR0FBWDtvQkFBQSxpQkFRQztvQkFQRyxJQUFJLENBQUMsY0FBYzt5QkFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDbEIsU0FBUyxDQUFDLFVBQUEsT0FBTzt3QkFDZCxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQzt3QkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUM7Z0JBRU0scUNBQWEsR0FBcEIsVUFBcUIsT0FBZ0IsRUFBRSxLQUFVO29CQUFqRCxpQkFTQztvQkFSRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxjQUFjO3lCQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUM7eUJBQ2YsU0FBUyxDQUFDO3dCQUNQLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxpQkFBMEI7NEJBQzVELE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDL0MsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFTyxtQ0FBVyxHQUFuQjtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRO3dCQUN4RixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzt3QkFDekIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVPLHVDQUFlLEdBQXZCO29CQUFBLGlCQUVDO29CQURHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2dCQUNoRyxDQUFDO2dCQUVMLG9CQUFDO1lBQUQsQ0F2RUEsQUF1RUMsSUFBQTtZQXJFa0IsNEJBQWMsR0FBVyxJQUFJLENBQUM7WUFGcEMsYUFBYTtnQkFMekIsZ0JBQVMsQ0FBQztvQkFDUCxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO29CQUMzQixRQUFRLEVBQUUsS0FBSztvQkFDZixXQUFXLEVBQUUseUJBQXlCO2lCQUN6QyxDQUFDO2lEQVVtQywwQkFBVyxFQUEwQixnQ0FBYztvQkFDekQsdUJBQWMsRUFBa0IsZUFBTTtlQVZ4RCxhQUFhLENBdUV6Qjs7UUFDRCxDQUFDIiwiZmlsZSI6InBvc3QvY29tcG9uZW50cy9wb3N0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9zdH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9tb2RlbHMvcG9zdFwiO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wb3N0LnNlcnZpY2VcIjtcbmltcG9ydCB7Q29tbWVudH0gZnJvbSBcIi4uL21vZGVscy9jb21tZW50XCI7XG5pbXBvcnQge0NvbW1lbnRTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvY29tbWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXMsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge0Fub255bW91c1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHByb3ZpZGVyczogW0NvbW1lbnRTZXJ2aWNlXSxcbiAgICBzZWxlY3RvcjogXCJiaWRcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJzcmMvaHRtbC9wb3N0L3Bvc3QuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBQb3N0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgSURfUk9VVEVfUEFSQU06IHN0cmluZyA9IFwiaWRcIjtcbiAgICBwcml2YXRlIHRpbWVyU3Vic2NyaXB0aW9uOiBBbm9ueW1vdXNTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBjb21tZW50c1N1YnNjcmlwdGlvbjogQW5vbnltb3VzU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgcG9zdDogUG9zdDtcbiAgICBwcml2YXRlIGNvbW1lbnRzOiBDb21tZW50W107XG4gICAgcHJpdmF0ZSBjb21tZW50OiBDb21tZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwb3N0U2VydmljZTogUG9zdFNlcnZpY2UsIHByaXZhdGUgY29tbWVudFNlcnZpY2U6IENvbW1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbW1lbnQgPSBuZXcgQ29tbWVudCgpO1xuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmFtc1tQb3N0Q29tcG9uZW50LklEX1JPVVRFX1BBUkFNXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkOiBudW1iZXIgPSArcGFyYW1zW1Bvc3RDb21wb25lbnQuSURfUk9VVEVfUEFSQU1dO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdFNlcnZpY2UuZ2V0UG9zdChpZCkuc3Vic2NyaWJlKHBvc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSBwb3N0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSBuZXcgQ29tbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQucG9zdElkID0gdGhpcy5wb3N0LmlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hEYXRhKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9kYXNoYm9hcmRcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbW1lbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbW1lbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlXG4gICAgICAgICAgICAuc2F2ZSh0aGlzLmNvbW1lbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGNvbW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudHMudW5zaGlmdChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnQgPSBuZXcgQ29tbWVudCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tbWVudC5wb3N0SWQgPSB0aGlzLnBvc3QuaWQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlQ29tbWVudChjb21tZW50OiBDb21tZW50LCBldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmNvbW1lbnRTZXJ2aWNlXG4gICAgICAgICAgICAuZGVsZXRlKGNvbW1lbnQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1lbnRzID0gdGhpcy5jb21tZW50cy5maWx0ZXIoKHJldHVybmFibGVPYmplY3RzOiBDb21tZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5hYmxlT2JqZWN0cy5pZCAhPT0gY29tbWVudC5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaERhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29tbWVudHNTdWJzY3JpcHRpb24gPSB0aGlzLmNvbW1lbnRTZXJ2aWNlLmdldENvbW1lbnRzKHRoaXMucG9zdC5pZCkuc3Vic2NyaWJlKGNvbW1lbnRzID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tbWVudHMgPSBjb21tZW50cztcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlVG9EYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9EYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZS50aW1lcig1MDAwKS5maXJzdCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hEYXRhKCkpO1xuICAgIH1cblxufVxuIl19
