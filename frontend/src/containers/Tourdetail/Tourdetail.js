import { useEffect, useState } from 'react';
import coverPhoto from '../../assets/qudra-lake-cover.jpg';
import svgSprite from '../../assets/icons.svg';
import classes from './Tourdetail.module.scss';
import axios from '../../utils/Axios';
import TourDescription from '../../components/TourDescription/TourDescription';
import TourStats from '../../components/TourStats/TourStats';
import Map from '../../components/Map/Map';
import Reviews from '../../components/Reviews/Reviews';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useParams } from 'react-router-dom';
const Tourdetail = () => {
  const [tour, setTour] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ status: false, message: '' });
  const params = useParams();

  useEffect(() => {
    const makeApiCall = async (debug = false) => {
      try {
        const response = await axios.get(`/tours/${params.id}`);
        setTour(response.data.data.tour);
        setLoading(false);
        setError({ status: false });
      } catch (err) {
        setError({
          status: true,
          message: err.message,
        });
        setLoading(false);
        if (debug) {
          alert(err.message + ': in tourDetail.js');
        }
      }
    };
    makeApiCall();
  }, [params.id]);

  if (loading) {
    return <Spinner />;
  }

  if (error.status) {
    return (
      <p style={{ padding: '5rem', fontSize: '1.6rem' }}>
        {error.message}
        <span
          style={{ marginLeft: '1rem', cursor: 'pointer' }}
          onClick={() => {
            setLoading(true);
            setError({ status: false });
          }}
        >
          click to retry
        </span>
      </p>
    );
  }

  return (
    <section id="tour-detail">
      <div
        className={classes.detail_cover}
        style={{
          background: `url(${coverPhoto}) no-repeat center center/cover`,
        }}
      ></div>
      <div className={['container', classes.container].join(' ')}>
        <div className={classes['detail-heading']}>
          <h1 className={classes['detail-heading__title']}>
            {tour.name}
          </h1>
          <div className={classes['detail-heading__info']}>
            <div className={classes['detail-icons']}>
              <svg className={classes['detail-icons__icon']}>
                <use xlinkHref={`${svgSprite}#icon-calendar`}></use>
              </svg>
              <span>{tour.duration} days</span>
            </div>
            <div className={classes['detail-icons']}>
              <svg className={classes['detail-icons__icon']}>
                <use xlinkHref={`${svgSprite}#icon-location-pin`}></use>
              </svg>
              <span>{tour.startLocation.description}</span>
            </div>
            <div className={classes['detail-icons']}>
              <svg className={classes['detail-icons__icon']}>
                <use xlinkHref={`${svgSprite}#icon-user`}></use>
              </svg>
              <span>{tour.maxGroupSize} People</span>
            </div>
          </div>
        </div>
        <div className="bottom-line"></div>
        <TourDescription
          desc={{
            images: tour.images,
            description: tour.description,
          }}
        />
        <TourStats
          id={tour.id}
          guides={tour.guides}
          details={{
            startDate: tour.startDates,
            difficulty: tour.difficulty,
            rating: tour.ratingsAverage,
            price: tour.price,
          }}
        />
        <Map locations={tour.locations} />
        <Reviews tourId={params.id} />
      </div>
    </section>
  );
}
export default Tourdetail;
