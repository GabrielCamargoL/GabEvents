import { useState } from 'react';
import Carousel from 'react-multi-carousel';

import { Card, CarouselShows, Container } from "./styles";

import { showsList } from '../../utils/showsSamples';
import { responsive } from '../../utils/breakpointsCarousel';

export function FeaturedShows() {
  const [shows, setShows] = useState(showsList);

  return (
    <Container>
      <h2 id='featuredShows'>Shows em destaque!</h2>

      <CarouselShows>
        <Carousel
          rewind={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          dotListClass="none"
          partialVisible
        >
          {shows.map((show) => {
            return (
              <Card>
                <img src={show.imgSrc} alt="" />

                <div className='card-texts-container'>
                  <p className='title'>{show.title}</p>
                  <p className='hashtags'>{show.hashtags.map((hashtag) => {
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