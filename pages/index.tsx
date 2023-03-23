import { NextPage } from "next";
import { PropsWithChildren } from "react";

type Props = {
  hello: string;
};

const Home: NextPage<PropsWithChildren<Props>> = (props) => {
  const { hello } = props;
  return <h1>Bonjour</h1>;
};

export default Home;
