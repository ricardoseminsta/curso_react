import './styled';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'

import useApi from '../../helpers/OlxApi'

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import MaskedInput from 'react-text-mask';

import * as C from '../../components/MainComponents'
import { PageArea } from './styled';


const AddAd = () => {
    const api = useApi();
    const fileField = useRef();
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [description, setDescription] = useState('');

    const [disabled, setDisable] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');
        let errors = [];

        if(!title.trim()) {
            errors.push('Sem título');
        }
        if(!category) {
            errors.push('Sem Categoria')
        }

        if(errors.length === 0) {

            const fData = new FormData();
            fData.append('title', title);
            fData.append('price', price);
            fData.append('priceneg', priceNegotiable);
            fData.append('desc', description);
            fData.append('cat', category);

            if(fileField.current.files.length > 0) {
                for(let i = 0; i < fileField.current.files.length; i++) {
                    fData.append('img', fileField.current.files[i]);
                }
            }

            const json = await api.addAd(fData);

            if(!json.error) {
                navigate(`/ad/${json.id}`);
            } else {
                setError(json.error);
            }

        } else {
            setError(errors.join("\n"));
        }

        setDisable(false);

    }

    const priceMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ','
    });

    return (
        <C.Container>
            <C.Title>Postar Um Anúncio</C.Title>
            <PageArea>
                {error &&
                    <C.ErrorMessage>{error}</C.ErrorMessage>
                }

                <form  onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Título:</div>
                        <div className="area--input">
                            <input
                                type="text"
                                disabled={disabled}
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Categoria:</div>
                        <div className="area--input">
                            <select
                                disabled={disabled}
                                onChange={e=>setCategory(e.target.value)}
                                required
                            >
                                <option></option>
                                {categories && categories.map((i, k)=>
                                    <option key={k} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço:</div>
                        <div className="area--input">
                            <MaskedInput
                            mask={priceMask}
                            placeholder="R$ "
                            disabled={disabled || priceNegotiable}
                            value={price}
                            onChange={e=>setPrice(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço Negociável:</div>
                        <div className="area--input">
                            <input
                                type="checkbox"
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={e=>setPriceNegotiable(!priceNegotiable)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição:</div>
                        <div className="area--input">
                            <textarea
                            disabled={disabled}
                            value={description}
                            onChange={e=>setDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Imagens (1 ou mais):</div>
                        <div className="area--input">
                            <input
                            type="file"
                            disabled={disabled}
                            ref={fileField}
                            multiple
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled} >Adicionar Anúncio</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </C.Container>
    );
}

export default AddAd;