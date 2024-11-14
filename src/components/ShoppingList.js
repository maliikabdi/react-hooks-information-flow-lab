import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter items based on the selected category
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      {/* Display items or a message if no items match the filter */}
      <ul className="Items">
        {itemsToDisplay.length > 0 ? (
          itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))
        ) : (
          <p>No items found for this category.</p>
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
