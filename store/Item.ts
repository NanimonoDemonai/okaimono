import {action, computed, observable, configure} from "mobx";
import uuid from "uuid";

configure({enforceActions: "observed"});

export interface ItemData {
    readonly name: string;  //商品名
    readonly price: number; //値段
}

export interface ItemModel extends ItemData {
    readonly uuid: string;  //map用のuuid
    readonly count: number; //個数
    readonly fullPrice: number;//合計
    readonly decrementable: boolean;//マイナスボタンが押せるか？
}

export const defaultItemData: ItemData = {
    name: "ダミー",
    price: 50
};

export class ItemController implements ItemModel {
    readonly name: string;
    readonly price: number;
    readonly uuid: string;
    @observable private _count: number;


    constructor(data?: Partial<ItemData>) {
        const initializer: ItemData = {...defaultItemData, ...data};
        this.name = initializer.name;
        this.price = initializer.price;

        //uuid作成
        this.uuid = uuid.v4();

        this._count = 0;
    }

    @computed
    get count(): number {
        return this._count;
    }

    @computed
    get fullPrice(): number {
        return this._count * this.price;
    }

    @computed
    get decrementable(): boolean {
        return this._count > 0;
    }

    @action.bound
    increment() {
        this._count++;
    }

    @action.bound
    decrement() {
        if (this.decrementable)
            this._count--;
    }
}