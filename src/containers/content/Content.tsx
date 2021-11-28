import "./Content.css"

import { Card } from "../../components/card/Card"
import { System } from "../../utils/System"

import { ILaunch } from "../../types/entities"

interface ContentProps {
    launches: ILaunch[]
}

export const Content = (props: ContentProps) => (
    <div className="content">
        {props.launches && props.launches.map(launch => <Card key={System.uid} width={document.body.clientWidth / 2} launch={launch} />)}
    </div>
)