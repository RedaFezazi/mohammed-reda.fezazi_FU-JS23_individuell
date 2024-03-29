import blackLeaf from "../../assets/decorations/decoLeftRight/blackLeaf.svg";
import orangePlant from "../../assets/decorations/decoLeftRight/orangePlant.svg";
import purplePlant from "../../assets/decorations/decoLeftRight/purplePlant.svg";
import thickBlueLeaf from "../../assets/decorations/decoLeftRight/thickBlueLeaf.svg";
import thinBlueLeaf from "../../assets/decorations/decoLeftRight/thinBlueLeaf.svg";
import whiteLeaf from "../../assets/decorations/decoLeftRight/whiteLeaf.svg";
import whitePlant from "../../assets/decorations/decoLeftRight/whitePlant.svg";

import "./decoTopBottom.scss";

const DecoLeft = () => {
  return (
    <>
      <img
        src={thickBlueLeaf}
        alt="decorationLeft"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <img
        src={thinBlueLeaf}
        alt="decorationLeft"
        style={{ position: "absolute", bottom: 0, left: 0 }}
      />
      <img
        src={whiteLeaf}
        alt="decorationLeft"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <img
        src={whitePlant}
        alt="decorationLeft"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
      <img
        src={blackLeaf}
        alt="decorationLeft"
        style={{ position: "absolute", bottom: 0, left: 0 }}
      />
      <img
        src={orangePlant}
        alt="decorationLeft"
        style={{ position: "absolute", bottom: "6%", left: 0 }}
      />
      <img
        src={purplePlant}
        alt="decorationLeft"
        style={{ position: "absolute", bottom: "30%", left: 0 }}
      />
    </>
  );
};
export default DecoLeft;
