import React from 'react';
import './App.css';
import quala from './public/quala.jpg';
import { Link } from 'react-router-dom';

function Main() {
  return (

    <body>
    <nav>
        <h2>
        MULTIFORMATO SOLICITUD Y CONTROL DE ÓRDENES PRESUPUESTALES
        </h2>
    </nav>
    
    <main>
    <h5>Objetivo: Crear la orden presupuestal (Proyecto de gasto) para ejecución de estudios de Investigación de mercados y llevar un control de los gastos asociados</h5>
        <ul>
            <li>
                <a class="list-menu" href="./D_OP/D_OP.html">Diligenciar Orden Presupuestal OP</a>
            </li>
            <li>
                <a class="list-menu" href="./">Ingresar Gastos de Estudio en Ejecución</a>
            </li>
            <li>
                <a class="list-menu" href="./">Ver Detalle de Gastos por Estudio</a>
            </li>
            <li>
                <a class="list-menu" href="./">Ver Control de Gastos por Tipo de Estudio</a>
            </li>
            <li>
                <a class="list-menu" href="./">Ver Gastos por Concepto y Tipo de Estudio</a>
            </li>
            <li>
                <a class="list-menu" href="./">Ver Resumen Gerencial Gastos por Marca</a>
            </li>
        </ul>
        <Link to="/OP">Ir a Página 1</Link>1

        <img src={quala} alt="Logo de Quala" />
    </main>

    <footer>
        <p>Investigación de Mercado</p>
    </footer>
</body>

    );
}

export default Main;