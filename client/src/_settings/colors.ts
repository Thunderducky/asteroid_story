// TODO: Reorganize this into materials, also change the names to match the proper naming scheme and move this into the _data folder
// We'll even include "BLANK"
// As opposed to empty space
const COLORS = {
    DEBUG: '#FF3333',
    palette: {
        black: '#000000',
        devilsGray: '#666666',
        white: '#FFFFFF',
    },
    text: {
        dark: '#333333',
        light: '#CCCCCC'
    },

    player: '#FFFFFF',
    npc: '#CC0000',

    // 'dark_door':'#550000',
    // 'light_door': '#FF2222',

    outside: {
        dark: '#001429', // '#002244',
        light: '#002b47' //'#265380'
    } ,
    asteroid: {
        wall: {
            dark:'#2d2824',
            light: '#6e6359' // '#C8B432'
        },
        ground: {
            dark: '#443c35',
            light: '#5e554a' //'#C5CC89'
        }
    },
    metal: {
        wall: {
            dark:  '#363636', // '#4A4A4A',
            light: '#ABABAB' //'#858585'
        },
        ground: {
            dark: '#616161',
            light: '#858585'// '#BFBFBF'
        }
    }

}

export default COLORS
