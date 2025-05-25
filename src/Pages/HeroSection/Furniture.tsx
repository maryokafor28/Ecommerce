import React from "react";
import "./Furniture.css";
import {
  Furniture1,
  Furniture2,
  Furniture3,
  Furniture4,
  MobileItemFurniture,
  MobileItemFurniture1,
} from "../../icons/icons";

interface GalleryItem {
  id: number;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  items: number;
}

const items: GalleryItem[] = [
  { id: 1, image: Furniture1, label: "Furniture", items: 5 },
  { id: 2, image: Furniture2, label: "Furniture", items: 5 },
  { id: 3, image: Furniture3, label: "Furniture", items: 5 },
  { id: 4, image: Furniture4, label: "Furniture", items: 5 },
  { id: 5, image: MobileItemFurniture, label: "Furniture", items: 5 },
  { id: 6, image: MobileItemFurniture1, label: "Furniture", items: 5 },
];

const GalleryCard: React.FC<GalleryItem> = ({
  image: ImageComponent,
  label,
  items,
}) => (
  <div className="gallery-card">
    <ImageComponent className="gallery-image" />
    <div className="card-overlay">
      <p className="item-count">{items} Items</p>
      <h3 className="card-title">{label.toUpperCase()}</h3>
      <p className="card-link">Read More</p>
    </div>
  </div>
);
function FurnitureGallery() {
  return (
    <div className="gallery-container">
      <div className="left-item">
        <GalleryCard {...items[0]} />
      </div>
      <div className="Mobile-leftitem">
        <GalleryCard {...items[5]} />
      </div>
      <div className="right-top">
        <GalleryCard {...items[1]} />
      </div>
      <div className="mobile-item">
        <GalleryCard {...items[4]} />
      </div>

      <div className="right-bottom">
        <GalleryCard {...items[2]} />
        <GalleryCard {...items[3]} />
      </div>
    </div>
  );
}

export default FurnitureGallery;
