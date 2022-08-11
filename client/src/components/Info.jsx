import React from "react";
import flag from "img/info/flag.png";

import Container from "react-bootstrap/Container";

const Info = () => {
  const date = new Date();
  return (
    <Container>
      <div className="info">
        <div className="info__box">
          <img className="info__box-img" src={flag} alt="" />
          <h1 className="info__box-title">Race 1</h1>
          <h5 className="info__box-date">
            The date of the event: {date.getDate()}.{date.getMonth() + 1}.
            {date.getFullYear()}
          </h5>
        </div>

        <h2 className="info__participants-title">Participants:</h2>
        <div className="info__participants-names">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>- Princess Diana</td>
                <td>8 year</td>
                <td>460 kg</td>
              </tr>
              <tr>
                <td>- Cricket</td>
                <td>4 year</td>
                <td>495 kg</td>
              </tr>
              <tr>
                <td>- Rebel</td>
                <td>12 year</td>
                <td>501 kg</td>
              </tr>
              <tr>
                <td>- Lucy</td>
                <td>5 year</td>
                <td>487 kg</td>
              </tr>
              <tr>
                <td>- Lacey</td>
                <td>9 year</td>
                <td>479 kg</td>
              </tr>
              <tr>
                <td>- Ginger</td>
                <td>2 year</td>
                <td>498 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Info;
