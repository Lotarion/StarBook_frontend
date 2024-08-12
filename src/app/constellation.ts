interface ConstellationBase {
    name: string
}

export interface ConstellationCreate extends ConstellationBase {
}

export interface ConstellationInStorage extends ConstellationBase {
    id: string
}

export interface ConstellationUpdate extends ConstellationInStorage {
}

export interface Constellation extends ConstellationInStorage {
}
