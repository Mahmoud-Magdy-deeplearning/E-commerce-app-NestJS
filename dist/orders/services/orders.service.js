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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rxjs_1 = require("rxjs");
const typeorm_2 = require("typeorm");
const orders_model_1 = require("../models/orders.model");
const roles_enum_1 = require("../../auth/models/roles.enum");
let OrdersService = class OrdersService {
    constructor(OrdersRepository) {
        this.OrdersRepository = OrdersRepository;
    }
    createOrder(user, order) {
        order.author = user;
        return (0, rxjs_1.from)(this.OrdersRepository.save(order));
    }
    findAllOrders(user) {
        if (user.role == roles_enum_1.Role.ADMIN)
            return (0, rxjs_1.from)(this.OrdersRepository.find({ relations: ['author', 'items'] }));
        else
            return 'Not allowed';
    }
    updateOrder(id, order) {
        return (0, rxjs_1.from)(this.OrdersRepository.update(id, order));
    }
    deleteOrder(id) {
        return (0, rxjs_1.from)(this.OrdersRepository.delete(id));
    }
    findOrderById(id) {
        return (0, rxjs_1.from)(this.OrdersRepository.findOne({ id }, { relations: ['author'] }));
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orders_model_1.OrdersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map