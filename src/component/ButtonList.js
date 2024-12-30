import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Shorts" />
      <Button name="Dance" />
      <Button name="Prank" />
      <Button name="Podkast" />
      <Button name="Vlog" />
      <Button name="Comedy" />
      <Button name="Movies" />
      
    </div>
  );
};

export default ButtonList;
