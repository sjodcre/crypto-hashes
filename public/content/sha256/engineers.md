# SHA-256 for Engineers

SHA-256 is a member of the SHA-2 family, designed by the NSA and standardized by NIST.

## Technical Specs

- Output: 256-bit hash (32 bytes)
- Block size: 512 bits
- Construction: Merkle–Damgård using Davies–Meyer
- Rounds: 64
- Secure as of 2025

## Algorithm Steps

1. Pad message to 512-bit blocks
2. Initialize eight 32-bit working variables
3. For each block, run 64 rounds using bitwise ops and modular math
4. Concatenate output from internal state

## Use Cases

- Digital signatures
- SSL/TLS
- Bitcoin mining
- File verification

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
