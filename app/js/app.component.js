System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: "my-app",
                    template: `
                      <nav>
                          <a routerLink="/dashboard" routerLinkActive="active">Home</a>
                      </nav>
                      <router-outlet></router-outlet>
                    `,
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTWEsWUFBWTtnQkFBekI7Z0JBRUEsQ0FBQztnQkFBRCxtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRlksWUFBWTtnQkFKeEIsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsV0FBVyxFQUFFLG9CQUFvQjtpQkFDcEMsQ0FBQztlQUNXLFlBQVksQ0FFeEI7O1FBQ0QsQ0FBQyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi9zcmMvaHRtbC9hcHAuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXX0=
