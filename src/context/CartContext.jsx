import { createContext, useContext, useMemo, useReducer, useState } from 'react';

const CartContext = createContext(null);

const init = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      // Each line is unique by id+selections+notes — never auto-merge
      // because options matter. Keep simple: append a new line.
      return { ...state, items: [...state.items, action.payload] };
    }
    case 'UPDATE_QTY': {
      const items = state.items.map((it, i) =>
        i === action.index ? { ...it, qty: Math.max(1, action.qty) } : it
      );
      return { ...state, items };
    }
    case 'REMOVE': {
      const items = state.items.filter((_, i) => i !== action.index);
      return { ...state, items };
    }
    case 'CLEAR':
      return init;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, init);
  const [isOpen, setOpen] = useState(false);

  const subtotal = useMemo(
    () =>
      state.items.reduce(
        (sum, line) => sum + lineTotal(line),
        0
      ),
    [state.items]
  );

  const itemCount = useMemo(
    () => state.items.reduce((n, l) => n + l.qty, 0),
    [state.items]
  );

  const value = {
    items: state.items,
    subtotal,
    itemCount,
    isOpen,
    openCart: () => setOpen(true),
    closeCart: () => setOpen(false),
    toggleCart: () => setOpen((o) => !o),
    addItem: (line) => {
      dispatch({ type: 'ADD', payload: line });
      setOpen(true);
    },
    updateQty: (index, qty) => dispatch({ type: 'UPDATE_QTY', index, qty }),
    removeItem: (index) => dispatch({ type: 'REMOVE', index }),
    clear: () => dispatch({ type: 'CLEAR' }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};

// --- pricing helpers ---
export function lineUnitPrice(line) {
  const baseExtras = (line.modifiers || [])
    .flatMap((g) => g.options)
    .reduce((s, o) => s + (o.priceDelta || 0), 0);
  return line.basePrice + baseExtras;
}

export function lineTotal(line) {
  return lineUnitPrice(line) * line.qty;
}

export const fmt = (n) =>
  `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
