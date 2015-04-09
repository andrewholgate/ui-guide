---
layout: page
title: Toolkit
permalink: /components/toolkit/
resource: true
categories: Components
---

Making sure your pages adhere to WFP UI Guidelines, we have prepared a set of tools and snippets, to help you kickstart your projects.

### Fonts
To use our recommended fonts, you need to load them first from our Content Delivery Network.

{% highlight html %}
<link rel="stylesheet" href="http://cdn.wfp.org/libraries/webfonts/lato/lato.css">
<link rel="stylesheet" href="http://cdn.wfp.org/libraries/webfonts/aleo/aleo.css">
{% endhighlight %}

###### Sans-serif
{% highlight css %}
font-family: "lato", sans-serif;
{% endhighlight %}

###### Slab-serif
{% highlight css %}
font-family: "aleo", serif;
{% endhighlight %}

### CSS/SCSS Toolkit
To make sure your designs follow our guidelines with ease, we've created a dedicated CSS Toolkit, which you can reference in your web pages and applications. You can also download and use it locally, if your site is note able to access the Internet.

If you are working with SCSS, the toolkit you can download below contains everything you need in both CSS and SCSS formats, with the most important variables, mixins and defaults (such as media queries or colour definitions), which you can use for your themes and websites.

{% highlight html %}
<link href="http://cdn.wfp.org/libraries/wfpui/master/pure/pure-min.css" rel="stylesheet">
<!--[if lte IE 8]>
<link href="http://cdn.wfp.org/libraries/wfpui/master/pure/grids-responsive-old-ie-min.css" rel="stylesheet">
<![endif]-->
<!--[if gt IE 8]><!-->
<link href="http://cdn.wfp.org/libraries/wfpui/master/pure/grids-responsive-min.css" rel="stylesheet">
<!--<![endif]-->
<link href="http://cdn.wfp.org/libraries/wfpui/master/wfpui.min.css" rel="stylesheet">
{% endhighlight %}

<div class="preview plain">
  <p>
    <a class="pure-button" href="http://cdn.wfp.org/libraries/wfpui/wfp-ui-kit-master.zip" download>WFP UI Kit (ZIP)</a>
  </p>
</div>

### Favicons
Favicons are small icons that are being often displayed in the browser address bar, stored with bookmarked pages, etc. You should only use the officialy approved favicons.

Add the following lines to the `<head>` section of your page:

{% highlight html %}
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="http://cdn.wfp.org/apple-touch-icon-152x152-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="http://cdn.wfp.org/apple-touch-icon-144x144-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="http://cdn.wfp.org/apple-touch-icon-120x120-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://cdn.wfp.org/apple-touch-icon-114x114-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="http://cdn.wfp.org/apple-touch-icon-76x76-precomposed.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="http://cdn.wfp.org/apple-touch-icon-72x72-precomposed.png" />
<link rel="apple-touch-icon-precomposed" href="http://cdn.wfp.org/apple-touch-icon-precomposed.png" />
<link rel="shortcut icon" href="http://cdn.wfp.org/favicon.ico" />
{% endhighlight %}

If your application or website is not able to connect to the Internet, you can use our [favicon offline kit]({{site.baseurl}}/assets/favicon.zip) to host favicons locally. Download the ZIP file, unpack it and place its contents in the root of your site.