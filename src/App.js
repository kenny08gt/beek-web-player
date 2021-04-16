import "./App.css";
import { Navbar } from "./components/navbar";
import Player from "./player";

function App() {
  let book_1 = {
    cover:
      "https://images.findawayworld.com/v1/image/cover/CD288713?width=350&height=350",
    audio: "https://samples.findawayworld.com/302699/302699_sample.mp3",
    title: "Surfear la vida",
    author: "Jaimal Yogis",
    narrator: "Narrated by Adriana Galindo",
    description: `Jaimal Yogis deja la secundaria urbana para escapar a Hawái con un par de libros y una inquietud por aprender a surfear. En la isla, lejos de la vida urbana, emprende un viaje repleto de altibajos, que pronto se convertirá en una travesía de aprendizaje. Misma que lo llevará desde las cabañas y cálidas olas del Pacífico, hasta los barcos de bahía, universidades, monasterios y aguas heladas de Brooklyn.
    ¿Te has preguntado en qué se parece nuestro pensamiento al ritmo de las olas del mar?, ¿estamos en control o nos adaptamos al oleaje de la vida? Sumérgete en el viaje espiritual que supone esta obra y descubre cómo el autor construye una profunda relación entre el surf y la búsqueda del ser.`,
    meta: `Language:Spanish

    Runtime:04:53:24

    Published by Beek Technologies, Inc the 2019-08-23T00:00:00Z`,
  };

  let book_2 = {
    cover:
      "https://images.findawayworld.com/v1/image/cover/CD396222?width=350&height=350",
    audio: "https://samples.findawayworld.com/411359/411359_sample.mp3",
    title: "El poder del ahora, en 15 minutos...",
    author: "Eckhart Tolle",
    narrator: "Narrated by Adriana Galindo",
    description: `El libro que consagró a Eckhart Tolle como uno de los gurús más importantes del mundo: 'El poder del ahora' . Considerado hoy en día una obra maestra, un libro que deja un mensaje único: se puede alcanzar un estado de iluminación aquí y ahora, es posible vivir libre del sufrimiento, de la ansiedad y de la neurosis. Para lograrlo sólo tenemos que comprender nuestro papel de creadores de nuestro dolor. El poder del ahora es una invitación a la reflexión, para abrirle las puertas a la plenitud espiritual y poder ver la vida con nuevos ojos para empezar a disfrutar del verdadero poder del ahora. Las actividades de Beek son realizadas bajo el amparo del ejercicio del derecho a la libertad de expresión.`,
    meta: `Language:Spanish

    Runtime:00:07:26

    Published by Beek Technologies, Inc the 2021-02-15T00:00:00Z`,
  };

  return <Player book={book_2}></Player>;
}

export default App;
