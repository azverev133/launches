import React, {useCallback, useEffect, useState} from 'react'
import './App.css'

import { Title } from "./components/title/Title"
import { Content } from "./containers/content/Content"
import { Toolbar } from "./containers/toolbar/Toolbar"

import {ICustomMap, ILaunch} from "./types/entities"

export const App = () => {
    const [launches, setLaunches] = useState<ILaunch[] | []>([])

    const allFilterTemplate = { id: '0', value: 'All' }
    const [launchSiteFilter, setLaunchSiteFilter] = useState<ICustomMap>(allFilterTemplate)
    const [rocketFilter, setRocketFilter] = useState<ICustomMap>(allFilterTemplate)

    const filter = (launches: ILaunch[]): ILaunch[] =>
        launches
            .filter(launch => launch.launch_site.site_name === launchSiteFilter.value || launchSiteFilter.value === 'All')
            .filter(launch => launch.rocket.rocket_name === rocketFilter.value || rocketFilter.value === 'All')

    const onToolbarChange = useCallback((type: string, newValue: ICustomMap) => {
        switch (type) {
            case 'launch_site':
                setLaunchSiteFilter(newValue)
                break
            case 'rocket':
                setRocketFilter(newValue)
                break
        }
    }, [])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches ')
            .then(async response => {
                const initLaunches = await response.json()

                setLaunches(initLaunches.map((initLaunch: ILaunch) => {
                    initLaunch.launch_date = initLaunch.launch_date_local
                        ? new Date(initLaunch.launch_date_local).toLocaleDateString('ru-Ru')
                        : 'Unknown'

                    return initLaunch
                }))
            })
    }, [])

    return (
        <div className="App">
            <Title title="Launches" />
            <Toolbar launches={launches} onChange={onToolbarChange} />
            <Content launches={filter(launches)} />
        </div>
    )
}