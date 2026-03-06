import StatusBadge from "./StatusBadg";
import { tournamentData } from "./data/tournamentDB";

export default function TournamentCard() {
  const cards = []; // tableau pour stocker les JSX

  for (let i = 0; i < tournamentData.length; i++) {
    const tournament = tournamentData[i];

    cards.push(
      <div
        key={i}
        className="max-w-sm p-5 bg-white rounded-2xl shadow-md space-y-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
            🎾
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              {tournament.title}
            </h3>

            <StatusBadge status={tournament.status} />
          </div>
        </div>

        <p className="text-sm text-gray-600">{tournament.description}</p>

        <hr />

        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            👥<span>{tournament.value}</span>
          </div>

          <div className="flex items-center gap-2">
            🏆<span>{tournament.format}</span>
          </div>

          <div className="flex items-center gap-2">
            📅<span>{tournament.date}</span>
          </div>

          <div className="flex items-center gap-2">
            📍<span>{tournament.location}</span>
          </div>
        </div>
      </div>
    );
  }

  return <>{cards}</>; // retourne le tableau de JSX
}