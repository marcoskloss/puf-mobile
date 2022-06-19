import * as React from 'react'
import * as svg from 'react-native-svg'
import icons from './map.json'

export const Icon = ({ name, color = 'white' }) => {
    const icon = icons[name]

    const renderElement = (child, idx) => {
        const Element = svg[child.type]
        return (
            <Element key={child.type + idx} {...child.attrs} stroke={color} />
        )
    }
    return <svg.Svg {...icon.attrs}>{icon.childs.map(renderElement)}</svg.Svg>
}
