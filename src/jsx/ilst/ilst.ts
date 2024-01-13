import {
  helloVoid,
  helloError,
  helloStr,
  helloNum,
  helloArrayStr,
  helloObj,
} from "../utils/samples";

export { helloError, helloStr, helloNum, helloArrayStr, helloObj, helloVoid };

export const helloWorld = () => {
  alert("Hello from Illustrator");
};

export const unlockEverything = () => {
  function unlockLayers(layers: any): void {
    for (const layer of layers) {
      layer.locked = false; // Unlock the layer

      if (layer.layers) {
        unlockLayers(layer.layers); // Recursively unlock sub-layers
      }

      if (layer.pageItems) {
        unlockPageItems(layer.pageItems); // Unlock items within the layer
      }
    }
  }

  function unlockPageItems(pageItems: any): void {
    for (const item of pageItems) {
      item.locked = false; // Unlock the item

      if (item.typename === "GroupItem") {
        unlockPageItems(item.pageItems); // Recursively unlock items within the group
      }
    }
  }

  const document = app.activeDocument; // Ensure this is the correct way to access the active document in your environment
  unlockLayers(document.layers);
  (document as any).redraw(); // Refresh the Illustrator UI using type assertion
};

// Usage
// Call `unlockEverything()` within the context of your CEP extension
