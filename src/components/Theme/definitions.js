const baseColors = {
    black: '#000',
    red: '#FF647C',
    green: '#0BD9B3',
    blue: '#487FD9',
    yellow: '#EBC455',
    gray: '#A0A2AE',
    white: '#FFFFFF',
    line: 'rgba(228, 228, 228, 0.2)',
}

const brandColors = {
    rasinBlack: '#16171C',
    caribbeanGreen: baseColors.green,
}

const colors = {
    ...baseColors,
    ...brandColors,
}

const fontSizes = [10, 12, 14, 16, 18, 21, 24, 27, 30, 36, 42, 48]
const spaces = [4, 8, 12, 16, 20, 24, 28, 32, 64, 128]

export const definitions = { colors, fontSizes, spaces }
