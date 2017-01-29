System.register(["./app.component", "./dashboard/components/dashboard.component", "./post/components/post.component", "./rxjs-extensions", "./shared/services/logging.service", "./shared/services/post.service", "@angular/core", "@angular/forms", "@angular/http", "@angular/platform-browser", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var app_component_1, dashboard_component_1, post_component_1, logging_service_1, post_service_1, core_1, forms_1, http_1, platform_browser_1, router_1, routes, routedComponents, AppModule;
    return {
        setters: [
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (_1) {
            },
            function (logging_service_1_1) {
                logging_service_1 = logging_service_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            routes = [
                {
                    path: "",
                    pathMatch: "full",
                    redirectTo: "/dashboard",
                },
                {
                    component: dashboard_component_1.DashboardComponent,
                    path: "dashboard",
                },
                {
                    component: post_component_1.PostComponent,
                    path: "post/:id",
                },
            ];
            exports_1("routedComponents", routedComponents = [dashboard_component_1.DashboardComponent, post_component_1.PostComponent]);
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    bootstrap: [app_component_1.AppComponent],
                    declarations: [app_component_1.AppComponent, routedComponents],
                    imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
                    providers: [post_service_1.PostService, logging_service_1.LoggingService],
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZTSxNQUFNLEdBQVc7Z0JBQ25CO29CQUNJLElBQUksRUFBRSxFQUFFO29CQUNSLFNBQVMsRUFBRSxNQUFNO29CQUNqQixVQUFVLEVBQUUsWUFBWTtpQkFDM0I7Z0JBQ0Q7b0JBQ0ksU0FBUyxFQUFFLHdDQUFrQjtvQkFDN0IsSUFBSSxFQUFFLFdBQVc7aUJBQ3BCO2dCQUNEO29CQUNJLFNBQVMsRUFBRSw4QkFBYTtvQkFDeEIsSUFBSSxFQUFFLFVBQVU7aUJBQ25CO2FBQ0osQ0FBQztZQUNGLDhCQUFhLGdCQUFnQixHQUFHLENBQUMsd0NBQWtCLEVBQUUsOEJBQWEsQ0FBQyxFQUFDO1lBUXZELFNBQVM7Z0JBQXRCO2dCQUNBLENBQUM7Z0JBQUQsZ0JBQUM7WUFBRCxDQURBLEFBQ0MsSUFBQTtZQURZLFNBQVM7Z0JBTnJCLGVBQVEsQ0FBQztvQkFDTixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO29CQUN6QixZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLGdCQUFnQixDQUFDO29CQUM5QyxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLG1CQUFXLEVBQUUsaUJBQVUsRUFBRSxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0UsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxnQ0FBYyxDQUFDO2lCQUMzQyxDQUFDO2VBQ1csU0FBUyxDQUNyQjs7UUFDRCxDQUFDIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtEYXNoYm9hcmRDb21wb25lbnR9IGZyb20gXCIuL2Rhc2hib2FyZC9jb21wb25lbnRzL2Rhc2hib2FyZC5jb21wb25lbnRcIjtcbmltcG9ydCB7UG9zdENvbXBvbmVudH0gZnJvbSBcIi4vcG9zdC9jb21wb25lbnRzL3Bvc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgXCIuL3J4anMtZXh0ZW5zaW9uc1wiO1xuaW1wb3J0IHtMb2dnaW5nU2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL2xvZ2dpbmcuc2VydmljZVwiO1xuaW1wb3J0IHtQb3N0U2VydmljZX0gZnJvbSBcIi4vc2hhcmVkL3NlcnZpY2VzL3Bvc3Quc2VydmljZVwiO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgIHBhdGhNYXRjaDogXCJmdWxsXCIsXG4gICAgICAgIHJlZGlyZWN0VG86IFwiL2Rhc2hib2FyZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgY29tcG9uZW50OiBQb3N0Q29tcG9uZW50LFxuICAgICAgICBwYXRoOiBcInBvc3QvOmlkXCIsXG4gICAgfSxcbl07XG5leHBvcnQgY29uc3Qgcm91dGVkQ29tcG9uZW50cyA9IFtEYXNoYm9hcmRDb21wb25lbnQsIFBvc3RDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCByb3V0ZWRDb21wb25lbnRzXSxcbiAgICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIEh0dHBNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIHByb3ZpZGVyczogW1Bvc3RTZXJ2aWNlLCBMb2dnaW5nU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=
