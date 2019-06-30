import {action, computed, observable,configure} from "mobx";
import {ItemListController} from "./ItemList";

configure({enforceActions: "observed"});

export interface ItemAdderModel {
    readonly name: string;
    readonly price: string;

}

export class ItemAdderController implements ItemAdderModel{
    @observable private _name: string;
    @observable private _price: string;
    private _list: ItemListController;

    constructor(list: ItemListController) {
        this._name = "";
        this._price = "0";
        this._list = list;
    }

    @computed get name(){
        return this._name;
    }
    @computed get price(){
        return this._price;
    }

    @computed get isNumberError(): boolean {
        return this._price == "" || isNaN(Number(this._price));
    }

    @computed get isAddable(): boolean {
        return !this.isNumberError && this._name.length != 0;
    }

    @action.bound
    onNameChange(text: string) {
        this._name = text;
    }

    @action.bound
    onNumberChange(text: string) {
        this._price = text;
    }

    @action.bound
    onAdd() {
        if (this.isAddable) {
            this._list.addItem({
                name: this._name,
                price: Number(this._price)
            });

            this._name = "";
            this._price = "0";
        }

    }


}