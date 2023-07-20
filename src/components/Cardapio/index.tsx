import { useState } from 'react';
import styles from './Cardapio.module.scss';
import Filtros from './Filtros';
import Buscador from './Buscador';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
    const [filtro, setFiltro] = useState<number | null>(null);
    const [busca, setBusca] = useState("");
    const [ordenador, setOrdenador] = useState("");

    return (
        <main className={styles.cardapio}>  
            <div>
                <Filtros filtro={filtro} setFiltro={setFiltro} />
                <Buscador busca={busca} setBusca={setBusca} />
            </div>
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </main>
    )
}
