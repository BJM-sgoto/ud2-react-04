import { Page2 } from "../components/Page2";
import { UrlParameter } from "../components/UrlParameter";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id", // コロンで記載した変数をURLパラメータとして受け取る
    exact: false,
    children: <UrlParameter />
  }
];
