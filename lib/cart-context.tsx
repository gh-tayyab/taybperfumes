"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product } from "@/lib/data";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("TAYB-cart");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("TAYB-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
  
      // Purana ecommerce object clear
      window.dataLayer.push({ ecommerce: null });
  
      window.dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
          currency: "PKR",
          value: product.price,
          items: [
            {
              item_id: product.id,
              item_name: product.name,
              item_category: product.category,
              price: product.price,
              quantity: 1,
            },
          ],
        },
      });
    }
  
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
  
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
  
      return [...prev, { product, quantity: 1 }];
    });
  
    setIsOpen(true);
  };

  const removeFromCart = (productId: string) => {
    const item = items.find((i) => i.product.id === productId);
  
    if (item && typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
  
      // Previous ecommerce object clear karo
      window.dataLayer.push({ ecommerce: null });
  
      window.dataLayer.push({
        event: "remove_from_cart",
        ecommerce: {
          currency: "PKR",
          value: item.product.price * item.quantity,
          items: [
            {
              item_id: item.product.id,
              item_name: item.product.name,
              item_category: item.product.category,
              price: item.product.price,
              quantity: item.quantity,
            },
          ],
        },
      });
    }
  
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
