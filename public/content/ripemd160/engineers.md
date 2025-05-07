# RIPEMD-160 for Engineers

RIPEMD-160 is a 160-bit hash function designed in 1996 as a strengthened version of RIPEMD.

## Technical Details

- Digest size: 160 bits
- Block size: 512 bits
- Construction: Merkle–Damgård
- Notable: Dual independent parallel compression functions

## Usage

- Primary use today: Bitcoin address generation
- Often used in conjunction with SHA-256 (e.g. hash160 = RIPEMD160(SHA256(x)))

⚠️ While still used in crypto ecosystems, it’s considered outdated for modern security use.

---

## 📊 Comparison Table (Engineer View)

| Algorithm   | Output Bits | Structure        | Speed     | Application                     | Notes                          |
|-------------|-------------|------------------|-----------|----------------------------------|--------------------------------|
| [SHA-256](/algo/sha256)     | 256         | Merkle–Damgård   | Fast      | TLS, Blockchain, Git             | Widely adopted, solid          |
| [SHA3-256](/algo/sha3-256)    | 256         | Keccak Sponge    | Medium    | Post-quantum hashing             | Different math, newer standard |
| [BLAKE2b](/algo/blake2b)     | Up to 512   | HAIFA            | Very Fast | Password hashing, files          | ChaCha/Salsa-inspired          |
| BLAKE3      | 256         | Merkle Tree      | Ultra Fast| Parallel systems, SIMD usage     | Modern, multithreaded support  |
| RIPEMD-160  | 160         | Dual-line MD     | Slow      | Bitcoin address hashing          | Mostly legacy, still relevant  |
| Whirlpool   | 512         | AES-like Block   | Medium    | Long-term data integrity         | High entropy, large digest     |
