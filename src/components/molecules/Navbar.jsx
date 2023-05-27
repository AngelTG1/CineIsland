import React from 'react'
import styled from 'styled-components'


function Navbar() {
  return (
    <>
        <ContainerNav>
            <nav className='navbar'>
                <h1 className='title'>CineIsland</h1>
                <button>INICIAR SESIÓN</button>
            </nav>
        </ContainerNav>
    </>
  )
}

export default Navbar

const ContainerNav = styled.header`
    .navbar{
        padding: 10px 25px;
        /* background-color: transparent; */
        z-index: 1000;
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        background-color: none;

        .title{
            color: #fff;
            font-family: 'Road Rage', cursive;
            font-size: 50px;
        }

        button{
            color: #fff;
            font-size: 16px;
            border: 2px solid #fff;
            background-color: transparent;
            padding: 15px 15px;
            border-radius: 10px;
            font-family: 'Roboto', sans-serif;
        }

        
    }

    @media screen and (max-width: 899px){
            .navbar{
                .title{
                    font-size: 40px;
                }
                button{
                font-size: 12px;
            }
            }
            
        }
`