# SHA3-256 for Students

SHA3-256 is a next-generation hash function based on the Keccak algorithm.

Unlike SHA-2, it uses a **sponge construction**, where:

- Input is "absorbed" into a large state
- The state is transformed using bitwise logic and permutations
- Output is "squeezed" from the state

It’s flexible, modern, and designed to resist future attacks — including some **quantum computing threats**.

---

## 📊 Hash Comparison Table

| Algorithm    | Output Size | Structure        | Speed     | Key Usage                          |
|--------------|-------------|------------------|-----------|------------------------------------|
| [SHA-256](/algo/sha256)      | 256 bits    | Merkle–Damgård   | Fast      | SSL, TLS, Bitcoin                  |
| [SHA3-256](/algo/sha3-256)     | 256 bits    | Keccak Sponge    | Medium    | Post-quantum readiness             |
| [BLAKE2b](/algo/blake2b)      | Up to 512b  | HAIFA            | Very Fast | File hashing, modern replacement   |
| BLAKE3       | 256 bits    | Merkle Tree      | Ultra Fast| Parallel, multithreaded apps       |
| RIPEMD-160   | 160 bits    | Dual-line MD     | Slower    | Bitcoin addresses                  |
| Whirlpool    | 512 bits    | AES-like         | Medium    | High-integrity file checks         |
