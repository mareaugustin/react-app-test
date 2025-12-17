// useEffect sans dépendances → s’exécute une seule fois au montage
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Composant monté !");
    // Peut être utilisé pour fetch initial data
  }, []); // [] signifie "aucune dépendance", donc s’exécute qu’une fois

  return <div>Hello World</div>;
}





// useEffect avec dépendances → s’exécute quand une dépendance change

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(Le compteur a changé : ${count});
  }, [count]); // Le useEffect se déclenche uniquement quand count change

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}





//  useEffect sans tableau de dépendances → s’exécute à chaque rendu

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Le composant a été rendu ou mis à jour !");
  }); // Pas de tableau = s’exécute à chaque rendu

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}