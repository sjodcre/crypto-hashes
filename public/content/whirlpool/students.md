# Whirlpool for Students

Whirlpool is a cryptographic hash function that gives you a **very large 512-bit output**.

### Key Points

- Based on block cipher design (similar to AES)
- Produces huge hashes, useful when **longer digests** are needed
- Secure, but not as widely adopted as others

It’s great for **archiving**, **file integrity**, or **backups**.

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
