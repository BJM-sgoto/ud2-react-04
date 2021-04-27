import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state, state2 } = useLocation();
  console.log(state, state2);
  const history = useHistory();
  const onClickBack = () => history.goBack(); // ブラウザのバックと同じ挙動
  return (
    <div>
      <h1>Page1 詳細A</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
