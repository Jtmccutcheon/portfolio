import React from 'react';
import styled from 'styled-components'
import tipseaseLogo from '../assets/tipseaseimg.png'

const Projects = () => {
    return (
        <StyledProjects>
            <h1>Projects Component</h1>
            <section>
                <div className="card">
                    <h3>Project Title</h3>
                    <div className="card-content">
                        <img src={tipseaseLogo} alt="Tipsease" />
                        <p>Project Details Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <button>View Repo</button>
                </div>
                <div className="card">
                    <h3>Project Title</h3>
                    <div className="card-content">
                        <img src={tipseaseLogo} alt="Tipsease" />
                        <p>Project Details Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <button>View Repo</button>
                </div>
            </section>
        </StyledProjects>
    )
}

const StyledProjects = styled.div`
    /* height: 47.5vh; keeps footer in the same place on all pages during development */
    /* comment out the line about when actually working because its just to keep the footer still when there was no content in the middle and switching tabs */
    section {
        width: 100%;
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        /* justify-content: space-around; */
        justify-content: center;
        
    }
    .card {
        // border: 1px solid lightgray;
        padding-top: 2%;
        max-width: 515px;
        width: 75%;
        margin: 5%;
        border-radius: 2%;
        background-color: #1F1F1F;
        box-shadow: 5px 5px 8px lightgray;
        transition-duration: .09s;
        
        h3 {
            color: lightgray;
        }
        
        .card-content {
            display: flex;
            align-items: center;
            padding: 2%;
            width: 100%;
            background-color: white;
            
            p {
                padding: 2%;
                text-align: left;
            }
        }
        img {
            width: 50%;
            border-radius: 50%;
        }
        button {
            margin: 3%;
            color: white;
            background-color: transparent;
            border-radius: .25rem;
            padding: 5px 7px;
            border: 2px solid white;
            transition-duration: .5s;
        }
        button:hover {
            border-color: #1F1F1F;
            color: #1F1F1F;
            background-color: white;
            transition-duration: .5s;
        }
    } 
    .card:hover {
        box-shadow: 10px 10px 8px lightgray;
        -ms-transform: translate(-2px, -2px); /* IE 9 */
        -webkit-transform: translate(-1rem, -1rem); /* Safari 3-8 */
        transform:translate(-1.2rem, -1.2rem);
        transition-duration: .2s;
    }
`;

export default Projects
// do you like this https://hatchful.shopify.com/editor/customize-logo
