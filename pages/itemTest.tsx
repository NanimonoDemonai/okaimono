import {ItemController} from "../store/Item";
import {Observer} from "mobx-react-lite";

const itemController1 = new ItemController();

const itemController2 = new ItemController({
    name: "金塊",
    price: 50000
});


export default () => (
    <>
        <div>
            <p>品名:{itemController1.name}</p>
            <p>値段:{itemController1.price}</p>
            <p>UUID:{itemController1.uuid}</p>
            <p>個数:{itemController1.count}</p>
            <p>総額:{itemController1.fullPrice}</p>
            <button
                onClick={()=>{
                    itemController1.increment();
                }}
            >
                +
            </button>
            <button
                onClick={()=>{
                    itemController1.decrement();
                }}
                disabled={!itemController1.decrementable}
            >
                -
            </button>
        </div>

        <div>
            <p>品名:{itemController1.name}</p>
            <p>値段:{itemController1.price}</p>
            <p>UUID:{itemController1.uuid}</p>
            <Observer>{() =>
                <p>個数:{itemController1.count}</p>
            }</Observer>
            <Observer>{() =>
                <p>総額:{itemController1.fullPrice}</p>
            }</Observer>
            <button
                onClick={()=>{
                    itemController1.increment();
                }}
            >
                +
            </button>
            <Observer>{() =>
                <button
                    onClick={() => {
                        itemController1.decrement();
                    }}
                    disabled={!itemController1.decrementable}
                >
                    -
                </button>
            }</Observer>
        </div>

        <div>
            <p>品名:{itemController2.name}</p>
            <p>値段:{itemController2.price}</p>
            <p>UUID:{itemController2.uuid}</p>
            <Observer>{() =>
                <p>個数:{itemController2.count}</p>
            }</Observer>
            <Observer>{() =>
                <p>総額:{itemController2.fullPrice}</p>
            }</Observer>
            <button
                onClick={()=>{
                    itemController2.increment();
                }}
            >
                +
            </button>
            <Observer>{() =>
                <button
                    onClick={() => {
                        itemController2.decrement();
                    }}
                    disabled={!itemController2.decrementable}
                >
                    -
                </button>
            }</Observer>
        </div>
    </>
)