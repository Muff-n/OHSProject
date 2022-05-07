/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var data = window.APP_DATA;
  var buttonCounter = 0;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');

  document.body.classList.remove('desktop');
  document.body.classList.add('mobile');

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function() {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  var scenes = data.scenes.map(function(data) {
    var urlPrefix = "tiles";
    var source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(data.levels);

    var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100*Math.PI/180, 120*Math.PI/180);
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function(hotspot) {
      var element = createInfoHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create image hotspots.
    data.imageHotspots.forEach(function(hotspot) {
      var element = createImageHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view
    };
  });

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    updateSceneName(scene);
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = sanitize(scene.data.name);
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = 'resources/icons/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'resources/icons/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'resources/icons/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create slideshows.
    var content = document.createElement('div');
    content.classList.add('info-hotspot-text');
    var slides = document.createElement('div');
    slides.classList.add('w3-content', 'w3-display-container');
    slides.style.width = "90%";
    slides.style.paddingTop = "5%";
    slides.style.paddingBottom = "5%";
    for(var i=1; i < hotspot.imgCount+1; i++){
      var imgBox = document.createElement('div');
      imgBox.classList.add('w3-display-container', 'mySlides','fade');
      var imgCounter = document.createElement('div');
      imgCounter.classList.add('numbertext');
      imgCounter.innerHTML = i + " / " + hotspot.imgCount;
      imgBox.appendChild(imgCounter);
      var img = document.createElement('img');
      img.setAttribute('src',hotspot.imgPath + '/' + i +'.jpg');
      if(hotspot.captions.length != 0){
        var caption = document.createElement('div');
        caption.classList.add('captiontext');
        caption.innerHTML = hotspot.captions[i-1];
        imgBox.appendChild(caption);
      }
      imgBox.appendChild(img);
      slides.appendChild(imgBox);
    }
    var leftButton = document.createElement('a');
    leftButton.classList.add('prev');
    leftButton.setAttribute('onclick','plusDivs(-1)');
    leftButton.id = 'l'+buttonCounter;
    leftButton.innerHTML = '&#10094;'
    var rightButton = document.createElement('a');
    rightButton.classList.add('next');
    rightButton.setAttribute('onclick','plusDivs(1)');
    rightButton.id = 'r'+buttonCounter;
    rightButton.innerHTML = '&#10095;'
    buttonCounter++;

    slides.appendChild(leftButton);
    slides.appendChild(rightButton);
    content.appendChild(slides);

    var facts = document.createElement('div');
    var factsTitle = document.createElement('h2');
    factsTitle.innerHTML = hotspot.title + " Facts";
    factsTitle.style.color = "#000";
    factsTitle.style.position = "relative";
    factsTitle.style.paddingTop = "6%";
    factsTitle.style.textAlign = "center";
    factsTitle.style.fontFamily = "OrpheusPro-Bold, Linden Hill, serif";
    factsTitle.style.textDecoration = "underline";
    factsTitle.style.borderTop = "1px solid black";
    factsTitle.style.fontSize = "24px";
    facts.appendChild(factsTitle);
    var factsList = document.createElement('ul');
    factsList.classList.add('a');
    //Create text stuff
    for(var i = 0; i < hotspot.facts.length; i++){
      var listItem  = document.createElement('li');
      listItem.innerHTML = hotspot.facts[i];
      factsList.appendChild(listItem);
    }
    facts.appendChild(factsList);
    
    content.appendChild(facts);

    //Create Living History
    if(hotspot.speechCap.length != 0){    
    var history = document.createElement('div');
    var historyTitle = document.createElement('h2');
    historyTitle.innerHTML = "Living History";
    historyTitle.style.color = "#000";
    historyTitle.style.position = "relative";
    historyTitle.style.paddingTop = "6%";
    historyTitle.style.textAlign = "center";
    historyTitle.style.fontFamily = "OrpheusPro-Bold, Linden Hill, serif";
    historyTitle.style.textDecoration = "underline";
    historyTitle.style.borderTop = "1px solid black";
    historyTitle.style.fontSize = "24px";
    history.appendChild(historyTitle);

    for(var i = 0; i < hotspot.speechCap.length; i++){
      var container = document.createElement('figure');
      container.style.border = "1px solid black";
      container.style.borderRadius = "70px";
      container.style.position = "relative";
      container.style.top = "25px";
      if(i == 1){
        container.style.top = "50px";
      }
      var histCap = document.createElement('figcaption');
      histCap.innerHTML = "Hear " + hotspot.speechCap[i] + " speak!";
      histCap.style.paddingTop = "5px";
      histCap.style.paddingBottom = "2%";
      histCap.style.fontWeight = "bold";
      var histAudio = document.createElement('audio');
      histAudio.setAttribute("controls","");
      var audioSource = document.createElement('source');
      audioSource.setAttribute("src",hotspot.audioPath+(i+1)+".mp3");
      audioSource.setAttribute("type","audio/mpeg");
      histAudio.appendChild(audioSource);
      var transcript = document.createElement('a');
      var containerCap = document.createElement('figcaption');
      transcript.setAttribute("href",hotspot.scripts[i]);
      transcript.innerHTML = "Transcript";
      transcript.classList.add('scriptCap');
      containerCap.appendChild(transcript);
      container.appendChild(histCap);
      container.appendChild(histAudio);
      container.appendChild(containerCap);
      history.appendChild(container);
    }

    content.appendChild(history);
  }

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(content);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggleClose = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    var toggleInvisible = function() {
      var openBubbles = document.getElementsByClassName("info-hotspot-modal visible")
      for (var i=0; i < openBubbles.length; i++){
        openBubbles[i].classList.toggle('visible');
      }
    };

    var toggle = function() {
      toggleInvisible();
      toggleClose();
    };

    // Show content when hotspot is clicked.
    var newSceneLinks = document.getElementsByClassName("hotspot link-hotspot");
    for(var i=0; i < newSceneLinks.length; i++)
      newSceneLinks[i].addEventListener('click', toggleInvisible);
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggleClose);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  function createImageHotspotElement(hotspot) {
   
    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot header.
    var header = document.createElement('span');
    header.classList.add('info-hotspot-header');
    header.style.display = "block";

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'resources/icons/image.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Construct header element.
    header.appendChild(iconWrapper);

    // Image link.
    var link = document.createElement('a');
    link.href = hotspot.img;
    link.appendChild(header);
    wrapper.appendChild(link);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    return wrapper;
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  switchScene(scenes[0]);
})();
