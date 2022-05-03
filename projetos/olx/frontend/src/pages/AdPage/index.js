import { PageArea, Fake } from'./styled';
import { useParams } from 'react-router-dom';
import * as C from '../../components/MainComponents'
import useApi from '../../helpers/OlxApi'
import { useState, useEffect } from 'react'

const AdPage = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdinfo] = useState({});

    useEffect(()=>{
        const getadInfo = async (id) => {
            const json = await api.getAd(id, true);
            setAdinfo(json);
            setLoading(false);
        }
        getadInfo(id);
    }, [])

    const formatDate = (date) => {
        let cDate = new Date(date);

        let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    return (
        <C.Container>
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={300} />}
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20} />}
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={100} />}
                                {adInfo.description}
                                <hr />
                                {adInfo.views &&
                                    <small>Visualizações: {adInfo.views}</small>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake height={20} />}
                    </div>
                    <div className="box box--padding">
                        {loading && <Fake height={50} />}
                    </div>
                </div>
            </PageArea>
        </C.Container>
    );
}

export default AdPage;