import { FETCH_WEATHER } from "./types";

export const fetchWeather = () => async (dispatch) => {
  const ids = {
    India: 2867714,
    Canada: 2643743,
    California: 4350049,
  };

  const fetches = await Promise.all(
    Object.values(ids).map((e) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=db6277716bmshe69944dfda3799ap1d8adajsna15258094495` // here you put your token key
      ).then((e) => e.json())
    )
  );

  dispatch({
    type: FETCH_WEATHER,
    payload: {
      // iterating through object does not guarantee order, so I chose manually
      India: fetches[0],
      Canada: fetches[1],
      California: fetches[2],
    },
  });
};