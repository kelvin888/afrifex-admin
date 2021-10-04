import Art1 from "../../assets/images/art1.svg";
import Art2 from "../../assets/images/art2.svg";
import ArtBackground from "../../assets/images/art-bg.svg";
import ArtBackground2 from "../../assets/images/art-bg2.svg";

export const ArtBg = () => {
  return (
    <div className="art-bg">
      <img src={Art1} alt="bg1" className="art-img light-img" />
      <img src={Art2} alt="bg2" className="art-img light-img" />
      <img src={ArtBackground} alt="art bg" className="wave-img light-img" />
      <img src={ArtBackground2} alt="art bg" className="wave-img dark-img" />
    </div>
  );
};
