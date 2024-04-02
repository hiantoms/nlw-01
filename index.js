let participantes = [
    {
        nome: "José Silva",
        email: "jose@gmail.com",
        dataInscricao: new Date(2024, 2, 1, 19, 23),
        dataCheckIn: new Date()
    },
    {
        nome: "Maria Oliveira",
        email: "maria@gmail.com",
        dataInscricao: new Date(2024, 1, 2, 19, 23),
        dataCheckIn: new Date()
    },
    {
        nome: "Ana Silva",
        email: "ana@gmail.com",
        dataInscricao: new Date(2024, 0, 5, 10, 45),
        dataCheckIn: new Date()
    },
    {
        nome: "João Santos",
        email: "joao@gmail.com",
        dataInscricao: new Date(2024, 3, 15, 14, 30),
        dataCheckIn: new Date()
    },
    {
        nome: "Maria Souza",
        email: "maria@gmail.com",
        dataInscricao: new Date(2024, 4, 20, 8, 0),
        dataCheckIn: new Date()
    },
    {
        nome: "Pedro Oliveira",
        email: "pedro@gmail.com",
        dataInscricao: new Date(2024, 5, 25, 17, 15),
        dataCheckIn: new Date()
    },
    {
        nome: "Laura Lima",
        email: "laura@gmail.com",
        dataInscricao: new Date(2024, 6, 30, 12, 10),
        dataCheckIn: new Date()
    },
    {
        nome: "Rafaela Costa",
        email: "rafaela@gmail.com",
        dataInscricao: new Date(2024, 7, 10, 9, 20),
        dataCheckIn: new Date()
    },
    {
        nome: "Lucas Almeida",
        email: "lucas@gmail.com",
        dataInscricao: new Date(2024, 8, 8, 18, 50),
        dataCheckIn: new Date()
    },
    {
        nome: "Camila Santos",
        email: "camila@gmail.com",
        dataInscricao: new Date(2024, 9, 5, 16, 5),
        dataCheckIn: new Date()
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  return `
  <tr>
      <td>
        <strong>
        ${participante.nome}      
        </strong>
        <br>
        <small>
        ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
    `
}

const atualizarLista = (participantes) => {
  let output = ""
  // estrutura de repetição - loop
  for(let participante of participantes){
    output = output + criarNovoParticipante(participante)
  }
  document
  .querySelector('tbody')
  .innerHTML = output
} 

atualizarLista(participantes)
