import { describe, it, expect } from "bun:test";
import { concat3 } from "../src/concat3";

// run command bun test tests/minutes-to-hours.spec.ts
describe("concat3 concatenates three strings with the given separator", () => {
    it("returns 'Mahmoud-Mohamed-Kamel' when concatenating 'Mahmoud', 'Mohamed', 'Kamel' with '-'", () => {
        expect(concat3("Mahmoud", "Mohamed", "Kamel", "-")).toBe("Mahmoud-Mohamed-Kamel");
    });
});
