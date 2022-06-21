import { useCallback, useState } from "react";
import { getRandomNumList, weirdFn } from "./utils";

export const SortMemo = ({ state, scale }) => {
  const [unsortedList,] = useState(getRandomNumList(scale));

  const output = useCallback(
    weirdFn,
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
