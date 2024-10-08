import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Search = () => {
  const [searchResult, setSearchResult] = useState([
    {
      id: 0,
      title: "돈돈즈 잠실 롯데월드몰 팝업스토어",
      location: "서울특별시 송파구",
    },
    {
      id: 1,
      title: "꼬마마법사 레미 X 팝퍼블 콜라보 팝업",
      location: "서울특별시 서대문구",
    },
    {
      id: 2,
      title: "골든볼 팝업스토어",
      location: "서울특별시 영등포구",
    },
    {
      id: 3,
      title: "24년 짱구는 못말려 부산 팝업스토어 <짱구는 여행중!>",
      location: "부산광역시 해운대구",
    },
  ]);
  useEffect(() => {}, []);

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log("목록에서 hover 된 아이템", result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log("목록에서 선택한 아이템", item);
  };

  const handleOnFocus = () => {
    console.log("검색창 활성화");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <>
      <ReactSearchAutocomplete
        fuseOptions={{ keys: ["title", "location"] }} // 검색 옵션 (두개 필드에서 검색)
        resultStringKeyName="title" // "보여지는 결과"
        items={searchResult}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        onClear={handleOnClear}
        autoFocus
        styling={{
          height: "34px",
          border: "1px solid darkgreen",
          borderRadius: "4px",
          backgroundColor: "white",
          boxShadow: "none",
          hoverBackgroundColor: "lightgreen",
          color: "darkgreen",
          fontSize: "12px",
          fontFamily: "Courier",
          iconColor: "green",
          lineColor: "lightgreen",
          placeholderColor: "darkgreen",
          clearIconMargin: "3px 8px 0 0",
          zIndex: 2,
        }}
      />
    </>
  );
};

export default Search;
