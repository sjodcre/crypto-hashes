# SHA-256 for Students

SHA-256 is a cryptographic hash function. Think of it like a digital fingerprint machine:

- You enter any message
- It outputs a 64-character code (256 bits)
- Even a single letter change creates a totally different hash
- You can’t reverse it or guess the input from the output

It's commonly used in security systems, Bitcoin, and verifying files.

---

## 📊 Hash Comparison Table

| Algorithm    | Output Size | Structure        | Speed     | Key Usage                          |
|--------------|-------------|------------------|-----------|------------------------------------|
| [SHA-256](/algo/sha256)      | 256 bits    | Merkle–Damgård   | Fast      | SSL, TLS, Bitcoin                  |
| [SHA3-256](/algo/sha3-256)     | 256 bits    | Keccak Sponge    | Medium    | Post-quantum readiness             |
| BLAKE2b      | Up to 512b  | HAIFA            | Very Fast | File hashing, modern replacement   |
| BLAKE3       | 256 bits    | Merkle Tree      | Ultra Fast| Parallel, multithreaded apps       |
| RIPEMD-160   | 160 bits    | Dual-line MD     | Slower    | Bitcoin addresses                  |
| Whirlpool    | 512 bits    | AES-like         | Medium    | High-integrity file checks         |
