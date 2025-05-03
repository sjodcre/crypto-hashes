import { useState, useEffect } from "react";
import { SHA256, SHA3, RIPEMD160, enc } from "crypto-js";
import { blake2b, blake3, whirlpool } from "hash-wasm";

function App() {
  const [input, setInput] = useState("Hello, World!");
  const [hashes, setHashes] = useState({});
  const [timings, setTimings] = useState({});
  const [copied, setCopied] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFileSize, setSelectedFileSize] = useState(0);

  useEffect(() => {
    const computeHashes = async () => {
      const results = {};
      const times = {};

      let start = performance.now();
      results.sha256 = SHA256(input).toString(enc.Hex);
      times.sha256 = performance.now() - start;

      start = performance.now();
      results.sha3_256 = SHA3(input, { outputLength: 256 }).toString(enc.Hex);
      times.sha3_256 = performance.now() - start;

      start = performance.now();
      results.blake2b = await blake2b(input);
      times.blake2b = performance.now() - start;

      start = performance.now();
      results.blake3 = await blake3(input);
      times.blake3 = performance.now() - start;

      start = performance.now();
      results.ripemd160 = RIPEMD160(input).toString(enc.Hex);
      times.ripemd160 = performance.now() - start;

      start = performance.now();
      results.whirlpool = await whirlpool(input);
      times.whirlpool = performance.now() - start;

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-8 text-gray-800 font-mono">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-slate-800">Cryptographic Hash Demo</h1>

        <div className="mb-6 space-y-4">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200"
            rows={4}
            placeholder="Enter text to hash"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {/* <input
            type="file"
            accept=".txt,.json,.csv,.xml,.html,.md,.js,.ts,.py"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              if (file.size > 50 * 1024) {
                alert("File too large. Max 50KB.");
                return;
              }

              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result === "string") {
                  setInput(reader.result);
                } else {
                  alert("Unsupported file format.");
                }
              };
              reader.readAsText(file);
            }}
            className="block w-full border border-gray-300 p-2 rounded shadow-sm"
          /> */}
          <div className="relative">
  <label className="block w-full">
    <div className="cursor-pointer border border-gray-300 rounded p-3 shadow-sm bg-white hover:bg-slate-50 text-gray-700 text-sm font-mono">
      {/* {selectedFileName || "Choose a file (Max 50KB)"} */}
      {selectedFileName
  ? `${selectedFileName} (${(selectedFileSize / 1024).toFixed(2)} KB)`
  : "Choose a file (Max 50KB)"}
    </div>
    <input
      type="file"
      accept=".txt,.json,.csv,.xml,.html,.md,.js,.ts,.py"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 50 * 1024) {
          alert("File too large. Max 50KB.");
          return;
        }

        setSelectedFileName(file.name);
        setSelectedFileSize(file.size);


        const reader = new FileReader();
        reader.onload = () => {
          if (typeof reader.result === "string") {
            setInput(reader.result);
          } else {
            alert("Unsupported file format.");
          }
        };
        reader.readAsText(file);
      }}
      className="hidden"
    />
  </label>
</div>

          <p className="text-sm text-gray-500 text-center">
            Accepted file types: .txt, .json, .csv, .xml, .html, .md, .js, .ts, .py — Max 50KB
          </p>
        </div>

        <div className="space-y-6">
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

        <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-700">Benchmark Table (ms)</h2>
        <table className="w-full table-auto border-collapse border text-left shadow-sm">
          <thead>
            <tr className="bg-slate-200">
              <th className="border px-4 py-2">Algorithm</th>
              <th className="border px-4 py-2">Time (ms)</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(timings).map(([label, time]) => (
              <tr key={label} className="even:bg-slate-50">
                <td className="border px-4 py-2 font-semibold">{label.toUpperCase().replace("_", "-")}</td>
                <td className="border px-4 py-2">{time.toFixed(10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function HashRow({ label, hash, time, onCopy, copied }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-lg text-slate-700">
          {label} <span className="text-sm text-gray-500">({time?.toFixed(10)} ms)</span>
        </p>
        <button
          onClick={onCopy}
          className="text-sm text-blue-600 hover:underline"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="break-all bg-gray-100 p-3 rounded text-sm text-slate-700 overflow-x-auto">
        {hash}
      </pre>
    </div>
  );
}

export default App;
