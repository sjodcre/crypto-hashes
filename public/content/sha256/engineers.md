# SHA-256 for Engineers 🧠

SHA-256 is a member of the SHA-2 family, producing a 256-bit hash. It follows a Merkle–Damgård construction and is standardized in FIPS PUB 180-4.

### Internal Structure
- Operates on 512-bit blocks
- Utilizes 64 rounds of compression
- Works with eight 32-bit working variables (a–h)
- Uses specific constants (K[0..63]) derived from cube roots of primes

### Steps
1. **Pre-processing**: Padding + 64-bit message length appended
2. **Parsing**: Divide message into 512-bit blocks
3. **Message Schedule**: Extend 16 words into 64
4. **Compression Function**: Apply round function using bitwise logic, rotations, and modular additions
5. **Final Hash**: Concatenation of updated a–h values

### Applications
- SSL/TLS
- Blockchain validation (e.g., Bitcoin)
- Software integrity checks

```txt
Input: "OpenAI"
Output: 8e5e72c6c4f70e960d7bb13e4d9f1d97e84d8750f13e9cfd4799c56e2f848e2c
```

Fast, simple, and robust — but vulnerable to length extension attacks without HMAC.
