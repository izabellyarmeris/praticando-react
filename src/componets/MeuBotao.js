
function MeuBotao() {
    const [contar, setContar] = useState(0);
    function manipulaClick() {
      setContar(contar + 1);
    }
    return (
      <button onClick={manipulaClick}>
        Clicou {contar} vezes
      </button>
    );
}