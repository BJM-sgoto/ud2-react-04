import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const location = useLocation();
  const { search } = useLocation();
  const query = new URLSearchParams(search); // クエリをいい感じにするjsのメソッド

  console.log(location);
  return (
    <div>
      <h1>URLParameterページ</h1>
      <p>url parameter is {id} </p>
      <p>query parameter is {query.get("name")} </p>
    </div>
  );
};
