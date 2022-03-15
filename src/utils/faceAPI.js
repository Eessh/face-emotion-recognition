import * as faceapi from "face-api.js";

const ModelsURL = `/models`;

const loadEssentialModels = () => {
  return Promise.all([
    faceapi.nets.faceExpressionNet.loadFromUri(ModelsURL),
    faceapi.nets.faceRecognitionNet.loadFromUri(ModelsURL),
    faceapi.nets.faceLandmark68Net.loadFromUri(ModelsURL),
    faceapi.nets.tinyFaceDetector.loadFromUri(ModelsURL)
  ]);
};

const detectFaces = async (image) => {
  if (!image) {
    return null;
  }
  const imgSize = image.getBoundingClientRect();
  const displaySize = {
    width: imgSize.width,
    height: imgSize.height
  };
  if (displaySize.height <= 0) {
    return null;
  }
  const faces = await faceapi
                        .detectAllFaces(image, new faceapi.TinyFaceDetectorOptions({inputSize: 320}))
                        .withFaceLandmarks()
                        .withFaceExpressions()
  return faceapi.resizeResults(faces, displaySize);
};

// Draws face detections, face landmarks onto the canvas (in this case, VideoStreamOverlay)
const drawResults = async (image, canvas, results, type) => {
  if (image && canvas && results) {
    const imgSize = image.getBoundingClientRect();
    const displaySize = { width: imgSize.width, height: imgSize.height };
    faceapi.matchDimensions(canvas, displaySize);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    const resizedDetections = faceapi.resizeResults(results, displaySize);

    switch (type) {
      case 'landmarks':
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        break;
      case 'expressions':
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        break;
      case 'box':
        faceapi.draw.drawDetections(canvas, resizedDetections);
        break;
      case 'boxLandmarks':
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        break;
      default:
        break;
    }
  }
};

export {
  loadEssentialModels,
  detectFaces,
  drawResults,
};