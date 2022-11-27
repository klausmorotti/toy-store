// IMPORTANDO STYLED COMPONENTS
import styled from "styled-components";

export const Container = styled.section`
    height:100vh;

    .toysArea {
        padding:50px;

        .toys {
            display:grid;
            grid-template-columns:repeat(3, 1fr);
            gap:30px;

            .toy {
                padding:30px;
                background-color:#fce0f6;
                border-radius:5px;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;

                img {
                    max-width:100px;
                    margin-bottom:30px;
                }

                p {
                    margin:15px 0;
                    text-transform:uppercase;
                }
                
                button {
                    margin-top:40px;
                    padding:15px 30px;
                    border-radius:5px;
                    display:flex;
                    font-size:18px;
                    font-weight:700;
                    background-color:aliceblue;
                    cursor:pointer;
                }
                button:hover {
                    transition:all ease 0.5s;
                    transform:scale(1.05);
                }
            }
        }
    }
`;