import { PageArea } from'./styled';
import { useParams } from 'react-router-dom';
import * as C from '../../components/MainComponents'
import useApi from '../../helpers/OlxApi'
import { useState } from 'react'

const AdPage = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdinfo] = useState([]);

    return (
        <C.Container>
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            ...
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                ...
                            </div>
                            <div className="adDescription">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ritghSide">
                    ...
                </div>
            </PageArea>
        </C.Container>
    );
}

export default AdPage;