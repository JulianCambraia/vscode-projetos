"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var curso_service_1 = require("./curso.service");
var core_1 = require("@angular/core");
var CursosComponent = /** @class */ (function () {
    function CursosComponent() {
        this.nomePortal = 'http://loiane.training';
        var servico = new curso_service_1.CursoService();
    }
    CursosComponent.prototype.ngOnInit = function () {
    };
    CursosComponent = __decorate([
        core_1.Component({
            selector: 'app-cursos',
            templateUrl: './cursos.component.html',
            styleUrls: ['./cursos.component.css']
        })
    ], CursosComponent);
    return CursosComponent;
}());
exports.CursosComponent = CursosComponent;
