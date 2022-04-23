import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #FFFFFF;
    border-bottom: 1px solid #CCCCCC;
    height: 60px;
    
    a {
            text-decoration: none;
        }
    
    
    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        height: 60px;

        .logo-1, 
        .logo-2, 
        .logo-3 {
            font-size: 27px;
            font-weight: bold;
        }
        .logo-1 { color: #f00; }
        .logo-2 { color: #0f0; }
        .logo-3 { color: #00f; }
    }

    nav {
        padding: 10px 0;

        ul,
        li {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }
        li {
            margin: 0 20px;

            a, button {
                border: 0px;
                background: none;
                color: #000;
                font-size: 14px;
                text-decoration: none;
                cursor: pointer;
                
                &:hover {
                    color: #999;
                }
                
                &.button {
                    background-color: #ff8100;
                    border-radius: 4px;
                    color: #fff;
                    padding: 5px 10px;
                }

                &.button:hover {
                    background-color: #E57706;
                }
            }
        }
        
    }
`;