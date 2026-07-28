import { useState } from 'react';
import style from '../css/heading.module.css';
import subjectData from './subject.jsx';

function Heading() {
  // store and filter data
  const [serData, setserData] = useState('');
  const filterData = subjectData.filter((item) => {
    return item.subject.toLowerCase().includes(serData.toLowerCase());
  });

  return (
    <div className={style.all}>
      <div className={style.main}>
        <div className={style.nav}>
          <div className={style.logo}></div>

          <h2 className={style.title}>Bihar Enginners Help</h2>
          <hr className={style.titleHr} />
          <button className={style.btn}>Youtube</button>
          <button className={style.btn}>LinkdIn</button>
        </div>

        <div className={style.power}>
          <p style={{ color: 'red' }}>⚠️ This Website is Under Construction.</p>
          <h1>Empoweering Engineers</h1>
          <h2> For a Bright Future</h2>
          <br />

          <p>
            Engineers turn vision into reality, shaping sustainable cities,
            smarter technologies, and cleaner energy. Their creativity and
            determination build resilience, progress, and a brighter tomorrow
            for generations to come.
          </p>
          <span className={style.featureCardSpan}>
            <div className={style.featureCard}>
              <h3>📕 Download Notes</h3>
            </div>
            <div className={style.featureCard}>
              <h3>📺 Watch Tutorial</h3>
            </div>
          </span>
        </div>
      </div>
      {/* here something adding */}
      {/* <span className="join"></span> */}

      <hr />

      <div className={style.show}>
        <div>
          <h1>25+</h1>
          <p>Subject</p>
        </div>
        <div>
          <h1>100%</h1>
          <p>Free</p>
        </div>
        <div>
          <h1>15+</h1>
          <p>& Pyq</p>
        </div>
      </div>

      <span className="browsing">
        <h1 className={style.browsingTitle}>Browsing Notes</h1>
        <p className={style.browsingTitle}>learn || grow || secure future</p>
        <div className={style.subNav}>
          <span>DSA</span>
          <span>DBMS</span>
          <span>COA</span>
          <span>DAA</span>
          <select name="language" id="select" className={style.select}>
            <option value="">C Language</option>
            <option value="">Python Programming</option>
            <option value="">Java</option>
            <option value="">Web Desining</option>
          </select>
        </div>

        <div
          style={{
            display: 'flex',
          }}
        >
          <span
            style={{
              width: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '5px',
              position: 'relative',
              left: '15px',
              fontSize: '20px',
            }}
          >
            🔎
          </span>
          <input
            type="text"
            placeholder="Search..."
            className={style.search}
            value={serData}
            onChange={(e) => setserData(e.target.value)}
          />
          <span
            style={{
              width: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '3px',
              position: 'relative',
              right: '30px',
              fontSize: '20px',
              cursor:"pointer"
            }}

            onClick={()=>setserData("")}
          >
            ❌
          </span>
        </div>
      </span>

      <span className={style.subjectMainCard}>
        {filterData.map((data, index) => {
          return (
            <div className={style.subjectCard} key={index}>
              <div
                className={style.innerSujCard}
                style={{
                  backgroundImage: `url(${data.bg})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
              <h2
                style={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
              >
                {data.subject}
              </h2>
              <button onClick={() => window.open(`${data.link}`)}>
                View Details
              </button>
            </div>
          );
        })}
      </span>

      <hr className={style.footerHr} />
      <hr className={style.footerHr} />

      <div className={style.footer}>
        <h4>© 2026 BiharEnginnersHelp. All rights reserved.</h4>
        <i>
          <h4 style={{ textDecoration: 'itelic' }}>Empoweering Engineers</h4>
        </i>
      </div>
    </div>
  );
}

export default Heading;
