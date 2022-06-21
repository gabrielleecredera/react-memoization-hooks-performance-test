import { useState } from "react";
import { getRandomNumList } from "./utils";

export const Sort = ({ state, scale }) => {
  const [unsortedList,] = useState(getRandomNumList(scale));

  const sortedList = unsortedList.sort()

  return (
    <p>
      Sorting an array of {scale} numbers <b>without</b> useMemo()<br />
      state: {state}<br />
      first element: {sortedList[0]}<br />
      last element: {sortedList.at(-1)}
    </p>
  );
};
