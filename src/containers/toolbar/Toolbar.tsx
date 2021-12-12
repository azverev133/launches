import "./Toolbar.css"

import { Dropdown } from "../../components/dropdown/Dropdown"

import {ICustomMap, ILaunch} from "../../types/entities"

interface ToolbarProps {
    launches: ILaunch[]
    onChange: (type: string, newValue: ICustomMap) => void
}

export const Toolbar = (props: ToolbarProps) => (
    <div className="toolbar">
        <Dropdown
            label="Launch Site"
            items={[...new Set(props.launches.map(launch => ({ id: launch.launch_site.site_id, value: launch.launch_site.site_name })))]}
            style={{ margin: '0 5px'}}
            onChange={(newValue) => props.onChange && props.onChange('launch_site', newValue)}
        />
        <Dropdown
            label="Rocket"
            items={[...new Set(props.launches.map(launch => ({ id: launch.rocket.rocket_id, value: launch.rocket.rocket_name })))]}
            style={{ margin: '0 5px'}}
            onChange={(newValue) => props.onChange && props.onChange('rocket', newValue)}
        />
    </div>
)