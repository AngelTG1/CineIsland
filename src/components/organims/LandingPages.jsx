import React from 'react'
import styled from 'styled-components'
import Presen from '../../assets/images/mobileTv.png'
import Navbar from '../molecules/Navbar.jsx'


function LandingPages() {
  return (
    <>
        <Navbar/>
        <ContainerLanding>
        
            <div className='content-landing'>
                <h1>Películas y series <br/> ilimitadas y mucho más</h1>
                <p>Disfruta donde quieras con CineIsland.</p>
                <div>
                    <button>COMENZAR</button>
                </div>
            </div>

            <div className='images'>
                <img src={Presen} alt="" />
            </div>

            
        </ContainerLanding>
    </>
  )
}

export default LandingPages

const ContainerLanding = styled.div`
    padding: 0px 20px;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    gap: 50px;
    /* flex-wrap: wrap; */
    .content-landing{
        display: flex;
        flex-direction: column;
        gap: 40px;
        h1{
            /* width: 500px; */
            font-size: 50px;
        }
        p{
            font-size: 22px;
        }
        button{
            color: #fff;
            font-size: 18px;
            padding: 20px 20px;
            background-color: #102544;
            border: none;
            border-radius: 10px;
        }
    }
    .images img{
        width: 90%;
        height: 90%;
    }

    @media screen and (max-width: 822px){
        text-align: center;
        flex-wrap: wrap;
        justify-content: center;
        .content-landing{
            text-align: center;
            h1{
                font-size: 30px;
                text-align: center;
            }
        }
    }

    .navbar{

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

    
`