import React from 'react';
import "./style.css";

import Cards from '../../components/Cards';

export default function Dashboard() {
    return (
      <>
        <div className="background-dashboard">
          <Cards />
        </div>
      </>
    )
}