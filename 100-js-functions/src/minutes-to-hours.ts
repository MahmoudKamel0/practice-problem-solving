/**
 * 1.minutesToHours
 * Write a function named `minutesToHours` that receives a number of minutes as parameter and returns a number representing
 * the same amount of time but in hours.
 * @param {number} minutes
 * @returns {number}
 */
export function minutesToHours(minutes: number) {
    const m = Math.abs(minutes);
    if (!Number.isFinite(m)) {
        return 0;
    }
    return m / 60;
}
