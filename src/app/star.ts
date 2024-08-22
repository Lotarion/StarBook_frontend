interface StarBase {
    name: string
    right_ascension: number
    declination: number
    diameter: number | null
    mass: number | null
    visible_size: number | null
    distance: number | null
    absolute_magnitude: number | null
    spectral_class: string | null
    constellation_id: string | null
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
    filter_range: [number, number]
}

export interface EarthPosition {
    latitude: number
    longitude: number
    date: string
    time: string
}
