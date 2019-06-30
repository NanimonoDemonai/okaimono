import {ItemController, ItemData} from "./Item";
import {action, computed, configure, observable, IObservableArray} from "mobx";

configure({enforceActions: "observed"});

export interface ItemListModel {
    readonly items: ReadonlyArray<ItemController>;
    readonly fullPrice: number;
}

export class ItemListController implements ItemListModel {
    private readonly _items: IObservableArray<ItemController>;

    constructor(items?: ItemController[]) {
        this._items = observable(items ? items : []);
    }

    @computed get items(): ReadonlyArray<ItemController> {
        return this._items;
    }

    @computed get fullPrice() {
        return this._items.reduce((acc, cur) => acc + cur.fullPrice, 0)
    }

    @action.bound
    addItem(data: Partial<ItemData>) {
        this._items.push(new ItemController(data));
    }

    @action.bound
    removeChildren(child: ItemController) {
        this._items.remove(child);
    }
}