# Badges-Improved
[![Jugendhackt](https://jhbadge.com/?noyear=true)](https.//jugendhackt.org)

**A simple badge generator for READMEs of projects created at Jugend hackt events.**

## Usage
**A simple badge builder for creating the badge can be found [here](https://jhbadge.com/builder)** (https://jhbadge.com/builder)**.**

The generator can be found at `https://jhbadge.com`.
The standard badge without any further parameters looks like this:

[![Badge](https://jhbadge.com)](https://jhbadge.com)

The year and the event can also be specified in the form of GET parameters:
```
https://jhbadge.com/?year=2019&evt=ffm
```
[![Badge](https://jhbadge.com/?year=2019&evt=ffm)](https://jhbadge.com/?year=2019&evt=ffm)

The year can also be hidden if the `noyear` GET parameter is set to `true`.
```
https://jhbadge.com/?evt=ffm&noyear=true
```
[![Badge](https://jhbadge.com/?evt=ffm&noyear=true)](https://jhbadge.com/?evt=ffm&noyear=true)

The simplest variant of the badge therefore looks like this (without event and without year):
```
https://jhbadge.com/?noyear=true
```
[![Badge](https://jhbadge.com/?noyear=true)](https://jhbadge.com/?noyear=true)

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
- `rem` - Remote

## Reliability
The generator should be very reliable, because the domain is registered for five years and the generator itself runs on serverless and therefore automatically scaling infrastructure.

## Many thanks to...
- ...[Niklas Schroetler](https://nschroetler.de) (for the [original generator](https://github.com/Jugendhackt/GitHub-Badge-Generator) written in PHP)
- ...all in Zulip with tips and suggestions for improvement
