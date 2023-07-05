import React from 'react'
import { useState, useEffect } from 'react';

import counter1 from '../../assets/images/counter-1.png';
import counter2 from '../../assets/images/counter-2.png';
import counter3 from '../../assets/images/counter-3.png';
import counter4 from '../../assets/images/counter-4.png';


export default function Counter() {
    const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 500) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 30) {
        setCount1(count1 + 1);
      } else {
        clearInterval(interval1);
      }
    }, 10);

    return () => {
      clearInterval(interval1);
    };
  }, [count1]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (count2 < 30) {
        setCount2(count2 + 1);
      } else {
        clearInterval(interval2);
      }
    }, 10);

    return () => {
      clearInterval(interval2);
    };
  }, [count2]);
  useEffect(() => {
    const interval3 = setInterval(() => {
      if (count3 < 10) {
        setCount3(count3 + 1);
      } else {
        clearInterval(interval3);
      }
    }, 10);

    return () => {
      clearInterval(interval3);
    };
  }, [count3]);
  
  return (
    <div>
                <section class="counter-area text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="counter-box">
                            <img src={counter1} alt="" class="img-fluid" />
                            <p class="counter">{count}</p>
                            <h6>Happy Patients</h6>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter-box">
                            <img src={counter2} alt="" class="img-fluid" />
                            <p class="counter">{count1}</p>
                            <h6>Specialists</h6>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter-box">
                            <img src={counter3} alt="" class="img-fluid" />
                            <p class="counter">{count2}</p>
                            <h6>Ward Rooms</h6>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="counter-box">
                            <img src={counter4} alt="" class="img-fluid" />
                            <p class="counter">{count3}</p>
                            <h6>Cabins</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
