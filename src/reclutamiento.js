import React from 'react';
import './App.css';

function Reclutamiento() {
  return (
    <div>
        <table className="table">
        <thead>
          <tr className='text-primary'>
            <th scope="col">Tipo de OP</th>
            <th scope="col">
              <select className='form-select form-select-sm'>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
              </select>
              </th>
            <th scope="col"></th>
            <th scope="col">Tipo de Estudio</th>
            <th scope="col">
              <select className='form-select form-select-sm'>
                <option value="opcion1">Opción 1</option>
                <option value="opcion2">Opción 2</option>
              </select>
            </th>
            <th scope="col"></th>
            <th scope="col">Fecha de creacion de la OP</th>
            <th scope="col">
            <input type="date" id="fecha" name="fecha">
            </input>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Reclutamiento;