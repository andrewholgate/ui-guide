---
layout: page
title: Masthead
permalink: /patterns/masthead/
resource: true
categories: Patterns
---

This pattern is the single, most important way to indicate to your visitors that they are browsing WFP's online property. Below, you will find most commonly used patterns for your masthead.

Masthead patterns will vary slightly, depending on your use case, whether the website, but generally follow the same basic style.

### Public Page
These pages are always available to the public, therefore need to represent WFP's brand apropriately. Please, make sure you always use only the official logo, without any alterations.

Public pages should always use a logo with a caption "World Food Programme". For smaller screens, you can serve a narrower version of the logo, with a two-line caption.

If the vertical space is limited, you can substitute the logo with a "WFP.org" caption (using strictly white text `#ffffff` on a blue background `#2A93FC`), as per the official guidelines. Refer to the examples below.

###### Wide Layout
![Wide Layout]({{site.baseurl}}/img/pattern-masthead-public.png)

###### Sample Markup
{% highlight html %}
<!-- Masthead -->
<header class="masthead-full">
  <div class="pure-g wrapper">
    <div class="pure-u-2-3 pure-u-sm-1-3">
      <h1 class="wfp-logo">
        <a href="#" class="wfp-logo-img"><img src="{{site.baseurl}}/img/logos/wfp_logo_full@256w.png" class="logo-dark" alt="UN World Food Programme"></a>
      </h1>
    </div>
    <div class="pure-u-1-3 pure-u-sm-2-3">
      <div class="additional">
        <nav class="component header-lang">
          <ul>
            <li><a href="#">Français</a></li>
            <li><a href="#">Español</a></li>
            <li><a href="#">العربية</a></li>
          </ul>
        </nav>
        <div class="component header-cta">
          <a href="#" class="pure-button small">DONATE</a>
        </div>
        <div class="component header-search">
          <form class="pure-form">
            <input type="search" class="input-search" name="search_theme_form" id="search-form-input" placeholder="Search...">
            <button class="pure-button search small transparent"><i class="ss-icon">search</i></button>
          </form>
        </div>
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms Of Use</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
{% endhighlight %}

###### Small-screen Layout
![Small-screen Layout]({{site.baseurl}}/img/pattern-masthead-public-small.png)

###### Internal Layout
![Internal Layout]({{site.baseurl}}/img/pattern-masthead-internal-narrow.png)

{% highlight html %}
<!-- Internal Masthead -->
<header class="masthead-narrow">
  <div class="pure-g wrapper">
    <div class="pure-u-2-3 pure-u-md-1-4 logo-container">
      <h1 class="logo">
        <a href="#">IT Communities</a>
      </h1>
    </div>
    <div class="pure-u-1-3 pure-u-md-3-4 navigation">
      <nav class="main-nav">
        <ul>
          <li><a href="#" class="active">Regions</a></li>
          <li><a href="#">People</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Solutions</a></li>
          <li><a href="#">Learning</a></li>
          <li><a href="#">That Is IT</a></li>
          <li><a href="#" class="pure-button small">Sign In</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
{% endhighlight %}