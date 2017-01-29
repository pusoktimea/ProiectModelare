System.register(["../../shared/models/post", "../../shared/services/post.service", "@angular/core", "rxjs/Observable"], function (exports_1, context_1) {
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
    var post_1, post_service_1, core_1, Observable_1, DashboardComponent;
    return {
        setters: [
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            DashboardComponent = (function () {
                function DashboardComponent(postService) {
                    this.postService = postService;
                    this.post = new post_1.Post();
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.refreshData();
                };
                DashboardComponent.prototype.ngOnDestroy = function () {
                    if (this.postsSubscription) {
                        this.postsSubscription.unsubscribe();
                    }
                    if (this.timerSubscription) {
                        this.timerSubscription.unsubscribe();
                    }
                };
                DashboardComponent.prototype.save = function () {
                    var _this = this;
                    this.postService
                        .save(this.post)
                        .subscribe(function (post) {
                        _this.posts.unshift(post);
                        _this.post = new post_1.Post();
                    });
                };
                DashboardComponent.prototype.deletePost = function (postToDelete, event) {
                    var _this = this;
                    event.stopPropagation();
                    this.postService.delete(postToDelete).subscribe(function () {
                        _this.posts = _this.posts.filter(function (post) { return post.id !== postToDelete.id; });
                    });
                };
                DashboardComponent.prototype.refreshData = function () {
                    var _this = this;
                    this.postsSubscription = this.postService.getPosts().subscribe(function (posts) {
                        _this.posts = posts;
                        _this.subscribeToData();
                    });
                };
                DashboardComponent.prototype.subscribeToData = function () {
                    var _this = this;
                    // this.timerSubscription = Observable_1.Observable.timer(5000).first().subscribe(function () { return _this.refreshData(); });
                };
                return DashboardComponent;
            }());
            DashboardComponent = __decorate([
                core_1.Component({
                    selector: "dashboard",
                    template: `
                      <div id="add-new-post">
                          <input [(ngModel)]="post.title" placeholder="New post"/>
                          <button (click)="save()">Add</button>
                      </div>
                      <div>
                          <h3>Restaurants</h3>
                          <div class="grid grid-pad">
                              <div *ngFor="let post of posts" [routerLink]="['/post', post.id]" class="col-2">
                                  <div class="module post">
                                      <h4>{{post.title}}</h4>
                                      <button class="delete-button" (click)="deletePost(post, $event)">X</button>
                                      <img src="/chef.png" alt="chef" width="70" />
                                  </div>
                              </div>
                          </div>
                      </div>
                    `,
                }),
                __metadata("design:paramtypes", [post_service_1.PostService])
            ], DashboardComponent);
            exports_1("DashboardComponent", DashboardComponent);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVWEsa0JBQWtCO2dCQU8zQiw0QkFBb0IsV0FBd0I7b0JBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRU0scUNBQVEsR0FBZjtvQkFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBRU0sd0NBQVcsR0FBbEI7b0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUN6QyxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDekMsQ0FBQztnQkFDTCxDQUFDO2dCQUVNLGlDQUFJLEdBQVg7b0JBQUEsaUJBT0M7b0JBTkcsSUFBSSxDQUFDLFdBQVc7eUJBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7eUJBQ2YsU0FBUyxDQUFDLFVBQUEsSUFBSTt3QkFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDekIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVNLHVDQUFVLEdBQWpCLFVBQWtCLFlBQWtCLEVBQUUsS0FBVTtvQkFBaEQsaUJBS0M7b0JBSkcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUM7d0JBQzVDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFVLElBQUssT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQyxFQUFFLEVBQTNCLENBQTJCLENBQUMsQ0FBQztvQkFDaEYsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFTyx3Q0FBVyxHQUFuQjtvQkFBQSxpQkFLQztvQkFKRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO3dCQUNoRSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzt3QkFDbkIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzQixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUVPLDRDQUFlLEdBQXZCO29CQUFBLGlCQUVDO29CQURHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO2dCQUNoRyxDQUFDO2dCQUVMLHlCQUFDO1lBQUQsQ0FuREEsQUFtREMsSUFBQTtZQW5EWSxrQkFBa0I7Z0JBSjlCLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFdBQVcsRUFBRSxvQ0FBb0M7aUJBQ3BELENBQUM7aURBUW1DLDBCQUFXO2VBUG5DLGtCQUFrQixDQW1EOUI7O1FBQ0QsQ0FBQyIsImZpbGUiOiJkYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb3N0fSBmcm9tIFwiLi4vLi4vc2hhcmVkL21vZGVscy9wb3N0XCI7XG5pbXBvcnQge1Bvc3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Bvc3Quc2VydmljZVwiO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge0Fub255bW91c1N1YnNjcmlwdGlvbn0gZnJvbSBcInJ4anMvU3Vic2NyaXB0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImRhc2hib2FyZFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi9zcmMvaHRtbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSB0aW1lclN1YnNjcmlwdGlvbjogQW5vbnltb3VzU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgcG9zdHNTdWJzY3JpcHRpb246IEFub255bW91c1N1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIHBvc3RzOiBQb3N0W107XG4gICAgcHJpdmF0ZSBwb3N0OiBQb3N0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwb3N0U2VydmljZTogUG9zdFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wb3N0ID0gbmV3IFBvc3QoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnBvc3RzU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnBvc3RzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudGltZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlXG4gICAgICAgICAgICAuc2F2ZSh0aGlzLnBvc3QpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHBvc3QgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zdHMudW5zaGlmdChwb3N0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3QgPSBuZXcgUG9zdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVBvc3QocG9zdFRvRGVsZXRlOiBQb3N0LCBldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnBvc3RTZXJ2aWNlLmRlbGV0ZShwb3N0VG9EZWxldGUpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvc3RzID0gdGhpcy5wb3N0cy5maWx0ZXIoKHBvc3Q6IFBvc3QpID0+IHBvc3QuaWQgIT09IHBvc3RUb0RlbGV0ZS5pZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaERhdGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9zdHNTdWJzY3JpcHRpb24gPSB0aGlzLnBvc3RTZXJ2aWNlLmdldFBvc3RzKCkuc3Vic2NyaWJlKHBvc3RzID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9zdHMgPSBwb3N0cztcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlVG9EYXRhKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9EYXRhKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRpbWVyU3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZS50aW1lcig1MDAwKS5maXJzdCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hEYXRhKCkpO1xuICAgIH1cblxufVxuIl19
