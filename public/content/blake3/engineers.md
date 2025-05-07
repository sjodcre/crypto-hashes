# BLAKE3 for Engineers

BLAKE3 is a cryptographic hash function designed to be **faster** and more **parallelizable** than its predecessors.

## Technical Specs

- Output: 256-bit (by default)
- Structure: Merkle tree
- Core: Based on BLAKE2s’s compression function
- Deterministic and extendable output (XOF)
- SIMD and multithread friendly

## Highlights

- 3x–7x faster than SHA-256 in practice
- Uses tree hashing for parallelism
- Stateless API: no context needed between calls
- Highly efficient in WASM and embedded systems

## When to Use It

- Hashing large files
- Multi-core processing
- Verifying assets in real-time

---

## 📊 Comparison Table (Engineer View)

| Algorithm   | Output Bits | Structure        | Speed     | Application                     | Notes                          |
|-------------|-------------|------------------|-----------|----------------------------------|--------------------------------|
| [SHA-256](/algo/sha256)     | 256         | Merkle–Damgård   | Fast      | TLS, Blockchain, Git             | Widely adopted, solid          |
| SHA3-256    | 256         | Keccak Sponge    | Medium    | Post-quantum hashing             | Different math, newer standard |
| BLAKE2b     | Up to 512   | HAIFA            | Very Fast | Password hashing, files          | ChaCha/Salsa-inspired          |
| BLAKE3      | 256         | Merkle Tree      | Ultra Fast| Parallel systems, SIMD usage     | Modern, multithreaded support  |
| RIPEMD-160  | 160         | Dual-line MD     | Slow      | Bitcoin address hashing          | Mostly legacy, still relevant  |
| Whirlpool   | 512         | AES-like Block   | Medium    | Long-term data integrity         | High entropy, large digest     |
