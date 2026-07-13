/**
 * GameOverScreen.jsx — shown when the whole portfolio burnt down and the
 * user never pressed the alarm. Fades to black, delivers the (localized)
 * verdict, and a small countdown shows when the site rebuilds itself
 * (the FireProvider triggers the actual reset after GAMEOVER_HOLD_MS).
 */
import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n/index.jsx";
import { GAMEOVER_HOLD_MS } from "./constants.js";
import { useFire } from "./FireContext.jsx";

const HOLD_SECONDS = Math.round(GAMEOVER_HOLD_MS / 1000);

export default function GameOverScreen() {
  const { phase } = useFire();
  const { t } = useTranslation();
  const [secondsLeft, setSecondsLeft] = useState(HOLD_SECONDS);

  useEffect(() => {
    if (phase !== "gameover") return undefined;
    setSecondsLeft(HOLD_SECONDS);
    const id = setInterval(
      () => setSecondsLeft((s) => Math.max(0, s - 1)),
      1000,
    );
    return () => clearInterval(id);
  }, [phase]);

  if (phase !== "gameover") return null;

  return (
    <div className="fire-gameover" role="alert">
      <div>
        <p>{t("fire.gameOver.message")}</p>
        <p className="fire-gameover__timer">
          {t("fire.gameOver.rebuild").replace("{seconds}", secondsLeft)}
        </p>
      </div>
    </div>
  );
}
