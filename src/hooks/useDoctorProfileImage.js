import { useEffect, useState } from 'react';
import { aboutImages } from '../assets/assets';
import client from '../sanity/client';
import { urlFor } from '../sanity/imageUrl';

const doctorImageQuery = `
  *[_type == "doctor" && defined(profilePic)]
  | order(_updatedAt desc)[0]{
    profilePic
  }
`;

function useDoctorProfileImage() {
  const [doctorImg, setDoctorImg] = useState(aboutImages.doctor_img);
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    client
      .fetch(doctorImageQuery)
      .then((data) => {
        if (!isMounted) {
          return;
        }

        if (data?.profilePic) {
          setDoctorImg(urlFor(data.profilePic).width(900).quality(80).url());
        }

        setImgLoading(false);
      })
      .catch(() => {
        if (isMounted) {
          setImgLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { doctorImg, imgLoading };
}

export default useDoctorProfileImage;
