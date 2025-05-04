# Whirlpool

![Whirlpool Diagram](https://www.researchgate.net/profile/Shokhan-Al-Barzinji/publication/325116574/figure/fig1/AS:614401536212992@1523445699982/High-Level-Block-Diagram-of-Whirlpool-Hash-Function-16.png)

Whirlpool is a 512-bit cryptographic hash function designed by Vincent Rijmen and Paulo Barreto. It's based on a modified version of the Advanced Encryption Standard (AES).

## Key Features

- **Digest Size**: 512 bits
- **Block Size**: 512 bits
- **Rounds**: 10
- **Structure**: Miyaguchi–Preneel construction with an AES-like block cipher

## How It Works

1. **Preprocessing**:
   - The message is padded to a multiple of 512 bits.

2. **Initialization**:
   - The internal state is initialized to zero.

3. **Compression Function**:
   - Each block is processed through 10 rounds of an AES-like transformation, including SubBytes, ShiftRows, MixColumns, and AddRoundKey.

4. **Finalization**:
   - The final hash is obtained after processing all blocks and combining the output with the previous state.

## Applications

- Data integrity verification
- Cryptographic applications requiring a 512-bit hash
