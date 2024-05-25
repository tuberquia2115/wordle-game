export type ModalView = 'instructions' | 'statistics';

export type StateModal = {
    open: boolean;
    view?: ModalView;
};