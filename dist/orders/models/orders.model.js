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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersEntity = void 0;
const typeorm_1 = require("typeorm");
const user_model_1 = require("../../auth/models/user.model");
const items_model_1 = require("../../items/models/items.model");
let OrdersEntity = class OrdersEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrdersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], OrdersEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: 'float', default: 0.0 }),
    __metadata("design:type", Number)
], OrdersEntity.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], OrdersEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => items_model_1.ItemsEntity, (itemsEntity) => itemsEntity.order),
    __metadata("design:type", Array)
], OrdersEntity.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_model_1.UserEntity, (userEntity) => userEntity.orders),
    __metadata("design:type", user_model_1.UserEntity)
], OrdersEntity.prototype, "author", void 0);
OrdersEntity = __decorate([
    (0, typeorm_1.Entity)('OrdersEntity')
], OrdersEntity);
exports.OrdersEntity = OrdersEntity;
//# sourceMappingURL=orders.model.js.map