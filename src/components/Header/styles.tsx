// ESTILIZAÇÃO DA PÁGINA
import styled from "styled-components"

export const Container = styled.header`
    height:120px;
    background-color:aliceblue;

    .contentArea {
        max-width:1400px;
        height:100%;
        margin:auto;
        padding:0 20px;
        display:flex;
        justify-content:space-between;
        align-items:center;

        .logoArea {
            max-width:200px;

            .logo {
                display:flex;
                display:flex;
                align-items:center;

                img {
                    max-width:80px;
                }
                h2 {
                    margin-left:10px;
                }
            }
            a {
                text-decoration:none;
                color:#000;
            }
        }

        .menuArea {
            nav {
                
                ul {
                    list-style:none;
                    display:flex;

                    li {
                        padding:5px;
                        font-size:20px;
                        font-weight:700;

                        a {
                            text-decoration:none;
                            color:#000;
                        }
                    }
                    li:not(li:last-child) {
                        margin-right:20px;
                    }
                }
            }
        }
    }
`;