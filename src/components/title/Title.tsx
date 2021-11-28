import "./Title.css"

import {CSSProperties} from "react"

interface TitleProps {
    title?: string
    style?: CSSProperties
}

export const Title = (props: TitleProps) => (
    <h1 className="title" style={props.style}>{props.title}</h1>
)