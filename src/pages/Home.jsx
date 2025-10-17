import React from "react";
import useMobile from "../Hooks/useMobile";
import Card from "../components/Card";

const Home = () => {
  const { mobiles, error, loder } = useMobile();
  const homeMobiles = mobiles.slice(0, 6);
  if (loder) return <div> loading ...</div>;

  return (
    <div className="py-4">
      {console.log(mobiles)}
      {homeMobiles.map((mobile) => (
        <Card mobile={mobile}></Card>
      ))}
    </div>
  );
};

export default Home;
