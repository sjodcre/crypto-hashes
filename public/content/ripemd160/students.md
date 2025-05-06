# RIPEMD-160 for Students

RIPEMD-160 is a cryptographic hash from the 1990s — older, but still in use, especially in Bitcoin.

### Features:
- 160-bit output (smaller than SHA)
- Uses two parallel compression paths for better mixing
- Still secure enough for some use, but not recommended for new systems

💡 It’s mostly known for one job: generating **Bitcoin addresses**.

---

## 📊 Hash Comparison Table

| Algorithm    | Output Size | Structure        | Speed     | Key Usage                          |
|--------------|-------------|------------------|-----------|------------------------------------|
| SHA-256      | 256 bits    | Merkle–Damgård   | Fast      | SSL, TLS, Bitcoin                  |
| SHA3-256     | 256 bits    | Keccak Sponge    | Medium    | Post-quantum readiness             |
| BLAKE2b      | Up to 512b  | HAIFA            | Very Fast | File hashing, modern replacement   |
| BLAKE3       | 256 bits    | Merkle Tree      | Ultra Fast| Parallel, multithreaded apps       |
| RIPEMD-160   | 160 bits    | Dual-line MD     | Slower    | Bitcoin addresses                  |
| Whirlpool    | 512 bits    | AES-like         | Medium    | High-integrity file checks         |
