import styled from 'styled-components';


export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;


    .leftSide {
        width: 250px;
        margin-right: 10px;

        .fliterName {
            font-size: 15px;
            margin: 10px 0px;
        }

        input,
        select {
            width: 100%;
            height: 40px;
            border: 2px solid #9bb83c;
            border-radius: 5px;
            outline: 0;
            font-size: 15px;
            color: #000000;
            padding: 10px;
        }
        
        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .categoryItem {
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            color: #000;
            cursor: pointer;

            img {
                height: 25px;
                width: 25px;
                margin-right: 5px;
            }
            
            span {
                font-size: 14px;
            }
        }

        .categoryItem:hover,
        .categoryItem.active {
            background-color: #9bb83c;
            color: #fff;
        }
    }

    .rightSide {
        flex: 1;

        h2 {
            margin-top: 0;
            font-size: 18px;
        }

        .listWarning {
            padding: 30px;
            text-align: center;
        }

        .list {
            display: flex;
            flex-wrap: wrap;
            
            .adItem {
                width: 33%;
            }
        }
    }
`;

