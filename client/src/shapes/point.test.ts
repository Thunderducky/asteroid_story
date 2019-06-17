// THIS FILE IS MORE TO TEST OUR JEST SYSTEM THAN POINT :/
import { Point } from './point'

describe('We are testing the point class', (): void => {
    test('Using add does not modify the originals', (): void => {
        const a = Point.make(1,2)
        const b = Point.make(6,-2)
        const c = Point.add(a,b)
        expect(a.x).toBe(1)
        expect(a.y).toBe(2)
        expect(b.x).toBe(6)
        expect(b.y).toBe(-2)
        expect(c.x).toBe(7)
        expect(c.y).toBe(0)
    })
})