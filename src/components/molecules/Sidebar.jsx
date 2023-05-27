import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Sidebar() {
  return (
    <ContainerSide>
        <div className='sidebar'>
            <ul className='sidebar-list'> 
                <li className='sidebar-list-item'>
                    <a href="#">
                        <box-icon type='solid' name='home'></box-icon>
                        <span>HOME</span>
                    </a>
                </li>
            </ul>
        </div>
    </ContainerSide>
  )
}

export default Sidebar

const ContainerSide = styled.div`
    position: relative;
  .sidebar {
    width: 285px;
    height: 100%;
    background-color: #1B232E;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`