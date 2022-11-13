export interface ILaunchSite {
    site_id: string
    site_name: string
    site_name_long: string
}

export interface IRocket {
    rocket_id: string
    rocket_name: string
    rocket_type: string
    [key: string]: any
}

export interface ILaunch {
    flight_number: number
    mission_name: string
    mission_id: []
    upcoming: boolean
    launch_year: string
    launch_date_unix: number
    launch_date_utc: string
    launch_date_local: string
    launch_date: string
    is_tentative: boolean
    tentative_max_precision: string
    tbd: boolean
    launch_window: number
    rocket: IRocket
    launch_site: ILaunchSite
    details?: string
    [key: string]: any
}

interface ICustomMap {
    id: string
    value: string
}