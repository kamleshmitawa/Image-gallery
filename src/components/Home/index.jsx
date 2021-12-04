import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Modal } from "react-responsive-modal";
import InfiniteScroll from "react-infinite-scroller";
import { getPhotosByPage } from "../../services/api";
import { ImageConatiner } from "./ImageConatiner";
import { Loader } from "./Loader";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-modal/styles.css";

const TOTAL_ALBUM = 50;

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAlbumImages, setSelectedAlbumImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const getPhotos = async () => {
    setShowLoader(true);
    try {
      const response = await getPhotosByPage(currentPage);
      if (response?.data) {
        setShowLoader(false);
        setItems([...items, ...response.data]);
        setCurrentPage(currentPage + 1);
      } else {
        setShowLoader(false);
      }
    } catch (e) {
      setShowLoader(false);
    }
  };

  const onImageClickHandler = async (e, img) => {
    if (img?.albumId) {
      setShowModal(true);

      const response = await getPhotosByPage(img.albumId);
      if (response?.data) {
        setSelectedAlbumImages(response.data);
      }
    } else {
      setSelectedAlbumImages([]);
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
    setSelectedAlbumImages([]);
  };

  return (
    <div className="HomePage">
      <InfiniteScroll
        pageStart={currentPage}
        loadMore={getPhotos}
        hasMore={TOTAL_ALBUM > currentPage}
        threshold={250}
        className="image-grid"
        loader={showLoader ? <Loader /> : null}
      >
        {items?.map((imageData, index) => (
          <ImageConatiner
            key={index}
            index={index}
            imageData={imageData}
            onImageClickHandler={onImageClickHandler}
          />
        ))}
      </InfiniteScroll>
      <Modal open={showModal} onClose={onCloseModal} center>
        <Carousel
          swipeable
          useKeyboardArrows
          autoFocus
          dynamicHeight
          emulateTouch
          showStatus={false}
        >
          {selectedAlbumImages?.map((image) => (
            <div key={image.id}>
              <img src={image.url} alt="album imgs" />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};
export default HomePage;
