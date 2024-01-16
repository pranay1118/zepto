import React from 'react';

interface ChipProps {
  label: string;
  logo:string
  onDelete: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onDelete,logo }) => {
  return (
    <div className="chip">
       <img src={logo} alt="" width={30} height={30} /> <p>{label}</p>
      <button onClick={onDelete} className='close' >X</button>
    </div>
  );
};

export default Chip;