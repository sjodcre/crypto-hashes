# SHA3-256 for Engineers

SHA3-256 is the 256-bit variant of the SHA-3 family based on the Keccak sponge construction.

## Technical Details

- Output: 256-bit (32-byte)
- State size: 1600 bits
- Capacity: 512 bits
- Rate: 1088 bits
- Permutation rounds: 24 (Keccak-f)
- Secure against length extension attacks

## How It Works

1. Pad input using multi-rate padding
2. Absorb input blocks into the sponge state
3. Permute the state using Keccak-f
4. Squeeze output until desired length

## Benefits

- Higher internal security margin
- Resistant to SHA-2-specific attacks
- Simpler padding rules
- Quantum-ready design

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
