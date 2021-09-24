# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aj.smartnvm/lotide`

**Require it:**

`const _ = require('@aj.smartnvm/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual([array_1], [array_2])`: compares two arrays and return results
* `assertEqual(a,b)`: compares two values and return results
* `assertObjectsEqual({object_1}, {object_2})`: compares two objects 

* `flattenArray([array])`: takes a nest array and return falt array
* `head([array])`: return first element  of an array
* `middle([array])`: returns an array with a single [middle] element for arrays with odd number of elements. returns an array with two  [middle_1, middle_2] elements for array with even number of elements 
* `tail([array]])`: return [last] element of an array 

* `countLetters('string')`: returns an object with letter count for a given string
* `letterPositions('string')`: return an object with letter position for a given string

* `map([array], cbFunction)`: performs a function on each element of array and returns the new array
* `findKey({object}, cbFunction)`: returns object key that matches function call
* `findKeyByValue({object}, value)`: return object key matching the value
