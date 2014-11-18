---
layout: page
title: Breadcrumbs
permalink: /patterns/breadcrumbs/
resource: true
categories: Patterns
---

This is a simple and minimal way to give visitors a hint at your website structure. It also provides an important context in relation to visitor's current location within your content.

Breadcrumbs should be displayed just below the masthead, possibly on their own, with appropriate spacing to stay visible.

<div class="notice">
  <h6 class="title">Notice</h6>
  <p>Please, ensure the breadcrumbs are only ever used against a <strong>white background</strong> to maintain the appropriate level of contrast. This is important to make sure the page is readable and accessible.</p>
</div>

###### Preview
<div class="preview plain">
  <ul class="breadcrumbs">
    <li class="first"><a href="#" class="home"><img src="{{site.baseurl}}/img/icons/home_dark.png" width="10" height="10"></a></li>
    <li><a href="#">Our Work</a></li>
    <li><a href="#">Procurement</a></li>
    <li class="last">Food Tender Awards</li>
  </ul>
</div>

###### Sample Markup
{% highlight html %}
<ul class="breadcrumbs">
  <li class="first"><a href="#" class="home"><img src="/img/icons/home_dark.png" width="10" height="10"></a></li>
  <li><a href="#">Our Work</a></li>
  <li><a href="#">Procurement</a></li>
  <li class="last">Food Tender Awards</li>
</ul>
{% endhighlight %}

###### Usage
To use breadcrumbs on your pages, simply include `navigation.css` from the [WFP UI Toolkit]({{site.url}}/components/branding-toolkit/), make sure the markup correctly follows the example above.