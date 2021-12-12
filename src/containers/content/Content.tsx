import "./Content.css"

import { Card } from "../../components/card/Card"

import { ILaunch } from "../../types/entities"

interface ContentProps {
    launches: ILaunch[]
}

export const Content = (props: ContentProps) => (
    <div className="content">
        {props.launches && props.launches.map(launch => <Card key={launch.flight_number} width={document.body.clientWidth / 2} launch={launch} />)}
    </div>
)