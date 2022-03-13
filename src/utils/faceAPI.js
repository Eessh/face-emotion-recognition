import * as faceapi from "face-api.js";

// const ModelMap = {};
// const ModelsURL = `${process.env.PUBLIC_URL}/models`;
const ModelsURL = `http://localhost:3000/models`;

const loadModel = (modelName) => {};
const loadEssentialModels = () => {
  return Promise.all([
    faceapi.nets.ageGenderNet.loadFromUri(ModelsURL),
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
                        .withAgeAndGender();
  // console.info("Faces: ", faceapi.resizeResults(faces, displaySize));
  return faceapi.resizeResults(faces, displaySize);
};

const loadAgeGenderModel = () => {
  return Promise.all([faceapi.nets.ageGenderNet.loadFromUri(ModelsURL)]);
}
const loadFaceExpressionModel = () => {};
const loadFaceLandMarkTinyModel = () => {};
const loadFaceLandMark68Model = () => {};
const loadFaceRecognitionModel = () => {};
const loadMTCNNModel = () => {};
const loadSSDMobileNetModel = () => {};
const loadTinyFaceDetectorModel = () => {};

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

const drawPredictionsOnOverlay = async (image, canvas, results, faceDetection, faceLandmarks) => {
  if (image && canvas && results) {
    const imgSize = image.getBoundingClientRect();
    const displaySize = { width: imgSize.width, height: imgSize.height };
    faceapi.matchDimensions(canvas, displaySize);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    const resizedDetections = faceapi.resizeResults(results, displaySize);

    if (faceDetection === true) {
      faceapi.draw.drawDetections(canvas, resizedDetections);
    }
    if (faceLandmarks === true) {
      faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    }
  }
};

export {
  loadEssentialModels,
  detectFaces,
  loadModel,
  loadAgeGenderModel,
  loadFaceExpressionModel,
  loadFaceLandMarkTinyModel,
  loadFaceLandMark68Model,
  loadFaceRecognitionModel,
  loadMTCNNModel,
  loadSSDMobileNetModel,
  loadTinyFaceDetectorModel,
  drawResults,
  drawPredictionsOnOverlay
};