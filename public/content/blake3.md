# BLAKE3

![BLAKE3 Diagram](https://www.researchgate.net/profile/Harris-Michail/publication/228881876/figure/fig4/AS:297457727406080@1447941743454/The-Proposed-Operation-Block-of-RIPEMD-160-algorithm.png)

BLAKE3 is a cryptographic hash function that combines the security of BLAKE2 with higher performance and parallelism, making it suitable for modern multicore processors.

## Key Features

- **Digest Size**: Variable (default 256 bits)
- **Structure**: Merkle tree with a single compression function
- **Parallelism**: Designed for SIMD and multicore parallelism

## How It Works

1. **Chunking**:
   - The input message is divided into 1024-byte chunks.

2. **Compression**:
   - Each chunk is processed using the compression function, producing chaining values.

3. **Tree Hashing**:
   - Chaining values are combined in a binary tree structure to compute the final hash.

## Applications

- High-performance hashing
- Filesystem integrity
- Cryptographic applications requiring parallelism
