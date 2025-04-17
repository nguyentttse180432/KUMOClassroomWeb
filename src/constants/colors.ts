export const colors = {
    LightBeige: '#F3F3E0',
    DarkBlue: '#133E87',
    MediumBlue: '#608BC1',
    LightBlue: '#CBDCEB',
    White: '#FFFFFF',
}

export type ColorKey = keyof typeof colors;
export type ColorValue = typeof colors[ColorKey];