import React from 'react';
import Cake from '../../Data/Cake';
import Interactive from '../../Interactive/Interactive.js';
import NutrientLegend from '../../Interactive/Legend/NutrientLegend.js';

function ProductA() {
   

  
  return (
    <>
    <div>
    <div className='interactive-container'>
        <Interactive nutrition={Cake} title="Cake" value={1} />
        <NutrientLegend />
    </div>
    </div>
    </>
  );
}

export default ProductA;