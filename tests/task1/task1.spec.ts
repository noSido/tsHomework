import {checkUsersConfidence, ConfidenceHelper, users} from "../../src/task1/task1";

describe('task', () => {
    describe('ConfidenceHelper', () => {
        it('should work correct for border values', () => {
            expect(ConfidenceHelper.checkConfidenceRatio(0)).toBe(true);
        });
        it('should work correct for border values', () => {
            expect(ConfidenceHelper.checkConfidenceRatio(-1)).toBe(false);
        });
        it('should work correct for random values', () => {
            expect(ConfidenceHelper.checkConfidenceRatio(50)).toBe(true);
        });
        it('should work correct for border values', () => {
            expect(ConfidenceHelper.checkConfidenceRatio(-243)).toBe(false);
        });
    })
    describe('checkUsersConfidence', () => {
        it('should work for example data', () => {
            expect(checkUsersConfidence(users).length).toBe(2);
        })
    })
});
