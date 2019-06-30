import {ItemListController} from "../store/ItemList";
import {ItemList} from "../components/ItemList";
import {ItemAdderController} from "../store/ItemAdder";
import {ItemAdder} from "../components/ItemAdder";

const list = new ItemListController();
list.addItem({
    name: "金塊",
    price: 50000
});
list.addItem({
    name: "蟹",
    price: 300000
});

const adder = new ItemAdderController(list);

export default () => (
    <>
        <ItemAdder controller={adder}/>
        <ItemList controller={list}/>
    </>
);