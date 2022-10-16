import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuWell from "./components/MenuWell";
import "./App.css";
import ListCard from "./components/ListCard";
import DunkerFullProfile from "./components/DunkerFullProfile";
import MainLeague from "./components/MainLeague";
import BackButton from "./components/BackButton";

const App = () => {
  const [dunkersColOne, setDunkersColOne] = useState([]);
  const [dunkersColTwo, setDunkersColTwo] = useState([]);
  const [dunker, setDunker] = useState([]);
  const [dunkerProfile, setDunkerProfile] = useState(undefined);
  const [dunkerName, setDunkerName] = useState("");
  const [league, setLeague] = useState("PRO");

  function handleBack() {
    setDunkerProfile(undefined);
    setDunkerName("");
  }

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
      // setDunker(leagueRes.data);
      const len = leagueRes.length;
      setDunkersColOne(leagueRes.data.slice(0, leagueRes.data.length / 2 + 1));
      setDunkersColTwo(leagueRes.data.slice((leagueRes.data.length / 2) * -1));
    };
    changeLeague();
  }, [league]);

  return (
    <div>
      <MenuWell
        changeLeague={(league) => {
          setLeague(league);
          setDunkerProfile(undefined);
        }}
      />

      <div className="container main-app">
        <MainLeague league={league} />
        {dunkerProfile === undefined ? (
          <div className="row">
            <div className="col-md">
              <ul>
                {dunkersColOne.map((dunker) => {
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
            </div>
            <div className="col-md">
              {/* Render the second half of dunkers */}
              <ul>
                {dunkersColTwo.map((dunker) => {
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
            </div>
          </div>
        ) : (
          <DunkerFullProfile
            name={dunkerProfile.Name}
            league={dunkerProfile.League}
            instagram={dunkerProfile.Instagram}
            youtube={dunkerProfile.Youtube}
            avatar={dunkerProfile.Avatar}
          />
        )}
      </div>
      <hr />
      <BackButton handleBack={handleBack} />
    </div>
  );
};

export default App;
