import './styled';
import React from 'react';
import { useState, useEffect } from 'react';

import useApi from '../../helpers/OlxApi'

import * as C from '../../components/MainComponents'
import AdItem from '../../components/partials/AdItem';
import { PageArea } from './styled';


const Ads = () => {
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
        <C.Container>
            <PageArea>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text" name="q" />
                        <div className="fliterName">Estado:</div>
                            <select name="state">
                                <option></option>
                                {stateList.map((i, k)=>
                                <option value={i.name} key={k}>{i.name}</option>
                                )}
                            </select>
                        <div className="fliterName">Categoria:</div>
                            <ul>
                                {categories.map((i, k)=>
                                    <li key={k} className="categoryItem"> 
                                        <img src={i.img} />
                                        <span>{i.name}</span>
                                    </li>
                                )}
                            </ul>
                    </form>
                </div>
                <div className="rightSide">
                    ...
                </div>
            </PageArea>
        </C.Container>
    );
}

export default Ads;