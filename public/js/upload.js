const upload = document.getElementById('upload');
const img = document.getElementById('img');
const profileSubmit = document.getElementById('profileSubmit');


upload.addEventListener('change',(e)=> {
    console.log('change');
    readURL(upload);
});

profileSubmit.addEventListener('click',(e)=> {
    console.log('click');
    saveProfile();
});


const readURL = (input) => {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = async (e) => {
            console.log(e.target.result);
            img.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

const saveProfile = async () => {

    const options = new faceapi.SsdMobilenetv1Options({ minConfidence });
      
    const detection = await faceapi.detectSingleFace(img, options)
    .withFaceLandmarks()
    .withFaceDescriptor()

    if (detection) 
    {
        console.log(detection.descriptor);
        let doc = {};
        doc._id = document.getElementById('cid').value;
        doc.title = document.getElementById('title').value;
        doc.name = document.getElementById('name').value;
        doc.lastname = document.getElementById('lastname').value;
        doc.descriptor = new Float32Array(Object.values(detection.descriptor)) ;
        console.log(doc);

        db.put(doc);


    }
}