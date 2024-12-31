import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex flex-wrap gap-2 p-4  ">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Vlog" />
      <Button name="Comedy" />
      
    </div>
  );
};

export default ButtonList;
