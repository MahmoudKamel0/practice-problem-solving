import { describe, it, expect } from "bun:test";
import { minutesToHours } from "../src/minutes-to-hours";

// run command bun test tests/minutes-to-hours.spec.ts
describe("should convert minutes to the equivalent number of hours", () => {
    it("returns 4 when converting 240 minutes to hours", () => {
        expect(minutesToHours(240)).toBe(4);
    });

    it("returns 2 when converting 120 minutes to hours", () => {
        expect(minutesToHours(120)).toBe(2);
    });
    
    it("returns 1 when converting -60 minutes to hours", () => {
        expect(minutesToHours(-60)).toBe(1);
    });
    
    it("returns 0 when converting Infinity minutes to hours", () => {
        expect(minutesToHours(Infinity)).toBe(0);
    });

    it("returns 0 when converting -Infinity minutes to hours", () => {
        expect(minutesToHours(-Infinity)).toBe(0);
    });
});