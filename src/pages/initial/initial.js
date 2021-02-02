import './initial.css'

function Initial() {

  const leftCurlyBrace  = '{';
  const rightCurlyBrace = '}';
    return (
      <main className="initial">
        <section>
          <div className="card">Projeto 1</div>
          <div className="card">
            <span>
            <p className="class">.fazendo atualmente </p>
            <p>{leftCurlyBrace}</p>
            </span>
            <span className="whitespancing">
            <p className="attribute">lendo</p>
            <p>: </p>
            <p className="value">css grid layout</p>
            <p> ;</p>
            </span>
            <span className="whitespancing">
            <p className="attribute">assistindo</p>
            <p>: </p>
            <p className="value">vidrados</p>
            <p> ;</p>
            </span>
            <span className="whitespancing">
            <p className="attribute">jogando</p>
            <p>: </p>
            <p className="value">oad</p>
            <p> ;</p>
            </span>
            <span className="whitespancing">
            <p className="attribute">estudando</p>
            <p>: </p>
            <p className="value">svg</p>
            <p> ;</p>
            </span>
            <span className="whitespancing">
            <p className="attribute">praticando</p>
            <p>: </p>
            <p className="value">corrida 5km</p>
            <p> ;</p>
            </span>
            <p>{rightCurlyBrace}</p>
            </div>
          <div className="card">Projeto 2</div>
          <div className="card">Projeto 2</div>
        </section>
      </main>
    );
  }
  
  export default Initial;