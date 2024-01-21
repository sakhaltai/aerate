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
  alert("Hello from After Effects!");
  app.project.activeItem;
};


// Reverse Selected Layers in place
  //ex: layers a/b/c become c/b/a
  //ex: layers a/b/c/(d unselected)/e become e/c/b/(d still unselected, unmoved)/a

// export function reverseSelectedLayers() {
//   const activeItem = app.project.activeItem;
//   if (activeItem == null || !(activeItem instanceof CompItem)) {
//     alert("Please select a composition with layers to reverse.");
//     return;
//   }
//   const selectedLayers = activeItem.selectedLayers;
//   if (selectedLayers.length < 2) {
//     alert("Please select at least two layers to reverse.");
//     return;
//   }
//   app.beginUndoGroup("Reverse Selected Layers");
//   // Sort the selected layers by their index
//   selectedLayers.sort((a, b) => a.index - b.index);
//   const layerIndices = [];
//   for (let i = 0; i < selectedLayers.length; i++) {
//     layerIndices.push(selectedLayers[i].index);
//   }
//   const reversedLayers = selectedLayers.slice().reverse();
//   const numLayers = activeItem.layers.length;
//   for (let i = 0; i < selectedLayers.length; i++) {
//     const currentLayerIndex = reversedLayers[i].index;
//     const targetLayerIndex = layerIndices[i];
//     if (currentLayerIndex !== targetLayerIndex) {
//       if (targetLayerIndex === numLayers) {
//         reversedLayers[i].moveToEnd();
//       } else if (currentLayerIndex < targetLayerIndex) {
//         reversedLayers[i].moveAfter(activeItem.layer(targetLayerIndex));
//       } else {
//         reversedLayers[i].moveBefore(activeItem.layer(targetLayerIndex));
//       }
//     }
//   }
//   app.endUndoGroup();
// }

// Assuming these types are available in your TypeScript definitions for After Effects
interface CompItem {
  selectedLayers: Layer[];
  layers: { length: number };
  layer(index: number): Layer;
}

interface Layer {
  index: number;
  moveToEnd(): void;
  moveAfter(layer: Layer): void;
  moveBefore(layer: Layer): void;
}

function reverseSelectedLayers(): void {
  const activeItem = app.project.activeItem as CompItem | null;
  if (activeItem == null || !(activeItem instanceof CompItem)) {
    alert("Please select a composition with layers to reverse.");
    return;
  }
  const selectedLayers = activeItem.selectedLayers;
  if (selectedLayers.length < 2) {
    alert("Please select at least two layers to reverse.");
    return;
  }
  app.beginUndoGroup("Reverse Selected Layers");

  selectedLayers.sort((a, b) => a.index - b.index);
  const layerIndices: number[] = [];
  for (let i = 0; i < selectedLayers.length; i++) {
    layerIndices.push(selectedLayers[i].index);
  }
  const reversedLayers = selectedLayers.slice().reverse();
  const numLayers = activeItem.layers.length;
  for (let i = 0; i < selectedLayers.length; i++) {
    const currentLayerIndex = reversedLayers[i].index;
    const targetLayerIndex = layerIndices[i];
    if (currentLayerIndex !== targetLayerIndex) {
      if (targetLayerIndex === numLayers) {
        reversedLayers[i].moveToEnd();
      } else if (currentLayerIndex < targetLayerIndex) {
        reversedLayers[i].moveAfter(activeItem.layer(targetLayerIndex));
      } else {
        reversedLayers[i].moveBefore(activeItem.layer(targetLayerIndex));
      }
    }
  }
  app.endUndoGroup();
}

