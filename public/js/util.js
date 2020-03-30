const db = new PouchDB('face-recognition');

const minConfidence = 0.6;

async function loadModels(){
    await faceapi.nets.ssdMobilenetv1.loadFromUri('./js/models/ssd_mobilenetv1')
    await faceapi.nets.faceLandmark68Net.loadFromUri('./js/models/face_landmark_68')
    await faceapi.nets.faceRecognitionNet.loadFromUri('./js/models/face_recognition')
}