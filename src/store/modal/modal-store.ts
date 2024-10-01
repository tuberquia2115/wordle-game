import { create } from 'zustand';

type ComponentType = 'instructions' | 'statistics';
interface State {
    open: boolean;
    componentType: ComponentType | null;
    openModal(componentType?: ComponentType): void;
    closeModal(): void;
}

export const useModalStore = create<State>()((set) => ({
    open: false,
    componentType: null,
    openModal: (componentType: ComponentType) => set({ open: true, componentType }),
    closeModal: () => set({ open: false }),
}));
