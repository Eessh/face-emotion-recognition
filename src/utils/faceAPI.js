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
  return faceapi.resizeResults(faces, displaySize)[0].expressions;
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
};