import React from 'react';

function SuperCar({superCarName}) {
  if (superCarName === 'Bugatti') {
      throw new Error('Not a superCar')
  }
    return (
        <div>
            {superCarName}
        </div>
    )
}

export default SuperCar;