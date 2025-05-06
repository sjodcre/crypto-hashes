# SHA-256 for Students 🎓

SHA-256 is a cryptographic hash function. It takes any input and produces a fixed-size 256-bit (32-byte) output. It's designed to be:

- **Deterministic**: Same input → same output
- **Irreversible**: You can't go backwards from output to input
- **Collision-resistant**: Hard to find two inputs with the same output

### Why It Matters
- Used in **password storage**, **blockchain**, and **data integrity checks**.

### How It Works (Simplified)
1. Input is padded to fit 512-bit chunks
2. Processed through 64 rounds of bitwise operations
3. Final 256-bit hash is generated

Explore how small changes in input affect the hash dramatically!
