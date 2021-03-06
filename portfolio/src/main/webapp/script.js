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

async function getComment() {
    fetch('/data').then(response => response.json()).then((myObject) => {
        const commentsContainer = document.getElementById('recent-comments');
        myObject.forEach((comment) => {
            commentsContainer.appendChild(createDivElement(comment.name, comment.comment));
        });
});
}

/** Creates a <div> element containing text. */
function createDivElement(text1, text2) {
  const divElement = document.createElement('div');
  divElement.setAttribute("class", "each-comment");
  var words = " left a comment: ";
  divElement.innerText = text1 + words + text2;
  return divElement;
}

function fetchImageURLs() {
    getBlobstoreUrl();
    fetch('/image-data').then(response => response.json()).then((images) => {
        const imagesContainer = document.getElementById('all-images');
        imagesContainer.innerHTML = '';
        images.forEach((image) => {
            imagesContainer.appendChild(createDivImageElement(image));
        });
      });
}

function getBlobstoreUrl() {
    fetch('/blog').then((response) => {
        return response.text();
    })
    .then((imageUrl) => {
        const container = document.getElementById('image-form');
        container.action = imageUrl;
        container.classList.remove('hidden');
      });
}


/**i thought i was allowed to have two promises/fetch functions? */

/**async function displayImages() {
    fetch('/data').then(response => response.json()).then((myObject) => {
        const commentsContainer = document.getElementById('recent-comments');
        myObject.forEach((comment) => {
            commentsContainer.appendChild(createDivElement(comment.name, comment.comment));
        });
});
}*/

function createDivImageElement(image) {
  const divElement = document.createElement('div');
  divElement.setAttribute("class", "each-image");
  divElement.innerHTML = "<img src=\"" + image + "\" />";
  return divElement;
}

