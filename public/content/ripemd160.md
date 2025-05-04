# RIPEMD-160

![RIPEMD-160 Diagram](https://www.researchgate.net/profile/Harris-Michail/publication/228881876/figure/fig4/AS:297457727406080@1447941743454/The-Proposed-Operation-Block-of-RIPEMD-160-algorithm.png)

RIPEMD-160 is a 160-bit cryptographic hash function developed as an improvement over the original RIPEMD. It's known for its use in Bitcoin addresses.

## Key Features

- **Digest Size**: 160 bits
- **Block Size**: 512 bits
- **Rounds**: 80
- **Structure**: Merkle–Damgård construction with two parallel lines of computation

## How It Works

1. **Preprocessing**:
   - The message is padded and divided into 512-bit blocks.

2. **Initialization**:
   - Five 32-bit words are initialized as the initial hash value.

3. **Compression Function**:
   - Each block is processed through 80 rounds, with two parallel lines of computation combining at the end of each block.

4. **Finalization**:
   - After all blocks are processed, the final hash is produced by adding the output to the initial hash value.

## Applications

- Bitcoin address generation
- Data integrity checks
