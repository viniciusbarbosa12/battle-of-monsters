"use strict";
(self["webpackChunkassessment_cc_angular_sr_01"] = self["webpackChunkassessment_cc_angular_sr_01"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _views_battle_of_monsters_battle_of_monsters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/battle-of-monsters/battle-of-monsters.component */ 3969);


class AppComponent {
    constructor() {
        this.title = 'assessment-cc-angular-sr-01';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-battle-of-monsters");
    } }, dependencies: [_views_battle_of_monsters_battle_of_monsters_component__WEBPACK_IMPORTED_MODULE_0__.BattleOfMonstersComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _components_monster_battle_card_monster_battle_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/monster-battle-card/monster-battle-card.component */ 5442);
/* harmony import */ var _components_winner_display_winner_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/winner-display/winner-display.component */ 6894);
/* harmony import */ var _components_monster_card_monster_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/monster-card/monster-card.component */ 3529);
/* harmony import */ var _components_monster_list_monster_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/monster-list/monster-list.component */ 5601);
/* harmony import */ var _views_battle_of_monsters_battle_of_monsters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/battle-of-monsters/battle-of-monsters.component */ 3969);
/* harmony import */ var _services_monsters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/monsters.service */ 8415);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
















const MaterialModules = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBarModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule,
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_services_monsters_service__WEBPACK_IMPORTED_MODULE_6__.MonstersService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
        MaterialModules] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_monster_battle_card_monster_battle_card_component__WEBPACK_IMPORTED_MODULE_1__.MonsterBattleCardComponent,
        _components_winner_display_winner_display_component__WEBPACK_IMPORTED_MODULE_2__.WinnerDisplayComponent,
        _components_monster_card_monster_card_component__WEBPACK_IMPORTED_MODULE_3__.MonsterCardComponent,
        _components_monster_list_monster_list_component__WEBPACK_IMPORTED_MODULE_4__.MonsterListComponent,
        _views_battle_of_monsters_battle_of_monsters_component__WEBPACK_IMPORTED_MODULE_5__.BattleOfMonstersComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__.MatProgressBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule] }); })();


/***/ }),

/***/ 5442:
/*!*********************************************************************************!*\
  !*** ./src/app/components/monster-battle-card/monster-battle-card.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonsterBattleCardComponent": () => (/* binding */ MonsterBattleCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 2156);


class MonsterBattleCardComponent {
    constructor() {
        this.title = null;
    }
}
MonsterBattleCardComponent.ɵfac = function MonsterBattleCardComponent_Factory(t) { return new (t || MonsterBattleCardComponent)(); };
MonsterBattleCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonsterBattleCardComponent, selectors: [["app-monster-battle-card"]], inputs: { monster: "monster", title: "title" }, decls: 4, vars: 1, consts: [[1, "battle-card-player", "centralized"], [1, "title"]], template: function MonsterBattleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "mat-card", 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard], styles: [".mat-card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  display: block;\n  overflow: hidden;\n}\n\n.mat-card-image[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n\n.battle-card-player[_ngcontent-%COMP%] {\n  padding: 13px 11px;\n  height: 415px;\n  flex-direction: column;\n  border-radius: 7px;\n  box-shadow: -2px 3px 10px rgba(0, 0, 0, 0.25) !important;\n}\n\n.centralized[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center;\n  justify-content: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 36px;\n  line-height: 42px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbnN0ZXItYmF0dGxlLWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3RENkUztBRGViOztBQUNBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0oiLCJmaWxlIjoibW9uc3Rlci1iYXR0bGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5tYXQtY2FyZC1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWF0LWNhcmQtaW1hZ2U6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG4uYmF0dGxlLWNhcmQtcGxheWVyIHtcbiAgICBwYWRkaW5nOiAxM3B4IDExcHg7XG4gICAgaGVpZ2h0OiA0MTVweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcbn1cbi5jZW50cmFsaXplZCB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNDJweDtcbn1cbiIsIiRmb250LWZhbWlseS1yb290OiBcIlJvYm90b1wiO1xuJGJhY2tncm91bmQtcm9vdDogI2ZhZmFmYTtcbiRib3gtc2hhZG93OiAtMnB4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcbiR3aW5uZXItYmFja2dyb3VuZDogI2UxZjhmZjtcbiRibGFjazogIzAwMDAwMDtcbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xuIl19 */"] });


/***/ }),

/***/ 3529:
/*!*******************************************************************!*\
  !*** ./src/app/components/monster-card/monster-card.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonsterCardComponent": () => (/* binding */ MonsterCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);




const _c0 = function (a0) { return { "border": a0 }; };
class MonsterCardComponent {
    constructor() {
        this.isSelected = false;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    handleMonsterClick(monster) {
        this.selected.emit(monster);
    }
}
MonsterCardComponent.ɵfac = function MonsterCardComponent_Factory(t) { return new (t || MonsterCardComponent)(); };
MonsterCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonsterCardComponent, selectors: [["app-monster-card"]], inputs: { monster: "monster", isSelected: "isSelected" }, outputs: { selected: "selected" }, decls: 4, vars: 5, consts: [[1, "card-monster", 3, "ngStyle", "click"], ["mat-card-image", "", 1, "image", 3, "src"]], template: function MonsterCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MonsterCardComponent_Template_mat_card_click_0_listener() { return ctx.handleMonsterClick(ctx.monster); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isSelected ? "1px solid black" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.monster == null ? null : ctx.monster.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.monster == null ? null : ctx.monster.name);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardImage], styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  display: block;\n  overflow: hidden;\n}\n\n.mat-card-image[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 136px;\n  height: 99px;\n  border-radius: 7px;\n}\n\n.card-monster[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 139px;\n  cursor: pointer;\n  box-sizing: border-box;\n  border-radius: 7px;\n  padding: 7px !important;\n  box-shadow: -2px 3px 10px rgba(0, 0, 0, 0.25) !important;\n  transition: all 0.2s ease-in-out;\n}\n\n.card-monster[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.card-monster[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 19px;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbnN0ZXItY2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQkFBQTtBQURKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdEQ3hCUztFRHlCVCxnQ0FBQTtBQUdKOztBQUZJO0VBQ0ksc0JBQUE7QUFJUjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSUoiLCJmaWxlIjoibW9uc3Rlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuLm1hdC1jYXJkLWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYXQtY2FyZC1pbWFnZTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cbi5pbWFnZSB7XG4gICAgd2lkdGg6IDEzNnB4O1xuICAgIGhlaWdodDogOTlweDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG59XG4uY2FyZC1tb25zdGVyIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxMzlweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgcGFkZGluZzogN3B4ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxufVxuLmNhcmQtbW9uc3RlciBwIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuIiwiJGZvbnQtZmFtaWx5LXJvb3Q6IFwiUm9ib3RvXCI7XG4kYmFja2dyb3VuZC1yb290OiAjZmFmYWZhO1xuJGJveC1zaGFkb3c6IC0ycHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xuJHdpbm5lci1iYWNrZ3JvdW5kOiAjZTFmOGZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGJveC1zaGFkb3ctYnV0dG9uOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XG4iXX0= */"] });


/***/ }),

/***/ 5601:
/*!*******************************************************************!*\
  !*** ./src/app/components/monster-list/monster-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonsterListComponent": () => (/* binding */ MonsterListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _monster_card_monster_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../monster-card/monster-card.component */ 3529);




function MonsterListComponent_app_monster_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-monster-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selected", function MonsterListComponent_app_monster_card_4_Template_app_monster_card_selected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.monsterSelected($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monster_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("monster", monster_r1)("isSelected", monster_r1.id === ctx_r0.selectedMonsterId);
} }
class MonsterListComponent {
    constructor() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.monsters = [];
        this.selectedMonsterId = null;
    }
    monsterSelected(monster) {
        if (monster.id == this.selectedMonsterId) {
            monster = null;
        }
        this.selectedMonsterId = monster?.id || null;
        this.selected.emit(monster);
    }
}
MonsterListComponent.ɵfac = function MonsterListComponent_Factory(t) { return new (t || MonsterListComponent)(); };
MonsterListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MonsterListComponent, selectors: [["app-monster-list"]], inputs: { monsters: "monsters" }, outputs: { selected: "selected" }, decls: 5, vars: 2, consts: [[1, "title-select-monster"], [1, "list-monsters"], [3, "monster", "isSelected", "selected", 4, "ngFor", "ngForOf"], [3, "monster", "isSelected", "selected"]], template: function MonsterListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MonsterListComponent_app_monster_card_4_Template, 1, 2, "app-monster-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.monsters.length > 0 ? "Select your monster" : "No monsters available", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.monsters);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _monster_card_monster_card_component__WEBPACK_IMPORTED_MODULE_0__.MonsterCardComponent], styles: [".list-monsters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 16px;\n}\n\n.title-select-monster[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbnN0ZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSiIsImZpbGUiOiJtb25zdGVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1tb25zdGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi50aXRsZS1zZWxlY3QtbW9uc3RlciB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 6894:
/*!***********************************************************************!*\
  !*** ./src/app/components/winner-display/winner-display.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WinnerDisplayComponent": () => (/* binding */ WinnerDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class WinnerDisplayComponent {
    constructor() {
        this.message = null;
    }
}
WinnerDisplayComponent.ɵfac = function WinnerDisplayComponent_Factory(t) { return new (t || WinnerDisplayComponent)(); };
WinnerDisplayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WinnerDisplayComponent, selectors: [["app-winner-display"]], inputs: { message: "message" }, decls: 3, vars: 1, consts: [[1, "winner-box"], [1, "message-winner"]], template: function WinnerDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.message, " wins!");
    } }, styles: [".winner-box[_ngcontent-%COMP%] {\n  background: #e1f8ff;\n  border: 1px solid #000000;\n  box-shadow: -2px 3px 10px rgba(0, 0, 0, 0.25) !important;\n  border-radius: 4px;\n  padding: 17px 28px;\n  align-content: center;\n}\n\n.message-winner[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 22px;\n  line-height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpbm5lci1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx3RENIUztFRElULGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6Indpbm5lci1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLndpbm5lci1ib3gge1xuICAgIGJhY2tncm91bmQ6ICR3aW5uZXItYmFja2dyb3VuZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2s7XG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDE3cHggMjhweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ubWVzc2FnZS13aW5uZXIge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbn1cbiIsIiRmb250LWZhbWlseS1yb290OiBcIlJvYm90b1wiO1xuJGJhY2tncm91bmQtcm9vdDogI2ZhZmFmYTtcbiRib3gtc2hhZG93OiAtMnB4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgIWltcG9ydGFudDtcbiR3aW5uZXItYmFja2dyb3VuZDogI2UxZjhmZjtcbiRibGFjazogIzAwMDAwMDtcbiRib3gtc2hhZG93LWJ1dHRvbjogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xuIl19 */"] });


/***/ }),

/***/ 8415:
/*!**********************************************!*\
  !*** ./src/app/services/monsters.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonstersService": () => (/* binding */ MonstersService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class MonstersService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_URL}/monsters`);
    }
}
MonstersService.ɵfac = function MonstersService_Factory(t) { return new (t || MonstersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MonstersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MonstersService, factory: MonstersService.ɵfac });


/***/ }),

/***/ 3969:
/*!**************************************************************************!*\
  !*** ./src/app/views/battle-of-monsters/battle-of-monsters.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BattleOfMonstersComponent": () => (/* binding */ BattleOfMonstersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_monsters_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/monsters.service */ 8415);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _components_monster_battle_card_monster_battle_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/monster-battle-card/monster-battle-card.component */ 5442);
/* harmony import */ var _components_monster_list_monster_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/monster-list/monster-list.component */ 5601);





class BattleOfMonstersComponent {
    constructor(monsterService) {
        this.monsterService = monsterService;
        this.monsters = [];
    }
    ngOnInit() {
        this.monsterService.getAll().subscribe((res) => {
            this.monsters = res;
        });
    }
    monsterSelected(monster) {
        this.player = monster;
        this.computer = null;
    }
}
BattleOfMonstersComponent.ɵfac = function BattleOfMonstersComponent_Factory(t) { return new (t || BattleOfMonstersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_monsters_service__WEBPACK_IMPORTED_MODULE_0__.MonstersService)); };
BattleOfMonstersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BattleOfMonstersComponent, selectors: [["app-battle-of-monsters"]], decls: 9, vars: 9, consts: [[1, "main-section"], [1, "main-title"], [3, "monsters", "selected"], [1, "battle-section"], [3, "monster", "title"], ["mat-button", "", 1, "start-battle-button", 3, "disabled"], ["title", "Computer", 3, "monster"]], template: function BattleOfMonstersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Battle of Monsters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "app-monster-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selected", function BattleOfMonstersComponent_Template_app_monster_list_selected_3_listener($event) { return ctx.monsterSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-monster-battle-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Start Battle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-monster-battle-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("monsters", ctx.monsters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("monster", ctx.player)("title", ctx.player ? ctx.player.name : "Player");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx.player)("inactive", !ctx.player);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.player);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("monster", ctx.computer);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _components_monster_battle_card_monster_battle_card_component__WEBPACK_IMPORTED_MODULE_1__.MonsterBattleCardComponent, _components_monster_list_monster_list_component__WEBPACK_IMPORTED_MODULE_2__.MonsterListComponent], styles: [".main-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  margin: 0 auto;\n  max-width: 814px;\n}\n\n.battle-section[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  gap: 25px;\n  grid-template-columns: 1fr 150px 1fr;\n}\n\n.main-title[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 36px;\n  line-height: 42px;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #10782e !important;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  background-color: #799a82 !important;\n}\n\n.start-battle-button[_ngcontent-%COMP%] {\n  color: white !important;\n  font-family: \"Roboto\" !important;\n  font-style: normal;\n  font-weight: 400 !important;\n  font-size: 18px !important;\n  line-height: 21px !important;\n  text-transform: capitalize !important;\n  padding: 12px 30px !important;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25) !important;\n  pointer-events: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhdHRsZS1vZi1tb25zdGVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtBQUdKOztBQURBO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSw2QkFBQTtFQUNBLHNEQy9CZ0I7RURnQ2hCLGtDQUFBO0FBSUoiLCJmaWxlIjoiYmF0dGxlLW9mLW1vbnN0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLm1haW4tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMzVweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDgxNHB4O1xufVxuLmJhdHRsZS1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE1MHB4IDFmcjtcbn1cbi5tYWluLXRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XG59XG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA3ODJlICFpbXBvcnRhbnQ7XG59XG4uaW5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTlhODIgIWltcG9ydGFudDtcbn1cbi5zdGFydC1iYXR0bGUtYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXJvb3QgIWltcG9ydGFudDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHghaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWJ1dHRvbjtcbiAgICBwb2ludGVyLWV2ZW50czogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuIiwiJGZvbnQtZmFtaWx5LXJvb3Q6IFwiUm9ib3RvXCI7XG4kYmFja2dyb3VuZC1yb290OiAjZmFmYWZhO1xuJGJveC1zaGFkb3c6IC0ycHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xuJHdpbm5lci1iYWNrZ3JvdW5kOiAjZTFmOGZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGJveC1zaGFkb3ctYnV0dG9uOiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_URL: 'http://localhost:4201'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map