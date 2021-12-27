import React from "react";
import Collection from "./Collection/Collection";
import Gallery from "./Gallery/Gallery";
import HotDeal from "./HotDeal/HotDeal";

export default function Pages() {
  return (
    <div>
      <Collection />
      <Gallery />
      <HotDeal />
    </div>
  );
}
