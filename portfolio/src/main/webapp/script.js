// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I am 18 years old!', 'I love cats!', 'I have a heartshaped birthmark！', 'I love reading books!', 'My favorite color is pink!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function getComment() {
    fetch('/data').then(response => response.json()).then((myObject) => {
        console.log(myObject);
        const commentsContainer = document.getElementById('comment-section');
        const title = myObject.Name + " left a comment: ";
        const comment = myObject.Comment;
        commentsContainer.innerHTML += "<br>" + title + "<br>";
        commentsContainer.innerHTML += comment;
});
}

