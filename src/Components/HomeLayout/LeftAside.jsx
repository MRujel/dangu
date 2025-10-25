import React from 'react';
import Categories from '../Categories';
import { Suspense } from 'react';

const LeftAside = () => {
    return (
      <div>
        <Suspense>
          <Categories></Categories>
        </Suspense>
      </div>
    );
};

export default LeftAside;