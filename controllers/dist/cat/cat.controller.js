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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatController = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let CatController = class CatController {
    findAll(id, params) {
        console.log('id : ', id.toString());
        console.log('name : ', params.name);
    }
    saveCatData(response) {
        console.log();
        response.header('Content-te', 'application/json');
        response.send();
    }
    getDocs(version) {
        if (version && version === '5') {
            return { url: 'http://localhost:3000/cat', statusCode: 301 };
        }
    }
    findAllCard() {
        return (0, rxjs_1.of)(['dilshan']);
    }
};
exports.CatController = CatController;
__decorate([
    (0, common_1.Get)('/:id/:name'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], CatController.prototype, "findAll", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.PAYMENT_REQUIRED),
    (0, common_1.Header)('Cache-aa', 'true'),
    (0, common_1.Post)('/post'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatController.prototype, "saveCatData", null);
__decorate([
    (0, common_1.Get)('docs'),
    (0, common_1.Redirect)('https://docs.nestjs.com', 302),
    __param(0, (0, common_1.Query)('version')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatController.prototype, "getDocs", null);
__decorate([
    (0, common_1.Get)('/car'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], CatController.prototype, "findAllCard", null);
exports.CatController = CatController = __decorate([
    (0, common_1.Controller)('cat')
], CatController);
//# sourceMappingURL=cat.controller.js.map