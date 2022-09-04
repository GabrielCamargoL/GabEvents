import { useState } from 'react';
import Carousel from 'react-multi-carousel';

import { Card, CarouselShows, Container } from "./styles";

import Show1 from '../../assets/ShowsSamples/Show1.svg';
import Show2 from '../../assets/ShowsSamples/Show2.svg';
import Show3 from '../../assets/ShowsSamples/Show3.svg';
import Show4 from '../../assets/ShowsSamples/Show4.svg';
import Show5 from '../../assets/ShowsSamples/Show5.svg';

export function FeaturedShows() {
  const [shows, setShows] = useState([{
    'imgSrc': Show1,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  }, {
    'imgSrc': Show2,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  }, {
    'imgSrc': Show3,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  }, {
    'imgSrc': Show4,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  }, {
    'imgSrc': Show5,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  }, {
    'imgSrc': Show5,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  }, {
    'imgSrc': Show2,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  }, {
    'imgSrc': Show5,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  }, {
    'imgSrc': Show3,
    'title': 'Lorem Ipsum Amet',
    'hashtags': ['#music', '#concert', '#music', '#concert', '#conference', '#london', '#event', '#artist', '#dj', '#soundtrack', '#dance']
  },]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 30
    },
    teste: {
      breakpoint: { max: 700, min: 465 },
      items: 10,
      slidesToSlide: 1,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      partialVisibilityGutter: 30
    }
  };

  return (
    <Container>
      <h2>Shows em destaque!</h2>

      <CarouselShows>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={responsive !== "mobile" ? true : false}
          // autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          centerMode={false}
          partialVisible
        >
          {shows.map((show) => {
            return (
              <Card>
                <img src={show.imgSrc} alt="" />

                <div className='card-texts-container'>
                  <p className='title'>{show.title}</p>
                  <p className='techs'>{show.hashtags.map((hashtag) => {
                    if (hashtag === show.hashtags[show.hashtags.length - 1]) {
                      return hashtag;
                    } else {
                      return hashtag + ' ';
                    }
                  })}</p>
                </div>
              </Card>
            )
          })}
        </Carousel>
      </CarouselShows>
    </Container>
  )
}