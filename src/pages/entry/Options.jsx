import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import ScoopOption from "./ScoopOption";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then((res) => setItems(res.data))
      .catch((err) => {});
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent key={item.name} imagePath={item.imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
