import { useMemo, useState } from "react";
import { getRandomNumList } from "./utils";

export const SortMemo = ({ state, scale }) => {
  const [unsortedList,] = useState(getRandomNumList(scale));

  const sortedList = useMemo(
    () => unsortedList.sort(),
    [unsortedList],
  );

  return (
    <p>
      Sorting an array of {scale} numbers <b>with</b> useMemo()<br />
      state: {state}<br />
      first element: {sortedList[0]}<br />
      last element: {sortedList.at(-1)}
    </p>
  );
};
