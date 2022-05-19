


const Estados = () => {
  const regiaoEstados = {
    Norte: ["Acre", "Amapa", "Amazonas", "Para", "Rondonia", "Roraima", "Tocantins"],
    Nordeste: ["Alagoas", "Bahia", "Ceará", "Maranhão", "Paraiba", "Pernambuco", "Piauí", "Rio Grande do Norte", "Sergipe"],
    "Centro-Oeste": ["Goias", "Mato Grosso", "Mato Grosso do Sul"],
    Sudeste: ["Espirito Santo", "Minas Gerais", "Rio de Janeiro", "São Paulo"],
    Sul: ["Parana", "Santa Catarina", "Rio Grande do Sil"]
  };

  return (
    <select name="Estado">
      <option value="0">Escolha Sua Regiao</option>
      {Object.entries(regiaoEstados).map(([regiao, estados]) => {
        return (
          <optgroup label={regiao}>
            {estados.map((estado) => (
              <option value={estado}>{estado}</option>
            ))}
          </optgroup>
        );
      })}
    </select>
  );
};

export default Estados;