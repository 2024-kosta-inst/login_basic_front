import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { useState } from "react";

const Search2 = () => {
  const [searchResult, setSearchResult] = useState([
    {
      id: 0,
      title: "돈돈즈 잠실 롯데월드몰 팝업스토어",
      location: "서울특별시 송파구",
      date: "2024-10-01 ~ 2024-10-31"
    },
    {
      id: 1,
      title: "꼬마마법사 레미 X 팝퍼블 콜라보 팝업",
      location: "서울특별시 서대문구",
      date: "2024-10-01 ~ 2024-10-20"
    },
    {
      id: 2,
      title: "골든볼 팝업스토어",
      location: "서울특별시 영등포구",
      date: "2024-10-01 ~ 2024-10-22"
    },
    {
      id: 3,
      title: "24년 짱구는 못말려 부산 팝업스토어 <짱구는 여행중!>",
      location: "부산광역시 해운대구",
      date: "2024-10-01 ~ 2024-10-10"
    },
  ]);

  const filterOptions = createFilterOptions({
    // "제목, 지역" 컬럼 모두 검색
    stringify: (option) => `${option.title} ${option.location}`
  });

  return (
    <>
      <Autocomplete
        disablePortal
        options={searchResult}
        getOptionLabel={(option) => `${option.title} - ${option.date}` } // 보여줄 내용
        sx={{ width: 1000 }}
        filterOptions={filterOptions}
        renderInput={(params) => <TextField {...params} label="검색" />}
      />
    </>
  );
};

export default Search2;
