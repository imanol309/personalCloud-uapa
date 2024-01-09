import "./SearchBox.css";
import gripIcon from "../../../../public/icons/grid.svg";
import listIcon from "../../../../public/icons/list.svg";
import Image from "next/image";
import Seach from "../../components/Seach/Seach";
export const SearchBox = ({
  convertToGrid,
  convertToList,
  hoverActivatedGrid,
  hoverActivatedlist,
}) => {
  return (
    <div className="SearchBox">
      <Seach />
      <div className="container__button">
        <button
          className={
            hoverActivatedGrid
              ? "SearchBox__Button Hover__Activated"
              : "SearchBox__Button"
          }
          onClick={convertToGrid}
        >
          <Image
            src={gripIcon}
            className="Icon__Grid"
            alt="GridIcon"
            height={"auto"}
            width={"auto"}
          />
          Grid
        </button>
        <button
          className={
            hoverActivatedlist
              ? "SearchBox__Button Hover__Activated"
              : "SearchBox__Button"
          }
          onClick={convertToList}
        >
          <Image
            src={listIcon}
            className="Icon__List"
            alt="ListIcon"
            height={"auto"}
            width={"auto"}
          />
          List
        </button>
      </div>
    </div>
  );
};
