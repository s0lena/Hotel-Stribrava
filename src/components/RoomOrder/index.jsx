import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';

export const RoomOrder = ({ selectedRoomData }) => {
  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {selectedRoomData.name}, {selectedRoomData.price} kč na osobu za
          noc
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={selectedRoomData.img} />
            <p>{selectedRoomData.description}</p>
          </div>
          <form>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input
                type="date"
                id="field1"
                className="field-input"
                required
                pattern="\d{4}-\d{2}-\d{2}"
              />

              <label htmlFor="field1" className="field-label">
                Do:
              </label>
              <input id="field1" className="field-input" type="date" />

              <label htmlFor="field1" className="field-label">
                Počet osob:
              </label>
              <input id="field1" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select id="select" className="field-input">
                <option>Žádná</option>
                <option>Snídaně</option>
                <option>Polopenze</option>
                <option>Plná penze</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Domáci mazlíček:
              </label>
              <input id="check1" className="field-input" type="checkbox" />

              <label htmlFor="check1" className="field-label">
                Přístýlka pro děti:
              </label>
              <input id="check1" className="field-input" type="checkbox" />

              <label htmlFor="check1" className="field-label">
                Bezbariérový přístup:
              </label>
              <input id="check1" className="field-input" type="checkbox" />

              <label htmlFor="field1" className="field-label">
                E-mail:
              </label>
              <input id="field1" className="field-input" type="email" />
              <label htmlFor="field1" className="field-label">
                Telefon:
              </label>
              <input id="field1" className="field-input" type="tel" />
            </div>
            <button className="wide">Odeslat objednávku</button>
          </form>
        </div>
      </div>
    </section>
  );
};
