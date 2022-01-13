import React, { useState, useEffect } from "react";
import DunkerTitle from "./components/DunkerTitle";
import DunkerAvatar from "./components/DunkerAvatar";
import axios from "axios";
import DunkerSummary from "./components/DunkerSummary";
import LeagueTitle from "./components/LeagueTitle";
import DunkerAttributes from "./components/DunkerAttributes";
import MenuWell from "./components/MenuWell";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import ListCard from "./components/ListCard";
import DunkerFullProfile from "./components/DunkerFullProfile";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [dunkers, setDunkers] = useState([]);
  const [dunkerProfile, setDunkerProfile] = useState(undefined);
  const [dunkerName, setDunkerName] = useState("");
  const [league, setLeague] = useState("PRO");

  useEffect(() => {
    const fetchDunker = async () => {
      const res = await axios.get(`/dunkers/${dunkerName}`);
      setDunkerProfile(res.data);
      console.log(res.data);
      console.log(dunkerName);
    };
    fetchDunker();
  }, [dunkerName]);

  useEffect(() => {
    const changeLeague = async () => {
      const leagueRes = await axios(`/dunkers/league/${league}`);
      setDunkers(leagueRes.data);
    };
    changeLeague();
  }, [league]);

  return (
    <div>
      <MenuWell changeLeague={(league) => setLeague(league)} />
      <h2 style={{ color: "red" }}>{league}</h2>
      <div className="container main-app">
        <button onClick={() => setDunkerProfile(undefined)}>Reset</button>
        {dunkerProfile === undefined ? (
          <ul>
            {dunkers.map((dunker) => {
              return (
                <ListCard
                  name={dunker.Name}
                  avatar={dunker.Avatar}
                  league={dunker.League}
                  location={dunker.Location}
                  fetchDunker={(dunkerName) => setDunkerName(dunkerName)}
                />
              );
            })}
          </ul>
        ) : (
          <DunkerFullProfile
            name={dunkerProfile.Name}
            league={dunkerProfile.League}
            instagram={dunkerProfile.Instagram}
            youtube={dunkerProfile.Youtube}
            avatar={dunkerProfile.Avatar}
          />
        )}
        <hr/>
        <footer>

        </footer>
      </div>
    </div>
  );
};

export default App;
