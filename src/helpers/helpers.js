import { REACT_APP_API_KEY } from "./constants";

export default function GetData(section, setData) {
  fetch(`https://api.themoviedb.org/3${section}?api_key=${REACT_APP_API_KEY}`)
    .then((response) => response.json())
    .then((data) => setData(data));
}
