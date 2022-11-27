// IMPORTANDO STYLED COMPONENTS
import styled from "styled-components";

export const Container = styled.section`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    .loginArea {
        background-color:#e68d8d;
        padding:30px;
        border-radius:5px;

        h3 {
            font-size:25px;
            text-align:center;
            text-transform:uppercase;
        }

        form {
            margin-top:20px;
            
            input {
                display:flex;
                background-color:transparent;
                color:#000;
                padding:5px 0;
                border-bottom:1px solid #000;
                margin-bottom:20px;
                outline:0;
                letter-spacing:1px;
            }
            input::placeholder {
                color:#000
            }
        }

        button {
            display:flex;
            margin:auto;
            padding:8px 20px;
            border-radius:5px;
            font-size:15px;
            font-weight:700;
            background-color:#f13939;
            cursor:pointer;
        }
    }
`;