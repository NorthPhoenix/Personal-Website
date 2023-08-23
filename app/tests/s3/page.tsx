import React from "react";
import { getObjectSignedUrl } from "lib/s3";

const fetchPhoto = async (key: string) => {
  const photo = await getObjectSignedUrl(key);
  console.log("Photo URL: ", photo);
  return photo;
};

const S3Test = async () => {
  const photo = await fetchPhoto(
    "projects/support-lists-for-moders/thumbnail.jpg"
  );
  return <img alt='' src={photo} />;
};

export default S3Test;
