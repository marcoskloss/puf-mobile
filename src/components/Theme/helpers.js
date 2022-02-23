const addIfExists = (props, value) =>
    props !== null && props !== undefined ? value : ''

const theme = prop => value => props => props.theme[prop][value] || value

export const th = {
    space: theme('spaces'),
    size: theme('fontSizes'),
    color: theme('colors'),
}

export const background = props =>
    addIfExists(props.bg, `background: ${props.theme.colors[props.bg]};`)

export const font = props => {
    const fontSize = props.fontSize ?? null

    return `
        ${addIfExists(
            props.color,
            `color: ${props.theme.colors[props.color] || props.color};`
        )}
        ${addIfExists(
            fontSize,
            `font-size: ${props.theme.fontSizes[fontSize]}px;`
        )}
        ${addIfExists(props.textAlign, `text-align: ${props.textAlign};`)}
        ${addIfExists(props.fontWeight, `font-weight: ${props.fontWeight};`)}
    `
}

export const flexbox = props => {
    const justifyContent = props.justifyContent || (props.center && 'center')
    const alignItems = props.alignItems || (props.center && 'center')

    let css = `${addIfExists(props.flex, `flex: ${props.flex};`)};`

    if (props.flexbox) {
        css += `
            ${addIfExists(props.flexbox, 'display: flex;')};
            ${addIfExists(props.col, 'flex-direction: column;')};
            ${addIfExists(
                justifyContent,
                `justify-content: ${justifyContent};`
            )};
            ${addIfExists(alignItems, `align-items: ${alignItems};`)};
        `
    }
    return css
}

export const margin = props => {
    const mb = props.mb ?? props.my ?? props.m ?? null
    const mt = props.mt ?? props.my ?? props.m ?? null
    const mr = props.mr ?? props.mx ?? props.m ?? null
    const ml = props.ml ?? props.mx ?? props.m ?? null

    return `
        ${addIfExists(mb, `margin-bottom: ${props.theme.spaces[mb]}px;`)}
        ${addIfExists(mt, `margin-top: ${props.theme.spaces[mt]}px;`)}
        ${addIfExists(ml, `margin-left: ${props.theme.spaces[ml]}px;`)}
        ${addIfExists(mr, `margin-right: ${props.theme.spaces[mr]}px;`)}
    `
}

export const padding = props => {
    const pb = props.pb ?? props.py ?? props.p ?? null
    const pt = props.pt ?? props.py ?? props.p ?? null
    const pr = props.pr ?? props.px ?? props.p ?? null
    const pl = props.pl ?? props.px ?? props.p ?? null

    return `
        ${addIfExists(pb, `padding-bottom: ${props.theme.spaces[pb]}px;`)}
        ${addIfExists(pt, `padding-top: ${props.theme.spaces[pt]}px;`)}
        ${addIfExists(pl, `padding-left: ${props.theme.spaces[pl]}px;`)}
        ${addIfExists(pr, `padding-right: ${props.theme.spaces[pr]}px;`)}
    `
}
