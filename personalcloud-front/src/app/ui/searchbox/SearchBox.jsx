import "./SearchBox.css";
import gripIcon from "../../../../public/icons/grid.svg";
import listIcon from "../../../../public/icons/list.svg";
import Image from "next/image";
import Seach from "../../components/Seach/Seach";
export const SearchBox = ({
  convertToGrid,
  convertToList,
  hoverActivate
}) => {
  return (
    <div className="SearchBox">
      <Seach />
      <div className="container__button">
        <button
          className={
            hoverActivate
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
            hoverActivate
              ? "SearchBox__Button"
              : "SearchBox__Button Hover__Activated"
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
