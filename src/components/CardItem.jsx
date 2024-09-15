import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} onClick={window.scrollTo(0, 0)}>
          <figure className='cards__item__popup' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Project'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
// onClick={window.scrollTo(0, 0)}

export default CardItem;
