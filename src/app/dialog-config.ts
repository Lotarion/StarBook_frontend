export interface DialogConfig {
    title?: string;
    message?: string;
    cancelVisible?: boolean;

    confirmHandler?: () => void;
}
