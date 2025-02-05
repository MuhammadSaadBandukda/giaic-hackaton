// app/components/pages/grid-default/page.tsx
import React from 'react'
import GridProducts from '../components/GridProducts';
import Selector from '../components/Selector';
import Brands from '../../Brands';

export default function GridDefault(){
  return (
    <div className="flex flex-col gap-5">
        <Selector/>
        <GridProducts/>
        <Brands/>
    </div>
  );
};

