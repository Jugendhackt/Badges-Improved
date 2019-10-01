# Badges-Improved
[![Jugendhackt](https://jhbadge.com/?evt=ffm&year=2019)](https.//jugendhackt.org)

**A simple badge generator for READMEs of projects created at youth hack events.**

## Usage
The generator can be found at `https://jhbadge.com`.
The standard badge without any further parameters looks like this:
[![Badge](https://jhbadge.com)](https://jhbadge.com)

The year and the event can also be specified in the form of GET parameters:
```
https://jhbadge.com/?year=2019&evt=ffm
```
[![Badge](https://jhbadge.com/?year=2019&evt=ffm)](https://jhbadge.com/?year=2019&evt=ffm)

The following events are currently supported in abbreviated form:
- `ffm` - Frankfurt
- `ber` - Berlin
- `hal` - Halle
- `hh` - Hamburg
- `hd` - Heidelberg
- `cgn` - Köln
- `at` - Österreich
- `ch` - Schweiz
- `mv` - Mecklenburg-Vorpommern
- `ulm` - Ulm
- `asia` - Asia

## Reliability
The generator should be very reliable, because the domain is registered for five years and the generator itself runs on serverless and therefore automatically scaling infrastructure.

## Many thanks to...
- ...[Niklas Schroetler](https://nschroetler.de) (for the [original generator](https://github.com/Jugendhackt/GitHub-Badge-Generator) written in PHP)
- ...all in Zulip with tips and suggestions for improvement
