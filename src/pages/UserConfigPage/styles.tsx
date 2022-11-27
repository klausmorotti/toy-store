// IMPORTANDO STYLED COMPONENTS
import styled from "styled-components";

// PROPS CONTAINER 
type ContainerProps = {
    edit:boolean;
}

export const Container = styled.section<ContainerProps>`
    height:100vh;

    .resumeUserArea {
        padding:50px 100px;
        background-color:#fce0f6;
        display:flex;
        align-items:center;

        img {
            max-width:150px;
        }

        .infoUser {
            margin-left:15px;

            .nameUser {
                font-size:50px;
            }
            .categoryUser {
                font-size:30px;
                color:#AAA;
            }
        }
    }

    .dataUserArea {
        background-color:aliceblue;
        height:calc( 100vh - 370px );
        display:flex;
        flex-direction:column;
        justify-content:center;

        form {
            max-width:1400px;
            width:100%;
            display:grid;
            grid-template-columns:repeat(2, 1fr);
            gap:60px;
            margin:auto;

            label {
                font-size:18px;

                input {
                    width:100%;
                    padding:12px 20px;
                    border-radius:5px;
                    background-color:${ props => props.edit ? '#FFF' : '#D2D2D2' };
                    outline:0;
                    margin-top:10px;
                    font-size:20px;
                    font-weight:600;
                    letter-spacing:1px;
                    color:#606060;
                }
            }
        }

        button {
            display:flex;
            margin:auto;
            padding:10px 30px;
            border-radius:5px;
            font-size:18px;
            font-weight:600;
            background-color:#fce0f6;
            cursor:pointer;
        }
    }
`;