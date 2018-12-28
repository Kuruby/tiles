import AddIdenticalFields from '../lib/add_identical_fields'
import ColorToRGBString from '../lib/color_to_string'

const BackgroundColorate = (color) => {
    var mainColor = color

    //Colors for the change to the secondary and tertiary colors: Added to primary to get required color. e.g.
    //from black to white is { r: 255, g:255, b:255 }
    const toSecondaryChange = { r: 4, g: 4, b: 4 }
    const toTertiaryChange = { r: 10, g: 10, b: 10 }
    const negativeChangeThreshold = 128;

    //if over threshold change is negative instead of positive
    for (var channel in mainColor) {
        if (mainColor[channel] > negativeChangeThreshold) {
            toSecondaryChange[channel] *= -1;
            toTertiaryChange[channel] *= -1;
        }
    }

    //Use field adding to get the secondary and tertiary colors
    var secondaryColor = AddIdenticalFields(mainColor,toSecondaryChange)
    var tertiaryColor = AddIdenticalFields(mainColor,toTertiaryChange)

    //return an object with the three calculated colors
    return {
        main:ColorToRGBString(mainColor),
        secondary:ColorToRGBString(secondaryColor),
        tertiary:ColorToRGBString(tertiaryColor)
    }
}

export default BackgroundColorate