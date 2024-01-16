import React, { useState } from "react";
import Chip from "./Chip";

interface iItems {
  logo: string;
  item: string;
}

interface CustomDropdownProps {
  items: Array<iItems>;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<iItems | null>(null);
  const [chips, setChips] = useState<iItems[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: iItems) => {
    if (!chips.includes(item)) {
      setChips([...chips, item]);
      setSelectedItem(item);
      setIsOpen(false);
    }
  };

  const handleChipDelete = (deletedItem: iItems) => {
    setChips(chips.filter((item) => item !== deletedItem));
    setSelectedItem(null);
  };

  return (
    <div className="custom-dropdown">
     
      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <div className="selected-item" onClick={toggleDropdown}>
          <div className="chips-container">
          <div className="chips">
        {chips.map((chip) => (
          <Chip key={chip.item} logo={chip.logo} label={chip.item} onDelete={() => handleChipDelete(chip)} />
        ))}
      </div>
          </div>
       
          {/* {selectedItem ? (
            <>
              <img src={selectedItem.logo} alt="" />
              <span>{selectedItem.item}</span>
            </>
          ) : (
            <span>Select an item</span>
          )} */}
          <span>Select a Bike</span>
        </div>
        {isOpen && (
          <ul className="dropdown-list">
            {items.map((item: iItems, index: number) => (
              <li key={index} onClick={() => handleSelect(item)}>
                <img src={item.logo} alt="" width={50} height={50} />
                <p>{item.item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
