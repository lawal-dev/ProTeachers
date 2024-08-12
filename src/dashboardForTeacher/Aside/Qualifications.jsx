import React from 'react'
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import Button from '../../components/Button';
import { auth, storage } from '../../../firebaseConfig';
import { useEffect } from 'react';


const Qualifications = () => {
  const [img, setImg] = React.useState(null);
  const [imageList, setImageList] = React.useState([])

  const doListAllFiles = async () => {
    try {
      // Create a reference to the "images/" directory
      const listRef = ref(storage, `teachers-files/${userEmail}`);
      const res = await listAll(listRef);

      // Map over the items and get their download URLs
      const files = await Promise.all(
        res.items.map(async (itemRef) => {
          const imagePreview = await getDownloadURL(itemRef);
          return { type: itemRef.name, fileURL: imagePreview };
        })
      );

      setImageList(files);
    } catch (e) {
      return [];
    }
  };

  useEffect(() => {
    doListAllFiles()
  }, [])


  const userEmail = auth.currentUser.email

  const doUplodeFile = async (file, type) => {
    try {
      const uploadRef = ref(storage, `teachers-files/${userEmail}/${type ?? file.name}`)
      uploadBytes(uploadRef, file).then((snapshot) => {
        doListAllFiles()
        setImg(null)
      });
    } catch (e) {
     
    }
  }

  const handleSetImage = (e) => {
    setImg(e.target.files[0]);
  };

  return (
    <div>
      <h1 className='font-bold text-center text-xl text-primary py-4 mb-6'> Qualifiations </h1>

      <div className='flex flex-col gap-10 pl-10'>

        <div className='grid md:grid-cols-3  gap-3 justify-between w-[80%]'>
          <label htmlFor="" className='font-bold'> Upload Your O'level result </label>
          <input type="file" src="" alt="" placeholder='' onChange={handleSetImage} />
          <Button className='bg-green-800 text-white rounded-md py-2 px-4 w-[120px]' func={() => {
            if (!img) {
              alert("no file selected")
              return;
            }
            doUplodeFile(img, "O'level")
          }}>Upload</Button>

          {/* <button className='bg-green-800 text-white rounded-md py-2 px-4 w-[120px]'> Verified</button> */}
        </div>

        <div className='grid md:grid-cols-3  gap-3 justify-between md:w-[80%]'>
          <label htmlFor="" className='font-bold' > Upload Your NCE/Bsc/MSc/PGDE </label>
          <input type="file" src="" alt="" placeholder='' onChange={handleSetImage} />
          <Button className='bg-green-800 text-white rounded-md py-2 px-4 w-[120px]' func={() => {
            if (!img) {
              alert("no file selected")
              return;
            }
            doUplodeFile(img, "Nce-Bsc-MSc-Phd")
          }}>Upload</Button>
          {/* <button className='bg-red-800 text-white rounded-md py-2 px-4 w-[120px]'> Pending </button> */}
        </div>

        <div className='grid md:grid-cols-3  gap-3  justify-between w-[80%]'>
          <label htmlFor="" className='font-bold' > Upload TRCN </label>
          <input type="file" src="" alt="" placeholder='' onChange={handleSetImage} />
          <Button className='bg-green-800 text-white rounded-md py-2 px-4 w-[120px]' func={() => {
            if (!img) {
              alert("no file selected")
              return;
            }
            doUplodeFile(img, "TRCN")
          }}>Upload</Button>
          {/* <button className='bg-red-800 text-white rounded-md py-2 px-4 w-[120px]'> Pending </button> */}
        </div>

      </div>
      <div className='flex md:flex-row max-md:flex-col justify-center p-5 gap-6 mb-12'>
        {imageList.length
          ? imageList.map(({ fileURL, type }, index) => <div key={fileURL} className='mt-10'>
            <img className='md:h-96 max-md:h-60  md:w-96 max-md:w-60 mx-auto ' src={fileURL} />
            <h3 className='text-primary font-bold text-2xl text-center mt-4'>{type}</h3>
          </div>)
          : null}
      </div>


    </div>
  )
}

export default Qualifications