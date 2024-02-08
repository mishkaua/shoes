import { ShoeDetail } from "./components/ShoeDetail";
import { Navbar } from "./components/nav";
import { Card } from "./components/Card";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { SHOE_LIST } from "./constants";
import { Sidebar } from "./components/Sidebar";
import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  const removeFromCart = (productId) => {
    console.log("remove", productId);
    const updatedCartItems = [...cartItems];
    const existingItem = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    updatedCartItems.splice(existingItem, 1);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItem = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItem > -1) {
        updatedCartItems[existingItem].qty = qty;
        updatedCartItems[existingItem].size = size;
      } else {
        updatedCartItems.push({ product, qty, size });
      }

      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="animate-fadeIn text-black xl:px-24 p-10 text-2xl dark:bg-night">
      <Navbar onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className=" bg-night-50 shadow-lg rounded-full px-4 py-2 dark:bg-white dark:text-night text-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}
