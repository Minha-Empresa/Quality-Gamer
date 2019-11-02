import styled from 'styled-components'

export const Container = styled.div`
    flex-direction: column;

    .title {
        border-bottom: 1px solid;
        border-color: #00000025;
        font-size: 30px;
        color: #444;
        text-align: center;
        margin: 20px auto;
    }

    .tabs {
        width: 100%;
    }
            
`

export const Tab = styled.button`
    flex: 1;
    padding: 10px 0px;
    background-color: ${props => props.active ? '#fff' : '#f5f5f5'};
    border: 1px solid #00000010;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-width: ${(props) => (props.active ? '0px' : '1px')};

    p {
        color: #333;
        font-family: 'Open Sans' roboto, sans-serif;
        text-transform: uppercase;
        font-size: 12px;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 0.15em;
        margin: auto;
        padding: 5px 0px;
        position: relative;
    }

    p:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: '';
        display: block;
        height: 1px;
        left: 50%;
        position: absolute;
        background: #bbb;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    &:hover {
        p:hover:after {
            width: 100%;
            left: 0;
        }
    }
`
