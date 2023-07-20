import { useState } from 'react';
import styles from './Cardapio.module.scss';
import Filtros from './Filtros';

export default function Cardapio() {
    const [filtro, setFiltro] = useState<number | null>(null);
    
    return (
        <Filtros filtro={filtro} setFiltro={setFiltro} />
    )
}
