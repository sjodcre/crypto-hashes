# 🔐 Crypto Hash Demo (React + JS + Tailwind)

This project is a modern web application that demonstrates how popular cryptographic hash functions work — live in your browser. It includes real-time hash generation, algorithm performance comparison, and educational documentation for each algorithm.

## ✨ Features

- 🔄 Live text input + file upload (max 50KB)
- 💡 Hash results from:
  - SHA-256
  - SHA3-256
  - BLAKE2b
  - BLAKE3
  - RIPEMD-160
  - Whirlpool
- ⏱️ Per-algorithm benchmark timings
- 📋 Copy-to-clipboard for each hash
- 📚 Educational markdown pages per algorithm
- 🖼️ Nice clean UI with Tailwind CSS

## 🧰 Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-router-dom](https://reactrouter.com/)
- [crypto-js](https://www.npmjs.com/package/crypto-js)
- [hash-wasm](https://www.npmjs.com/package/hash-wasm)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/crypto-hash-demo-js.git
cd crypto-hash-demo-js
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Dev Server

```bash
npm run dev
```

App should now be running at [http://localhost:5173](http://localhost:5173)

---

## 📁 Directory Structure

```bash
/public
  └── content/       # Markdown files for algorithm info
    ├── sha256.md
    ├── sha3-256.md
    ├── blake2b.md
    ├── blake3.md
    ├── ripemd160.md
    └── whirlpool.md
/src
  ├── pages/         # Algorithm detail page component
  │   └── AlgoPage.jsx
  ├── App.jsx        # Main demo UI
  ├── Router.jsx     # React router setup
  └── main.jsx       # Entry file
```

## 🧪 Usage

1. Type text or upload a `.txt`, `.json`, `.md`, etc. file (max 50KB).
2. View hashes and computation times.
3. Click any algorithm name to view its description.

## 💡 Future Improvements

- Add animated visualization per algorithm
- Add hash history and export
- Add unit tests for core hashing logic

## 📜 License

MIT © 2025 Sam Oma
