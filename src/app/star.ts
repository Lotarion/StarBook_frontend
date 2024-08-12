interface StarBase {
    name: string
    right_ascension: number
    declination: number
    diameter: number
    mass: number
    visible_size: number
    distance: number
    absolute_magnitude: number
    spectral_class: string
    constellation_id: string
}

export interface StarCreate extends StarBase {
}

export interface StarInStorage extends StarBase {
    id: string
}

export interface StarUpdate extends StarInStorage {
}

export interface Star extends StarInStorage {
}

export interface StarFilter {
    filter_by: string
    filter_string?: string
    filter_range?: [number, number]
}

export interface EarthPosition {
    latitude: number
    longitude: number
    timestamp: number
}
