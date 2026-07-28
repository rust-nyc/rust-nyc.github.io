---
layout: base.njk
title: Rust NYC
---

# <img src="/rust-nyc-liberty-ferris.png" alt="" style="height: 1em; width: auto"> Rust NYC!

👉 **Big thanks to everyone who attended the [Rust NYC Unconf 2025](https://luma.com/lt31g7a2)** 👈
This was the biggest free Rust event ever, and we so much appreciate everyone who was able to attend and share their knowledge and passion for learning and supporting others to thrive with Rust.

<aside class="talk-callout">
  <h2>Share your Rust story</h2>
  <p>Have an idea you'd like to share at a future meetup? Send us a talk proposal.</p>
  <a class="talk-callout__button" href="https://rustnyc-talks.val.run/">Submit a talk</a>
</aside>

## Meetup

 - [Meetup events](https://www.meetup.com/Rust-NYC/)
 - [Join the Discord](https://discord.gg/5mGe3AGzgn) (#in-nyc)

Follow us on [Bluesky](https://bsky.app/profile/rust.nyc), [𝕏](https://x.com/rust_nyc), and [YouTube](https://youtube.com/@RustEastCoast)

[Source code of this website](https://github.com/rust-nyc/rust-nyc.github.io)

## Rust East Coast

Rust NYC is a part of the Rust East Coast group (organized on Discord) that shares resources with communities from other cities.
[Rust East Coast links](https://rusteastcoast.com?utm_source=rust.nyc)

## Resources

- [Rust Lang book](https://rust-lang.github.io/book/)

## Exercises

- [exercism](http://exercism.io/languages/rust)
- [rustlings](https://github.com/rust-lang/rustlings)

### Rust NYC curated exercises

#### File exercise!

Download this file: [big.txt](http://norvig.com/big.txt)

1. Calculate number of bytes in file
2. Number of occurrences of the letter 'z' in file
3. Number of occurrences of all letters (case insensitive) in file

How does performance compare to this Python script version?

```python
file_ = open("big.txt")
count = 0
for line in file_:
    for char in line:
        count += 1
print(count)
```
