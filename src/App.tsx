import React, {useEffect, useState} from 'react'
import './App.css'

import { Title } from "./components/title/Title"
import { Content } from "./containers/content/Content"
import { Toolbar } from "./containers/toolbar/Toolbar"

import { ILaunch } from "./types/entities"

export const App = () => {
    const [launches, setLaunches] = useState<ILaunch[] | []>([])

    const [launchSiteFilter, setLaunchSiteFilter] = useState<String>('All')
    const [rocketFilter, setRocketFilter] = useState<String>('All')

    const filter = (launches: ILaunch[]): ILaunch[] =>
        launches
            .filter(launch => launch.launch_site.site_name === launchSiteFilter || launchSiteFilter === 'All')
            .filter(launch => launch.rocket.rocket_name === rocketFilter || rocketFilter === 'All')

    const onToolbarChange = (type: string, newValue: string) => {
        switch (type) {
            case 'launch_site':
                setLaunchSiteFilter(newValue)
                break
            case 'rocket':
                setRocketFilter(newValue)
                break
        }
    }

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches ')
            .then(async response => setLaunches(await response.json()))
    }, [])

    return (
        <div className="App">
            <Title title="Launches" style={{ paddingLeft: '.9em' }} />
            <Toolbar launches={launches} onChange={onToolbarChange} />
            <Content launches={filter(launches)} />
        </div>
    )
}