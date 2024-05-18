import React, { useCallback, useState } from "react";
import ImageViewer from "react-simple-image-viewer";

//Images
import media1 from "../../../public/assets/img/media/1.jpg"
import media2 from "../../../public/assets/img/media/2.jpg"
import media4 from "../../../public/assets/img/media/4.jpg"
import media5 from "../../../public/assets/img/media/5.jpg"
import media6 from "../../../public/assets/img/media/6.jpg"
import media7 from "../../../public/assets/img/media/7.jpg"
import media8 from "../../../public/assets/img/media/8.jpg"

export default function Gallery2() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
      media1.src,
      media8.src,
      media4.src,
      media5.src,
      media7.src,
      media2.src,
      media4.src,
      media5.src,
      media6.src,
  ];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div id="lightgallery" className="list-unstyled row">
        {images.map((image,index) =>  (
            <div
              className="col-xs-6 col-sm-4 col-md-4 col-xl-4 mb-5 border-bottom-0"
              key={Math.random()}
            >
              <img onClick={() =>openImageViewer(index)} src={`${image}`} group="group1" />
            </div>
          )
        )}
        {isViewerOpen && (
                    <ImageViewer key={Math.random()}
                    src={images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                    }}
                    closeOnClickOutside={true}
                    />
                )}
    </div>
  );
}
