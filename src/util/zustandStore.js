// workProject(leftMenu > WorkSpace) 에서 선택한 workProject info zustand
import create from "zustand";

export const menuStore = create(set => (
    {
        activeKey: null,
        setActiveKey: props => set(state => ({activeKey : props}))

    }
));