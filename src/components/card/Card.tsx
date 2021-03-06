import "./Card.css"

import {ILaunch} from "../../types/entities"

interface CardProps {
    width?: number
    launch: ILaunch
}

export const Card = (props: CardProps) => {

    return (
        <div className="card">
            <img src={props.launch.links.mission_patch_small} alt={props.launch.mission_name} width={128} height={128}/>
            <div className="info">
                <div className="title-container">
                    <strong>{props.launch.mission_name}</strong>
                    <span>{props.launch.launch_date}</span>
                </div>
                <p>
                    {props.launch.details || (props.launch.upcoming ? 'Upcoming' : 'Unknown')}
                </p>
            </div>
        </div>
    )
}