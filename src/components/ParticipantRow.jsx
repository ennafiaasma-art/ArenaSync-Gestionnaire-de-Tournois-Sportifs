import StatusBadge from "./StatusBadge";

export default function ParticipantRow({ avatar, name, status }) {
  return (
    <div className="flex items-center gap-3 p-3 border rounded-lg">

      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full"
      />

      {/* Name */}
      <p className="font-semibold">{name}</p>

      {/* Status */}
      <StatusBadge status={status} />

    </div>
  );
}