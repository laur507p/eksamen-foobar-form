import React from "react";
import AddAndRemove from "../AddAndRemove";
import GetTotal from "../GetTotal";

function BeersList() {
  const Beers = [
    {
      id: "1",
      name: "El Hefe",
      description: "The perfect beer",
      price: 65,
    },
    {
      id: "2",
      name: "Ruined Childhood",
      description: "I cry",
      price: 60,
    },
    {
      id: "3",
      name: "Githop",
      description: "Nerd alert",
      price: 65,
    },
    {
      id: "4",
      name: "Mowintime",
      description: "Give me some soul sistah",
      price: 65,
    },
  ];

  return (
    <section className="screen" id="screen2">
      <a href="#screen3" className="testbutton">
        Next
      </a>
      <ul>
        {Beers.map((data) => (
          <li key={data.id}>
            <p>{data.name}</p>
            <p>{data.price}</p>
            <AddAndRemove price={data.price} />
          </li>
        ))}
      </ul>
      <GetTotal />
    </section>
  );
}

export default BeersList;
