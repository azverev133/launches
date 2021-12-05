import "./Card.css"

import {ILaunch} from "../../types/entities"

interface CardProps {
    width?: number
    launch: ILaunch
}

export const Card = (props: CardProps) => {
    console.log(props)
    return (
        <div className="card" style={{ width: props.width }}>
            <img src={props.launch.links.mission_patch_small} alt={props.launch.mission_name} width={128} height={128}/>
            <div className="info">
                <div className="title-container">
                    <strong>{props.launch.mission_name}</strong>
                    <span>{
                        props.launch.launch_date_local
                            ? props.launch.launch_date_local
                                .split('T')[0]
                                .split('-')
                                .reverse()
                                .join('.')
                            : 'Unknown'
                    }</span>
                </div>
                <p>
                    {props.launch.details || (props.launch.upcoming ? 'Upcoming' : 'Unknown')}
                </p>
            </div>
        </div>
    )
}