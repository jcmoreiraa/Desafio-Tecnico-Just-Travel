import { create } from 'zustand';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  countCartItems: () => number
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (newItem) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        };
      }
      return { items: [...state.items, newItem] };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
   countCartItems: () => {
    const currentItems = get().items;
    return currentItems.reduce((total, item) => total + item.quantity, 0);
  },
  
}));
