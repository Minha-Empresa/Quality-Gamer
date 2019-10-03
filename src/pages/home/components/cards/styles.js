import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    min-height: 80%;
    background-color: #fff;
    margin: auto;
    border: 1px solid #00000030;
    border-radius: 40px;
    overflow: hidden;
    flex-direction: column;

    .image {
        background-color: #ccc;
        width: 100%;
        height: 400px;
    }

    .body {
        margin: 20px;
        width: 100%;
        p {
            margin: auto;
            color: #333;
            font-size: 30px;
            font-weight: 500;
        }
    }

    .buttons {
        margin-top: auto;
        width: 100%;

        button {
            flex: 1;
            border: 1px solid #00000010;
            padding: 20px;
            p {
                font-size: 22px;
                font-weight: 400;
                margin: 0px auto;
            }
        }
    }
`
