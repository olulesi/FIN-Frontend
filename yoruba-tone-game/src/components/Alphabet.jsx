import React from 'react'
import '../styles/Alphabet.css'

function Alphabet() {
  return (
    <div>

      <div className="title-container">
        <h1 className="heading1">Flowing in Yoruba (FIN)</h1>

        <p className="text-block tip">
          Promoting Language adaptation for Yoruba. We want to adapt ourselves
          to languages so they can flow through us.
        </p>

        <p className="text-block tip">
          An outlet to maximise our exposure and engagement through games and
          exercises
        </p>
      </div>
      
      <hr />

      <h2 className='AlphaPractice'>Alphabet Practice</h2>

      <table className="table1" border="1" cellPadding="15" cellSpacing="3">
        <tbody>
          <tr>
            <th colSpan="5">Álífábéétì Yorùbá.</th>
          </tr>
          <tr>
            <td>
              A a <br />
              (Bat)
            </td>
            <td>
              B b <br />
              (Bee)
            </td>
            <td>
              D d <br />
              (Dee)
            </td>
            <td>
              E e <br />
              (Bay)
            </td>
            <td>
              Ẹ ẹ <br />
              (Bet)
            </td>
          </tr>
          <tr>
            <td>
              F f<br />
              (Fee)
            </td>
            <td>
              G g<br />
              (Geese)
            </td>
            <td>
              Gb gb
              <br />
              (Gbi)
            </td>
            <td>
              H h<br />
              (He)
            </td>
            <td>
              I i<br />
              (E)
            </td>
          </tr>
          <tr>
            <td>
              J j<br />
              (Jeep)
            </td>
            <td>
              K k<br />
              (Key)
            </td>
            <td>
              L l<br />
              (Lee)
            </td>
            <td>
              M m<br />
              (Me)
            </td>
            <td>
              N n<br />
              (Knee)
            </td>
          </tr>
          <tr>
            <td>
              O o<br />
              (O)
            </td>
            <td>
              Ọ ọ<br />
              (O)
            </td>
            <td>
              P p<br />
              (Kp)
            </td>
            <td>
              R r<br />
              (Real)
            </td>
            <td>
              S s<br />
              (Sea)
            </td>
          </tr>
          <tr>
            <td>
              Ṣ ṣ<br />
              (She)
            </td>
            <td>
              T t<br />
              (Tea)
            </td>
            <td>
              U u<br />
              (Food)
            </td>
            <td>
              W w<br />
              (We)
            </td>
            <td>
              Y y<br />
              (Yee)
            </td>
          </tr>
        </tbody>
      </table>

      <div className='link_container'>
        <a
          href="https://www.yorubaizm.com/"
          target="_blank"
          rel="noreferrer"
          className="link1"
        >
          from Yorubaizm
        </a>
      </div>

      <hr />
    </div>
  )
}

export default Alphabet