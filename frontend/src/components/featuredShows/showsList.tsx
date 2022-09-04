import { Card } from './styles';

interface Props {
  shows: Array<{
    imgSrc: string,
    title: string,
    hashtags: string[],
  }>;
}

export function ShowsList({ shows }: Props) {

  return (
    <>
      {shows.map((show) => {
        return (
          <>
            <Card data-aos='fade-right'>
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
          </>
        )
      })}
    </>
  );
}