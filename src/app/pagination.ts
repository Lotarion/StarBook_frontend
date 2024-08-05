export interface Pagination {
    page: number
    per_page: number
    sorting_parameter: string
    sorting_direction: string
}

export interface PaginatedOutput {
    total_objects: number
    objects: Array<any>
}
