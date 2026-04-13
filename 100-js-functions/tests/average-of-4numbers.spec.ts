import { describe, it, expect } from "bun:test";
import { averageOf4Numbers } from "../src/average-of-4numbers";

// run command bun test tests/minutes-to-hours.spec.ts
describe("averageOf4Numbers correctly calculates the average of four numbers", () => {
    it("returns 4 when averaging 240, 642, 450, and 10", () => {
        expect(averageOf4Numbers(240, 642, 450, 10)).toBe(335.5);
    });

    it("returns 2 when averaging 78, -91, 22, and 46", () => {
        expect(averageOf4Numbers(78, -91, 22, 46)).toBe(13.75);
    });

    it("returns 1 when averaging 132, 742, 10.5, and 14", () => {
        expect(averageOf4Numbers(132, 742, +"10.5", 14)).toBe(224.625);
    });

    it("returns 0 when any input is not a finite number (e.g., 'm')", () => {
        expect(averageOf4Numbers(12, 72, +"m", 33)).toBe(0);
    });

    it("returns 0 when any input is Infinity", () => {
        expect(averageOf4Numbers(-12, +"72", Infinity, 33)).toBe(0);
    });
});
