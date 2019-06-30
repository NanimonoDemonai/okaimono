import {ItemController} from "../store/Item";
import {Item} from "../components/Item";

const itemController = new ItemController({
    name: "金塊",
    price: 50000
});


export default () => (
    <>
        <Item controller={itemController}/>
    </>
)