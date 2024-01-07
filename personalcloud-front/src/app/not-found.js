'use client';

import Image from 'next/image';
import { Footer, NavBar } from './components';
import notFoundImage from '../../public/images/undraw_page_not_found_re_e9o6.svg';
import { Button } from './ui';
import { useUser } from '@clerk/nextjs';

const NotFound = () => {
  const { user } = useUser();

  return (
    <div className="container__home">
      <NavBar />
      <div className="container__NoFound">
        <Image
          src={notFoundImage}
          alt="No Found Page"
          className="notFound__Image"
        />
        <div>
          <h2 className="NotFound__Title">¡Oops! Parece que te has perdido.</h2>
          <p className="NotFound__Description">
            La página que estás buscando no existe o ha sido movida.
          </p>
        </div>
        <div className="NotFound__Buttons">
          <Button text="Return Home" type="filled" urlSign="/" />

          {user ? (
            <Button text="My Cloud" type="filled" urlSign="/dashboard" />
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
