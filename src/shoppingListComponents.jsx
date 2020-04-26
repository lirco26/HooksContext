import React, {useContext} from 'react';
import {shoppingBagContext} from './ShoppingList.jsx';


export function ItemInput() {
    const [shoppingBag, setShoppingBag] = useContext(shoppingBagContext);
    return <input className="shopping-list-component"
                  type="text"
                  value={shoppingBag.itemToAdd ? shoppingBag.itemToAdd : ''}
                  onChange={event => {
                      setShoppingBag({itemList: shoppingBag.itemList, itemToAdd: event.target.value});
                  }}/>;
}

export function AddItemButton() {
    const [shoppingBag, setShoppingBag] = useContext(shoppingBagContext);
    return <button className="shopping-list-component"
                   onClick={() => {
                       const itemList = [...shoppingBag.itemList];
                       if (shoppingBag.itemToAdd) {
                           itemList.push(shoppingBag.itemToAdd);
                           setShoppingBag({itemList, itemToAdd: null});
                       }
                   }}> Add to bag </button>;
}

export function ItemList() {
    const shoppingBag = useContext(shoppingBagContext)[0];
    return <div className="items-list shopping-list-component">
        <h4>Chosen items:</h4>
        {shoppingBag.itemList.map((item, index) => <span key={index}>{item}</span>)}
    </div>;
}

export function ItemCounter({header}) {
    const shoppingBag = useContext(shoppingBagContext)[0];

    const itemsCount = shoppingBag.itemList ? shoppingBag.itemList.length : 0;
    return <div className="counter">
        {header}: {itemsCount}
    </div>;
}