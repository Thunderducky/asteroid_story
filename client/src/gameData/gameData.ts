import { FOVCell } from "../fov"
import { Grid } from "../grid"
import SETTINGS from "../_settings/gameSettings"
import { PUBSUB } from "../pubSub/pubSub"
import { Tile } from "../tile"
import DEBUG from "../_settings/debugSettings"
import { TOPICS } from "../pubSub/pubsubTopicList"

// This is a way for us to request game data, it acts as a big object,
// and we can control when we initialize all of it
// which we will split into files later
// Let's start with the FOV system, which is relatively independent of all of this

// This is where we would export it into it's own data init functions
const fovGrid = new Grid<FOVCell>(SETTINGS.CAMERA_WIDTH, SETTINGS.CAMERA_HEIGHT)
fovGrid.setEach((): FOVCell => { return { visible: false} })

const tileGrid: Grid<Tile> = new Grid<Tile>(SETTINGS.MAP_WIDTH, SETTINGS.MAP_HEIGHT)
tileGrid.setEach((cell: Tile, index: number, x: number, y: number): Tile => {
    const t = new Tile(x,y, true)
    if(DEBUG.DISABLE_FOV){
        t.explored = true
    }
    return t
})
// fov/ grid/ recompute, put it all in one data set here
// and all other operations just work on them
const GameData = {
    fovGrid,
    tileGrid,
    init: function(){
        PUBSUB.subscribe(TOPICS.SYSTEM_REQUEST_FN, (fn): void => {
            fn({
                fovGrid: GameData.fovGrid, 
                tileGrid: GameData.tileGrid
            })
        })
    }
}

export { GameData}