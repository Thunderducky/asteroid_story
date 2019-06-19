// WARNING: HERE THERE BE DRAGONS, (or in this case, a lot of code I don'tunderstand)

// WE ONLY WANT ONE RNG GENERATOR BECAUSE WE ALWAYS WANT A SEED FOR IT
// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript

// Hashing function for taking simple string and creating better "true" seeds
// I HAVE NO IDEA WHAT THE MAGIC NUBMERS ARE FOR
function xmur3(str: string): Function {
    let h = 1779033703 ^ str.length // bitwise or the string with this random thing
    for(let i = 0; i < str.length; i++){
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
        h = h << 13 | h >>> 19
    }

    return function(): any{
        h = Math.imul(h ^ h >>> 16, 2246822507)
        h = Math.imul(h ^ h >>> 16, 3266489909)
        return (h ^= h >>> 16) >>> 0
    }
}

// GENERATORS
function sfc32(a: any, b: any, c: any, d: any): Function{
    return function(): any{
        a >>>= 0; b>>>= 0; c >>>= 0; d >>>= 0
        let t = (a + b) | 0
        a = b ^ b >>> 9
        c = (c << 21 | c >>> 11)
        d = d + 1 | 0
        t = t + d | 0
        c = c + t | 0
        
        return (t >>> 0) / 4294967296
    }
}

// ONE LINER CURRENTLY NOT IN USE
// const LCG= (s: any): Function=>(): any=>(2**31-1&(s=Math.imul(48271,s)))/2**31;

const RANDOM = {
    _generator: null as Function | null,
    seed: function(seedStr: string = new Date().toString() ): void {
        if(this._generator !== null){
            throw new Error('Cannot reseed the random number generato')
        } else {
            const seed = xmur3(seedStr)
            this._generator = sfc32(seed(), seed(), seed(), seed())
        }
    },
    next: function(): any {
        if(this._generator === null){
            this.seed()
        }
        const generator = this._generator as Function
        return generator()
    }
}

export { RANDOM }