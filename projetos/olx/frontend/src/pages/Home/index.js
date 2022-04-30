import './styled';
import React from 'react';
import { useState, useEffect } from 'react';

import useApi from '../../helpers/OlxApi'

import * as C from '../../components/MainComponents'
import { PageArea, SearchArea } from './styled';
import { Link } from 'react-router-dom';


const Home = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    }, []);

    useEffect(()=>{
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    return (

        <>
            <SearchArea>
                <C.Container>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura" />
                            <select name="state">
                                {stateList.map((i, k) => 
                                    <option value={i.id} key={k}>{i.name}</option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i, k) =>
                            <Link key={k} to={`/ads?cats=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt=""/>
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </C.Container>
            </SearchArea>
            <C.Container>
                <C.Title></C.Title>
                <PageArea>
                    ...
                </PageArea>
            </C.Container>
        </>
    );
}

export default Home;