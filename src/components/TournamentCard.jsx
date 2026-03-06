import React from "react";
import StatusBadge from "./StatusBadg";


export default function TournamentCard() {


  return(
   
    <div className="max-w-sm p-5 bg-white rounded-2xl shadow-md space-y-3">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
          🎾
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">
            Shuttle Masters League
          </h3>

          <StatusBadge status="On Going" />
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">
        Top players battle it out with skillful rallies and powerful smashes.
      </p>

      <hr />

      {/* Infos */}
      <div className="space-y-2 text-sm text-gray-600">

        <div className="flex items-center gap-2">
          👥
          <span>24/32 Participants • Public</span>
        </div>

        <div className="flex items-center gap-2">
          🏆
          <span>Single Elimination</span>
        </div>

        <div className="flex items-center gap-2">
          📅
          <span>October 12, 2025</span>
        </div>

        <div className="flex items-center gap-2">
          📍
          <span>Badminton Hall 1</span>
        </div>

      </div>

    </div>
  );
}
  