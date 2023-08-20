"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Triangle = exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.createFigures = function (rectangle) {
        if (rectangle.width == rectangle.height || rectangle.width <= 0 || rectangle.height <= 0) {
            throw new Error("Некорректные данные для прямоугольника");
        }
        return {
            id: "rectangle",
            width: rectangle.width,
            height: rectangle.height
        };
    };
    Rectangle.prototype.getArea = function (rectangle) {
        if (rectangle.width <= 0 || rectangle.height <= 0) {
            throw new Error("Некорректные данные для прямоугольника");
        }
        return rectangle.width * rectangle.height;
    };
    Rectangle.prototype.calculateRectanglePerimeter = function (rectangle) {
        return 2 * (rectangle.width + rectangle.height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.createFigures = function (triangle) {
        if (triangle.sideA <= 0 || triangle.sideB <= 0 || triangle.sideC <= 0) {
            throw new Error("Некорректные данные для треугольника");
        }
        return {
            id: "triangle",
            sideA: triangle.sideA,
            sideB: triangle.sideB,
            sideC: triangle.sideC,
        };
    };
    Triangle.prototype.getArea = function (triangle) {
        if (triangle.sideA <= 0 || triangle.sideB <= 0 || triangle.sideC <= 0) {
            throw new Error("Некорректные данные для треугольника");
        }
        var sideA = triangle.sideA, sideB = triangle.sideB, sideC = triangle.sideC;
        var semiPerimeter = (sideA + sideB + sideC) / 2;
        return Math.sqrt(semiPerimeter *
            (semiPerimeter - sideA) *
            (semiPerimeter - sideB) *
            (semiPerimeter - sideC));
    };
    Triangle.prototype.calculateTrianglePerimeter = function (triangle) {
        if (triangle.sideA <= 0 || triangle.sideB <= 0 || triangle.sideC <= 0) {
            throw new Error("Некорректные данные для треугольника");
        }
        return triangle.sideA + triangle.sideB + triangle.sideC;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.createFigures = function (circle) {
        if (circle.radius <= 0) {
            throw new Error("Некорректные данные для круга");
        }
        return {
            id: "circle",
            radius: circle.radius
        };
    };
    Circle.prototype.getArea = function (circle) {
        if (circle.radius <= 0) {
            throw new Error("Некорректные данные для круга");
        }
        return Math.PI * circle.radius * circle.radius;
    };
    Circle.prototype.calculateCircleCircumference = function (circle) {
        if (circle.radius <= 0) {
            throw new Error("Некорректные данные для круга");
        }
        return 2 * Math.PI * circle.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
