import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    sum(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    sumWithDiscount(discount: number): number {
        const totalPrice = this.sum();
        return totalPrice - (totalPrice * discount / 100);
    }

    deleteItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}
