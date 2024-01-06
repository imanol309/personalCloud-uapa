import './SearchBox.css';
import gripIcon from '../../../../public/icons/grid.svg';
import listIcon from '../../../../public/icons/list.svg';
import Image from 'next/image';

export const SearchBox = ({ convertToGrid, convertToList }) => {
  return (
    <div className="SearchBox">
      <input
        type="text"
        className="SearchBox__Input"
        placeholder="Buscar Archivo"
      />
      <button className="SearchBox__Button" onClick={convertToGrid}>
        <Image src={gripIcon} className="Icon__Grid" alt="GridIcon" />
        Grid
      </button>
      <button className="SearchBox__Button" onClick={convertToList}>
        <Image src={listIcon} className="Icon__List" alt="ListIcon" />
        List
      </button>
    </div>
  );
};
