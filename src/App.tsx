import { useState } from "react";
import type { FormEvent } from "react";
import "./App.css";

type Notice = {
    numeroProcesso?: string;
    dataDisponibilizacao?: string;
    dataPublicacao?: string;
    tribunal?: string;
    tipoComunicacao?: string;
    nomeOrgao?: string;
    texto?: string;
    link?: string;
    meio?: string;
    [key: string]: unknown;
};

type SearchResponse = { count?: number; page?: number; totalPages?: number; items?: Notice[]; comunicacoes?: Notice[] };

function formatDate(value?: string) {
    if (!value) return "Data não informada";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(date);
}

function App() {
    const [number, setNumber] = useState("");
    const [notices, setNotices] = useState<Notice[]>([]);
    const [total, setTotal] = useState<number | undefined>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function search(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const normalized = number.replace(/\D/g, "");
        if (!normalized) { setError("Informe o número do processo para iniciar a busca."); return; }
        setLoading(true); setError(""); setNotices([]); setTotal(undefined);
        try {
            const query = new URLSearchParams({ numeroProcesso: normalized, meio: "D" });
            const response = await fetch(`https://comunicaapi.pje.jus.br/api/v1/comunicacao?${query}`, { headers: { accept: "application/json" } });
            if (!response.ok) throw new Error(`A consulta retornou o status ${response.status}. Tente novamente em instantes.`);
            const data = await response.json() as SearchResponse;
            const entries = data.items ?? data.comunicacoes ?? [];
            setNotices(entries);
            setTotal(data.count ?? entries.length);
        } catch (cause) {
            setError(cause instanceof Error ? cause.message : "Não foi possível consultar os processos agora. Verifique sua conexão e tente novamente.");
        } finally { setLoading(false); }
    }

    return (
        <main>
            <header className="topbar"><a className="brand" href="#inicio"><span className="brand-mark">A</span> advocato</a><nav><a href="#como-funciona">Como funciona</a><a href="#consulta">Consultar processo</a></nav></header>
            <section className="hero" id="inicio">
                <div className="hero-copy"><span className="eyebrow"><span className="eyebrow-dot"/> JUSTIÇA MAIS ACESSÍVEL</span><h1>Acompanhe processos<br/>com <em>clareza.</em></h1><p>Encontre publicações e comunicações judiciais em um só lugar. Uma consulta simples, com as informações organizadas para você.</p><a className="primary-link" href="#consulta">Consultar um processo <span>↓</span></a><div className="hero-note"><span className="shield">✓</span> Consulta pública · Sem cadastro</div></div>
                <div className="hero-art" aria-hidden="true"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-card"><div className="doc-top"><span className="doc-icon">§</span><span className="doc-lines"><i/><i/><i/></span><span className="doc-check">✓</span></div><div className="doc-rule"/><div className="doc-label">COMUNICAÇÃO JUDICIAL</div><strong>Publicação encontrada</strong><div className="doc-foot"><span>Disponibilizada em</span><b>12 jun 2025</b></div></div><div className="floating-tag"><span>●</span> Dados públicos</div><div className="art-spark">✳</div></div>
            </section>
            <section className="search-section" id="consulta"><div className="section-heading"><span className="eyebrow">PESQUISA PROCESSUAL</span><h2>O que você procura?</h2><p>Digite o número CNJ do processo para consultar as comunicações disponíveis.</p></div><form className="search-form" onSubmit={search}><label htmlFor="process-number">Número do processo</label><div className="input-row"><span className="search-icon">⌕</span><input id="process-number" value={number} onChange={event => setNumber(event.target.value)} placeholder="0000000-00.0000.0.00.0000" inputMode="numeric"/><button type="submit" disabled={loading}>{loading ? <><span className="spinner"/> Consultando</> : <>Buscar processo <span>→</span></>}</button></div><div className="form-hint"><span>ⓘ</span> Use o número completo no padrão CNJ. A busca considera comunicações pelo Diário de Justiça.</div></form>
            {error && <div className="feedback error" role="alert">{error}</div>}
            {total !== undefined && <div className="results"><div className="results-heading"><div><span className="eyebrow">RESULTADO DA BUSCA</span><h3>{total ? `${total} comunicação${total === 1 ? "" : "ões"} encontrada${total === 1 ? "" : "s"}` : "Nenhuma comunicação encontrada"}</h3></div><span className="result-count">{total}</span></div>{notices.length === 0 ? <p className="empty">Não encontramos publicações para este número. Confira os dígitos e tente novamente.</p> : notices.map((notice, index) => <article className="notice" key={`${notice.numeroProcesso ?? number}-${index}`}><div className="notice-top"><span className="notice-type">{notice.tipoComunicacao || "Comunicação judicial"}</span><span>{formatDate(notice.dataDisponibilizacao ?? notice.dataPublicacao)}</span></div><h4>{notice.nomeOrgao || notice.tribunal || "Órgão judicial"}</h4><p className="notice-meta">{notice.tribunal || "Tribunal não informado"}{notice.numeroProcesso ? ` · Processo ${notice.numeroProcesso}` : ""}</p>{notice.texto && <p className="notice-text">{notice.texto}</p>}{notice.link && <a className="notice-link" href={notice.link} target="_blank" rel="noreferrer">Abrir publicação <span>↗</span></a>}</article>)}</div>}
            </section>
            <section className="how-section" id="como-funciona"><div><span className="eyebrow">SIMPLES DO COMEÇO AO FIM</span><h2>Informação jurídica,<br/><em>sem complicação.</em></h2><p>O Advocato organiza dados de comunicações judiciais públicas para ajudar você a encontrar o que precisa.</p></div><div className="steps"><article><span>01</span><div><h3>Informe o processo</h3><p>Insira o número CNJ completo no campo de busca.</p></div></article><article><span>02</span><div><h3>Consulte as publicações</h3><p>Buscamos comunicações disponíveis no Diário de Justiça.</p></div></article><article><span>03</span><div><h3>Leia com mais clareza</h3><p>Confira órgão, data e conteúdo da comunicação em um só lugar.</p></div></article></div></section>
            <footer><a className="brand" href="#inicio"><span className="brand-mark">A</span> advocato</a><p>Informação pública, apresentada com clareza.</p><span>Projeto comunitário · Dados consultados na API pública do PJe</span></footer>
        </main>
    );
}

export default App;
