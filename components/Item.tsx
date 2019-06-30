import {FC} from "react";
import {ItemController, ItemData} from "../store/Item";
import {Observer} from "mobx-react-lite";
import {Remover} from "./Remover";

export const ItemDescription: FC<ItemData> = props => (
    <div>
        <p>商品名:{props.name}</p>
        <p>価格:{props.price}</p>
    </div>
);

export interface ItemCountProps {
    count: number;
    fullPrice: number;
}

export const ItemCount: FC<ItemCountProps> = props => (
    <div>
        <span className={"count"}>個数:{props.count}</span>
        <span>合計金額:<b>{props.fullPrice}</b></span>

        { /*language=CSS*/}
        <style jsx>{`
            .count {
                padding-right: 2em;
            }
        `}</style>
    </div>
);

export const Item: FC<{ controller: ItemController; }> = props => (
    <div className={"item"}>
        <ItemDescription name={props.controller.name} price={props.controller.price}/>
        <hr/>
        <Observer>{() =>
            <ItemCount count={props.controller.count} fullPrice={props.controller.fullPrice}/>
        }</Observer>
        <button onClick={
            () => {
                props.controller.increment()
            }
        }>
            +
        </button>
        <Observer>{() =>
            <button
                onClick={
                    () => {
                        props.controller.decrement()
                    }
                }
                disabled={!props.controller.decrementable}
            >
                -
            </button>
        }</Observer>
        <Remover controller={props.controller}/>
        {/* language=CSS*/}
        <style jsx>{`
            .item {
                border: double;
                padding: 1em;
                margin: 1em;
            }
        `}</style>
    </div>
);