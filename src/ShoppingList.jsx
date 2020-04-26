import React, {useState} from 'react';
import {ItemInput, AddItemButton, ItemList, ItemCounter} from './shoppingListComponents.jsx';


export const shoppingBagContext = React.createContext({itemList: [], itemToAdd: null});


function ShoppingBagProvider({children}) {
    const initialContext = {itemToAdd: null, itemList: []};
    const [context, setContext] = useState(initialContext);

    return <shoppingBagContext.Provider value={[context, setContext]}>
        {children}
    </shoppingBagContext.Provider>;
}


export default function ShoppingList() {
    return <div>
        <ShoppingBagProvider>
            <div className="shopping-api">
                <ItemInput />
                <AddItemButton />
                <ItemList />
            </div>
            <ItemCounter header="Items in bag" />
        </ShoppingBagProvider>
    </div>;
}
