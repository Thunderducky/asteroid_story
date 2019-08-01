import { Entity, IComponent } from '../entity'
import { IPoint } from '../../shapes/point';

class Item implements IComponent{
    owner: Entity;
    useFn: Function;
    needsTarget: boolean;
    targetValidatorFn: Function;
    constructor(owner: Entity, useFn?: Function){
        this.owner = owner
        this.useFn = useFn || (() => {})
        this.needsTarget = false
        this.targetValidatorFn = (() => true)
    }
    use(user: Entity, worldPoint?: IPoint): boolean{
        return this.useFn(user, worldPoint)
    }
    // or should I just provide the function?
    isTargetValid(worldPoint: IPoint): boolean {
        return this.targetValidatorFn(worldPoint)
    }
}

export { Item }