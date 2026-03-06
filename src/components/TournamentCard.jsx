import React from "react";
// import StatusBadge from './components/StatusBadg';
// import {tournamentData} from './data/tournamentDB';


export default function TournamentCard() {


  return(
      <>



    
      {tournamentData.map((tournament, index) => (
        <div
          key={index}
   
     className="max-w-sm p-5 bg-white rounded-2xl shadow-md space-y-3 ">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
          {/* <img src="" alt="" /> */}
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">
            {tournament.title}
          </h3>

          <StatusBadge status={tournament.status} />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">
{tournament.decription}      </p>

      <hr />

      {/* Infos */}
      <div className="space-y-2 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          👥
          <span>{participantsCount}</span>
        </div>

        <div className="flex items-center gap-2">
          🏆
          <span>{tournament.format}</span>
        </div>

        <div className="flex items-center gap-2">
          📅
          <span>{tournament.date}</span>
        </div>

        <div className="flex items-center gap-2">
          📍
          <span>{tournament.location}</span>
        </div>

      </div>

    </div>
   ))}
    </>
  );
}
   
  