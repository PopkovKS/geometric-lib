interface Shape {
    getArea(parameters: any): number;
    createFigures(parameters: any): RectangleParams | TriangleParams | CircleParams;
}

interface RectangleParams {
    id?: string;
    width: number;
    height: number;
}

interface TriangleParams {
    id?: string;
    sideA: number;
    sideB: number;
    sideC: number;
}

interface CircleParams {
    id?: string;
    radius: number;
}

export class Rectangle implements Shape {

    public createFigures(rectangle: RectangleParams) {
        if (rectangle.width == rectangle.height || rectangle.width <= 0 || rectangle.height <= 0) {
            throw new Error("Некорректные данные для прямоугольника");
        }
        return {
            id: "rectangle",
            width: rectangle.width,
            height: rectangle.height
        }
    }

    public getArea(rectangle: RectangleParams): number {
        if (rectangle.width == rectangle.height || rectangle.width <= 0 || rectangle.height <= 0) {
            throw new Error("Некорректные данные для прямоугольника");
        }
        return rectangle.width * rectangle.height;
    }

    public calculateRectanglePerimeter(rectangle: RectangleParams): number {
        return 2 * (rectangle.width + rectangle.height);
    }
}


export class Triangle implements Shape {

    public createFigures(triangle: TriangleParams) {
        if (triangle.sideA <= 0 || triangle.sideB <= 0 || triangle.sideC <= 0) {
            throw new Error("Некорректные данные для треугольника");
        }
        return {
            id: "triangle",
            sideA: triangle.sideA,
            sideB: triangle.sideB,
            sideC: triangle.sideC,
        }
    }

    public getArea(triangle: TriangleParams): number {
        if (triangle.sideA <= 0 || triangle.sideB <= 0 || triangle.sideC <= 0) {
            throw new Error("Некорректные данные для треугольника");
        }

        const {sideA, sideB, sideC} = triangle;
        const semiPerimeter = (sideA + sideB + sideC) / 2;
        return Math.sqrt(
            semiPerimeter *
            (semiPerimeter - sideA) *
            (semiPerimeter - sideB) *
            (semiPerimeter - sideC),
        );
    }

    public calculateTrianglePerimeter(triangle: TriangleParams): number {
        if (triangle.sideA <= 0 || triangle.sideB <= 0 || triangle.sideC <= 0) {
            throw new Error("Некорректные данные для треугольника");
        }
        return triangle.sideA + triangle.sideB + triangle.sideC;
    }
}


export class Circle implements Shape {

    public createFigures(circle: CircleParams) {
        if (circle.radius <= 0) {
            throw new Error("Некорректные данные для круга");
        }
        return {
            id: "circle",
            radius: circle.radius
        }
    }

    public getArea(circle: CircleParams): number {
        if (circle.radius <= 0) {
            throw new Error("Некорректные данные для круга");
        }
        return Math.PI * circle.radius * circle.radius;
    }

    public  calculateCircleCircumference(circle: CircleParams): number {
        if (circle.radius <= 0) {
            throw new Error("Некорректные данные для круга");
        }
        return 2 * Math.PI * circle.radius;
    }
}