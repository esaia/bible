import React from 'react';
import Donation from '../components/Donation';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <div className="h-svh dark:text-white mx-3 ">
      <div className="max-w-[800px] m-auto">
        <Donation />
        <Link to={'/'}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default Donate;
