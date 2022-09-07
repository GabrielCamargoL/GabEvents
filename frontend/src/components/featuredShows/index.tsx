import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Card, CarouselShows, Container } from "./styles";
import api from '../../services/api';
// import { showsList } from '../../utils/showsSamples';
import { responsive } from '../../utils/breakpointsCarousel';
import { useNavigate } from 'react-router-dom';
export interface IShow {
  _id: string;
  title: string;
  description: string;
  hashtags: Array<string>;
  price: number;
  imgSrc: string;
  created_at: Date;
}

interface IProps {
  onOpenLoginModal: () => void;
}

export function FeaturedShows({ onOpenLoginModal }: IProps) {
  const [shows, setShows] = useState<Array<IShow>>([]);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    async function getShows() {
      const { data } = await api.get("/shows");
      setShows(data);
    }
    getShows()
  }, [token])

  function handleShowChoice(id: string) {
    if (!token) {
      return onOpenLoginModal();
    }
    navigate(`/buyTicket/${id}`, { replace: true });
  }

  return (
    <Container>
      <h2 id='featuredShows'>Shows em destaque!</h2>

      <CarouselShows>
        <Carousel
          arrows
          autoPlaySpeed={4000}
          autoPlay
          centerMode={false}
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          slidesToSlide={1}
          swipeable
        >
          {shows.map((show, key) => {
            return (
              <Card key={key} onClick={() => handleShowChoice(show._id)}>
                <img src={show.imgSrc} alt="" />

                <div className='card-texts-container'>
                  <p className='title'>{show.title}</p>
                  <p className='description'>{show.description}</p>
                  <p className='price'>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(show.price)}</p>
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