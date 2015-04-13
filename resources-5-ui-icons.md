---
layout: page
title: UI Icons
permalink: /resources/ui-icons/
resource: true
categories: Resources
---

The Office for the Coordination of Humanitarian Affairs (OCHA) has established icons to represent humanitarian assistance and to ensure consistency in use, these have been shared widely with UN agencies and NGOs. On this section we have listed those OCHA icons that WFP uses most frequently in addition to a few WFP-specific ones.

Each icon is available in either a positive (transparent) or a negative (solid) background, to suit your needs. You can download the whole icon set in a PNG format or the EPS source file below:

<div class="pure-g">
  <div class="pure-u-3-4"></div>
  <div class="pure-u-1-4 edit-menu">
    <ul class="tabs">
      <li><a href="#" id="js-view-grid" class="active">Grid</a></li>
      <li><a href="#" id="js-view-list">List</a></li>
    </ul>
  </div>
</div>

<ul class="pure-g inline-grid icons" id="js-view">
{% loop_directory directory:img/ui/svg iterator:image filter:*.svg sort:ascending %}
  <li class="item pure-u-1-4 pure-u-md-1-8">
    <div class="desc">
      <div class="desc-img"><img src="{{ site.baseurl }}/img/ui/svg/{{ image }}.svg"></div>
      <div class="desc-label">{{ image }}</div>
    </div>
  </li>
{% endloop_directory %}
</ul>

<div class="pure-g preview plain">
  <div class="pure-u-1 pure-u-md-1-2">
    <a class="pure-button" href="{{ site.baseurl }}/assets/ui-icons-png.zip">PNG (zip, ~48 KB)</a>
  </div>
  <div class="pure-u-1 pure-u-md-1-2">
    <a class="pure-button" href="{{ site.baseurl }}/assets/ui-icons-svg.zip">SVG (zip, ~41 KB)</a>
  </div>
</div>