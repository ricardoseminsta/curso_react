import './styled';
import React from 'react';
import { useState, useEffect } from 'react';

import useApi from '../../helpers/OlxApi'

import * as C from '../../components/MainComponents'
import AdItem from '../../components/partials/AdItem';
import { PageArea, SearchArea } from './styled';
import { Link } from 'react-router-dom';


const Home = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

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

    useEffect(()=>{
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 12
            });
            setAdList(json.ads)
        }
        getRecentAds();
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
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
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
                    <h2>Anúncios Recentes</h2>
                    <div className="list" >
                        {adList.map((i, k)=>
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver Todos</Link>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec viverra dolor. In pulvinar lacinia purus, at dictum massa. Vivamus accumsan blandit elit id posuere. Vestibulum fermentum gravida scelerisque. Suspendisse dapibus ex ac elementum dictum. Duis vehicula auctor orci, in varius libero vestibulum ornare. Maecenas tempor vitae quam non ullamcorper. Nunc non magna elit.</p>
                </PageArea>
            </C.Container>
        </>
    );
}

export default Home;