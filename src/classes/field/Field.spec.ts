import Field from "./Field";

const fieldData = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
const invalidFieldData1 = [
    [1, 2, 3],
    [1, 2, 3],
];
const invalidFieldData2 = [
    [1, 2, 3],
    [1, 2],
];

jest.mock("config", () => ({
    GAME_CONFIG: { viewSize: { x: 3, y: 3 } },
}));

const field = new Field(fieldData);

describe("Field", () => {
    describe("static validation", () => {
        it("should return true if field is a square", () => {
            expect(Field.isValidField(fieldData)).toBeTruthy();
        });

        it("should return false if field is not a square", () => {
            expect(Field.isValidField(invalidFieldData1)).toBeFalsy();
            expect(Field.isValidField(invalidFieldData2)).toBeFalsy();
        });
    });

    describe("methods", () => {
        it("should return true if can provide field part for coordinates", () => {
            [
                { x: 1, y: 1 },
                { x: 0, y: 1 },
                { x: 1, y: 0 },
                { x: 0, y: 0 },
            ].forEach(coords => {
                expect(field.canProvideFieldPart(coords)).toBeTruthy();
            });
        });

        it("should return false if can't provide field part for coordinates", () => {
            [
                { x: 2, y: 1 },
                { x: 1, y: 2 },
                { x: 2, y: 2 },
            ].forEach(coords => {
                expect(field.canProvideFieldPart(coords)).toBeFalsy();
            });
        });
        it("should return valid field part for big field", () => {
            expect(field.getFieldPart({ x: 1, y: 1 })).toStrictEqual([
                [6, 7, 8],
                [10, 11, 12],
                [14, 15, 16]
            ]);
            expect(field.getFieldPart({ x: 0, y: 0 })).toStrictEqual([
                [1, 2, 3],
                [5, 6, 7],
                [9, 10, 11],
            ]);
            expect(field.getFieldPart({ x: 1, y: 0 })).toStrictEqual([
                [2, 3, 4],
                [6, 7, 8],
                [10, 11, 12],
            ]);
        });
    });
});
