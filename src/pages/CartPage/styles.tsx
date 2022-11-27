// IMPORTANDO STYLED COMPONENTS
import styled from "styled-components";

export const Container = styled.section`
    height:100vh;

    .cartArea { 
        padding:50px;

        .cart {
            display:flex;
            flex-direction:column;

            .item {
                display:flex;
                justify-content:space-between;
                background-color:#fce0f6;
                padding:20px 10px;
                border-radius:5px;

                img {
                    max-width:50px;
                }
                .descItem {
                    display:flex;
                    flex-direction:column;
                    align-items:flex-end;
                }
            }
            .item:not(.item:last-child) {
                margin-bottom:20px;
            }
        }
    }
`;