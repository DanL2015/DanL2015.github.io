import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import wordsJson from "../assets/words.json";
import Navbar from "./Navbar";
import useLocalStorageState from "use-local-storage-state";

function Typing() {
  let wordSource = JSON.parse(JSON.stringify(wordsJson));
  const [theme, setTheme] = useLocalStorageState("theme", "Dark");
  const [lastTimes, setLastTimes] = useLocalStorageState("lastTimes", []);
  const [lastSTime, setLastSTime] = useLocalStorageState("lastSTime", Date.now());
  const [fType, setFType] = useState("Words");
  const [num, setNum] = useState(15);
  const [tType, setTType] = useState("Normal");
  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [error, setError] = useState(false);
  const [started, setStarted] = useState(false);
  const [sTime, setSTime] = useState();
  const [times, setTimes] = useState([]);

  function onType(value) {
    if (value.length > 0 && !started) {
      setStarted(true);
      setSTime(Date.now());
      setTimes([{ time: Date.now(), wpm: 0, index: 0, word: "" }]);
    }
    if (value.length > 0 && value[value.length - 1] === " ") {
      if (words[wordIndex] === value.substring(0, value.length - 1)) {
        setTimes([
          ...times,
          {
            time: Date.now(),
            wpm: Math.round(
              (words[wordIndex].length + 1) /
                5 /
                ((Date.now() - times[times.length - 1].time) / 60000)
            ),
            index: times.length,
            word: words[wordIndex],
          },
        ]);
        setTyped("");
        setWordIndex(wordIndex + 1);
        if (wordIndex + 1 === words.length) {
          setLastSTime(sTime);
          var ltimes = [
            ...times,
            {
              time: Date.now(),
              wpm: Math.round(
                (words[wordIndex].length + 1) /
                  5 /
                  ((Date.now() - times[times.length - 1].time) / 60000)
              ),
              index: times.length,
              word: words[wordIndex],
            },
          ]
          ltimes.shift();
          setLastTimes(ltimes);
          reset();
        }
        return;
      }
    }
    setTyped(value);
    for (
      let i = 0;
      i < Math.min(value.length, words[wordIndex].length);
      i += 1
    ) {
      if (value[i] !== words[wordIndex][i]) {
        setError(true);
        return;
      }
    }
    setError(false);
  }

  function reset() {
    if (fType === "Words" && num) {
      let newWords = [];
      for (let i = 0; i < num; i += 1) {
        let word =
          wordSource.commonWords[
            Math.floor(Math.random() * wordSource.commonWords.length)
          ];
        if (tType === "Punctuation") {
          let punct = [",", ".", "?", "!", "", "", ""];
          word += punct[Math.floor(Math.random() * punct.length)];
        }
        if (tType === "Capitals") {
          word = word[0].toUpperCase() + word.slice(1);
        }
        newWords.push(word);
      }
      setStarted(false);
      setWords(newWords);
      setWordIndex(0);
      setTimes([]);
      setSTime();
    }
  }

  useEffect(() => {
    reset();
  }, [fType, num, tType]);

  return (
    <div className="background" data-theme={theme}>
      <Navbar curPage="Typing" />
      <div className="h-container">
        <div className="l-container">
          <div className="section">
            <h1>Typing Test</h1>
            <hr></hr>
            {
              <p>
                Last Word WPM:{" "}
                {times.length > 0 ? times[times.length - 1].wpm : 0}
              </p>
            }
            {
              <p>
                Avg WPM:{" "}
                {times.length > 0 &&
                sTime &&
                words &&
                times[times.length - 1].time !== sTime
                  ? Math.round(
                      words.reduce((acc, cur, i) => {
                        return i < wordIndex ? acc + cur.length + 1 : acc;
                      }, 0) /
                        5 /
                        ((times[times.length - 1].time - sTime) / 60000)
                    )
                  : 0}
              </p>
            }
            <div className="display-container">
              {words &&
                words.map((word, i) => {
                  if (i < wordIndex) {
                    return <div className="display-text-finish">{word}</div>;
                  } else if (i === wordIndex && error) {
                    return <div className="display-text-error">{word}</div>;
                  } else {
                    return <div className="display-text">{word}</div>;
                  }
                })}
            </div>
            <textarea
              placeholder="Type here..."
              value={typed}
              onChange={(e) => {
                onType(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="section">
            <h1>Results:</h1>
            <hr></hr>
            {!started && lastTimes.length > 0 && lastSTime && (
              <p>
                Time Taken:{" "}
                {(lastTimes[lastTimes.length - 1].time - lastSTime) / 1000}{" "}
                seconds
              </p>
            )}
            <p>
              Avg WPM:{" "}
              {lastTimes.length > 0 &&
              lastSTime &&
              lastTimes[lastTimes.length - 1].time !== lastSTime
                ? Math.round(
                    words.reduce((acc, cur, i) => {
                      return acc + cur.length + 1;
                    }, 0) /
                      5 /
                      ((lastTimes[lastTimes.length - 1].time - lastSTime) /
                        60000)
                  )
                : 0}
            </p>
            <ResponsiveContainer height={400}>
              <LineChart data={lastTimes}>
                <Line
                  className="chartLine"
                  type="monotone"
                  dataKey="wpm"
                  stroke="#77bdfb"
                />
                <XAxis className="chart" dataKey="word" />
                <YAxis className="chart" />
                <Tooltip className="chart" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="r-container">
          <div className="section">
            <h1>Options</h1>
            <hr></hr>
            <div className="option-container">
              <select onChange={(e) => setFType(e.target.value)}>
                <option>Words</option>
                <option>Time</option>
              </select>
              <input
                type="number"
                placeholder={`Enter amount of ${fType}`}
                value={num}
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              ></input>
            </div>
            <div className="option-container">
              <select onChange={(e) => setTType(e.target.value)}>
                <option>Normal</option>
                <option>Punctuation</option>
                <option>Capitals</option>
                <option>LaTeX</option>
              </select>
              <button>Clear Data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typing;
