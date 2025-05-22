// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025
// This file contains the JS functions for index.html

/**
 * This function finds the type of movie for your age
 */
// eslint-disable-next-line no-unused-vars

function findMovieType() {
  // input
  const ageNumber = document.getElementById('age-number').value

  //Save input values to localStorage
  localStorage.setItem('ageNumber', ageNumber)

  // process
  if (ageNumber >= 17) {
    // output
    document.getElementById('result').innerHTML = 
    'You can see a R movie alone.';
  } else if (ageNumber >= 13) {
    // output
    document.getElementById('result').innerHTML = 
    'You can see a PG-13 movie alone.';
  } else if (ageNumber >= 5) {
    // output
    document.getElementById('result').innerHTML = 
    'You can see a G or PG movie alone.';
  } else {
    // output
    document.getElementById('result').innerHTML = 
    'Kiddo, you are too young for most of the movies.'
  }
}

// This function loads previous values from localStorage
function loadSavedValues() {
  const savedAgeNumber = localStorage.getItem('ageNumber')
  if (savedAgeNumber) document.getElementById('age-number').value = savedAgeNumber
}

// Run this when the page is loaded
window.onload = loadSavedValues
