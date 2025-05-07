# Whirlpool for Engineers

Whirlpool is a 512-bit cryptographic hash based on an AES-like block cipher.

## Technical Specs

- Output: 512-bit
- Block size: 512 bits
- Structure: Miyaguchi–Preneel with AES-like operations
- Permutation: 10 rounds of S-box, ShiftRow, MixColumn, AddRoundKey

## Highlights

- ISO/IEC 10118-3 standard
- Resistant to known preimage/collision attacks
- Suitable for archival and checksum validation

Whirlpool is ideal when high entropy and long digests are required, though it’s not as mainstream.

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
