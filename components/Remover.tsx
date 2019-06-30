import {FC, useContext} from "react";
import {ItemController} from "../store/Item";
import {ItemListControllerContext} from "./ItemList";

export const Remover: FC<{ controller: ItemController; }> = props => {
    const list = useContext(ItemListControllerContext);
    return (
        <>
            {list != null &&
            <button onClick={() => {
                list.removeChildren(props.controller)
            }}>
                削除
            </button>
            }
        </>
    )
};