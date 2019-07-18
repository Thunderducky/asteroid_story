import { IPoint } from '../shapes/point'

interface IMoveMessage {
    id: number;
    delta: IPoint;
}
export { IMoveMessage }