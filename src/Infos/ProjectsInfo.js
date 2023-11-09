import html from "../Images/Stacks/html-logo.png";
import currFolio from "../Images/Projects/current-portfolio.png";
import calcuwhey from "../Images/Projects/calcuwhey.png";
import starwars from "../Images/Projects/starwars.png";
import myradio from "../Images/Projects/myradio.png";
import sass from "../Images/Stacks/sass-logo.png";
import react from "../Images/Stacks/react-logo.png";
import cypress from "../Images/Stacks/cypress-logo.png";
import nodejs from "../Images/Stacks/nodejs-logo.png";
import mysql from "../Images/Stacks/mysql-logo.png";
import docker from "../Images/Stacks/docker-logo.png";

const ProjectsInfo = [
  {
    namePT: "Este Portfólio",
    nameEN: "This Portfolio",
    type: "Front-End",
    image: currFolio,
    descriptionPT: "Meu portfólio atual, feito após o final do curso de programação.",
    descriptionEN: "My current portfolio, made after the end of the programming course.",
    stacks: [react, sass, html],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    gitRepository: "https://github.com/caio-cmc/react-portfolio"
  },
  {
    namePT: "CalcuWhey",
    nameEN: "CalcuWhey",
    type: "Front-end",
    image: calcuwhey,
    descriptionPT: "Calculadora que compara quantidade de proteínas entre 2 marcas de whey protein.",
    descriptionEN: "Calculator that compares the protein amount between 2 different whey protein brands.",
    stacks: [react, sass, cypress],
    link: "https://caio-cmc.github.io/calcuwhey/",
    gitRepository: "https://github.com/caio-cmc/calcuwhey"
  },
  {
    namePT: "MyRadio API",
    nameEN: "MyRadio API",
    type: "Back-end",
    image: myradio,
    descriptionPT: "API simples que mostra informações de músicas e preferencias de usuários.",
    descriptionEN: "Simple API that shows music informations and user preferences.",
    stacks: [nodejs, mysql, docker],
    link: "https://github.com/caio-cmc/radio-back",
    gitRepository: "https://github.com/caio-cmc/radio-back"
  },
  {
    namePT: "Buscador de planetas SW",
    nameEN: "SW Planet Search",
    type: "Front-end",
    image: starwars,
    descriptionPT: "Aplicação de filtragem de tabela com o tema de Star Wars!",
    descriptionEN: "A table filtering aplication with a Star Wars theme!",
    stacks: [react, sass, html],
    link: "https://caio-cmc.github.io/starwars/",
    gitRepository: "https://github.com/caio-cmc/starwars"
  },
];

export default ProjectsInfo;