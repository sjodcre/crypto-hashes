import { useState, useEffect } from "react";
import { SHA256, SHA3, RIPEMD160, enc } from "crypto-js";
import { blake2b, blake3, whirlpool } from "hash-wasm";

function App() {
  const [input, setInput] = useState("Hello, World!");
  const [hashes, setHashes] = useState({});
  const [timings, setTimings] = useState({});
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const computeHashes = async () => {
      const results = {};
      const times = {};

      let start = performance.now();
      results.sha256 = SHA256(input).toString(enc.Hex);
      times.sha256 = (performance.now() - start).toFixed(2);

      start = performance.now();
      results.sha3_256 = SHA3(input, { outputLength: 256 }).toString(enc.Hex);
      times.sha3_256 = (performance.now() - start).toFixed(2);

      start = performance.now();
      results.blake2b = await blake2b(input);
      times.blake2b = (performance.now() - start).toFixed(2);

      start = performance.now();
      results.blake3 = await blake3(input);
      times.blake3 = (performance.now() - start).toFixed(2);

      start = performance.now();
      results.ripemd160 = RIPEMD160(input).toString(enc.Hex);
      times.ripemd160 = (performance.now() - start).toFixed(2);

      start = performance.now();
      results.whirlpool = await whirlpool(input);
      times.whirlpool = (performance.now() - start).toFixed(2);

      setHashes(results);
      setTimings(times);
    };

    computeHashes();
  }, [input]);

  const handleCopy = (label, hash) => {
    navigator.clipboard.writeText(hash);
    setCopied(label);
    setTimeout(() => setCopied(""), 1000);
  };

  return (
    <div className="min-h-screen bg-white p-6 text-gray-800 font-mono">
      <h1 className="text-3xl font-bold mb-4">Cryptographic Hash Demo</h1>

      <textarea
        className="w-full p-3 border border-gray-300 rounded mb-6"
        rows={3}
        placeholder="Enter text to hash"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="space-y-4">
        {Object.entries(hashes).map(([label, hash]) => (
          <HashRow
            key={label}
            label={label.toUpperCase().replace("_", "-")}
            hash={hash}
            time={timings[label]}
            onCopy={() => handleCopy(label, hash)}
            copied={copied === label}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-2">Benchmark Table (ms)</h2>
      <table className="w-full table-auto border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Algorithm</th>
            <th className="border px-4 py-2">Time (ms)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(timings).map(([label, time]) => (
            <tr key={label}>
              <td className="border px-4 py-2">{label.toUpperCase().replace("_", "-")}</td>
              <td className="border px-4 py-2">{time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HashRow({ label, hash, time, onCopy, copied }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-bold text-lg">
          {label} <span className="text-sm text-gray-500">({time} ms)</span>
        </p>
        <button
          onClick={onCopy}
          className="text-sm text-blue-600 hover:underline"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="break-all bg-gray-100 p-3 rounded border border-gray-200">
        {hash}
      </pre>
    </div>
  );
}

export default App;
