import {ItemListController} from "../store/ItemList";
import {Observer} from "mobx-react-lite";
import {Item} from "../components/Item";

const list = new ItemListController();
list.addItem({
    name: "金塊",
    price: 50000
});
list.addItem({
    name: "蟹",
    price: 300000
});
let dummy = 0;

export default () => (
    <>
        <Observer>{() =>
            <>
                {list.items.map(e => <Item controller={e} key={e.uuid}/>)}
            </>
        }</Observer>
        <Observer>{() =>
            <p>{list.fullPrice}</p>
        }</Observer>
        <button
            onClick={()=>{
                list.addItem({
                    name: `ダミーくん${dummy}号`,
                    price: 3
                });
                dummy++;
            }}
        >
            ダミーを増やす
        </button>
    </>
)