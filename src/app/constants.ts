export const api_base = "http://localhost:8000/api/v1/"

export const snackbar_msg = {
    position: 'bottom-center',
    timeout: 2000,
    style: {
        container: [
            ['background-color', 'var(--dark-accent)'],
            ['border-radius', '10px'],
        ],
        message: [
            ['color', 'white'],
            ['font-size', '16px']
        ]
    }
}

export const snackbar_error = {
    position: 'bottom-center',
    timeout: 5000,
    style: {
        container: [
            ['background-color', '#503e4a'],
            ['border-radius', '10px'],
        ],
        message: [
            ['color', 'white'],
            ['font-size', '16px'],
        ]
    }
}
