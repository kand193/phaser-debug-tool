import defineActive from "../props/active";
import defineAlpha from "../props/alpha";
import defineAngle from "../props/angle";
import defineCrop from "../props/crop";
import defineDeclare from "../props/declare";
import defineDestroy, { onDestroy } from "../props/destroy";
import defineInput from "../props/input";
import defineName from "../props/name";
import defineOrigin from "../props/origin";
import definePosition from "../props/position";
import defineRotation from "../props/rotation";
import defineScale from "../props/scale";
import defineSize from "../props/size";
import defineTexture from "../props/texture";
import defineVisible from "../props/visible";

export default function addSprite(
    pane: any,
    obj: Phaser.GameObjects.Sprite,
    options = { title: "", expanded: false }
) {
    const folder = pane.addFolder(options);
    (obj as any)._pane = folder;

    defineName(folder, obj);
    defineInput(folder, obj);
    defineActive(folder, obj);
    defineVisible(folder, obj);

    definePosition(folder, obj);
    defineSize(folder, obj);
    defineOrigin(folder, obj);
    defineAlpha(folder, obj);
    defineAngle(folder, obj);
    defineRotation(folder, obj);
    defineScale(folder, obj);
    defineCrop(folder, obj);
    defineTexture(folder, obj);
    

    const anims = folder.addFolder({ title: "Animations", expanded: false });
    checkAnimations(anims, obj);

    defineDestroy(folder, obj);
    defineDeclare(folder, obj);

    onDestroy(obj, folder, options);

    return folder;
}

function checkAnimations(folder: any, obj: any) {
    folder.children.forEach((a: any) => a.dispose());

    Object.keys(obj.scene.anims.anims.entries).map((animation: any) => {
        const btn = folder.addButton({ title: animation });
        btn.on("click", () => obj.play(animation));
    });
}
