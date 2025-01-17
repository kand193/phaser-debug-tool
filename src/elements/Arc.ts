import defineActive from "../props/active";
import defineAlpha from "../props/alpha";
import defineAngle from "../props/angle";
import defineBlendMode from "../props/blendMode";
import defineDeclare from "../props/declare";
import defineDestroy, { onDestroy } from "../props/destroy";
import defineFill from "../props/fill";
import defineInput from "../props/input";
import defineName, { observeName } from "../props/name";
import defineOrigin from "../props/origin";
import definePosition from "../props/position";
import defineRotation from "../props/rotation";
import defineScale from "../props/scale";
import defineSize from "../props/size";
import defineStroke from "../props/stroke";
import defineVisible from "../props/visible";
import { addGameObjectFolder } from "../utils/extra";

export default function addArc(
    pane: any,
    obj: Phaser.GameObjects.Arc,
    options = { title: "", expanded: false }
) {
    const folder = addGameObjectFolder(pane, options, obj);
    observeName(folder, obj);

    const create = () => {
        defineName(folder, obj);
        defineInput(folder, obj);
        defineActive(folder, obj);
        defineVisible(folder, obj);

        definePosition(folder, obj);
        defineSize(folder, obj);
        folder.addInput(obj, "radius", { min: 0, step: 1 });
        defineOrigin(folder, obj);
        defineAlpha(folder, obj);
        defineAngle(folder, obj);
        defineRotation(folder, obj);
        defineScale(folder, obj);

        folder.addInput(obj, "isFilled", { label: "filled" });
        defineFill(folder, obj);
        folder.addInput(obj, "isStroked", { label: "stroked" });
        defineStroke(folder, obj);

        defineBlendMode(folder, obj);
        defineDestroy(folder, obj);
        defineDeclare(folder, obj);

        folder.controller_.off("open", create);
    };

    folder.controller_.on("open", create);

    onDestroy(obj, folder, options);

    return folder;
}
