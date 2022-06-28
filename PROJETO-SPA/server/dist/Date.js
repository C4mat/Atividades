"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
const current = new Date();
exports.date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
