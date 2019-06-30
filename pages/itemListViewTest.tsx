import {ItemListController} from "../store/ItemList";
import {ItemList} from "../components/ItemList";

const list = new ItemListController();
list.addItem({
    name: "金塊",
    price: 50000
});
list.addItem({
    name: "蟹",
    price: 300000
});

export default () => (
    <ItemList controller={list}/>
);