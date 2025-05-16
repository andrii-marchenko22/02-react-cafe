import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onReset: () => void;
  canReset: boolean;
  onVotes: (vote: VoteType) => void;
}

export default function VoteOptions({
  onReset,
  canReset,
  onVotes,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVotes("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onVotes("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVotes("bad")}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
