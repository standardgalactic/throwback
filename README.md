# throwback

A retro, nostalgic personal homepage inspired by the golden age of the
World Wide Web (think GeoCities, blinking `<marquee>` tags, and hit
counters).

## Features

- Rainbow animated heading and scrolling marquee banner
- Twinkling canvas starfield background
- Local "hit counter" (persisted via `localStorage`)
- Local guestbook you can sign (persisted via `localStorage`)
- Zero build step — just plain HTML, CSS, and JS

## Running locally

Just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Time Machine

Three even-earlier-web pages, linked from the homepage's "Time Machine" section:

- `lisp-1959.html` &mdash; a PDP-1 LISP console explaining S-expressions,
  cons/car/cdr, and prefix ("Polish") notation, tracing the family tree
  connecting infix, prefix, and Forth's postfix/RPN
- `forth-1970.html` &mdash; a green-phosphor terminal explaining Forth's
  stack and "words" model, with a side-by-side comparison to plain
  Reverse Polish Notation
- `bbs-1985.html` &mdash; a dial-up BBS terminal screen (ANSI-ish green
  phosphor, modem handshake text, lettered menu)
- `gopher-1991.html` &mdash; a Gopher protocol menu (numbered plain-text
  listing, amber-on-black terminal look)
- `vim-1991.html` &mdash; an interactive tutorial with a small but real
  modal text editor implemented in JavaScript (normal/insert/command-line
  modes, `dd`/`yy`/`p`, visual line mode) and six self-checking guided
  lessons
- `mosaic-1993.html` &mdash; a plain NCSA Mosaic-era page (no CSS, no images,
  default browser link colors, `<blockquote>`/`<hr>` presentational HTML)
