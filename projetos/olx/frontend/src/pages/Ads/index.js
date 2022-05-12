import './styled';
import React, { useState, useEffect } from 'react';

import useApi from '../../helpers/OlxApi'
import { useLocation, useNavigate } from 'react-router-dom';

import * as C from '../../components/MainComponents'
import { PageArea } from './styled';
import AdItem from '../../components/partials/AdItem'

let timer;

const Ads = () => {
    const api = useApi();
    const navigate = useNavigate();

    const useQueryString = () => {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQueryString();

    const [q, setQ] = useState(query.get('q') != null ? query.get('q') : '');
    const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : '');
    const [state, setState] = useState(query.get('state') != null ? query.get('state') : '');

    const [adsTotal, setAdsTotal] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    const [resultOpacity, setResultOpacity] = useState(1);
    const [loading, setLoading] = useState(true);

    const getAdsList = async () => {
        setLoading(true);

        let offset = (currentPage -1) * 9

        const json = await api.getAds({
            sort: 'desc',
            limit: 9,
            q,
            cat,
            state,
            offset
        });
        setAdList(json.ads);
        setAdsTotal(json.total);
        setResultOpacity(1);
        setLoading(false);
    }

    useEffect(() => {
        if(adList.length > 0){
            setPageCount( Math.ceil(adsTotal / adList.length) );
        } else {
            setPageCount(0);
        }
    }, [adsTotal]);

    useEffect(() => {
        setResultOpacity(0.3);
        getAdsList();
    }, [currentPage]);

    useEffect(() => {
        let queryString = [];
        if (q) {
            queryString.push(`q=${q}`);
        }
        if (cat) {
            queryString.push(`cat=${cat}`);
        }
        if (state) {
            queryString.push(`state=${state}`);
        }
        navigate(`?${queryString.join('&')}`);
        
        if(timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(getAdsList, 1000)
        setResultOpacity(0.3);
        setCurrentPage(1);
    }, [q, cat, state])

    useEffect(() => {
        const getStates = async () => {
            const sList = await api.getStates();
            setStateList(sList);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    let pagination = [];
    for(let i = 1; i <= pageCount; i++) {
        pagination.push(i)
    }

    const setPrevPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    
    const setNextPage = () => {
        if(currentPage < pagination.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <C.Container>
            <PageArea>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text"
                            name="q"
                            placeholder="O que você procura?"
                            value={q}
                            onChange={e => setQ(e.target.value)}
                        />
                        <div className="fliterName">Estado:</div>
                        <select name="state" value={state} onChange={e => setState(e.target.value)}>
                            <option></option>
                            {stateList.map((i, k) =>
                                <option value={i.name} key={k}>{i.name}</option>
                            )}
                        </select>
                        <div className="fliterName">Categoria:</div>
                        <ul>
                            {categories.map((i, k) =>
                                <li
                                    key={k}
                                    className={cat === i.slug ? "categoryItem active" : "categoryItem"}
                                    onClick={() => setCat(i.slug)}
                                >
                                    <img src={i.img} />
                                    <span>{i.name}</span>
                                </li>
                            )}
                        </ul>
                    </form>
                </div>
                <div className="rightSide">
                    <h2>Resultados</h2>
                    {loading && adList === 0 &&
                        <div className="listWarning">Carregando...</div>
                    }
                    {!loading && adList.length ===0 &&
                        <div className="listWarning">Nenhum resultado encontrado</div>
                    }
                    
                    <div className="list" style={{opacity:resultOpacity}}>
                        {adList.map((i, k) =>
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <div className="pagination">
                            {pagination &&
                            <>
                            <div className="nextPage" onClick={() => setPrevPage()}>{'<'}</div>
                            <div>Pagina {currentPage} de {pageCount - 1}</div>
                            <div className="nextPage" onClick={() => setNextPage()}>{'>'}</div>
                            </>
                        }
                    </div>
                </div>
            </PageArea>
        </C.Container>
    );
}

export default Ads;