// THIS FILE IS MORE TO TEST OUR JEST SYSTEM THAN POINT :/
import DEBUG from './debugSettings'

describe('No debug settings should be turned on', (): void => {
    test('NO DEBUGS ON DEPLOY', (): void => {
        for(let key in DEBUG){
            expect(DEBUG[key]).toBe(false)
        }
    })
})