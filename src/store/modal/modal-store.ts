import { create } from 'zustand';

interface State {
    open: boolean;
    view: string;
    openModal(view: string): void;
    closeModal(): void;
}


export const useModalStore = create<State>()((set) => ({
    open: false,
    view: '',
    openModal: (view: string) => set({ open: true, view }),
    closeModal: () => set({ open: false })
}))

